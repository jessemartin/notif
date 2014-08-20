notif
=====

A simple notification UI component.

Installation
------------

Include notif.js on your page.

Usage
-----

```js
// shows the notification immediately
var hello = new Notif({ text: 'Hello! This is a test message.' });

// removes the notification from the dom
hello.close();

// renders and shows the notification again
hello.show();
```

```js
// renders and shows the notification, then waits 3000 ms and closes the message
new Notif({ text: 'A slightly more advanced message.' }).close({ duration: 3000 });
```
