import { Routes, Route, Navigate } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import SharedLayout from "./layouts/SharedLayout";
import HomePage from "./pages/HomePage";
import DrinksPage from "./pages/DrinksPage";
import DrinkPage from "./pages/DrinkPage";
import AddDrinkPage from "./pages/AddDrinkPage";
import MyDrinksPage from "./pages/MyDrinksPage";
import FavoriteDrinksPage from "./pages/FavoriteDrinksPage";

// import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="drink/:drinkId" element={<DrinkPage />} />
        <Route path="add" element={<AddDrinkPage />} />
        <Route path="my" element={<MyDrinksPage />} />
        <Route path="favorites" element={<FavoriteDrinksPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
