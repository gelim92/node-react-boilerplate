import { Router } from 'express';

const todosMock = [
  {
    id: '1',
    name: 'Get eggs',
  },
  {
    id: '2',
    name: 'Get milk',
  },
];

export default (app: Router) => {
  const route = Router();
  app.use('/todos', route);

  route.get('/', (req, res) => {
    console.log('Getting todo list');
    res.json(todosMock).status(200);
  });

  route.get('/:id', (req, res) => {
    console.log('Getting todo id:', req.params.id);
    res.json(todosMock[0]).status(200);
  });
};
