// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px dashed #efefef;
    padding-bottom: 15px;
`;

const StyledMetaInfo = styled.span`
    color: #999;
`;

type PropTypes = {
    number: string,
    size: string,
    height: number
};

const MetaInfo = ({ number, size, height }: PropTypes) => (
    <Container>
        <StyledMetaInfo>Number {number}</StyledMetaInfo>
        <StyledMetaInfo>
            Model wears size {size} |Model height:
            {height}
        </StyledMetaInfo>
    </Container>
);

export default MetaInfo;
