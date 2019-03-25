import styled from 'styled-components';
import React from 'react';

const StyledDeliveryLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    padding: 12px 0;
    font-size: 0.9em;
    font-weight: normal;
`;

const IndexDeliveryLabel = () => (
    <StyledDeliveryLabel>Free delivery on orders over 300$</StyledDeliveryLabel>
);

export default IndexDeliveryLabel;
