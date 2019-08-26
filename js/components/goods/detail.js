import React, {Component} from 'react';
import {getGoodByID} from '../../actions/goods';

export default class GoodDetail extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            good : {
                ID : null,
                Name: "",
                Descr:"",
                Price: null
              }
        }
    }

    componentDidMount(){
        let g = getGoodByID(this.props.match.params.id)
        this.setState({ good :  g})

    }

    render(){
        let p = this.props;

        return (
            <div>ч
            <h1>{this.state.good.Name}</h1>
            <h1>{this.state.good.Descr}</h1>
            </div>
           )
    }
}