// @flow

const delay = (duration: number) =>
    new Promise((resolve: () => mixed) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });

export default delay;
