var Notif = (function () {
  'use strict';

  function Notif (opts) {
    this.text = opts.text;
    this.target = document.body;
    this.show();
  }
  Notif.prototype.render = function () {
    var container = document.createElement('div');
    container.className = 'notif-container';

    var textEl = document.createElement('div');
    textEl.className = 'notif-text';
    textEl.textContent = this.text;

    var closeBtn = document.createElement('div');
    closeBtn.className = 'notif-close-btn';
    closeBtn.textContent = 'close';
    closeBtn.addEventListener('click', this.close.bind(this));

    container.appendChild(textEl);
    container.appendChild(closeBtn);
    return container;
  };
  Notif.prototype.show = function (opts) {
    this.notifEl = this.render();
    this.target.appendChild(this.notifEl);
    if (opts && opts.duration > 0) {
      window.setTimeout((function () {
        this.close();
      }).bind(this), opts.duration);
    }
  };
  Notif.prototype.close = function () {
    this.target.removeChild(this.notifEl);
  };

  return Notif;
}());
