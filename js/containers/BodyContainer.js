import React, { Component } from "react";
import {connect} from 'react-redux';
import {getGoods} from '../actions/goods';
import BodyView from '../components/body';

//pass info to dumb components
const mapStateToProps = state => {
    return {
        goodList: state.goods.goodList //state.goods.goodList
    }
}

const mapDispatchToProps =(dispatch, props)=>{
    return {
        getGoods: () => {
            return dispatch(getGoods());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyView)


