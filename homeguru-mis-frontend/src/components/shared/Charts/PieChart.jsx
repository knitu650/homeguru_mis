import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { CHART_CONFIG } from '@config/chart.config';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options = {}, height = 300 }) => {
  const defaultOptions = {
    ...CHART_CONFIG.options,
    ...options,
  };

  return (
    <div style={{ height }}>
      <Pie data={data} options={defaultOptions} />
    </div>
  );
};

export default PieChart;
