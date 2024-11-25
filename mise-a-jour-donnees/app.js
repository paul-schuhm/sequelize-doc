const express = require('express');
const { User } = require('./model');

const app = express();
app.use(express.json());

// Création d'un utilisateur
app.post('/user', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Lecture d'un utilisateur
app.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Mise à jour d'un utilisateur
app.put('/user/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Suppression d'un utilisateur
app.delete('/user/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.json({ message: 'Utilisateur supprimé.' });
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Lancer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
