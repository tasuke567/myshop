import * as cors from 'cors';

const corsHandler = cors({origin: true});

export const exampleFunction= functions.https.onRequest(async (request, response) => {
    corsHandler(request, response, () => { 
      //Your code here
    });
    
});