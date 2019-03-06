// @flow

import * as React from 'react';
import { useHover } from '../../utils/hooks';
import IndexPageStore from '../../models/IndexPageStore';
import StyledListItem from './StyledListItem';

type PropTypes = {
    children: Element,
    title: string
};

const ListItem = ({ children, title }: PropTypes) => {
    const [hoverRef, isHovered] = useHover();

    IndexPageStore.setIsHovered(isHovered);
    if (isHovered) IndexPageStore.displayedComponent = children;

    return <StyledListItem ref={hoverRef}>{title}</StyledListItem>;
};

export default ListItem;
