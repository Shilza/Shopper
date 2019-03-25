// @flow
/* eslint-disable prettier/prettier */

import { observable, action } from 'mobx';

class ImageScrollerStore {
    @observable page: number = 0;

    @action setPage(page: number) {
        this.page = page;
    }
}

export default new ImageScrollerStore();