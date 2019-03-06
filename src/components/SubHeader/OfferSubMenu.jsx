/* eslint-disable react/no-array-index-key,max-len */

import React from 'react';
import OneLineList from './OneLineList';

const items = [
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/blockimage/1010242513.jpg?20190306024500',
        text: 'See all'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/blockimage/1010248510.jpg?20190306024500',
        text: 'Dress'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/blockimage/1010248511.jpg?20190306024500',
        text: 'Footwear'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/blockimage/1010252518.jpg?20190306024500',
        text: 'Accessories'
    }
];

const OfferSubMenu = () => <OneLineList items={items} textColor="red" />;

export default OfferSubMenu;
