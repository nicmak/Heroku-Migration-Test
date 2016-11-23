
const settings = require("./knexfile");
const knex = require("knex")(settings.development)



function addPeople(first, last, date) {
knex
  ('famous_people').insert({first_name:first
  ,last_name:last, birthdate:date}, "*")

  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("No Data was sent", err)
  })
}

addPeople(process.argv[2],process.argv[3],process.argv[4])
