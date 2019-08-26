import React, {Component} from 'react';
 
export default class Login extends Component{
    render(){    
        var data = this.props.data;    
        if (data.loggined == true){
          return (
            <div>              
              <div class='welcome'>                       
                  <div class='login'>                     
                   Добро пожаловать {data.login}!
                  </div>
              </div>               
            </div>
          )
        }
        else{
          return (
            <div>              
              <div class='signup'>                       
                  <div class='login'>                     
                      <a href="/trylogin">Войти</a>
                  </div>
              </div>               
            </div>
          )
        }
    }
}