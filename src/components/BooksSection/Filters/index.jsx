import CategoryFilters from "./CategoryFilters";
import PriceFilters from "./PriceFilters";
import SearchForm from "./SearchForm";

const Filters = ({setSearch, cleanFilters, setCategory}) => {
  return (
        <div>
            <SearchForm setSearch={setSearch}/>
            <CategoryFilters setCategory={setCategory}/>
            <PriceFilters />
            <button onClick={cleanFilters}>Limpar filtro</button>
        </div>
  );
};

export default Filters;
