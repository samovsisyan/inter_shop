import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";



import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import News from "./pages/News";
import Newcomers from "./pages/Newcomers";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/stocks" component={Stocks}/>
                    <Route path="/news" component={News}/>
                    <Route path="/newcomers" component={Newcomers}/>
                    <Route path="/about_us" component={AboutUs}/>
                    <Route path="/contacts" component={Contacts}/>

                    <Route path="/header" component={Header} />
                    <Route path="/footer" component={Footer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
