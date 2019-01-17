import * as bodyParser from 'body-parser';
import Express from 'express';
import Routes from './routes';

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(Routes);

app.listen(3000, () => {
    console.info('Server Started')
});