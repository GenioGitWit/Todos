import { createSlice, createAsyncThunk, current} from "@reduxjs/toolkit"; 
import API from '../../Api/TodosApi';

interface Args {
    id : string,
    title : string,
    description : string;
};

interface Arg {
    id : string;
}

export const createTodoThunk = createAsyncThunk(
    'createTodo',
     async (arg : Args) => {
        const data = await API.createTodo(arg.title, arg.description, arg.id);
        console.log('create Todo data : ', data);
        return data;
    }
);

export const fetchTodosThunk = createAsyncThunk(
    'fetchTodos',
    async () => {
        const data = await API.fetchTodos();
        console.log('todo data : ', data);
        return data;
    }
);

export const deleteTodosThunk = createAsyncThunk(
    'deleteTodo',
    async (arg : Arg) => {
        const data = await API.deleteTodo(arg.id);
        return data;
    }
);

export const updateTodosThunk = createAsyncThunk(
    'updateTodo',
    async (arg : Args) => {
        const data = await API.updateTodo(arg.title, arg.description, arg.id);
        return data;
    }
);

const TodoSlice = createSlice({
    name : 'Todo',
    initialState : { myTodos : [], todos : [] },
    reducers : {
        createTodo : (state : any, action : any) => {
            state.todos = [...state.todos, action.payload];
            return state;
        },
        deleteTodo : (state : any, action : any) => {
            let afterDelete = state.todos.filter((item : any) => action.payload.id !== item.id );
            state = afterDelete;
            return state;
        },
        fetchTodos : (state : any, action : any) => {
            state.todos = action.payload;
        },
        updateTodo : (state : any, action : any) => {
            const toUpdate = state.todos.find((item : any) => action.payload.id === item.id);
            toUpdate.title = action.payload.title;
            toUpdate.description = action.payload.description;
            state = [...state.todos, toUpdate];
            return state;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchTodosThunk.fulfilled, (state : any, action : any) => {
            // Add user to the state array
            state.todos = [...state.todos, action.payload];
            console.log('store state : ', current(state));
            return state;
        }).
        addCase(createTodoThunk.fulfilled, (state : any, action : any) => {
            state.myTodos = [...state.myTodos, action.payload];
            return state;
        }).
        addCase(deleteTodosThunk.fulfilled, (state : any, action : any) => {
            let afterDelete = state.myTodos.filter((item : any) => action.payload.id !== item.id );
            state = afterDelete;
            return state;
        }).
        addCase(updateTodosThunk.fulfilled, (state : any, action : any) => {
            const toUpdate = state.myTodos.find((item : any) => action.payload.id === item.id);
            toUpdate.title = action.payload.title;
            toUpdate.description = action.payload.description;
            state = [...state.myTodos, toUpdate];
            return state;
        })
    }
});

export const { createTodo, deleteTodo, updateTodo, fetchTodos } = TodoSlice.actions;
export default TodoSlice.reducer;