const pg = require("pg");
const settings = require("./settings"); // settings.json
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function lookPeeps (input){
  console.log(input);


  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }

   let string=`SELECT * FROM famous_people WHERE last_name=$1 OR first_name=$1`

    client.query(string, [input], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log(result.rows); //output: 1
      client.end();
    });
  });

}
lookPeeps(process.argv[2]);
