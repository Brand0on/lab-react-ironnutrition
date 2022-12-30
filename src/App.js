import foods from './foods.json';
//import SimpleList from './components/SimpleList';
import FoodBox from './components/FoodBox';

import AddFoodForm from './components/AddFoodForm';

function App() {
  return (
    <div className="App">
      <AddFoodForm food={foods} />
    </div>
  );
}

export default App;
