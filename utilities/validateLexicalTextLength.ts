type SimplifiedLexicalChild = {
  children?: SimplifiedLexicalChild[];
  text?: string;
};

type SimplifiedLexical = {
  root: {
    children: SimplifiedLexicalChild[];
  };
};

/**
 * Extracts all of the text elements from the lexical editor JSON format
 * - Since this return the full text minus formatting, it can be used for
 *   length validation
 * @param children
 * @returns
 */
export const getTextFromLexicalEditor = (children: SimplifiedLexicalChild[]) => {
  const text: string[] = children.map((child) => {
    if (child.children) {
      return getTextFromLexicalEditor(child.children);
    }
    return child.text?.trim() ?? '';
  });

  return text.join(' ');
};

/**
 * Validates the text in the lexical editor to ensure it is shorter than the length prop
 * @param value
 * @param length
 * @returns
 */
export const validateLexicalTextLength = (value: SimplifiedLexical, length: number) => {
  const text = getTextFromLexicalEditor(value.root.children);
  return text.length > length ? 'Content must be less than 400 characters.' : true;
};
