import { useContext } from "react";
import { BookContext } from "../../../../providers/BookContext";

const PriceFilters = () => {

  const { min, setMin, max, setMax } = useContext(BookContext);

  return (
    <div>
      <h3>Filtrar por preço</h3>
      <div>
        <label htmlFor="min">Minímo R$</label>
        <input
          type="number"
          name="min"
          id="min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          min="1"
        />
      </div>
      <div>
        <label htmlFor="max">Maxímo R$</label>
        <input
          type="number"
          name="max"
          id="max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          min="1"
        />
      </div>
    </div>
  );
};

export default PriceFilters;
