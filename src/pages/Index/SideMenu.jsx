import React from 'react';
import styled from 'styled-components';
import LogoLink from '../../components/Header/LogoLink';
import GenderSwitch from '../../components/Header/GenderSwitch';
import SubHeader from '../../components/SubHeader/SubHeader';

const StyledGenderSwitch = styled.div`
    margin: 30px 0;
`;

const Container = styled.div`
    padding: 25px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SideMenu = () => (
    <Container>
        <Header>
            <LogoLink />
            <StyledGenderSwitch>
                <GenderSwitch />
            </StyledGenderSwitch>
        </Header>
        <SubHeader />
    </Container>
);

export default SideMenu;
