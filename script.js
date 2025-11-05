function firstWord(str) {
  str = str.trimStart();   // remove leading spaces
  if (str === "") return "";
  const idx = str.indexOf(" ");
  return idx === -1 ? str : str.substring(0, idx);
}
