import { Card, Col, Button } from 'antd';

import { useState } from 'react';

const AddFoodForm = (props) => {
  const [word, setWord] = useState('');
  //let allFood = props;

  const [allFoods, setAllFoods] = useState(props.food);

  const [data, setData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChangeData = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    //prevent the page from reload
    event.preventDefault();

    //setting the form to the original state
    setData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
    //pushing the new recipe into the allFood array
    allFoods.push(data);
  };

  const handleDeletion = (foodName) => {
    const remainFoods = allFoods.filter((oneFood) => {
      return oneFood.name !== foodName;
    });

    setAllFoods(remainFoods);
  };

  const searchingFood = allFoods.filter((food) => {
    return food.name.toLowerCase().includes(word.toLowerCase());
  });

  console.log(searchingFood);

  return (
    <>
      <input
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <div>
        <Col>
          {searchingFood.map((value) => {
            return (
              <>
                <Card
                  title={value.name}
                  style={{ width: 230, height: 300, margin: 10 }}
                >
                  <img src={value.image} height={60} alt={value.name} />
                  <p>Calories: {value.calories}</p>
                  <p>Servings: {value.servings}</p>
                  <p>
                    <b>Total Calories: {value.calories * value.servings} </b>{' '}
                    kcal
                  </p>
                  <Button
                    type="primary"
                    onClick={() => {
                      handleDeletion(value.name);
                    }}
                  >
                    {' '}
                    Delete{' '}
                  </Button>
                </Card>
              </>
            );
          })}
        </Col>
      </div>
      <form>
        <label id="input-name">Name:</label>
        <input
          type="text"
          id="input-name"
          name="name"
          placeholder="First and Last Name"
          value={data.name}
          onChange={handleChangeData}
        />
        <br />
        <label id="input-image">Image-URL</label>
        <input
          type="text"
          id="input-image"
          name="image"
          placeholder="Image-URL"
          value={data.image}
          onChange={handleChangeData}
        />
        <br />
        <label id="input-calories">Calories</label>
        <input
          type="text"
          id="input-calories"
          name="calories"
          placeholder="Calories"
          value={data.calories}
          onChange={handleChangeData}
        />
        <br />
        <label id="input-servings">Servings</label>
        <input
          type="text"
          id="input-servings"
          name="servings"
          placeholder="servings"
          value={data.servings}
          onChange={handleChangeData}
        />
        <Button onClick={handleSubmit}>Create new recipe</Button>
        <Button type="primary" onClick={handleDeletion}>
          delete
        </Button>
      </form>
    </>
  );
};

export default AddFoodForm;
