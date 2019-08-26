import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadInitialData} from '../actions/index';
import Header from '../components/header.js'



const mapStateToProps = (state,props) =>{
    return   {
        data:state.data,
        props : props
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadInitialData: ()=> {
            dispatch(loadInitialData());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)





