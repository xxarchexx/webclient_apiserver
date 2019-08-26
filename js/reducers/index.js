import {combineReducers} from 'redux';
import * as actions from '../actions/actionTypes';



const main_initial_state = {loggined : false, login: '', categories :{}}
const goods_initial_state = { goodList : [{}] }

 const mainreducer = (state = main_initial_state, action) => {
    if (action.type === actions.GET_DATA){
        return {...state, data :action.payload}
    }
    else if(action.type === actions.GET_DATA_SUCCESS){
        return {...state, loggined : action.payload.Loggined, login : action.payload.Login, categories :action.payload.Categories}
    }
    else if(action.type === actions.REQ_GOODS_CATEGORIES){
        return {...state, goods : action.payload}
    }
    else{
        return state;
    }
} 

const goodreducer = (state = goods_initial_state, action) => {
    if (action.type === actions.GET_GOODS){
        return {...state, data :state.payload }
    }
    else if(action.type ===actions.GET_GOODS_SUCCESS){
        return {...state,  goodList :action.payload }
    } 
    else{
        return state;
    }
} 


export const rootReducer = combineReducers({
    data: mainreducer,
    goods: goodreducer
  });   

