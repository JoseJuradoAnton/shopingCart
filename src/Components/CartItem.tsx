import {Stack} from "react-bootstrap";
import {useShopingCart} from "../context/ShoppingCartContext";
import StoreItem from "../items/items.json";
import formatCurrency from "../util/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({id, quantity}: CartItemProps) => {
  const {removeFromcart} = useShopingCart();
  const item = StoreItem.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{width: "125px", height: "75px", objectFit: "cover"}}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{fontSize: ".65rem"}}>
              {quantity} X{" "}
            </span>
          )}
        </div>
        <div className="text-muted" style={{fontSize: ".75rem"}}>
          {" "}
          {formatCurrency(item.price)}{" "}
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <button>X</button>
      </div>
    </Stack>
  );
};

export default CartItem;
