import { Book } from "./Book.js";

export class AudioBook extends Book {
  constructor(title, year, genre, author, pages, narrator) {
    super(title, year, genre, author, pages);
    this.narrator = narrator;
  }

  describe() {
    return `${super.describe()} | Narrator: ${this.narrator}`;
  }
}
