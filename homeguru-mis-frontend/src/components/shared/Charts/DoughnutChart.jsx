import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { CHART_CONFIG } from '@config/chart.config';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, options = {}, height = 300 }) => {
  const defaultOptions = {
    ...CHART_CONFIG.options,
    ...options,
  };

  return (
    <div style={{ height }}>
      <Doughnut data={data} options={defaultOptions} />
    </div>
  );
};

export default DoughnutChart;
