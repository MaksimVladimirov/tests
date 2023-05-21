import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodosState {
  value: string[];
}

const initialState: TodosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: state.value.filter((todo) => todo !== action.payload),
      };
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
