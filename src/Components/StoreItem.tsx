import formatCurrency from "../util/formatCurrency";
import useShopingCart from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromcart,
  } = useShopingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="card mb-4" style={{width: "30rem"}}>
      <img
        className="car-img-top"
        style={{objectFit: "cover"}}
        src={imgUrl}
        alt=""
      />
      <div className="card-body text-bg-light">
        <h4 className="card-title"> {name} </h4>
        <p className="card-text"> {formatCurrency(price)} </p>
        <div className=" mt-auto text-center">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="btn btn-primary w-100">
              + add to Cart
            </button>
          ) : (
            <div className="align-item-center">
              <div>
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="btn btn-primary">
                  -
                </button>
                <span> {quantity} in cart </span>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="btn btn-primary">
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromcart(id)}
                className="btn btn-danger">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
