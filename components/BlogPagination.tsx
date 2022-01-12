import React from "react";

interface Props {
  pagination: {
    number: number;
    active: boolean;
  };
}

export default function BlogPagination({ pagination }: Props) {
  return (
    <div>
      {pagination.active ? (
        <li
          key={pagination.number}
          className="page-item active d-none d-sm-block"
          aria-current="page"
        >
          <span className="page-link">
            {pagination.number}
            <span className="visually-hidden">(current)</span>
          </span>
        </li>
      ) : (
        <li key={pagination.number} className="page-item d-none d-sm-block">
          <a className="page-link" href="#">
            {pagination.number}
          </a>
        </li>
      )}
    </div>
  );
}
