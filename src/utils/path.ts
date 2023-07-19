export const importUrl = (relativePath: string) => {
  return new URL(relativePath, import.meta.url).href;
};
