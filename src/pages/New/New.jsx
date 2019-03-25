/* eslint-disable max-len */
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../Product/products';
import Color from '../../components/Icons/Color';
import WishImageContainer from '../../components/WishImageContainer/WishImageContainer';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h4`
    margin: 0px;
`;

const TitleLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Price = styled.h5`
    margin-right: 5px;
    margin: 0;
`;

const PriceColorContainer = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
`;

const New = () => (
    <Container>
        {products.map(item => (
            <Card key={item.id}>
                <WishImageContainer item={item} />
                <TitleLink to={`/product/${item.id}`}>
                    <Title>{item.title}</Title>
                </TitleLink>
                <PriceColorContainer>
                    <Price>Price: {item.price}$</Price>
                    <Color color={item.color} />
                </PriceColorContainer>
            </Card>
        ))}
    </Container>
);

export default New;
