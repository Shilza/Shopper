/* eslint-disable max-len */
import React from 'react';
import Stack from './Stack';

const images = [
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010195501.jpg?20190306024500',
        text: 'Novetly'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010281014.jpg?20190306024500',
        text: 'BestSellers ⭐'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010221018.jpg?20190306024500',
        text: 'Coming soon'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010352019.jpg?20190306024500',
        text: 'Footwear'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010352020.jpg?20190306024500',
        text: 'Accessories'
    }
];

const Favorites = () => <Stack title="Favorites" items={images} />;

export default React.memo(Favorites);
