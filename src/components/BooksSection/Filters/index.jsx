import { useContext } from "react";
import CategoryFilters from "./CategoryFilters";
import PriceFilters from "./PriceFilters";
import SearchForm from "./SearchForm";
import { BookContext } from "../../../providers/BookContext";
import styles from "../Filters/filters.module.scss"

const Filters = () => {

  const { cleanFilters } = useContext(BookContext);

  return (
    <div className={styles.filters}>
      <SearchForm />
      <CategoryFilters />
      <PriceFilters />
      <button onClick={cleanFilters}>Limpar filtro</button>
    </div>
  );
};

export default Filters;
