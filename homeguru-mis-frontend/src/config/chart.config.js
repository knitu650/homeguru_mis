// Chart Configuration
export const CHART_CONFIG = {
  defaultColors: [
    '#4f46e5', // primary
    '#14b8a6', // secondary
    '#f59e0b', // warning
    '#ef4444', // error
    '#10b981', // success
    '#3b82f6', // info
    '#8b5cf6', // purple
    '#ec4899', // pink
  ],
  
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          family: 'Inter',
          size: 14,
          weight: 600,
        },
        bodyFont: {
          family: 'Inter',
          size: 13,
        },
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#e5e7eb',
        },
        ticks: {
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
    },
  },
};

export default CHART_CONFIG;
