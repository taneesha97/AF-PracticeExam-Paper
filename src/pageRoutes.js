import React, { Component } from 'react';
import Navbar from "./components/navBar/navBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateVehicle from './components/vehicle/createVehicle';
import CreateCategory from './components/category/createCategory';
import Category from './pages/category/category';

class PageRoutes extends Component{
    render() {
        return(
            <div>
                <Router>
                    <Navbar/>
                    <section>
                        <switch>
                           <Route path="/create/vehicle" component={CreateVehicle}></Route>
                           <Route path="/create/category" component={CreateCategory}></Route>
                           <Route path="/" component={Category} exact></Route>
                        </switch>
                    </section>
                </Router>
            </div>
        );
    }

}

export default PageRoutes;
