module.exports = (function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t]
            }.bind(null, o)
          )
      return r
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 10))
  )
})([
  function(e, t, n) {
    'use strict'
    e.exports = n(2)
  },
  function(e, t, n) {
    e.exports = n(7)()
  },
  function(e, t, n) {
    'use strict'
    /** @license React v16.8.6
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(3),
      o = 'function' == typeof Symbol && Symbol.for,
      c = o ? Symbol.for('react.element') : 60103,
      i = o ? Symbol.for('react.portal') : 60106,
      a = o ? Symbol.for('react.fragment') : 60107,
      u = o ? Symbol.for('react.strict_mode') : 60108,
      l = o ? Symbol.for('react.profiler') : 60114,
      f = o ? Symbol.for('react.provider') : 60109,
      s = o ? Symbol.for('react.context') : 60110,
      p = o ? Symbol.for('react.concurrent_mode') : 60111,
      y = o ? Symbol.for('react.forward_ref') : 60112,
      m = o ? Symbol.for('react.suspense') : 60113,
      b = o ? Symbol.for('react.memo') : 60115,
      d = o ? Symbol.for('react.lazy') : 60116,
      v = 'function' == typeof Symbol && Symbol.iterator
    function h(e) {
      for (
        var t = arguments.length - 1,
          n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          r = 0;
        r < t;
        r++
      )
        n += '&args[]=' + encodeURIComponent(arguments[r + 1])
      !(function(e, t, n, r, o, c, i, a) {
        if (!e) {
          if (((e = void 0), void 0 === t))
            e = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var u = [n, r, o, c, i, a],
              l = 0
            ;(e = Error(
              t.replace(/%s/g, function() {
                return u[l++]
              })
            )).name = 'Invariant Violation'
          }
          throw ((e.framesToPop = 1), e)
        }
      })(
        !1,
        'Minified React error #' +
          e +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        n
      )
    }
    var g = {
        isMounted: function() {
          return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {},
      },
      w = {}
    function O(e, t, n) {
      ;(this.props = e),
        (this.context = t),
        (this.refs = w),
        (this.updater = n || g)
    }
    function S() {}
    function _(e, t, n) {
      ;(this.props = e),
        (this.context = t),
        (this.refs = w),
        (this.updater = n || g)
    }
    ;(O.prototype.isReactComponent = {}),
      (O.prototype.setState = function(e, t) {
        'object' != typeof e && 'function' != typeof e && null != e && h('85'),
          this.updater.enqueueSetState(this, e, t, 'setState')
      }),
      (O.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
      }),
      (S.prototype = O.prototype)
    var j = (_.prototype = new S())
    ;(j.constructor = _), r(j, O.prototype), (j.isPureReactComponent = !0)
    var E = { current: null },
      P = { current: null },
      k = Object.prototype.hasOwnProperty,
      x = { key: !0, ref: !0, __self: !0, __source: !0 }
    function C(e, t, n) {
      var r = void 0,
        o = {},
        i = null,
        a = null
      if (null != t)
        for (r in (void 0 !== t.ref && (a = t.ref),
        void 0 !== t.key && (i = '' + t.key),
        t))
          k.call(t, r) && !x.hasOwnProperty(r) && (o[r] = t[r])
      var u = arguments.length - 2
      if (1 === u) o.children = n
      else if (1 < u) {
        for (var l = Array(u), f = 0; f < u; f++) l[f] = arguments[f + 2]
        o.children = l
      }
      if (e && e.defaultProps)
        for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r])
      return {
        $$typeof: c,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: P.current,
      }
    }
    function T(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === c
    }
    var L = /\/+/g,
      R = []
    function $(e, t, n, r) {
      if (R.length) {
        var o = R.pop()
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = n),
          (o.context = r),
          (o.count = 0),
          o
        )
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 }
    }
    function A(e) {
      ;(e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > R.length && R.push(e)
    }
    function I(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, o) {
            var a = typeof t
            ;('undefined' !== a && 'boolean' !== a) || (t = null)
            var u = !1
            if (null === t) u = !0
            else
              switch (a) {
                case 'string':
                case 'number':
                  u = !0
                  break
                case 'object':
                  switch (t.$$typeof) {
                    case c:
                    case i:
                      u = !0
                  }
              }
            if (u) return r(o, t, '' === n ? '.' + M(t, 0) : n), 1
            if (((u = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(t)))
              for (var l = 0; l < t.length; l++) {
                var f = n + M((a = t[l]), l)
                u += e(a, f, r, o)
              }
            else if (
              ((f =
                null === t || 'object' != typeof t
                  ? null
                  : 'function' == typeof (f = (v && t[v]) || t['@@iterator'])
                  ? f
                  : null),
              'function' == typeof f)
            )
              for (t = f.call(t), l = 0; !(a = t.next()).done; )
                u += e((a = a.value), (f = n + M(a, l++)), r, o)
            else
              'object' === a &&
                h(
                  '31',
                  '[object Object]' == (r = '' + t)
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : r,
                  ''
                )
            return u
          })(e, '', t, n)
    }
    function M(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { '=': '=0', ':': '=2' }
            return (
              '$' +
              ('' + e).replace(/[=:]/g, function(e) {
                return t[e]
              })
            )
          })(e.key)
        : t.toString(36)
    }
    function N(e, t) {
      e.func.call(e.context, t, e.count++)
    }
    function D(e, t, n) {
      var r = e.result,
        o = e.keyPrefix
      ;(e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? U(e, r, n, function(e) {
              return e
            })
          : null != e &&
            (T(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: c,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                }
              })(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ''
                    : ('' + e.key).replace(L, '$&/') + '/') +
                  n
              )),
            r.push(e))
    }
    function U(e, t, n, r, o) {
      var c = ''
      null != n && (c = ('' + n).replace(L, '$&/') + '/'),
        I(e, D, (t = $(t, c, r, o))),
        A(t)
    }
    function V() {
      var e = E.current
      return null === e && h('321'), e
    }
    var q = {
        Children: {
          map: function(e, t, n) {
            if (null == e) return e
            var r = []
            return U(e, r, null, t, n), r
          },
          forEach: function(e, t, n) {
            if (null == e) return e
            I(e, N, (t = $(null, null, t, n))), A(t)
          },
          count: function(e) {
            return I(
              e,
              function() {
                return null
              },
              null
            )
          },
          toArray: function(e) {
            var t = []
            return (
              U(e, t, null, function(e) {
                return e
              }),
              t
            )
          },
          only: function(e) {
            return T(e) || h('143'), e
          },
        },
        createRef: function() {
          return { current: null }
        },
        Component: O,
        PureComponent: _,
        createContext: function(e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: s,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: f, _context: e }),
            (e.Consumer = e)
          )
        },
        forwardRef: function(e) {
          return { $$typeof: y, render: e }
        },
        lazy: function(e) {
          return { $$typeof: d, _ctor: e, _status: -1, _result: null }
        },
        memo: function(e, t) {
          return { $$typeof: b, type: e, compare: void 0 === t ? null : t }
        },
        useCallback: function(e, t) {
          return V().useCallback(e, t)
        },
        useContext: function(e, t) {
          return V().useContext(e, t)
        },
        useEffect: function(e, t) {
          return V().useEffect(e, t)
        },
        useImperativeHandle: function(e, t, n) {
          return V().useImperativeHandle(e, t, n)
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return V().useLayoutEffect(e, t)
        },
        useMemo: function(e, t) {
          return V().useMemo(e, t)
        },
        useReducer: function(e, t, n) {
          return V().useReducer(e, t, n)
        },
        useRef: function(e) {
          return V().useRef(e)
        },
        useState: function(e) {
          return V().useState(e)
        },
        Fragment: a,
        StrictMode: u,
        Suspense: m,
        createElement: C,
        cloneElement: function(e, t, n) {
          null == e && h('267', e)
          var o = void 0,
            i = r({}, e.props),
            a = e.key,
            u = e.ref,
            l = e._owner
          if (null != t) {
            void 0 !== t.ref && ((u = t.ref), (l = P.current)),
              void 0 !== t.key && (a = '' + t.key)
            var f = void 0
            for (o in (e.type &&
              e.type.defaultProps &&
              (f = e.type.defaultProps),
            t))
              k.call(t, o) &&
                !x.hasOwnProperty(o) &&
                (i[o] = void 0 === t[o] && void 0 !== f ? f[o] : t[o])
          }
          if (1 === (o = arguments.length - 2)) i.children = n
          else if (1 < o) {
            f = Array(o)
            for (var s = 0; s < o; s++) f[s] = arguments[s + 2]
            i.children = f
          }
          return {
            $$typeof: c,
            type: e.type,
            key: a,
            ref: u,
            props: i,
            _owner: l,
          }
        },
        createFactory: function(e) {
          var t = C.bind(null, e)
          return (t.type = e), t
        },
        isValidElement: T,
        version: '16.8.6',
        unstable_ConcurrentMode: p,
        unstable_Profiler: l,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: E,
          ReactCurrentOwner: P,
          assign: r,
        },
      },
      z = { default: q },
      F = (z && q) || z
    e.exports = F.default || F
  },
  function(e, t, n) {
    'use strict'
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable
    e.exports = (function() {
      try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
        for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e]
            })
            .join('')
        )
          return !1
        var r = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(e) {
            r[e] = e
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        )
      } catch (e) {
        return !1
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (
            var n,
              i,
              a = (function(e) {
                if (null == e)
                  throw new TypeError(
                    'Object.assign cannot be called with null or undefined'
                  )
                return Object(e)
              })(e),
              u = 1;
            u < arguments.length;
            u++
          ) {
            for (var l in (n = Object(arguments[u])))
              o.call(n, l) && (a[l] = n[l])
            if (r) {
              i = r(n)
              for (var f = 0; f < i.length; f++)
                c.call(n, i[f]) && (a[i[f]] = n[i[f]])
            }
          }
          return a
        }
  },
  function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>'
  },
  function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>'
  },
  function(e, t) {
    e.exports =
      '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>'
  },
  function(e, t, n) {
    'use strict'
    var r = n(8)
    function o() {}
    function c() {}
    ;(c.resetWarningCache = o),
      (e.exports = function() {
        function e(e, t, n, o, c, i) {
          if (i !== r) {
            var a = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((a.name = 'Invariant Violation'), a)
          }
        }
        function t() {
          return e
        }
        e.isRequired = e
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: c,
          resetWarningCache: o,
        }
        return (n.PropTypes = n), n
      })
  },
  function(e, t, n) {
    'use strict'
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  },
  function(e, t, n) {},
  function(e, t, n) {
    'use strict'
    n.r(t)
    var r = n(0),
      o = n.n(r)
    function c(e) {
      return (c =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function i(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t]
            return n
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            '[object Arguments]' === Object.prototype.toString.call(e)
          )
            return Array.from(e)
        })(e) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance')
        })()
      )
    }
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function u(e) {
      return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
    }
    function l(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e
        })(e, t)
    }
    var s = o.a.createContext(),
      p = (function(e) {
        function t() {
          var e, n, r, o, i, a, f
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var s = arguments.length, p = new Array(s), y = 0; y < s; y++)
            p[y] = arguments[y]
          return (
            (r = this),
            (n =
              !(o = (e = u(t)).call.apply(e, [this].concat(p))) ||
              ('object' !== c(o) && 'function' != typeof o)
                ? l(r)
                : o),
            (i = l(n)),
            (f = { selectList: [], selectedList: [] }),
            (a = 'state') in i
              ? Object.defineProperty(i, a, {
                  value: f,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (i[a] = f),
            n
          )
        }
        var n, r, p
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t)
          })(t, o.a.Component),
          (n = t),
          (r = [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.state,
                  n = t.selectList,
                  r = t.selectedList
                return o.a.createElement(
                  s.Provider,
                  {
                    value: {
                      selectList: n,
                      selectedList: r,
                      initialPopulate: function(t) {
                        e.setState({ selectList: t })
                      },
                      addSelected: function(t) {
                        var o = n.filter(function(e) {
                          return e.key !== t.key
                        })
                        e.setState({
                          selectList: o,
                          selectedList: [].concat(i(r), [t]),
                        })
                      },
                      removeSelected: function(t) {
                        var o = r.filter(function(e) {
                          return e.key !== t.key
                        })
                        e.setState({
                          selectList: [].concat(i(n), [t]),
                          selectedList: o,
                        })
                      },
                    },
                  },
                  this.props.children
                )
              },
            },
          ]) && a(n.prototype, r),
          p && a(n, p),
          t
        )
      })()
    function y(e) {
      return (y =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function m(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n)
        'function' == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            })
          )),
          r.forEach(function(t) {
            g(e, t, n[t])
          })
      }
      return e
    }
    function b(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function d(e) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
    }
    function v(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function h(e, t) {
      return (h =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e
        })(e, t)
    }
    function g(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      )
    }
    var w = (function(e) {
      function t() {
        var e, n, r, o
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var c = arguments.length, i = new Array(c), a = 0; a < c; a++)
          i[a] = arguments[a]
        return (
          (r = this),
          (n =
            !(o = (e = d(t)).call.apply(e, [this].concat(i))) ||
            ('object' !== y(o) && 'function' != typeof o)
              ? v(r)
              : o),
          g(v(n), 'state', { isOpen: !1 }),
          n
        )
      }
      var r, c, i
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && h(e, t)
        })(t, o.a.Component),
        (r = t),
        (c = [
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                r = t.title,
                c = t.children,
                i = this.state.isOpen,
                a = i ? { transform: 'rotate(90deg)' } : {}
              return o.a.createElement(
                'div',
                { className: 'react-awesome-selector-category' },
                o.a.createElement(
                  'div',
                  null,
                  o.a.createElement(
                    'span',
                    {
                      onClick: function() {
                        e.setState({ isOpen: !i })
                      },
                    },
                    o.a.createElement('img', {
                      src: n(4),
                      alt: 'none',
                      style: m(
                        {
                          marginRight: '5%',
                          marginLeft: '5%',
                          width: '0.5rem',
                          height: 'auto',
                        },
                        a
                      ),
                    })
                  ),
                  o.a.createElement(
                    'span',
                    { className: 'react-awesome-selector-category-title' },
                    r
                  )
                ),
                this.state.isOpen
                  ? o.a.createElement(
                      'div',
                      { className: 'react-awesome-selector-category-children' },
                      c
                    )
                  : o.a.createElement(o.a.Fragment, null)
              )
            },
          },
        ]) && b(r.prototype, c),
        i && b(r, i),
        t
      )
    })()
    var O = function(e) {
      return o.a.createElement(
        'div',
        { className: 'react-awesome-selector-item' },
        e.children,
        e.selected
          ? o.a.createElement('img', {
              alt: 'none',
              onClick: function() {
                e.onIconClick()
              },
              src: n(5),
              style: {
                marginRight: '5%',
                marginLeft: '5%',
                width: '0.5rem',
                height: 'auto',
              },
            })
          : o.a.createElement('img', {
              alt: 'none',
              onClick: function() {
                e.onIconClick()
              },
              src: n(6),
              style: {
                marginRight: '5%',
                marginLeft: '5%',
                width: '0.5rem',
                height: 'auto',
              },
            })
      )
    }
    var S = function(e) {
      return o.a.createElement(s.Consumer, null, function(t) {
        return o.a.createElement(
          'div',
          null,
          e.categories.map(function(n) {
            return o.a.createElement(
              'div',
              { key: n.key },
              o.a.createElement(
                w,
                { title: n.name },
                e.items.map(function(e) {
                  return n.name === e.category
                    ? o.a.createElement(
                        O,
                        {
                          key: e.key,
                          onIconClick: function() {
                            t.addSelected(e)
                          },
                        },
                        e.name
                      )
                    : null
                })
              )
            )
          })
        )
      })
    }
    function _(e) {
      return (_ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function E(e) {
      return (E = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
    }
    function P(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function k(e, t) {
      return (k =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e
        })(e, t)
    }
    var x = (function(e) {
        function t() {
          var e, n, r, o, c, i, a
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var u = arguments.length, l = new Array(u), f = 0; f < u; f++)
            l[f] = arguments[f]
          return (
            (r = this),
            (n =
              !(o = (e = E(t)).call.apply(e, [this].concat(l))) ||
              ('object' !== _(o) && 'function' != typeof o)
                ? P(r)
                : o),
            (c = P(n)),
            (a = { items: [] }),
            (i = 'state') in c
              ? Object.defineProperty(c, i, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (c[i] = a),
            n
          )
        }
        var n, r, c
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && k(e, t)
          })(t, o.a.Component),
          (n = t),
          (r = [
            {
              key: 'componentDidUpdate',
              value: function(e) {
                e.items !== this.props.items &&
                  this.setState({ items: this.props.items })
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this
                return o.a.createElement(s.Consumer, null, function(t) {
                  return o.a.createElement(
                    'div',
                    { className: 'react-awesome-selector-selected-list' },
                    o.a.createElement(
                      'span',
                      {
                        className: 'react-awesome-selector-selected-list-title',
                      },
                      e.props.title
                    ),
                    e.state.items.map(function(e) {
                      return o.a.createElement(
                        O,
                        {
                          key: e.key,
                          selected: !0,
                          onIconClick: function() {
                            t.removeSelected(e)
                          },
                        },
                        e.name
                      )
                    })
                  )
                })
              },
            },
          ]) && j(n.prototype, r),
          c && j(n, c),
          t
        )
      })(),
      C = n(1),
      T = n.n(C)
    n(9)
    function L(e) {
      return (L =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function R(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function $(e) {
      return ($ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
    }
    function A(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function I(e, t) {
      return (I =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e
        })(e, t)
    }
    function M(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      )
    }
    var N = (function(e) {
      function t() {
        var e, n, r, o
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var c = arguments.length, i = new Array(c), a = 0; a < c; a++)
          i[a] = arguments[a]
        return (
          (r = this),
          (o = (e = $(t)).call.apply(e, [this].concat(i))),
          (n = !o || ('object' !== L(o) && 'function' != typeof o) ? A(r) : o),
          M(A(n), 'state', { items: [], categories: [] }),
          M(A(n), 'sanitizeData', function() {
            var e = n.props.data,
              t = [],
              r = [],
              o = 0,
              c = 0
            e.map(function(e) {
              return (
                t.includes(e.category) ||
                  (t.push(e.category),
                  r.push({ name: e.category, key: o }),
                  o++),
                (e.key = c),
                c++
              )
            }),
              n.setState({ items: e, categories: r }, function() {
                n.props.context.initialPopulate(n.state.items)
              })
          }),
          n
        )
      }
      var n, r, c
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && I(e, t)
        })(t, o.a.Component),
        (n = t),
        (r = [
          {
            key: 'componentDidMount',
            value: function() {
              this.sanitizeData()
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.state.categories
              return o.a.createElement(
                'div',
                null,
                o.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(S, {
                      items: this.props.context.selectList,
                      categories: e,
                    })
                  ),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(x, {
                      title: this.props.selectedTitle,
                      items: this.props.context.selectedList,
                    })
                  )
                )
              )
            },
          },
        ]) && R(n.prototype, r),
        c && R(n, c),
        t
      )
    })()
    function D(e) {
      return o.a.createElement(
        p,
        null,
        o.a.createElement(s.Consumer, null, function(t) {
          return o.a.createElement(
            'div',
            { className: 'react-awesome-selector-wrapper' },
            o.a.createElement(N, {
              selectedTitle: e.selectedTitle,
              context: t,
              data: e.data,
            }),
            o.a.createElement(
              'button',
              {
                className: 'react-awesome-selector-submit-button',
                onClick: function() {
                  e.getSelected(t.selectedList)
                },
              },
              'Submit'
            )
          )
        })
      )
    }
    ;(D.propTypes = {
      data: T.a.array,
      selectedTitle: T.a.string,
      getSelected: T.a.func,
    }),
      (D.defaultProps = {
        data: [],
        selectedTitle: 'Selected',
        getSelected: function(e) {
          console.log('Selected Values: ', e)
        },
      })
    t.default = D
  },
])
