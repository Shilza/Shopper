// @flow
/* eslint-disable prettier/prettier */

import { action, computed, observable } from 'mobx';
import products from '../pages/Product/products';
import type { ProductType } from '../pages/Product/products';

class WishStore {
    @observable itemsId: Array<number> = [];

    @action addItemId(id: number) {
        this.itemsId.push(id);
    };

    @action removeItemId(id: number) {
        this.itemsId = this.itemsId.filter((item: number) => item !== id);
    }

    isAdded(id: number): boolean {
        return this.itemsId.includes(id);
    }

    @computed get count(): number {
        return this.itemsId.length;
    }

    @computed get items(): Array<ProductType> {
        const items = [];
        this.itemsId.forEach((id: number) => {
            items.push(
                products.find((product: ProductType) => product.id === id)
            );
        });
        return items;
    }
}

export default new WishStore();