import { categories } from "../../../../data/category.js";

const CategoryFilters = () => {
  return (
    <div>
      <h3>Filtrar por categoria</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilters;
