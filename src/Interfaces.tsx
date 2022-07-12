export interface IPlant {
    name: string,
    price: string,
    image: string
}

export type GetResponse = {
    data: IPlant[];
}