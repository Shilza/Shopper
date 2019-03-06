// @flow
/* eslint-disable react/no-array-index-key */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: 200ms;
    margin: 10px;

    :hover {
        font-weight: 600;
    }
`;

const ImageContainer = styled.div`
    height: 190px;
    width: 280px;
    overflow: hidden;
`;

const Image = styled.img`
    height: inherit;
    width: inherit;
    transition: 300ms;

    :hover {
        transform: scale(1.1);
    }
`;

const Text = styled.span`
    font-size: 0.7em;
    color: ${(props: { textColor: string }) => props.textColor};
    margin: 20px 0;
`;

type Item = {
    src: string,
    text: string
};

type PropTypes = {
    items: Array<Item>,
    textColor: string
};

const OneLineList = ({ items, textColor = 'black' }: PropTypes) => (
    <Container>
        {items.map((item: Item, index: number) => (
            <Card key={index}>
                <ImageContainer>
                    <Image src={item.src} alt={`Special offer ${index}`} />
                </ImageContainer>
                <Text textColor={textColor}>{item.text}</Text>
            </Card>
        ))}
    </Container>
);

export default OneLineList;
