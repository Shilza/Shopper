/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const DeliveryContainer = styled.div`
    color: #00a261;
    text-align: center;
    display: flex;
    align-items: center;
`;

const DeliveryBox = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const Delivery = () => (
    <DeliveryContainer>
        <DeliveryBox src="https://static.bershka.net/4/static/itxwebstandard/images/home/fs.png?20190319025255" />
        Free standard shipping and delivery points for orders over 1000$.
    </DeliveryContainer>
);

export default Delivery;
