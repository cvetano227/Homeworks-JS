export class MediaItem {
  static count = 0;

  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;

    MediaItem.count++;
  }

  describe() {
    return `${this.title} (${this.year}) - ${this.genre}`;
  }
}
