
# Cricket Score WhatsApp Bot


•	Developed a WhatsApp bot using WhatsApp Api and integrated it with a live cricket score API to provide users with real-time updates on ongoing cricket matches.






## 🛠 Languages/API used
- Backend :  Express, Node.js, javascript, WhatsApp Api.
- DataBase : MongoDB


## Demo

[Youtube demo video]('https://youtu.be/45kg5kKLtv4')


## Features

-  Provide real time cricket score on WhatsApp



## Deployment

I deployed this project on glitch (by default meta WhatsApp api redirect to glitch website for testing api) .

Make sure All the files are on glitch and environmental variable and you are ready to go.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`WHATSAPP_TOKEN` 

`verify_token`

`MONGO_DB`

`FROM_PHONE_NUMBER_ID`

`TO_PHONE_NUMBER`

`SCORE_API_BASE_URL`




## Documentation

Basic work flow of Bot is:

We are using cricket score API(any api ) and WhatsApp API


Message
``
start
``
the WhatsApp API webhook will detect this message and send back list of live cricket matches.


Step2

Select any of one from list of matches ,again WhatsApp Api detect this and backend code send use a option to
``get score per over `` or ``get score per ball``


Step3

The backend code send request to cricket score API which **return back current score** of current match selected and backend end send user the required score.
