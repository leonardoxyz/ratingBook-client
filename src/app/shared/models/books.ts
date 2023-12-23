export class Book {
  id!: string | null;
  title: string;
  author: string;
  rating: number;
  libraryId: string;

  constructor(title: string, author: string, rating: number, libraryId: string) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.libraryId = libraryId;
  }
}
