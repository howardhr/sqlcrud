const express = require('express');

const routes = express.Router();
const midlewares = require('../midlewares/midlewares')
const controllers = require('../controllers/controllers')

routes.get('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM books', (err, rows)=>{
            if(err) return res.send(err)

             res.json(rows);
        })

    })
})

routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO books set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)

             res.send('Book inserted')
        })

    })
})
routes.delete('/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM books Where id = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

             res.send('Book deletd')
        })

    })
})

    routes.put('/:id', (req,res)=>{
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
            conn.query('UPDATE books set ? WHERE id = ?',[req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                 res.send('Book deletd')
            })
    
        })
    })



module.exports=routes