import HomePage from "./pages/HomePage";
import { BookProvider } from "./providers/BookContext";

const App = () => {
  return (
    <BookProvider>
      <HomePage />
    </BookProvider>
  );
};

export default App;
