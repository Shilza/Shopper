// @flow
/* eslint-disable react/no-array-index-key,no-plusplus */
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import ImageContainer from './ImageContainer';
import ImageViewer from './ImageViewer';
import ImageScrollerStore from '../../../models/ImageScrollerStore';
import { Slider, SliderSection } from '../../../components/Slider/Slider';

const Container = styled.div`
    flex: 6 1;
    max-width: 1000px;
`;

const ImageScroller = ({ images }: { images: Array<string> }) => {
    const snapRef = React.useRef();
    const getScrollWidth = () => {
        if (snapRef.current) {
            const child = snapRef.current.firstChild;
            return parseInt(
                window.getComputedStyle(child, null).getPropertyValue('width'),
                10
            );
        }
        return 0;
    };
    const snapRight = (event: SyntheticEvent<HTMLButtonElement>) => {
        ImageScrollerStore.setPage(ImageScrollerStore.page + 1);
        event.stopPropagation();
    };
    const snapLeft = (event: SyntheticEvent<HTMLButtonElement>) => {
        ImageScrollerStore.setPage(ImageScrollerStore.page - 1);
        event.stopPropagation();
    };

    let timeout = false;
    const scroll = () => {
        if (timeout !== false) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            if (snapRef.current)
                ImageScrollerStore.setPage(
                    Math.round(snapRef.current.scrollLeft / getScrollWidth())
                );
        }, 300);
    };
    const { page } = ImageScrollerStore;
    if (snapRef.current) {
        const scrollWidth =
            page * getScrollWidth() - snapRef.current.scrollLeft;
        if (Math.abs(scrollWidth) > 20)
            snapRef.current.scrollBy(scrollWidth, 0);
    }

    return (
        <Container>
            <Slider ref={snapRef} onScroll={scroll}>
                {images.map((src: string, index: number) => (
                    <SliderSection key={index}>
                        <ImageContainer
                            src={src}
                            index={index}
                            leftButtonShown={index > 0}
                            rightButtonShown={index !== images.length - 1}
                            snapRight={snapRight}
                            snapLeft={snapLeft}
                        />
                    </SliderSection>
                ))}
            </Slider>
            <ImageViewer />
        </Container>
    );
};

export default observer(ImageScroller);
