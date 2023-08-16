import { Request, Response } from "express";
import mercadopago from 'mercadopago';
export const createOrder =  async (req: Request, res: Response) =>
{
mercadopago.configure({
    access_token: 'TEST-8252368852972571-080912-72b62ce94990f80ed7024b0cdb8e7312-1446607740'
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

const result = await mercadopago.preferences.create({
  items:[
      {
        title: 'Test',
        unit_price: 10.5,
        currency_id: 'ARS',
        quantity: 1,

      }

  ]
})
console.log(result);
res.send("creating order")}
