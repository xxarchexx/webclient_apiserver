import React, {Component} from 'react';
import MainContainer  from '../containers/HeaderContainer';
import BodyContainer from '../containers/BodyContainer';


export default class MainPage extends Component{
    render(){
        return (
            <div>
            <MainContainer>
                {this.props.children}
            </MainContainer>            
            <BodyContainer>
            </BodyContainer>
            </div>
        )
    }
}