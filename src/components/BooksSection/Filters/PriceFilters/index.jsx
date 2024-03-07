import { useContext } from "react";
import { BookContext } from "../../../../providers/BookContext";
import styles from "../PriceFilters/price.module.scss"

const PriceFilters = () => {

  const { min, setMin, max, setMax } = useContext(BookContext);

  return (
    <div className={styles.div}>
      <h3>Filtrar por preço</h3>
      <div className={styles.divInput}>
        <label htmlFor="min">Minímo (R$)</label>
        <input
          type="number"
          placeholder="25"
          name="min"
          id="min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          min="1"
        />
      </div>
      <div className={styles.divInput}>
        <label htmlFor="max">Maxímo (R$)</label>
        <input
          type="number"
          placeholder="100"
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
