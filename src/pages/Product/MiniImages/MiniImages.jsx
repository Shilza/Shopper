// @flow
/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import ImageScrollerStore from '../../../models/ImageScrollerStore';
import StyledMiniImage from './StyledMiniImage';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1;
    align-self: flex-start;

    @media (max-width: 768px) {
        order: 2;
        display: flex;
        flex-direction: row;
        height: 100px;
        overflow-x: scroll;
        width: 100%;

        &::-webkit-scrollbar {
            width: 0;
        }
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`;

const MiniImages = ({ images }: { images: Array<string> }) => (
    <Container>
        {images.map((item: string, index: number) => (
            <StyledMiniImage
                src={item}
                key={index}
                border={ImageScrollerStore.page === index}
                onClick={() => {
                    ImageScrollerStore.setPage(index);
                }}
            />
        ))}
    </Container>
);

export default observer(MiniImages);
