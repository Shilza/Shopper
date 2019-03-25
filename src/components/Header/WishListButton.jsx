import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import WishStore from '../../models/WishStore';
import Badge from '../Badge/Badge';
import Heart from '../Icons/Heart';

const StyledWishListButton = styled(Link)`
    border: 0;
    background: transparent;
    outline: none;
    cursor: pointer;
`;

const WishListButton = () => (
    <StyledWishListButton to="/wish-list">
        <Badge count={WishStore.count}>
            <Heart />
        </Badge>
    </StyledWishListButton>
);

export default observer(WishListButton);
