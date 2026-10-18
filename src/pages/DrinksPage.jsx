import { useState } from "react";
import PageTitle from "../components/PageTitle";
import DrinksSearch from "../components/DrinksSearch";
import DrinksList from "../components/DrinksList";
import Paginator from "../components/Paginator";

const DrinksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section>
      <PageTitle>Drinks</PageTitle>
      <DrinksSearch />
      <DrinksList drinks={[]} />
      <Paginator
        currentPage={currentPage}
        totalPages={0}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default DrinksPage;
