var Notif = (function () {
  'use strict';

  function Notif (opts) {
    this.text = opts.text;
    this.target = document.body;
    this.show();
  }
  Notif.prototype.render = function () {
    var notifEl = document.createElement('div');
    notifEl.className = 'notif-container';
    var template = [
      '<div class="notif-text">{{ text }}</div>',
      '<div class="notif-close-btn"></div>'
    ].join('');
    notifEl.innerHTML = Mustache.render(template, {
      text: this.text
    });
    return notifEl;
  };
  Notif.prototype.show = function (duration) {
    this.notifEl = this.render();
    this.target.appendChild(this.notifEl);
    if (duration > 0) {
      window.setTimeout((function () {
        this.close();
      }).bind(this), duration);
    }
  };
  Notif.prototype.close = function () {
    this.target.removeChild(this.notifEl);
  };

  return Notif;
}());