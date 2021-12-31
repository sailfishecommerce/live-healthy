import { Dropdown } from "react-bootstrap";
import { connectSortBy } from "react-instantsearch-dom";

const SortBy = ({ items, refine, createURL }: any) => {
  return (
    <Dropdown className="dropdown d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3">
      <Dropdown.Toggle
        className="btn btn-light dropdown-toggle text-light fs-sm me-2 d-none d-sm-block"
        id="sort-by-dropdown"
      >
        Sort by
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {items.map((item: any) => (
          <Dropdown.Item
            key={item.value}
            style={{ fontWeight: item.isRefined ? "bold" : "normal" }}
            className="dropdown-item"
            onClick={(event) => {
              event.preventDefault();
              refine(item.value);
              createURL(item.value);
            }}
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const AlgoliaSortby = connectSortBy(SortBy);

export default AlgoliaSortby;
