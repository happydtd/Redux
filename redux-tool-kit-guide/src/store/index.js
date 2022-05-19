import { createStore } from 'redux'
import { createSlice , configureStore} from '@reduxjs/toolkit';

const initialState ={counter: 0, showCounter:true}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state = initialState, action)=>{
//     switch (action.type){
//         case 'increment':
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         case 'increase':
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             }
//         case  'decrement':
//             return {
//                 counter: state.counter -1 ,
//                 showCounter: state.showCounter
//             }
//         case 'toggle':
//             return {
//                 counter: state.counter,
//                 showCounter : !state.showCounter
//             }
//         default:
//             console.log('default state', state);
//             return state 
//     }

// }

const store = configureStore({
    reducer: counterSlice.reducers
})

export default store;

// const counterScriber = ()=>{
//     console.log('counter', store.getState())
// }

// store.subscribe(counterScriber)

// store.dispatch({type: 'increment'})


