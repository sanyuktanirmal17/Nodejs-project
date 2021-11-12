// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'sanyukta',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// })


// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// }

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'sanyukta',
  host: 'localhost',
  database: 'sample',
  password: 'password',
  port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM sampletable ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM sampleTable WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { firstName, lastName,email,address} = request.body
  
    pool.query('INSERT INTO sampletable (firstName, lastName,email,address) VALUES ($1, $2,$3,$4)',
     [firstName, lastName,email,address], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with Id: ${results.insertId}`)
    })
  }

  const updateUser = (request, response) => {
    const Id = parseInt(request.params.Id)
    const { firstName, lastName,email,address} = request.body
  
    pool.query(
      'UPDATE sampletable SET firstName = $1, lastName= $2,email = $3, address = $4 WHERE id = $3',
      [firstName, lastName,email,address],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with Id: ${Id}`)
      }
    )
  }

 const deleteUser = (request, response) => {
    const Id = parseInt(request.params.Id)
  
    pool.query('DELETE FROM sampleTable WHERE Id = $1', [Id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with Id: ${Id}`)
    })
  }



  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
 }  