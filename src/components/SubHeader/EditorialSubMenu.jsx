/* eslint-disable max-len */
import React from 'react';
import OneLineList from './OneLineList';

const items = [
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/editorial/UNDRESS.jpg?20190306024500',
        text: 'Undress to Dress'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/editorial/CAMPAIGN_SS19.jpg?20190306024500',
        text: 'Campaign SS19'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/editorial/MAKE_A_SPLASH.jpg?20190306024500',
        text: 'Make a Splash'
    }
];

const EditorialSubMenu = () => <OneLineList items={items} />;

export default EditorialSubMenu;
