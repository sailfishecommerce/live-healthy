/* eslint-disable react-hooks/exhaustive-deps */
import { connectRange } from "react-instantsearch-dom";
import { useEffect, useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useStorePrice } from "@/hooks/useStorePrice";

export default function RangeSlider({
  min,
  max,
  currentRefinement,
  canRefine,
  refine,
}: any) {
  const { currentCurrencySymbol, exchangePrice } =
    useStorePrice();
  const formattedMin = Number(exchangePrice(min));
  const formattedMax = Number(exchangePrice(max));

  const [priceMin, setPriceMin] = useState(formattedMin);
  const [priceMax, setPriceMax] = useState(formattedMax);

  useEffect(() => {
    if (canRefine) {
      setPriceMin(exchangePrice(currentRefinement.min));
      setPriceMax(exchangePrice(currentRefinement.max));
    }
  }, [
    exchangePrice(currentRefinement.min),
    exchangePrice(currentRefinement.max),
  ]);

  if (formattedMin === formattedMax) {
    return null;
  }

  const onChange = ([formattedMin, formattedMax]: any) => {
    console.log(
      "currentRefinement-max",
      exchangePrice(currentRefinement.max),
      "formattedMax",
      formattedMax
    );
    if (
      exchangePrice(currentRefinement.min) !== formattedMin ||
      exchangePrice(currentRefinement.max) !== formattedMax
    ) {
      refine({ formattedMin, formattedMax });
    }
  };

  const priceSlider = (
    render: any,
    handle: any,
    value: any[],
    un: any,
    percent: any
  ) => {
    setPriceMin(value[0].toFixed(0));
    setPriceMax(value[1].toFixed(0));
  };

  return (
    <>
      <div className="widget mb-4 pb-4 border-bottom">
        <h3 className="widget-title">Price</h3>
        <Nouislider
          step={10}
          range={{
            min: formattedMin,
            max: formattedMax,
          }}
          start={[formattedMin, formattedMax]}
          className="cz-range-slider-ui"
          pips={{ mode: "count", values: 5 }}
          connect
          onChange={onChange}
          onUpdate={priceSlider}
          tooltips={true}
        />
        <div className="d-flex">
          <div className="d-flex pb-1">
            <div className="w-50 pe-2 me-2">
              <div className="input-group input-group-sm">
                <span className="input-group-text">
                  {currentCurrencySymbol}{" "}
                </span>
                <input
                  className="form-control range-slider-value-min"
                  type="text"
                  value={priceMin}
                />
              </div>
            </div>
            <div className="w-50 ps-2">
              <div className="input-group input-group-sm">
                <span className="input-group-text">
                  {currentCurrencySymbol}
                </span>
                <input
                  className="form-control range-slider-value-max"
                  type="text"
                  value={priceMax}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const CustomRangeSlider = connectRange(RangeSlider);
