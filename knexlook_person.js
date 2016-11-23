
const settings = require("./settings");

var knex = require('knex')({
  client: 'postgres',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

function findPeople(input) {
knex
  .select('*')
  .from('famous_people')
  .where('first_name',input)
  .orWhere('last_name',input)

  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("No Data was sent", err)
  })
}

findPeople(process.argv[2])
 // .raw(`CREATE TABLE People
 //       first_name varchar(255)
 //       last_name  varchar(255)
 //       birthdate  varchar(255)
 //       INSERT INTO People (first_name,last_name,birthdate)
 //       VALUES (${first},${last},${date});`)

// function addPeople(first,last,date) {
//
//   knex.schema.createTable('users', function(table) {
//     table.increments('id');
//     table.string('first_name');
//     table.string('last_name');
//     table.string('birthdate'); //Format is YYYY-MM-DD
//
//       knex.insert({first_name: `${first}`}).into('users');
//       knex.insert({last_name: `${last}`}).into('users');
//       knex.insert({birthdate: `${date}`}).into('users');
//
//   });
// console.log("Stuff was added eyeye")
// }
// addPeople(process.argv[2],process.argv[3],process.argv[4]);
