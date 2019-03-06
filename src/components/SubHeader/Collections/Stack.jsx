/* eslint-disable react/no-array-index-key */

// @flow
import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
`;

const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 20px;
`;

const Text = styled.span`
    font-size: 0.8em;
    color: gray;
    transition: 200ms;

    :hover {
        color: black;
    }
`;

type ItemType = {
    src: string,
    text: string
};

type PropTypes = {
    items: Array<ItemType>,
    title: string
};

const Stack = ({ items, title }: PropTypes) => (
    <Container>
        <SectionTitle>{title}</SectionTitle>
        {items.map((item: ItemType, index: number) => (
            <Item key={index}>
                <Image src={item.src} />
                <Text>{item.text}</Text>
            </Item>
        ))}
    </Container>
);

export default Stack;
