if (typeof _paq !== "object") {
  _paq = [];
}
if (typeof window.Matomo !== "object") {
  window.Matomo = window.Piwik = (function () {
    var q,
      b = {},
      y = {},
      G = document,
      g = navigator,
      X = screen,
      S = window,
      h = S.performance || S.mozPerformance || S.msPerformance || S.webkitPerformance,
      s = S.encodeURIComponent,
      R = S.decodeURIComponent,
      k = unescape,
      I = [],
      E,
      t,
      ah = [],
      x = 0,
      ab = 0,
      T = 0,
      l = false;
    function o(ao) {
      try {
        return R(ao);
      } catch (ap) {
        return unescape(ao);
      }
    }
    function J(ap) {
      var ao = typeof ap;
      return ao !== "undefined";
    }
    function A(ao) {
      return typeof ao === "function";
    }
    function V(ao) {
      return typeof ao === "object";
    }
    function w(ao) {
      return typeof ao === "string" || ao instanceof String;
    }
    function ag(ao) {
      return typeof ao === "number" || ao instanceof Number;
    }
    function Y(ao) {
      return J(ao) && (ag(ao) || (w(ao) && ao.length));
    }
    function B(ap) {
      if (!ap) {
        return true;
      }
      var ao;
      var aq = true;
      for (ao in ap) {
        if (Object.prototype.hasOwnProperty.call(ap, ao)) {
          aq = false;
        }
      }
      return aq;
    }
    function ak(ao) {
      var ap = typeof console;
      if (ap !== "undefined" && console && console.error) {
        console.error(ao);
      }
    }
    function af() {
      var au, at, aw, ap, ao;
      for (au = 0; au < arguments.length; au += 1) {
        ao = null;
        if (arguments[au] && arguments[au].slice) {
          ao = arguments[au].slice();
        }
        ap = arguments[au];
        aw = ap.shift();
        var av, aq;
        var ar = w(aw) && aw.indexOf("::") > 0;
        if (ar) {
          av = aw.split("::");
          aq = av[0];
          aw = av[1];
          if ("object" === typeof t[aq] && "function" === typeof t[aq][aw]) {
            t[aq][aw].apply(t[aq], ap);
          } else {
            if (ao) {
              ah.push(ao);
            }
          }
        } else {
          for (at = 0; at < I.length; at++) {
            if (w(aw)) {
              aq = I[at];
              var ax = aw.indexOf(".") > 0;
              if (ax) {
                av = aw.split(".");
                if (aq && "object" === typeof aq[av[0]]) {
                  aq = aq[av[0]];
                  aw = av[1];
                } else {
                  if (ao) {
                    ah.push(ao);
                    break;
                  }
                }
              }
              if (aq[aw]) {
                aq[aw].apply(aq, ap);
              } else {
                var ay =
                  "The method '" +
                  aw +
                  '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                ak(ay);
                if (!ax) {
                  throw new TypeError(ay);
                }
              }
              if (aw === "addTracker") {
                break;
              }
              if (aw === "setTrackerUrl" || aw === "setSiteId") {
                break;
              }
            } else {
              aw.apply(I[at], ap);
            }
          }
        }
      }
    }
    function an(ar, aq, ap, ao) {
      if (ar.addEventListener) {
        ar.addEventListener(aq, ap, ao);
        return true;
      }
      if (ar.attachEvent) {
        return ar.attachEvent("on" + aq, ap);
      }
      ar["on" + aq] = ap;
    }
    function m(ao) {
      if (G.readyState === "complete") {
        ao();
      } else {
        if (S.addEventListener) {
          S.addEventListener("load", ao, false);
        } else {
          if (S.attachEvent) {
            S.attachEvent("onload", ao);
          }
        }
      }
    }
    function p(ar) {
      var ao = false;
      if (G.attachEvent) {
        ao = G.readyState === "complete";
      } else {
        ao = G.readyState !== "loading";
      }
      if (ao) {
        ar();
        return;
      }
      var aq;
      if (G.addEventListener) {
        an(G, "DOMContentLoaded", function ap() {
          G.removeEventListener("DOMContentLoaded", ap, false);
          if (!ao) {
            ao = true;
            ar();
          }
        });
      } else {
        if (G.attachEvent) {
          G.attachEvent("onreadystatechange", function ap() {
            if (G.readyState === "complete") {
              G.detachEvent("onreadystatechange", ap);
              if (!ao) {
                ao = true;
                ar();
              }
            }
          });
          if (G.documentElement.doScroll && S === S.top) {
            (function ap() {
              if (!ao) {
                try {
                  G.documentElement.doScroll("left");
                } catch (at) {
                  setTimeout(ap, 0);
                  return;
                }
                ao = true;
                ar();
              }
            })();
          }
        }
      }
      an(
        S,
        "load",
        function () {
          if (!ao) {
            ao = true;
            ar();
          }
        },
        false
      );
    }
    function ac(ap, av, aw) {
      if (!ap) {
        return "";
      }
      var ao = "",
        ar,
        aq,
        at,
        au;
      for (ar in b) {
        if (Object.prototype.hasOwnProperty.call(b, ar)) {
          au = b[ar] && "function" === typeof b[ar][ap];
          if (au) {
            aq = b[ar][ap];
            at = aq(av || {}, aw);
            if (at) {
              ao += at;
            }
          }
        }
      }
      return ao;
    }
    function ai() {
      var ao;
      l = true;
      ac("unload");
      ao = new Date();
      var ap = ao.getTimeAlias();
      if (q - ap > 3000) {
        q = ap + 3000;
      }
      if (q) {
        do {
          ao = new Date();
        } while (ao.getTimeAlias() < q);
      }
    }
    function n(aq, ap) {
      var ao = G.createElement("script");
      ao.type = "text/javascript";
      ao.src = aq;
      if (ao.readyState) {
        ao.onreadystatechange = function () {
          var ar = this.readyState;
          if (ar === "loaded" || ar === "complete") {
            ao.onreadystatechange = null;
            ap();
          }
        };
      } else {
        ao.onload = ap;
      }
      G.getElementsByTagName("head")[0].appendChild(ao);
    }
    function K() {
      var ao = "";
      try {
        ao = S.top.document.referrer;
      } catch (aq) {
        if (S.parent) {
          try {
            ao = S.parent.document.referrer;
          } catch (ap) {
            ao = "";
          }
        }
      }
      if (ao === "") {
        ao = G.referrer;
      }
      return ao;
    }
    function r(ao) {
      var aq = new RegExp("^([a-z]+):"),
        ap = aq.exec(ao);
      return ap ? ap[1] : null;
    }
    function d(ao) {
      var aq = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
        ap = aq.exec(ao);
      return ap ? ap[1] : ao;
    }
    function aj(ap, ao) {
      ap = String(ap);
      return ap.lastIndexOf(ao, 0) === 0;
    }
    function Q(ap, ao) {
      ap = String(ap);
      return ap.indexOf(ao, ap.length - ao.length) !== -1;
    }
    function z(ap, ao) {
      ap = String(ap);
      return ap.indexOf(ao) !== -1;
    }
    function f(ap, ao) {
      ap = String(ap);
      return ap.substr(0, ap.length - ao);
    }
    function F(ar, aq, au) {
      ar = String(ar);
      if (!au) {
        au = "";
      }
      var ao = ar.indexOf("#");
      var av = ar.length;
      if (ao === -1) {
        ao = av;
      }
      var at = ar.substr(0, ao);
      var ap = ar.substr(ao, av - ao);
      if (at.indexOf("?") === -1) {
        at += "?";
      } else {
        if (!Q(at, "?")) {
          at += "&";
        }
      }
      return at + s(aq) + "=" + s(au) + ap;
    }
    function j(ap, aq) {
      ap = String(ap);
      if (ap.indexOf("?" + aq + "=") === -1 && ap.indexOf("&" + aq + "=") === -1) {
        return ap;
      }
      var ar = ap.indexOf("?");
      if (ar === -1) {
        return ap;
      }
      var ao = ap.substr(ar + 1);
      var aw = ap.substr(0, ar);
      if (ao) {
        var ax = "";
        var az = ao.indexOf("#");
        if (az !== -1) {
          ax = ao.substr(az + 1);
          ao = ao.substr(0, az);
        }
        var at;
        var av = ao.split("&");
        var au = av.length - 1;
        for (au; au >= 0; au--) {
          at = av[au].split("=")[0];
          if (at === aq) {
            av.splice(au, 1);
          }
        }
        var ay = av.join("&");
        if (ay) {
          aw = aw + "?" + ay;
        }
        if (ax) {
          aw += "#" + ax;
        }
      }
      return aw;
    }
    function e(aq, ap) {
      var ao = "[\\?&#]" + ap + "=([^&#]*)";
      var at = new RegExp(ao);
      var ar = at.exec(aq);
      return ar ? o(ar[1]) : "";
    }
    function a(ao) {
      if (ao && String(ao) === ao) {
        return ao.replace(/^\s+|\s+$/g, "");
      }
      return ao;
    }
    function D(ao) {
      return unescape(s(ao));
    }
    function am(aE) {
      var aq = function (aK, aJ) {
          return (aK << aJ) | (aK >>> (32 - aJ));
        },
        aF = function (aM) {
          var aK = "",
            aL,
            aJ;
          for (aL = 7; aL >= 0; aL--) {
            aJ = (aM >>> (aL * 4)) & 15;
            aK += aJ.toString(16);
          }
          return aK;
        },
        au,
        aH,
        aG,
        ap = [],
        ay = 1732584193,
        aw = 4023233417,
        av = 2562383102,
        at = 271733878,
        ar = 3285377520,
        aD,
        aC,
        aB,
        aA,
        az,
        aI,
        ao,
        ax = [];
      aE = D(aE);
      ao = aE.length;
      for (aH = 0; aH < ao - 3; aH += 4) {
        aG =
          (aE.charCodeAt(aH) << 24) |
          (aE.charCodeAt(aH + 1) << 16) |
          (aE.charCodeAt(aH + 2) << 8) |
          aE.charCodeAt(aH + 3);
        ax.push(aG);
      }
      switch (ao & 3) {
        case 0:
          aH = 2147483648;
          break;
        case 1:
          aH = (aE.charCodeAt(ao - 1) << 24) | 8388608;
          break;
        case 2:
          aH = (aE.charCodeAt(ao - 2) << 24) | (aE.charCodeAt(ao - 1) << 16) | 32768;
          break;
        case 3:
          aH = (aE.charCodeAt(ao - 3) << 24) | (aE.charCodeAt(ao - 2) << 16) | (aE.charCodeAt(ao - 1) << 8) | 128;
          break;
      }
      ax.push(aH);
      while ((ax.length & 15) !== 14) {
        ax.push(0);
      }
      ax.push(ao >>> 29);
      ax.push((ao << 3) & 4294967295);
      for (au = 0; au < ax.length; au += 16) {
        for (aH = 0; aH < 16; aH++) {
          ap[aH] = ax[au + aH];
        }
        for (aH = 16; aH <= 79; aH++) {
          ap[aH] = aq(ap[aH - 3] ^ ap[aH - 8] ^ ap[aH - 14] ^ ap[aH - 16], 1);
        }
        aD = ay;
        aC = aw;
        aB = av;
        aA = at;
        az = ar;
        for (aH = 0; aH <= 19; aH++) {
          aI = (aq(aD, 5) + ((aC & aB) | (~aC & aA)) + az + ap[aH] + 1518500249) & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 20; aH <= 39; aH++) {
          aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 1859775393) & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 40; aH <= 59; aH++) {
          aI = (aq(aD, 5) + ((aC & aB) | (aC & aA) | (aB & aA)) + az + ap[aH] + 2400959708) & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 60; aH <= 79; aH++) {
          aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 3395469782) & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        ay = (ay + aD) & 4294967295;
        aw = (aw + aC) & 4294967295;
        av = (av + aB) & 4294967295;
        at = (at + aA) & 4294967295;
        ar = (ar + az) & 4294967295;
      }
      aI = aF(ay) + aF(aw) + aF(av) + aF(at) + aF(ar);
      return aI.toLowerCase();
    }
    function aa(aq, ao, ap) {
      if (!aq) {
        aq = "";
      }
      if (!ao) {
        ao = "";
      }
      if (aq === "translate.googleusercontent.com") {
        if (ap === "") {
          ap = ao;
        }
        ao = e(ao, "u");
        aq = d(ao);
      } else {
        if (aq === "cc.bingj.com" || aq === "webcache.googleusercontent.com" || aq.slice(0, 5) === "74.6.") {
          ao = G.links[0].href;
          aq = d(ao);
        }
      }
      return [aq, ao, ap];
    }
    function L(ap) {
      var ao = ap.length;
      if (ap.charAt(--ao) === ".") {
        ap = ap.slice(0, ao);
      }
      if (ap.slice(0, 2) === "*.") {
        ap = ap.slice(1);
      }
      if (ap.indexOf("/") !== -1) {
        ap = ap.substr(0, ap.indexOf("/"));
      }
      return ap;
    }
    function al(ap) {
      ap = ap && ap.text ? ap.text : ap;
      if (!w(ap)) {
        var ao = G.getElementsByTagName("title");
        if (ao && J(ao[0])) {
          ap = ao[0].text;
        }
      }
      return ap;
    }
    function O(ao) {
      if (!ao) {
        return [];
      }
      if (!J(ao.children) && J(ao.childNodes)) {
        return ao.children;
      }
      if (J(ao.children)) {
        return ao.children;
      }
      return [];
    }
    function U(ap, ao) {
      if (!ap || !ao) {
        return false;
      }
      if (ap.contains) {
        return ap.contains(ao);
      }
      if (ap === ao) {
        return true;
      }
      if (ap.compareDocumentPosition) {
        return !!(ap.compareDocumentPosition(ao) & 16);
      }
      return false;
    }
    function M(aq, ar) {
      if (aq && aq.indexOf) {
        return aq.indexOf(ar);
      }
      if (!J(aq) || aq === null) {
        return -1;
      }
      if (!aq.length) {
        return -1;
      }
      var ao = aq.length;
      if (ao === 0) {
        return -1;
      }
      var ap = 0;
      while (ap < ao) {
        if (aq[ap] === ar) {
          return ap;
        }
        ap++;
      }
      return -1;
    }
    function i(aq) {
      if (!aq) {
        return false;
      }
      function ao(at, au) {
        if (S.getComputedStyle) {
          return G.defaultView.getComputedStyle(at, null)[au];
        }
        if (at.currentStyle) {
          return at.currentStyle[au];
        }
      }
      function ar(at) {
        at = at.parentNode;
        while (at) {
          if (at === G) {
            return true;
          }
          at = at.parentNode;
        }
        return false;
      }
      function ap(av, aB, at, ay, aw, az, ax) {
        var au = av.parentNode,
          aA = 1;
        if (!ar(av)) {
          return false;
        }
        if (9 === au.nodeType) {
          return true;
        }
        if ("0" === ao(av, "opacity") || "none" === ao(av, "display") || "hidden" === ao(av, "visibility")) {
          return false;
        }
        if (!J(aB) || !J(at) || !J(ay) || !J(aw) || !J(az) || !J(ax)) {
          aB = av.offsetTop;
          aw = av.offsetLeft;
          ay = aB + av.offsetHeight;
          at = aw + av.offsetWidth;
          az = av.offsetWidth;
          ax = av.offsetHeight;
        }
        if (aq === av && (0 === ax || 0 === az) && "hidden" === ao(av, "overflow")) {
          return false;
        }
        if (au) {
          if ("hidden" === ao(au, "overflow") || "scroll" === ao(au, "overflow")) {
            if (
              aw + aA > au.offsetWidth + au.scrollLeft ||
              aw + az - aA < au.scrollLeft ||
              aB + aA > au.offsetHeight + au.scrollTop ||
              aB + ax - aA < au.scrollTop
            ) {
              return false;
            }
          }
          if (av.offsetParent === au) {
            aw += au.offsetLeft;
            aB += au.offsetTop;
          }
          return ap(au, aB, at, ay, aw, az, ax);
        }
        return true;
      }
      return ap(aq);
    }
    var ae = {
      htmlCollectionToArray: function (aq) {
        var ao = [],
          ap;
        if (!aq || !aq.length) {
          return ao;
        }
        for (ap = 0; ap < aq.length; ap++) {
          ao.push(aq[ap]);
        }
        return ao;
      },
      find: function (ao) {
        if (!document.querySelectorAll || !ao) {
          return [];
        }
        var ap = document.querySelectorAll(ao);
        return this.htmlCollectionToArray(ap);
      },
      findMultiple: function (aq) {
        if (!aq || !aq.length) {
          return [];
        }
        var ap, ar;
        var ao = [];
        for (ap = 0; ap < aq.length; ap++) {
          ar = this.find(aq[ap]);
          ao = ao.concat(ar);
        }
        ao = this.makeNodesUnique(ao);
        return ao;
      },
      findNodesByTagName: function (ap, ao) {
        if (!ap || !ao || !ap.getElementsByTagName) {
          return [];
        }
        var aq = ap.getElementsByTagName(ao);
        return this.htmlCollectionToArray(aq);
      },
      makeNodesUnique: function (ao) {
        var au = [].concat(ao);
        ao.sort(function (aw, av) {
          if (aw === av) {
            return 0;
          }
          var ay = M(au, aw);
          var ax = M(au, av);
          if (ay === ax) {
            return 0;
          }
          return ay > ax ? -1 : 1;
        });
        if (ao.length <= 1) {
          return ao;
        }
        var ap = 0;
        var ar = 0;
        var at = [];
        var aq;
        aq = ao[ap++];
        while (aq) {
          if (aq === ao[ap]) {
            ar = at.push(ap);
          }
          aq = ao[ap++] || null;
        }
        while (ar--) {
          ao.splice(at[ar], 1);
        }
        return ao;
      },
      getAttributeValueFromNode: function (at, aq) {
        if (!this.hasNodeAttribute(at, aq)) {
          return;
        }
        if (at && at.getAttribute) {
          return at.getAttribute(aq);
        }
        if (!at || !at.attributes) {
          return;
        }
        var ar = typeof at.attributes[aq];
        if ("undefined" === ar) {
          return;
        }
        if (at.attributes[aq].value) {
          return at.attributes[aq].value;
        }
        if (at.attributes[aq].nodeValue) {
          return at.attributes[aq].nodeValue;
        }
        var ap;
        var ao = at.attributes;
        if (!ao) {
          return;
        }
        for (ap = 0; ap < ao.length; ap++) {
          if (ao[ap].nodeName === aq) {
            return ao[ap].nodeValue;
          }
        }
        return null;
      },
      hasNodeAttributeWithValue: function (ap, ao) {
        var aq = this.getAttributeValueFromNode(ap, ao);
        return !!aq;
      },
      hasNodeAttribute: function (aq, ao) {
        if (aq && aq.hasAttribute) {
          return aq.hasAttribute(ao);
        }
        if (aq && aq.attributes) {
          var ap = typeof aq.attributes[ao];
          return "undefined" !== ap;
        }
        return false;
      },
      hasNodeCssClass: function (aq, ao) {
        if (aq && ao && aq.className) {
          var ap = typeof aq.className === "string" ? aq.className.split(" ") : [];
          if (-1 !== M(ap, ao)) {
            return true;
          }
        }
        return false;
      },
      findNodesHavingAttribute: function (at, aq, ao) {
        if (!ao) {
          ao = [];
        }
        if (!at || !aq) {
          return ao;
        }
        var ar = O(at);
        if (!ar || !ar.length) {
          return ao;
        }
        var ap, au;
        for (ap = 0; ap < ar.length; ap++) {
          au = ar[ap];
          if (this.hasNodeAttribute(au, aq)) {
            ao.push(au);
          }
          ao = this.findNodesHavingAttribute(au, aq, ao);
        }
        return ao;
      },
      findFirstNodeHavingAttribute: function (aq, ap) {
        if (!aq || !ap) {
          return;
        }
        if (this.hasNodeAttribute(aq, ap)) {
          return aq;
        }
        var ao = this.findNodesHavingAttribute(aq, ap);
        if (ao && ao.length) {
          return ao[0];
        }
      },
      findFirstNodeHavingAttributeWithValue: function (ar, aq) {
        if (!ar || !aq) {
          return;
        }
        if (this.hasNodeAttributeWithValue(ar, aq)) {
          return ar;
        }
        var ao = this.findNodesHavingAttribute(ar, aq);
        if (!ao || !ao.length) {
          return;
        }
        var ap;
        for (ap = 0; ap < ao.length; ap++) {
          if (this.getAttributeValueFromNode(ao[ap], aq)) {
            return ao[ap];
          }
        }
      },
      findNodesHavingCssClass: function (at, ar, ao) {
        if (!ao) {
          ao = [];
        }
        if (!at || !ar) {
          return ao;
        }
        if (at.getElementsByClassName) {
          var au = at.getElementsByClassName(ar);
          return this.htmlCollectionToArray(au);
        }
        var aq = O(at);
        if (!aq || !aq.length) {
          return [];
        }
        var ap, av;
        for (ap = 0; ap < aq.length; ap++) {
          av = aq[ap];
          if (this.hasNodeCssClass(av, ar)) {
            ao.push(av);
          }
          ao = this.findNodesHavingCssClass(av, ar, ao);
        }
        return ao;
      },
      findFirstNodeHavingClass: function (aq, ap) {
        if (!aq || !ap) {
          return;
        }
        if (this.hasNodeCssClass(aq, ap)) {
          return aq;
        }
        var ao = this.findNodesHavingCssClass(aq, ap);
        if (ao && ao.length) {
          return ao[0];
        }
      },
      isLinkElement: function (ap) {
        if (!ap) {
          return false;
        }
        var ao = String(ap.nodeName).toLowerCase();
        var ar = ["a", "area"];
        var aq = M(ar, ao);
        return aq !== -1;
      },
      setAnyAttribute: function (ap, ao, aq) {
        if (!ap || !ao) {
          return;
        }
        if (ap.setAttribute) {
          ap.setAttribute(ao, aq);
        } else {
          ap[ao] = aq;
        }
      },
    };
    var v = {
      CONTENT_ATTR: "data-track-content",
      CONTENT_CLASS: "matomoTrackContent",
      LEGACY_CONTENT_CLASS: "piwikTrackContent",
      CONTENT_NAME_ATTR: "data-content-name",
      CONTENT_PIECE_ATTR: "data-content-piece",
      CONTENT_PIECE_CLASS: "matomoContentPiece",
      LEGACY_CONTENT_PIECE_CLASS: "piwikContentPiece",
      CONTENT_TARGET_ATTR: "data-content-target",
      CONTENT_TARGET_CLASS: "matomoContentTarget",
      LEGACY_CONTENT_TARGET_CLASS: "piwikContentTarget",
      CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
      CONTENT_IGNOREINTERACTION_CLASS: "matomoContentIgnoreInteraction",
      LEGACY_CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
      location: undefined,
      findContentNodes: function () {
        var ap = "." + this.CONTENT_CLASS;
        var aq = "." + this.LEGACY_CONTENT_CLASS;
        var ao = "[" + this.CONTENT_ATTR + "]";
        var ar = ae.findMultiple([ap, aq, ao]);
        return ar;
      },
      findContentNodesWithinNode: function (ar) {
        if (!ar) {
          return [];
        }
        var ap = ae.findNodesHavingCssClass(ar, this.CONTENT_CLASS);
        ap = ae.findNodesHavingCssClass(ar, this.LEGACY_CONTENT_CLASS, ap);
        var ao = ae.findNodesHavingAttribute(ar, this.CONTENT_ATTR);
        if (ao && ao.length) {
          var aq;
          for (aq = 0; aq < ao.length; aq++) {
            ap.push(ao[aq]);
          }
        }
        if (ae.hasNodeAttribute(ar, this.CONTENT_ATTR)) {
          ap.push(ar);
        } else {
          if (ae.hasNodeCssClass(ar, this.CONTENT_CLASS)) {
            ap.push(ar);
          } else {
            if (ae.hasNodeCssClass(ar, this.LEGACY_CONTENT_CLASS)) {
              ap.push(ar);
            }
          }
        }
        ap = ae.makeNodesUnique(ap);
        return ap;
      },
      findParentContentNode: function (ap) {
        if (!ap) {
          return;
        }
        var aq = ap;
        var ao = 0;
        while (aq && aq !== G && aq.parentNode) {
          if (ae.hasNodeAttribute(aq, this.CONTENT_ATTR)) {
            return aq;
          }
          if (ae.hasNodeCssClass(aq, this.CONTENT_CLASS)) {
            return aq;
          }
          if (ae.hasNodeCssClass(aq, this.LEGACY_CONTENT_CLASS)) {
            return aq;
          }
          aq = aq.parentNode;
          if (ao > 1000) {
            break;
          }
          ao++;
        }
      },
      findPieceNode: function (ap) {
        var ao;
        ao = ae.findFirstNodeHavingAttribute(ap, this.CONTENT_PIECE_ATTR);
        if (!ao) {
          ao = ae.findFirstNodeHavingClass(ap, this.CONTENT_PIECE_CLASS);
        }
        if (!ao) {
          ao = ae.findFirstNodeHavingClass(ap, this.LEGACY_CONTENT_PIECE_CLASS);
        }
        if (ao) {
          return ao;
        }
        return ap;
      },
      findTargetNodeNoDefault: function (ao) {
        if (!ao) {
          return;
        }
        var ap = ae.findFirstNodeHavingAttributeWithValue(ao, this.CONTENT_TARGET_ATTR);
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingAttribute(ao, this.CONTENT_TARGET_ATTR);
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingClass(ao, this.CONTENT_TARGET_CLASS);
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingClass(ao, this.LEGACY_CONTENT_TARGET_CLASS);
        if (ap) {
          return ap;
        }
      },
      findTargetNode: function (ao) {
        var ap = this.findTargetNodeNoDefault(ao);
        if (ap) {
          return ap;
        }
        return ao;
      },
      findContentName: function (ap) {
        if (!ap) {
          return;
        }
        var at = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_NAME_ATTR);
        if (at) {
          return ae.getAttributeValueFromNode(at, this.CONTENT_NAME_ATTR);
        }
        var ao = this.findContentPiece(ap);
        if (ao) {
          return this.removeDomainIfIsInLink(ao);
        }
        if (ae.hasNodeAttributeWithValue(ap, "title")) {
          return ae.getAttributeValueFromNode(ap, "title");
        }
        var aq = this.findPieceNode(ap);
        if (ae.hasNodeAttributeWithValue(aq, "title")) {
          return ae.getAttributeValueFromNode(aq, "title");
        }
        var ar = this.findTargetNode(ap);
        if (ae.hasNodeAttributeWithValue(ar, "title")) {
          return ae.getAttributeValueFromNode(ar, "title");
        }
      },
      findContentPiece: function (ap) {
        if (!ap) {
          return;
        }
        var ar = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_PIECE_ATTR);
        if (ar) {
          return ae.getAttributeValueFromNode(ar, this.CONTENT_PIECE_ATTR);
        }
        var ao = this.findPieceNode(ap);
        var aq = this.findMediaUrlInNode(ao);
        if (aq) {
          return this.toAbsoluteUrl(aq);
        }
      },
      findContentTarget: function (aq) {
        if (!aq) {
          return;
        }
        var ar = this.findTargetNode(aq);
        if (ae.hasNodeAttributeWithValue(ar, this.CONTENT_TARGET_ATTR)) {
          return ae.getAttributeValueFromNode(ar, this.CONTENT_TARGET_ATTR);
        }
        var ap;
        if (ae.hasNodeAttributeWithValue(ar, "href")) {
          ap = ae.getAttributeValueFromNode(ar, "href");
          return this.toAbsoluteUrl(ap);
        }
        var ao = this.findPieceNode(aq);
        if (ae.hasNodeAttributeWithValue(ao, "href")) {
          ap = ae.getAttributeValueFromNode(ao, "href");
          return this.toAbsoluteUrl(ap);
        }
      },
      isSameDomain: function (ao) {
        if (!ao || !ao.indexOf) {
          return false;
        }
        if (0 === ao.indexOf(this.getLocation().origin)) {
          return true;
        }
        var ap = ao.indexOf(this.getLocation().host);
        if (8 >= ap && 0 <= ap) {
          return true;
        }
        return false;
      },
      removeDomainIfIsInLink: function (aq) {
        var ap = "^https?://[^/]+";
        var ao = "^.*//[^/]+";
        if (aq && aq.search && -1 !== aq.search(new RegExp(ap)) && this.isSameDomain(aq)) {
          aq = aq.replace(new RegExp(ao), "");
          if (!aq) {
            aq = "/";
          }
        }
        return aq;
      },
      findMediaUrlInNode: function (at) {
        if (!at) {
          return;
        }
        var aq = ["img", "embed", "video", "audio"];
        var ao = at.nodeName.toLowerCase();
        if (-1 !== M(aq, ao) && ae.findFirstNodeHavingAttributeWithValue(at, "src")) {
          var ar = ae.findFirstNodeHavingAttributeWithValue(at, "src");
          return ae.getAttributeValueFromNode(ar, "src");
        }
        if (ao === "object" && ae.hasNodeAttributeWithValue(at, "data")) {
          return ae.getAttributeValueFromNode(at, "data");
        }
        if (ao === "object") {
          var au = ae.findNodesByTagName(at, "param");
          if (au && au.length) {
            var ap;
            for (ap = 0; ap < au.length; ap++) {
              if (
                "movie" === ae.getAttributeValueFromNode(au[ap], "name") &&
                ae.hasNodeAttributeWithValue(au[ap], "value")
              ) {
                return ae.getAttributeValueFromNode(au[ap], "value");
              }
            }
          }
          var av = ae.findNodesByTagName(at, "embed");
          if (av && av.length) {
            return this.findMediaUrlInNode(av[0]);
          }
        }
      },
      trim: function (ao) {
        return a(ao);
      },
      isOrWasNodeInViewport: function (au) {
        if (!au || !au.getBoundingClientRect || au.nodeType !== 1) {
          return true;
        }
        var at = au.getBoundingClientRect();
        var ar = G.documentElement || {};
        var aq = at.top < 0;
        if (aq && au.offsetTop) {
          aq = au.offsetTop + at.height > 0;
        }
        var ap = ar.clientWidth;
        if (S.innerWidth && ap > S.innerWidth) {
          ap = S.innerWidth;
        }
        var ao = ar.clientHeight;
        if (S.innerHeight && ao > S.innerHeight) {
          ao = S.innerHeight;
        }
        return (at.bottom > 0 || aq) && at.right > 0 && at.left < ap && (at.top < ao || aq);
      },
      isNodeVisible: function (ap) {
        var ao = i(ap);
        var aq = this.isOrWasNodeInViewport(ap);
        return ao && aq;
      },
      buildInteractionRequestParams: function (ao, ap, aq, ar) {
        var at = "";
        if (ao) {
          at += "c_i=" + s(ao);
        }
        if (ap) {
          if (at) {
            at += "&";
          }
          at += "c_n=" + s(ap);
        }
        if (aq) {
          if (at) {
            at += "&";
          }
          at += "c_p=" + s(aq);
        }
        if (ar) {
          if (at) {
            at += "&";
          }
          at += "c_t=" + s(ar);
        }
        if (at) {
          at += "&ca=1";
        }
        return at;
      },
      buildImpressionRequestParams: function (ao, ap, aq) {
        var ar = "c_n=" + s(ao) + "&c_p=" + s(ap);
        if (aq) {
          ar += "&c_t=" + s(aq);
        }
        if (ar) {
          ar += "&ca=1";
        }
        return ar;
      },
      buildContentBlock: function (aq) {
        if (!aq) {
          return;
        }
        var ao = this.findContentName(aq);
        var ap = this.findContentPiece(aq);
        var ar = this.findContentTarget(aq);
        ao = this.trim(ao);
        ap = this.trim(ap);
        ar = this.trim(ar);
        return { name: ao || "Unknown", piece: ap || "Unknown", target: ar || "" };
      },
      collectContent: function (ar) {
        if (!ar || !ar.length) {
          return [];
        }
        var aq = [];
        var ao, ap;
        for (ao = 0; ao < ar.length; ao++) {
          ap = this.buildContentBlock(ar[ao]);
          if (J(ap)) {
            aq.push(ap);
          }
        }
        return aq;
      },
      setLocation: function (ao) {
        this.location = ao;
      },
      getLocation: function () {
        var ao = this.location || S.location;
        if (!ao.origin) {
          ao.origin = ao.protocol + "//" + ao.hostname + (ao.port ? ":" + ao.port : "");
        }
        return ao;
      },
      toAbsoluteUrl: function (ap) {
        if ((!ap || String(ap) !== ap) && ap !== "") {
          return ap;
        }
        if ("" === ap) {
          return this.getLocation().href;
        }
        if (ap.search(/^\/\//) !== -1) {
          return this.getLocation().protocol + ap;
        }
        if (ap.search(/:\/\//) !== -1) {
          return ap;
        }
        if (0 === ap.indexOf("#")) {
          return this.getLocation().origin + this.getLocation().pathname + ap;
        }
        if (0 === ap.indexOf("?")) {
          return this.getLocation().origin + this.getLocation().pathname + ap;
        }
        if (0 === ap.search("^[a-zA-Z]{2,11}:")) {
          return ap;
        }
        if (ap.search(/^\//) !== -1) {
          return this.getLocation().origin + ap;
        }
        var ao = "(.*/)";
        var aq = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ao))[0];
        return aq + ap;
      },
      isUrlToCurrentDomain: function (ap) {
        var aq = this.toAbsoluteUrl(ap);
        if (!aq) {
          return false;
        }
        var ao = this.getLocation().origin;
        if (ao === aq) {
          return true;
        }
        if (0 === String(aq).indexOf(ao)) {
          if (":" === String(aq).substr(ao.length, 1)) {
            return false;
          }
          return true;
        }
        return false;
      },
      setHrefAttribute: function (ap, ao) {
        if (!ap || !ao) {
          return;
        }
        ae.setAnyAttribute(ap, "href", ao);
      },
      shouldIgnoreInteraction: function (ao) {
        if (ae.hasNodeAttribute(ao, this.CONTENT_IGNOREINTERACTION_ATTR)) {
          return true;
        }
        if (ae.hasNodeCssClass(ao, this.CONTENT_IGNOREINTERACTION_CLASS)) {
          return true;
        }
        if (ae.hasNodeCssClass(ao, this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS)) {
          return true;
        }
        return false;
      },
    };
    function W(ap, at) {
      if (at) {
        return at;
      }
      ap = v.toAbsoluteUrl(ap);
      if (z(ap, "?")) {
        var ar = ap.indexOf("?");
        ap = ap.slice(0, ar);
      }
      if (Q(ap, "matomo.php")) {
        ap = f(ap, "matomo.php".length);
      } else {
        if (Q(ap, "piwik.php")) {
          ap = f(ap, "piwik.php".length);
        } else {
          if (Q(ap, ".php")) {
            var ao = ap.lastIndexOf("/");
            var aq = 1;
            ap = ap.slice(0, ao + aq);
          }
        }
      }
      if (Q(ap, "/js/")) {
        ap = f(ap, "js/".length);
      }
      return ap;
    }
    function N(av) {
      var ax = "Matomo_Overlay";
      var ap = new RegExp(
        "index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=[^&]*)?"
      );
      var aq = ap.exec(G.referrer);
      if (aq) {
        var at = aq[1];
        if (at !== String(av)) {
          return false;
        }
        var au = aq[2],
          ao = aq[3],
          ar = aq[4];
        if (!ar) {
          ar = "";
        } else {
          if (ar.indexOf("&segment=") === 0) {
            ar = ar.substr("&segment=".length);
          }
        }
        S.name = ax + "###" + au + "###" + ao + "###" + ar;
      }
      var aw = S.name.split("###");
      return aw.length === 4 && aw[0] === ax;
    }
    function Z(ap, av, aq) {
      var au = S.name.split("###"),
        at = au[1],
        ao = au[2],
        ar = au[3],
        aw = W(ap, av);
      n(aw + "plugins/Overlay/client/client.js?v=1", function () {
        Matomo_Overlay_Client.initialize(aw, aq, at, ao, ar);
      });
    }
    function u() {
      var aq;
      try {
        aq = S.frameElement;
      } catch (ap) {
        return true;
      }
      if (J(aq)) {
        return aq && String(aq.nodeName).toLowerCase() === "iframe" ? true : false;
      }
      try {
        return S.self !== S.top;
      } catch (ao) {
        return true;
      }
    }
    function P(ce, ca) {
      var bK = this,
        be = "mtm_consent",
        cE = "mtm_cookie_consent",
        cN = "mtm_consent_removed",
        b5 = aa(G.domain, S.location.href, K()),
        cV = L(b5[0]),
        bO = o(b5[1]),
        bp = o(b5[2]),
        cT = false,
        ci = "GET",
        db = ci,
        aI = "application/x-www-form-urlencoded; charset=UTF-8",
        cx = aI,
        aE = ce || "",
        bJ = "",
        c1 = "",
        b7 = ca || "",
        bA = "",
        bP = "",
        a5,
        bk = "",
        c8 = [
          "7z",
          "aac",
          "apk",
          "arc",
          "arj",
          "asf",
          "asx",
          "avi",
          "azw3",
          "bin",
          "csv",
          "deb",
          "dmg",
          "doc",
          "docx",
          "epub",
          "exe",
          "flv",
          "gif",
          "gz",
          "gzip",
          "hqx",
          "ibooks",
          "jar",
          "jpg",
          "jpeg",
          "js",
          "mobi",
          "mp2",
          "mp3",
          "mp4",
          "mpg",
          "mpeg",
          "mov",
          "movie",
          "msi",
          "msp",
          "odb",
          "odf",
          "odg",
          "ods",
          "odt",
          "ogg",
          "ogv",
          "pdf",
          "phps",
          "png",
          "ppt",
          "pptx",
          "qt",
          "qtm",
          "ra",
          "ram",
          "rar",
          "rpm",
          "rtf",
          "sea",
          "sit",
          "tar",
          "tbz",
          "tbz2",
          "bz",
          "bz2",
          "tgz",
          "torrent",
          "txt",
          "wav",
          "wma",
          "wmv",
          "wpd",
          "xls",
          "xlsx",
          "xml",
          "z",
          "zip",
        ],
        ay = [cV],
        bB = [],
        bM = [],
        a9 = [],
        bL = 500,
        cY = true,
        cK,
        a6,
        bS,
        bQ,
        ao,
        cp = [
          "pk_campaign",
          "mtm_campaign",
          "piwik_campaign",
          "matomo_campaign",
          "utm_campaign",
          "utm_source",
          "utm_medium",
        ],
        bI = ["pk_kwd", "mtm_kwd", "piwik_kwd", "matomo_kwd", "utm_term"],
        bl = "_pk_",
        av = "pk_vid",
        a0 = 180,
        cZ,
        br,
        bT = false,
        aJ = "Lax",
        bn = false,
        cR,
        bf,
        bx,
        cL = 33955200000,
        cn = 1800000,
        c7 = 15768000000,
        a3 = true,
        bG = false,
        bi = false,
        bR = false,
        aR = false,
        cc,
        bX = {},
        cm = {},
        bo = {},
        bv = 200,
        ct = {},
        c2 = {},
        c9 = {},
        cb = [],
        cf = false,
        cC = false,
        ap = false,
        da = false,
        cO = false,
        aO = false,
        bd = u(),
        cy = null,
        c0 = null,
        aS,
        bD,
        b8 = am,
        bq,
        aM,
        bC = false,
        cq = 0,
        bw = ["id", "ses", "cvar", "ref"],
        cB = false,
        bE = null,
        cM = [],
        cs = [],
        ax = T++,
        aw = false;
      try {
        bk = G.title;
      } catch (cz) {
        bk = "";
      }
      function aD(dm) {
        if (bn) {
          return 0;
        }
        var dk = new RegExp("(^|;)[ ]*" + dm + "=([^;]*)"),
          dl = dk.exec(G.cookie);
        return dl ? R(dl[2]) : 0;
      }
      bE = !aD(cN);
      function df(dp, dq, dt, ds, dm, dn, dr) {
        if (bn && dp !== cN) {
          return;
        }
        var dl;
        if (dt) {
          dl = new Date();
          dl.setTime(dl.getTime() + dt);
        }
        if (!dr) {
          dr = "Lax";
        }
        G.cookie =
          dp +
          "=" +
          s(dq) +
          (dt ? ";expires=" + dl.toGMTString() : "") +
          ";path=" +
          (ds || "/") +
          (dm ? ";domain=" + dm : "") +
          (dn ? ";secure" : "") +
          ";SameSite=" +
          dr;
        if ((!dt || dt >= 0) && aD(dp) !== dq) {
          var dk = "There was an error setting cookie `" + dp + "`. Please check domain and path.";
          ak(dk);
        }
      }
      function b3(dk) {
        var dl;
        dk = j(dk, av);
        if (bQ) {
          dl = new RegExp("#.*");
          return dk.replace(dl, "");
        }
        return dk;
      }
      function bW(dm, dk) {
        var dn = r(dk),
          dl;
        if (dn) {
          return dk;
        }
        if (dk.slice(0, 1) === "/") {
          return r(dm) + "://" + d(dm) + dk;
        }
        dm = b3(dm);
        dl = dm.indexOf("?");
        if (dl >= 0) {
          dm = dm.slice(0, dl);
        }
        dl = dm.lastIndexOf("/");
        if (dl !== dm.length - 1) {
          dm = dm.slice(0, dl + 1);
        }
        return dm + dk;
      }
      function cI(dm, dk) {
        var dl;
        dm = String(dm).toLowerCase();
        dk = String(dk).toLowerCase();
        if (dm === dk) {
          return true;
        }
        if (dk.slice(0, 1) === ".") {
          if (dm === dk.slice(1)) {
            return true;
          }
          dl = dm.length - dk.length;
          if (dl > 0 && dm.slice(dl) === dk) {
            return true;
          }
        }
        return false;
      }
      function cl(dk) {
        var dl = document.createElement("a");
        if (dk.indexOf("//") !== 0 && dk.indexOf("http") !== 0) {
          if (dk.indexOf("*") === 0) {
            dk = dk.substr(1);
          }
          if (dk.indexOf(".") === 0) {
            dk = dk.substr(1);
          }
          dk = "http://" + dk;
        }
        dl.href = v.toAbsoluteUrl(dk);
        if (dl.pathname) {
          return dl.pathname;
        }
        return "";
      }
      function a4(dl, dk) {
        if (!aj(dk, "/")) {
          dk = "/" + dk;
        }
        if (!aj(dl, "/")) {
          dl = "/" + dl;
        }
        var dm = dk === "/" || dk === "/*";
        if (dm) {
          return true;
        }
        if (dl === dk) {
          return true;
        }
        dk = String(dk).toLowerCase();
        dl = String(dl).toLowerCase();
        if (Q(dk, "*")) {
          dk = dk.slice(0, -1);
          dm = !dk || dk === "/";
          if (dm) {
            return true;
          }
          if (dl === dk) {
            return true;
          }
          return dl.indexOf(dk) === 0;
        }
        if (!Q(dl, "/")) {
          dl += "/";
        }
        if (!Q(dk, "/")) {
          dk += "/";
        }
        return dl.indexOf(dk) === 0;
      }
      function ar(dp, dr) {
        var dl, dk, dm, dn, dq;
        for (dl = 0; dl < ay.length; dl++) {
          dn = L(ay[dl]);
          dq = cl(ay[dl]);
          if (cI(dp, dn) && a4(dr, dq)) {
            return true;
          }
        }
        return false;
      }
      function aW(dn) {
        var dl, dk, dm;
        for (dl = 0; dl < ay.length; dl++) {
          dk = L(ay[dl].toLowerCase());
          if (dn === dk) {
            return true;
          }
          if (dk.slice(0, 1) === ".") {
            if (dn === dk.slice(1)) {
              return true;
            }
            dm = dn.length - dk.length;
            if (dm > 0 && dn.slice(dm) === dk) {
              return true;
            }
          }
        }
        return false;
      }
      function co(dk, dm) {
        dk = dk.replace("send_image=0", "send_image=1");
        var dl = new Image(1, 1);
        dl.onload = function () {
          E = 0;
          if (typeof dm === "function") {
            dm({ request: dk, trackerUrl: aE, success: true });
          }
        };
        dl.onerror = function () {
          if (typeof dm === "function") {
            dm({ request: dk, trackerUrl: aE, success: false });
          }
        };
        dl.src = aE + (aE.indexOf("?") < 0 ? "?" : "&") + dk;
      }
      function cF(dk) {
        if (db === "POST") {
          return true;
        }
        return dk && (dk.length > 2000 || dk.indexOf('{"requests"') === 0);
      }
      function aL() {
        return "object" === typeof g && "function" === typeof g.sendBeacon && "function" === typeof Blob;
      }
      function a7(dp, ds, dr) {
        var dm = aL();
        if (!dm) {
          return false;
        }
        var dn = { type: "application/x-www-form-urlencoded; charset=UTF-8" };
        var dt = false;
        var dl = aE;
        try {
          var dk = new Blob([dp], dn);
          if (dr && !cF(dp)) {
            dk = new Blob([], dn);
            dl = dl + (dl.indexOf("?") < 0 ? "?" : "&") + dp;
          }
          dt = g.sendBeacon(dl, dk);
        } catch (dq) {
          return false;
        }
        if (dt && typeof ds === "function") {
          ds({ request: dp, trackerUrl: aE, success: true, isSendBeacon: true });
        }
        return dt;
      }
      function c6(dl, dm, dk) {
        if (!J(dk) || null === dk) {
          dk = true;
        }
        if (l && a7(dl, dm, dk)) {
          return;
        }
        setTimeout(function () {
          if (l && a7(dl, dm, dk)) {
            return;
          }
          var dq;
          try {
            var dp = S.XMLHttpRequest
              ? new S.XMLHttpRequest()
              : S.ActiveXObject
              ? new ActiveXObject("Microsoft.XMLHTTP")
              : null;
            dp.open("POST", aE, true);
            dp.onreadystatechange = function () {
              if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                var dr = l && a7(dl, dm, dk);
                if (!dr && dk) {
                  co(dl, dm);
                } else {
                  if (typeof dm === "function") {
                    dm({ request: dl, trackerUrl: aE, success: false, xhr: this });
                  }
                }
              } else {
                if (this.readyState === 4 && typeof dm === "function") {
                  dm({ request: dl, trackerUrl: aE, success: true, xhr: this });
                }
              }
            };
            dp.setRequestHeader("Content-Type", cx);
            dp.withCredentials = true;
            dp.send(dl);
          } catch (dn) {
            dq = l && a7(dl, dm, dk);
            if (!dq && dk) {
              co(dl, dm);
            } else {
              if (typeof dm === "function") {
                dm({ request: dl, trackerUrl: aE, success: false });
              }
            }
          }
        }, 50);
      }
      function cg(dl) {
        var dk = new Date();
        var dm = dk.getTime() + dl;
        if (!q || dm > q) {
          q = dm;
        }
      }
      function bb() {
        bd = true;
        cy = new Date().getTime();
      }
      function de() {
        var dk = new Date().getTime();
        return !cy || dk - cy > a6;
      }
      function az() {
        if (de()) {
          bS();
        }
      }
      function dh() {
        if (aO || !a6) {
          return;
        }
        aO = true;
        an(S, "focus", bb);
        an(S, "blur", az);
        ab++;
        t.addPlugin("HeartBeat" + ab, {
          unload: function () {
            if (aO && de()) {
              bS();
            }
          },
        });
      }
      function cD(dp) {
        var dl = new Date();
        var dk = dl.getTime();
        c0 = dk;
        if (cC && dk < cC) {
          var dm = cC - dk;
          setTimeout(dp, dm);
          cg(dm + 50);
          cC += 50;
          return;
        }
        if (cC === false) {
          var dn = 800;
          cC = dk + dn;
        }
        dp();
      }
      function aP() {
        if (aD(cN)) {
          bE = false;
        } else {
          if (aD(be)) {
            bE = true;
          }
        }
      }
      function bH(dl, dk, dm) {
        aP();
        if (!bE) {
          cM.push(dl);
          return;
        }
        aw = true;
        if (!cR && dl) {
          if (cB && bE) {
            dl += "&consent=1";
          }
          cD(function () {
            if (cY && a7(dl, dm, true)) {
              cg(100);
              return;
            }
            if (cF(dl)) {
              c6(dl, dm);
            } else {
              co(dl, dm);
            }
            cg(dk);
          });
        }
        if (!aO) {
          dh();
        }
      }
      function ck(dk) {
        if (cR) {
          return false;
        }
        return dk && dk.length;
      }
      function c5(dk, dp) {
        if (!dp || dp >= dk.length) {
          return [dk];
        }
        var dl = 0;
        var dm = dk.length;
        var dn = [];
        for (dl; dl < dm; dl += dp) {
          dn.push(dk.slice(dl, dl + dp));
        }
        return dn;
      }
      function dg(dl, dk) {
        if (!ck(dl)) {
          return;
        }
        if (!bE) {
          cM.push(dl);
          return;
        }
        aw = true;
        cD(function () {
          var dp = c5(dl, 50);
          var dm = 0,
            dn;
          for (dm; dm < dp.length; dm++) {
            dn = '{"requests":["?' + dp[dm].join('","?') + '"],"send_image":0}';
            if (cY && a7(dn, null, false)) {
              cg(100);
            } else {
              c6(dn, null, false);
            }
          }
          cg(dk);
        });
      }
      function aU(dk) {
        return bl + dk + "." + b7 + "." + bq;
      }
      function bZ(dm, dl, dk) {
        df(dm, "", -86400, dl, dk);
      }
      function b6() {
        if (bn) {
          return "0";
        }
        if (!J(S.showModalDialog) && J(g.cookieEnabled)) {
          return g.cookieEnabled ? "1" : "0";
        }
        var dk = bl + "testcookie";
        df(dk, "1", undefined, br, cZ, bT, aJ);
        var dl = aD(dk) === "1" ? "1" : "0";
        bZ(dk);
        return dl;
      }
      function bj() {
        bq = b8((cZ || cV) + (br || "/")).slice(0, 4);
      }
      function cJ() {
        if (J(c9.res)) {
          return c9;
        }
        var dl,
          dn,
          dp = {
            pdf: "application/pdf",
            qt: "video/quicktime",
            realp: "audio/x-pn-realaudio-plugin",
            wma: "application/x-mplayer2",
            fla: "application/x-shockwave-flash",
            java: "application/x-java-vm",
            ag: "application/x-silverlight",
          };
        if (!new RegExp("MSIE").test(g.userAgent)) {
          if (g.mimeTypes && g.mimeTypes.length) {
            for (dl in dp) {
              if (Object.prototype.hasOwnProperty.call(dp, dl)) {
                dn = g.mimeTypes[dp[dl]];
                c9[dl] = dn && dn.enabledPlugin ? "1" : "0";
              }
            }
          }
          if (
            !new RegExp("Edge[ /](\\d+[\\.\\d]+)").test(g.userAgent) &&
            typeof navigator.javaEnabled !== "unknown" &&
            J(g.javaEnabled) &&
            g.javaEnabled()
          ) {
            c9.java = "1";
          }
          if (!J(S.showModalDialog) && J(g.cookieEnabled)) {
            c9.cookie = g.cookieEnabled ? "1" : "0";
          } else {
            c9.cookie = b6();
          }
        }
        var dm = parseInt(X.width, 10);
        var dk = parseInt(X.height, 10);
        c9.res = parseInt(dm, 10) + "x" + parseInt(dk, 10);
        return c9;
      }
      function bY() {
        var dl = aU("cvar"),
          dk = aD(dl);
        if (dk && dk.length) {
          dk = S.JSON.parse(dk);
          if (V(dk)) {
            return dk;
          }
        }
        return {};
      }
      function cG() {
        if (aR === false) {
          aR = bY();
        }
      }
      function cS() {
        var dk = cJ();
        return b8(
          (g.userAgent || "") + (g.platform || "") + S.JSON.stringify(dk) + new Date().getTime() + Math.random()
        ).slice(0, 16);
      }
      function aB() {
        var dk = cJ();
        return b8((g.userAgent || "") + (g.platform || "") + S.JSON.stringify(dk)).slice(0, 6);
      }
      function bg() {
        return Math.floor(new Date().getTime() / 1000);
      }
      function aK() {
        var dl = bg();
        var dm = aB();
        var dk = String(dl) + dm;
        return dk;
      }
      function c4(dm) {
        dm = String(dm);
        var dq = aB();
        var dn = dq.length;
        var dp = dm.substr(-1 * dn, dn);
        var dl = parseInt(dm.substr(0, dm.length - dn), 10);
        if (dl && dp && dp === dq) {
          var dk = bg();
          if (a0 <= 0) {
            return true;
          }
          if (dk >= dl && dk <= dl + a0) {
            return true;
          }
        }
        return false;
      }
      function di(dk) {
        if (!cO) {
          return "";
        }
        var dp = e(dk, av);
        if (!dp) {
          return "";
        }
        dp = String(dp);
        var dm = new RegExp("^[a-zA-Z0-9]+$");
        if (dp.length === 32 && dm.test(dp)) {
          var dl = dp.substr(16, 32);
          if (c4(dl)) {
            var dn = dp.substr(0, 16);
            return dn;
          }
        }
        return "";
      }
      function cP() {
        if (!bP) {
          bP = di(bO);
        }
        var dm = new Date(),
          dk = Math.round(dm.getTime() / 1000),
          dl = aU("id"),
          dq = aD(dl),
          dp,
          dn;
        if (dq) {
          dp = dq.split(".");
          dp.unshift("0");
          if (bP.length) {
            dp[1] = bP;
          }
          return dp;
        }
        if (bP.length) {
          dn = bP;
        } else {
          if ("0" === b6()) {
            dn = "";
          } else {
            dn = cS();
          }
        }
        dp = ["1", dn, dk];
        return dp;
      }
      function aZ() {
        var dn = cP(),
          dl = dn[0],
          dm = dn[1],
          dk = dn[2];
        return { newVisitor: dl, uuid: dm, createTs: dk };
      }
      function aH() {
        var dn = new Date(),
          dl = dn.getTime(),
          dp = aZ().createTs;
        var dk = parseInt(dp, 10);
        var dm = dk * 1000 + cL - dl;
        return dm;
      }
      function aN(dk) {
        if (!b7) {
          return;
        }
        var dm = new Date(),
          dl = Math.round(dm.getTime() / 1000);
        if (!J(dk)) {
          dk = aZ();
        }
        var dn = dk.uuid + "." + dk.createTs + ".";
        df(aU("id"), dn, aH(), br, cZ, bT, aJ);
      }
      function bN() {
        var dk = aD(aU("ref"));
        if (dk.length) {
          try {
            dk = S.JSON.parse(dk);
            if (V(dk)) {
              return dk;
            }
          } catch (dl) {}
        }
        return ["", "", 0, ""];
      }
      function by(dm) {
        var dl = bl + "testcookie_domain";
        var dk = "testvalue";
        df(dl, dk, 10000, null, dm, bT, aJ);
        if (aD(dl) === dk) {
          bZ(dl, null, dm);
          return true;
        }
        return false;
      }
      function aF() {
        var dl = bn;
        bn = false;
        var dk, dm;
        for (dk = 0; dk < bw.length; dk++) {
          dm = aU(bw[dk]);
          if (dm !== cN && dm !== be && 0 !== aD(dm)) {
            bZ(dm, br, cZ);
          }
        }
        bn = dl;
      }
      function b4(dk) {
        b7 = dk;
      }
      function dj(dp) {
        if (!dp || !V(dp)) {
          return;
        }
        var dn = [];
        var dm;
        for (dm in dp) {
          if (Object.prototype.hasOwnProperty.call(dp, dm)) {
            dn.push(dm);
          }
        }
        var dq = {};
        dn.sort();
        var dk = dn.length;
        var dl;
        for (dl = 0; dl < dk; dl++) {
          dq[dn[dl]] = dp[dn[dl]];
        }
        return dq;
      }
      function cd() {
        df(aU("ses"), "1", cn, br, cZ, bT, aJ);
      }
      function bh() {
        var dn = "";
        var dl = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var dm = dl.length;
        var dk;
        for (dk = 0; dk < 6; dk++) {
          dn += dl.charAt(Math.floor(Math.random() * dm));
        }
        return dn;
      }
      function aA(dl) {
        if (!h) {
          return dl;
        }
        var dm = typeof h.timing === "object" && h.timing ? h.timing : undefined;
        if (!dm) {
          dm =
            typeof h.getEntriesByType === "function" && h.getEntriesByType("navigation")
              ? h.getEntriesByType("navigation")[0]
              : undefined;
        }
        if (!dm) {
          return dl;
        }
        var dk = "";
        if (dm.connectEnd && dm.fetchStart) {
          if (dm.connectEnd < dm.fetchStart) {
            return;
          }
          dk += "&pf_net=" + Math.round(dm.connectEnd - dm.fetchStart);
        }
        if (dm.responseStart && dm.requestStart) {
          if (dm.responseStart < dm.requestStart) {
            return;
          }
          dk += "&pf_srv=" + Math.round(dm.responseStart - dm.requestStart);
        }
        if (dm.responseStart && dm.responseEnd) {
          if (dm.responseEnd < dm.responseStart) {
            return;
          }
          dk += "&pf_tfr=" + Math.round(dm.responseEnd - dm.responseStart);
        }
        if (J(dm.domLoading)) {
          if (dm.domInteractive && dm.domLoading) {
            if (dm.domInteractive < dm.domLoading) {
              return;
            }
            dk += "&pf_dm1=" + Math.round(dm.domInteractive - dm.domLoading);
          }
        } else {
          if (dm.domInteractive && dm.responseEnd) {
            if (dm.domInteractive < dm.responseEnd) {
              return;
            }
            dk += "&pf_dm1=" + Math.round(dm.domInteractive - dm.responseEnd);
          }
        }
        if (dm.domComplete && dm.domInteractive) {
          if (dm.domComplete < dm.domInteractive) {
            return;
          }
          dk += "&pf_dm2=" + Math.round(dm.domComplete - dm.domInteractive);
        }
        if (dm.loadEventEnd && dm.loadEventStart) {
          if (dm.loadEventEnd < dm.loadEventStart) {
            return;
          }
          dk += "&pf_onl=" + Math.round(dm.loadEventEnd - dm.loadEventStart);
        }
        return dl + dk;
      }
      function cr(dm, dH, dI) {
        var dG,
          dl = new Date(),
          du = Math.round(dl.getTime() / 1000),
          dr,
          dE,
          dn = 1024,
          dN,
          dv,
          dD = aR,
          dp = aU("ses"),
          dB = aU("ref"),
          dy = aU("cvar"),
          dz = aD(dp),
          dF = bN(),
          dJ = a5 || bO,
          ds,
          dk;
        if (bn) {
          aF();
        }
        if (cR) {
          return "";
        }
        var dA = aZ();
        var dx = G.characterSet || G.charset;
        if (!dx || dx.toLowerCase() === "utf-8") {
          dx = null;
        }
        ds = dF[0];
        dk = dF[1];
        dr = dF[2];
        dE = dF[3];
        if (!dz) {
          if (!bx || !ds.length) {
            for (dG in cp) {
              if (Object.prototype.hasOwnProperty.call(cp, dG)) {
                ds = e(dJ, cp[dG]);
                if (ds.length) {
                  break;
                }
              }
            }
            for (dG in bI) {
              if (Object.prototype.hasOwnProperty.call(bI, dG)) {
                dk = e(dJ, bI[dG]);
                if (dk.length) {
                  break;
                }
              }
            }
          }
          dN = d(bp);
          dv = dE.length ? d(dE) : "";
          if (dN.length && !aW(dN) && (!bx || !dv.length || aW(dv))) {
            dE = bp;
          }
          if (dE.length || ds.length) {
            dr = du;
            dF = [ds, dk, dr, b3(dE.slice(0, dn))];
            df(dB, S.JSON.stringify(dF), c7, br, cZ, bT, aJ);
          }
        }
        dm +=
          "&idsite=" +
          b7 +
          "&rec=1&r=" +
          String(Math.random()).slice(2, 8) +
          "&h=" +
          dl.getHours() +
          "&m=" +
          dl.getMinutes() +
          "&s=" +
          dl.getSeconds() +
          "&url=" +
          s(b3(dJ)) +
          (bp.length ? "&urlref=" + s(b3(bp)) : "") +
          (Y(bA) ? "&uid=" + s(bA) : "") +
          "&_id=" +
          dA.uuid +
          "&_idn=" +
          dA.newVisitor +
          (ds.length ? "&_rcn=" + s(ds) : "") +
          (dk.length ? "&_rck=" + s(dk) : "") +
          "&_refts=" +
          dr +
          (String(dE).length ? "&_ref=" + s(b3(dE.slice(0, dn))) : "") +
          (dx ? "&cs=" + s(dx) : "") +
          "&send_image=0";
        var dM = cJ();
        for (dG in dM) {
          if (Object.prototype.hasOwnProperty.call(dM, dG)) {
            dm += "&" + dG + "=" + dM[dG];
          }
        }
        var dL = [];
        if (dH) {
          for (dG in dH) {
            if (Object.prototype.hasOwnProperty.call(dH, dG) && /^dimension\d+$/.test(dG)) {
              var dq = dG.replace("dimension", "");
              dL.push(parseInt(dq, 10));
              dL.push(String(dq));
              dm += "&" + dG + "=" + s(dH[dG]);
              delete dH[dG];
            }
          }
        }
        if (dH && B(dH)) {
          dH = null;
        }
        for (dG in ct) {
          if (Object.prototype.hasOwnProperty.call(ct, dG)) {
            dm += "&" + dG + "=" + s(ct[dG]);
          }
        }
        for (dG in bo) {
          if (Object.prototype.hasOwnProperty.call(bo, dG)) {
            var dw = -1 === M(dL, dG);
            if (dw) {
              dm += "&dimension" + dG + "=" + s(bo[dG]);
            }
          }
        }
        if (dH) {
          dm += "&data=" + s(S.JSON.stringify(dH));
        } else {
          if (ao) {
            dm += "&data=" + s(S.JSON.stringify(ao));
          }
        }
        function dt(dO, dP) {
          var dQ = S.JSON.stringify(dO);
          if (dQ.length > 2) {
            return "&" + dP + "=" + s(dQ);
          }
          return "";
        }
        var dK = dj(bX);
        var dC = dj(cm);
        dm += dt(dK, "cvar");
        dm += dt(dC, "e_cvar");
        if (aR) {
          dm += dt(aR, "_cvar");
          for (dG in dD) {
            if (Object.prototype.hasOwnProperty.call(dD, dG)) {
              if (aR[dG][0] === "" || aR[dG][1] === "") {
                delete aR[dG];
              }
            }
          }
          if (bR) {
            df(dy, S.JSON.stringify(aR), cn, br, cZ, bT, aJ);
          }
        }
        if (a3 && bG && !bi) {
          dm = aA(dm);
          bi = true;
        }
        if (aM) {
          dm += "&pv_id=" + aM;
        }
        aN(dA);
        cd();
        dm += ac(dI, { tracker: bK, request: dm });
        if (c1.length) {
          dm += "&" + c1;
        }
        if (A(cc)) {
          dm = cc(dm);
        }
        return dm;
      }
      bS = function a8() {
        var dk = new Date();
        dk = dk.getTime();
        if (!c0) {
          return false;
        }
        if (c0 + a6 <= dk) {
          bK.ping();
          return true;
        }
        return false;
      };
      function bs(dn, dm, ds, dp, dk, dv) {
        var dr = "idgoal=0",
          dl = new Date(),
          dt = [],
          du,
          dq = String(dn).length;
        if (dq) {
          dr += "&ec_id=" + s(dn);
        }
        dr += "&revenue=" + dm;
        if (String(ds).length) {
          dr += "&ec_st=" + ds;
        }
        if (String(dp).length) {
          dr += "&ec_tx=" + dp;
        }
        if (String(dk).length) {
          dr += "&ec_sh=" + dk;
        }
        if (String(dv).length) {
          dr += "&ec_dt=" + dv;
        }
        if (c2) {
          for (du in c2) {
            if (Object.prototype.hasOwnProperty.call(c2, du)) {
              if (!J(c2[du][1])) {
                c2[du][1] = "";
              }
              if (!J(c2[du][2])) {
                c2[du][2] = "";
              }
              if (!J(c2[du][3]) || String(c2[du][3]).length === 0) {
                c2[du][3] = 0;
              }
              if (!J(c2[du][4]) || String(c2[du][4]).length === 0) {
                c2[du][4] = 1;
              }
              dt.push(c2[du]);
            }
          }
          dr += "&ec_items=" + s(S.JSON.stringify(dt));
        }
        dr = cr(dr, ao, "ecommerce");
        bH(dr, bL);
        if (dq) {
          c2 = {};
        }
      }
      function b0(dk, dp, dn, dm, dl, dq) {
        if (String(dk).length && J(dp)) {
          bs(dk, dp, dn, dm, dl, dq);
        }
      }
      function bu(dk) {
        if (J(dk)) {
          bs("", dk, "", "", "", "");
        }
      }
      function b1(dl, dn, dm) {
        if (!bC) {
          aM = bh();
        }
        var dk = cr("action_name=" + s(al(dl || bk)), dn, "log");
        if (a3 && !bi) {
          dk = aA(dk);
        }
        bH(dk, bL, dm);
      }
      function a1(dm, dl) {
        var dn,
          dk = "(^| )(piwik[_-]" + dl + "|matomo[_-]" + dl;
        if (dm) {
          for (dn = 0; dn < dm.length; dn++) {
            dk += "|" + dm[dn];
          }
        }
        dk += ")( |$)";
        return new RegExp(dk);
      }
      function aV(dk) {
        return aE && dk && 0 === String(dk).indexOf(aE);
      }
      function cv(dp, dk, dq, dl) {
        if (aV(dk)) {
          return 0;
        }
        var dn = a1(bM, "download"),
          dm = a1(a9, "link"),
          dr = new RegExp("\\.(" + c8.join("|") + ")([?&#]|$)", "i");
        if (dm.test(dp)) {
          return "link";
        }
        if (dl || dn.test(dp) || dr.test(dk)) {
          return "download";
        }
        if (dq) {
          return 0;
        }
        return "link";
      }
      function au(dl) {
        var dk;
        dk = dl.parentNode;
        while (dk !== null && J(dk)) {
          if (ae.isLinkElement(dl)) {
            break;
          }
          dl = dk;
          dk = dl.parentNode;
        }
        return dl;
      }
      function dd(dq) {
        dq = au(dq);
        if (!ae.hasNodeAttribute(dq, "href")) {
          return;
        }
        if (!J(dq.href)) {
          return;
        }
        var dp = ae.getAttributeValueFromNode(dq, "href");
        var dl = dq.pathname || cl(dq.href);
        var dr = dq.hostname || d(dq.href);
        var ds = dr.toLowerCase();
        var dm = dq.href.replace(dr, ds);
        var dn = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
        if (!dn.test(dm)) {
          var dk = cv(dq.className, dm, ar(ds, dl), ae.hasNodeAttribute(dq, "download"));
          if (dk) {
            return { type: dk, href: dm };
          }
        }
      }
      function aQ(dk, dl, dm, dn) {
        var dp = v.buildInteractionRequestParams(dk, dl, dm, dn);
        if (!dp) {
          return;
        }
        return cr(dp, null, "contentInteraction");
      }
      function bc(dk, dl) {
        if (!dk || !dl) {
          return false;
        }
        var dm = v.findTargetNode(dk);
        if (v.shouldIgnoreInteraction(dm)) {
          return false;
        }
        dm = v.findTargetNodeNoDefault(dk);
        if (dm && !U(dm, dl)) {
          return false;
        }
        return true;
      }
      function cu(dm, dl, dp) {
        if (!dm) {
          return;
        }
        var dk = v.findParentContentNode(dm);
        if (!dk) {
          return;
        }
        if (!bc(dk, dm)) {
          return;
        }
        var dn = v.buildContentBlock(dk);
        if (!dn) {
          return;
        }
        if (!dn.target && dp) {
          dn.target = dp;
        }
        return v.buildInteractionRequestParams(dl, dn.name, dn.piece, dn.target);
      }
      function aX(dl) {
        if (!cb || !cb.length) {
          return false;
        }
        var dk, dm;
        for (dk = 0; dk < cb.length; dk++) {
          dm = cb[dk];
          if (dm && dm.name === dl.name && dm.piece === dl.piece && dm.target === dl.target) {
            return true;
          }
        }
        return false;
      }
      function aY(dk) {
        return function (dp) {
          if (!dk) {
            return;
          }
          var dm = v.findParentContentNode(dk);
          var dl;
          if (dp) {
            dl = dp.target || dp.srcElement;
          }
          if (!dl) {
            dl = dk;
          }
          if (!bc(dm, dl)) {
            return;
          }
          if (!dm) {
            return false;
          }
          var dq = v.findTargetNode(dm);
          if (!dq || v.shouldIgnoreInteraction(dq)) {
            return false;
          }
          var dn = dd(dq);
          if (da && dn && dn.type) {
            return dn.type;
          }
          return bK.trackContentInteractionNode(dl, "click");
        };
      }
      function b2(dm) {
        if (!dm || !dm.length) {
          return;
        }
        var dk, dl;
        for (dk = 0; dk < dm.length; dk++) {
          dl = v.findTargetNode(dm[dk]);
          if (dl && !dl.contentInteractionTrackingSetupDone) {
            dl.contentInteractionTrackingSetupDone = true;
            an(dl, "click", aY(dl));
          }
        }
      }
      function bz(dm, dn) {
        if (!dm || !dm.length) {
          return [];
        }
        var dk, dl;
        for (dk = 0; dk < dm.length; dk++) {
          if (aX(dm[dk])) {
            dm.splice(dk, 1);
            dk--;
          } else {
            cb.push(dm[dk]);
          }
        }
        if (!dm || !dm.length) {
          return [];
        }
        b2(dn);
        var dp = [];
        for (dk = 0; dk < dm.length; dk++) {
          dl = cr(
            v.buildImpressionRequestParams(dm[dk].name, dm[dk].piece, dm[dk].target),
            undefined,
            "contentImpressions"
          );
          if (dl) {
            dp.push(dl);
          }
        }
        return dp;
      }
      function cA(dl) {
        var dk = v.collectContent(dl);
        return bz(dk, dl);
      }
      function ba(dl) {
        if (!dl || !dl.length) {
          return [];
        }
        var dk;
        for (dk = 0; dk < dl.length; dk++) {
          if (!v.isNodeVisible(dl[dk])) {
            dl.splice(dk, 1);
            dk--;
          }
        }
        if (!dl || !dl.length) {
          return [];
        }
        return cA(dl);
      }
      function aG(dm, dk, dl) {
        var dn = v.buildImpressionRequestParams(dm, dk, dl);
        return cr(dn, null, "contentImpression");
      }
      function dc(dn, dl) {
        if (!dn) {
          return;
        }
        var dk = v.findParentContentNode(dn);
        var dm = v.buildContentBlock(dk);
        if (!dm) {
          return;
        }
        if (!dl) {
          dl = "Unknown";
        }
        return aQ(dl, dm.name, dm.piece, dm.target);
      }
      function cQ(dl, dn, dk, dm) {
        return (
          "e_c=" + s(dl) + "&e_a=" + s(dn) + (J(dk) ? "&e_n=" + s(dk) : "") + (J(dm) ? "&e_v=" + s(dm) : "") + "&ca=1"
        );
      }
      function at(dm, dp, dk, dn, dr, dq) {
        if (!Y(dm) || !Y(dp)) {
          ak(
            "Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces"
          );
          return false;
        }
        var dl = cr(cQ(dm, dp, dk, dn), dr, "event");
        bH(dl, bL, dq);
      }
      function b9(dk, dn, dl, dp) {
        var dm = cr(
          "search=" + s(dk) + (dn ? "&search_cat=" + s(dn) : "") + (J(dl) ? "&search_count=" + dl : ""),
          dp,
          "sitesearch"
        );
        bH(dm, bL);
      }
      function cU(dk, dp, dn, dm) {
        var dl = cr("idgoal=" + dk + (dp ? "&revenue=" + dp : ""), dn, "goal");
        bH(dl, bL, dm);
      }
      function c3(dn, dk, ds, dr, dm) {
        var dq = dk + "=" + s(b3(dn));
        var dl = cu(dm, "click", dn);
        if (dl) {
          dq += "&" + dl;
        }
        var dp = cr(dq, ds, "link");
        bH(dp, bL, dr);
      }
      function bV(dl, dk) {
        if (dl !== "") {
          return dl + dk.charAt(0).toUpperCase() + dk.slice(1);
        }
        return dk;
      }
      function ch(dq) {
        var dp,
          dk,
          dn = ["", "webkit", "ms", "moz"],
          dm;
        if (!bf) {
          for (dk = 0; dk < dn.length; dk++) {
            dm = dn[dk];
            if (Object.prototype.hasOwnProperty.call(G, bV(dm, "hidden"))) {
              if (G[bV(dm, "visibilityState")] === "prerender") {
                dp = true;
              }
              break;
            }
          }
        }
        if (dp) {
          an(G, dm + "visibilitychange", function dl() {
            G.removeEventListener(dm + "visibilitychange", dl, false);
            dq();
          });
          return;
        }
        dq();
      }
      function bt() {
        var dl = bK.getVisitorId();
        var dk = aK();
        return dl + dk;
      }
      function cj(dk) {
        if (!dk) {
          return;
        }
        if (!ae.hasNodeAttribute(dk, "href")) {
          return;
        }
        var dl = ae.getAttributeValueFromNode(dk, "href");
        if (!dl || aV(dl)) {
          return;
        }
        if (!bK.getVisitorId()) {
          return;
        }
        dl = j(dl, av);
        var dm = bt();
        dl = F(dl, av, dm);
        ae.setAnyAttribute(dk, "href", dl);
      }
      function bm(dn) {
        var dp = ae.getAttributeValueFromNode(dn, "href");
        if (!dp) {
          return false;
        }
        dp = String(dp);
        var dl = dp.indexOf("//") === 0 || dp.indexOf("http://") === 0 || dp.indexOf("https://") === 0;
        if (!dl) {
          return false;
        }
        var dk = dn.pathname || cl(dn.href);
        var dm = (dn.hostname || d(dn.href)).toLowerCase();
        if (ar(dm, dk)) {
          if (!cI(cV, L(dm))) {
            return true;
          }
          return false;
        }
        return false;
      }
      function cH(dk) {
        var dl = dd(dk);
        if (dl && dl.type) {
          dl.href = o(dl.href);
          c3(dl.href, dl.type, undefined, null, dk);
          return;
        }
        if (cO) {
          dk = au(dk);
          if (bm(dk)) {
            cj(dk);
          }
        }
      }
      function cw() {
        return G.all && !G.addEventListener;
      }
      function cW(dk) {
        var dm = dk.which;
        var dl = typeof dk.button;
        if (!dm && dl !== "undefined") {
          if (cw()) {
            if (dk.button & 1) {
              dm = 1;
            } else {
              if (dk.button & 2) {
                dm = 3;
              } else {
                if (dk.button & 4) {
                  dm = 2;
                }
              }
            }
          } else {
            if (dk.button === 0 || dk.button === "0") {
              dm = 1;
            } else {
              if (dk.button & 1) {
                dm = 2;
              } else {
                if (dk.button & 2) {
                  dm = 3;
                }
              }
            }
          }
        }
        return dm;
      }
      function bU(dk) {
        switch (cW(dk)) {
          case 1:
            return "left";
          case 2:
            return "middle";
          case 3:
            return "right";
        }
      }
      function a2(dk) {
        return dk.target || dk.srcElement;
      }
      function cX(dk) {
        return dk === "A" || dk === "AREA";
      }
      function aC(dk) {
        function dl(dn) {
          var dp = a2(dn);
          var dq = dp.nodeName;
          var dm = a1(bB, "ignore");
          while (!cX(dq) && dp && dp.parentNode) {
            dp = dp.parentNode;
            dq = dp.nodeName;
          }
          if (dp && cX(dq) && !dm.test(dp.className)) {
            return dp;
          }
        }
        return function (dp) {
          dp = dp || S.event;
          var dq = dl(dp);
          if (!dq) {
            return;
          }
          var dn = bU(dp);
          if (dp.type === "click") {
            var dm = false;
            if (dk && dn === "middle") {
              dm = true;
            }
            if (dq && !dm) {
              cH(dq);
            }
          } else {
            if (dp.type === "mousedown") {
              if (dn === "middle" && dq) {
                aS = dn;
                bD = dq;
              } else {
                aS = bD = null;
              }
            } else {
              if (dp.type === "mouseup") {
                if (dn === aS && dq === bD) {
                  cH(dq);
                }
                aS = bD = null;
              } else {
                if (dp.type === "contextmenu") {
                  cH(dq);
                }
              }
            }
          }
        };
      }
      function aq(dn, dm, dk) {
        var dl = typeof dm;
        if (dl === "undefined") {
          dm = true;
        }
        an(dn, "click", aC(dm), dk);
        if (dm) {
          an(dn, "mouseup", aC(dm), dk);
          an(dn, "mousedown", aC(dm), dk);
          an(dn, "contextmenu", aC(dm), dk);
        }
      }
      function aT(dl, dp, dq) {
        if (cf) {
          return true;
        }
        cf = true;
        var dr = false;
        var dn, dm;
        function dk() {
          dr = true;
        }
        m(function () {
          function ds(du) {
            setTimeout(function () {
              if (!cf) {
                return;
              }
              dr = false;
              dq.trackVisibleContentImpressions();
              ds(du);
            }, du);
          }
          function dt(du) {
            setTimeout(function () {
              if (!cf) {
                return;
              }
              if (dr) {
                dr = false;
                dq.trackVisibleContentImpressions();
              }
              dt(du);
            }, du);
          }
          if (dl) {
            dn = ["scroll", "resize"];
            for (dm = 0; dm < dn.length; dm++) {
              if (G.addEventListener) {
                G.addEventListener(dn[dm], dk, false);
              } else {
                S.attachEvent("on" + dn[dm], dk);
              }
            }
            dt(100);
          }
          if (dp && dp > 0) {
            dp = parseInt(dp, 10);
            ds(dp);
          }
        });
      }
      var bF = {
        enabled: true,
        requests: [],
        timeout: null,
        interval: 2500,
        sendRequests: function () {
          var dk = this.requests;
          this.requests = [];
          if (dk.length === 1) {
            bH(dk[0], bL);
          } else {
            dg(dk, bL);
          }
        },
        canQueue: function () {
          return !l && this.enabled;
        },
        pushMultiple: function (dl) {
          if (!this.canQueue()) {
            dg(dl, bL);
            return;
          }
          var dk;
          for (dk = 0; dk < dl.length; dk++) {
            this.push(dl[dk]);
          }
        },
        push: function (dk) {
          if (!dk) {
            return;
          }
          if (!this.canQueue()) {
            bH(dk, bL);
            return;
          }
          bF.requests.push(dk);
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
          }
          this.timeout = setTimeout(function () {
            bF.timeout = null;
            bF.sendRequests();
          }, bF.interval);
          var dl = "RequestQueue" + ax;
          if (!Object.prototype.hasOwnProperty.call(b, dl)) {
            b[dl] = {
              unload: function () {
                if (bF.timeout) {
                  clearTimeout(bF.timeout);
                }
                bF.sendRequests();
              },
            };
          }
        },
      };
      bj();
      aN();
      this.hasConsent = function () {
        return bE;
      };
      this.getVisitorId = function () {
        return aZ().uuid;
      };
      this.getVisitorInfo = function () {
        return cP();
      };
      this.getAttributionInfo = function () {
        return bN();
      };
      this.getAttributionCampaignName = function () {
        return bN()[0];
      };
      this.getAttributionCampaignKeyword = function () {
        return bN()[1];
      };
      this.getAttributionReferrerTimestamp = function () {
        return bN()[2];
      };
      this.getAttributionReferrerUrl = function () {
        return bN()[3];
      };
      this.setTrackerUrl = function (dk) {
        aE = dk;
      };
      this.getTrackerUrl = function () {
        return aE;
      };
      this.getMatomoUrl = function () {
        return W(this.getTrackerUrl(), bJ);
      };
      this.getPiwikUrl = function () {
        return this.getMatomoUrl();
      };
      this.addTracker = function (dm, dl) {
        if (!J(dm) || null === dm) {
          dm = this.getTrackerUrl();
        }
        var dk = new P(dm, dl);
        I.push(dk);
        t.trigger("TrackerAdded", [this]);
        return dk;
      };
      this.getSiteId = function () {
        return b7;
      };
      this.setSiteId = function (dk) {
        b4(dk);
      };
      this.resetUserId = function () {
        bA = "";
      };
      this.setUserId = function (dk) {
        if (Y(dk)) {
          bA = dk;
        }
      };
      this.setVisitorId = function (dl) {
        var dk = /[0-9A-Fa-f]{16}/g;
        if (w(dl) && dk.test(dl)) {
          bP = dl;
        } else {
          ak("Invalid visitorId set" + dl);
        }
      };
      this.getUserId = function () {
        return bA;
      };
      this.setCustomData = function (dk, dl) {
        if (V(dk)) {
          ao = dk;
        } else {
          if (!ao) {
            ao = {};
          }
          ao[dk] = dl;
        }
      };
      this.getCustomData = function () {
        return ao;
      };
      this.setCustomRequestProcessing = function (dk) {
        cc = dk;
      };
      this.appendToTrackingUrl = function (dk) {
        c1 = dk;
      };
      this.getRequest = function (dk) {
        return cr(dk);
      };
      this.addPlugin = function (dk, dl) {
        b[dk] = dl;
      };
      this.setCustomDimension = function (dk, dl) {
        dk = parseInt(dk, 10);
        if (dk > 0) {
          if (!J(dl)) {
            dl = "";
          }
          if (!w(dl)) {
            dl = String(dl);
          }
          bo[dk] = dl;
        }
      };
      this.getCustomDimension = function (dk) {
        dk = parseInt(dk, 10);
        if (dk > 0 && Object.prototype.hasOwnProperty.call(bo, dk)) {
          return bo[dk];
        }
      };
      this.deleteCustomDimension = function (dk) {
        dk = parseInt(dk, 10);
        if (dk > 0) {
          delete bo[dk];
        }
      };
      this.setCustomVariable = function (dl, dk, dp, dm) {
        var dn;
        if (!J(dm)) {
          dm = "visit";
        }
        if (!J(dk)) {
          return;
        }
        if (!J(dp)) {
          dp = "";
        }
        if (dl > 0) {
          dk = !w(dk) ? String(dk) : dk;
          dp = !w(dp) ? String(dp) : dp;
          dn = [dk.slice(0, bv), dp.slice(0, bv)];
          if (dm === "visit" || dm === 2) {
            cG();
            aR[dl] = dn;
          } else {
            if (dm === "page" || dm === 3) {
              bX[dl] = dn;
            } else {
              if (dm === "event") {
                cm[dl] = dn;
              }
            }
          }
        }
      };
      this.getCustomVariable = function (dl, dm) {
        var dk;
        if (!J(dm)) {
          dm = "visit";
        }
        if (dm === "page" || dm === 3) {
          dk = bX[dl];
        } else {
          if (dm === "event") {
            dk = cm[dl];
          } else {
            if (dm === "visit" || dm === 2) {
              cG();
              dk = aR[dl];
            }
          }
        }
        if (!J(dk) || (dk && dk[0] === "")) {
          return false;
        }
        return dk;
      };
      this.deleteCustomVariable = function (dk, dl) {
        if (this.getCustomVariable(dk, dl)) {
          this.setCustomVariable(dk, "", "", dl);
        }
      };
      this.deleteCustomVariables = function (dk) {
        if (dk === "page" || dk === 3) {
          bX = {};
        } else {
          if (dk === "event") {
            cm = {};
          } else {
            if (dk === "visit" || dk === 2) {
              aR = {};
            }
          }
        }
      };
      this.storeCustomVariablesInCookie = function () {
        bR = true;
      };
      this.setLinkTrackingTimer = function (dk) {
        bL = dk;
      };
      this.getLinkTrackingTimer = function () {
        return bL;
      };
      this.setDownloadExtensions = function (dk) {
        if (w(dk)) {
          dk = dk.split("|");
        }
        c8 = dk;
      };
      this.addDownloadExtensions = function (dl) {
        var dk;
        if (w(dl)) {
          dl = dl.split("|");
        }
        for (dk = 0; dk < dl.length; dk++) {
          c8.push(dl[dk]);
        }
      };
      this.removeDownloadExtensions = function (dm) {
        var dl,
          dk = [];
        if (w(dm)) {
          dm = dm.split("|");
        }
        for (dl = 0; dl < c8.length; dl++) {
          if (M(dm, c8[dl]) === -1) {
            dk.push(c8[dl]);
          }
        }
        c8 = dk;
      };
      this.setDomains = function (dk) {
        ay = w(dk) ? [dk] : dk;
        var dp = false,
          dm = 0,
          dl;
        for (dm; dm < ay.length; dm++) {
          dl = String(ay[dm]);
          if (cI(cV, L(dl))) {
            dp = true;
            break;
          }
          var dn = cl(dl);
          if (dn && dn !== "/" && dn !== "/*") {
            dp = true;
            break;
          }
        }
        if (!dp) {
          ay.push(cV);
        }
      };
      this.enableCrossDomainLinking = function () {
        cO = true;
      };
      this.disableCrossDomainLinking = function () {
        cO = false;
      };
      this.isCrossDomainLinkingEnabled = function () {
        return cO;
      };
      this.setCrossDomainLinkingTimeout = function (dk) {
        a0 = dk;
      };
      this.getCrossDomainLinkingUrlParameter = function () {
        return s(av) + "=" + s(bt());
      };
      this.setIgnoreClasses = function (dk) {
        bB = w(dk) ? [dk] : dk;
      };
      this.setRequestMethod = function (dk) {
        if (dk) {
          db = String(dk).toUpperCase();
        } else {
          db = ci;
        }
        if (db === "GET") {
          this.disableAlwaysUseSendBeacon();
        }
      };
      this.setRequestContentType = function (dk) {
        cx = dk || aI;
      };
      this.setGenerationTimeMs = function (dk) {
        ak(
          "setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. There is currently no replacement yet."
        );
      };
      this.setReferrerUrl = function (dk) {
        bp = dk;
      };
      this.setCustomUrl = function (dk) {
        a5 = bW(bO, dk);
      };
      this.getCurrentUrl = function () {
        return a5 || bO;
      };
      this.setDocumentTitle = function (dk) {
        bk = dk;
      };
      this.setPageViewId = function (dk) {
        aM = dk;
        bC = true;
      };
      this.setAPIUrl = function (dk) {
        bJ = dk;
      };
      this.setDownloadClasses = function (dk) {
        bM = w(dk) ? [dk] : dk;
      };
      this.setLinkClasses = function (dk) {
        a9 = w(dk) ? [dk] : dk;
      };
      this.setCampaignNameKey = function (dk) {
        cp = w(dk) ? [dk] : dk;
      };
      this.setCampaignKeywordKey = function (dk) {
        bI = w(dk) ? [dk] : dk;
      };
      this.discardHashTag = function (dk) {
        bQ = dk;
      };
      this.setCookieNamePrefix = function (dk) {
        bl = dk;
        if (aR) {
          aR = bY();
        }
      };
      this.setCookieDomain = function (dk) {
        var dl = L(dk);
        if (!bn && !by(dl)) {
          ak("Can't write cookie on domain " + dk);
        } else {
          cZ = dl;
          bj();
        }
      };
      this.getCookieDomain = function () {
        return cZ;
      };
      this.hasCookies = function () {
        return "1" === b6();
      };
      this.setSessionCookie = function (dm, dl, dk) {
        if (!dm) {
          throw new Error("Missing cookie name");
        }
        if (!J(dk)) {
          dk = cn;
        }
        bw.push(dm);
        df(aU(dm), dl, dk, br, cZ, bT, aJ);
      };
      this.getCookie = function (dl) {
        var dk = aD(aU(dl));
        if (dk === 0) {
          return null;
        }
        return dk;
      };
      this.setCookiePath = function (dk) {
        br = dk;
        bj();
      };
      this.getCookiePath = function (dk) {
        return br;
      };
      this.setVisitorCookieTimeout = function (dk) {
        cL = dk * 1000;
      };
      this.setSessionCookieTimeout = function (dk) {
        cn = dk * 1000;
      };
      this.getSessionCookieTimeout = function () {
        return cn;
      };
      this.setReferralCookieTimeout = function (dk) {
        c7 = dk * 1000;
      };
      this.setConversionAttributionFirstReferrer = function (dk) {
        bx = dk;
      };
      this.setSecureCookie = function (dk) {
        if (dk && location.protocol !== "https:") {
          ak("Error in setSecureCookie: You cannot use `Secure` on http.");
          return;
        }
        bT = dk;
      };
      this.setCookieSameSite = function (dk) {
        dk = String(dk);
        dk = dk.charAt(0).toUpperCase() + dk.toLowerCase().slice(1);
        if (dk !== "None" && dk !== "Lax" && dk !== "Strict") {
          ak("Ignored value for sameSite. Please use either Lax, None, or Strict.");
          return;
        }
        if (dk === "None") {
          if (location.protocol === "https:") {
            this.setSecureCookie(true);
          } else {
            ak("sameSite=None cannot be used on http, reverted to sameSite=Lax.");
            dk = "Lax";
          }
        }
        aJ = dk;
      };
      this.disableCookies = function () {
        bn = true;
        if (b7) {
          aF();
        }
      };
      this.areCookiesEnabled = function () {
        return !bn;
      };
      this.setCookieConsentGiven = function () {
        if (bn && !cR) {
          bn = false;
          if (b7 && aw) {
            aN();
            var dk = cr("ping=1", null, "ping");
            bH(dk, bL);
          }
        }
      };
      this.requireCookieConsent = function () {
        if (this.getRememberedCookieConsent()) {
          return false;
        }
        this.disableCookies();
        return true;
      };
      this.getRememberedCookieConsent = function () {
        return aD(cE);
      };
      this.forgetCookieConsentGiven = function () {
        bZ(cE, br, cZ);
        this.disableCookies();
      };
      this.rememberCookieConsentGiven = function (dl) {
        if (dl) {
          dl = dl * 60 * 60 * 1000;
        } else {
          dl = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        this.setCookieConsentGiven();
        var dk = new Date().getTime();
        df(cE, dk, dl, br, cZ, bT, aJ);
      };
      this.deleteCookies = function () {
        aF();
      };
      this.setDoNotTrack = function (dl) {
        var dk = g.doNotTrack || g.msDoNotTrack;
        cR = dl && (dk === "yes" || dk === "1");
        if (cR) {
          this.disableCookies();
        }
      };
      this.alwaysUseSendBeacon = function () {
        cY = true;
      };
      this.disableAlwaysUseSendBeacon = function () {
        cY = false;
      };
      this.addListener = function (dl, dk) {
        aq(dl, dk, false);
      };
      this.enableLinkTracking = function (dl) {
        if (da) {
          return;
        }
        da = true;
        var dk = this;
        p(function () {
          ap = true;
          var dm = G.body;
          aq(dm, dl, true);
        });
      };
      this.enableJSErrorTracking = function () {
        if (cT) {
          return;
        }
        cT = true;
        var dk = S.onerror;
        S.onerror = function (dq, dn, dm, dp, dl) {
          ch(function () {
            var dr = "JavaScript Errors";
            var ds = dn + ":" + dm;
            if (dp) {
              ds += ":" + dp;
            }
            if (M(cs, dr + ds + dq) === -1) {
              cs.push(dr + ds + dq);
              at(dr, ds, dq);
            }
          });
          if (dk) {
            return dk(dq, dn, dm, dp, dl);
          }
          return false;
        };
      };
      this.disablePerformanceTracking = function () {
        a3 = false;
      };
      this.enableHeartBeatTimer = function (dk) {
        dk = Math.max(dk || 15, 5);
        a6 = dk * 1000;
        if (c0 !== null) {
          dh();
        }
      };
      this.disableHeartBeatTimer = function () {
        if (a6 || aO) {
          if (S.removeEventListener) {
            S.removeEventListener("focus", bb);
            S.removeEventListener("blur", az);
          } else {
            if (S.detachEvent) {
              S.detachEvent("onfocus", bb);
              S.detachEvent("onblur", az);
            }
          }
        }
        a6 = null;
        aO = false;
      };
      this.killFrame = function () {
        if (S.location !== S.top.location) {
          S.top.location = S.location;
        }
      };
      this.redirectFile = function (dk) {
        if (S.location.protocol === "file:") {
          S.location = dk;
        }
      };
      this.setCountPreRendered = function (dk) {
        bf = dk;
      };
      this.trackGoal = function (dk, dn, dm, dl) {
        ch(function () {
          cU(dk, dn, dm, dl);
        });
      };
      this.trackLink = function (dl, dk, dn, dm) {
        ch(function () {
          c3(dl, dk, dn, dm);
        });
      };
      this.getNumTrackedPageViews = function () {
        return cq;
      };
      this.trackPageView = function (dk, dm, dl) {
        cb = [];
        cM = [];
        cs = [];
        if (N(b7)) {
          ch(function () {
            Z(aE, bJ, b7);
          });
        } else {
          ch(function () {
            cq++;
            b1(dk, dm, dl);
          });
        }
      };
      this.trackAllContentImpressions = function () {
        if (N(b7)) {
          return;
        }
        ch(function () {
          p(function () {
            var dk = v.findContentNodes();
            var dl = cA(dk);
            bF.pushMultiple(dl);
          });
        });
      };
      this.trackVisibleContentImpressions = function (dk, dl) {
        if (N(b7)) {
          return;
        }
        if (!J(dk)) {
          dk = true;
        }
        if (!J(dl)) {
          dl = 750;
        }
        aT(dk, dl, this);
        ch(function () {
          m(function () {
            var dm = v.findContentNodes();
            var dn = ba(dm);
            bF.pushMultiple(dn);
          });
        });
      };
      this.trackContentImpression = function (dm, dk, dl) {
        if (N(b7)) {
          return;
        }
        dm = a(dm);
        dk = a(dk);
        dl = a(dl);
        if (!dm) {
          return;
        }
        dk = dk || "Unknown";
        ch(function () {
          var dn = aG(dm, dk, dl);
          bF.push(dn);
        });
      };
      this.trackContentImpressionsWithinNode = function (dk) {
        if (N(b7) || !dk) {
          return;
        }
        ch(function () {
          if (cf) {
            m(function () {
              var dl = v.findContentNodesWithinNode(dk);
              var dm = ba(dl);
              bF.pushMultiple(dm);
            });
          } else {
            p(function () {
              var dl = v.findContentNodesWithinNode(dk);
              var dm = cA(dl);
              bF.pushMultiple(dm);
            });
          }
        });
      };
      this.trackContentInteraction = function (dm, dn, dk, dl) {
        if (N(b7)) {
          return;
        }
        dm = a(dm);
        dn = a(dn);
        dk = a(dk);
        dl = a(dl);
        if (!dm || !dn) {
          return;
        }
        dk = dk || "Unknown";
        ch(function () {
          var dp = aQ(dm, dn, dk, dl);
          if (dp) {
            bF.push(dp);
          }
        });
      };
      this.trackContentInteractionNode = function (dm, dl) {
        if (N(b7) || !dm) {
          return;
        }
        var dk = null;
        ch(function () {
          dk = dc(dm, dl);
          if (dk) {
            bF.push(dk);
          }
        });
        return dk;
      };
      this.logAllContentBlocksOnPage = function () {
        var dm = v.findContentNodes();
        var dk = v.collectContent(dm);
        var dl = typeof console;
        if (dl !== "undefined" && console && console.log) {
          console.log(dk);
        }
      };
      this.trackEvent = function (dl, dn, dk, dm, dq, dp) {
        ch(function () {
          at(dl, dn, dk, dm, dq, dp);
        });
      };
      this.trackSiteSearch = function (dk, dm, dl, dn) {
        cb = [];
        ch(function () {
          b9(dk, dm, dl, dn);
        });
      };
      this.setEcommerceView = function (dp, dk, dm, dl) {
        ct = {};
        if (Y(dm)) {
          dm = String(dm);
        }
        if (!J(dm) || dm === null || dm === false || !dm.length) {
          dm = "";
        } else {
          if (dm instanceof Array) {
            dm = S.JSON.stringify(dm);
          }
        }
        var dn = "_pkc";
        ct[dn] = dm;
        if (J(dl) && dl !== null && dl !== false && String(dl).length) {
          dn = "_pkp";
          ct[dn] = dl;
        }
        if (!Y(dp) && !Y(dk)) {
          return;
        }
        if (Y(dp)) {
          dn = "_pks";
          ct[dn] = dp;
        }
        if (!Y(dk)) {
          dk = "";
        }
        dn = "_pkn";
        ct[dn] = dk;
      };
      this.getEcommerceItems = function () {
        return JSON.parse(JSON.stringify(c2));
      };
      this.addEcommerceItem = function (dp, dk, dm, dl, dn) {
        if (Y(dp)) {
          c2[dp] = [String(dp), dk, dm, dl, dn];
        }
      };
      this.removeEcommerceItem = function (dk) {
        if (Y(dk)) {
          dk = String(dk);
          delete c2[dk];
        }
      };
      this.clearEcommerceCart = function () {
        c2 = {};
      };
      this.trackEcommerceOrder = function (dk, dp, dn, dm, dl, dq) {
        b0(dk, dp, dn, dm, dl, dq);
      };
      this.trackEcommerceCartUpdate = function (dk) {
        bu(dk);
      };
      this.trackRequest = function (dl, dn, dm, dk) {
        ch(function () {
          var dp = cr(dl, dn, dk);
          bH(dp, bL, dm);
        });
      };
      this.ping = function () {
        this.trackRequest("ping=1", null, null, "ping");
      };
      this.disableQueueRequest = function () {
        bF.enabled = false;
      };
      this.setRequestQueueInterval = function (dk) {
        if (dk < 1000) {
          throw new Error("Request queue interval needs to be at least 1000ms");
        }
        bF.interval = dk;
      };
      this.queueRequest = function (dk) {
        ch(function () {
          var dl = cr(dk);
          bF.push(dl);
        });
      };
      this.isConsentRequired = function () {
        return cB;
      };
      this.getRememberedConsent = function () {
        var dk = aD(be);
        if (aD(cN)) {
          if (dk) {
            bZ(be, br, cZ);
          }
          return null;
        }
        if (!dk || dk === 0) {
          return null;
        }
        return dk;
      };
      this.hasRememberedConsent = function () {
        return !!this.getRememberedConsent();
      };
      this.requireConsent = function () {
        cB = true;
        bE = this.hasRememberedConsent();
        if (!bE) {
          bn = true;
        }
        x++;
        b["CoreConsent" + x] = {
          unload: function () {
            if (!bE) {
              aF();
            }
          },
        };
      };
      this.setConsentGiven = function (dl) {
        bE = true;
        bZ(cN, br, cZ);
        var dm, dk;
        for (dm = 0; dm < cM.length; dm++) {
          dk = typeof cM[dm];
          if (dk === "string") {
            bH(cM[dm], bL);
          } else {
            if (dk === "object") {
              dg(cM[dm], bL);
            }
          }
        }
        cM = [];
        if (!J(dl) || dl) {
          this.setCookieConsentGiven();
        }
      };
      this.rememberConsentGiven = function (dm) {
        if (dm) {
          dm = dm * 60 * 60 * 1000;
        } else {
          dm = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        var dk = true;
        this.setConsentGiven(dk);
        var dl = new Date().getTime();
        df(be, dl, dm, br, cZ, bT, aJ);
      };
      this.forgetConsentGiven = function () {
        var dk = 30 * 365 * 24 * 60 * 60 * 1000;
        bZ(be, br, cZ);
        df(cN, new Date().getTime(), dk, br, cZ, bT, aJ);
        this.forgetCookieConsentGiven();
        this.requireConsent();
      };
      this.isUserOptedOut = function () {
        return !bE;
      };
      this.optUserOut = this.forgetConsentGiven;
      this.forgetUserOptOut = function () {
        this.setConsentGiven(false);
      };
      m(function () {
        setTimeout(function () {
          bG = true;
        }, 0);
      });
      t.trigger("TrackerSetup", [this]);
    }
    function H() {
      return { push: af };
    }
    function c(au, at) {
      var av = {};
      var aq, ar;
      for (aq = 0; aq < at.length; aq++) {
        var ao = at[aq];
        av[ao] = 1;
        for (ar = 0; ar < au.length; ar++) {
          if (au[ar] && au[ar][0]) {
            var ap = au[ar][0];
            if (ao === ap) {
              af(au[ar]);
              delete au[ar];
              if (av[ap] > 1 && ap !== "addTracker" && ap !== "enableLinkTracking") {
                ak(
                  "The method " +
                    ap +
                    ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers'
                );
              }
              av[ap]++;
            }
          }
        }
      }
      return au;
    }
    var C = [
      "addTracker",
      "forgetCookieConsentGiven",
      "requireCookieConsent",
      "disableCookies",
      "setTrackerUrl",
      "setAPIUrl",
      "enableCrossDomainLinking",
      "setCrossDomainLinkingTimeout",
      "setSessionCookieTimeout",
      "setVisitorCookieTimeout",
      "setCookieNamePrefix",
      "setCookieSameSite",
      "setSecureCookie",
      "setCookiePath",
      "setCookieDomain",
      "setDomains",
      "setUserId",
      "setVisitorId",
      "setSiteId",
      "alwaysUseSendBeacon",
      "enableLinkTracking",
      "setCookieConsentGiven",
      "requireConsent",
      "setConsentGiven",
      "disablePerformanceTracking",
    ];
    function ad(aq, ap) {
      var ao = new P(aq, ap);
      I.push(ao);
      _paq = c(_paq, C);
      for (E = 0; E < _paq.length; E++) {
        if (_paq[E]) {
          af(_paq[E]);
        }
      }
      _paq = new H();
      t.trigger("TrackerAdded", [ao]);
      return ao;
    }
    an(S, "beforeunload", ai, false);
    an(
      S,
      "online",
      function () {
        if (J(g.serviceWorker)) {
          g.serviceWorker.ready.then(
            function (ao) {
              if (ao && ao.sync) {
                return ao.sync.register("matomoSync");
              }
            },
            function () {}
          );
        }
      },
      false
    );
    an(
      S,
      "message",
      function (au) {
        if (!au || !au.origin) {
          return;
        }
        var aw, ar, ap;
        var ax = d(au.origin);
        var at = t.getAsyncTrackers();
        for (ar = 0; ar < at.length; ar++) {
          ap = d(at[ar].getMatomoUrl());
          if (ap === ax) {
            aw = at[ar];
            break;
          }
        }
        if (!aw) {
          return;
        }
        var aq = null;
        try {
          aq = JSON.parse(au.data);
        } catch (av) {
          return;
        }
        if (!aq) {
          return;
        }
        function ao(aA) {
          var aC = G.getElementsByTagName("iframe");
          for (ar = 0; ar < aC.length; ar++) {
            var aB = aC[ar];
            var ay = d(aB.src);
            if (aB.contentWindow && J(aB.contentWindow.postMessage) && ay === ax) {
              var az = JSON.stringify(aA);
              aB.contentWindow.postMessage(az, "*");
            }
          }
        }
        if (J(aq.maq_initial_value)) {
          ao({
            maq_opted_in: aq.maq_initial_value && aw.hasConsent(),
            maq_url: aw.getMatomoUrl(),
            maq_optout_by_default: aw.isConsentRequired(),
          });
        } else {
          if (J(aq.maq_opted_in)) {
            at = t.getAsyncTrackers();
            for (ar = 0; ar < at.length; ar++) {
              aw = at[ar];
              if (aq.maq_opted_in) {
                aw.rememberConsentGiven();
              } else {
                aw.forgetConsentGiven();
              }
            }
            ao({
              maq_confirm_opted_in: aw.hasConsent(),
              maq_url: aw.getMatomoUrl(),
              maq_optout_by_default: aw.isConsentRequired(),
            });
          }
        }
      },
      false
    );
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    t = {
      initialized: false,
      JSON: S.JSON,
      DOM: {
        addEventListener: function (ar, aq, ap, ao) {
          var at = typeof ao;
          if (at === "undefined") {
            ao = false;
          }
          an(ar, aq, ap, ao);
        },
        onLoad: m,
        onReady: p,
        isNodeVisible: i,
        isOrWasNodeVisible: v.isNodeVisible,
      },
      on: function (ap, ao) {
        if (!y[ap]) {
          y[ap] = [];
        }
        y[ap].push(ao);
      },
      off: function (aq, ap) {
        if (!y[aq]) {
          return;
        }
        var ao = 0;
        for (ao; ao < y[aq].length; ao++) {
          if (y[aq][ao] === ap) {
            y[aq].splice(ao, 1);
          }
        }
      },
      trigger: function (aq, ar, ap) {
        if (!y[aq]) {
          return;
        }
        var ao = 0;
        for (ao; ao < y[aq].length; ao++) {
          y[aq][ao].apply(ap || S, ar);
        }
      },
      addPlugin: function (ao, ap) {
        b[ao] = ap;
      },
      getTracker: function (ap, ao) {
        if (!J(ao)) {
          ao = this.getAsyncTracker().getSiteId();
        }
        if (!J(ap)) {
          ap = this.getAsyncTracker().getTrackerUrl();
        }
        return new P(ap, ao);
      },
      getAsyncTrackers: function () {
        return I;
      },
      addTracker: function (aq, ap) {
        var ao;
        if (!I.length) {
          ao = ad(aq, ap);
        } else {
          ao = I[0].addTracker(aq, ap);
        }
        return ao;
      },
      getAsyncTracker: function (at, ar) {
        var aq;
        if (I && I.length && I[0]) {
          aq = I[0];
        } else {
          return ad(at, ar);
        }
        if (!ar && !at) {
          return aq;
        }
        if ((!J(ar) || null === ar) && aq) {
          ar = aq.getSiteId();
        }
        if ((!J(at) || null === at) && aq) {
          at = aq.getTrackerUrl();
        }
        var ap,
          ao = 0;
        for (ao; ao < I.length; ao++) {
          ap = I[ao];
          if (ap && String(ap.getSiteId()) === String(ar) && ap.getTrackerUrl() === at) {
            return ap;
          }
        }
      },
      retryMissedPluginCalls: function () {
        var ap = ah;
        ah = [];
        var ao = 0;
        for (ao; ao < ap.length; ao++) {
          af(ap[ao]);
        }
      },
    };
    if (typeof define === "function" && define.amd) {
      define("piwik", [], function () {
        return t;
      });
      define("matomo", [], function () {
        return t;
      });
    }
    return t;
  })();
}
/*!!! pluginTrackerHook */
(function () {
  function b() {
    if ("object" !== typeof _paq) {
      return false;
    }
    var c = typeof _paq.length;
    if ("undefined" === c) {
      return false;
    }
    return !!_paq.length;
  }
  if (window && "object" === typeof window.matomoPluginAsyncInit && window.matomoPluginAsyncInit.length) {
    var a = 0;
    for (a; a < window.matomoPluginAsyncInit.length; a++) {
      if (typeof window.matomoPluginAsyncInit[a] === "function") {
        window.matomoPluginAsyncInit[a]();
      }
    }
  }
  if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit();
  }
  if (window && window.matomoAsyncInit) {
    window.matomoAsyncInit();
  }
  if (!window.Matomo.getAsyncTrackers().length) {
    if (b()) {
      window.Matomo.addTracker();
    } else {
      _paq = {
        push: function (c) {
          var d = typeof console;
          if (d !== "undefined" && console && console.error) {
            console.error(
              "_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.",
              c
            );
          }
        },
      };
    }
  }
  window.Matomo.trigger("MatomoInitialized", []);
  window.Matomo.initialized = true;
})();
(function () {
  var a = typeof window.AnalyticsTracker;
  if (a === "undefined") {
    window.AnalyticsTracker = window.Matomo;
  }
})();
if (typeof window.piwik_log !== "function") {
  window.piwik_log = function (c, e, g, f) {
    function b(h) {
      try {
        if (window["piwik_" + h]) {
          return window["piwik_" + h];
        }
      } catch (i) {}
      return;
    }
    var d,
      a = window.Matomo.getTracker(g, e);
    a.setDocumentTitle(c);
    a.setCustomData(f);
    d = b("tracker_pause");
    if (d) {
      a.setLinkTrackingTimer(d);
    }
    d = b("download_extensions");
    if (d) {
      a.setDownloadExtensions(d);
    }
    d = b("hosts_alias");
    if (d) {
      a.setDomains(d);
    }
    d = b("ignore_classes");
    if (d) {
      a.setIgnoreClasses(d);
    }
    a.trackPageView();
    if (b("install_tracker")) {
      piwik_track = function (i, j, k, h) {
        a.setSiteId(j);
        a.setTrackerUrl(k);
        a.trackLink(i, h);
      };
      a.enableLinkTracking();
    }
  };
}
/*!! @license-end */