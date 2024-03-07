import { useContext, useState } from "react";
import { BookContext } from "../../../../providers/BookContext";
import styles from "../SearchForm/search.module.scss";

const SearchForm = () => {

  const { setSearch } = useContext(BookContext);

  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };
  return (
    <form onSubmit={submit} className={styles.form}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
