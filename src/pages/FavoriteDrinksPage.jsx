import PageTitle from "../components/PageTitle";
import DrinksList from "../components/DrinksList";
import Paginator from "../components/Paginator";

const FavoriteDrinksPage = () => {
  return (
    <section>
      <PageTitle>Favorites</PageTitle>
      <DrinksList drinks={[]} />
      <Paginator currentPage={1} totalPages={0} />
    </section>
  );
};

export default FavoriteDrinksPage;
