// @flow
/* eslint-disable max-len,import/prefer-default-export */

const products = [
    {
        id: 1,
        images: [
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/2636/443/611/2636443611_1_1_3.jpg?t=15500740202061',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/2636/443/611/2636443611_2_3_3.jpg?t=15500740202061',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/2636/443/611/2636443611_2_1_3.jpg?t=15500740202061',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/2636/443/611/2636443611_2_2_3.jpg?t=15500740202061',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/2636/443/611/2636443611_2_4_3.jpg?t=15500740202061',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/2636/443/611/2636443611_2_5_3.jpg?t=15500740202061'
        ],
        title: 'T-shirt with print',
        collection: 'Join life',
        number: '2636/443/611',
        size: 'L',
        height: 185,
        price: 420,
        color: 'purple',
        extendInfo:
            'JOIN LIFE Care for fiber: 100% organic cotton. Organic cotton is grown using methods that promote the protection of biological diversity, such as crop rotation or the use of natural fertilizers.'
    },
    {
        id: 2,
        images: [
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/1414/916/505/1414916505_1_1_1.jpg?t=15523829290011',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/1414/916/505/1414916505_2_2_1.jpg?t=15523829290011',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/1414/916/505/1414916505_2_3_1.jpg?t=15523829290011',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/1414/916/505/1414916505_2_1_1.jpg?t=15523829290011',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/1414/916/505/1414916505_2_4_1.jpg?t=15523829290011',
            'https://static.bershka.net/4/photos2/2019/V/0/2/p/1414/916/505/1414916505_2_5_1.jpg?t=15523829290011'
        ],
        title: 'Basic jacket with pockets',
        collection: 'JS oriented',
        number: '1414/916/505',
        size: 'L',
        height: 188,
        price: 300,
        color: 'khaki',
        extendInfo:
            'Basic jacket with a classic collar. Pockets with flaps and button closure.'
    },
    {
        id: 3,
        images: [
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1162/168/520/1162168520_1_1_1.jpg?t=15531707720341',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1162/168/520/1162168520_2_1_1.jpg?t=15531707720341',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1162/168/520/1162168520_2_2_1.jpg?t=15531707720341',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1162/168/520/1162168520_2_4_1.jpg?t=15531707720341',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1162/168/520/1162168520_2_5_1.jpg?t=15531707720341'
        ],
        title: 'Vichy Check Jacket',
        collection: 'Orange juice',
        number: '1162/168/520',
        size: 'M',
        height: 180,
        price: 340,
        color: 'yellow',
        extendInfo: 'Care for fiber'
    },
    {
        id: 4,
        images: [
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1258/019/506/1258019506_1_1_1.jpg?t=15531036649271',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1258/019/506/1258019506_2_1_1.jpg?t=15531036649271',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1258/019/506/1258019506_2_2_1.jpg?t=15531036649271',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1258/019/506/1258019506_2_3_1.jpg?t=15531036649271',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1258/019/506/1258019506_2_4_1.jpg?t=15513746446211',
            'https://static.bershka.net/4/photos2/2019/V/0/1/p/1258/019/506/1258019506_2_5_1.jpg?t=15531036649271'
        ],
        title: 'Basic jacket shirt',
        collection: 'Bas',
        number: '1258/019/506',
        size: 'S',
        height: 180,
        price: 260,
        color: 'khaki',
        extendInfo:
            'Basic jacket of a shirt cut with pockets, contrast seams and buttons under a turtle.'
    }
];

export type ProductType = {
    id: number,
    images: Array<string>,
    title: string,
    collection: string,
    number: string,
    size: string,
    height: number,
    price: number,
    color: string,
    extendInfo: string
};

export default products;
