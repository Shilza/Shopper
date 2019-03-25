import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import MediaQuery from 'react-responsive';
import ImageViewerStore from '../../../models/ImageViewerStore';

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    width: 100%;
    height: auto;
    z-index: 10;
`;

const ImageViewer = () => {
    const [cursorPosition, setCursorPosition] = useState(0);

    const changeScrollPosition = ({ pageY }) => {
        if (!cursorPosition) setCursorPosition(pageY);
        window.scrollBy(0, (pageY - cursorPosition) / 1.4);
        setCursorPosition(pageY);
    };

    return (
        <>
            <MediaQuery minWidth={769}>
                {ImageViewerStore.shown && (
                    <Image
                        src={ImageViewerStore.src}
                        onMouseMove={changeScrollPosition}
                        onClick={() => ImageViewerStore.closeViewer()}
                    />
                )}
            </MediaQuery>
        </>
    );
};

export default observer(ImageViewer);
