import PageTitle from "../components/PageTitle";
import DrinksList from "../components/DrinksList";
import Paginator from "../components/Paginator";

const MyDrinksPage = () => {
  return (
    <section>
      <PageTitle>My drinks</PageTitle>
      <DrinksList drinks={[]} />
      <Paginator currentPage={1} totalPages={0} />
    </section>
  );
};

export default MyDrinksPage;
