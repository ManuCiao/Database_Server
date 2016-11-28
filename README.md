# Database Server Tech Test

## User Stories

```
As a programmer
I want to write a program
where the server is accessible on http://localhost:4000/.

As a programmer
the program I wrote should receive a request on http://localhost:4000/set?somekey=somevalue
and store the passed key and value in memory.

As a programmer
the program I wrote should receive a request on http://localhost:4000/get?key=somekey
and return the value stored at somekey.

As a programmer
I want to write a program
where the data will be saved to a file.

```

## Installation instructions

Install NPM and Node.js.

Next, clone this repo and install all the dependencies:

```
$ git clone https://github.com/ManuCiao/Database_Server db_server
$ cd db_server
$ npm install
```
To build the server I used Express.js.

To run the project:

```
$ npm start

```

* The server will run on http://localhost:4000/.
* Save your key/value pair by navigating to http://localhost:4000/set?somekey=somevalue and updating the query string.
* Retrieve the stored value by navigating to http://localhost:4000/get?key=somekey, you can replace 'somekey' with your specific key. The value will be displayed on the page.

To run the test use:
```
$ npm test
```

To create the tests I used Mocha Chai with Chai-Http.
