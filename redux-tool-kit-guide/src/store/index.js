//import { createStore } from 'redux'
import { configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter'
import authReducer from './auth'
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
    reducer: { counter: counterReducer , //这里写单数，createSlice里要写双数
               auth:authReducer}
})



export default store;

// const counterScriber = ()=>{
//     console.log('counter', store.getState())
// }

// store.subscribe(counterScriber)

// store.dispatch({type: 'increment'})


