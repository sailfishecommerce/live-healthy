import { Menu } from "react-instantsearch-dom";

interface Props {
  title: string;
  attribute: "product_type";
}

export default function CustomMenu({ title, attribute }: Props) {
  return (
    <>
      <div className="menu">
        <h5>{title}</h5>
        <Menu searchable={true} attribute={attribute} />
      </div>
    </>
  );
}
