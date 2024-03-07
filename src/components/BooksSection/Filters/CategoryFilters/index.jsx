import { useContext } from "react";
import { categories } from "../../../../data/category.js";
import { BookContext } from "../../../../providers/BookContext/index.jsx";
import styles from "../CategoryFilters/category.module.scss"

const CategoryFilters = () => {

  const { setCategory } = useContext(BookContext);

  return (
    <div className={styles.div}>
      <h3>Filtrar por categoria</h3>
      <ul>
        {categories.map((category) => (
          <li className={styles.li} key={category.id} onClick={() => setCategory(category.name)}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilters;
