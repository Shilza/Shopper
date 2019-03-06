// @flow
/* eslint-disable prettier/prettier */

import { action, observable } from 'mobx';
import delay from "../utils/delay";

class IndexPageStore {
    @observable isHoverListItem: boolean = false;

    @observable isHoverMenu: boolean = false;

    @observable displayedComponent: Element;

    @action setIsHovered(value: boolean) {
        delay(100).then(() => {this.isHoverListItem = value});
    };
}

export default new IndexPageStore();