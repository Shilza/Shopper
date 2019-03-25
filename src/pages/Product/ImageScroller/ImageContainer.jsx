/* eslint-disable flowtype/no-weak-types */
// @flow

import React, { useState } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Navigation from './Navigation';
import ImageViewerStore from '../../../models/ImageViewerStore';

const Container = styled.div`
    outline: none;
`;

const Image = styled.img`
    width: 100%;
`;

type PropTypes = {
    src: string,
    snapRight: Function,
    snapLeft: Function,
    leftButtonShown: boolean,
    rightButtonShown: boolean
};

const ImageContainer = ({
    src,
    snapRight,
    snapLeft,
    leftButtonShown,
    rightButtonShown
}: PropTypes) => {
    const [isNavigationShow, setShowNavigation] = useState(false);

    const showNavigation = () => setShowNavigation(true);
    const hideNavigation = () => setShowNavigation(false);
    const openViewer = () => {
        ImageViewerStore.openViewer(src);
    };

    return (
        <Container
            onMouseOver={showNavigation}
            onMouseLeave={hideNavigation}
            onFocus={showNavigation}
            onBlur={hideNavigation}
            onClick={openViewer}
            onKeyUp={openViewer}
            role="button"
            tabIndex={0}
        >
            <Image src={src} alt="product" />
            <MediaQuery minWidth={769}>
                {isNavigationShow && (
                    <Navigation
                        leftButtonShown={leftButtonShown}
                        rightButtonShown={rightButtonShown}
                        snapRight={snapRight}
                        snapLeft={snapLeft}
                    />
                )}
            </MediaQuery>
        </Container>
    );
};

export default ImageContainer;
