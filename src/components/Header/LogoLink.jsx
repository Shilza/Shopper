import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogoLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
    outline: none;
`;

const LogoLink = () => <StyledLogoLink to="/">Shopper</StyledLogoLink>;

export default LogoLink;
