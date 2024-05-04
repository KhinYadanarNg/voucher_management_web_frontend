"use client";
import React from 'react';

export interface SpentVouchersProps {
  totalVouchers: number;
  noOfClaimedVouchers: number
}

const VouchersSpentProgressBar = ({ totalVouchers, noOfClaimedVouchers }: SpentVouchersProps) => {

  // Calculate progress value
  const progress = (noOfClaimedVouchers / totalVouchers) * 100;

  return (
    <div>
      <div className="progressBar">
        <div
          className="progressBarFill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{` ${noOfClaimedVouchers}/ ${totalVouchers}`}</p>
    </div>
  );
};

export default VouchersSpentProgressBar;