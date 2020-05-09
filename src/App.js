import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";



import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import News from "./pages/News";
import Latest from "./pages/Latest";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Delivety from "./pages/Delivety";
import Category from "./pages/Category";
import MyCart from "./pages/MyCart";
import NewsSing from "./pages/NewsSing";
import Product from "./pages/Product";
import Registr from "./pages/Registr";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/stocks" component={Stocks}/>
                    <Route path="/news" component={News}/>
                    <Route path="/latest" component={Latest}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/delivety" component={Delivety}/>
                    <Route path="/Category" component={Category}/>
                    <Route path="/my-cart" component={MyCart}/>
                    <Route path="/news-sing" component={NewsSing}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/registr" component={Registr}/>

                    <Route path="/header" component={Header} />
                    <Route path="/footer" component={Footer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
