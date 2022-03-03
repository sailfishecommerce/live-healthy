import { Menu } from "react-instantsearch-dom";

interface Props {
  title: string;
  attribute: "product_type";
  defaultRefinement?: string[];
}

export default function CustomMenu({
  title,
  attribute,
  defaultRefinement,
}: Props) {
  return (
    <>
      <div className="menu">
        <h5>{title}</h5>
        <Menu
          searchable={true}
          attribute={attribute}
          defaultRefinement={defaultRefinement}
        />
      </div>
    </>
  );
}
