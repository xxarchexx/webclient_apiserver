import React from 'react';
import LookupCategory from '../categoires/lookup';
import NumericInput from '../helper_components/numericInput';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getcategoriesForGoods} from '../../actions/index';
import {bindActionCreators} from 'redux';
import MainPage from '../header';
import { Redirect } from 'react-router-dom'
// import {store} from '../../index';
import './style.css';

class CreateGood extends React.Component{
    constructor(props){
        super(props);
        this.good = {
           name:"" ,
           categoryid:0,
           descr:"" ,
           price:0,
           quantity:0
        };  
       
        this.state = {
            formErrors : {
                nameError :"" ,
                descrError :""

            },
          
            needRedirect : false       
        }  
    }
/**
 * @param {Event} e
 */
handleChange = e =>{
    e.preventDefault();
    const {name,value } = e.target;
    let formErrors = {...this.state.formErrors};
    
    switch(name){
        case "name":
            formErrors.nameError = value.length < 3 ?"минимальное кол-во символов 3" : "";
            break;
        case "descr":
            formErrors.descrError = value.length < 3 ?"минимальное кол-во символов 3" : "";
            break;
        default:
            break;  
    }

    this.setState({formErrors});
    this.good[name] = value;
   
}
       
    /**
     *      
     * @param {Event} e 
     */
    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("/creategood" , this.good).then( (e)=> {  this.setState({needRedirect : true }) })
    }

    /**
     * @param {Event} e
     */
    lookupChanged = (e) => {
        this.good.categoryid = e.target.value;
    }

    render(){

        let { dispatch, ...data } = this.props;
        const actionGetCat =(dispatch)=>{
             return bindActionCreators({getcategoriesForGoods},dispatch)
          }

        let result =  actionGetCat(dispatch).getcategoriesForGoods();
        
       

        const needRedirect = this.state.needRedirect
        if(needRedirect){
            return( <Redirect to="/" />);
        }

        const  categoires = result;

        return (
            <React.Fragment>   
  
                <form id="form" className="container"  method="POST" role="form" noValidate  onSubmit={this.handleSubmit.bind(this)}>      
                    <div class="formgrid">                 
                        <LookupCategory className="item subcontainer" handleFunc = { this.lookupChanged } data={categoires} title="Категория товара"/>      
                

                        <div className="item subcontainer" >   
                            <label>Цена</label>
                            <NumericInput handleChange={this.handleChange} />
                        </div>

                        <div className="item subcontainer" >     
                            <label>Название товара</label>
                            <input type="text" id="name"             
                                placeholder="Название товара"
                                type="text"
                                name="name"
                                noValidate
                                onBlur={this.handleChange}                
                            />
                        </div>
                        <div className="item subcontainer" >  
                            <label>Описание товара</label>
                            <input type="text" id="descr"             
                                placeholder="Описание товара"
                                type="text"
                                name="descr"
                                noValidate
                                onBlur={this.handleChange}          
                        />
                        </div>
                        <div className="item subcontainer" >  
                            <button type="submit">Создать</button>
                        </div>    
                     </div>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(null,null)(CreateGood);

