import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

const formValid = ({formErrors,...rest}) =>{
    let valid = true;

  // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val =>{
        val === null && (valid = false)
    });

    return valid;    
};


export default class CreateForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            name:null,
            descr:null,
            formErrors : {
                nameError:"",
                descrError:""
            }
        }
    }

  
    handleChange = e =>{
        e.preventDefault();
        const {name,value } = e.target;
        let formErrors = {...this.state.formErrors};
        
        switch(name){
            case "name":
                formErrors.nameError = value.length < 3 ?"минимальное кол-во символов 3" : "";
                break;
            case "descr":
                formErrors.name = value.length < 3 ?"минимальное кол-во символов 3" : "";
                break;
            default:
                break;  
        }
        this.setState({formErrors, [name]:value}, ()=>console.log(this.state) );
    }

    /** @param {Event} e */
   handleSubmit = e => {
    
        e.preventDefault();
        if(formValid(this.state)){
            Axios.post('/newcategory', this.state);
        }
    };
    

render(){

    const {formErrors} = this.state
// //   className={formErrors.nameError.length > 0 ? "error" : null} 
    return (
        <div class="container">
        <form id="form" action="" method="POST" role="form" noValidate  onSubmit={this.handleSubmit}>    
            <div class="form-group">
            <div className="name">
                <label>Название категории товара</label>
                <input type="text" class="form-control" id="name"   
             
                 placeholder="Name"
                 type="text"
                 name="name"
                 noValidate
                 onBlur={this.handleChange}                
               />
                {formErrors.nameError.length > 0 && (
                <span className="errorMessage">{formErrors.nameError}</span>
                )}
                {/* <div class="invalid-feedback">
                     your name must be bettwen 2 :10 characters
                  </div> */}
            </div>
            </div>
        
            <div class="form-group">
                <label>Описание категории товара</label>
                <input type="text" class="form-control" id="name"             
                    placeholder="Описание категории товара"
                    type="text"
                    name="descr"
                    noValidate
                    onBlur={this.handleChange}                
                />
                 {formErrors.descrError.length > 0 && (
                    <span className="errorMessage">{formErrors.descrError}</span>
                )}
                {/* <div class="invalid-feedback">
                    your email should be correct
                 </div> */}
            </div> 
    
            {/* <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="Phone"/>
                <div class="invalid-feedback">
                    your phone should be Number
                 </div>
            </div>
    
            <div class="form-group">
                <label>zip code</label>
                <input type="text" class="form-control" id="zip" placeholder="Zip Code"/>
                <div class="invalid-feedback">
                    zipcode should be Number and 5 numbers
                 </div>
            </div>
         */}
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  );
}
}