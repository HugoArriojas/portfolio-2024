import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical';

interface SerializedLexicalNodeWithChildren extends SerializedLexicalNode {
  children?: Array<{
    text?: string;
    [key: string]: unknown;
  }>;
}

export const hasRichTextContent = (data: SerializedEditorState<SerializedLexicalNode>) => {
  if (!data || !data.root || !data.root.children) return false;
  return data.root.children.some((child) => {
    const typedChild = child as SerializedLexicalNodeWithChildren;
    return typedChild.children?.some(
      (textNode) => textNode.text && textNode.text.trim().length > 0,
    );
  });
};
