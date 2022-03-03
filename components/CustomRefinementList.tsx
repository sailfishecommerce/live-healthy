import { RefinementList } from "react-instantsearch-dom";

interface Props {
  title: string;
  className: string;
  attribute: "vendor" | "tags";
}

export default function CustomRefinementList({
  title,
  className,
  attribute,
}: Props) {
  return (
    <div className={className}>
      <h5>{title} </h5>
      <RefinementList
        searchable={true}
        attribute={attribute}
        showMoreLimit={100}
        showMore={true}
      />
    </div>
  );
}
