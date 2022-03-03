import { RefinementList } from "react-instantsearch-dom";

interface Props {
  title: string;
  attribute: "vendor" | "tags";
}

export default function CustomRefinementList({
  title,
  attribute,
}: Props) {
  return (
    <>
      <h5>{title} </h5>
      <RefinementList
        searchable={true}
        attribute={attribute}
        showMoreLimit={100}
        showMore={true}
      />
    </>
  );
}
