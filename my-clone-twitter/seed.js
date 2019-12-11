const pg = require('pg');

console.log('SEED IS RUNNING');

const createUser = `
	CREATE TABLE users(
		id serial PRIMARY KEY,
		username text,
		email unique text,
		password text
	);
`;
const createTweet = `
	CREATE TABLE tweettext(
		id serial PRIMARY KEY,
		tweet text
	);
`;


const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'leonida',
  port: 5432,
});

db.connect();

db.query(createUser)
	.then(({ rows = [] }) => {
		console.log('create ran successfully');
		return rows;
	})
	.catch(err => {
		console.error(err);
		console.error(err.stack);
	});

db.query(createTweet)
	.then(({ rows = [] }) => {
		console.log('create ran successfully');
		return rows;
	})
	.catch(err => {
		console.error(err);
		console.error(err.stack);
	});

// db.query(insert, )
// 	.then(({ rows = [] }) => {
// 		console.log('insert ran successfully');
// 		return rows;
// 	})
// 	.catch(err => {
// 		console.error(err);
// 		console.error(err.stack);
// 	});