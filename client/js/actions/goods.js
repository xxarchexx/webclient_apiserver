import axios from 'axios';
import {store} from '../index';
import {GET_GOODS_SUCCESS} from './actionTypes';

export function getGoods(){
    return (dispatch) =>{
        return axios({
            url:'/getgoods',
            timeout:20000,
            method: 'get',
            responseType:'json'
        })
        .then( (response) => {
            dispatch(getGoodsSuccess(response))      
        })
        .catch( error => {
            throw(error);
        })
    }
}

export function getGoodByID(id){
    let goodsArray = store.getState().goods.goodList;
    return goodsArray.find(x=>x.ID == id)
}

export function getGoodsSuccess(response){
    return {
        type : GET_GOODS_SUCCESS,
        payload: response.data
    }
}