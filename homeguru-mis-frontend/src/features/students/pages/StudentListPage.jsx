import React, { useState } from 'react';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import SearchBar from '@components/common/SearchBar';
import Table from '@components/common/Table';
import Badge from '@components/common/Badge';
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';

const mockStudents = [
  { id: 1, name: 'John Doe', class: '10-A', rollNo: '001', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', class: '10-A', rollNo: '002', email: 'jane@example.com', status: 'active' },
  { id: 3, name: 'Mike Johnson', class: '10-B', rollNo: '003', email: 'mike@example.com', status: 'inactive' },
];

const StudentListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { key: 'rollNo', label: 'Roll No', width: '100px' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'class', label: 'Class' },
    { key: 'email', label: 'Email' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <Badge variant={value === 'active' ? 'success' : 'gray'}>
          {value}
        </Badge>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline" icon={<FiEdit />}>
            Edit
          </Button>
          <Button size="sm" variant="danger" icon={<FiTrash />}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: '0.5rem' }}>Students</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage all students</p>
        </div>
        <Button icon={<FiPlus />}>Add Student</Button>
      </div>

      <Card>
        <div style={{ marginBottom: '1.5rem' }}>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students..."
          />
        </div>
        <Table columns={columns} data={mockStudents} />
      </Card>
    </div>
  );
};

export default StudentListPage;
