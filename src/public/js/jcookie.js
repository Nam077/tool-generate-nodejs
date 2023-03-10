!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = e || self).cookie = t());
})(this, function () {
    'use strict';
    var e = function () {
            return e.get.apply(e, arguments);
        },
        t = (e.utils = {
            isArray:
                Array.isArray ||
                function (e) {
                    return '[object Array]' === Object.prototype.toString.call(e);
                },
            isPlainObject: function (e) {
                return !!e && '[object Object]' === Object.prototype.toString.call(e);
            },
            toArray: function (e) {
                return Array.prototype.slice.call(e);
            },
            getKeys:
                Object.keys ||
                function (e) {
                    var t = [],
                        r = '';
                    for (r in e) e.hasOwnProperty(r) && t.push(r);
                    return t;
                },
            encode: function (e) {
                return String(e).replace(/[,;"\\=\s%]/g, function (e) {
                    return encodeURIComponent(e);
                });
            },
            decode: function (e) {
                return decodeURIComponent(e);
            },
            retrieve: function (e, t) {
                return null == e ? t : e;
            },
        });
    return (
        (e.defaults = {}),
        (e.expiresMultiplier = 86400),
        (e.set = function (e, r, i) {
            if (t.isPlainObject(e)) for (var n in e) e.hasOwnProperty(n) && this.set(n, e[n], r);
            else {
                var o =
                        void 0 !== (i = t.isPlainObject(i) ? i : { expires: i }).expires
                            ? i.expires
                            : this.defaults.expires || '',
                    s = typeof o;
                'string' === s && '' !== o
                    ? (o = new Date(o))
                    : 'number' === s && (o = new Date(+new Date() + 1e3 * this.expiresMultiplier * o)),
                    '' !== o && 'toUTCString' in o && (o = ';expires=' + o.toUTCString());
                var u = i.path || this.defaults.path;
                u = u ? ';path=' + u : '';
                var a = i.domain || this.defaults.domain;
                a = a ? ';domain=' + a : '';
                var c = i.secure || this.defaults.secure ? ';secure' : '';
                !1 === i.secure && (c = '');
                var f = i.sameSite || this.defaults.sameSite;
                (f = f ? ';SameSite=' + f : ''),
                    null === i.sameSite && (f = ''),
                    (document.cookie = t.encode(e) + '=' + t.encode(r) + o + u + a + c + f);
            }
            return this;
        }),
        (e.setDefault = function (r, i, n) {
            if (t.isPlainObject(r)) {
                for (var o in r) void 0 === this.get(o) && this.set(o, r[o], i);
                return e;
            }
            if (void 0 === this.get(r)) return this.set.apply(this, arguments);
        }),
        (e.remove = function (e) {
            for (var r = 0, i = (e = t.isArray(e) ? e : t.toArray(arguments)).length; r < i; r++)
                this.set(e[r], '', -1);
            return this;
        }),
        (e.removeSpecific = function (e, r) {
            if (!r) return this.remove(e);
            (e = t.isArray(e) ? e : [e]), (r.expires = -1);
            for (var i = 0, n = e.length; i < n; i++) this.set(e[i], '', r);
            return this;
        }),
        (e.empty = function () {
            return this.remove(t.getKeys(this.all()));
        }),
        (e.get = function (e, r) {
            var i = this.all();
            if (t.isArray(e)) {
                for (var n = {}, o = 0, s = e.length; o < s; o++) {
                    var u = e[o];
                    n[u] = t.retrieve(i[u], r);
                }
                return n;
            }
            return t.retrieve(i[e], r);
        }),
        (e.all = function () {
            if ('' === document.cookie) return {};
            for (var e = document.cookie.split('; '), r = {}, i = 0, n = e.length; i < n; i++) {
                var o = e[i].split('='),
                    s = t.decode(o.shift()),
                    u = t.decode(o.join('='));
                r[s] = u;
            }
            return r;
        }),
        (e.enabled = function () {
            if (navigator.cookieEnabled) return !0;
            var t = '_' === e.set('_', '_').get('_');
            return e.remove('_'), t;
        }),
        e
    );
});
