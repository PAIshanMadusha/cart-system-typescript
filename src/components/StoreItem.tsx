import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export function StoreItem({
  id,
  name,
  description,
  price,
  imageUrl,
}: StoreItemProps) {
  
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "cover", width: "100%" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <span className="fs-5">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Subtitle
          className="mb-3 text-secondary"
          style={{ fontSize: "0.8rem", fontStyle: "italic" }}
        >
          <span>{description}</span>
        </Card.Subtitle>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center jsutify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in Cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
