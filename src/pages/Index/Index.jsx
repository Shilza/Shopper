/* eslint-disable react/prop-types */
import * as React from 'react';
import IndexDeliveryLabel from './IndexDeliveryLabel';
import ShopperStyle from './ShopperStyle/ShopperStyle';
import HelpContainer from './HelpContainer';
import SocialMedia from './SocialMedia';

const Index = ({ children }) => (
    <div>
        <IndexDeliveryLabel />
        {children}
        <ShopperStyle />
        <HelpContainer />
        <SocialMedia />
    </div>
);

export default Index;
