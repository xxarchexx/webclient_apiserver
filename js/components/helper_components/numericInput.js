import React from 'react';

class NumericInput extends React.Component {
    constructor(props) {
      
      super(props);
    //   this.state = { inputValue: "" };
      this._handleUpdate = this._handleUpdate.bind(this);
      this._reset = this._reset.bind(this);
      this.handleChangeCalback = null;
    }
    
    _handleUpdate(e) {
      if (e.target.validity.valid) {
        this.handleChangeCalback(e);
        // this.setState({ inputValue: e.target.value }); 
      }
    }
  
    _reset() {
      this.setState({ inputValue: "" }); 
    }
    
    render() {
      let {handleChange} = this.props;
      handleChange = handleChange.bind(this)
      this.handleChangeCalback = handleChange;
      
      return (      
          <input name="price" type="number" onBlur={this._handleUpdate} step="any" />          
      )
    }  
  }  
  
export default NumericInput;
  