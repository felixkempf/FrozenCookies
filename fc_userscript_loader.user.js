// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by felixkempf
// @author         shinji257
// @homepage       https://github.com/felixkempf/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @updateURL      http://felixkempf.github.io/FrozenCookies/fc_userscript_loader.js
// @downloadURL    http://felixkempf.github.io/FrozenCookies/fc_userscript_loader.js
// ==/UserScript==

// Dev:       https://raw.github.com/felixkempf/FrozenCookies/development/
// Master:    https://raw.github.com/felixkempf/FrozenCookies/master/
// Github.io: http://felixkempf.github.io/FrozenCookies/

function LoadFrozenCookies() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('id', 'frozenCookieScript');
  js.setAttribute('src', 'https://raw.github.com/felixkempf/FrozenCookies/master/frozen_cookies.js');
  document.head.appendChild(js);
}
// It's not the best way but Chrome doesn't work with addEventListener... :(
// Delay load by 5 seconds to allow the site to load itself first.)
window.setTimeout(LoadFrozenCookies, 5000);
