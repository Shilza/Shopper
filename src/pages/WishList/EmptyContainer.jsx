import React from 'react';
import styled from 'styled-components';
import Heart from '../../components/Icons/Heart';

const Container = styled.div`
    width: 100%;
    height: 74vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

const Title = styled.h1`
    font-size: 2.4em;
    font-weight: 1000;
    margin: 0;

    @media (max-width: 600px) {
        font-size: 1.7em;
    }
`;

const Hint = styled.h4`
    font-size: 1.2em;
`;

const AddToWishListButton = styled.button`
    margin: 0 0 0 10px;
    border: 0;
    outline: none;
    cursor: pointer;
    background: transparent;
`;

const EmptyContainer = () => (
    <Container>
        <Title>Wish list is empty</Title>
        <Hint>
            To add click this button
            <AddToWishListButton>
                <Heart />
            </AddToWishListButton>
        </Hint>
    </Container>
);

export default EmptyContainer;
