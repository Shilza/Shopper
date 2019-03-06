import styled from 'styled-components';
import React from 'react';

const GenderSwitchContainer = styled.ul`
    font-size: 0.9em;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
`;

const SwitchItem = styled.li`
    display: inline;
    padding: 3px;
    cursor: pointer;
    list-style-type: none;
    color: gray;
    transition: 200ms;
   
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
        <SwitchItem>Woman</SwitchItem>
        <SwitchItem>Man</SwitchItem>
    </GenderSwitchContainer>
);

export default GenderSwitch;
