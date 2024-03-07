import BookCard from "./BookCard";
import { useContext } from "react";
import { BookContext } from "../../../providers/BookContext";
import styles from "../BooksList/bookList.module.scss";

const BooksList = () => {
  
  const { search, booksResult } = useContext(BookContext);

  return (
    <div className={styles.div}>
      <span className={styles.span}>Livros listados: {booksResult.length}</span>
      {search ? <p>Resultados de busca para: {search}</p> : null}
      {booksResult.length > 0 ? (
        <ul className={styles.ul}>
          {booksResult.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado</p>
      )}
    </div>
  );
};

export default BooksList;
