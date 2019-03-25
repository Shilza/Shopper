import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Redirect } from 'react-router';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';

const New = React.lazy(() => import('./pages/New/New'));
const Men = React.lazy(() => import('./pages/Index/Men'));
const Women = React.lazy(() => import('./pages/Index/Women'));
const NoMatch = React.lazy(() => import('./pages/NoMatch/NoMatch'));
const WishList = React.lazy(() => import('./pages/WishList/WishList'));

const Routes = () => (
    <BrowserRouter basename="/Shopper">
        <>
            <Header />
            <MediaQuery minWidth={769}>
                <SubHeader />
            </MediaQuery>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/women" component={Women} />
                    <Route path="/men" component={Men} />
                    <Route path="/new" component={New} />
                    <Route path="/wish-list" component={WishList} />
                    <Route path="/product/:id" component={Product} />
                    <Redirect from="/" to="/women" />
                    <Route component={NoMatch} />
                </Switch>
            </Suspense>
            <Footer />
        </>
    </BrowserRouter>
);

export default Routes;
