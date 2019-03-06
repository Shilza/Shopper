import styled from 'styled-components';
import React from 'react';

const StyledDeliveryLabel = styled.div`
    text-align: center;
    background: black;
    color: white;
    padding: 10px 0 10px 0;
    font-size: 0.8em;
    font-weight: normal;
`;

const IndexDeliveryLabel = () => (
    <StyledDeliveryLabel>Free delivery on orders over 300$</StyledDeliveryLabel>
);

export default IndexDeliveryLabel;
