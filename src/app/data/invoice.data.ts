import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: 'Pc Component',
    client: {
        name: 'wil',
        lastName: 'campos',
        address: {
            country: 'colombia',
            city: 'bogota',
            street: '123',
            number: '12'
        }
    },
    company: {
        name: 'company132',
        fiscalNumber: 123
    },
    items: [
        {
            id: 1,
            product: 'pc',
            price: 122,
            quantity: 2
        },

          {
            id: 2,
            product: 'Ram',
            price: 300,
            quantity: 3
        },

    ]
}