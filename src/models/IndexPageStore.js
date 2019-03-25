// @flow
/* eslint-disable prettier/prettier */

import { action, observable } from 'mobx';
import delay from "../utils/delay";

class IndexPageStore {
    @observable isHoverListItem: boolean = false;

    @observable isMenuShown: boolean = false;

    @observable displayedComponent: Element;

    @action setIsMenuShown(value: boolean) {
        this.isMenuShown = value;
    }

    @action setDisplayedComponent(component: Element) {
        this.displayedComponent = component;
    }

    @action setIsHovered(value: boolean) {
        delay(100).then(() => {this.isHoverListItem = value});
    };
}

export default new IndexPageStore();