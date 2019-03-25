// @flow

import React from 'react';
import styled from 'styled-components';
import Color from '../../../components/Icons/Color';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const ColorContainer = ({ color }: { color: string }) => (
    <Container>
        <span>Color: {color}</span>
        <Color color={color} />
    </Container>
);

export default ColorContainer;
