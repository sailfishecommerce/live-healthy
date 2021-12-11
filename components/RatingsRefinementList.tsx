import { connectRefinementList } from "react-instantsearch-dom";

import RatingStar from "./RatingStar";

export default function RatingsRefinementList({ items, createURL }: any) {
  console.log("RatingsRefinementList items", items);
  return (
    <div className="widget widget-categories d-flex flex-column">
      <h3 className="widget-title">Ratings</h3>
      {items.map((item: { label: number, count:number }, index: number) => (
        <div className="my-1 d-flex align-items-center justify-content-between" key={index}>
          <RatingStar rate={item.label} />
          <span className="mx-2 badge bg-danger">{item.count}</span>
        </div>
      ))}
    </div>
  );
}

export const RatingsList = connectRefinementList(RatingsRefinementList);
