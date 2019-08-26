import React , {Component} from 'react';

import { Link, Route, Router , BrowserRouter } from 'react-router-dom';


export class Test extends Component{ 
   render(){
    return (
        <div>
            <h1>test</h1>
        </div>
    )    
   }
}

export default class GoodList extends Component{   
  
    render(){
        
        let goods = this.props.goodList;
        return (
            <div className="container">         
                <h1>Товары</h1>
                <ul className="list-group" > 
                    {this.renderGoods(goods)}
                </ul>
            </div>
        )
    }

    /**
     * 
     * @param {Array} goods 
     */
    renderGoods(goods) {
        return goods.map( 
            (good) => {
                return (
                   <li className="list-group-tem" style={{margin:'1em', background:'#DFDFDF'} }     key={good.ID}>
                        
                            <Link to={"/gooddetail/"+ good.ID}>
                            <h3 className="list-group-item-heading">{good.Name}</h3>
                            <h3 className="list-group-item-heading">{good.Descr }</h3>
                            </Link>

                        
                        
                      
                   </li>                 
                );
            }
        )
    }
}