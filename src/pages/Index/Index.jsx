import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import IndexDeliveryLabel from './IndexDeliveryLabel';
import ImagesContainer from './ImagesContainer';
import ShopperStyle from './ShopperStyle/ShopperStyle';
import HelpContainer from './HelpContainer';
import SocialMedia from './SocialMedia';

const Index = () => (
    <div>
        <SubHeader />
        <IndexDeliveryLabel />
        <ImagesContainer />
        <ShopperStyle />
        <HelpContainer />
        <SocialMedia />
    </div>
);

export default Index;
