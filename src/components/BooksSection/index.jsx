import BooksList from "./BooksList";
import Filters from "./Filters";
import { useState } from "react";
import { books } from "../../data/books.js";

const BooksSection = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const booksResult = books.filter((book) => {
    const searchFilter =
      search === ""
        ? true
        : book.name.toLowerCase().includes(search.toLowerCase()) ||
          book.category.toLowerCase().includes(search.toLowerCase());

    const categoryFilter = category === "" ? true : book.category === category;

    return searchFilter && categoryFilter;
  });

  const cleanFilters = () => {
    setSearch("");
    setCategory("");
  };

  return (
    <section>
      <Filters
        setSearch={setSearch}
        cleanFilters={cleanFilters}
        setCategory={setCategory}
      />
      <BooksList search={search} booksResult={booksResult} />
    </section>
  );
};

export default BooksSection;
