import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Index from './pages/Index/Index';

const NoMatch = () => <div>404</div>;

const Routes = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Index} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
        </>
    </Router>
);

export default Routes;
