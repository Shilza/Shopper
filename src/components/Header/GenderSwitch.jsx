import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GenderSwitchContainer = styled.div`
    font-size: 0.9em;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
`;

const SwitchItem = styled(Link)`
    display: inline;
    padding: 3px;
    cursor: pointer;
    list-style-type: none;
    color: gray;
    transition: 200ms;
    text-decoration: none;
    outline: none;
   
   :hover {
    color: black;
    font-weight: 600;
   }
   
   :first-child {
   border-right: 1px solid #efefef;
   padding-right: 18px;
   }
   
   :last-child {
   padding-left: 15px;
`;

const GenderSwitch = () => (
    <GenderSwitchContainer>
        <SwitchItem to="/women">Women</SwitchItem>
        <SwitchItem to="/men">Men</SwitchItem>
    </GenderSwitchContainer>
);

export default GenderSwitch;
