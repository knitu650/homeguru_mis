import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import studentService from '../services/studentService';

export const fetchStudents = createAsyncThunk(
  'students/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const response = await studentService.getAll(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createStudent = createAsyncThunk(
  'students/create',
  async (data, { rejectWithValue }) => {
    try {
      const response = await studentService.create(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list: [],
    loading: false,
    error: null,
    selectedStudent: null,
  },
  reducers: {
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
    clearSelectedStudent: (state) => {
      state.selectedStudent = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export const { setSelectedStudent, clearSelectedStudent } = studentSlice.actions;
export default studentSlice.reducer;
