import CategoryFilters from "./CategoryFilters";
import PriceFilters from "./PriceFilters";
import SearchForm from "./SearchForm";

const Filters = ({
  setSearch,
  cleanFilters,
  setCategory,
  min,
  setMin,
  max,
  setMax,
}) => {
  return (
    <div>
      <SearchForm setSearch={setSearch} />
      <CategoryFilters setCategory={setCategory} />
      <PriceFilters min={min} setMin={setMin} max={max} setMax={setMax} />
      <button onClick={cleanFilters}>Limpar filtro</button>
    </div>
  );
};

export default Filters;
