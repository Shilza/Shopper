/* eslint-disable react/no-array-index-key,max-len */

import React from 'react';
import all from '../../images/promo/all.jpg';
import dress from '../../images/promo/dress.jpg';
import footwear from '../../images/promo/footwear.jpg';
import accessories from '../../images/promo/accessories.jpg';
import OneLineList from './OneLineList';

const items = [
    {
        src: all,
        text: 'See all'
    },
    {
        src: dress,
        text: 'Dress'
    },
    {
        src: footwear,
        text: 'Footwear'
    },
    {
        src: accessories,
        text: 'Accessories'
    }
];

const OfferSubMenu = () => <OneLineList items={items} textColor="red" />;

export default OfferSubMenu;
