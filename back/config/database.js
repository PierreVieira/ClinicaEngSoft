const { Pool } = require('pg')

pool = new Pool({
    host: 'finm.sytes.net',
    port: 5433,
    database: 'labes',
    user: 'labes',
    password: 'labes',
    ssl: { rejectUnauthorized: false }
})

module.exports = pool