import { Router } from 'express';
import todo from '~/routes/todos';

export default () => {
  const app = Router();
  todo(app);
  return app;
};
