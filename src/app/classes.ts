export interface BasicProduct {
    id: number;
    name: string;
}

export interface Product extends BasicProduct {
    type: string;
    description: string;
    newEntry: boolean;
    attributes: Attribute[];
    weight?: number;
    height?: number;
}

export interface Attribute {
    id: number;
    attributeName: string;
}
