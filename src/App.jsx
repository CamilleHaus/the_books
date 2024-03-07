import HomePage from "./pages/HomePage";
import { BookProvider } from "./providers/BookContext";
import "../src/styles/index.scss";

const App = () => {
  return (
    <BookProvider>
      <HomePage />
    </BookProvider>
  );
};

export default App;
