import { Request, Response } from "express";
export const createOrder =  (req: Request, res: Response) => res.send("creating order")

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'YOUR_ACCESS_TOKEN'
});

var preference = {
  items: [
    {
      title: 'Test',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 10.5
    }
  ]
};

mercadopago.preferences.create(preference)

//modificacion de preferencias para subscripciones de pago pendiente (cuenta propia)