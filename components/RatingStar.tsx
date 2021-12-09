import React from "react";

interface RatingStarProps {
  rate: number;
}

export default function RatingStar({ rate }: RatingStarProps) {
  const activeRate = new Array(rate).fill(0);
  const inactiveRateCount = 5 - Number(rate);
  const inactiveRate = new Array(inactiveRateCount).fill(0);

  return (
    <div className="star-rating">
      {activeRate.map((rate, index) => (
        <i key={index} className="star-rating-icon ci-star-filled active"></i>
      ))}
      {inactiveRate.map((rate, index) => (
        <i key={index} className="star-rating-icon ci-star"></i>
      ))}
    </div>
  );
}
