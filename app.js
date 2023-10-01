const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8050; 

app.use(morgan('dev'));
app.use(express.json());


const users = [
  {
    id: 1,
    name: 'John Doe',
  },
];

// DELETE
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    //Cari yang mau didelete 
    const userIndex = users.findIndex(user => user.id === Number(userId));

    // Kondisi jika ID ada
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(204).send();
    }
    // Kalau ID tidak ada maka 404(not found) 
    else {
      res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
