import styles from "../BookCard/bookCard.module.scss";

const BookCard = ({ book }) => {
  return (
    <li className={styles.li}>
      <div>
        <h3>{book.name}</h3>
        <p>{book.category}</p>
      </div>
      <span>
        {book.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </li>
  );
};

export default BookCard;
