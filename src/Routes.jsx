import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Redirect } from 'react-router';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import Footer from './components/Footer/Footer';

const Product = React.lazy(() => import('./pages/Product/Product'));
const New = React.lazy(() => import('./pages/New/New'));
const Men = React.lazy(() => import('./pages/Index/Men'));
const Women = React.lazy(() => import('./pages/Index/Women'));
const NoMatch = React.lazy(() => import('./pages/NoMatch/NoMatch'));
const WishList = React.lazy(() => import('./pages/WishList/WishList'));

const Routes = () => (
    <Router>
        <>
            <Header />
            <MediaQuery minWidth={769}>
                <SubHeader />
            </MediaQuery>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/women" exact component={Women} />
                    <Route path="/men" exact component={Men} />
                    <Route path="/new" exact component={New} />
                    <Route path="/wish-list" exact component={WishList} />
                    <Route path="/product/:id" exact component={Product} />
                    <Redirect exact from="/" to="/women" />
                    <Route component={NoMatch} />
                </Switch>
            </Suspense>
            <Footer />
        </>
    </Router>
);

export default Routes;
