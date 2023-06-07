# Note Taker

## Description
The note taker app allows users to create, retrieve, and optionally delete simple notes.
I created this app as an exercise in using Express.js.  The app has two pages: a landing page, 
located at `/`; and the note taking functionality, located at `/notes`.  There is also an api
route at `/api/notes` that accepts GET, POST, and DELETE requests.  Invalid paths will return
the landing page.  Currently, the notes are saved in a text/JSON file, so converting the storage 
to a database would be an obvious next step for the app.

## Usage
To create a new note, click the `+` icon in the upper right corner of the notes screen.
After you have entered a title and description for your note, click the disk icon to save
the note on the server.  Previous are summarized on the left side of the screen, and clicking 
on an entry will display its details.  Each saved note also has a trash can icon, which will
delete it.

<!-- [Try the app on Heroku](https://s2robertson-note-taker.herokuapp.com/) -->

## Credits
The initial files (the front-end) were provided by University of Toronto Coding Bootcamp.
In addition, I used the [express](https://expressjs.com/), and [uuid](https://www.npmjs.com/package/uuid)
packages.

## License
MIT