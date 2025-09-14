import PizzaLogo from "../assets/pizza.png";
import { TPizza } from "../models/Pizza.model";

type PropsPizzaCard = TPizza & { handleDeletePizza: (id: number) => void };
const PizzaCard = ({ handleDeletePizza, id, name, price }: PropsPizzaCard) => {
  return (
    <div className="card-items mt-6">
      <img className="card-image-pizza" src={PizzaLogo} alt="" />
      <div style={{ height: "50%", width: "100%" }}></div>
      <div className="card-content">
        <div className="flex-basic-between">
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>
              {name}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "300",
                color: "#fff",
                marginTop: "5px",
              }}
            >
              {" "}
              Price: {price}$
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center w-1/3 mt-2 bg-red-700 border-2 border-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-red-500"
        onClick={() => handleDeletePizza(id)}
      >
        Delete Pizza
      </div>
    </div>
  );
};
export default PizzaCard;
