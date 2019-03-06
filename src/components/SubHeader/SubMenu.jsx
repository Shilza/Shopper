import * as React from 'react';
import styled from 'styled-components';
import IndexPageStore from '../../models/IndexPageStore';

const StyledSubMenu = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 2;
    top: 40px;
    min-height: 350px;
    height: auto;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: white;
    width: 100%;
    max-width: 1600px;
    margin: 0 2%;
    padding: 20px;
`;

const SubMenu = () => {
    const enableSubMenu = () => {
        IndexPageStore.isHoverMenu = true;
    };

    const disableSubMenu = () => {
        IndexPageStore.isHoverMenu = false;
    };

    return (
        <StyledSubMenu
            onFocus={enableSubMenu}
            onMouseOver={enableSubMenu}
            onMouseLeave={disableSubMenu}
        >
            <Container>{IndexPageStore.displayedComponent}</Container>
        </StyledSubMenu>
    );
};

export default React.memo(SubMenu);
