/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from "react";
import { useVirtual } from "react-virtual";
import Applayout from "@/layout/Applayout";
import Metatag from "@/components/Metatag";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { updateViewSearch } from "@/redux/algolia-slice";
import Product from "@/components/Product";

export default function SearchPage() {
  const dispatch = useAppDispatch();
  const { viewSearch, searchData } = useAppSelector((state) => state.algolia);
  const parentRef: any = useRef();

  const rowVirtualizer = useVirtual({
    size: searchData.length,
    parentRef,
    estimateSize: useCallback(() => 100, []),
    overscan: 12,
  });

  useEffect(() => {
    if (viewSearch) {
      dispatch(updateViewSearch());
    }
  }, [viewSearch]);

  console.log("rowVirtualizer", rowVirtualizer);

  return (
    <Applayout title="Search Store | Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <div ref={parentRef} className="container">
        <div className="row pt-4 mx-n2">
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <Product
              key={virtualRow.index}
              product={searchData[virtualRow.index]}
            />
          ))}
        </div>
      </div>
    </Applayout>
  );
}
