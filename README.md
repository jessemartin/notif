notif
=====

A simple notification UI component.

Installation
------------

Include notif.js on your page.

Usage
-----

```js
var testNotif = new Notif({ text: 'This is a test message' }); // will show the notification immediately
testNotif.close(); // removes the notification from the dom
testNotif.show(); // renders and shows the notification again
```
