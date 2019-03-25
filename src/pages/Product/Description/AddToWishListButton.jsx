// @flow
import React from 'react';
import { observer } from 'mobx-react-lite';
import WishStore from '../../../models/WishStore';
import FooterButton from './FooterButton';

const AddToWishListButton = ({ id }: { id: number }) => {
    const isAddedToWishList = WishStore.isAdded(id);
    const addToWishList = () => {
        if (isAddedToWishList) WishStore.removeItemId(id);
        else WishStore.addItemId(id);
    };

    return (
        <FooterButton onClick={addToWishList}>
            {isAddedToWishList ? 'Remove from wish list' : 'Add to wish list'}
        </FooterButton>
    );
};

export default observer(AddToWishListButton);
