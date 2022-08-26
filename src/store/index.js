import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload
        },
        toggle(state) {
            state.counter = !state.showCounter
        }
    }
});

const initalAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initalAuthState,
    reducers : {
        login (state) {
            state.isAuthenticated = true;
        },
        logout (state) {
            state.isAuthenticated = false;
        }
    }
})



const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;