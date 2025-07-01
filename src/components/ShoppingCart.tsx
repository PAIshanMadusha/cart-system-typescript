import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProviderProps = {
    isOpen: boolean 
}

export function ShoppingCart({isOpen} : ShoppingCartProviderProps) {
    const {closeCart} = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack >

        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
