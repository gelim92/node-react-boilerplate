import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import Yaml from 'yamljs';
import 'module-alias/register';
import { port } from '~/config';
import routes from '~/routes';
import { HttpException } from '~/utils/HttpException';

const swaggerDocument = Yaml.load(path.resolve(__dirname, './swagger.yaml'));

const expressLoader = (app: express.Application) => {
  app.use(cors());

  app.get('/status', (_, res) => {
    res.send('OK!');
  });

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(bodyParser.json());
  app.use('/', routes());

  /// catch 404 and forward to error handler
  app.use((_req, _res, next) => {
    next(new HttpException(404, 'Not Found'));
  });

  app.use((err: HttpException, _req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(err.status || 500).json({
      message: err.message,
    });
  });
};

async function startServer() {
  const app = express();
  expressLoader(app);

  app
    .listen(port, () => {
      console.log('################################################');
      console.log(`# Server Listening on port: ${port}`);
      console.log('################################################');
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
}

startServer();
