import { MediaItem } from "./MediaItem.js";

export class Podcast extends MediaItem {
  constructor(title, year, genre, host, episodes) {
    super(title, year, genre);
    this.host = host;
    this.episodes = episodes;
  }

  describe() {
    return `${super.describe()} | Host: ${this.host} | Episodes: ${this.episodes}`;
  }

  addEpisode() {
    this.episodes++;
  }
}
