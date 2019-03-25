import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Drawer } from 'react-pretty-drawer';
import { observer } from 'mobx-react-lite';
import GenderSwitch from './GenderSwitch';
import RightMenu from './RightMenu';
import LogoLink from './LogoLink';
import Nav from '../Icons/Nav/Nav';
import DrawerStore from '../../models/DrawerStore';
import SideMenu from '../../pages/Index/SideMenu';
import WishListButton from './WishListButton';

const StyledHeader = styled.div`
    padding: 15px;
    background: white;
    border-bottom: 1px solid #efefef;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    const closeDrawer = () => {
        DrawerStore.setOpen(false);
    };
    return (
        <StyledHeader>
            <MediaQuery maxWidth={768}>
                <Nav />
                <Drawer
                    closable
                    width="80%"
                    visible={DrawerStore.open}
                    onClose={closeDrawer}
                >
                    <SideMenu />
                </Drawer>
            </MediaQuery>
            <MediaQuery minWidth={769}>
                <GenderSwitch />
            </MediaQuery>
            <LogoLink />
            <MediaQuery minWidth={769}>
                <RightMenu />
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <WishListButton />
            </MediaQuery>
        </StyledHeader>
    );
};

export default observer(Header);
