/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './nav.module.css';
import DrawerStore from '../../../models/DrawerStore';

const Nav = () => {
    const className = DrawerStore.open
        ? `${styles.navIcon} ${styles.open}`
        : styles.navIcon;
    const openDrawer = () => {
        DrawerStore.setOpen(true);
    };

    return (
        <div role="region" className={className} onClick={openDrawer}>
            <span />
            <span />
            <span />
        </div>
    );
};

export default observer(Nav);
