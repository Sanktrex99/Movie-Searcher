API Used: "https://www.omdbapi.com/?s={$SearchValue}&apikey=e6bfff91"

Some Theory for reference:
useEffect function accepts two arguments,
the function that you want to run and a second
argument which is an array.
In that array we just pass in a value that
tells React to skip applying an effect if
the value passed in hasn’t changed.

A React default service worker is added. So if you want to run the index.js through a serviceworker you can use that too.
index.js for the same:
import React from 'react';
import ReactDOM from 'react-dom';
import \* as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();


Install NPM and use npm start to make the project work on your system.
Enjoy !!
