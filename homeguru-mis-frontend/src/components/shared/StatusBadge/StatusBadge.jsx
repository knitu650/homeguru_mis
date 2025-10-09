import React from 'react';
import Badge from 'components/common/Badge';

const statusConfig = {
  active: { variant: 'success', label: 'Active' },
  inactive: { variant: 'gray', label: 'Inactive' },
  pending: { variant: 'warning', label: 'Pending' },
  approved: { variant: 'success', label: 'Approved' },
  rejected: { variant: 'error', label: 'Rejected' },
  completed: { variant: 'success', label: 'Completed' },
  inprogress: { variant: 'info', label: 'In Progress' },
  cancelled: { variant: 'error', label: 'Cancelled' },
  paid: { variant: 'success', label: 'Paid' },
  unpaid: { variant: 'warning', label: 'Unpaid' },
  overdue: { variant: 'error', label: 'Overdue' },
};

const StatusBadge = ({ status, ...props }) => {
  const config = statusConfig[status?.toLowerCase()] || {
    variant: 'gray',
    label: status || 'Unknown',
  };

  return (
    <Badge variant={config.variant} {...props}>
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
