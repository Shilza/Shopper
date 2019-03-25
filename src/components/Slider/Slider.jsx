/* eslint-disable react/require-default-props */
// @flow
import styled from 'styled-components';
import React, { useEffect } from 'react';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill';

const StyledSlider = styled.div`
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vw);
    scroll-snap-type: x mandatory;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;

    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
        width: 0;
    }
    scrollbar-width: none;
`;

const SliderSection = styled.section`
    border-right: 1px solid white;
    min-width: 100%;
    max-width: 100%;
    scroll-snap-align: start;
    cursor: pointer;
    position: relative;
`;

type ReactObjRef<ElementType: React.ElementType> = {
    current: null | React.ElementRef<ElementType>
};

type PropTypes = {
    children: Node,
    onScroll?: () => mixed
};

const Slider = React.forwardRef(
    ({ children, onScroll = () => {} }: PropTypes, ref: ReactObjRef<'div'>) => {
        useEffect(() => {
            scrollSnapPolyfill();
        }, []);

        return (
            <StyledSlider ref={ref} onScroll={onScroll}>
                {children}
            </StyledSlider>
        );
    }
);

export { Slider, SliderSection };
