import { pizzaProps } from "../data/pizzaProps";

type Props = {
  pizzaData: pizzaProps;
};

const Pizza = ({ pizzaData }: Props) => {
  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT" : pizzaData.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
