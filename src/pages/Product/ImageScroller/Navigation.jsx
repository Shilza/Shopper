// @flow
import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../../../components/Icons/LeftArrow';
import RightArrow from '../../../components/Icons/RightArrow';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`;

const NavigationButton = styled.button`
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonLeft = styled(NavigationButton)`
    margin-left: 10px;
`;

const ButtonRight = styled(NavigationButton)`
    margin-right: 10px;
`;

type PropTypes = {
    snapLeft: () => void,
    snapRight: () => void,
    leftButtonShown: boolean,
    rightButtonShown: boolean
};

const Navigation = ({
    leftButtonShown,
    rightButtonShown,
    snapLeft,
    snapRight
}: PropTypes) => {
    return (
        <Container>
            {leftButtonShown ? (
                <ButtonLeft onClick={snapLeft}>
                    <LeftArrow />
                </ButtonLeft>
            ) : (
                <span />
            )}
            {rightButtonShown && (
                <ButtonRight onClick={snapRight}>
                    <RightArrow />
                </ButtonRight>
            )}
        </Container>
    );
};

export default Navigation;
