import React from 'react';

export default class LookupContainer extends React.Component{      
    constructor() {
        super();
      }

    handleLangChange(e){
           this.props.handleLangChange(e);
    }
    
    render(){  
        let data  = Array.from(this.props.data) || [];
        return (
         <div  className="dropdown_container" >
            <label>{this.props.title}</label>
            <select id='myDropdown' onChange={this.handleLangChange.bind(this)}>
            <option value=''></option> 
             { data.map(elem => <option value={elem.ID}> {elem.Name} </option> ) }            
            </select>
          </div>   
        );
    }
}