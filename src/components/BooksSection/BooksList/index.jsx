import BookCard from "./BookCard";
import { books } from "../../../data/books.js";

const BooksList = ({ booksResult, search }) => {
  return (
    <div>
      <span>Livros listados: {booksResult.length}</span>
      {search ? <p>Resultados de busca para: {search}</p> : null}
      {booksResult.length > 0 ? (
        <ul>
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
