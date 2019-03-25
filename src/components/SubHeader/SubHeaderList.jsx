import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import StyledListItem from './StyledListItem';
import ListItem from './ListItem';
import CollectionSubMenu from './Collections/CollectionSubMenu';
import OfferSubMenu from './OfferSubMenu';
import EditorialSubMenu from './EditorialSubMenu';

const { scroller } = Scroll;

const List = styled.ul`
    font-size: 0.9em;
    padding: 0;
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    color: gray;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const New = styled(Link)`
    text-decoration: none;
    outline: none;
    color: black;

    &:active {
        color: black;
    }
`;

const SubHeaderList = () => {
    const onClickShopperStyle = () => {
        scroller.scrollTo('shopperStyle', {
            duration: 350,
            delay: 100,
            smooth: true
        });
    };

    return (
        <List>
            <StyledListItem>
                <New to="/new">New</New>
            </StyledListItem>
            <ListItem title="Collections">
                <CollectionSubMenu />
            </ListItem>
            <ListItem title="Special offer -50%">
                <OfferSubMenu />
            </ListItem>
            <ListItem title="Editorial">
                <EditorialSubMenu />
            </ListItem>
            <StyledListItem onClick={onClickShopperStyle}>
                #shopper
            </StyledListItem>
        </List>
    );
};

export default React.memo(SubHeaderList);
