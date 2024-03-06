import { useState } from "react";

const SearchForm = ({ setSearch }) => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
