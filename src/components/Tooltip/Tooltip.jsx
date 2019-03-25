// @flow
import * as React from 'react';
import styled from 'styled-components';

const TooltipText = styled.span`
    visibility: hidden;
    position: absolute;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    top: -5px;
    left: 125%;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent #555 transparent transparent;
    }
`;

const StyledTooltip = styled.div`
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    outline: 0;
    border: 0;

    &:hover ${TooltipText} {
        visibility: visible;
        opacity: 1;
    }
`;

type PropTypes = {
    text: string,
    children: React.Element
};

const Tooltip = ({ text, children }: PropTypes) => (
    <StyledTooltip>
        {children}
        <TooltipText>{text}</TooltipText>
    </StyledTooltip>
);

export default Tooltip;
