import Header from "./component/Layout/Header";
import MealsSummary from "./component/Meals/MealsSummary";
import AvailableMeals from "./component/Meals/AvailableMeals";
import CartProvider from "./component/store/CartProvider";
function App() {
  return (
    <CartProvider>
      <Header></Header>
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
