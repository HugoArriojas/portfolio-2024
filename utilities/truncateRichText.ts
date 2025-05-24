import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

interface LexicalTextNode {
  type: string;
  text?: string;
  children?: LexicalTextNode[];
  [key: string]: unknown;
}

/**
 * Truncates rich text content while preserving its structure and formatting
 * @param data The SerializedEditorState to truncate
 * @param maxLength Maximum number of characters to include (default: 380)
 * @param returnString Whether to return a string or an object (default: false)
 * @returns A new SerializedEditorState with truncated content
 */
export function truncateRichText(
  data?: SerializedEditorState | null,
  maxLength: number = 380,
  returnString: boolean = false,
): SerializedEditorState | string | undefined {
  if (!data || !data.root || !data.root.children) return returnString ? '' : undefined;

  const truncatedData = JSON.parse(JSON.stringify(data));
  const state = { charCount: 0, isTruncated: false };

  truncatedData.root.children = processNodes(truncatedData.root.children, maxLength, state);

  // Add ellipsis paragraph if we hit the limit but didn't add ellipsis to text
  if (state.charCount >= maxLength && !state.isTruncated) {
    truncatedData.root.children.push({
      type: 'paragraph',
      children: [{ text: '...' }],
    });
  }

  if (returnString) {
    return truncatedData.root.children[0]?.children?.[0]?.text || '';
  }

  return truncatedData;
}

/**
 * Processes nodes recursively and truncates text as needed
 */
function processNodes(
  nodes: LexicalTextNode[],
  maxLength: number,
  state: { charCount: number; isTruncated: boolean },
): LexicalTextNode[] {
  const result: LexicalTextNode[] = [];

  for (const node of nodes) {
    if (state.isTruncated) break;

    if (node.type === 'text' && typeof node.text === 'string') {
      const remainingChars = maxLength - state.charCount;
      if (node.text.length + state.charCount > maxLength) {
        node.text = node.text.slice(0, remainingChars) + '...';
        state.isTruncated = true;
      }
      state.charCount += node.text.length;
      result.push(node);
    } else if (node.children && node.children.length > 0) {
      const processedNode = { ...node };
      processedNode.children = processNodes(node.children, maxLength, state);
      result.push(processedNode);
    } else {
      result.push(node);
    }
  }

  return result;
}
