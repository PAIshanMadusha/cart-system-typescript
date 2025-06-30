import { Card } from "react-bootstrap";

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
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "cover", width: "100%" }}
      />
    </Card>
  );
}
