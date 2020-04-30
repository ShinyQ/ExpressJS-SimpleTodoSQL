const express = require('express')
const route = express.Router()
const db = require('../database/conn')

route.get('/todo', (_req, res) => {
  db.query('SELECT * FROM tb_todo', (error, results) => {
    if (error) { 
      res.json({ status: 'error' }); 
    }
    res.json({ status: 'success', data: results })
  })
})

route.get('/todo/:id', (req, res) => {
  db.query('SELECT * FROM tb_todo WHERE id_todo = ?', req.params.id, (error, results) => {
    if (error) { 
      res.json({ status: 'error' }) 
    } else if (results.length === 0) { 
      res.json({ status: 'Data Not Found' }) 
    }
    res.json({ status: 'success', data: results });
  })
})

route.post('/todo', (req, res) => {
  const data = {
    description: req.body.description
  };
  
  db.query('INSERT INTO tb_todo SET ?', data, (error) => {
    if (error) { 
      res.json({ status: 'error' }) 
    }
    res.json({ status: 'success', data })
  })
})

route.put('/todo/:id', (req, res) => {
  const data = {
    description: req.body.description
  };

  db.query('UPDATE tb_todo SET ? WHERE id_todo = ?', [data, req.params.id], (error) => {
    if (error) {
      res.json({ status: 'error' })
    }
    res.json({ status: 'success', data: 'Sukses Mengupdate Data' })
  })
})

route.delete('/todo/:id', (req, res) => {
  db.query('DELETE FROM tb_todo WHERE id_todo = ?', req.params.id, (error) => {
    if (error) { 
      res.json({ status: 'error' }) 
    }
    res.json({ status: 'success', data: 'Sukses Mengahapus Data' })
  })
})

module.exports = route
