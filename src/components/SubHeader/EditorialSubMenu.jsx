/* eslint-disable max-len */
import React from 'react';
import undress from '../../images/editorial/undress.jpg';
import campaign from '../../images/editorial/campaign.jpg';
import splash from '../../images/editorial/splash.jpg';
import OneLineList from './OneLineList';

const items = [
    {
        src: undress,
        text: 'Undress to Dress'
    },
    {
        src: campaign,
        text: 'Campaign SS19'
    },
    {
        src: splash,
        text: 'Make a Splash'
    }
];

const EditorialSubMenu = () => <OneLineList items={items} />;

export default EditorialSubMenu;
