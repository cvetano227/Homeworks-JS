export class StringUtils {
  constructor() {
    throw new Error("StringUtils cannot be instantiated");
  }

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static reverse(str) {
    return str.split("").reverse().join("");
  }

  static wordCount(str) {
    return str.trim().split(/\s+/).length;
  }

  static truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + "...";
  }
}
