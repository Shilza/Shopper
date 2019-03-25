// @flow
/* eslint-disable prettier/prettier */

import { observable, action } from 'mobx';

class DrawerStore {
    @observable open: boolean = false;

    @action setOpen(value: boolean) {
        this.open = value;
    }
}

export default new DrawerStore();