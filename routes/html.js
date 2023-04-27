const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

router.get('/', (req, res) =>
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

router.post('/', (req, res) => {
  console.log(req.body);
    const {title, text} = req.body;
    if (title && text){
        const newHtml = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newHtml, './db/db.json')
        const response = {
            status: 'success',
            body: newHtml,
          };
      
          res.json(response);
        } else {
          res.json('Error in posting html');
        }
      });
      
      module.exports = router;