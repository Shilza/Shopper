// @flow
/* eslint-disable flowtype/no-weak-types */

const delay = (duration: number): Promise<any> =>
    new Promise((resolve: () => mixed) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });

export default delay;
