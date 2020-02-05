interface TranslitAlphabet {
  [propName: string]: string;
}
class TranslitPassport {
  private letters = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "e",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "i",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "ч": "ch",
    "ц": "ts",
    "щ": "shch",
    "ш": "sh",
    "ъ": "ie",
    "ы": "y",
    "э": "e",
    "ю": "iu",
    "я": "ia",
    "ь": ""
  } as TranslitAlphabet;

  public cyrillicToLatin(word: string): string {
    let newStr = "";
    for (const char of word) {
      const isUpperCase = char === char.toUpperCase();
      const translitChar = this.letters[char.toLowerCase()];
      if (translitChar === undefined) {
        newStr += char;
      } else {
        newStr += isUpperCase ? translitChar.toUpperCase() : translitChar;
      }
    }
    return newStr;
  }
}

export default new TranslitPassport();