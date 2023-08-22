//IMPLEMENTACIÓN DEL FORMULARIO DE LA TARJETA CHECKOUT BRICKS

/* PARA FRONT 
<head>
  <script src="https://sdk.mercadopago.com/js/v2">
  </script>
</head>
<body>
  <div id="paymentBrick_container">
  </div>
  <script>
  const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
    locale: 'es-COL'
  });
  const bricksBuilder = mp.bricks();
    const renderPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          /*
            "amount" es el monto total a pagar por todos los medios de pago con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
          
            amount: 10000,
            preferenceId: "<PREFERENCE_ID>",
            payer: {
              firstName: "",
              lastName: "",
              email: "",
            },
          },
          customization: {
            visual: {
              style: {
                theme: "default",
              },
            },
            paymentMethods: {
              creditCard: "all",
                      debitCard: "all",
                      bankTransfer: "all",
                      atm: "all",
                      onboarding_credits: "all",
                      wallet_purchase: "all",
              maxInstallments: 12
            },
          },
          callbacks: {
            onReady: () => {
              /*
               Callback llamado cuando el Brick está listo.
               
              
            },
            onSubmit: ({ selectedPaymentMethod, formData }) => {
              // callback llamado al hacer clic en el botón de envío de datos
              return new Promise((resolve, reject) => {
                fetch("/process_payment", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                })
                  .then((response) => response.json())
                  .then((response) => {
                    // recibir el resultado del pago
                    resolve();
                  })
                  .catch((error) => {
                    // manejar la respuesta de error al intentar crear el pago
                    reject();
                  });
              });
            },
            onError: (error) => {
              // callback llamado para todos los casos de error de Brick
              console.error(error);
            },
          },
        };
        window.paymentBrickController = await bricksBuilder.create(
          "payment",
          "paymentBrick_container",
          settings
        );
      };
      renderPaymentBrick(bricksBuilder);
    </script>
  </body>
  </html>

*/
import * as MercadoPago from 'mercadopago'; 
import { Request, Response } from "express";
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();

//PARA BACK 

// TARJETA DEBITO - CREDITO 

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

var payment_data = {
  amount: req.body.amount,
  
}
mercadopago.payment.save(payment_data)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });

  // PSE - MERCADOPAGO

    var payment_data = {
      transaction_amount: 100,
      description: 'Título do produto',
      payment_method_id: 'pix',
      issuer_id: req.body.issuer,
      notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
      payer: {
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        identification: {
            type: 'CPF',
            number: '19119119100'
        },
        address:  {
            zip_code: '06233200',
            street_name: 'Av. das Nações Unidas',
            street_number: '3003',
            neighborhood: 'Bonfim',
            city: 'Osasco',
            federal_unit: 'SP'
        }
      }
    };

    mercadopago.payment.create(payment_data).then(function (data) {

    }).catch(function (error) {

    });

    // PLAN ASOCIADO 

    mercadopago.post("/preapproval_plan", (req, res) => {
 //Arreglar esa función
      var plan = {
        url: 'https://api.mercadopago.com/preapproval_plan',
        headers: {
          'Authorization': 'Bearer [MERCADO PAGO ACCESS TOKEN]',
          'Content-Type': 'application/json'
        },
        body: {
          reason: "Yoga classes",
          auto_recurring: {
            frequency: 1,
            frequency_type: "months",
            repetitions: 12,
            billing_day: 10,
            billing_day_proportional: true,
            free_trial: {
              frequency: 1,
              frequency_type: "months"
          },
          transaction_amount: 10,
          currency_id: "ARS"
        },
        payment_methods_allowed: {
          payment_types: [
            {}
          ],
          payment_methods: [
            {}
          ]
        },
        back_url: "https://www.yoursite.com"
      }}
   })

   request(options, function (error, response, body) {
    if (error) throw new Error(error);
  });
  res.status(200)

  // SUBSCRIPCIÓN

  mercadopago.post("/preapproval", (req, res) => {
 //Arreglar esa función
    var subscription = {
      url: 'https://api.mercadopago.com/preapproval',
      headers: {
        'Authorization': 'Bearer [MERCADO PAGO ACCESS TOKEN]',
        'Content-Type': 'application/json'
      },
      body: {
        preapproval_plan_id: "2c938084726fca480172750000000000",
        reason: "Yoga classes",
        external_reference: "YG-1234",
        payer_email: "test_user@testuser.com",
        card_token_id: "e3ed6f098462036dd2cbabe314b9de2a",
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          start_date: "2020-06-02T13:07:14.260Z",
          end_date: "2022-07-20T15:59:52.581Z",
          transaction_amount: 10,
          currency_id: "ARS"
  },
  back_url: "https://www.mercadopago.com.co",
  status: "authorized"
}}})

request(options, function (error, res, body) {
  if (error) throw new Error(error);
});
res.status(200)



//WEBHOOKS

switch (req.body.type) {
  case "payment":
    MercadoPago.payment.findById(req.body.data.id, function (err, payment_data) {
      if (err) throw new Error(error);
         else {
        res.status(200)
      }
    });
    break;
  case "plan":
    MercadoPago.plan.findById(req.body.data.id, function (err, plan) {
      if (err) throw new Error(error);
         else {
        res.status(200)
      }
    });
    break;
  case "subscription":
    MercadoPago.subscription.findById(req.body.data.id, function (err, subscription) {
      if (err) throw new Error(error);
         else {
        res.status(200)
      }
    });
    break;
}


