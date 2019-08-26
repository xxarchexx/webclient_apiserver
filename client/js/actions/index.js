import axios from 'axios';
import {store} from '../index';
import * as actions from './actionTypes';

function loadData(){
    return {type : actions.GET_DATA }
};

function trylogin(){
    return {type : actions.TRY_LOGIN}
};


function getcategoriesforGoods(data){
    return {type : actions.REQ_GOODS_CATEGORIES,  data:data}
};


export function tryloginf(){
    f = (dispatch) =>{
        
        dispatch(trylogin());

        return axios({
            url:'/trylogin',
            timeout:20000,
            method: 'get',
            responseType:'json'
        })

    }
}

export function getcategoriesForGoods(){
     return (dispatch) =>{
         let data = store.getState().data.categories;
         dispatch(getcategoriesforGoods(data));
         return data;
     }
}

export function getDataSuccess(response){
    return {
        type :'GET_DATA_SUCCESS',
        payload: response.data
    }
}

export function loadInitialData(){
    return function(dispatch){
        //possible for long time operations
        // dispatch({
                
        // });
        return axios({
            url:'/initialdata',
            timeout:20000,
            method: 'get',
            responseType:'json'
        })
        .then( (response) => {
            dispatch(getDataSuccess(response))      
        })
        .catch( error => {
            throw(error);
    })
}
}




