import BooksList from "./BooksList";
import Filters from "./Filters";
import styles from "../BooksSection/booksSection.module.scss"

const BooksSection = () => {

  return (
    <section className={styles.section}>
      <Filters />
      <BooksList />
    </section>
  );
};

export default BooksSection;
