import { useContext } from "react";
import CategoryFilters from "./CategoryFilters";
import PriceFilters from "./PriceFilters";
import SearchForm from "./SearchForm";
import { BookContext } from "../../../providers/BookContext";

const Filters = () => {

  const { cleanFilters } = useContext(BookContext);

  return (
    <div>
      <SearchForm />
      <CategoryFilters />
      <PriceFilters />
      <button onClick={cleanFilters}>Limpar filtro</button>
    </div>
  );
};

export default Filters;
