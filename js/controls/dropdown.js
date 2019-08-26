import React,{Component} from 'react';

class Dropdown extends Component{
    constructor(props){
        this.state = {isOpened : false };
    }

    toggleState(){
        this.state({isOpened:!this.state.isOpened});
    }

    render(){

        let dropdownText;
        if (this.state.isOpened) {
            dropdownText =this.props.dropdownText;
        }

        return(
            <div>dropdownText</div>
        )
    }
    
}