import React from 'react';
import GoodList from './goods/list';
import {Route, Link} from 'react-router-dom';
import Login from './helper_views/login';


import './style.css';

export default class HeaderView extends React.Component{
   constructor(props){
       super(props);

       this.categories = null  

       this.state = {
           login : null
       }
    }  
   

    componentDidMount(){
        this.props.loadInitialData();      
    }

    render(){
        let data = this.props.data;
        return (      
            <div>         
                <div class='menu-container'>
                    <div class='menu'>          
                        <Link className="nav-link" to={{pathname: '/creategood',  state :{test : true }}}>Create</Link>       
                        <Login data={data}/>
                    </div>         
                </div>              
             </div>
        );
    }
}





