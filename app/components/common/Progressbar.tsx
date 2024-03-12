"use client";
import React, { useEffect, useState } from 'react';

const fetchSpentVouchers = async () => {
  return 30;
};

const ProgressBar = () => {
  const [spentVouchers, setSpentVouchers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const spent = await fetchSpentVouchers();
      setSpentVouchers(spent);
    };

    fetchData();
  }, []);

  const totalVouchers = 100;

  // Calculate progress value
  const progress = (spentVouchers / totalVouchers) * 100;

  return (
    <div>
      <div className="progressBar">
        <div
          className="progressBarFill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{` ${spentVouchers}/ ${totalVouchers}`}</p>
    </div>
  );
};

export default ProgressBar;