const SimpleList = (props) => {
  return (
    <div>
      {props.food.map((plates) => {
        return (
          <>
            <p>{plates.name}</p>
            <img src={plates.image} alt={plates.name} />
          </>
        );
      })}
    </div>
  );
};
export default SimpleList;
