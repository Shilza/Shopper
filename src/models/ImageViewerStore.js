// @flow
/* eslint-disable prettier/prettier */

import { action, observable } from 'mobx';

class ImageViewerStore {
    @observable shown: boolean = false;

    @observable src: string;

    @action openViewer(src: string) {
       this.shown = true;
       this.src = src;
    };

    @action closeViewer() {
        this.shown = false;
        this.src = '';
    };
}

export default new ImageViewerStore();