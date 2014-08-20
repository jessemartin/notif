notif
=====

A simple notification UI component.

Installation
------------

Include notif.js on your page.

Usage
-----

```js
var hello = new Notif({ text: 'Hello! This is a test message.' }); // shows the notification immediately
hello.close(); // removes the notification from the dom
hello.show(); // renders and shows the notification again
```

```js
var helloAgain = new Notif({ text: 'A slightly more advanced message.' }).close({ duration: 3000 }); // renders and shows the notification, then waits 3000 ms and closes the message
```