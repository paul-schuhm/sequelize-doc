


//Import the sequelize library
const { QueryTypes } = require('sequelize');
const sequelize = require('./db');

/* 3 cas d'utilisations des requetes préparés */


// Cas d'utilisation où on utilise un tableau en paramètre 
await sequelize.query('SELECT * FROM projects WHERE status = ?', {
  replacements: ['active'],
  type: QueryTypes.SELECT,
});


// Cas d'utilisation où on utilise une clé en paramètre 
await sequelize.query('SELECT * FROM projects WHERE status = :status', {
  replacements: { status: 'active' },
  type: QueryTypes.SELECT,
});

//
await sequelize.query('UPDATE projects SET updatedAt = :updatedAt WHERE id = :id', {
    replacements: { updatedAt, id },
  });

// Cas d'utilisation où on utilise plusieurs valeurs en  paramètre 

await sequelize.query('SELECT * FROM projects WHERE status IN(:status)', {
  replacements: { status: ['active', 'inactive'] },
  type: QueryTypes.SELECT,
});

