import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'Hello Wolrd' });
});

app.listen(3333, () => {
  console.log('server Started!');
});
