import BooksList from "./BooksList";
import Filters from "./Filters";
import { useState } from "react";
import { books } from "../../data/books.js";

const BooksSection = () => {
  const [search, setSearch] = useState("");

  const booksResult = books.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase())
  );

  const bookList = search ? booksResult : books;

  const cleanFilters = () => {
    setSearch("");
  }

  return (
    <section>
      <Filters setSearch={setSearch} cleanFilters={cleanFilters}/>
      <BooksList search={search} bookList={bookList}/>
    </section>
  );
};

export default BooksSection;
