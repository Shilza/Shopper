/* eslint-disable react/no-array-index-key,max-len */
import React from 'react';
import Stack from './Stack';

const collections = [
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010193229.jpg?20190306024500',
        text: 'Denim collection'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010193228.jpg?20190306024500',
        text: 'Evening collection'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010352017.jpg?20190306024500',
        text: 'Neon mood'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010310507.jpg?20190306024500',
        text: 'Movie and music strs'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010319011.jpg?20190306024500',
        text: 'Collection "Join life"'
    }
];

const CollectionsSection = () => (
    <Stack title="Collections" items={collections} />
);

export default React.memo(CollectionsSection);
