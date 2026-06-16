import { MediaItem } from "./MediaItem.js";

export class Book extends MediaItem {
  constructor(title, year, genre, author, pages) {
    super(title, year, genre);
    this.author = author;
    this.pages = pages;
  }

  describe() {
    return `${super.describe()} | Author: ${this.author} | Pages: ${this.pages}`;
  }

  isClassic() {
    return new Date().getFullYear() - this.year > 50;
  }
}
