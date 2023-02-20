export const toRemoveLastWord = (text: string) => {
  return text
    .split("")
    .slice(0, text.length - 1)
    .join("");
};
