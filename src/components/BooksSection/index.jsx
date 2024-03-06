import BooksList from "./BooksList";
import Filters from "./Filters";

const BooksSection = () => {

  return (
    <section>
      <Filters />
      <BooksList />
    </section>
  );
};

export default BooksSection;
