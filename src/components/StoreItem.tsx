import { Card } from "react-bootstrap";
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
    <Card>
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
        <Card.Subtitle className="mb-3 text-secondary" style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
          <span>{description}</span>
        </Card.Subtitle>
        <div className=""></div>
      </Card.Body>
    </Card>
  );
}
