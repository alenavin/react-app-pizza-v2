import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Arriva",
    ingredients: "Chicken, peperoni, peper, burger sause",
    price: 10,
    photoName: "pizzas/arriva.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Arriva",
    ingredients: "Chicken, peperoni, peper, burger sause",
    price: 10,
    photoName: "pizzas/aa.png",
    soldOut: false,
  },
  {
    name: "ARRIVA",
    ingredients: "Chicken, peperoni, peper, burger sause",
    price: 10,
    photoName: "pizzas/aaa.png",
    soldOut: false,
  },
  {
    name: "The Arriva",
    ingredients: "Chicken, peperoni, peper, burger sause",
    price: 10,
    photoName: "pizzas/aaaa.png",
    soldOut: false,
  },
  {
    name: "Not Arriva",
    ingredients: "Tomato, mozarella, and spinaci",
    price: 15,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
  {
    name: "Classic Arriva",
    ingredients: "Chicken, peperoni, peper, burger sause",
    price: 10,
    photoName: "pizzas/aaaaa.jpeg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Alena's Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Best pizza ever according to world's most well-known pizza expert
            Alonochka
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.photoName} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
        //style={{ width: "300px" }}
      ></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "NOT AVAILABLE" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently open!");
  //   } else {
  //     alert("Sorry we're closed");
  //   }

  //   if (!isOpen)
  //     return (
  //       <p>
  //         Wessss're happy to welcome you between {openHour}:00 and {closeHour}:00!
  //       </p>
  //     );

  //return React.createElement("footer", null, "We're currently open!");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00!
        </p>
      )}
      {/* {new Date().toLocaleTimeString()} We're currently open! */}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
