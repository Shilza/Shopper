import styled from 'styled-components';
import React from 'react';
import { observer } from 'mobx-react-lite';
import SubMenu from './SubMenu';
import IndexPageStore from '../../models/IndexPageStore';
import SubHeaderList from './SubHeaderList';

const StyledSubHeader = styled.nav`
    display: flex;
    border-bottom: 1px solid #efefef;
    position: relative;
`;

const SubHeader = () => (
    <StyledSubHeader>
        <SubHeaderList />
        {(IndexPageStore.isHoverListItem || IndexPageStore.isMenuShown) && (
            <SubMenu />
        )}
    </StyledSubHeader>
);

export default observer(SubHeader);
