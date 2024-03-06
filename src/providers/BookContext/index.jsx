import { createContext, useState } from "react";
import { books } from "../../data/books.js";

export const BookContext = createContext({});

export const BookProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const booksResult = books.filter((book) => {
    const searchFilter =
      search === ""
        ? true
        : book.name.toLowerCase().includes(search.toLowerCase()) ||
          book.category.toLowerCase().includes(search.toLowerCase());

    const categoryFilter = category === "" ? true : book.category === category;

    const minPriceFilter = min === "" ? true : book.price >= Number(min);
    const maxPriceFilter = max === "" ? true : book.price <= Number(max);

    return searchFilter && categoryFilter && minPriceFilter && maxPriceFilter;
  });

  const cleanFilters = () => {
    setSearch("");
    setCategory("");
    setMin("");
    setMax("");
  };

  return (
    <BookContext.Provider
      value={{
        search,
        setSearch,
        setCategory,
        min,
        setMin,
        max,
        setMax,
        cleanFilters,
        booksResult,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
