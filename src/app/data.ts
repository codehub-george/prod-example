import { Product } from './classes';

export const products: Product[] = [
    {
        id: 1,
        name: 'name1',
        type: 'type1',
        description: 'descprition1',
        newEntry: true,
        attributes: [{
            attributeName: 'attributeName1',
            id: 1
        }]
    },
    {
        id: 2,
        name: 'name2',
        type: 'type2',
        description: 'descprition2',
        newEntry: true,
        attributes: [{
            attributeName: 'attributeName2',
            id: 2
        }]
    },
    {
        id: 3,
        name: 'name3',
        type: 'type3',
        description: 'descprition3',
        newEntry: false,
        attributes: [{
            attributeName: 'attributeName6',
            id: 6
        }]
    },
    {
        id: 4,
        name: 'name4',
        type: 'type4',
        description: 'descprition4',
        newEntry: true,
        attributes: [{
            attributeName: 'attributeName1',
            id: 1
        }]
    }
];
