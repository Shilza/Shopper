/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styles from './nav.module.css';
import DrawerStore from '../../../models/DrawerStore';

const Nav = () => {
    const openDrawer = () => {
        DrawerStore.setOpen(true);
    };

    return (
        <div role="region" className={styles.navIcon} onClick={openDrawer}>
            <span />
            <span />
            <span />
        </div>
    );
};

export default Nav;
