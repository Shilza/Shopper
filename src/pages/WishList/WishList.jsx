/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import WishStore from '../../models/WishStore';
import WishImageContainer from '../../components/WishImageContainer/WishImageContainer';
import EmptyContainer from './EmptyContainer';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 20px;
    align-items: center;
    width: 25%;

    @media (max-width: 550px) {
        width: 100%;
        margin: 0 0 20px 0;
    }
`;

const Title = styled.h4`
    margin: 0px;
    white-space: nowrap;
`;

const TitleLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const BuyButton = styled.button`
    border: 0;
    background: black;
    outline: none;
    color: white;
    margin-top: 10px;
    padding: 6px 26px;
    transition: 0.3s;

    &:hover {
        background: #00a261;
    }
`;

const WishList = () => (
    <Container>
        {WishStore.items.map(item => (
            <Card>
                <WishImageContainer item={item} />
                <TitleLink to={`/product/${item.id}`}>
                    <Title>{item.title}</Title>
                </TitleLink>
                <BuyButton>Buy now</BuyButton>
            </Card>
        ))}
        {!WishStore.count && <EmptyContainer />}
    </Container>
);

export default observer(WishList);
