import { MediaItem } from "./MediaItem.js";
import { Book } from "./Book.js";
import { Podcast } from "./Podcast.js";
import { StringUtils } from "./StringUtils.js";

const book1 = new Book("The Hobbit", 1937, "Fantasy", "J.R.R. Tolkien", 310);
const book2 = new Book("New Book", 2010, "Drama", "John Doe", 200);

const podcast1 = new Podcast("Tech Talk", 2022, "Technology", "Alice", 50);

console.log(book1.describe());
console.log(book2.describe());
console.log(podcast1.describe());

console.log(book1.isClassic());
console.log(book2.isClassic());

podcast1.addEpisode();
console.log(podcast1.describe());

console.log(MediaItem.count);

console.log(StringUtils.capitalize("hello world"));
console.log(StringUtils.reverse("javascript"));
console.log(StringUtils.wordCount("this is a test sentence"));
console.log(StringUtils.truncate("this is a very long sentence", 10));
