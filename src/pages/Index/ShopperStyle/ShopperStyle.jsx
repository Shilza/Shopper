import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const ShopperStyleLabel = styled.div`
    padding: 30px 0 30px 0;
    text-align: center;
    font-weight: 800;
    font-size: 1.5em;
    background: #fff;
    color: black;
`;

const ImageDarkenerButton = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    opacity: 0;
    text-align: center;
    transition: 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    text-transform: uppercase;

    @media (min-width: 1440px) {
        font-size: 1.5em;
    }
`;

const ShopperStyleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    height: 33vw;

    div {
        position: relative;

        &:hover ${ImageDarkenerButton} {
            opacity: 1;
        }
    }
`;

const MainImage = styled.div`
    grid-area: 1 / 1 / 3 / 3;
`;

const ShopperStyleImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const images = [
    'https://z1photorankmedia-a.akamaihd.net/media/6/v/g/6vg9fg4/normal.jpg',
    'https://z3photorankmedia-a.akamaihd.net/media/s/u/g/sug9fg4/mobile.jpg',
    'https://photorankmedia-a.akamaihd.net/media/e/p/g/epg9fg4/mobile.jpg',
    'https://z2photorankmedia-a.akamaihd.net/media/a/s/g/asg9fg4/mobile.jpg',
    'https://z2photorankmedia-a.akamaihd.net/media/i/q/g/iqg9fg4/mobile.jpg',
    'https://photorankmedia-a.akamaihd.net/media/p/8/h/p8hhcg4/mobile.jpg',
    'https://z3photorankmedia-a.akamaihd.net/media/2/x/g/2xghcg4/mobile.jpg',
    'https://photorankmedia-a.akamaihd.net/media/e/6/h/e6hhcg4/mobile.jpg',
    'https://z2photorankmedia-a.akamaihd.net/media/h/p/g/hpghcg4/mobile.jpg'
];

const renderImages = (image, index) => {
    if (index === 0)
        return (
            <MainImage>
                <ShopperStyleImage src={image} />
                <ImageDarkenerButton>Buy now</ImageDarkenerButton>
            </MainImage>
        );

    return (
        <div>
            <ShopperStyleImage src={image} />
            <ImageDarkenerButton>Buy now</ImageDarkenerButton>
        </div>
    );
};

const ShopperStyle = () => (
    <Scroll.Element name="shopperStyle">
        <ShopperStyleLabel>#shopperstyle</ShopperStyleLabel>
        <ShopperStyleContainer>
            {images.map(renderImages)}
        </ShopperStyleContainer>
    </Scroll.Element>
);

export default ShopperStyle;
