// @flow
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import Heart from '../../components/Icons/Heart';
import WishStore from '../../models/WishStore';
import Tooltip from '../../components/Tooltip/Tooltip';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    height: 100%;
    padding-left: 8px;
`;

const AddToWishListButton = styled.button`
    margin: 0 0 26px;
    border: 0;
    outline: none;
    cursor: pointer;
    background: transparent;
`;

const AddToWishListContainer = ({ id }: { id: number }) => {
    const addToWishList = () => {
        if (WishStore.isAdded(id)) WishStore.removeItemId(id);
        else WishStore.addItemId(id);
    };

    const background = WishStore.isAdded(id) ? 'black' : 'transparent';
    const tooltipText = WishStore.isAdded(id) ? 'Remove' : 'Add to wish list';
    return (
        <Container>
            <Tooltip text={tooltipText}>
                <AddToWishListButton>
                    <Heart background={background} onClick={addToWishList} />
                </AddToWishListButton>
            </Tooltip>
        </Container>
    );
};

export default observer(AddToWishListContainer);
