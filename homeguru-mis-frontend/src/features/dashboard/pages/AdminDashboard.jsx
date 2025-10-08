import React from 'react';
import Card from '@components/common/Card';
import { FiUsers, FiUserCheck, FiBookOpen, FiDollarSign } from 'react-icons/fi';
import LineChart from '@components/shared/Charts/LineChart';
import BarChart from '@components/shared/Charts/BarChart';
import styles from './AdminDashboard.module.css';

const statsData = [
  { label: 'Total Students', value: '2,458', icon: FiUsers, color: '#4f46e5', change: '+12%' },
  { label: 'Total Teachers', value: '156', icon: FiUserCheck, color: '#14b8a6', change: '+5%' },
  { label: 'Total Classes', value: '48', icon: FiBookOpen, color: '#f59e0b', change: '+2%' },
  { label: 'Revenue', value: '₹12.5L', icon: FiDollarSign, color: '#10b981', change: '+18%' },
];

const attendanceData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Student Attendance',
      data: [85, 90, 88, 92, 87, 89],
      borderColor: '#4f46e5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      tension: 0.4,
    },
  ],
};

const feeData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Fee Collection',
      data: [45000, 52000, 48000, 61000, 55000, 67000],
      backgroundColor: '#10b981',
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className={styles.statCard}>
              <div className={styles.statContent}>
                <div>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <span className={styles.statChange}>{stat.change} from last month</span>
                </div>
                <div className={styles.statIcon} style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  <Icon size={24} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className={styles.chartsGrid}>
        <Card title="Attendance Overview">
          <LineChart data={attendanceData} height={300} />
        </Card>

        <Card title="Fee Collection">
          <BarChart data={feeData} height={300} />
        </Card>
      </div>

      <div className={styles.listsGrid}>
        <Card title="Recent Activities">
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityDot} style={{ backgroundColor: '#4f46e5' }} />
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>New student enrolled</p>
                <p className={styles.activityTime}>2 hours ago</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot} style={{ backgroundColor: '#10b981' }} />
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>Fee payment received</p>
                <p className={styles.activityTime}>4 hours ago</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot} style={{ backgroundColor: '#f59e0b' }} />
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>New assignment created</p>
                <p className={styles.activityTime}>6 hours ago</p>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Upcoming Events">
          <div className={styles.eventList}>
            <div className={styles.eventItem}>
              <div className={styles.eventDate}>
                <span className={styles.eventDay}>15</span>
                <span className={styles.eventMonth}>Oct</span>
              </div>
              <div className={styles.eventInfo}>
                <p className={styles.eventTitle}>Annual Sports Day</p>
                <p className={styles.eventLocation}>Main Ground</p>
              </div>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventDate}>
                <span className={styles.eventDay}>20</span>
                <span className={styles.eventMonth}>Oct</span>
              </div>
              <div className={styles.eventInfo}>
                <p className={styles.eventTitle}>Parent-Teacher Meeting</p>
                <p className={styles.eventLocation}>Conference Hall</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
