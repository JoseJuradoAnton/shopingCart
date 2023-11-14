import {Link} from "react-router-dom";
import {useShopingCart} from "../context/ShoppingCartContext";

const Navbar = () => {
  const {openCart, cartQuantity} = useShopingCart();

  return (
    <>
      <nav className="navbar me-auto  navbar-expand-lg">
        <Link className="navbar-brand " to={"/"}>
          Home
        </Link>
        <Link className="navbar-brand" to={"/store"}>
          Store
        </Link>
        <Link className="navbar-brand" to={"/about"}>
          About
        </Link>
        <button
          onClick={openCart}
          className="btn btn-primary rounded-circle"
          style={{
            backgroundColor: "white",
            borderColor: "black",
            color: "blue",
            width: "3rem",
            height: "3rem",
            position: "relative",
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              position: "absolute",
              height: "1.5rem",
              width: "1.5rem",
              bottom: "0",
              right: "0",
              transform: "translate(25%,25%)",
            }}>
            {cartQuantity}
          </div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
