import { useState, useEffect, useCallback } from 'react';
import studentService from '../services/studentService';

const useStudents = (params = {}) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await studentService.getAll(params);
      setStudents(response.data || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch students');
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const createStudent = async (data) => {
    try {
      const response = await studentService.create(data);
      setStudents((prev) => [...prev, response.data]);
      return response;
    } catch (err) {
      throw err;
    }
  };

  const updateStudent = async (id, data) => {
    try {
      const response = await studentService.update(id, data);
      setStudents((prev) =>
        prev.map((student) => (student.id === id ? response.data : student))
      );
      return response;
    } catch (err) {
      throw err;
    }
  };

  const deleteStudent = async (id) => {
    try {
      await studentService.delete(id);
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (err) {
      throw err;
    }
  };

  return {
    students,
    loading,
    error,
    refetch: fetchStudents,
    createStudent,
    updateStudent,
    deleteStudent,
  };
};

export default useStudents;
