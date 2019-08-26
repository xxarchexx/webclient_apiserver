import React , {Component} from 'react';
import { Link } from 'react-router';
import GoodList from './goods/list';
import  {Hello} from './hello.tsx';

export default class BodyView extends Component{    
    
    componentDidMount(){
        this.props.getGoods();
    }


    render(){
       
       let goodList = this.props.goodList;

       return (
           <div>
            <Hello compiler="TypeScript" framework="React" />
            <GoodList goodList={goodList}/>
           </div>
       )
    }    
}