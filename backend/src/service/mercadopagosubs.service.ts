//_______________________________________________________________
/*
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>

<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
*/

//------------------------------------------------
/*
import { Request, Response } from "express";
import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: 'TEST-8252368852972571-080912-72b62ce94990f80ed7024b0cdb8e7312-1446607740' //mandarlo como variable de entorno alv
});
{
    "reason": "Test Subscription",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "start_date": "2020-06-02T13:07:14.260Z",
        "end_date": "2022-07-20T15:59:52.581Z",
        "transaction_amount": 10,
        "currency_id": "ARS"
    },
    "payer_email": "test_user+1020927396@testuser.com",
    "card_token_id": "{{EL_CARD_TOKEN_QUE_CREASTE}}",
    "status": "authorized"
}
*/