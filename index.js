const express = require('express');
const socket = require('socket.io');

const app = express()
const server = app.listen(3000)

app.set(express.static('public'))
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.get('/',(req, res)=> { 
    res.render('index')
});
const io = socket(server)


io.on('connection', (socket) => {
  console.log('Bir kullanıcı sunucuya bağlandı.');

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı sunucudan ayrıldı.');
  });
});

