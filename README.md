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
