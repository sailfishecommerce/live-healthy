import { attributeType } from "@/types";

interface filterByColorType {
  attribute: attributeType;
  onChangeFilter: (e: any) => void;
}

export default function FilterByColor({
  attribute,
  onChangeFilter,
}: filterByColorType) {
  return (
    <div className="widget border-bottom  mb-4 pb-4">
      <h3 className="widget-title">{attribute.name}</h3>
      <div className="d-flex flex-wrap">
        {attribute.values.map((value, index) => (
          <div
            className="form-check form-option text-center mb-2 mx-1"
            style={{ width: "4rem" }}
            key={index}
          >
            <input
              className="form-check-input"
              type="radio"
              name="color"
              value={value}
              id={`color-${value.toLowerCase()}-label`}
            />
            <label
              className="form-option-label rounded-circle"
              htmlFor={`color-${value.toLowerCase()}-label`}
            >
              <span
                className="form-option-color rounded-circle"
                style={{
                  backgroundColor: `${value.toLowerCase()}`,
                }}
              ></span>
            </label>
            <label
              className="d-block fs-xs text-muted mt-n1"
              htmlFor={`color-${value.toLowerCase()}-label`}
            >
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
