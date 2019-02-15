# Fake Card Service
-------------------
This project provides 2 services to allow testing of an online payment card capture service. 
They provide a fake 'save card' service and a fake 3DS authentication service.

## Verifone Save Card Endpoint
This endpoint simulates the 'Save PaymentCard' endpoint offered by Verifone and used during a payment journey.
The endpoint simply accepts a form Post and redirects the user back to the referral URL with a ?done=true added
to the end to emulate a success addition of a payment card.

## 3DS Authentication Endpoint
This endpoint provides a fake 3DS payment card authentication, and requires a form post with PaReq and MD
parameters and render a page for the user to 'authorise' before simulating a call to an included fake backend
and finally calls back to the originator with ?done=true also
