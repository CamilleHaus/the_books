import BooksSection from "../../components/BooksSection";
import DefaultTemplate from "../../components/DefaultTemplate";
import TitleSection from "../../components/TitleSection"

const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <TitleSection />
        <BooksSection />
      </DefaultTemplate>
    </>
  );
};

export default HomePage;
