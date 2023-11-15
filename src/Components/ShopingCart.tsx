import {Offcanvas, Stack} from "react-bootstrap";
import useShopingCart from "../context/ShoppingCartContext";
import {CartItem} from "./CartItem";
import formatCurrency from "../util/formatCurrency";
import StoreItem from "../items/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShopingCart = ({isOpen}: ShoppingCartProps) => {
  const {closeCart, cartItems} = useShopingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total {""}
            {formatCurrency(
              cartItems.reduce((total, CartItem) => {
                const item = StoreItem.find((i) => i.id === CartItem.id);
                return total + (item?.price || 0) * CartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShopingCart;
