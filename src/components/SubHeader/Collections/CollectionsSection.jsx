/* eslint-disable react/no-array-index-key,max-len */
import React from 'react';
import eveningCollection from '../../../images/collections/eveningCollection.jpg';
import denim from '../../../images/collections/denim.jpg';
import neonMood from '../../../images/collections/neonMood.jpg';
import movie from '../../../images/collections/movie.jpg';
import joinLife from '../../../images/collections/joinLife.jpg';
import Stack from './Stack';

const collections = [
    {
        src: denim,
        text: 'Denim collection'
    },
    {
        src: eveningCollection,
        text: 'Evening collection'
    },
    {
        src: neonMood,
        text: 'Neon mood'
    },
    {
        src: movie,
        text: 'Movie and music strs'
    },
    {
        src: joinLife,
        text: 'Collection "Join life"'
    }
];

const CollectionsSection = () => (
    <Stack title="Collections" items={collections} />
);

export default React.memo(CollectionsSection);
