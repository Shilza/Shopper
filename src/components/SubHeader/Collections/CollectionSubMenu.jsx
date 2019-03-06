import React from 'react';
import MediaQuery from 'react-responsive';
import Favorites from './Favorites';
import Products from './Products';
import CollectionsSection from './CollectionsSection';
import ImagesBlock from './ImagesBlock';

const CollectionSubMenu = () => (
    <>
        <Favorites />
        <Products />
        <CollectionsSection />
        <MediaQuery minWidth={1150}>
            <ImagesBlock />
        </MediaQuery>
    </>
);

export default React.memo(CollectionSubMenu);
