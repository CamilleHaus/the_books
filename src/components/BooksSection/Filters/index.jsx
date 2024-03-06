import CategoryFilters from "./CategoryFilters";
import PriceFilters from "./PriceFilters";
import SearchForm from "./SearchForm";

const Filters = ({setSearch, cleanFilters}) => {
  return (
        <div>
            <SearchForm setSearch={setSearch}/>
            <CategoryFilters />
            <PriceFilters />
            <button onClick={cleanFilters}>Limpar filtro</button>
        </div>
  );
};

export default Filters;
