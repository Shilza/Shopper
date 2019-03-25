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
    const [listItemRef, isHovered] = useHover();

    IndexPageStore.setIsHovered(isHovered);
    if (isHovered) IndexPageStore.setDisplayedComponent(children);

    return <StyledListItem ref={listItemRef}>{title}</StyledListItem>;
};

export default ListItem;
