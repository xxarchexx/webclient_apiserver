import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import  MainPage from  './pages/Main';
import  CreateGood from './components/goods/create';
import GoodDetail from './components/goods/detail'

export const Routerss = () => ( 
    <BrowserRouter>    
    <Route exact path="/" component={ () => <MainPage></MainPage> } />
    <Route path="/creategood" component={CreateGood}/>
    <Route path="/gooddetail/:id" component={GoodDetail}/>
  </BrowserRouter>  
);

