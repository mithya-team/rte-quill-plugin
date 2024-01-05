import "./index.css";
import gt, { useRef as Dn, useEffect as at, useCallback as Mn } from "react";
import Cn from "react-dom";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bn(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var ft = { exports: {} }, $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function $n() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var x = gt, L = Symbol.for("react.element"), b = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), _ = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), e = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), s = Symbol.iterator, a = "@@iterator";
    function l(M) {
      if (M === null || typeof M != "object")
        return null;
      var X = s && M[s] || M[a];
      return typeof X == "function" ? X : null;
    }
    var i = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(M) {
      {
        for (var X = arguments.length, J = new Array(X > 1 ? X - 1 : 0), re = 1; re < X; re++)
          J[re - 1] = arguments[re];
        f("error", M, J);
      }
    }
    function f(M, X, J) {
      {
        var re = i.ReactDebugCurrentFrame, de = re.getStackAddendum();
        de !== "" && (X += "%s", J = J.concat([de]));
        var ve = J.map(function(he) {
          return String(he);
        });
        ve.unshift("Warning: " + X), Function.prototype.apply.call(console[M], console, ve);
      }
    }
    var n = !1, h = !1, S = !1, O = !1, E = !1, N;
    N = Symbol.for("react.module.reference");
    function m(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === u || M === T || E || M === d || M === p || M === c || O || M === t || n || h || S || typeof M == "object" && M !== null && (M.$$typeof === e || M.$$typeof === o || M.$$typeof === A || M.$$typeof === _ || M.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === N || M.getModuleId !== void 0));
    }
    function y(M, X, J) {
      var re = M.displayName;
      if (re)
        return re;
      var de = X.displayName || X.name || "";
      return de !== "" ? J + "(" + de + ")" : J;
    }
    function g(M) {
      return M.displayName || "Context";
    }
    function k(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && r("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case u:
          return "Fragment";
        case b:
          return "Portal";
        case T:
          return "Profiler";
        case d:
          return "StrictMode";
        case p:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case _:
            var X = M;
            return g(X) + ".Consumer";
          case A:
            var J = M;
            return g(J._context) + ".Provider";
          case v:
            return y(M, M.render, "ForwardRef");
          case o:
            var re = M.displayName || null;
            return re !== null ? re : k(M.type) || "Memo";
          case e: {
            var de = M, ve = de._payload, he = de._init;
            try {
              return k(he(ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, q = 0, F, U, Z, B, D, w, j;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function H() {
      {
        if (q === 0) {
          F = console.log, U = console.info, Z = console.warn, B = console.error, D = console.group, w = console.groupCollapsed, j = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        q++;
      }
    }
    function $() {
      {
        if (q--, q === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, M, {
              value: F
            }),
            info: P({}, M, {
              value: U
            }),
            warn: P({}, M, {
              value: Z
            }),
            error: P({}, M, {
              value: B
            }),
            group: P({}, M, {
              value: D
            }),
            groupCollapsed: P({}, M, {
              value: w
            }),
            groupEnd: P({}, M, {
              value: j
            })
          });
        }
        q < 0 && r("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var R = i.ReactCurrentDispatcher, C;
    function z(M, X, J) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (de) {
            var re = de.stack.trim().match(/\n( *(at )?)/);
            C = re && re[1] || "";
          }
        return `
` + C + M;
      }
    }
    var K = !1, W;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      W = new te();
    }
    function ne(M, X) {
      if (!M || K)
        return "";
      {
        var J = W.get(M);
        if (J !== void 0)
          return J;
      }
      var re;
      K = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ve;
      ve = R.current, R.current = null, H();
      try {
        if (X) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (Ne) {
              re = Ne;
            }
            Reflect.construct(M, [], he);
          } else {
            try {
              he.call();
            } catch (Ne) {
              re = Ne;
            }
            M.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            re = Ne;
          }
          M();
        }
      } catch (Ne) {
        if (Ne && re && typeof Ne.stack == "string") {
          for (var se = Ne.stack.split(`
`), Te = re.stack.split(`
`), be = se.length - 1, _e = Te.length - 1; be >= 1 && _e >= 0 && se[be] !== Te[_e]; )
            _e--;
          for (; be >= 1 && _e >= 0; be--, _e--)
            if (se[be] !== Te[_e]) {
              if (be !== 1 || _e !== 1)
                do
                  if (be--, _e--, _e < 0 || se[be] !== Te[_e]) {
                    var xe = `
` + se[be].replace(" at new ", " at ");
                    return M.displayName && xe.includes("<anonymous>") && (xe = xe.replace("<anonymous>", M.displayName)), typeof M == "function" && W.set(M, xe), xe;
                  }
                while (be >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        K = !1, R.current = ve, $(), Error.prepareStackTrace = de;
      }
      var je = M ? M.displayName || M.name : "", xt = je ? z(je) : "";
      return typeof M == "function" && W.set(M, xt), xt;
    }
    function ie(M, X, J) {
      return ne(M, !1);
    }
    function ue(M) {
      var X = M.prototype;
      return !!(X && X.isReactComponent);
    }
    function ce(M, X, J) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return ne(M, ue(M));
      if (typeof M == "string")
        return z(M);
      switch (M) {
        case p:
          return z("Suspense");
        case c:
          return z("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case v:
            return ie(M.render);
          case o:
            return ce(M.type, X, J);
          case e: {
            var re = M, de = re._payload, ve = re._init;
            try {
              return ce(ve(de), X, J);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, me = {}, G = i.ReactDebugCurrentFrame;
    function V(M) {
      if (M) {
        var X = M._owner, J = ce(M.type, M._source, X ? X.type : null);
        G.setExtraStackFrame(J);
      } else
        G.setExtraStackFrame(null);
    }
    function Q(M, X, J, re, de) {
      {
        var ve = Function.call.bind(Oe);
        for (var he in M)
          if (ve(M, he)) {
            var se = void 0;
            try {
              if (typeof M[he] != "function") {
                var Te = Error((re || "React class") + ": " + J + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Te.name = "Invariant Violation", Te;
              }
              se = M[he](X, he, re, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              se = be;
            }
            se && !(se instanceof Error) && (V(de), r("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", J, he, typeof se), V(null)), se instanceof Error && !(se.message in me) && (me[se.message] = !0, V(de), r("Failed %s type: %s", J, se.message), V(null));
          }
      }
    }
    var ee = Array.isArray;
    function Y(M) {
      return ee(M);
    }
    function oe(M) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, J = X && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return J;
      }
    }
    function ae(M) {
      try {
        return le(M), !1;
      } catch {
        return !0;
      }
    }
    function le(M) {
      return "" + M;
    }
    function Ee(M) {
      if (ae(M))
        return r("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", oe(M)), le(M);
    }
    var Ae = i.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, ge, ke;
    ke = {};
    function On(M) {
      if (Oe.call(M, "ref")) {
        var X = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function En(M) {
      if (Oe.call(M, "key")) {
        var X = Object.getOwnPropertyDescriptor(M, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function An(M, X) {
      if (typeof M.ref == "string" && Ae.current && X && Ae.current.stateNode !== X) {
        var J = k(Ae.current.type);
        ke[J] || (r('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(Ae.current.type), M.ref), ke[J] = !0);
      }
    }
    function Tn(M, X) {
      {
        var J = function() {
          ze || (ze = !0, r("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        J.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function wn(M, X) {
      {
        var J = function() {
          ge || (ge = !0, r("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        J.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var kn = function(M, X, J, re, de, ve, he) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: L,
        // Built-in properties that belong on the element
        type: M,
        key: X,
        ref: J,
        props: he,
        // Record the component responsible for creating this element.
        _owner: ve
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function xn(M, X, J, re, de) {
      {
        var ve, he = {}, se = null, Te = null;
        J !== void 0 && (Ee(J), se = "" + J), En(X) && (Ee(X.key), se = "" + X.key), On(X) && (Te = X.ref, An(X, de));
        for (ve in X)
          Oe.call(X, ve) && !pe.hasOwnProperty(ve) && (he[ve] = X[ve]);
        if (M && M.defaultProps) {
          var be = M.defaultProps;
          for (ve in be)
            he[ve] === void 0 && (he[ve] = be[ve]);
        }
        if (se || Te) {
          var _e = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          se && Tn(he, _e), Te && wn(he, _e);
        }
        return kn(M, se, Te, de, re, Ae.current, he);
      }
    }
    var rt = i.ReactCurrentOwner, Ot = i.ReactDebugCurrentFrame;
    function Le(M) {
      if (M) {
        var X = M._owner, J = ce(M.type, M._source, X ? X.type : null);
        Ot.setExtraStackFrame(J);
      } else
        Ot.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function ot(M) {
      return typeof M == "object" && M !== null && M.$$typeof === L;
    }
    function Et() {
      {
        if (rt.current) {
          var M = k(rt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Sn(M) {
      {
        if (M !== void 0) {
          var X = M.fileName.replace(/^.*[\\\/]/, ""), J = M.lineNumber;
          return `

Check your code at ` + X + ":" + J + ".";
        }
        return "";
      }
    }
    var At = {};
    function Nn(M) {
      {
        var X = Et();
        if (!X) {
          var J = typeof M == "string" ? M : M.displayName || M.name;
          J && (X = `

Check the top-level render call using <` + J + ">.");
        }
        return X;
      }
    }
    function Tt(M, X) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var J = Nn(X);
        if (At[J])
          return;
        At[J] = !0;
        var re = "";
        M && M._owner && M._owner !== rt.current && (re = " It was passed a child from " + k(M._owner.type) + "."), Le(M), r('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, re), Le(null);
      }
    }
    function wt(M, X) {
      {
        if (typeof M != "object")
          return;
        if (Y(M))
          for (var J = 0; J < M.length; J++) {
            var re = M[J];
            ot(re) && Tt(re, X);
          }
        else if (ot(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var de = l(M);
          if (typeof de == "function" && de !== M.entries)
            for (var ve = de.call(M), he; !(he = ve.next()).done; )
              ot(he.value) && Tt(he.value, X);
        }
      }
    }
    function Pn(M) {
      {
        var X = M.type;
        if (X == null || typeof X == "string")
          return;
        var J;
        if (typeof X == "function")
          J = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === o))
          J = X.propTypes;
        else
          return;
        if (J) {
          var re = k(X);
          Q(J, M.props, "prop", re, M);
        } else if (X.PropTypes !== void 0 && !it) {
          it = !0;
          var de = k(X);
          r("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && r("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rn(M) {
      {
        for (var X = Object.keys(M.props), J = 0; J < X.length; J++) {
          var re = X[J];
          if (re !== "children" && re !== "key") {
            Le(M), r("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Le(null);
            break;
          }
        }
        M.ref !== null && (Le(M), r("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    function kt(M, X, J, re, de, ve) {
      {
        var he = m(M);
        if (!he) {
          var se = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Te = Sn(de);
          Te ? se += Te : se += Et();
          var be;
          M === null ? be = "null" : Y(M) ? be = "array" : M !== void 0 && M.$$typeof === L ? (be = "<" + (k(M.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : be = typeof M, r("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, se);
        }
        var _e = xn(M, X, J, de, ve);
        if (_e == null)
          return _e;
        if (he) {
          var xe = X.children;
          if (xe !== void 0)
            if (re)
              if (Y(xe)) {
                for (var je = 0; je < xe.length; je++)
                  wt(xe[je], M);
                Object.freeze && Object.freeze(xe);
              } else
                r("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(xe, M);
        }
        return M === u ? Rn(_e) : Pn(_e), _e;
      }
    }
    function Ln(M, X, J) {
      return kt(M, X, J, !0);
    }
    function jn(M, X, J) {
      return kt(M, X, J, !1);
    }
    var qn = jn, In = Ln;
    $e.Fragment = u, $e.jsx = qn, $e.jsxs = In;
  }()), $e;
}
var Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Fn() {
  if (Nt)
    return Fe;
  Nt = 1;
  var x = gt, L = Symbol.for("react.element"), b = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(_, v, p) {
    var c, o = {}, e = null, t = null;
    p !== void 0 && (e = "" + p), v.key !== void 0 && (e = "" + v.key), v.ref !== void 0 && (t = v.ref);
    for (c in v)
      u.call(v, c) && !T.hasOwnProperty(c) && (o[c] = v[c]);
    if (_ && _.defaultProps)
      for (c in v = _.defaultProps, v)
        o[c] === void 0 && (o[c] = v[c]);
    return { $$typeof: L, type: _, key: e, ref: t, props: o, _owner: d.current };
  }
  return Fe.Fragment = b, Fe.jsx = A, Fe.jsxs = A, Fe;
}
process.env.NODE_ENV === "production" ? ft.exports = Fn() : ft.exports = $n();
var fe = ft.exports;
function Un() {
  this.__data__ = [], this.size = 0;
}
var Hn = Un;
function zn(x, L) {
  return x === L || x !== x && L !== L;
}
var on = zn, Kn = on;
function Gn(x, L) {
  for (var b = x.length; b--; )
    if (Kn(x[b][0], L))
      return b;
  return -1;
}
var Ze = Gn, Vn = Ze, Wn = Array.prototype, Yn = Wn.splice;
function Zn(x) {
  var L = this.__data__, b = Vn(L, x);
  if (b < 0)
    return !1;
  var u = L.length - 1;
  return b == u ? L.pop() : Yn.call(L, b, 1), --this.size, !0;
}
var Xn = Zn, Qn = Ze;
function Jn(x) {
  var L = this.__data__, b = Qn(L, x);
  return b < 0 ? void 0 : L[b][1];
}
var er = Jn, tr = Ze;
function nr(x) {
  return tr(this.__data__, x) > -1;
}
var rr = nr, ir = Ze;
function or(x, L) {
  var b = this.__data__, u = ir(b, x);
  return u < 0 ? (++this.size, b.push([x, L])) : b[u][1] = L, this;
}
var ar = or, lr = Hn, ur = Xn, sr = er, fr = rr, cr = ar;
function qe(x) {
  var L = -1, b = x == null ? 0 : x.length;
  for (this.clear(); ++L < b; ) {
    var u = x[L];
    this.set(u[0], u[1]);
  }
}
qe.prototype.clear = lr;
qe.prototype.delete = ur;
qe.prototype.get = sr;
qe.prototype.has = fr;
qe.prototype.set = cr;
var Xe = qe, hr = Xe;
function dr() {
  this.__data__ = new hr(), this.size = 0;
}
var vr = dr;
function pr(x) {
  var L = this.__data__, b = L.delete(x);
  return this.size = L.size, b;
}
var yr = pr;
function gr(x) {
  return this.__data__.get(x);
}
var mr = gr;
function br(x) {
  return this.__data__.has(x);
}
var _r = br, Or = typeof we == "object" && we && we.Object === Object && we, an = Or, Er = an, Ar = typeof self == "object" && self && self.Object === Object && self, Tr = Er || Ar || Function("return this")(), Pe = Tr, wr = Pe, kr = wr.Symbol, mt = kr, Pt = mt, ln = Object.prototype, xr = ln.hasOwnProperty, Sr = ln.toString, Ue = Pt ? Pt.toStringTag : void 0;
function Nr(x) {
  var L = xr.call(x, Ue), b = x[Ue];
  try {
    x[Ue] = void 0;
    var u = !0;
  } catch {
  }
  var d = Sr.call(x);
  return u && (L ? x[Ue] = b : delete x[Ue]), d;
}
var Pr = Nr, Rr = Object.prototype, Lr = Rr.toString;
function jr(x) {
  return Lr.call(x);
}
var qr = jr, Rt = mt, Ir = Pr, Dr = qr, Mr = "[object Null]", Cr = "[object Undefined]", Lt = Rt ? Rt.toStringTag : void 0;
function Br(x) {
  return x == null ? x === void 0 ? Cr : Mr : Lt && Lt in Object(x) ? Ir(x) : Dr(x);
}
var Qe = Br;
function $r(x) {
  var L = typeof x;
  return x != null && (L == "object" || L == "function");
}
var un = $r, Fr = Qe, Ur = un, Hr = "[object AsyncFunction]", zr = "[object Function]", Kr = "[object GeneratorFunction]", Gr = "[object Proxy]";
function Vr(x) {
  if (!Ur(x))
    return !1;
  var L = Fr(x);
  return L == zr || L == Kr || L == Hr || L == Gr;
}
var sn = Vr, Wr = Pe, Yr = Wr["__core-js_shared__"], Zr = Yr, lt = Zr, jt = function() {
  var x = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
  return x ? "Symbol(src)_1." + x : "";
}();
function Xr(x) {
  return !!jt && jt in x;
}
var Qr = Xr, Jr = Function.prototype, ei = Jr.toString;
function ti(x) {
  if (x != null) {
    try {
      return ei.call(x);
    } catch {
    }
    try {
      return x + "";
    } catch {
    }
  }
  return "";
}
var fn = ti, ni = sn, ri = Qr, ii = un, oi = fn, ai = /[\\^$.*+?()[\]{}|]/g, li = /^\[object .+?Constructor\]$/, ui = Function.prototype, si = Object.prototype, fi = ui.toString, ci = si.hasOwnProperty, hi = RegExp(
  "^" + fi.call(ci).replace(ai, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function di(x) {
  if (!ii(x) || ri(x))
    return !1;
  var L = ni(x) ? hi : li;
  return L.test(oi(x));
}
var vi = di;
function pi(x, L) {
  return x == null ? void 0 : x[L];
}
var yi = pi, gi = vi, mi = yi;
function bi(x, L) {
  var b = mi(x, L);
  return gi(b) ? b : void 0;
}
var Ie = bi, _i = Ie, Oi = Pe, Ei = _i(Oi, "Map"), bt = Ei, Ai = Ie, Ti = Ai(Object, "create"), Je = Ti, qt = Je;
function wi() {
  this.__data__ = qt ? qt(null) : {}, this.size = 0;
}
var ki = wi;
function xi(x) {
  var L = this.has(x) && delete this.__data__[x];
  return this.size -= L ? 1 : 0, L;
}
var Si = xi, Ni = Je, Pi = "__lodash_hash_undefined__", Ri = Object.prototype, Li = Ri.hasOwnProperty;
function ji(x) {
  var L = this.__data__;
  if (Ni) {
    var b = L[x];
    return b === Pi ? void 0 : b;
  }
  return Li.call(L, x) ? L[x] : void 0;
}
var qi = ji, Ii = Je, Di = Object.prototype, Mi = Di.hasOwnProperty;
function Ci(x) {
  var L = this.__data__;
  return Ii ? L[x] !== void 0 : Mi.call(L, x);
}
var Bi = Ci, $i = Je, Fi = "__lodash_hash_undefined__";
function Ui(x, L) {
  var b = this.__data__;
  return this.size += this.has(x) ? 0 : 1, b[x] = $i && L === void 0 ? Fi : L, this;
}
var Hi = Ui, zi = ki, Ki = Si, Gi = qi, Vi = Bi, Wi = Hi;
function De(x) {
  var L = -1, b = x == null ? 0 : x.length;
  for (this.clear(); ++L < b; ) {
    var u = x[L];
    this.set(u[0], u[1]);
  }
}
De.prototype.clear = zi;
De.prototype.delete = Ki;
De.prototype.get = Gi;
De.prototype.has = Vi;
De.prototype.set = Wi;
var Yi = De, It = Yi, Zi = Xe, Xi = bt;
function Qi() {
  this.size = 0, this.__data__ = {
    hash: new It(),
    map: new (Xi || Zi)(),
    string: new It()
  };
}
var Ji = Qi;
function eo(x) {
  var L = typeof x;
  return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? x !== "__proto__" : x === null;
}
var to = eo, no = to;
function ro(x, L) {
  var b = x.__data__;
  return no(L) ? b[typeof L == "string" ? "string" : "hash"] : b.map;
}
var et = ro, io = et;
function oo(x) {
  var L = io(this, x).delete(x);
  return this.size -= L ? 1 : 0, L;
}
var ao = oo, lo = et;
function uo(x) {
  return lo(this, x).get(x);
}
var so = uo, fo = et;
function co(x) {
  return fo(this, x).has(x);
}
var ho = co, vo = et;
function po(x, L) {
  var b = vo(this, x), u = b.size;
  return b.set(x, L), this.size += b.size == u ? 0 : 1, this;
}
var yo = po, go = Ji, mo = ao, bo = so, _o = ho, Oo = yo;
function Me(x) {
  var L = -1, b = x == null ? 0 : x.length;
  for (this.clear(); ++L < b; ) {
    var u = x[L];
    this.set(u[0], u[1]);
  }
}
Me.prototype.clear = go;
Me.prototype.delete = mo;
Me.prototype.get = bo;
Me.prototype.has = _o;
Me.prototype.set = Oo;
var cn = Me, Eo = Xe, Ao = bt, To = cn, wo = 200;
function ko(x, L) {
  var b = this.__data__;
  if (b instanceof Eo) {
    var u = b.__data__;
    if (!Ao || u.length < wo - 1)
      return u.push([x, L]), this.size = ++b.size, this;
    b = this.__data__ = new To(u);
  }
  return b.set(x, L), this.size = b.size, this;
}
var xo = ko, So = Xe, No = vr, Po = yr, Ro = mr, Lo = _r, jo = xo;
function Ce(x) {
  var L = this.__data__ = new So(x);
  this.size = L.size;
}
Ce.prototype.clear = No;
Ce.prototype.delete = Po;
Ce.prototype.get = Ro;
Ce.prototype.has = Lo;
Ce.prototype.set = jo;
var qo = Ce, Io = "__lodash_hash_undefined__";
function Do(x) {
  return this.__data__.set(x, Io), this;
}
var Mo = Do;
function Co(x) {
  return this.__data__.has(x);
}
var Bo = Co, $o = cn, Fo = Mo, Uo = Bo;
function Ge(x) {
  var L = -1, b = x == null ? 0 : x.length;
  for (this.__data__ = new $o(); ++L < b; )
    this.add(x[L]);
}
Ge.prototype.add = Ge.prototype.push = Fo;
Ge.prototype.has = Uo;
var Ho = Ge;
function zo(x, L) {
  for (var b = -1, u = x == null ? 0 : x.length; ++b < u; )
    if (L(x[b], b, x))
      return !0;
  return !1;
}
var Ko = zo;
function Go(x, L) {
  return x.has(L);
}
var Vo = Go, Wo = Ho, Yo = Ko, Zo = Vo, Xo = 1, Qo = 2;
function Jo(x, L, b, u, d, T) {
  var A = b & Xo, _ = x.length, v = L.length;
  if (_ != v && !(A && v > _))
    return !1;
  var p = T.get(x), c = T.get(L);
  if (p && c)
    return p == L && c == x;
  var o = -1, e = !0, t = b & Qo ? new Wo() : void 0;
  for (T.set(x, L), T.set(L, x); ++o < _; ) {
    var s = x[o], a = L[o];
    if (u)
      var l = A ? u(a, s, o, L, x, T) : u(s, a, o, x, L, T);
    if (l !== void 0) {
      if (l)
        continue;
      e = !1;
      break;
    }
    if (t) {
      if (!Yo(L, function(i, r) {
        if (!Zo(t, r) && (s === i || d(s, i, b, u, T)))
          return t.push(r);
      })) {
        e = !1;
        break;
      }
    } else if (!(s === a || d(s, a, b, u, T))) {
      e = !1;
      break;
    }
  }
  return T.delete(x), T.delete(L), e;
}
var hn = Jo, ea = Pe, ta = ea.Uint8Array, na = ta;
function ra(x) {
  var L = -1, b = Array(x.size);
  return x.forEach(function(u, d) {
    b[++L] = [d, u];
  }), b;
}
var ia = ra;
function oa(x) {
  var L = -1, b = Array(x.size);
  return x.forEach(function(u) {
    b[++L] = u;
  }), b;
}
var aa = oa, Dt = mt, Mt = na, la = on, ua = hn, sa = ia, fa = aa, ca = 1, ha = 2, da = "[object Boolean]", va = "[object Date]", pa = "[object Error]", ya = "[object Map]", ga = "[object Number]", ma = "[object RegExp]", ba = "[object Set]", _a = "[object String]", Oa = "[object Symbol]", Ea = "[object ArrayBuffer]", Aa = "[object DataView]", Ct = Dt ? Dt.prototype : void 0, ut = Ct ? Ct.valueOf : void 0;
function Ta(x, L, b, u, d, T, A) {
  switch (b) {
    case Aa:
      if (x.byteLength != L.byteLength || x.byteOffset != L.byteOffset)
        return !1;
      x = x.buffer, L = L.buffer;
    case Ea:
      return !(x.byteLength != L.byteLength || !T(new Mt(x), new Mt(L)));
    case da:
    case va:
    case ga:
      return la(+x, +L);
    case pa:
      return x.name == L.name && x.message == L.message;
    case ma:
    case _a:
      return x == L + "";
    case ya:
      var _ = sa;
    case ba:
      var v = u & ca;
      if (_ || (_ = fa), x.size != L.size && !v)
        return !1;
      var p = A.get(x);
      if (p)
        return p == L;
      u |= ha, A.set(x, L);
      var c = ua(_(x), _(L), u, d, T, A);
      return A.delete(x), c;
    case Oa:
      if (ut)
        return ut.call(x) == ut.call(L);
  }
  return !1;
}
var wa = Ta;
function ka(x, L) {
  for (var b = -1, u = L.length, d = x.length; ++b < u; )
    x[d + b] = L[b];
  return x;
}
var xa = ka, Sa = Array.isArray, _t = Sa, Na = xa, Pa = _t;
function Ra(x, L, b) {
  var u = L(x);
  return Pa(x) ? u : Na(u, b(x));
}
var La = Ra;
function ja(x, L) {
  for (var b = -1, u = x == null ? 0 : x.length, d = 0, T = []; ++b < u; ) {
    var A = x[b];
    L(A, b, x) && (T[d++] = A);
  }
  return T;
}
var qa = ja;
function Ia() {
  return [];
}
var Da = Ia, Ma = qa, Ca = Da, Ba = Object.prototype, $a = Ba.propertyIsEnumerable, Bt = Object.getOwnPropertySymbols, Fa = Bt ? function(x) {
  return x == null ? [] : (x = Object(x), Ma(Bt(x), function(L) {
    return $a.call(x, L);
  }));
} : Ca, Ua = Fa;
function Ha(x, L) {
  for (var b = -1, u = Array(x); ++b < x; )
    u[b] = L(b);
  return u;
}
var za = Ha;
function Ka(x) {
  return x != null && typeof x == "object";
}
var tt = Ka, Ga = Qe, Va = tt, Wa = "[object Arguments]";
function Ya(x) {
  return Va(x) && Ga(x) == Wa;
}
var Za = Ya, $t = Za, Xa = tt, dn = Object.prototype, Qa = dn.hasOwnProperty, Ja = dn.propertyIsEnumerable, el = $t(/* @__PURE__ */ function() {
  return arguments;
}()) ? $t : function(x) {
  return Xa(x) && Qa.call(x, "callee") && !Ja.call(x, "callee");
}, tl = el, Ve = { exports: {} };
function nl() {
  return !1;
}
var rl = nl;
Ve.exports;
(function(x, L) {
  var b = Pe, u = rl, d = L && !L.nodeType && L, T = d && !0 && x && !x.nodeType && x, A = T && T.exports === d, _ = A ? b.Buffer : void 0, v = _ ? _.isBuffer : void 0, p = v || u;
  x.exports = p;
})(Ve, Ve.exports);
var vn = Ve.exports, il = 9007199254740991, ol = /^(?:0|[1-9]\d*)$/;
function al(x, L) {
  var b = typeof x;
  return L = L ?? il, !!L && (b == "number" || b != "symbol" && ol.test(x)) && x > -1 && x % 1 == 0 && x < L;
}
var ll = al, ul = 9007199254740991;
function sl(x) {
  return typeof x == "number" && x > -1 && x % 1 == 0 && x <= ul;
}
var pn = sl, fl = Qe, cl = pn, hl = tt, dl = "[object Arguments]", vl = "[object Array]", pl = "[object Boolean]", yl = "[object Date]", gl = "[object Error]", ml = "[object Function]", bl = "[object Map]", _l = "[object Number]", Ol = "[object Object]", El = "[object RegExp]", Al = "[object Set]", Tl = "[object String]", wl = "[object WeakMap]", kl = "[object ArrayBuffer]", xl = "[object DataView]", Sl = "[object Float32Array]", Nl = "[object Float64Array]", Pl = "[object Int8Array]", Rl = "[object Int16Array]", Ll = "[object Int32Array]", jl = "[object Uint8Array]", ql = "[object Uint8ClampedArray]", Il = "[object Uint16Array]", Dl = "[object Uint32Array]", ye = {};
ye[Sl] = ye[Nl] = ye[Pl] = ye[Rl] = ye[Ll] = ye[jl] = ye[ql] = ye[Il] = ye[Dl] = !0;
ye[dl] = ye[vl] = ye[kl] = ye[pl] = ye[xl] = ye[yl] = ye[gl] = ye[ml] = ye[bl] = ye[_l] = ye[Ol] = ye[El] = ye[Al] = ye[Tl] = ye[wl] = !1;
function Ml(x) {
  return hl(x) && cl(x.length) && !!ye[fl(x)];
}
var Cl = Ml;
function Bl(x) {
  return function(L) {
    return x(L);
  };
}
var $l = Bl, We = { exports: {} };
We.exports;
(function(x, L) {
  var b = an, u = L && !L.nodeType && L, d = u && !0 && x && !x.nodeType && x, T = d && d.exports === u, A = T && b.process, _ = function() {
    try {
      var v = d && d.require && d.require("util").types;
      return v || A && A.binding && A.binding("util");
    } catch {
    }
  }();
  x.exports = _;
})(We, We.exports);
var Fl = We.exports, Ul = Cl, Hl = $l, Ft = Fl, Ut = Ft && Ft.isTypedArray, zl = Ut ? Hl(Ut) : Ul, yn = zl, Kl = za, Gl = tl, Vl = _t, Wl = vn, Yl = ll, Zl = yn, Xl = Object.prototype, Ql = Xl.hasOwnProperty;
function Jl(x, L) {
  var b = Vl(x), u = !b && Gl(x), d = !b && !u && Wl(x), T = !b && !u && !d && Zl(x), A = b || u || d || T, _ = A ? Kl(x.length, String) : [], v = _.length;
  for (var p in x)
    (L || Ql.call(x, p)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    d && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    T && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    Yl(p, v))) && _.push(p);
  return _;
}
var eu = Jl, tu = Object.prototype;
function nu(x) {
  var L = x && x.constructor, b = typeof L == "function" && L.prototype || tu;
  return x === b;
}
var ru = nu;
function iu(x, L) {
  return function(b) {
    return x(L(b));
  };
}
var ou = iu, au = ou, lu = au(Object.keys, Object), uu = lu, su = ru, fu = uu, cu = Object.prototype, hu = cu.hasOwnProperty;
function du(x) {
  if (!su(x))
    return fu(x);
  var L = [];
  for (var b in Object(x))
    hu.call(x, b) && b != "constructor" && L.push(b);
  return L;
}
var vu = du, pu = sn, yu = pn;
function gu(x) {
  return x != null && yu(x.length) && !pu(x);
}
var mu = gu, bu = eu, _u = vu, Ou = mu;
function Eu(x) {
  return Ou(x) ? bu(x) : _u(x);
}
var Au = Eu, Tu = La, wu = Ua, ku = Au;
function xu(x) {
  return Tu(x, ku, wu);
}
var Su = xu, Ht = Su, Nu = 1, Pu = Object.prototype, Ru = Pu.hasOwnProperty;
function Lu(x, L, b, u, d, T) {
  var A = b & Nu, _ = Ht(x), v = _.length, p = Ht(L), c = p.length;
  if (v != c && !A)
    return !1;
  for (var o = v; o--; ) {
    var e = _[o];
    if (!(A ? e in L : Ru.call(L, e)))
      return !1;
  }
  var t = T.get(x), s = T.get(L);
  if (t && s)
    return t == L && s == x;
  var a = !0;
  T.set(x, L), T.set(L, x);
  for (var l = A; ++o < v; ) {
    e = _[o];
    var i = x[e], r = L[e];
    if (u)
      var f = A ? u(r, i, e, L, x, T) : u(i, r, e, x, L, T);
    if (!(f === void 0 ? i === r || d(i, r, b, u, T) : f)) {
      a = !1;
      break;
    }
    l || (l = e == "constructor");
  }
  if (a && !l) {
    var n = x.constructor, h = L.constructor;
    n != h && "constructor" in x && "constructor" in L && !(typeof n == "function" && n instanceof n && typeof h == "function" && h instanceof h) && (a = !1);
  }
  return T.delete(x), T.delete(L), a;
}
var ju = Lu, qu = Ie, Iu = Pe, Du = qu(Iu, "DataView"), Mu = Du, Cu = Ie, Bu = Pe, $u = Cu(Bu, "Promise"), Fu = $u, Uu = Ie, Hu = Pe, zu = Uu(Hu, "Set"), Ku = zu, Gu = Ie, Vu = Pe, Wu = Gu(Vu, "WeakMap"), Yu = Wu, ct = Mu, ht = bt, dt = Fu, vt = Ku, pt = Yu, gn = Qe, Be = fn, zt = "[object Map]", Zu = "[object Object]", Kt = "[object Promise]", Gt = "[object Set]", Vt = "[object WeakMap]", Wt = "[object DataView]", Xu = Be(ct), Qu = Be(ht), Ju = Be(dt), es = Be(vt), ts = Be(pt), Re = gn;
(ct && Re(new ct(new ArrayBuffer(1))) != Wt || ht && Re(new ht()) != zt || dt && Re(dt.resolve()) != Kt || vt && Re(new vt()) != Gt || pt && Re(new pt()) != Vt) && (Re = function(x) {
  var L = gn(x), b = L == Zu ? x.constructor : void 0, u = b ? Be(b) : "";
  if (u)
    switch (u) {
      case Xu:
        return Wt;
      case Qu:
        return zt;
      case Ju:
        return Kt;
      case es:
        return Gt;
      case ts:
        return Vt;
    }
  return L;
});
var ns = Re, st = qo, rs = hn, is = wa, os = ju, Yt = ns, Zt = _t, Xt = vn, as = yn, ls = 1, Qt = "[object Arguments]", Jt = "[object Array]", Ke = "[object Object]", us = Object.prototype, en = us.hasOwnProperty;
function ss(x, L, b, u, d, T) {
  var A = Zt(x), _ = Zt(L), v = A ? Jt : Yt(x), p = _ ? Jt : Yt(L);
  v = v == Qt ? Ke : v, p = p == Qt ? Ke : p;
  var c = v == Ke, o = p == Ke, e = v == p;
  if (e && Xt(x)) {
    if (!Xt(L))
      return !1;
    A = !0, c = !1;
  }
  if (e && !c)
    return T || (T = new st()), A || as(x) ? rs(x, L, b, u, d, T) : is(x, L, v, b, u, d, T);
  if (!(b & ls)) {
    var t = c && en.call(x, "__wrapped__"), s = o && en.call(L, "__wrapped__");
    if (t || s) {
      var a = t ? x.value() : x, l = s ? L.value() : L;
      return T || (T = new st()), d(a, l, b, u, T);
    }
  }
  return e ? (T || (T = new st()), os(x, L, b, u, d, T)) : !1;
}
var fs = ss, cs = fs, tn = tt;
function mn(x, L, b, u, d) {
  return x === L ? !0 : x == null || L == null || !tn(x) && !tn(L) ? x !== x && L !== L : cs(x, L, b, u, mn, d);
}
var hs = mn, ds = hs;
function vs(x, L) {
  return ds(x, L);
}
var ps = vs, bn = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(x, L) {
  (function(u, d) {
    x.exports = d();
  })(typeof self < "u" ? self : we, function() {
    return (
      /******/
      function(b) {
        var u = {};
        function d(T) {
          if (u[T])
            return u[T].exports;
          var A = u[T] = {
            /******/
            i: T,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return b[T].call(A.exports, A, A.exports, d), A.l = !0, A.exports;
        }
        return d.m = b, d.c = u, d.d = function(T, A, _) {
          d.o(T, A) || Object.defineProperty(T, A, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: _
            /******/
          });
        }, d.n = function(T) {
          var A = T && T.__esModule ? (
            /******/
            function() {
              return T.default;
            }
          ) : (
            /******/
            function() {
              return T;
            }
          );
          return d.d(A, "a", A), A;
        }, d.o = function(T, A) {
          return Object.prototype.hasOwnProperty.call(T, A);
        }, d.p = "", d(d.s = 109);
      }([
        /* 0 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", { value: !0 });
          var T = d(17), A = d(18), _ = d(19), v = d(45), p = d(46), c = d(47), o = d(48), e = d(49), t = d(12), s = d(32), a = d(33), l = d(31), i = d(1), r = {
            Scope: i.Scope,
            create: i.create,
            find: i.find,
            query: i.query,
            register: i.register,
            Container: T.default,
            Format: A.default,
            Leaf: _.default,
            Embed: o.default,
            Scroll: v.default,
            Block: c.default,
            Inline: p.default,
            Text: e.default,
            Attributor: {
              Attribute: t.default,
              Class: s.default,
              Style: a.default,
              Store: l.default
            }
          };
          u.default = r;
        },
        /* 1 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
              i.__proto__ = r;
            } || function(i, r) {
              for (var f in r)
                r.hasOwnProperty(f) && (i[f] = r[f]);
            };
            return function(i, r) {
              l(i, r);
              function f() {
                this.constructor = i;
              }
              i.prototype = r === null ? Object.create(r) : (f.prototype = r.prototype, new f());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = (
            /** @class */
            function(l) {
              T(i, l);
              function i(r) {
                var f = this;
                return r = "[Parchment] " + r, f = l.call(this, r) || this, f.message = r, f.name = f.constructor.name, f;
              }
              return i;
            }(Error)
          );
          u.ParchmentError = A;
          var _ = {}, v = {}, p = {}, c = {};
          u.DATA_KEY = "__blot";
          var o;
          (function(l) {
            l[l.TYPE = 3] = "TYPE", l[l.LEVEL = 12] = "LEVEL", l[l.ATTRIBUTE = 13] = "ATTRIBUTE", l[l.BLOT = 14] = "BLOT", l[l.INLINE = 7] = "INLINE", l[l.BLOCK = 11] = "BLOCK", l[l.BLOCK_BLOT = 10] = "BLOCK_BLOT", l[l.INLINE_BLOT = 6] = "INLINE_BLOT", l[l.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", l[l.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", l[l.ANY = 15] = "ANY";
          })(o = u.Scope || (u.Scope = {}));
          function e(l, i) {
            var r = s(l);
            if (r == null)
              throw new A("Unable to create " + l + " blot");
            var f = r, n = (
              // @ts-ignore
              l instanceof Node || l.nodeType === Node.TEXT_NODE ? l : f.create(i)
            );
            return new f(n, i);
          }
          u.create = e;
          function t(l, i) {
            return i === void 0 && (i = !1), l == null ? null : l[u.DATA_KEY] != null ? l[u.DATA_KEY].blot : i ? t(l.parentNode, i) : null;
          }
          u.find = t;
          function s(l, i) {
            i === void 0 && (i = o.ANY);
            var r;
            if (typeof l == "string")
              r = c[l] || _[l];
            else if (l instanceof Text || l.nodeType === Node.TEXT_NODE)
              r = c.text;
            else if (typeof l == "number")
              l & o.LEVEL & o.BLOCK ? r = c.block : l & o.LEVEL & o.INLINE && (r = c.inline);
            else if (l instanceof HTMLElement) {
              var f = (l.getAttribute("class") || "").split(/\s+/);
              for (var n in f)
                if (r = v[f[n]], r)
                  break;
              r = r || p[l.tagName];
            }
            return r == null ? null : i & o.LEVEL & r.scope && i & o.TYPE & r.scope ? r : null;
          }
          u.query = s;
          function a() {
            for (var l = [], i = 0; i < arguments.length; i++)
              l[i] = arguments[i];
            if (l.length > 1)
              return l.map(function(n) {
                return a(n);
              });
            var r = l[0];
            if (typeof r.blotName != "string" && typeof r.attrName != "string")
              throw new A("Invalid definition");
            if (r.blotName === "abstract")
              throw new A("Cannot register abstract class");
            if (c[r.blotName || r.attrName] = r, typeof r.keyName == "string")
              _[r.keyName] = r;
            else if (r.className != null && (v[r.className] = r), r.tagName != null) {
              Array.isArray(r.tagName) ? r.tagName = r.tagName.map(function(n) {
                return n.toUpperCase();
              }) : r.tagName = r.tagName.toUpperCase();
              var f = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
              f.forEach(function(n) {
                (p[n] == null || r.className == null) && (p[n] = r);
              });
            }
            return r;
          }
          u.register = a;
        },
        /* 2 */
        /***/
        function(b, u, d) {
          var T = d(51), A = d(11), _ = d(3), v = d(20), p = "\0", c = function(o) {
            Array.isArray(o) ? this.ops = o : o != null && Array.isArray(o.ops) ? this.ops = o.ops : this.ops = [];
          };
          c.prototype.insert = function(o, e) {
            var t = {};
            return o.length === 0 ? this : (t.insert = o, e != null && typeof e == "object" && Object.keys(e).length > 0 && (t.attributes = e), this.push(t));
          }, c.prototype.delete = function(o) {
            return o <= 0 ? this : this.push({ delete: o });
          }, c.prototype.retain = function(o, e) {
            if (o <= 0)
              return this;
            var t = { retain: o };
            return e != null && typeof e == "object" && Object.keys(e).length > 0 && (t.attributes = e), this.push(t);
          }, c.prototype.push = function(o) {
            var e = this.ops.length, t = this.ops[e - 1];
            if (o = _(!0, {}, o), typeof t == "object") {
              if (typeof o.delete == "number" && typeof t.delete == "number")
                return this.ops[e - 1] = { delete: t.delete + o.delete }, this;
              if (typeof t.delete == "number" && o.insert != null && (e -= 1, t = this.ops[e - 1], typeof t != "object"))
                return this.ops.unshift(o), this;
              if (A(o.attributes, t.attributes)) {
                if (typeof o.insert == "string" && typeof t.insert == "string")
                  return this.ops[e - 1] = { insert: t.insert + o.insert }, typeof o.attributes == "object" && (this.ops[e - 1].attributes = o.attributes), this;
                if (typeof o.retain == "number" && typeof t.retain == "number")
                  return this.ops[e - 1] = { retain: t.retain + o.retain }, typeof o.attributes == "object" && (this.ops[e - 1].attributes = o.attributes), this;
              }
            }
            return e === this.ops.length ? this.ops.push(o) : this.ops.splice(e, 0, o), this;
          }, c.prototype.chop = function() {
            var o = this.ops[this.ops.length - 1];
            return o && o.retain && !o.attributes && this.ops.pop(), this;
          }, c.prototype.filter = function(o) {
            return this.ops.filter(o);
          }, c.prototype.forEach = function(o) {
            this.ops.forEach(o);
          }, c.prototype.map = function(o) {
            return this.ops.map(o);
          }, c.prototype.partition = function(o) {
            var e = [], t = [];
            return this.forEach(function(s) {
              var a = o(s) ? e : t;
              a.push(s);
            }), [e, t];
          }, c.prototype.reduce = function(o, e) {
            return this.ops.reduce(o, e);
          }, c.prototype.changeLength = function() {
            return this.reduce(function(o, e) {
              return e.insert ? o + v.length(e) : e.delete ? o - e.delete : o;
            }, 0);
          }, c.prototype.length = function() {
            return this.reduce(function(o, e) {
              return o + v.length(e);
            }, 0);
          }, c.prototype.slice = function(o, e) {
            o = o || 0, typeof e != "number" && (e = 1 / 0);
            for (var t = [], s = v.iterator(this.ops), a = 0; a < e && s.hasNext(); ) {
              var l;
              a < o ? l = s.next(o - a) : (l = s.next(e - a), t.push(l)), a += v.length(l);
            }
            return new c(t);
          }, c.prototype.compose = function(o) {
            var e = v.iterator(this.ops), t = v.iterator(o.ops), s = [], a = t.peek();
            if (a != null && typeof a.retain == "number" && a.attributes == null) {
              for (var l = a.retain; e.peekType() === "insert" && e.peekLength() <= l; )
                l -= e.peekLength(), s.push(e.next());
              a.retain - l > 0 && t.next(a.retain - l);
            }
            for (var i = new c(s); e.hasNext() || t.hasNext(); )
              if (t.peekType() === "insert")
                i.push(t.next());
              else if (e.peekType() === "delete")
                i.push(e.next());
              else {
                var r = Math.min(e.peekLength(), t.peekLength()), f = e.next(r), n = t.next(r);
                if (typeof n.retain == "number") {
                  var h = {};
                  typeof f.retain == "number" ? h.retain = r : h.insert = f.insert;
                  var S = v.attributes.compose(f.attributes, n.attributes, typeof f.retain == "number");
                  if (S && (h.attributes = S), i.push(h), !t.hasNext() && A(i.ops[i.ops.length - 1], h)) {
                    var O = new c(e.rest());
                    return i.concat(O).chop();
                  }
                } else
                  typeof n.delete == "number" && typeof f.retain == "number" && i.push(n);
              }
            return i.chop();
          }, c.prototype.concat = function(o) {
            var e = new c(this.ops.slice());
            return o.ops.length > 0 && (e.push(o.ops[0]), e.ops = e.ops.concat(o.ops.slice(1))), e;
          }, c.prototype.diff = function(o, e) {
            if (this.ops === o.ops)
              return new c();
            var t = [this, o].map(function(r) {
              return r.map(function(f) {
                if (f.insert != null)
                  return typeof f.insert == "string" ? f.insert : p;
                var n = r === o ? "on" : "with";
                throw new Error("diff() called " + n + " non-document");
              }).join("");
            }), s = new c(), a = T(t[0], t[1], e), l = v.iterator(this.ops), i = v.iterator(o.ops);
            return a.forEach(function(r) {
              for (var f = r[1].length; f > 0; ) {
                var n = 0;
                switch (r[0]) {
                  case T.INSERT:
                    n = Math.min(i.peekLength(), f), s.push(i.next(n));
                    break;
                  case T.DELETE:
                    n = Math.min(f, l.peekLength()), l.next(n), s.delete(n);
                    break;
                  case T.EQUAL:
                    n = Math.min(l.peekLength(), i.peekLength(), f);
                    var h = l.next(n), S = i.next(n);
                    A(h.insert, S.insert) ? s.retain(n, v.attributes.diff(h.attributes, S.attributes)) : s.push(S).delete(n);
                    break;
                }
                f -= n;
              }
            }), s.chop();
          }, c.prototype.eachLine = function(o, e) {
            e = e || `
`;
            for (var t = v.iterator(this.ops), s = new c(), a = 0; t.hasNext(); ) {
              if (t.peekType() !== "insert")
                return;
              var l = t.peek(), i = v.length(l) - t.peekLength(), r = typeof l.insert == "string" ? l.insert.indexOf(e, i) - i : -1;
              if (r < 0)
                s.push(t.next());
              else if (r > 0)
                s.push(t.next(r));
              else {
                if (o(s, t.next(1).attributes || {}, a) === !1)
                  return;
                a += 1, s = new c();
              }
            }
            s.length() > 0 && o(s, {}, a);
          }, c.prototype.transform = function(o, e) {
            if (e = !!e, typeof o == "number")
              return this.transformPosition(o, e);
            for (var t = v.iterator(this.ops), s = v.iterator(o.ops), a = new c(); t.hasNext() || s.hasNext(); )
              if (t.peekType() === "insert" && (e || s.peekType() !== "insert"))
                a.retain(v.length(t.next()));
              else if (s.peekType() === "insert")
                a.push(s.next());
              else {
                var l = Math.min(t.peekLength(), s.peekLength()), i = t.next(l), r = s.next(l);
                if (i.delete)
                  continue;
                r.delete ? a.push(r) : a.retain(l, v.attributes.transform(i.attributes, r.attributes, e));
              }
            return a.chop();
          }, c.prototype.transformPosition = function(o, e) {
            e = !!e;
            for (var t = v.iterator(this.ops), s = 0; t.hasNext() && s <= o; ) {
              var a = t.peekLength(), l = t.peekType();
              if (t.next(), l === "delete") {
                o -= Math.min(a, o - s);
                continue;
              } else
                l === "insert" && (s < o || !e) && (o += a);
              s += a;
            }
            return o;
          }, b.exports = c;
        },
        /* 3 */
        /***/
        function(b, u) {
          var d = Object.prototype.hasOwnProperty, T = Object.prototype.toString, A = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, v = function(t) {
            return typeof Array.isArray == "function" ? Array.isArray(t) : T.call(t) === "[object Array]";
          }, p = function(t) {
            if (!t || T.call(t) !== "[object Object]")
              return !1;
            var s = d.call(t, "constructor"), a = t.constructor && t.constructor.prototype && d.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !s && !a)
              return !1;
            var l;
            for (l in t)
              ;
            return typeof l > "u" || d.call(t, l);
          }, c = function(t, s) {
            A && s.name === "__proto__" ? A(t, s.name, {
              enumerable: !0,
              configurable: !0,
              value: s.newValue,
              writable: !0
            }) : t[s.name] = s.newValue;
          }, o = function(t, s) {
            if (s === "__proto__")
              if (d.call(t, s)) {
                if (_)
                  return _(t, s).value;
              } else
                return;
            return t[s];
          };
          b.exports = function e() {
            var t, s, a, l, i, r, f = arguments[0], n = 1, h = arguments.length, S = !1;
            for (typeof f == "boolean" && (S = f, f = arguments[1] || {}, n = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); n < h; ++n)
              if (t = arguments[n], t != null)
                for (s in t)
                  a = o(f, s), l = o(t, s), f !== l && (S && l && (p(l) || (i = v(l))) ? (i ? (i = !1, r = a && v(a) ? a : []) : r = a && p(a) ? a : {}, c(f, { name: s, newValue: e(S, r, l) })) : typeof l < "u" && c(f, { name: s, newValue: l }));
            return f;
          };
        },
        /* 4 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.BlockEmbed = u.bubbleFormats = void 0;
          var T = /* @__PURE__ */ function() {
            function y(g, k) {
              for (var P = 0; P < k.length; P++) {
                var q = k[P];
                q.enumerable = q.enumerable || !1, q.configurable = !0, "value" in q && (q.writable = !0), Object.defineProperty(g, q.key, q);
              }
            }
            return function(g, k, P) {
              return k && y(g.prototype, k), P && y(g, P), g;
            };
          }(), A = function y(g, k, P) {
            g === null && (g = Function.prototype);
            var q = Object.getOwnPropertyDescriptor(g, k);
            if (q === void 0) {
              var F = Object.getPrototypeOf(g);
              return F === null ? void 0 : y(F, k, P);
            } else {
              if ("value" in q)
                return q.value;
              var U = q.get;
              return U === void 0 ? void 0 : U.call(P);
            }
          }, _ = d(3), v = f(_), p = d(2), c = f(p), o = d(0), e = f(o), t = d(16), s = f(t), a = d(6), l = f(a), i = d(7), r = f(i);
          function f(y) {
            return y && y.__esModule ? y : { default: y };
          }
          function n(y, g) {
            if (!(y instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function h(y, g) {
            if (!y)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : y;
          }
          function S(y, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            y.prototype = Object.create(g && g.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(y, g) : y.__proto__ = g);
          }
          var O = 1, E = function(y) {
            S(g, y);
            function g() {
              return n(this, g), h(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return T(g, [{
              key: "attach",
              value: function() {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "attach", this).call(this), this.attributes = new e.default.Attributor.Store(this.domNode);
              }
            }, {
              key: "delta",
              value: function() {
                return new c.default().insert(this.value(), (0, v.default)(this.formats(), this.attributes.values()));
              }
            }, {
              key: "format",
              value: function(P, q) {
                var F = e.default.query(P, e.default.Scope.BLOCK_ATTRIBUTE);
                F != null && this.attributes.attribute(F, q);
              }
            }, {
              key: "formatAt",
              value: function(P, q, F, U) {
                this.format(F, U);
              }
            }, {
              key: "insertAt",
              value: function(P, q, F) {
                if (typeof q == "string" && q.endsWith(`
`)) {
                  var U = e.default.create(N.blotName);
                  this.parent.insertBefore(U, P === 0 ? this : this.next), U.insertAt(0, q.slice(0, -1));
                } else
                  A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, P, q, F);
              }
            }]), g;
          }(e.default.Embed);
          E.scope = e.default.Scope.BLOCK_BLOT;
          var N = function(y) {
            S(g, y);
            function g(k) {
              n(this, g);
              var P = h(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, k));
              return P.cache = {}, P;
            }
            return T(g, [{
              key: "delta",
              value: function() {
                return this.cache.delta == null && (this.cache.delta = this.descendants(e.default.Leaf).reduce(function(P, q) {
                  return q.length() === 0 ? P : P.insert(q.value(), m(q));
                }, new c.default()).insert(`
`, m(this))), this.cache.delta;
              }
            }, {
              key: "deleteAt",
              value: function(P, q) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "deleteAt", this).call(this, P, q), this.cache = {};
              }
            }, {
              key: "formatAt",
              value: function(P, q, F, U) {
                q <= 0 || (e.default.query(F, e.default.Scope.BLOCK) ? P + q === this.length() && this.format(F, U) : A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "formatAt", this).call(this, P, Math.min(q, this.length() - P - 1), F, U), this.cache = {});
              }
            }, {
              key: "insertAt",
              value: function(P, q, F) {
                if (F != null)
                  return A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, P, q, F);
                if (q.length !== 0) {
                  var U = q.split(`
`), Z = U.shift();
                  Z.length > 0 && (P < this.length() - 1 || this.children.tail == null ? A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, Math.min(P, this.length() - 1), Z) : this.children.tail.insertAt(this.children.tail.length(), Z), this.cache = {});
                  var B = this;
                  U.reduce(function(D, w) {
                    return B = B.split(D, !0), B.insertAt(0, w), w.length;
                  }, P + Z.length);
                }
              }
            }, {
              key: "insertBefore",
              value: function(P, q) {
                var F = this.children.head;
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertBefore", this).call(this, P, q), F instanceof s.default && F.remove(), this.cache = {};
              }
            }, {
              key: "length",
              value: function() {
                return this.cache.length == null && (this.cache.length = A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "length", this).call(this) + O), this.cache.length;
              }
            }, {
              key: "moveChildren",
              value: function(P, q) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "moveChildren", this).call(this, P, q), this.cache = {};
              }
            }, {
              key: "optimize",
              value: function(P) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "optimize", this).call(this, P), this.cache = {};
              }
            }, {
              key: "path",
              value: function(P) {
                return A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "path", this).call(this, P, !0);
              }
            }, {
              key: "removeChild",
              value: function(P) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "removeChild", this).call(this, P), this.cache = {};
              }
            }, {
              key: "split",
              value: function(P) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (q && (P === 0 || P >= this.length() - O)) {
                  var F = this.clone();
                  return P === 0 ? (this.parent.insertBefore(F, this), this) : (this.parent.insertBefore(F, this.next), F);
                } else {
                  var U = A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "split", this).call(this, P, q);
                  return this.cache = {}, U;
                }
              }
            }]), g;
          }(e.default.Block);
          N.blotName = "block", N.tagName = "P", N.defaultChild = "break", N.allowedChildren = [l.default, e.default.Embed, r.default];
          function m(y) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return y == null || (typeof y.formats == "function" && (g = (0, v.default)(g, y.formats())), y.parent == null || y.parent.blotName == "scroll" || y.parent.statics.scope !== y.statics.scope) ? g : m(y.parent, g);
          }
          u.bubbleFormats = m, u.BlockEmbed = E, u.default = N;
        },
        /* 5 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.overload = u.expandConfig = void 0;
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          }, A = /* @__PURE__ */ function() {
            function B(D, w) {
              var j = [], I = !0, H = !1, $ = void 0;
              try {
                for (var R = D[Symbol.iterator](), C; !(I = (C = R.next()).done) && (j.push(C.value), !(w && j.length === w)); I = !0)
                  ;
              } catch (z) {
                H = !0, $ = z;
              } finally {
                try {
                  !I && R.return && R.return();
                } finally {
                  if (H)
                    throw $;
                }
              }
              return j;
            }
            return function(D, w) {
              if (Array.isArray(D))
                return D;
              if (Symbol.iterator in Object(D))
                return B(D, w);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function B(D, w) {
              for (var j = 0; j < w.length; j++) {
                var I = w[j];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(D, I.key, I);
              }
            }
            return function(D, w, j) {
              return w && B(D.prototype, w), j && B(D, j), D;
            };
          }();
          d(50);
          var v = d(2), p = m(v), c = d(14), o = m(c), e = d(8), t = m(e), s = d(9), a = m(s), l = d(0), i = m(l), r = d(15), f = m(r), n = d(3), h = m(n), S = d(10), O = m(S), E = d(34), N = m(E);
          function m(B) {
            return B && B.__esModule ? B : { default: B };
          }
          function y(B, D, w) {
            return D in B ? Object.defineProperty(B, D, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : B[D] = w, B;
          }
          function g(B, D) {
            if (!(B instanceof D))
              throw new TypeError("Cannot call a class as a function");
          }
          var k = (0, O.default)("quill"), P = function() {
            _(B, null, [{
              key: "debug",
              value: function(w) {
                w === !0 && (w = "log"), O.default.level(w);
              }
            }, {
              key: "find",
              value: function(w) {
                return w.__quill || i.default.find(w);
              }
            }, {
              key: "import",
              value: function(w) {
                return this.imports[w] == null && k.error("Cannot import " + w + ". Are you sure it was registered?"), this.imports[w];
              }
            }, {
              key: "register",
              value: function(w, j) {
                var I = this, H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (typeof w != "string") {
                  var $ = w.attrName || w.blotName;
                  typeof $ == "string" ? this.register("formats/" + $, w, j) : Object.keys(w).forEach(function(R) {
                    I.register(R, w[R], j);
                  });
                } else
                  this.imports[w] != null && !H && k.warn("Overwriting " + w + " with", j), this.imports[w] = j, (w.startsWith("blots/") || w.startsWith("formats/")) && j.blotName !== "abstract" ? i.default.register(j) : w.startsWith("modules") && typeof j.register == "function" && j.register();
              }
            }]);
            function B(D) {
              var w = this, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (g(this, B), this.options = q(D, j), this.container = this.options.container, this.container == null)
                return k.error("Invalid Quill container", D);
              this.options.debug && B.debug(this.options.debug);
              var I = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new t.default(), this.scroll = i.default.create(this.root, {
                emitter: this.emitter,
                whitelist: this.options.formats
              }), this.editor = new o.default(this.scroll), this.selection = new f.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(t.default.events.EDITOR_CHANGE, function($) {
                $ === t.default.events.TEXT_CHANGE && w.root.classList.toggle("ql-blank", w.editor.isBlank());
              }), this.emitter.on(t.default.events.SCROLL_UPDATE, function($, R) {
                var C = w.selection.lastRange, z = C && C.length === 0 ? C.index : void 0;
                F.call(w, function() {
                  return w.editor.update(null, R, z);
                }, $);
              });
              var H = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + I + "<p><br></p></div>");
              this.setContents(H), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
            }
            return _(B, [{
              key: "addContainer",
              value: function(w) {
                var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (typeof w == "string") {
                  var I = w;
                  w = document.createElement("div"), w.classList.add(I);
                }
                return this.container.insertBefore(w, j), w;
              }
            }, {
              key: "blur",
              value: function() {
                this.selection.setRange(null);
              }
            }, {
              key: "deleteText",
              value: function(w, j, I) {
                var H = this, $ = U(w, j, I), R = A($, 4);
                return w = R[0], j = R[1], I = R[3], F.call(this, function() {
                  return H.editor.deleteText(w, j);
                }, I, w, -1 * j);
              }
            }, {
              key: "disable",
              value: function() {
                this.enable(!1);
              }
            }, {
              key: "enable",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.scroll.enable(w), this.container.classList.toggle("ql-disabled", !w);
              }
            }, {
              key: "focus",
              value: function() {
                var w = this.scrollingContainer.scrollTop;
                this.selection.focus(), this.scrollingContainer.scrollTop = w, this.scrollIntoView();
              }
            }, {
              key: "format",
              value: function(w, j) {
                var I = this, H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t.default.sources.API;
                return F.call(this, function() {
                  var $ = I.getSelection(!0), R = new p.default();
                  if ($ == null)
                    return R;
                  if (i.default.query(w, i.default.Scope.BLOCK))
                    R = I.editor.formatLine($.index, $.length, y({}, w, j));
                  else {
                    if ($.length === 0)
                      return I.selection.format(w, j), R;
                    R = I.editor.formatText($.index, $.length, y({}, w, j));
                  }
                  return I.setSelection($, t.default.sources.SILENT), R;
                }, H);
              }
            }, {
              key: "formatLine",
              value: function(w, j, I, H, $) {
                var R = this, C = void 0, z = U(w, j, I, H, $), K = A(z, 4);
                return w = K[0], j = K[1], C = K[2], $ = K[3], F.call(this, function() {
                  return R.editor.formatLine(w, j, C);
                }, $, w, 0);
              }
            }, {
              key: "formatText",
              value: function(w, j, I, H, $) {
                var R = this, C = void 0, z = U(w, j, I, H, $), K = A(z, 4);
                return w = K[0], j = K[1], C = K[2], $ = K[3], F.call(this, function() {
                  return R.editor.formatText(w, j, C);
                }, $, w, 0);
              }
            }, {
              key: "getBounds",
              value: function(w) {
                var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, I = void 0;
                typeof w == "number" ? I = this.selection.getBounds(w, j) : I = this.selection.getBounds(w.index, w.length);
                var H = this.container.getBoundingClientRect();
                return {
                  bottom: I.bottom - H.top,
                  height: I.height,
                  left: I.left - H.left,
                  right: I.right - H.left,
                  top: I.top - H.top,
                  width: I.width
                };
              }
            }, {
              key: "getContents",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - w, I = U(w, j), H = A(I, 2);
                return w = H[0], j = H[1], this.editor.getContents(w, j);
              }
            }, {
              key: "getFormat",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return typeof w == "number" ? this.editor.getFormat(w, j) : this.editor.getFormat(w.index, w.length);
              }
            }, {
              key: "getIndex",
              value: function(w) {
                return w.offset(this.scroll);
              }
            }, {
              key: "getLength",
              value: function() {
                return this.scroll.length();
              }
            }, {
              key: "getLeaf",
              value: function(w) {
                return this.scroll.leaf(w);
              }
            }, {
              key: "getLine",
              value: function(w) {
                return this.scroll.line(w);
              }
            }, {
              key: "getLines",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
                return typeof w != "number" ? this.scroll.lines(w.index, w.length) : this.scroll.lines(w, j);
              }
            }, {
              key: "getModule",
              value: function(w) {
                return this.theme.modules[w];
              }
            }, {
              key: "getSelection",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return w && this.focus(), this.update(), this.selection.getRange()[0];
              }
            }, {
              key: "getText",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - w, I = U(w, j), H = A(I, 2);
                return w = H[0], j = H[1], this.editor.getText(w, j);
              }
            }, {
              key: "hasFocus",
              value: function() {
                return this.selection.hasFocus();
              }
            }, {
              key: "insertEmbed",
              value: function(w, j, I) {
                var H = this, $ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : B.sources.API;
                return F.call(this, function() {
                  return H.editor.insertEmbed(w, j, I);
                }, $, w);
              }
            }, {
              key: "insertText",
              value: function(w, j, I, H, $) {
                var R = this, C = void 0, z = U(w, 0, I, H, $), K = A(z, 4);
                return w = K[0], C = K[2], $ = K[3], F.call(this, function() {
                  return R.editor.insertText(w, j, C);
                }, $, w, j.length);
              }
            }, {
              key: "isEnabled",
              value: function() {
                return !this.container.classList.contains("ql-disabled");
              }
            }, {
              key: "off",
              value: function() {
                return this.emitter.off.apply(this.emitter, arguments);
              }
            }, {
              key: "on",
              value: function() {
                return this.emitter.on.apply(this.emitter, arguments);
              }
            }, {
              key: "once",
              value: function() {
                return this.emitter.once.apply(this.emitter, arguments);
              }
            }, {
              key: "pasteHTML",
              value: function(w, j, I) {
                this.clipboard.dangerouslyPasteHTML(w, j, I);
              }
            }, {
              key: "removeFormat",
              value: function(w, j, I) {
                var H = this, $ = U(w, j, I), R = A($, 4);
                return w = R[0], j = R[1], I = R[3], F.call(this, function() {
                  return H.editor.removeFormat(w, j);
                }, I, w);
              }
            }, {
              key: "scrollIntoView",
              value: function() {
                this.selection.scrollIntoView(this.scrollingContainer);
              }
            }, {
              key: "setContents",
              value: function(w) {
                var j = this, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.default.sources.API;
                return F.call(this, function() {
                  w = new p.default(w);
                  var H = j.getLength(), $ = j.editor.deleteText(0, H), R = j.editor.applyDelta(w), C = R.ops[R.ops.length - 1];
                  C != null && typeof C.insert == "string" && C.insert[C.insert.length - 1] === `
` && (j.editor.deleteText(j.getLength() - 1, 1), R.delete(1));
                  var z = $.compose(R);
                  return z;
                }, I);
              }
            }, {
              key: "setSelection",
              value: function(w, j, I) {
                if (w == null)
                  this.selection.setRange(null, j || B.sources.API);
                else {
                  var H = U(w, j, I), $ = A(H, 4);
                  w = $[0], j = $[1], I = $[3], this.selection.setRange(new r.Range(w, j), I), I !== t.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
                }
              }
            }, {
              key: "setText",
              value: function(w) {
                var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.default.sources.API, I = new p.default().insert(w);
                return this.setContents(I, j);
              }
            }, {
              key: "update",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t.default.sources.USER, j = this.scroll.update(w);
                return this.selection.update(w), j;
              }
            }, {
              key: "updateContents",
              value: function(w) {
                var j = this, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.default.sources.API;
                return F.call(this, function() {
                  return w = new p.default(w), j.editor.applyDelta(w, I);
                }, I, !0);
              }
            }]), B;
          }();
          P.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: "default"
          }, P.events = t.default.events, P.sources = t.default.sources, P.version = "1.3.7", P.imports = {
            delta: p.default,
            parchment: i.default,
            "core/module": a.default,
            "core/theme": N.default
          };
          function q(B, D) {
            if (D = (0, h.default)(!0, {
              container: B,
              modules: {
                clipboard: !0,
                keyboard: !0,
                history: !0
              }
            }, D), !D.theme || D.theme === P.DEFAULTS.theme)
              D.theme = N.default;
            else if (D.theme = P.import("themes/" + D.theme), D.theme == null)
              throw new Error("Invalid theme " + D.theme + ". Did you register it?");
            var w = (0, h.default)(!0, {}, D.theme.DEFAULTS);
            [w, D].forEach(function(H) {
              H.modules = H.modules || {}, Object.keys(H.modules).forEach(function($) {
                H.modules[$] === !0 && (H.modules[$] = {});
              });
            });
            var j = Object.keys(w.modules).concat(Object.keys(D.modules)), I = j.reduce(function(H, $) {
              var R = P.import("modules/" + $);
              return R == null ? k.error("Cannot load " + $ + " module. Are you sure you registered it?") : H[$] = R.DEFAULTS || {}, H;
            }, {});
            return D.modules != null && D.modules.toolbar && D.modules.toolbar.constructor !== Object && (D.modules.toolbar = {
              container: D.modules.toolbar
            }), D = (0, h.default)(!0, {}, P.DEFAULTS, { modules: I }, w, D), ["bounds", "container", "scrollingContainer"].forEach(function(H) {
              typeof D[H] == "string" && (D[H] = document.querySelector(D[H]));
            }), D.modules = Object.keys(D.modules).reduce(function(H, $) {
              return D.modules[$] && (H[$] = D.modules[$]), H;
            }, {}), D;
          }
          function F(B, D, w, j) {
            if (this.options.strict && !this.isEnabled() && D === t.default.sources.USER)
              return new p.default();
            var I = w == null ? null : this.getSelection(), H = this.editor.delta, $ = B();
            if (I != null && (w === !0 && (w = I.index), j == null ? I = Z(I, $, D) : j !== 0 && (I = Z(I, w, j, D)), this.setSelection(I, t.default.sources.SILENT)), $.length() > 0) {
              var R, C = [t.default.events.TEXT_CHANGE, $, H, D];
              if ((R = this.emitter).emit.apply(R, [t.default.events.EDITOR_CHANGE].concat(C)), D !== t.default.sources.SILENT) {
                var z;
                (z = this.emitter).emit.apply(z, C);
              }
            }
            return $;
          }
          function U(B, D, w, j, I) {
            var H = {};
            return typeof B.index == "number" && typeof B.length == "number" ? typeof D != "number" ? (I = j, j = w, w = D, D = B.length, B = B.index) : (D = B.length, B = B.index) : typeof D != "number" && (I = j, j = w, w = D, D = 0), (typeof w > "u" ? "undefined" : T(w)) === "object" ? (H = w, I = j) : typeof w == "string" && (j != null ? H[w] = j : I = w), I = I || t.default.sources.API, [B, D, H, I];
          }
          function Z(B, D, w, j) {
            if (B == null)
              return null;
            var I = void 0, H = void 0;
            if (D instanceof p.default) {
              var $ = [B.index, B.index + B.length].map(function(K) {
                return D.transformPosition(K, j !== t.default.sources.USER);
              }), R = A($, 2);
              I = R[0], H = R[1];
            } else {
              var C = [B.index, B.index + B.length].map(function(K) {
                return K < D || K === D && j === t.default.sources.USER ? K : w >= 0 ? K + w : Math.max(D, K + w);
              }), z = A(C, 2);
              I = z[0], H = z[1];
            }
            return new r.Range(I, H - I);
          }
          u.expandConfig = q, u.overload = U, u.default = P;
        },
        /* 6 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function l(i, r) {
              for (var f = 0; f < r.length; f++) {
                var n = r[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
              }
            }
            return function(i, r, f) {
              return r && l(i.prototype, r), f && l(i, f), i;
            };
          }(), A = function l(i, r, f) {
            i === null && (i = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(i, r);
            if (n === void 0) {
              var h = Object.getPrototypeOf(i);
              return h === null ? void 0 : l(h, r, f);
            } else {
              if ("value" in n)
                return n.value;
              var S = n.get;
              return S === void 0 ? void 0 : S.call(f);
            }
          }, _ = d(7), v = o(_), p = d(0), c = o(p);
          function o(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function e(l, i) {
            if (!(l instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(l, i) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : l;
          }
          function s(l, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            l.prototype = Object.create(i && i.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(l, i) : l.__proto__ = i);
          }
          var a = function(l) {
            s(i, l);
            function i() {
              return e(this, i), t(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
            }
            return T(i, [{
              key: "formatAt",
              value: function(f, n, h, S) {
                if (i.compare(this.statics.blotName, h) < 0 && c.default.query(h, c.default.Scope.BLOT)) {
                  var O = this.isolate(f, n);
                  S && O.wrap(h, S);
                } else
                  A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "formatAt", this).call(this, f, n, h, S);
              }
            }, {
              key: "optimize",
              value: function(f) {
                if (A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "optimize", this).call(this, f), this.parent instanceof i && i.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                  var n = this.parent.isolate(this.offset(), this.length());
                  this.moveChildren(n), n.wrap(this);
                }
              }
            }], [{
              key: "compare",
              value: function(f, n) {
                var h = i.order.indexOf(f), S = i.order.indexOf(n);
                return h >= 0 || S >= 0 ? h - S : f === n ? 0 : f < n ? -1 : 1;
              }
            }]), i;
          }(c.default.Inline);
          a.allowedChildren = [a, c.default.Embed, v.default], a.order = [
            "cursor",
            "inline",
            // Must be lower
            "underline",
            "strike",
            "italic",
            "bold",
            "script",
            "link",
            "code"
            // Must be higher
          ], u.default = a;
        },
        /* 7 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(0), A = _(T);
          function _(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function v(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(e, t) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && (typeof t == "object" || typeof t == "function") ? t : e;
          }
          function c(e, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
          }
          var o = function(e) {
            c(t, e);
            function t() {
              return v(this, t), p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return t;
          }(A.default.Text);
          u.default = o;
        },
        /* 8 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function r(f, n) {
              for (var h = 0; h < n.length; h++) {
                var S = n[h];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(f, S.key, S);
              }
            }
            return function(f, n, h) {
              return n && r(f.prototype, n), h && r(f, h), f;
            };
          }(), A = function r(f, n, h) {
            f === null && (f = Function.prototype);
            var S = Object.getOwnPropertyDescriptor(f, n);
            if (S === void 0) {
              var O = Object.getPrototypeOf(f);
              return O === null ? void 0 : r(O, n, h);
            } else {
              if ("value" in S)
                return S.value;
              var E = S.get;
              return E === void 0 ? void 0 : E.call(h);
            }
          }, _ = d(54), v = o(_), p = d(10), c = o(p);
          function o(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function e(r, f) {
            if (!(r instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(r, f) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == "object" || typeof f == "function") ? f : r;
          }
          function s(r, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof f);
            r.prototype = Object.create(f && f.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(r, f) : r.__proto__ = f);
          }
          var a = (0, c.default)("quill:events"), l = ["selectionchange", "mousedown", "mouseup", "click"];
          l.forEach(function(r) {
            document.addEventListener(r, function() {
              for (var f = arguments.length, n = Array(f), h = 0; h < f; h++)
                n[h] = arguments[h];
              [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(S) {
                if (S.__quill && S.__quill.emitter) {
                  var O;
                  (O = S.__quill.emitter).handleDOM.apply(O, n);
                }
              });
            });
          });
          var i = function(r) {
            s(f, r);
            function f() {
              e(this, f);
              var n = t(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
              return n.listeners = {}, n.on("error", a.error), n;
            }
            return T(f, [{
              key: "emit",
              value: function() {
                a.log.apply(a, arguments), A(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "emit", this).apply(this, arguments);
              }
            }, {
              key: "handleDOM",
              value: function(h) {
                for (var S = arguments.length, O = Array(S > 1 ? S - 1 : 0), E = 1; E < S; E++)
                  O[E - 1] = arguments[E];
                (this.listeners[h.type] || []).forEach(function(N) {
                  var m = N.node, y = N.handler;
                  (h.target === m || m.contains(h.target)) && y.apply(void 0, [h].concat(O));
                });
              }
            }, {
              key: "listenDOM",
              value: function(h, S, O) {
                this.listeners[h] || (this.listeners[h] = []), this.listeners[h].push({ node: S, handler: O });
              }
            }]), f;
          }(v.default);
          i.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
          }, i.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
          }, u.default = i;
        },
        /* 9 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          function T(_, v) {
            if (!(_ instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          var A = function _(v) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            T(this, _), this.quill = v, this.options = p;
          };
          A.DEFAULTS = {}, u.default = A;
        },
        /* 10 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = ["error", "warn", "log", "info"], A = "warn";
          function _(p) {
            if (T.indexOf(p) <= T.indexOf(A)) {
              for (var c, o = arguments.length, e = Array(o > 1 ? o - 1 : 0), t = 1; t < o; t++)
                e[t - 1] = arguments[t];
              (c = console)[p].apply(c, e);
            }
          }
          function v(p) {
            return T.reduce(function(c, o) {
              return c[o] = _.bind(console, o, p), c;
            }, {});
          }
          _.level = v.level = function(p) {
            A = p;
          }, u.default = v;
        },
        /* 11 */
        /***/
        function(b, u, d) {
          var T = Array.prototype.slice, A = d(52), _ = d(53), v = b.exports = function(e, t, s) {
            return s || (s = {}), e === t ? !0 : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || typeof e != "object" && typeof t != "object" ? s.strict ? e === t : e == t : o(e, t, s);
          };
          function p(e) {
            return e == null;
          }
          function c(e) {
            return !(!e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number");
          }
          function o(e, t, s) {
            var a, l;
            if (p(e) || p(t) || e.prototype !== t.prototype)
              return !1;
            if (_(e))
              return _(t) ? (e = T.call(e), t = T.call(t), v(e, t, s)) : !1;
            if (c(e)) {
              if (!c(t) || e.length !== t.length)
                return !1;
              for (a = 0; a < e.length; a++)
                if (e[a] !== t[a])
                  return !1;
              return !0;
            }
            try {
              var i = A(e), r = A(t);
            } catch {
              return !1;
            }
            if (i.length != r.length)
              return !1;
            for (i.sort(), r.sort(), a = i.length - 1; a >= 0; a--)
              if (i[a] != r[a])
                return !1;
            for (a = i.length - 1; a >= 0; a--)
              if (l = i[a], !v(e[l], t[l], s))
                return !1;
            return typeof e == typeof t;
          }
        },
        /* 12 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", { value: !0 });
          var T = d(1), A = (
            /** @class */
            function() {
              function _(v, p, c) {
                c === void 0 && (c = {}), this.attrName = v, this.keyName = p;
                var o = T.Scope.TYPE & T.Scope.ATTRIBUTE;
                c.scope != null ? this.scope = c.scope & T.Scope.LEVEL | o : this.scope = T.Scope.ATTRIBUTE, c.whitelist != null && (this.whitelist = c.whitelist);
              }
              return _.keys = function(v) {
                return [].map.call(v.attributes, function(p) {
                  return p.name;
                });
              }, _.prototype.add = function(v, p) {
                return this.canAdd(v, p) ? (v.setAttribute(this.keyName, p), !0) : !1;
              }, _.prototype.canAdd = function(v, p) {
                var c = T.query(v, T.Scope.BLOT & (this.scope | T.Scope.TYPE));
                return c == null ? !1 : this.whitelist == null ? !0 : typeof p == "string" ? this.whitelist.indexOf(p.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(p) > -1;
              }, _.prototype.remove = function(v) {
                v.removeAttribute(this.keyName);
              }, _.prototype.value = function(v) {
                var p = v.getAttribute(this.keyName);
                return this.canAdd(v, p) && p ? p : "";
              }, _;
            }()
          );
          u.default = A;
        },
        /* 13 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.Code = void 0;
          var T = /* @__PURE__ */ function() {
            function E(N, m) {
              var y = [], g = !0, k = !1, P = void 0;
              try {
                for (var q = N[Symbol.iterator](), F; !(g = (F = q.next()).done) && (y.push(F.value), !(m && y.length === m)); g = !0)
                  ;
              } catch (U) {
                k = !0, P = U;
              } finally {
                try {
                  !g && q.return && q.return();
                } finally {
                  if (k)
                    throw P;
                }
              }
              return y;
            }
            return function(N, m) {
              if (Array.isArray(N))
                return N;
              if (Symbol.iterator in Object(N))
                return E(N, m);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function E(N, m) {
              for (var y = 0; y < m.length; y++) {
                var g = m[y];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(N, g.key, g);
              }
            }
            return function(N, m, y) {
              return m && E(N.prototype, m), y && E(N, y), N;
            };
          }(), _ = function E(N, m, y) {
            N === null && (N = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(N, m);
            if (g === void 0) {
              var k = Object.getPrototypeOf(N);
              return k === null ? void 0 : E(k, m, y);
            } else {
              if ("value" in g)
                return g.value;
              var P = g.get;
              return P === void 0 ? void 0 : P.call(y);
            }
          }, v = d(2), p = r(v), c = d(0), o = r(c), e = d(4), t = r(e), s = d(6), a = r(s), l = d(7), i = r(l);
          function r(E) {
            return E && E.__esModule ? E : { default: E };
          }
          function f(E, N) {
            if (!(E instanceof N))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(E, N) {
            if (!E)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return N && (typeof N == "object" || typeof N == "function") ? N : E;
          }
          function h(E, N) {
            if (typeof N != "function" && N !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof N);
            E.prototype = Object.create(N && N.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), N && (Object.setPrototypeOf ? Object.setPrototypeOf(E, N) : E.__proto__ = N);
          }
          var S = function(E) {
            h(N, E);
            function N() {
              return f(this, N), n(this, (N.__proto__ || Object.getPrototypeOf(N)).apply(this, arguments));
            }
            return N;
          }(a.default);
          S.blotName = "code", S.tagName = "CODE";
          var O = function(E) {
            h(N, E);
            function N() {
              return f(this, N), n(this, (N.__proto__ || Object.getPrototypeOf(N)).apply(this, arguments));
            }
            return A(N, [{
              key: "delta",
              value: function() {
                var y = this, g = this.domNode.textContent;
                return g.endsWith(`
`) && (g = g.slice(0, -1)), g.split(`
`).reduce(function(k, P) {
                  return k.insert(P).insert(`
`, y.formats());
                }, new p.default());
              }
            }, {
              key: "format",
              value: function(y, g) {
                if (!(y === this.statics.blotName && g)) {
                  var k = this.descendant(i.default, this.length() - 1), P = T(k, 1), q = P[0];
                  q != null && q.deleteAt(q.length() - 1, 1), _(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "format", this).call(this, y, g);
                }
              }
            }, {
              key: "formatAt",
              value: function(y, g, k, P) {
                if (g !== 0 && !(o.default.query(k, o.default.Scope.BLOCK) == null || k === this.statics.blotName && P === this.statics.formats(this.domNode))) {
                  var q = this.newlineIndex(y);
                  if (!(q < 0 || q >= y + g)) {
                    var F = this.newlineIndex(y, !0) + 1, U = q - F + 1, Z = this.isolate(F, U), B = Z.next;
                    Z.format(k, P), B instanceof N && B.formatAt(0, y - F + g - U, k, P);
                  }
                }
              }
            }, {
              key: "insertAt",
              value: function(y, g, k) {
                if (k == null) {
                  var P = this.descendant(i.default, y), q = T(P, 2), F = q[0], U = q[1];
                  F.insertAt(U, g);
                }
              }
            }, {
              key: "length",
              value: function() {
                var y = this.domNode.textContent.length;
                return this.domNode.textContent.endsWith(`
`) ? y : y + 1;
              }
            }, {
              key: "newlineIndex",
              value: function(y) {
                var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (g)
                  return this.domNode.textContent.slice(0, y).lastIndexOf(`
`);
                var k = this.domNode.textContent.slice(y).indexOf(`
`);
                return k > -1 ? y + k : -1;
              }
            }, {
              key: "optimize",
              value: function(y) {
                this.domNode.textContent.endsWith(`
`) || this.appendChild(o.default.create("text", `
`)), _(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "optimize", this).call(this, y);
                var g = this.next;
                g != null && g.prev === this && g.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === g.statics.formats(g.domNode) && (g.optimize(y), g.moveChildren(this), g.remove());
              }
            }, {
              key: "replace",
              value: function(y) {
                _(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "replace", this).call(this, y), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(g) {
                  var k = o.default.find(g);
                  k == null ? g.parentNode.removeChild(g) : k instanceof o.default.Embed ? k.remove() : k.unwrap();
                });
              }
            }], [{
              key: "create",
              value: function(y) {
                var g = _(N.__proto__ || Object.getPrototypeOf(N), "create", this).call(this, y);
                return g.setAttribute("spellcheck", !1), g;
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), N;
          }(t.default);
          O.blotName = "code-block", O.tagName = "PRE", O.TAB = "  ", u.Code = S, u.default = O;
        },
        /* 14 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          }, A = /* @__PURE__ */ function() {
            function B(D, w) {
              var j = [], I = !0, H = !1, $ = void 0;
              try {
                for (var R = D[Symbol.iterator](), C; !(I = (C = R.next()).done) && (j.push(C.value), !(w && j.length === w)); I = !0)
                  ;
              } catch (z) {
                H = !0, $ = z;
              } finally {
                try {
                  !I && R.return && R.return();
                } finally {
                  if (H)
                    throw $;
                }
              }
              return j;
            }
            return function(D, w) {
              if (Array.isArray(D))
                return D;
              if (Symbol.iterator in Object(D))
                return B(D, w);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function B(D, w) {
              for (var j = 0; j < w.length; j++) {
                var I = w[j];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(D, I.key, I);
              }
            }
            return function(D, w, j) {
              return w && B(D.prototype, w), j && B(D, j), D;
            };
          }(), v = d(2), p = g(v), c = d(20), o = g(c), e = d(0), t = g(e), s = d(13), a = g(s), l = d(24), i = g(l), r = d(4), f = g(r), n = d(16), h = g(n), S = d(21), O = g(S), E = d(11), N = g(E), m = d(3), y = g(m);
          function g(B) {
            return B && B.__esModule ? B : { default: B };
          }
          function k(B, D, w) {
            return D in B ? Object.defineProperty(B, D, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : B[D] = w, B;
          }
          function P(B, D) {
            if (!(B instanceof D))
              throw new TypeError("Cannot call a class as a function");
          }
          var q = /^[ -~]*$/, F = function() {
            function B(D) {
              P(this, B), this.scroll = D, this.delta = this.getDelta();
            }
            return _(B, [{
              key: "applyDelta",
              value: function(w) {
                var j = this, I = !1;
                this.scroll.update();
                var H = this.scroll.length();
                return this.scroll.batchStart(), w = Z(w), w.reduce(function($, R) {
                  var C = R.retain || R.delete || R.insert.length || 1, z = R.attributes || {};
                  if (R.insert != null) {
                    if (typeof R.insert == "string") {
                      var K = R.insert;
                      K.endsWith(`
`) && I && (I = !1, K = K.slice(0, -1)), $ >= H && !K.endsWith(`
`) && (I = !0), j.scroll.insertAt($, K);
                      var W = j.scroll.line($), te = A(W, 2), ne = te[0], ie = te[1], ue = (0, y.default)({}, (0, r.bubbleFormats)(ne));
                      if (ne instanceof f.default) {
                        var ce = ne.descendant(t.default.Leaf, ie), Oe = A(ce, 1), me = Oe[0];
                        ue = (0, y.default)(ue, (0, r.bubbleFormats)(me));
                      }
                      z = o.default.attributes.diff(ue, z) || {};
                    } else if (T(R.insert) === "object") {
                      var G = Object.keys(R.insert)[0];
                      if (G == null)
                        return $;
                      j.scroll.insertAt($, G, R.insert[G]);
                    }
                    H += C;
                  }
                  return Object.keys(z).forEach(function(V) {
                    j.scroll.formatAt($, C, V, z[V]);
                  }), $ + C;
                }, 0), w.reduce(function($, R) {
                  return typeof R.delete == "number" ? (j.scroll.deleteAt($, R.delete), $) : $ + (R.retain || R.insert.length || 1);
                }, 0), this.scroll.batchEnd(), this.update(w);
              }
            }, {
              key: "deleteText",
              value: function(w, j) {
                return this.scroll.deleteAt(w, j), this.update(new p.default().retain(w).delete(j));
              }
            }, {
              key: "formatLine",
              value: function(w, j) {
                var I = this, H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.scroll.update(), Object.keys(H).forEach(function($) {
                  if (!(I.scroll.whitelist != null && !I.scroll.whitelist[$])) {
                    var R = I.scroll.lines(w, Math.max(j, 1)), C = j;
                    R.forEach(function(z) {
                      var K = z.length();
                      if (!(z instanceof a.default))
                        z.format($, H[$]);
                      else {
                        var W = w - z.offset(I.scroll), te = z.newlineIndex(W + C) - W + 1;
                        z.formatAt(W, te, $, H[$]);
                      }
                      C -= K;
                    });
                  }
                }), this.scroll.optimize(), this.update(new p.default().retain(w).retain(j, (0, O.default)(H)));
              }
            }, {
              key: "formatText",
              value: function(w, j) {
                var I = this, H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Object.keys(H).forEach(function($) {
                  I.scroll.formatAt(w, j, $, H[$]);
                }), this.update(new p.default().retain(w).retain(j, (0, O.default)(H)));
              }
            }, {
              key: "getContents",
              value: function(w, j) {
                return this.delta.slice(w, w + j);
              }
            }, {
              key: "getDelta",
              value: function() {
                return this.scroll.lines().reduce(function(w, j) {
                  return w.concat(j.delta());
                }, new p.default());
              }
            }, {
              key: "getFormat",
              value: function(w) {
                var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, I = [], H = [];
                j === 0 ? this.scroll.path(w).forEach(function(R) {
                  var C = A(R, 1), z = C[0];
                  z instanceof f.default ? I.push(z) : z instanceof t.default.Leaf && H.push(z);
                }) : (I = this.scroll.lines(w, j), H = this.scroll.descendants(t.default.Leaf, w, j));
                var $ = [I, H].map(function(R) {
                  if (R.length === 0)
                    return {};
                  for (var C = (0, r.bubbleFormats)(R.shift()); Object.keys(C).length > 0; ) {
                    var z = R.shift();
                    if (z == null)
                      return C;
                    C = U((0, r.bubbleFormats)(z), C);
                  }
                  return C;
                });
                return y.default.apply(y.default, $);
              }
            }, {
              key: "getText",
              value: function(w, j) {
                return this.getContents(w, j).filter(function(I) {
                  return typeof I.insert == "string";
                }).map(function(I) {
                  return I.insert;
                }).join("");
              }
            }, {
              key: "insertEmbed",
              value: function(w, j, I) {
                return this.scroll.insertAt(w, j, I), this.update(new p.default().retain(w).insert(k({}, j, I)));
              }
            }, {
              key: "insertText",
              value: function(w, j) {
                var I = this, H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return j = j.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(w, j), Object.keys(H).forEach(function($) {
                  I.scroll.formatAt(w, j.length, $, H[$]);
                }), this.update(new p.default().retain(w).insert(j, (0, O.default)(H)));
              }
            }, {
              key: "isBlank",
              value: function() {
                if (this.scroll.children.length == 0)
                  return !0;
                if (this.scroll.children.length > 1)
                  return !1;
                var w = this.scroll.children.head;
                return w.statics.blotName !== f.default.blotName || w.children.length > 1 ? !1 : w.children.head instanceof h.default;
              }
            }, {
              key: "removeFormat",
              value: function(w, j) {
                var I = this.getText(w, j), H = this.scroll.line(w + j), $ = A(H, 2), R = $[0], C = $[1], z = 0, K = new p.default();
                R != null && (R instanceof a.default ? z = R.newlineIndex(C) - C + 1 : z = R.length() - C, K = R.delta().slice(C, C + z - 1).insert(`
`));
                var W = this.getContents(w, j + z), te = W.diff(new p.default().insert(I).concat(K)), ne = new p.default().retain(w).concat(te);
                return this.applyDelta(ne);
              }
            }, {
              key: "update",
              value: function(w) {
                var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, H = this.delta;
                if (j.length === 1 && j[0].type === "characterData" && j[0].target.data.match(q) && t.default.find(j[0].target)) {
                  var $ = t.default.find(j[0].target), R = (0, r.bubbleFormats)($), C = $.offset(this.scroll), z = j[0].oldValue.replace(i.default.CONTENTS, ""), K = new p.default().insert(z), W = new p.default().insert($.value()), te = new p.default().retain(C).concat(K.diff(W, I));
                  w = te.reduce(function(ne, ie) {
                    return ie.insert ? ne.insert(ie.insert, R) : ne.push(ie);
                  }, new p.default()), this.delta = H.compose(w);
                } else
                  this.delta = this.getDelta(), (!w || !(0, N.default)(H.compose(w), this.delta)) && (w = H.diff(this.delta, I));
                return w;
              }
            }]), B;
          }();
          function U(B, D) {
            return Object.keys(D).reduce(function(w, j) {
              return B[j] == null || (D[j] === B[j] ? w[j] = D[j] : Array.isArray(D[j]) ? D[j].indexOf(B[j]) < 0 && (w[j] = D[j].concat([B[j]])) : w[j] = [D[j], B[j]]), w;
            }, {});
          }
          function Z(B) {
            return B.reduce(function(D, w) {
              if (w.insert === 1) {
                var j = (0, O.default)(w.attributes);
                return delete j.image, D.insert({ image: w.attributes.image }, j);
              }
              if (w.attributes != null && (w.attributes.list === !0 || w.attributes.bullet === !0) && (w = (0, O.default)(w), w.attributes.list ? w.attributes.list = "ordered" : (w.attributes.list = "bullet", delete w.attributes.bullet)), typeof w.insert == "string") {
                var I = w.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                return D.insert(I, w.attributes);
              }
              return D.push(w);
            }, new p.default());
          }
          u.default = F;
        },
        /* 15 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.Range = void 0;
          var T = /* @__PURE__ */ function() {
            function E(N, m) {
              var y = [], g = !0, k = !1, P = void 0;
              try {
                for (var q = N[Symbol.iterator](), F; !(g = (F = q.next()).done) && (y.push(F.value), !(m && y.length === m)); g = !0)
                  ;
              } catch (U) {
                k = !0, P = U;
              } finally {
                try {
                  !g && q.return && q.return();
                } finally {
                  if (k)
                    throw P;
                }
              }
              return y;
            }
            return function(N, m) {
              if (Array.isArray(N))
                return N;
              if (Symbol.iterator in Object(N))
                return E(N, m);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function E(N, m) {
              for (var y = 0; y < m.length; y++) {
                var g = m[y];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(N, g.key, g);
              }
            }
            return function(N, m, y) {
              return m && E(N.prototype, m), y && E(N, y), N;
            };
          }(), _ = d(0), v = i(_), p = d(21), c = i(p), o = d(11), e = i(o), t = d(8), s = i(t), a = d(10), l = i(a);
          function i(E) {
            return E && E.__esModule ? E : { default: E };
          }
          function r(E) {
            if (Array.isArray(E)) {
              for (var N = 0, m = Array(E.length); N < E.length; N++)
                m[N] = E[N];
              return m;
            } else
              return Array.from(E);
          }
          function f(E, N) {
            if (!(E instanceof N))
              throw new TypeError("Cannot call a class as a function");
          }
          var n = (0, l.default)("quill:selection"), h = function E(N) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            f(this, E), this.index = N, this.length = m;
          }, S = function() {
            function E(N, m) {
              var y = this;
              f(this, E), this.emitter = m, this.scroll = N, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = v.default.create("cursor", this), this.lastRange = this.savedRange = new h(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                y.mouseDown || setTimeout(y.update.bind(y, s.default.sources.USER), 1);
              }), this.emitter.on(s.default.events.EDITOR_CHANGE, function(g, k) {
                g === s.default.events.TEXT_CHANGE && k.length() > 0 && y.update(s.default.sources.SILENT);
              }), this.emitter.on(s.default.events.SCROLL_BEFORE_UPDATE, function() {
                if (y.hasFocus()) {
                  var g = y.getNativeRange();
                  g != null && g.start.node !== y.cursor.textNode && y.emitter.once(s.default.events.SCROLL_UPDATE, function() {
                    try {
                      y.setNativeRange(g.start.node, g.start.offset, g.end.node, g.end.offset);
                    } catch {
                    }
                  });
                }
              }), this.emitter.on(s.default.events.SCROLL_OPTIMIZE, function(g, k) {
                if (k.range) {
                  var P = k.range, q = P.startNode, F = P.startOffset, U = P.endNode, Z = P.endOffset;
                  y.setNativeRange(q, F, U, Z);
                }
              }), this.update(s.default.sources.SILENT);
            }
            return A(E, [{
              key: "handleComposition",
              value: function() {
                var m = this;
                this.root.addEventListener("compositionstart", function() {
                  m.composing = !0;
                }), this.root.addEventListener("compositionend", function() {
                  if (m.composing = !1, m.cursor.parent) {
                    var y = m.cursor.restore();
                    if (!y)
                      return;
                    setTimeout(function() {
                      m.setNativeRange(y.startNode, y.startOffset, y.endNode, y.endOffset);
                    }, 1);
                  }
                });
              }
            }, {
              key: "handleDragging",
              value: function() {
                var m = this;
                this.emitter.listenDOM("mousedown", document.body, function() {
                  m.mouseDown = !0;
                }), this.emitter.listenDOM("mouseup", document.body, function() {
                  m.mouseDown = !1, m.update(s.default.sources.USER);
                });
              }
            }, {
              key: "focus",
              value: function() {
                this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
              }
            }, {
              key: "format",
              value: function(m, y) {
                if (!(this.scroll.whitelist != null && !this.scroll.whitelist[m])) {
                  this.scroll.update();
                  var g = this.getNativeRange();
                  if (!(g == null || !g.native.collapsed || v.default.query(m, v.default.Scope.BLOCK))) {
                    if (g.start.node !== this.cursor.textNode) {
                      var k = v.default.find(g.start.node, !1);
                      if (k == null)
                        return;
                      if (k instanceof v.default.Leaf) {
                        var P = k.split(g.start.offset);
                        k.parent.insertBefore(this.cursor, P);
                      } else
                        k.insertBefore(this.cursor, g.start.node);
                      this.cursor.attach();
                    }
                    this.cursor.format(m, y), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                  }
                }
              }
            }, {
              key: "getBounds",
              value: function(m) {
                var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, g = this.scroll.length();
                m = Math.min(m, g - 1), y = Math.min(m + y, g - 1) - m;
                var k = void 0, P = this.scroll.leaf(m), q = T(P, 2), F = q[0], U = q[1];
                if (F == null)
                  return null;
                var Z = F.position(U, !0), B = T(Z, 2);
                k = B[0], U = B[1];
                var D = document.createRange();
                if (y > 0) {
                  D.setStart(k, U);
                  var w = this.scroll.leaf(m + y), j = T(w, 2);
                  if (F = j[0], U = j[1], F == null)
                    return null;
                  var I = F.position(U, !0), H = T(I, 2);
                  return k = H[0], U = H[1], D.setEnd(k, U), D.getBoundingClientRect();
                } else {
                  var $ = "left", R = void 0;
                  return k instanceof Text ? (U < k.data.length ? (D.setStart(k, U), D.setEnd(k, U + 1)) : (D.setStart(k, U - 1), D.setEnd(k, U), $ = "right"), R = D.getBoundingClientRect()) : (R = F.domNode.getBoundingClientRect(), U > 0 && ($ = "right")), {
                    bottom: R.top + R.height,
                    height: R.height,
                    left: R[$],
                    right: R[$],
                    top: R.top,
                    width: 0
                  };
                }
              }
            }, {
              key: "getNativeRange",
              value: function() {
                var m = document.getSelection();
                if (m == null || m.rangeCount <= 0)
                  return null;
                var y = m.getRangeAt(0);
                if (y == null)
                  return null;
                var g = this.normalizeNative(y);
                return n.info("getNativeRange", g), g;
              }
            }, {
              key: "getRange",
              value: function() {
                var m = this.getNativeRange();
                if (m == null)
                  return [null, null];
                var y = this.normalizedToRange(m);
                return [y, m];
              }
            }, {
              key: "hasFocus",
              value: function() {
                return document.activeElement === this.root;
              }
            }, {
              key: "normalizedToRange",
              value: function(m) {
                var y = this, g = [[m.start.node, m.start.offset]];
                m.native.collapsed || g.push([m.end.node, m.end.offset]);
                var k = g.map(function(F) {
                  var U = T(F, 2), Z = U[0], B = U[1], D = v.default.find(Z, !0), w = D.offset(y.scroll);
                  return B === 0 ? w : D instanceof v.default.Container ? w + D.length() : w + D.index(Z, B);
                }), P = Math.min(Math.max.apply(Math, r(k)), this.scroll.length() - 1), q = Math.min.apply(Math, [P].concat(r(k)));
                return new h(q, P - q);
              }
            }, {
              key: "normalizeNative",
              value: function(m) {
                if (!O(this.root, m.startContainer) || !m.collapsed && !O(this.root, m.endContainer))
                  return null;
                var y = {
                  start: { node: m.startContainer, offset: m.startOffset },
                  end: { node: m.endContainer, offset: m.endOffset },
                  native: m
                };
                return [y.start, y.end].forEach(function(g) {
                  for (var k = g.node, P = g.offset; !(k instanceof Text) && k.childNodes.length > 0; )
                    if (k.childNodes.length > P)
                      k = k.childNodes[P], P = 0;
                    else if (k.childNodes.length === P)
                      k = k.lastChild, P = k instanceof Text ? k.data.length : k.childNodes.length + 1;
                    else
                      break;
                  g.node = k, g.offset = P;
                }), y;
              }
            }, {
              key: "rangeToNative",
              value: function(m) {
                var y = this, g = m.collapsed ? [m.index] : [m.index, m.index + m.length], k = [], P = this.scroll.length();
                return g.forEach(function(q, F) {
                  q = Math.min(P - 1, q);
                  var U = void 0, Z = y.scroll.leaf(q), B = T(Z, 2), D = B[0], w = B[1], j = D.position(w, F !== 0), I = T(j, 2);
                  U = I[0], w = I[1], k.push(U, w);
                }), k.length < 2 && (k = k.concat(k)), k;
              }
            }, {
              key: "scrollIntoView",
              value: function(m) {
                var y = this.lastRange;
                if (y != null) {
                  var g = this.getBounds(y.index, y.length);
                  if (g != null) {
                    var k = this.scroll.length() - 1, P = this.scroll.line(Math.min(y.index, k)), q = T(P, 1), F = q[0], U = F;
                    if (y.length > 0) {
                      var Z = this.scroll.line(Math.min(y.index + y.length, k)), B = T(Z, 1);
                      U = B[0];
                    }
                    if (!(F == null || U == null)) {
                      var D = m.getBoundingClientRect();
                      g.top < D.top ? m.scrollTop -= D.top - g.top : g.bottom > D.bottom && (m.scrollTop += g.bottom - D.bottom);
                    }
                  }
                }
              }
            }, {
              key: "setNativeRange",
              value: function(m, y) {
                var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m, k = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : y, P = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                if (n.info("setNativeRange", m, y, g, k), !(m != null && (this.root.parentNode == null || m.parentNode == null || g.parentNode == null))) {
                  var q = document.getSelection();
                  if (q != null)
                    if (m != null) {
                      this.hasFocus() || this.root.focus();
                      var F = (this.getNativeRange() || {}).native;
                      if (F == null || P || m !== F.startContainer || y !== F.startOffset || g !== F.endContainer || k !== F.endOffset) {
                        m.tagName == "BR" && (y = [].indexOf.call(m.parentNode.childNodes, m), m = m.parentNode), g.tagName == "BR" && (k = [].indexOf.call(g.parentNode.childNodes, g), g = g.parentNode);
                        var U = document.createRange();
                        U.setStart(m, y), U.setEnd(g, k), q.removeAllRanges(), q.addRange(U);
                      }
                    } else
                      q.removeAllRanges(), this.root.blur(), document.body.focus();
                }
              }
            }, {
              key: "setRange",
              value: function(m) {
                var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : s.default.sources.API;
                if (typeof y == "string" && (g = y, y = !1), n.info("setRange", m), m != null) {
                  var k = this.rangeToNative(m);
                  this.setNativeRange.apply(this, r(k).concat([y]));
                } else
                  this.setNativeRange(null);
                this.update(g);
              }
            }, {
              key: "update",
              value: function() {
                var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s.default.sources.USER, y = this.lastRange, g = this.getRange(), k = T(g, 2), P = k[0], q = k[1];
                if (this.lastRange = P, this.lastRange != null && (this.savedRange = this.lastRange), !(0, e.default)(y, this.lastRange)) {
                  var F;
                  !this.composing && q != null && q.native.collapsed && q.start.node !== this.cursor.textNode && this.cursor.restore();
                  var U = [s.default.events.SELECTION_CHANGE, (0, c.default)(this.lastRange), (0, c.default)(y), m];
                  if ((F = this.emitter).emit.apply(F, [s.default.events.EDITOR_CHANGE].concat(U)), m !== s.default.sources.SILENT) {
                    var Z;
                    (Z = this.emitter).emit.apply(Z, U);
                  }
                }
              }
            }]), E;
          }();
          function O(E, N) {
            try {
              N.parentNode;
            } catch {
              return !1;
            }
            return N instanceof Text && (N = N.parentNode), E.contains(N);
          }
          u.Range = h, u.default = S;
        },
        /* 16 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function s(a, l) {
              for (var i = 0; i < l.length; i++) {
                var r = l[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
              }
            }
            return function(a, l, i) {
              return l && s(a.prototype, l), i && s(a, i), a;
            };
          }(), A = function s(a, l, i) {
            a === null && (a = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(a, l);
            if (r === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : s(f, l, i);
            } else {
              if ("value" in r)
                return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            }
          }, _ = d(0), v = p(_);
          function p(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function c(s, a) {
            if (!(s instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : s;
          }
          function e(s, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            s.prototype = Object.create(a && a.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : s.__proto__ = a);
          }
          var t = function(s) {
            e(a, s);
            function a() {
              return c(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return T(a, [{
              key: "insertInto",
              value: function(i, r) {
                i.children.length === 0 ? A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "insertInto", this).call(this, i, r) : this.remove();
              }
            }, {
              key: "length",
              value: function() {
                return 0;
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }], [{
              key: "value",
              value: function() {
              }
            }]), a;
          }(v.default.Embed);
          t.blotName = "break", t.tagName = "BR", u.default = t;
        },
        /* 17 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
              e.__proto__ = t;
            } || function(e, t) {
              for (var s in t)
                t.hasOwnProperty(s) && (e[s] = t[s]);
            };
            return function(e, t) {
              o(e, t);
              function s() {
                this.constructor = e;
              }
              e.prototype = t === null ? Object.create(t) : (s.prototype = t.prototype, new s());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(44), _ = d(30), v = d(1), p = (
            /** @class */
            function(o) {
              T(e, o);
              function e(t) {
                var s = o.call(this, t) || this;
                return s.build(), s;
              }
              return e.prototype.appendChild = function(t) {
                this.insertBefore(t);
              }, e.prototype.attach = function() {
                o.prototype.attach.call(this), this.children.forEach(function(t) {
                  t.attach();
                });
              }, e.prototype.build = function() {
                var t = this;
                this.children = new A.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(s) {
                  try {
                    var a = c(s);
                    t.insertBefore(a, t.children.head || void 0);
                  } catch (l) {
                    if (l instanceof v.ParchmentError)
                      return;
                    throw l;
                  }
                });
              }, e.prototype.deleteAt = function(t, s) {
                if (t === 0 && s === this.length())
                  return this.remove();
                this.children.forEachAt(t, s, function(a, l, i) {
                  a.deleteAt(l, i);
                });
              }, e.prototype.descendant = function(t, s) {
                var a = this.children.find(s), l = a[0], i = a[1];
                return t.blotName == null && t(l) || t.blotName != null && l instanceof t ? [l, i] : l instanceof e ? l.descendant(t, i) : [null, -1];
              }, e.prototype.descendants = function(t, s, a) {
                s === void 0 && (s = 0), a === void 0 && (a = Number.MAX_VALUE);
                var l = [], i = a;
                return this.children.forEachAt(s, a, function(r, f, n) {
                  (t.blotName == null && t(r) || t.blotName != null && r instanceof t) && l.push(r), r instanceof e && (l = l.concat(r.descendants(t, f, i))), i -= n;
                }), l;
              }, e.prototype.detach = function() {
                this.children.forEach(function(t) {
                  t.detach();
                }), o.prototype.detach.call(this);
              }, e.prototype.formatAt = function(t, s, a, l) {
                this.children.forEachAt(t, s, function(i, r, f) {
                  i.formatAt(r, f, a, l);
                });
              }, e.prototype.insertAt = function(t, s, a) {
                var l = this.children.find(t), i = l[0], r = l[1];
                if (i)
                  i.insertAt(r, s, a);
                else {
                  var f = a == null ? v.create("text", s) : v.create(s, a);
                  this.appendChild(f);
                }
              }, e.prototype.insertBefore = function(t, s) {
                if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(a) {
                  return t instanceof a;
                }))
                  throw new v.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
                t.insertInto(this, s);
              }, e.prototype.length = function() {
                return this.children.reduce(function(t, s) {
                  return t + s.length();
                }, 0);
              }, e.prototype.moveChildren = function(t, s) {
                this.children.forEach(function(a) {
                  t.insertBefore(a, s);
                });
              }, e.prototype.optimize = function(t) {
                if (o.prototype.optimize.call(this, t), this.children.length === 0)
                  if (this.statics.defaultChild != null) {
                    var s = v.create(this.statics.defaultChild);
                    this.appendChild(s), s.optimize(t);
                  } else
                    this.remove();
              }, e.prototype.path = function(t, s) {
                s === void 0 && (s = !1);
                var a = this.children.find(t, s), l = a[0], i = a[1], r = [[this, t]];
                return l instanceof e ? r.concat(l.path(i, s)) : (l != null && r.push([l, i]), r);
              }, e.prototype.removeChild = function(t) {
                this.children.remove(t);
              }, e.prototype.replace = function(t) {
                t instanceof e && t.moveChildren(this), o.prototype.replace.call(this, t);
              }, e.prototype.split = function(t, s) {
                if (s === void 0 && (s = !1), !s) {
                  if (t === 0)
                    return this;
                  if (t === this.length())
                    return this.next;
                }
                var a = this.clone();
                return this.parent.insertBefore(a, this.next), this.children.forEachAt(t, this.length(), function(l, i, r) {
                  l = l.split(i, s), a.appendChild(l);
                }), a;
              }, e.prototype.unwrap = function() {
                this.moveChildren(this.parent, this.next), this.remove();
              }, e.prototype.update = function(t, s) {
                var a = this, l = [], i = [];
                t.forEach(function(r) {
                  r.target === a.domNode && r.type === "childList" && (l.push.apply(l, r.addedNodes), i.push.apply(i, r.removedNodes));
                }), i.forEach(function(r) {
                  if (!(r.parentNode != null && // @ts-ignore
                  r.tagName !== "IFRAME" && document.body.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                    var f = v.find(r);
                    f != null && (f.domNode.parentNode == null || f.domNode.parentNode === a.domNode) && f.detach();
                  }
                }), l.filter(function(r) {
                  return r.parentNode == a.domNode;
                }).sort(function(r, f) {
                  return r === f ? 0 : r.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
                }).forEach(function(r) {
                  var f = null;
                  r.nextSibling != null && (f = v.find(r.nextSibling));
                  var n = c(r);
                  (n.next != f || n.next == null) && (n.parent != null && n.parent.removeChild(a), a.insertBefore(n, f || void 0));
                });
              }, e;
            }(_.default)
          );
          function c(o) {
            var e = v.find(o);
            if (e == null)
              try {
                e = v.create(o);
              } catch {
                e = v.create(v.Scope.INLINE), [].slice.call(o.childNodes).forEach(function(s) {
                  e.domNode.appendChild(s);
                }), o.parentNode && o.parentNode.replaceChild(e.domNode, o), e.attach();
              }
            return e;
          }
          u.default = p;
        },
        /* 18 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
              e.__proto__ = t;
            } || function(e, t) {
              for (var s in t)
                t.hasOwnProperty(s) && (e[s] = t[s]);
            };
            return function(e, t) {
              o(e, t);
              function s() {
                this.constructor = e;
              }
              e.prototype = t === null ? Object.create(t) : (s.prototype = t.prototype, new s());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(12), _ = d(31), v = d(17), p = d(1), c = (
            /** @class */
            function(o) {
              T(e, o);
              function e(t) {
                var s = o.call(this, t) || this;
                return s.attributes = new _.default(s.domNode), s;
              }
              return e.formats = function(t) {
                if (typeof this.tagName == "string")
                  return !0;
                if (Array.isArray(this.tagName))
                  return t.tagName.toLowerCase();
              }, e.prototype.format = function(t, s) {
                var a = p.query(t);
                a instanceof A.default ? this.attributes.attribute(a, s) : s && a != null && (t !== this.statics.blotName || this.formats()[t] !== s) && this.replaceWith(t, s);
              }, e.prototype.formats = function() {
                var t = this.attributes.values(), s = this.statics.formats(this.domNode);
                return s != null && (t[this.statics.blotName] = s), t;
              }, e.prototype.replaceWith = function(t, s) {
                var a = o.prototype.replaceWith.call(this, t, s);
                return this.attributes.copy(a), a;
              }, e.prototype.update = function(t, s) {
                var a = this;
                o.prototype.update.call(this, t, s), t.some(function(l) {
                  return l.target === a.domNode && l.type === "attributes";
                }) && this.attributes.build();
              }, e.prototype.wrap = function(t, s) {
                var a = o.prototype.wrap.call(this, t, s);
                return a instanceof e && a.statics.scope === this.statics.scope && this.attributes.move(a), a;
              }, e;
            }(v.default)
          );
          u.default = c;
        },
        /* 19 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
              c.__proto__ = o;
            } || function(c, o) {
              for (var e in o)
                o.hasOwnProperty(e) && (c[e] = o[e]);
            };
            return function(c, o) {
              p(c, o);
              function e() {
                this.constructor = c;
              }
              c.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(30), _ = d(1), v = (
            /** @class */
            function(p) {
              T(c, p);
              function c() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return c.value = function(o) {
                return !0;
              }, c.prototype.index = function(o, e) {
                return this.domNode === o || this.domNode.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
              }, c.prototype.position = function(o, e) {
                var t = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                return o > 0 && (t += 1), [this.parent.domNode, t];
              }, c.prototype.value = function() {
                var o;
                return o = {}, o[this.statics.blotName] = this.statics.value(this.domNode) || !0, o;
              }, c.scope = _.Scope.INLINE_BLOT, c;
            }(A.default)
          );
          u.default = v;
        },
        /* 20 */
        /***/
        function(b, u, d) {
          var T = d(11), A = d(3), _ = {
            attributes: {
              compose: function(p, c, o) {
                typeof p != "object" && (p = {}), typeof c != "object" && (c = {});
                var e = A(!0, {}, c);
                o || (e = Object.keys(e).reduce(function(s, a) {
                  return e[a] != null && (s[a] = e[a]), s;
                }, {}));
                for (var t in p)
                  p[t] !== void 0 && c[t] === void 0 && (e[t] = p[t]);
                return Object.keys(e).length > 0 ? e : void 0;
              },
              diff: function(p, c) {
                typeof p != "object" && (p = {}), typeof c != "object" && (c = {});
                var o = Object.keys(p).concat(Object.keys(c)).reduce(function(e, t) {
                  return T(p[t], c[t]) || (e[t] = c[t] === void 0 ? null : c[t]), e;
                }, {});
                return Object.keys(o).length > 0 ? o : void 0;
              },
              transform: function(p, c, o) {
                if (typeof p != "object")
                  return c;
                if (typeof c == "object") {
                  if (!o)
                    return c;
                  var e = Object.keys(c).reduce(function(t, s) {
                    return p[s] === void 0 && (t[s] = c[s]), t;
                  }, {});
                  return Object.keys(e).length > 0 ? e : void 0;
                }
              }
            },
            iterator: function(p) {
              return new v(p);
            },
            length: function(p) {
              return typeof p.delete == "number" ? p.delete : typeof p.retain == "number" ? p.retain : typeof p.insert == "string" ? p.insert.length : 1;
            }
          };
          function v(p) {
            this.ops = p, this.index = 0, this.offset = 0;
          }
          v.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0;
          }, v.prototype.next = function(p) {
            p || (p = 1 / 0);
            var c = this.ops[this.index];
            if (c) {
              var o = this.offset, e = _.length(c);
              if (p >= e - o ? (p = e - o, this.index += 1, this.offset = 0) : this.offset += p, typeof c.delete == "number")
                return { delete: p };
              var t = {};
              return c.attributes && (t.attributes = c.attributes), typeof c.retain == "number" ? t.retain = p : typeof c.insert == "string" ? t.insert = c.insert.substr(o, p) : t.insert = c.insert, t;
            } else
              return { retain: 1 / 0 };
          }, v.prototype.peek = function() {
            return this.ops[this.index];
          }, v.prototype.peekLength = function() {
            return this.ops[this.index] ? _.length(this.ops[this.index]) - this.offset : 1 / 0;
          }, v.prototype.peekType = function() {
            return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
          }, v.prototype.rest = function() {
            if (this.hasNext()) {
              if (this.offset === 0)
                return this.ops.slice(this.index);
              var p = this.offset, c = this.index, o = this.next(), e = this.ops.slice(this.index);
              return this.offset = p, this.index = c, [o].concat(e);
            } else
              return [];
          }, b.exports = _;
        },
        /* 21 */
        /***/
        function(b, u) {
          var d = function() {
            function T(a, l) {
              return l != null && a instanceof l;
            }
            var A;
            try {
              A = Map;
            } catch {
              A = function() {
              };
            }
            var _;
            try {
              _ = Set;
            } catch {
              _ = function() {
              };
            }
            var v;
            try {
              v = Promise;
            } catch {
              v = function() {
              };
            }
            function p(a, l, i, r, f) {
              typeof l == "object" && (i = l.depth, r = l.prototype, f = l.includeNonEnumerable, l = l.circular);
              var n = [], h = [], S = typeof Buffer < "u";
              typeof l > "u" && (l = !0), typeof i > "u" && (i = 1 / 0);
              function O(E, N) {
                if (E === null)
                  return null;
                if (N === 0)
                  return E;
                var m, y;
                if (typeof E != "object")
                  return E;
                if (T(E, A))
                  m = new A();
                else if (T(E, _))
                  m = new _();
                else if (T(E, v))
                  m = new v(function(D, w) {
                    E.then(function(j) {
                      D(O(j, N - 1));
                    }, function(j) {
                      w(O(j, N - 1));
                    });
                  });
                else if (p.__isArray(E))
                  m = [];
                else if (p.__isRegExp(E))
                  m = new RegExp(E.source, s(E)), E.lastIndex && (m.lastIndex = E.lastIndex);
                else if (p.__isDate(E))
                  m = new Date(E.getTime());
                else {
                  if (S && Buffer.isBuffer(E))
                    return Buffer.allocUnsafe ? m = Buffer.allocUnsafe(E.length) : m = new Buffer(E.length), E.copy(m), m;
                  T(E, Error) ? m = Object.create(E) : typeof r > "u" ? (y = Object.getPrototypeOf(E), m = Object.create(y)) : (m = Object.create(r), y = r);
                }
                if (l) {
                  var g = n.indexOf(E);
                  if (g != -1)
                    return h[g];
                  n.push(E), h.push(m);
                }
                T(E, A) && E.forEach(function(D, w) {
                  var j = O(w, N - 1), I = O(D, N - 1);
                  m.set(j, I);
                }), T(E, _) && E.forEach(function(D) {
                  var w = O(D, N - 1);
                  m.add(w);
                });
                for (var k in E) {
                  var P;
                  y && (P = Object.getOwnPropertyDescriptor(y, k)), !(P && P.set == null) && (m[k] = O(E[k], N - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var q = Object.getOwnPropertySymbols(E), k = 0; k < q.length; k++) {
                    var F = q[k], U = Object.getOwnPropertyDescriptor(E, F);
                    U && !U.enumerable && !f || (m[F] = O(E[F], N - 1), U.enumerable || Object.defineProperty(m, F, {
                      enumerable: !1
                    }));
                  }
                if (f)
                  for (var Z = Object.getOwnPropertyNames(E), k = 0; k < Z.length; k++) {
                    var B = Z[k], U = Object.getOwnPropertyDescriptor(E, B);
                    U && U.enumerable || (m[B] = O(E[B], N - 1), Object.defineProperty(m, B, {
                      enumerable: !1
                    }));
                  }
                return m;
              }
              return O(a, i);
            }
            p.clonePrototype = function(l) {
              if (l === null)
                return null;
              var i = function() {
              };
              return i.prototype = l, new i();
            };
            function c(a) {
              return Object.prototype.toString.call(a);
            }
            p.__objToStr = c;
            function o(a) {
              return typeof a == "object" && c(a) === "[object Date]";
            }
            p.__isDate = o;
            function e(a) {
              return typeof a == "object" && c(a) === "[object Array]";
            }
            p.__isArray = e;
            function t(a) {
              return typeof a == "object" && c(a) === "[object RegExp]";
            }
            p.__isRegExp = t;
            function s(a) {
              var l = "";
              return a.global && (l += "g"), a.ignoreCase && (l += "i"), a.multiline && (l += "m"), l;
            }
            return p.__getRegExpFlags = s, p;
          }();
          typeof b == "object" && b.exports && (b.exports = d);
        },
        /* 22 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function m(y, g) {
              var k = [], P = !0, q = !1, F = void 0;
              try {
                for (var U = y[Symbol.iterator](), Z; !(P = (Z = U.next()).done) && (k.push(Z.value), !(g && k.length === g)); P = !0)
                  ;
              } catch (B) {
                q = !0, F = B;
              } finally {
                try {
                  !P && U.return && U.return();
                } finally {
                  if (q)
                    throw F;
                }
              }
              return k;
            }
            return function(y, g) {
              if (Array.isArray(y))
                return y;
              if (Symbol.iterator in Object(y))
                return m(y, g);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function m(y, g) {
              for (var k = 0; k < g.length; k++) {
                var P = g[k];
                P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(y, P.key, P);
              }
            }
            return function(y, g, k) {
              return g && m(y.prototype, g), k && m(y, k), y;
            };
          }(), _ = function m(y, g, k) {
            y === null && (y = Function.prototype);
            var P = Object.getOwnPropertyDescriptor(y, g);
            if (P === void 0) {
              var q = Object.getPrototypeOf(y);
              return q === null ? void 0 : m(q, g, k);
            } else {
              if ("value" in P)
                return P.value;
              var F = P.get;
              return F === void 0 ? void 0 : F.call(k);
            }
          }, v = d(0), p = n(v), c = d(8), o = n(c), e = d(4), t = n(e), s = d(16), a = n(s), l = d(13), i = n(l), r = d(25), f = n(r);
          function n(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function h(m, y) {
            if (!(m instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function S(m, y) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == "object" || typeof y == "function") ? y : m;
          }
          function O(m, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof y);
            m.prototype = Object.create(y && y.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(m, y) : m.__proto__ = y);
          }
          function E(m) {
            return m instanceof t.default || m instanceof e.BlockEmbed;
          }
          var N = function(m) {
            O(y, m);
            function y(g, k) {
              h(this, y);
              var P = S(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, g));
              return P.emitter = k.emitter, Array.isArray(k.whitelist) && (P.whitelist = k.whitelist.reduce(function(q, F) {
                return q[F] = !0, q;
              }, {})), P.domNode.addEventListener("DOMNodeInserted", function() {
              }), P.optimize(), P.enable(), P;
            }
            return A(y, [{
              key: "batchStart",
              value: function() {
                this.batch = !0;
              }
            }, {
              key: "batchEnd",
              value: function() {
                this.batch = !1, this.optimize();
              }
            }, {
              key: "deleteAt",
              value: function(k, P) {
                var q = this.line(k), F = T(q, 2), U = F[0], Z = F[1], B = this.line(k + P), D = T(B, 1), w = D[0];
                if (_(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "deleteAt", this).call(this, k, P), w != null && U !== w && Z > 0) {
                  if (U instanceof e.BlockEmbed || w instanceof e.BlockEmbed) {
                    this.optimize();
                    return;
                  }
                  if (U instanceof i.default) {
                    var j = U.newlineIndex(U.length(), !0);
                    if (j > -1 && (U = U.split(j + 1), U === w)) {
                      this.optimize();
                      return;
                    }
                  } else if (w instanceof i.default) {
                    var I = w.newlineIndex(0);
                    I > -1 && w.split(I + 1);
                  }
                  var H = w.children.head instanceof a.default ? null : w.children.head;
                  U.moveChildren(w, H), U.remove();
                }
                this.optimize();
              }
            }, {
              key: "enable",
              value: function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.domNode.setAttribute("contenteditable", k);
              }
            }, {
              key: "formatAt",
              value: function(k, P, q, F) {
                this.whitelist != null && !this.whitelist[q] || (_(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "formatAt", this).call(this, k, P, q, F), this.optimize());
              }
            }, {
              key: "insertAt",
              value: function(k, P, q) {
                if (!(q != null && this.whitelist != null && !this.whitelist[P])) {
                  if (k >= this.length())
                    if (q == null || p.default.query(P, p.default.Scope.BLOCK) == null) {
                      var F = p.default.create(this.statics.defaultChild);
                      this.appendChild(F), q == null && P.endsWith(`
`) && (P = P.slice(0, -1)), F.insertAt(0, P, q);
                    } else {
                      var U = p.default.create(P, q);
                      this.appendChild(U);
                    }
                  else
                    _(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "insertAt", this).call(this, k, P, q);
                  this.optimize();
                }
              }
            }, {
              key: "insertBefore",
              value: function(k, P) {
                if (k.statics.scope === p.default.Scope.INLINE_BLOT) {
                  var q = p.default.create(this.statics.defaultChild);
                  q.appendChild(k), k = q;
                }
                _(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "insertBefore", this).call(this, k, P);
              }
            }, {
              key: "leaf",
              value: function(k) {
                return this.path(k).pop() || [null, -1];
              }
            }, {
              key: "line",
              value: function(k) {
                return k === this.length() ? this.line(k - 1) : this.descendant(E, k);
              }
            }, {
              key: "lines",
              value: function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, q = function F(U, Z, B) {
                  var D = [], w = B;
                  return U.children.forEachAt(Z, B, function(j, I, H) {
                    E(j) ? D.push(j) : j instanceof p.default.Container && (D = D.concat(F(j, I, w))), w -= H;
                  }), D;
                };
                return q(this, k, P);
              }
            }, {
              key: "optimize",
              value: function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.batch !== !0 && (_(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "optimize", this).call(this, k, P), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_OPTIMIZE, k, P));
              }
            }, {
              key: "path",
              value: function(k) {
                return _(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "path", this).call(this, k).slice(1);
              }
            }, {
              key: "update",
              value: function(k) {
                if (this.batch !== !0) {
                  var P = o.default.sources.USER;
                  typeof k == "string" && (P = k), Array.isArray(k) || (k = this.observer.takeRecords()), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_BEFORE_UPDATE, P, k), _(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "update", this).call(this, k.concat([])), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_UPDATE, P, k);
                }
              }
            }]), y;
          }(p.default.Scroll);
          N.blotName = "scroll", N.className = "ql-editor", N.tagName = "DIV", N.defaultChild = "block", N.allowedChildren = [t.default, e.BlockEmbed, f.default], u.default = N;
        },
        /* 23 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.SHORTKEY = u.default = void 0;
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
            return typeof R;
          } : function(R) {
            return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
          }, A = /* @__PURE__ */ function() {
            function R(C, z) {
              var K = [], W = !0, te = !1, ne = void 0;
              try {
                for (var ie = C[Symbol.iterator](), ue; !(W = (ue = ie.next()).done) && (K.push(ue.value), !(z && K.length === z)); W = !0)
                  ;
              } catch (ce) {
                te = !0, ne = ce;
              } finally {
                try {
                  !W && ie.return && ie.return();
                } finally {
                  if (te)
                    throw ne;
                }
              }
              return K;
            }
            return function(C, z) {
              if (Array.isArray(C))
                return C;
              if (Symbol.iterator in Object(C))
                return R(C, z);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function R(C, z) {
              for (var K = 0; K < z.length; K++) {
                var W = z[K];
                W.enumerable = W.enumerable || !1, W.configurable = !0, "value" in W && (W.writable = !0), Object.defineProperty(C, W.key, W);
              }
            }
            return function(C, z, K) {
              return z && R(C.prototype, z), K && R(C, K), C;
            };
          }(), v = d(21), p = m(v), c = d(11), o = m(c), e = d(3), t = m(e), s = d(2), a = m(s), l = d(20), i = m(l), r = d(0), f = m(r), n = d(5), h = m(n), S = d(10), O = m(S), E = d(9), N = m(E);
          function m(R) {
            return R && R.__esModule ? R : { default: R };
          }
          function y(R, C, z) {
            return C in R ? Object.defineProperty(R, C, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : R[C] = z, R;
          }
          function g(R, C) {
            if (!(R instanceof C))
              throw new TypeError("Cannot call a class as a function");
          }
          function k(R, C) {
            if (!R)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return C && (typeof C == "object" || typeof C == "function") ? C : R;
          }
          function P(R, C) {
            if (typeof C != "function" && C !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof C);
            R.prototype = Object.create(C && C.prototype, { constructor: { value: R, enumerable: !1, writable: !0, configurable: !0 } }), C && (Object.setPrototypeOf ? Object.setPrototypeOf(R, C) : R.__proto__ = C);
          }
          var q = (0, O.default)("quill:keyboard"), F = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", U = function(R) {
            P(C, R), _(C, null, [{
              key: "match",
              value: function(K, W) {
                return W = $(W), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(te) {
                  return !!W[te] !== K[te] && W[te] !== null;
                }) ? !1 : W.key === (K.which || K.keyCode);
              }
            }]);
            function C(z, K) {
              g(this, C);
              var W = k(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, z, K));
              return W.bindings = {}, Object.keys(W.options.bindings).forEach(function(te) {
                te === "list autofill" && z.scroll.whitelist != null && !z.scroll.whitelist.list || W.options.bindings[te] && W.addBinding(W.options.bindings[te]);
              }), W.addBinding({ key: C.keys.ENTER, shiftKey: null }, j), W.addBinding({ key: C.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
              }), /Firefox/i.test(navigator.userAgent) ? (W.addBinding({ key: C.keys.BACKSPACE }, { collapsed: !0 }, B), W.addBinding({ key: C.keys.DELETE }, { collapsed: !0 }, D)) : (W.addBinding({ key: C.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, B), W.addBinding({ key: C.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, D)), W.addBinding({ key: C.keys.BACKSPACE }, { collapsed: !1 }, w), W.addBinding({ key: C.keys.DELETE }, { collapsed: !1 }, w), W.addBinding({ key: C.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, B), W.listen(), W;
            }
            return _(C, [{
              key: "addBinding",
              value: function(K) {
                var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ne = $(K);
                if (ne == null || ne.key == null)
                  return q.warn("Attempted to add invalid keyboard binding", ne);
                typeof W == "function" && (W = { handler: W }), typeof te == "function" && (te = { handler: te }), ne = (0, t.default)(ne, W, te), this.bindings[ne.key] = this.bindings[ne.key] || [], this.bindings[ne.key].push(ne);
              }
            }, {
              key: "listen",
              value: function() {
                var K = this;
                this.quill.root.addEventListener("keydown", function(W) {
                  if (!W.defaultPrevented) {
                    var te = W.which || W.keyCode, ne = (K.bindings[te] || []).filter(function(ge) {
                      return C.match(W, ge);
                    });
                    if (ne.length !== 0) {
                      var ie = K.quill.getSelection();
                      if (!(ie == null || !K.quill.hasFocus())) {
                        var ue = K.quill.getLine(ie.index), ce = A(ue, 2), Oe = ce[0], me = ce[1], G = K.quill.getLeaf(ie.index), V = A(G, 2), Q = V[0], ee = V[1], Y = ie.length === 0 ? [Q, ee] : K.quill.getLeaf(ie.index + ie.length), oe = A(Y, 2), ae = oe[0], le = oe[1], Ee = Q instanceof f.default.Text ? Q.value().slice(0, ee) : "", Ae = ae instanceof f.default.Text ? ae.value().slice(le) : "", pe = {
                          collapsed: ie.length === 0,
                          empty: ie.length === 0 && Oe.length() <= 1,
                          format: K.quill.getFormat(ie),
                          offset: me,
                          prefix: Ee,
                          suffix: Ae
                        }, ze = ne.some(function(ge) {
                          if (ge.collapsed != null && ge.collapsed !== pe.collapsed || ge.empty != null && ge.empty !== pe.empty || ge.offset != null && ge.offset !== pe.offset)
                            return !1;
                          if (Array.isArray(ge.format)) {
                            if (ge.format.every(function(ke) {
                              return pe.format[ke] == null;
                            }))
                              return !1;
                          } else if (T(ge.format) === "object" && !Object.keys(ge.format).every(function(ke) {
                            return ge.format[ke] === !0 ? pe.format[ke] != null : ge.format[ke] === !1 ? pe.format[ke] == null : (0, o.default)(ge.format[ke], pe.format[ke]);
                          }))
                            return !1;
                          return ge.prefix != null && !ge.prefix.test(pe.prefix) || ge.suffix != null && !ge.suffix.test(pe.suffix) ? !1 : ge.handler.call(K, ie, pe) !== !0;
                        });
                        ze && W.preventDefault();
                      }
                    }
                  }
                });
              }
            }]), C;
          }(N.default);
          U.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          }, U.DEFAULTS = {
            bindings: {
              bold: H("bold"),
              italic: H("italic"),
              underline: H("underline"),
              indent: {
                // highlight tab or tab at beginning of list, indent or blockquote
                key: U.keys.TAB,
                format: ["blockquote", "indent", "list"],
                handler: function(C, z) {
                  if (z.collapsed && z.offset !== 0)
                    return !0;
                  this.quill.format("indent", "+1", h.default.sources.USER);
                }
              },
              outdent: {
                key: U.keys.TAB,
                shiftKey: !0,
                format: ["blockquote", "indent", "list"],
                // highlight tab or tab at beginning of list, indent or blockquote
                handler: function(C, z) {
                  if (z.collapsed && z.offset !== 0)
                    return !0;
                  this.quill.format("indent", "-1", h.default.sources.USER);
                }
              },
              "outdent backspace": {
                key: U.keys.BACKSPACE,
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ["indent", "list"],
                offset: 0,
                handler: function(C, z) {
                  z.format.indent != null ? this.quill.format("indent", "-1", h.default.sources.USER) : z.format.list != null && this.quill.format("list", !1, h.default.sources.USER);
                }
              },
              "indent code-block": I(!0),
              "outdent code-block": I(!1),
              "remove tab": {
                key: U.keys.TAB,
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler: function(C) {
                  this.quill.deleteText(C.index - 1, 1, h.default.sources.USER);
                }
              },
              tab: {
                key: U.keys.TAB,
                handler: function(C) {
                  this.quill.history.cutoff();
                  var z = new a.default().retain(C.index).delete(C.length).insert("	");
                  this.quill.updateContents(z, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(C.index + 1, h.default.sources.SILENT);
                }
              },
              "list empty enter": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: ["list"],
                empty: !0,
                handler: function(C, z) {
                  this.quill.format("list", !1, h.default.sources.USER), z.format.indent && this.quill.format("indent", !1, h.default.sources.USER);
                }
              },
              "checklist enter": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: { list: "checked" },
                handler: function(C) {
                  var z = this.quill.getLine(C.index), K = A(z, 2), W = K[0], te = K[1], ne = (0, t.default)({}, W.formats(), { list: "checked" }), ie = new a.default().retain(C.index).insert(`
`, ne).retain(W.length() - te - 1).retain(1, { list: "unchecked" });
                  this.quill.updateContents(ie, h.default.sources.USER), this.quill.setSelection(C.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "header enter": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: ["header"],
                suffix: /^$/,
                handler: function(C, z) {
                  var K = this.quill.getLine(C.index), W = A(K, 2), te = W[0], ne = W[1], ie = new a.default().retain(C.index).insert(`
`, z.format).retain(te.length() - ne - 1).retain(1, { header: null });
                  this.quill.updateContents(ie, h.default.sources.USER), this.quill.setSelection(C.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "list autofill": {
                key: " ",
                collapsed: !0,
                format: { list: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function(C, z) {
                  var K = z.prefix.length, W = this.quill.getLine(C.index), te = A(W, 2), ne = te[0], ie = te[1];
                  if (ie > K)
                    return !0;
                  var ue = void 0;
                  switch (z.prefix.trim()) {
                    case "[]":
                    case "[ ]":
                      ue = "unchecked";
                      break;
                    case "[x]":
                      ue = "checked";
                      break;
                    case "-":
                    case "*":
                      ue = "bullet";
                      break;
                    default:
                      ue = "ordered";
                  }
                  this.quill.insertText(C.index, " ", h.default.sources.USER), this.quill.history.cutoff();
                  var ce = new a.default().retain(C.index - ie).delete(K + 1).retain(ne.length() - 2 - ie).retain(1, { list: ue });
                  this.quill.updateContents(ce, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(C.index - K, h.default.sources.SILENT);
                }
              },
              "code exit": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: ["code-block"],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function(C) {
                  var z = this.quill.getLine(C.index), K = A(z, 2), W = K[0], te = K[1], ne = new a.default().retain(C.index + W.length() - te - 2).retain(1, { "code-block": null }).delete(1);
                  this.quill.updateContents(ne, h.default.sources.USER);
                }
              },
              "embed left": Z(U.keys.LEFT, !1),
              "embed left shift": Z(U.keys.LEFT, !0),
              "embed right": Z(U.keys.RIGHT, !1),
              "embed right shift": Z(U.keys.RIGHT, !0)
            }
          };
          function Z(R, C) {
            var z, K = R === U.keys.LEFT ? "prefix" : "suffix";
            return z = {
              key: R,
              shiftKey: C,
              altKey: null
            }, y(z, K, /^$/), y(z, "handler", function(te) {
              var ne = te.index;
              R === U.keys.RIGHT && (ne += te.length + 1);
              var ie = this.quill.getLeaf(ne), ue = A(ie, 1), ce = ue[0];
              return ce instanceof f.default.Embed ? (R === U.keys.LEFT ? C ? this.quill.setSelection(te.index - 1, te.length + 1, h.default.sources.USER) : this.quill.setSelection(te.index - 1, h.default.sources.USER) : C ? this.quill.setSelection(te.index, te.length + 1, h.default.sources.USER) : this.quill.setSelection(te.index + te.length + 1, h.default.sources.USER), !1) : !0;
            }), z;
          }
          function B(R, C) {
            if (!(R.index === 0 || this.quill.getLength() <= 1)) {
              var z = this.quill.getLine(R.index), K = A(z, 1), W = K[0], te = {};
              if (C.offset === 0) {
                var ne = this.quill.getLine(R.index - 1), ie = A(ne, 1), ue = ie[0];
                if (ue != null && ue.length() > 1) {
                  var ce = W.formats(), Oe = this.quill.getFormat(R.index - 1, 1);
                  te = i.default.attributes.diff(ce, Oe) || {};
                }
              }
              var me = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(C.prefix) ? 2 : 1;
              this.quill.deleteText(R.index - me, me, h.default.sources.USER), Object.keys(te).length > 0 && this.quill.formatLine(R.index - me, me, te, h.default.sources.USER), this.quill.focus();
            }
          }
          function D(R, C) {
            var z = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(C.suffix) ? 2 : 1;
            if (!(R.index >= this.quill.getLength() - z)) {
              var K = {}, W = 0, te = this.quill.getLine(R.index), ne = A(te, 1), ie = ne[0];
              if (C.offset >= ie.length() - 1) {
                var ue = this.quill.getLine(R.index + 1), ce = A(ue, 1), Oe = ce[0];
                if (Oe) {
                  var me = ie.formats(), G = this.quill.getFormat(R.index, 1);
                  K = i.default.attributes.diff(me, G) || {}, W = Oe.length();
                }
              }
              this.quill.deleteText(R.index, z, h.default.sources.USER), Object.keys(K).length > 0 && this.quill.formatLine(R.index + W - 1, z, K, h.default.sources.USER);
            }
          }
          function w(R) {
            var C = this.quill.getLines(R), z = {};
            if (C.length > 1) {
              var K = C[0].formats(), W = C[C.length - 1].formats();
              z = i.default.attributes.diff(W, K) || {};
            }
            this.quill.deleteText(R, h.default.sources.USER), Object.keys(z).length > 0 && this.quill.formatLine(R.index, 1, z, h.default.sources.USER), this.quill.setSelection(R.index, h.default.sources.SILENT), this.quill.focus();
          }
          function j(R, C) {
            var z = this;
            R.length > 0 && this.quill.scroll.deleteAt(R.index, R.length);
            var K = Object.keys(C.format).reduce(function(W, te) {
              return f.default.query(te, f.default.Scope.BLOCK) && !Array.isArray(C.format[te]) && (W[te] = C.format[te]), W;
            }, {});
            this.quill.insertText(R.index, `
`, K, h.default.sources.USER), this.quill.setSelection(R.index + 1, h.default.sources.SILENT), this.quill.focus(), Object.keys(C.format).forEach(function(W) {
              K[W] == null && (Array.isArray(C.format[W]) || W !== "link" && z.quill.format(W, C.format[W], h.default.sources.USER));
            });
          }
          function I(R) {
            return {
              key: U.keys.TAB,
              shiftKey: !R,
              format: { "code-block": !0 },
              handler: function(z) {
                var K = f.default.query("code-block"), W = z.index, te = z.length, ne = this.quill.scroll.descendant(K, W), ie = A(ne, 2), ue = ie[0], ce = ie[1];
                if (ue != null) {
                  var Oe = this.quill.getIndex(ue), me = ue.newlineIndex(ce, !0) + 1, G = ue.newlineIndex(Oe + ce + te), V = ue.domNode.textContent.slice(me, G).split(`
`);
                  ce = 0, V.forEach(function(Q, ee) {
                    R ? (ue.insertAt(me + ce, K.TAB), ce += K.TAB.length, ee === 0 ? W += K.TAB.length : te += K.TAB.length) : Q.startsWith(K.TAB) && (ue.deleteAt(me + ce, K.TAB.length), ce -= K.TAB.length, ee === 0 ? W -= K.TAB.length : te -= K.TAB.length), ce += Q.length + 1;
                  }), this.quill.update(h.default.sources.USER), this.quill.setSelection(W, te, h.default.sources.SILENT);
                }
              }
            };
          }
          function H(R) {
            return {
              key: R[0].toUpperCase(),
              shortKey: !0,
              handler: function(z, K) {
                this.quill.format(R, !K.format[R], h.default.sources.USER);
              }
            };
          }
          function $(R) {
            if (typeof R == "string" || typeof R == "number")
              return $({ key: R });
            if ((typeof R > "u" ? "undefined" : T(R)) === "object" && (R = (0, p.default)(R, !1)), typeof R.key == "string")
              if (U.keys[R.key.toUpperCase()] != null)
                R.key = U.keys[R.key.toUpperCase()];
              else if (R.key.length === 1)
                R.key = R.key.toUpperCase().charCodeAt(0);
              else
                return null;
            return R.shortKey && (R[F] = R.shortKey, delete R.shortKey), R;
          }
          u.default = U, u.SHORTKEY = F;
        },
        /* 24 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function i(r, f) {
              var n = [], h = !0, S = !1, O = void 0;
              try {
                for (var E = r[Symbol.iterator](), N; !(h = (N = E.next()).done) && (n.push(N.value), !(f && n.length === f)); h = !0)
                  ;
              } catch (m) {
                S = !0, O = m;
              } finally {
                try {
                  !h && E.return && E.return();
                } finally {
                  if (S)
                    throw O;
                }
              }
              return n;
            }
            return function(r, f) {
              if (Array.isArray(r))
                return r;
              if (Symbol.iterator in Object(r))
                return i(r, f);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = function i(r, f, n) {
            r === null && (r = Function.prototype);
            var h = Object.getOwnPropertyDescriptor(r, f);
            if (h === void 0) {
              var S = Object.getPrototypeOf(r);
              return S === null ? void 0 : i(S, f, n);
            } else {
              if ("value" in h)
                return h.value;
              var O = h.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, _ = /* @__PURE__ */ function() {
            function i(r, f) {
              for (var n = 0; n < f.length; n++) {
                var h = f[n];
                h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(r, h.key, h);
              }
            }
            return function(r, f, n) {
              return f && i(r.prototype, f), n && i(r, n), r;
            };
          }(), v = d(0), p = e(v), c = d(7), o = e(c);
          function e(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function t(i, r) {
            if (!(i instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(i, r) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : i;
          }
          function a(i, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            i.prototype = Object.create(r && r.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(i, r) : i.__proto__ = r);
          }
          var l = function(i) {
            a(r, i), _(r, null, [{
              key: "value",
              value: function() {
              }
            }]);
            function r(f, n) {
              t(this, r);
              var h = s(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, f));
              return h.selection = n, h.textNode = document.createTextNode(r.CONTENTS), h.domNode.appendChild(h.textNode), h._length = 0, h;
            }
            return _(r, [{
              key: "detach",
              value: function() {
                this.parent != null && this.parent.removeChild(this);
              }
            }, {
              key: "format",
              value: function(n, h) {
                if (this._length !== 0)
                  return A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, n, h);
                for (var S = this, O = 0; S != null && S.statics.scope !== p.default.Scope.BLOCK_BLOT; )
                  O += S.offset(S.parent), S = S.parent;
                S != null && (this._length = r.CONTENTS.length, S.optimize(), S.formatAt(O, r.CONTENTS.length, n, h), this._length = 0);
              }
            }, {
              key: "index",
              value: function(n, h) {
                return n === this.textNode ? 0 : A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "index", this).call(this, n, h);
              }
            }, {
              key: "length",
              value: function() {
                return this._length;
              }
            }, {
              key: "position",
              value: function() {
                return [this.textNode, this.textNode.data.length];
              }
            }, {
              key: "remove",
              value: function() {
                A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "remove", this).call(this), this.parent = null;
              }
            }, {
              key: "restore",
              value: function() {
                if (!(this.selection.composing || this.parent == null)) {
                  var n = this.textNode, h = this.selection.getNativeRange(), S = void 0, O = void 0, E = void 0;
                  if (h != null && h.start.node === n && h.end.node === n) {
                    var N = [n, h.start.offset, h.end.offset];
                    S = N[0], O = N[1], E = N[2];
                  }
                  for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                  if (this.textNode.data !== r.CONTENTS) {
                    var m = this.textNode.data.split(r.CONTENTS).join("");
                    this.next instanceof o.default ? (S = this.next.domNode, this.next.insertAt(0, m), this.textNode.data = r.CONTENTS) : (this.textNode.data = m, this.parent.insertBefore(p.default.create(this.textNode), this), this.textNode = document.createTextNode(r.CONTENTS), this.domNode.appendChild(this.textNode));
                  }
                  if (this.remove(), O != null) {
                    var y = [O, E].map(function(k) {
                      return Math.max(0, Math.min(S.data.length, k - 1));
                    }), g = T(y, 2);
                    return O = g[0], E = g[1], {
                      startNode: S,
                      startOffset: O,
                      endNode: S,
                      endOffset: E
                    };
                  }
                }
              }
            }, {
              key: "update",
              value: function(n, h) {
                var S = this;
                if (n.some(function(E) {
                  return E.type === "characterData" && E.target === S.textNode;
                })) {
                  var O = this.restore();
                  O && (h.range = O);
                }
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }]), r;
          }(p.default.Embed);
          l.blotName = "cursor", l.className = "ql-cursor", l.tagName = "span", l.CONTENTS = "\uFEFF", u.default = l;
        },
        /* 25 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(0), A = p(T), _ = d(4), v = p(_);
          function p(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function c(s, a) {
            if (!(s instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : s;
          }
          function e(s, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            s.prototype = Object.create(a && a.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : s.__proto__ = a);
          }
          var t = function(s) {
            e(a, s);
            function a() {
              return c(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(A.default.Container);
          t.allowedChildren = [v.default, _.BlockEmbed, t], u.default = t;
        },
        /* 26 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.ColorStyle = u.ColorClass = u.ColorAttributor = void 0;
          var T = /* @__PURE__ */ function() {
            function l(i, r) {
              for (var f = 0; f < r.length; f++) {
                var n = r[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
              }
            }
            return function(i, r, f) {
              return r && l(i.prototype, r), f && l(i, f), i;
            };
          }(), A = function l(i, r, f) {
            i === null && (i = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(i, r);
            if (n === void 0) {
              var h = Object.getPrototypeOf(i);
              return h === null ? void 0 : l(h, r, f);
            } else {
              if ("value" in n)
                return n.value;
              var S = n.get;
              return S === void 0 ? void 0 : S.call(f);
            }
          }, _ = d(0), v = p(_);
          function p(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function c(l, i) {
            if (!(l instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(l, i) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : l;
          }
          function e(l, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            l.prototype = Object.create(i && i.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(l, i) : l.__proto__ = i);
          }
          var t = function(l) {
            e(i, l);
            function i() {
              return c(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
            }
            return T(i, [{
              key: "value",
              value: function(f) {
                var n = A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, f);
                return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(h) {
                  return ("00" + parseInt(h).toString(16)).slice(-2);
                }).join("")) : n;
              }
            }]), i;
          }(v.default.Attributor.Style), s = new v.default.Attributor.Class("color", "ql-color", {
            scope: v.default.Scope.INLINE
          }), a = new t("color", "color", {
            scope: v.default.Scope.INLINE
          });
          u.ColorAttributor = t, u.ColorClass = s, u.ColorStyle = a;
        },
        /* 27 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.sanitize = u.default = void 0;
          var T = /* @__PURE__ */ function() {
            function a(l, i) {
              for (var r = 0; r < i.length; r++) {
                var f = i[r];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
              }
            }
            return function(l, i, r) {
              return i && a(l.prototype, i), r && a(l, r), l;
            };
          }(), A = function a(l, i, r) {
            l === null && (l = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(l, i);
            if (f === void 0) {
              var n = Object.getPrototypeOf(l);
              return n === null ? void 0 : a(n, i, r);
            } else {
              if ("value" in f)
                return f.value;
              var h = f.get;
              return h === void 0 ? void 0 : h.call(r);
            }
          }, _ = d(6), v = p(_);
          function p(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function c(a, l) {
            if (!(a instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == "object" || typeof l == "function") ? l : a;
          }
          function e(a, l) {
            if (typeof l != "function" && l !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof l);
            a.prototype = Object.create(l && l.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
          }
          var t = function(a) {
            e(l, a);
            function l() {
              return c(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
            }
            return T(l, [{
              key: "format",
              value: function(r, f) {
                if (r !== this.statics.blotName || !f)
                  return A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "format", this).call(this, r, f);
                f = this.constructor.sanitize(f), this.domNode.setAttribute("href", f);
              }
            }], [{
              key: "create",
              value: function(r) {
                var f = A(l.__proto__ || Object.getPrototypeOf(l), "create", this).call(this, r);
                return r = this.sanitize(r), f.setAttribute("href", r), f.setAttribute("rel", "noopener noreferrer"), f.setAttribute("target", "_blank"), f;
              }
            }, {
              key: "formats",
              value: function(r) {
                return r.getAttribute("href");
              }
            }, {
              key: "sanitize",
              value: function(r) {
                return s(r, this.PROTOCOL_WHITELIST) ? r : this.SANITIZED_URL;
              }
            }]), l;
          }(v.default);
          t.blotName = "link", t.tagName = "A", t.SANITIZED_URL = "about:blank", t.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
          function s(a, l) {
            var i = document.createElement("a");
            i.href = a;
            var r = i.href.slice(0, i.href.indexOf(":"));
            return l.indexOf(r) > -1;
          }
          u.default = t, u.sanitize = s;
        },
        /* 28 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
            return typeof l;
          } : function(l) {
            return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
          }, A = /* @__PURE__ */ function() {
            function l(i, r) {
              for (var f = 0; f < r.length; f++) {
                var n = r[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
              }
            }
            return function(i, r, f) {
              return r && l(i.prototype, r), f && l(i, f), i;
            };
          }(), _ = d(23), v = o(_), p = d(107), c = o(p);
          function o(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function e(l, i) {
            if (!(l instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          var t = 0;
          function s(l, i) {
            l.setAttribute(i, l.getAttribute(i) !== "true");
          }
          var a = function() {
            function l(i) {
              var r = this;
              e(this, l), this.select = i, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                r.togglePicker();
              }), this.label.addEventListener("keydown", function(f) {
                switch (f.keyCode) {
                  case v.default.keys.ENTER:
                    r.togglePicker();
                    break;
                  case v.default.keys.ESCAPE:
                    r.escape(), f.preventDefault();
                    break;
                }
              }), this.select.addEventListener("change", this.update.bind(this));
            }
            return A(l, [{
              key: "togglePicker",
              value: function() {
                this.container.classList.toggle("ql-expanded"), s(this.label, "aria-expanded"), s(this.options, "aria-hidden");
              }
            }, {
              key: "buildItem",
              value: function(r) {
                var f = this, n = document.createElement("span");
                return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), r.hasAttribute("value") && n.setAttribute("data-value", r.getAttribute("value")), r.textContent && n.setAttribute("data-label", r.textContent), n.addEventListener("click", function() {
                  f.selectItem(n, !0);
                }), n.addEventListener("keydown", function(h) {
                  switch (h.keyCode) {
                    case v.default.keys.ENTER:
                      f.selectItem(n, !0), h.preventDefault();
                      break;
                    case v.default.keys.ESCAPE:
                      f.escape(), h.preventDefault();
                      break;
                  }
                }), n;
              }
            }, {
              key: "buildLabel",
              value: function() {
                var r = document.createElement("span");
                return r.classList.add("ql-picker-label"), r.innerHTML = c.default, r.tabIndex = "0", r.setAttribute("role", "button"), r.setAttribute("aria-expanded", "false"), this.container.appendChild(r), r;
              }
            }, {
              key: "buildOptions",
              value: function() {
                var r = this, f = document.createElement("span");
                f.classList.add("ql-picker-options"), f.setAttribute("aria-hidden", "true"), f.tabIndex = "-1", f.id = "ql-picker-options-" + t, t += 1, this.label.setAttribute("aria-controls", f.id), this.options = f, [].slice.call(this.select.options).forEach(function(n) {
                  var h = r.buildItem(n);
                  f.appendChild(h), n.selected === !0 && r.selectItem(h);
                }), this.container.appendChild(f);
              }
            }, {
              key: "buildPicker",
              value: function() {
                var r = this;
                [].slice.call(this.select.attributes).forEach(function(f) {
                  r.container.setAttribute(f.name, f.value);
                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
              }
            }, {
              key: "escape",
              value: function() {
                var r = this;
                this.close(), setTimeout(function() {
                  return r.label.focus();
                }, 1);
              }
            }, {
              key: "close",
              value: function() {
                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
              }
            }, {
              key: "selectItem",
              value: function(r) {
                var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.container.querySelector(".ql-selected");
                if (r !== n && (n != null && n.classList.remove("ql-selected"), r != null && (r.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(r.parentNode.children, r), r.hasAttribute("data-value") ? this.label.setAttribute("data-value", r.getAttribute("data-value")) : this.label.removeAttribute("data-value"), r.hasAttribute("data-label") ? this.label.setAttribute("data-label", r.getAttribute("data-label")) : this.label.removeAttribute("data-label"), f))) {
                  if (typeof Event == "function")
                    this.select.dispatchEvent(new Event("change"));
                  else if ((typeof Event > "u" ? "undefined" : T(Event)) === "object") {
                    var h = document.createEvent("Event");
                    h.initEvent("change", !0, !0), this.select.dispatchEvent(h);
                  }
                  this.close();
                }
              }
            }, {
              key: "update",
              value: function() {
                var r = void 0;
                if (this.select.selectedIndex > -1) {
                  var f = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                  r = this.select.options[this.select.selectedIndex], this.selectItem(f);
                } else
                  this.selectItem(null);
                var n = r != null && r !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", n);
              }
            }]), l;
          }();
          u.default = a;
        },
        /* 29 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(0), A = q(T), _ = d(5), v = q(_), p = d(4), c = q(p), o = d(16), e = q(o), t = d(25), s = q(t), a = d(24), l = q(a), i = d(35), r = q(i), f = d(6), n = q(f), h = d(22), S = q(h), O = d(7), E = q(O), N = d(55), m = q(N), y = d(42), g = q(y), k = d(23), P = q(k);
          function q(F) {
            return F && F.__esModule ? F : { default: F };
          }
          v.default.register({
            "blots/block": c.default,
            "blots/block/embed": p.BlockEmbed,
            "blots/break": e.default,
            "blots/container": s.default,
            "blots/cursor": l.default,
            "blots/embed": r.default,
            "blots/inline": n.default,
            "blots/scroll": S.default,
            "blots/text": E.default,
            "modules/clipboard": m.default,
            "modules/history": g.default,
            "modules/keyboard": P.default
          }), A.default.register(c.default, e.default, l.default, n.default, S.default, E.default), u.default = v.default;
        },
        /* 30 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", { value: !0 });
          var T = d(1), A = (
            /** @class */
            function() {
              function _(v) {
                this.domNode = v, this.domNode[T.DATA_KEY] = { blot: this };
              }
              return Object.defineProperty(_.prototype, "statics", {
                // Hack for accessing inherited static methods
                get: function() {
                  return this.constructor;
                },
                enumerable: !0,
                configurable: !0
              }), _.create = function(v) {
                if (this.tagName == null)
                  throw new T.ParchmentError("Blot definition missing tagName");
                var p;
                return Array.isArray(this.tagName) ? (typeof v == "string" && (v = v.toUpperCase(), parseInt(v).toString() === v && (v = parseInt(v))), typeof v == "number" ? p = document.createElement(this.tagName[v - 1]) : this.tagName.indexOf(v) > -1 ? p = document.createElement(v) : p = document.createElement(this.tagName[0])) : p = document.createElement(this.tagName), this.className && p.classList.add(this.className), p;
              }, _.prototype.attach = function() {
                this.parent != null && (this.scroll = this.parent.scroll);
              }, _.prototype.clone = function() {
                var v = this.domNode.cloneNode(!1);
                return T.create(v);
              }, _.prototype.detach = function() {
                this.parent != null && this.parent.removeChild(this), delete this.domNode[T.DATA_KEY];
              }, _.prototype.deleteAt = function(v, p) {
                var c = this.isolate(v, p);
                c.remove();
              }, _.prototype.formatAt = function(v, p, c, o) {
                var e = this.isolate(v, p);
                if (T.query(c, T.Scope.BLOT) != null && o)
                  e.wrap(c, o);
                else if (T.query(c, T.Scope.ATTRIBUTE) != null) {
                  var t = T.create(this.statics.scope);
                  e.wrap(t), t.format(c, o);
                }
              }, _.prototype.insertAt = function(v, p, c) {
                var o = c == null ? T.create("text", p) : T.create(p, c), e = this.split(v);
                this.parent.insertBefore(o, e);
              }, _.prototype.insertInto = function(v, p) {
                p === void 0 && (p = null), this.parent != null && this.parent.children.remove(this);
                var c = null;
                v.children.insertBefore(this, p), p != null && (c = p.domNode), (this.domNode.parentNode != v.domNode || this.domNode.nextSibling != c) && v.domNode.insertBefore(this.domNode, c), this.parent = v, this.attach();
              }, _.prototype.isolate = function(v, p) {
                var c = this.split(v);
                return c.split(p), c;
              }, _.prototype.length = function() {
                return 1;
              }, _.prototype.offset = function(v) {
                return v === void 0 && (v = this.parent), this.parent == null || this == v ? 0 : this.parent.children.offset(this) + this.parent.offset(v);
              }, _.prototype.optimize = function(v) {
                this.domNode[T.DATA_KEY] != null && delete this.domNode[T.DATA_KEY].mutations;
              }, _.prototype.remove = function() {
                this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
              }, _.prototype.replace = function(v) {
                v.parent != null && (v.parent.insertBefore(this, v.next), v.remove());
              }, _.prototype.replaceWith = function(v, p) {
                var c = typeof v == "string" ? T.create(v, p) : v;
                return c.replace(this), c;
              }, _.prototype.split = function(v, p) {
                return v === 0 ? this : this.next;
              }, _.prototype.update = function(v, p) {
              }, _.prototype.wrap = function(v, p) {
                var c = typeof v == "string" ? T.create(v, p) : v;
                return this.parent != null && this.parent.insertBefore(c, this.next), c.appendChild(this), c;
              }, _.blotName = "abstract", _;
            }()
          );
          u.default = A;
        },
        /* 31 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", { value: !0 });
          var T = d(12), A = d(32), _ = d(33), v = d(1), p = (
            /** @class */
            function() {
              function c(o) {
                this.attributes = {}, this.domNode = o, this.build();
              }
              return c.prototype.attribute = function(o, e) {
                e ? o.add(this.domNode, e) && (o.value(this.domNode) != null ? this.attributes[o.attrName] = o : delete this.attributes[o.attrName]) : (o.remove(this.domNode), delete this.attributes[o.attrName]);
              }, c.prototype.build = function() {
                var o = this;
                this.attributes = {};
                var e = T.default.keys(this.domNode), t = A.default.keys(this.domNode), s = _.default.keys(this.domNode);
                e.concat(t).concat(s).forEach(function(a) {
                  var l = v.query(a, v.Scope.ATTRIBUTE);
                  l instanceof T.default && (o.attributes[l.attrName] = l);
                });
              }, c.prototype.copy = function(o) {
                var e = this;
                Object.keys(this.attributes).forEach(function(t) {
                  var s = e.attributes[t].value(e.domNode);
                  o.format(t, s);
                });
              }, c.prototype.move = function(o) {
                var e = this;
                this.copy(o), Object.keys(this.attributes).forEach(function(t) {
                  e.attributes[t].remove(e.domNode);
                }), this.attributes = {};
              }, c.prototype.values = function() {
                var o = this;
                return Object.keys(this.attributes).reduce(function(e, t) {
                  return e[t] = o.attributes[t].value(o.domNode), e;
                }, {});
              }, c;
            }()
          );
          u.default = p;
        },
        /* 32 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
              c.__proto__ = o;
            } || function(c, o) {
              for (var e in o)
                o.hasOwnProperty(e) && (c[e] = o[e]);
            };
            return function(c, o) {
              p(c, o);
              function e() {
                this.constructor = c;
              }
              c.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(12);
          function _(p, c) {
            var o = p.getAttribute("class") || "";
            return o.split(/\s+/).filter(function(e) {
              return e.indexOf(c + "-") === 0;
            });
          }
          var v = (
            /** @class */
            function(p) {
              T(c, p);
              function c() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return c.keys = function(o) {
                return (o.getAttribute("class") || "").split(/\s+/).map(function(e) {
                  return e.split("-").slice(0, -1).join("-");
                });
              }, c.prototype.add = function(o, e) {
                return this.canAdd(o, e) ? (this.remove(o), o.classList.add(this.keyName + "-" + e), !0) : !1;
              }, c.prototype.remove = function(o) {
                var e = _(o, this.keyName);
                e.forEach(function(t) {
                  o.classList.remove(t);
                }), o.classList.length === 0 && o.removeAttribute("class");
              }, c.prototype.value = function(o) {
                var e = _(o, this.keyName)[0] || "", t = e.slice(this.keyName.length + 1);
                return this.canAdd(o, t) ? t : "";
              }, c;
            }(A.default)
          );
          u.default = v;
        },
        /* 33 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
              c.__proto__ = o;
            } || function(c, o) {
              for (var e in o)
                o.hasOwnProperty(e) && (c[e] = o[e]);
            };
            return function(c, o) {
              p(c, o);
              function e() {
                this.constructor = c;
              }
              c.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(12);
          function _(p) {
            var c = p.split("-"), o = c.slice(1).map(function(e) {
              return e[0].toUpperCase() + e.slice(1);
            }).join("");
            return c[0] + o;
          }
          var v = (
            /** @class */
            function(p) {
              T(c, p);
              function c() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return c.keys = function(o) {
                return (o.getAttribute("style") || "").split(";").map(function(e) {
                  var t = e.split(":");
                  return t[0].trim();
                });
              }, c.prototype.add = function(o, e) {
                return this.canAdd(o, e) ? (o.style[_(this.keyName)] = e, !0) : !1;
              }, c.prototype.remove = function(o) {
                o.style[_(this.keyName)] = "", o.getAttribute("style") || o.removeAttribute("style");
              }, c.prototype.value = function(o) {
                var e = o.style[_(this.keyName)];
                return this.canAdd(o, e) ? e : "";
              }, c;
            }(A.default)
          );
          u.default = v;
        },
        /* 34 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function v(p, c) {
              for (var o = 0; o < c.length; o++) {
                var e = c[o];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(p, e.key, e);
              }
            }
            return function(p, c, o) {
              return c && v(p.prototype, c), o && v(p, o), p;
            };
          }();
          function A(v, p) {
            if (!(v instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          var _ = function() {
            function v(p, c) {
              A(this, v), this.quill = p, this.options = c, this.modules = {};
            }
            return T(v, [{
              key: "init",
              value: function() {
                var c = this;
                Object.keys(this.options.modules).forEach(function(o) {
                  c.modules[o] == null && c.addModule(o);
                });
              }
            }, {
              key: "addModule",
              value: function(c) {
                var o = this.quill.constructor.import("modules/" + c);
                return this.modules[c] = new o(this.quill, this.options.modules[c] || {}), this.modules[c];
              }
            }]), v;
          }();
          _.DEFAULTS = {
            modules: {}
          }, _.themes = {
            default: _
          }, u.default = _;
        },
        /* 35 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function i(r, f) {
              for (var n = 0; n < f.length; n++) {
                var h = f[n];
                h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(r, h.key, h);
              }
            }
            return function(r, f, n) {
              return f && i(r.prototype, f), n && i(r, n), r;
            };
          }(), A = function i(r, f, n) {
            r === null && (r = Function.prototype);
            var h = Object.getOwnPropertyDescriptor(r, f);
            if (h === void 0) {
              var S = Object.getPrototypeOf(r);
              return S === null ? void 0 : i(S, f, n);
            } else {
              if ("value" in h)
                return h.value;
              var O = h.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, _ = d(0), v = o(_), p = d(7), c = o(p);
          function o(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function e(i, r) {
            if (!(i instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(i, r) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : i;
          }
          function s(i, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            i.prototype = Object.create(r && r.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(i, r) : i.__proto__ = r);
          }
          var a = "\uFEFF", l = function(i) {
            s(r, i);
            function r(f) {
              e(this, r);
              var n = t(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, f));
              return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(h) {
                n.contentNode.appendChild(h);
              }), n.leftGuard = document.createTextNode(a), n.rightGuard = document.createTextNode(a), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
            }
            return T(r, [{
              key: "index",
              value: function(n, h) {
                return n === this.leftGuard ? 0 : n === this.rightGuard ? 1 : A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "index", this).call(this, n, h);
              }
            }, {
              key: "restore",
              value: function(n) {
                var h = void 0, S = void 0, O = n.data.split(a).join("");
                if (n === this.leftGuard)
                  if (this.prev instanceof c.default) {
                    var E = this.prev.length();
                    this.prev.insertAt(E, O), h = {
                      startNode: this.prev.domNode,
                      startOffset: E + O.length
                    };
                  } else
                    S = document.createTextNode(O), this.parent.insertBefore(v.default.create(S), this), h = {
                      startNode: S,
                      startOffset: O.length
                    };
                else
                  n === this.rightGuard && (this.next instanceof c.default ? (this.next.insertAt(0, O), h = {
                    startNode: this.next.domNode,
                    startOffset: O.length
                  }) : (S = document.createTextNode(O), this.parent.insertBefore(v.default.create(S), this.next), h = {
                    startNode: S,
                    startOffset: O.length
                  }));
                return n.data = a, h;
              }
            }, {
              key: "update",
              value: function(n, h) {
                var S = this;
                n.forEach(function(O) {
                  if (O.type === "characterData" && (O.target === S.leftGuard || O.target === S.rightGuard)) {
                    var E = S.restore(O.target);
                    E && (h.range = E);
                  }
                });
              }
            }]), r;
          }(v.default.Embed);
          u.default = l;
        },
        /* 36 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.AlignStyle = u.AlignClass = u.AlignAttribute = void 0;
          var T = d(0), A = _(T);
          function _(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var v = {
            scope: A.default.Scope.BLOCK,
            whitelist: ["right", "center", "justify"]
          }, p = new A.default.Attributor.Attribute("align", "align", v), c = new A.default.Attributor.Class("align", "ql-align", v), o = new A.default.Attributor.Style("align", "text-align", v);
          u.AlignAttribute = p, u.AlignClass = c, u.AlignStyle = o;
        },
        /* 37 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.BackgroundStyle = u.BackgroundClass = void 0;
          var T = d(0), A = v(T), _ = d(26);
          function v(o) {
            return o && o.__esModule ? o : { default: o };
          }
          var p = new A.default.Attributor.Class("background", "ql-bg", {
            scope: A.default.Scope.INLINE
          }), c = new _.ColorAttributor("background", "background-color", {
            scope: A.default.Scope.INLINE
          });
          u.BackgroundClass = p, u.BackgroundStyle = c;
        },
        /* 38 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.DirectionStyle = u.DirectionClass = u.DirectionAttribute = void 0;
          var T = d(0), A = _(T);
          function _(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var v = {
            scope: A.default.Scope.BLOCK,
            whitelist: ["rtl"]
          }, p = new A.default.Attributor.Attribute("direction", "dir", v), c = new A.default.Attributor.Class("direction", "ql-direction", v), o = new A.default.Attributor.Style("direction", "direction", v);
          u.DirectionAttribute = p, u.DirectionClass = c, u.DirectionStyle = o;
        },
        /* 39 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.FontClass = u.FontStyle = void 0;
          var T = /* @__PURE__ */ function() {
            function i(r, f) {
              for (var n = 0; n < f.length; n++) {
                var h = f[n];
                h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(r, h.key, h);
              }
            }
            return function(r, f, n) {
              return f && i(r.prototype, f), n && i(r, n), r;
            };
          }(), A = function i(r, f, n) {
            r === null && (r = Function.prototype);
            var h = Object.getOwnPropertyDescriptor(r, f);
            if (h === void 0) {
              var S = Object.getPrototypeOf(r);
              return S === null ? void 0 : i(S, f, n);
            } else {
              if ("value" in h)
                return h.value;
              var O = h.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, _ = d(0), v = p(_);
          function p(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function c(i, r) {
            if (!(i instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(i, r) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : i;
          }
          function e(i, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            i.prototype = Object.create(r && r.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(i, r) : i.__proto__ = r);
          }
          var t = {
            scope: v.default.Scope.INLINE,
            whitelist: ["serif", "monospace"]
          }, s = new v.default.Attributor.Class("font", "ql-font", t), a = function(i) {
            e(r, i);
            function r() {
              return c(this, r), o(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return T(r, [{
              key: "value",
              value: function(n) {
                return A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "value", this).call(this, n).replace(/["']/g, "");
              }
            }]), r;
          }(v.default.Attributor.Style), l = new a("font", "font-family", t);
          u.FontStyle = l, u.FontClass = s;
        },
        /* 40 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.SizeStyle = u.SizeClass = void 0;
          var T = d(0), A = _(T);
          function _(c) {
            return c && c.__esModule ? c : { default: c };
          }
          var v = new A.default.Attributor.Class("size", "ql-size", {
            scope: A.default.Scope.INLINE,
            whitelist: ["small", "large", "huge"]
          }), p = new A.default.Attributor.Style("size", "font-size", {
            scope: A.default.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"]
          });
          u.SizeClass = v, u.SizeStyle = p;
        },
        /* 41 */
        /***/
        function(b, u, d) {
          b.exports = {
            align: {
              "": d(76),
              center: d(77),
              right: d(78),
              justify: d(79)
            },
            background: d(80),
            blockquote: d(81),
            bold: d(82),
            clean: d(83),
            code: d(58),
            "code-block": d(58),
            color: d(84),
            direction: {
              "": d(85),
              rtl: d(86)
            },
            float: {
              center: d(87),
              full: d(88),
              left: d(89),
              right: d(90)
            },
            formula: d(91),
            header: {
              1: d(92),
              2: d(93)
            },
            italic: d(94),
            image: d(95),
            indent: {
              "+1": d(96),
              "-1": d(97)
            },
            link: d(98),
            list: {
              ordered: d(99),
              bullet: d(100),
              check: d(101)
            },
            script: {
              sub: d(102),
              super: d(103)
            },
            strike: d(104),
            underline: d(105),
            video: d(106)
          };
        },
        /* 42 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.getLastChangeIndex = u.default = void 0;
          var T = /* @__PURE__ */ function() {
            function f(n, h) {
              for (var S = 0; S < h.length; S++) {
                var O = h[S];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(n, O.key, O);
              }
            }
            return function(n, h, S) {
              return h && f(n.prototype, h), S && f(n, S), n;
            };
          }(), A = d(0), _ = e(A), v = d(5), p = e(v), c = d(9), o = e(c);
          function e(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function t(f, n) {
            if (!(f instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n == "object" || typeof n == "function") ? n : f;
          }
          function a(f, n) {
            if (typeof n != "function" && n !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
          }
          var l = function(f) {
            a(n, f);
            function n(h, S) {
              t(this, n);
              var O = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, h, S));
              return O.lastRecorded = 0, O.ignoreChange = !1, O.clear(), O.quill.on(p.default.events.EDITOR_CHANGE, function(E, N, m, y) {
                E !== p.default.events.TEXT_CHANGE || O.ignoreChange || (!O.options.userOnly || y === p.default.sources.USER ? O.record(N, m) : O.transform(N));
              }), O.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, O.undo.bind(O)), O.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, O.redo.bind(O)), /Win/i.test(navigator.platform) && O.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, O.redo.bind(O)), O;
            }
            return T(n, [{
              key: "change",
              value: function(S, O) {
                if (this.stack[S].length !== 0) {
                  var E = this.stack[S].pop();
                  this.stack[O].push(E), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(E[S], p.default.sources.USER), this.ignoreChange = !1;
                  var N = r(E[S]);
                  this.quill.setSelection(N);
                }
              }
            }, {
              key: "clear",
              value: function() {
                this.stack = { undo: [], redo: [] };
              }
            }, {
              key: "cutoff",
              value: function() {
                this.lastRecorded = 0;
              }
            }, {
              key: "record",
              value: function(S, O) {
                if (S.ops.length !== 0) {
                  this.stack.redo = [];
                  var E = this.quill.getContents().diff(O), N = Date.now();
                  if (this.lastRecorded + this.options.delay > N && this.stack.undo.length > 0) {
                    var m = this.stack.undo.pop();
                    E = E.compose(m.undo), S = m.redo.compose(S);
                  } else
                    this.lastRecorded = N;
                  this.stack.undo.push({
                    redo: S,
                    undo: E
                  }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                }
              }
            }, {
              key: "redo",
              value: function() {
                this.change("redo", "undo");
              }
            }, {
              key: "transform",
              value: function(S) {
                this.stack.undo.forEach(function(O) {
                  O.undo = S.transform(O.undo, !0), O.redo = S.transform(O.redo, !0);
                }), this.stack.redo.forEach(function(O) {
                  O.undo = S.transform(O.undo, !0), O.redo = S.transform(O.redo, !0);
                });
              }
            }, {
              key: "undo",
              value: function() {
                this.change("undo", "redo");
              }
            }]), n;
          }(o.default);
          l.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
          };
          function i(f) {
            var n = f.ops[f.ops.length - 1];
            return n == null ? !1 : n.insert != null ? typeof n.insert == "string" && n.insert.endsWith(`
`) : n.attributes != null ? Object.keys(n.attributes).some(function(h) {
              return _.default.query(h, _.default.Scope.BLOCK) != null;
            }) : !1;
          }
          function r(f) {
            var n = f.reduce(function(S, O) {
              return S += O.delete || 0, S;
            }, 0), h = f.length() - n;
            return i(f) && (h -= 1), h;
          }
          u.default = l, u.getLastChangeIndex = r;
        },
        /* 43 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.BaseTooltip = void 0;
          var T = /* @__PURE__ */ function() {
            function j(I, H) {
              for (var $ = 0; $ < H.length; $++) {
                var R = H[$];
                R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(I, R.key, R);
              }
            }
            return function(I, H, $) {
              return H && j(I.prototype, H), $ && j(I, $), I;
            };
          }(), A = function j(I, H, $) {
            I === null && (I = Function.prototype);
            var R = Object.getOwnPropertyDescriptor(I, H);
            if (R === void 0) {
              var C = Object.getPrototypeOf(I);
              return C === null ? void 0 : j(C, H, $);
            } else {
              if ("value" in R)
                return R.value;
              var z = R.get;
              return z === void 0 ? void 0 : z.call($);
            }
          }, _ = d(3), v = N(_), p = d(2), c = N(p), o = d(8), e = N(o), t = d(23), s = N(t), a = d(34), l = N(a), i = d(59), r = N(i), f = d(60), n = N(f), h = d(28), S = N(h), O = d(61), E = N(O);
          function N(j) {
            return j && j.__esModule ? j : { default: j };
          }
          function m(j, I) {
            if (!(j instanceof I))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(j, I) {
            if (!j)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return I && (typeof I == "object" || typeof I == "function") ? I : j;
          }
          function g(j, I) {
            if (typeof I != "function" && I !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof I);
            j.prototype = Object.create(I && I.prototype, { constructor: { value: j, enumerable: !1, writable: !0, configurable: !0 } }), I && (Object.setPrototypeOf ? Object.setPrototypeOf(j, I) : j.__proto__ = I);
          }
          var k = [!1, "center", "right", "justify"], P = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], q = [!1, "serif", "monospace"], F = ["1", "2", "3", !1], U = ["small", !1, "large", "huge"], Z = function(j) {
            g(I, j);
            function I(H, $) {
              m(this, I);
              var R = y(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, H, $)), C = function z(K) {
                if (!document.body.contains(H.root))
                  return document.body.removeEventListener("click", z);
                R.tooltip != null && !R.tooltip.root.contains(K.target) && document.activeElement !== R.tooltip.textbox && !R.quill.hasFocus() && R.tooltip.hide(), R.pickers != null && R.pickers.forEach(function(W) {
                  W.container.contains(K.target) || W.close();
                });
              };
              return H.emitter.listenDOM("click", document.body, C), R;
            }
            return T(I, [{
              key: "addModule",
              value: function($) {
                var R = A(I.prototype.__proto__ || Object.getPrototypeOf(I.prototype), "addModule", this).call(this, $);
                return $ === "toolbar" && this.extendToolbar(R), R;
              }
            }, {
              key: "buildButtons",
              value: function($, R) {
                $.forEach(function(C) {
                  var z = C.getAttribute("class") || "";
                  z.split(/\s+/).forEach(function(K) {
                    if (K.startsWith("ql-") && (K = K.slice(3), R[K] != null))
                      if (K === "direction")
                        C.innerHTML = R[K][""] + R[K].rtl;
                      else if (typeof R[K] == "string")
                        C.innerHTML = R[K];
                      else {
                        var W = C.value || "";
                        W != null && R[K][W] && (C.innerHTML = R[K][W]);
                      }
                  });
                });
              }
            }, {
              key: "buildPickers",
              value: function($, R) {
                var C = this;
                this.pickers = $.map(function(K) {
                  if (K.classList.contains("ql-align"))
                    return K.querySelector("option") == null && w(K, k), new n.default(K, R.align);
                  if (K.classList.contains("ql-background") || K.classList.contains("ql-color")) {
                    var W = K.classList.contains("ql-background") ? "background" : "color";
                    return K.querySelector("option") == null && w(K, P, W === "background" ? "#ffffff" : "#000000"), new r.default(K, R[W]);
                  } else
                    return K.querySelector("option") == null && (K.classList.contains("ql-font") ? w(K, q) : K.classList.contains("ql-header") ? w(K, F) : K.classList.contains("ql-size") && w(K, U)), new S.default(K);
                });
                var z = function() {
                  C.pickers.forEach(function(W) {
                    W.update();
                  });
                };
                this.quill.on(e.default.events.EDITOR_CHANGE, z);
              }
            }]), I;
          }(l.default);
          Z.DEFAULTS = (0, v.default)(!0, {}, l.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  formula: function() {
                    this.quill.theme.tooltip.edit("formula");
                  },
                  image: function() {
                    var I = this, H = this.container.querySelector("input.ql-image[type=file]");
                    H == null && (H = document.createElement("input"), H.setAttribute("type", "file"), H.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), H.classList.add("ql-image"), H.addEventListener("change", function() {
                      if (H.files != null && H.files[0] != null) {
                        var $ = new FileReader();
                        $.onload = function(R) {
                          var C = I.quill.getSelection(!0);
                          I.quill.updateContents(new c.default().retain(C.index).delete(C.length).insert({ image: R.target.result }), e.default.sources.USER), I.quill.setSelection(C.index + 1, e.default.sources.SILENT), H.value = "";
                        }, $.readAsDataURL(H.files[0]);
                      }
                    }), this.container.appendChild(H)), H.click();
                  },
                  video: function() {
                    this.quill.theme.tooltip.edit("video");
                  }
                }
              }
            }
          });
          var B = function(j) {
            g(I, j);
            function I(H, $) {
              m(this, I);
              var R = y(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, H, $));
              return R.textbox = R.root.querySelector('input[type="text"]'), R.listen(), R;
            }
            return T(I, [{
              key: "listen",
              value: function() {
                var $ = this;
                this.textbox.addEventListener("keydown", function(R) {
                  s.default.match(R, "enter") ? ($.save(), R.preventDefault()) : s.default.match(R, "escape") && ($.cancel(), R.preventDefault());
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.hide();
              }
            }, {
              key: "edit",
              value: function() {
                var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), R != null ? this.textbox.value = R : $ !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + $) || ""), this.root.setAttribute("data-mode", $);
              }
            }, {
              key: "restoreFocus",
              value: function() {
                var $ = this.quill.scrollingContainer.scrollTop;
                this.quill.focus(), this.quill.scrollingContainer.scrollTop = $;
              }
            }, {
              key: "save",
              value: function() {
                var $ = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                  case "link": {
                    var R = this.quill.root.scrollTop;
                    this.linkRange ? (this.quill.formatText(this.linkRange, "link", $, e.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", $, e.default.sources.USER)), this.quill.root.scrollTop = R;
                    break;
                  }
                  case "video":
                    $ = D($);
                  case "formula": {
                    if (!$)
                      break;
                    var C = this.quill.getSelection(!0);
                    if (C != null) {
                      var z = C.index + C.length;
                      this.quill.insertEmbed(z, this.root.getAttribute("data-mode"), $, e.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(z + 1, " ", e.default.sources.USER), this.quill.setSelection(z + 2, e.default.sources.USER);
                    }
                    break;
                  }
                }
                this.textbox.value = "", this.hide();
              }
            }]), I;
          }(E.default);
          function D(j) {
            var I = j.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || j.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return I ? (I[1] || "https") + "://www.youtube.com/embed/" + I[2] + "?showinfo=0" : (I = j.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (I[1] || "https") + "://player.vimeo.com/video/" + I[2] + "/" : j;
          }
          function w(j, I) {
            var H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            I.forEach(function($) {
              var R = document.createElement("option");
              $ === H ? R.setAttribute("selected", "selected") : R.setAttribute("value", $), j.appendChild(R);
            });
          }
          u.BaseTooltip = B, u.default = Z;
        },
        /* 44 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", { value: !0 });
          var T = (
            /** @class */
            function() {
              function A() {
                this.head = this.tail = null, this.length = 0;
              }
              return A.prototype.append = function() {
                for (var _ = [], v = 0; v < arguments.length; v++)
                  _[v] = arguments[v];
                this.insertBefore(_[0], null), _.length > 1 && this.append.apply(this, _.slice(1));
              }, A.prototype.contains = function(_) {
                for (var v, p = this.iterator(); v = p(); )
                  if (v === _)
                    return !0;
                return !1;
              }, A.prototype.insertBefore = function(_, v) {
                _ && (_.next = v, v != null ? (_.prev = v.prev, v.prev != null && (v.prev.next = _), v.prev = _, v === this.head && (this.head = _)) : this.tail != null ? (this.tail.next = _, _.prev = this.tail, this.tail = _) : (_.prev = null, this.head = this.tail = _), this.length += 1);
              }, A.prototype.offset = function(_) {
                for (var v = 0, p = this.head; p != null; ) {
                  if (p === _)
                    return v;
                  v += p.length(), p = p.next;
                }
                return -1;
              }, A.prototype.remove = function(_) {
                this.contains(_) && (_.prev != null && (_.prev.next = _.next), _.next != null && (_.next.prev = _.prev), _ === this.head && (this.head = _.next), _ === this.tail && (this.tail = _.prev), this.length -= 1);
              }, A.prototype.iterator = function(_) {
                return _ === void 0 && (_ = this.head), function() {
                  var v = _;
                  return _ != null && (_ = _.next), v;
                };
              }, A.prototype.find = function(_, v) {
                v === void 0 && (v = !1);
                for (var p, c = this.iterator(); p = c(); ) {
                  var o = p.length();
                  if (_ < o || v && _ === o && (p.next == null || p.next.length() !== 0))
                    return [p, _];
                  _ -= o;
                }
                return [null, 0];
              }, A.prototype.forEach = function(_) {
                for (var v, p = this.iterator(); v = p(); )
                  _(v);
              }, A.prototype.forEachAt = function(_, v, p) {
                if (!(v <= 0))
                  for (var c = this.find(_), o = c[0], e = c[1], t, s = _ - e, a = this.iterator(o); (t = a()) && s < _ + v; ) {
                    var l = t.length();
                    _ > s ? p(t, _ - s, Math.min(v, s + l - _)) : p(t, 0, Math.min(l, _ + v - s)), s += l;
                  }
              }, A.prototype.map = function(_) {
                return this.reduce(function(v, p) {
                  return v.push(_(p)), v;
                }, []);
              }, A.prototype.reduce = function(_, v) {
                for (var p, c = this.iterator(); p = c(); )
                  v = _(v, p);
                return v;
              }, A;
            }()
          );
          u.default = T;
        },
        /* 45 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
              e.__proto__ = t;
            } || function(e, t) {
              for (var s in t)
                t.hasOwnProperty(s) && (e[s] = t[s]);
            };
            return function(e, t) {
              o(e, t);
              function s() {
                this.constructor = e;
              }
              e.prototype = t === null ? Object.create(t) : (s.prototype = t.prototype, new s());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(17), _ = d(1), v = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          }, p = 100, c = (
            /** @class */
            function(o) {
              T(e, o);
              function e(t) {
                var s = o.call(this, t) || this;
                return s.scroll = s, s.observer = new MutationObserver(function(a) {
                  s.update(a);
                }), s.observer.observe(s.domNode, v), s.attach(), s;
              }
              return e.prototype.detach = function() {
                o.prototype.detach.call(this), this.observer.disconnect();
              }, e.prototype.deleteAt = function(t, s) {
                this.update(), t === 0 && s === this.length() ? this.children.forEach(function(a) {
                  a.remove();
                }) : o.prototype.deleteAt.call(this, t, s);
              }, e.prototype.formatAt = function(t, s, a, l) {
                this.update(), o.prototype.formatAt.call(this, t, s, a, l);
              }, e.prototype.insertAt = function(t, s, a) {
                this.update(), o.prototype.insertAt.call(this, t, s, a);
              }, e.prototype.optimize = function(t, s) {
                var a = this;
                t === void 0 && (t = []), s === void 0 && (s = {}), o.prototype.optimize.call(this, s);
                for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0; )
                  t.push(l.pop());
                for (var i = function(h, S) {
                  S === void 0 && (S = !0), !(h == null || h === a) && h.domNode.parentNode != null && (h.domNode[_.DATA_KEY].mutations == null && (h.domNode[_.DATA_KEY].mutations = []), S && i(h.parent));
                }, r = function(h) {
                  // @ts-ignore
                  h.domNode[_.DATA_KEY] == null || // @ts-ignore
                  h.domNode[_.DATA_KEY].mutations == null || (h instanceof A.default && h.children.forEach(r), h.optimize(s));
                }, f = t, n = 0; f.length > 0; n += 1) {
                  if (n >= p)
                    throw new Error("[Parchment] Maximum optimize iterations reached");
                  for (f.forEach(function(h) {
                    var S = _.find(h.target, !0);
                    S != null && (S.domNode === h.target && (h.type === "childList" ? (i(_.find(h.previousSibling, !1)), [].forEach.call(h.addedNodes, function(O) {
                      var E = _.find(O, !1);
                      i(E, !1), E instanceof A.default && E.children.forEach(function(N) {
                        i(N, !1);
                      });
                    })) : h.type === "attributes" && i(S.prev)), i(S));
                  }), this.children.forEach(r), f = [].slice.call(this.observer.takeRecords()), l = f.slice(); l.length > 0; )
                    t.push(l.pop());
                }
              }, e.prototype.update = function(t, s) {
                var a = this;
                s === void 0 && (s = {}), t = t || this.observer.takeRecords(), t.map(function(l) {
                  var i = _.find(l.target, !0);
                  return i == null ? null : i.domNode[_.DATA_KEY].mutations == null ? (i.domNode[_.DATA_KEY].mutations = [l], i) : (i.domNode[_.DATA_KEY].mutations.push(l), null);
                }).forEach(function(l) {
                  l == null || l === a || //@ts-ignore
                  l.domNode[_.DATA_KEY] == null || l.update(l.domNode[_.DATA_KEY].mutations || [], s);
                }), this.domNode[_.DATA_KEY].mutations != null && o.prototype.update.call(this, this.domNode[_.DATA_KEY].mutations, s), this.optimize(t, s);
              }, e.blotName = "scroll", e.defaultChild = "block", e.scope = _.Scope.BLOCK_BLOT, e.tagName = "DIV", e;
            }(A.default)
          );
          u.default = c;
        },
        /* 46 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, e) {
              o.__proto__ = e;
            } || function(o, e) {
              for (var t in e)
                e.hasOwnProperty(t) && (o[t] = e[t]);
            };
            return function(o, e) {
              c(o, e);
              function t() {
                this.constructor = o;
              }
              o.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(18), _ = d(1);
          function v(c, o) {
            if (Object.keys(c).length !== Object.keys(o).length)
              return !1;
            for (var e in c)
              if (c[e] !== o[e])
                return !1;
            return !0;
          }
          var p = (
            /** @class */
            function(c) {
              T(o, c);
              function o() {
                return c !== null && c.apply(this, arguments) || this;
              }
              return o.formats = function(e) {
                if (e.tagName !== o.tagName)
                  return c.formats.call(this, e);
              }, o.prototype.format = function(e, t) {
                var s = this;
                e === this.statics.blotName && !t ? (this.children.forEach(function(a) {
                  a instanceof A.default || (a = a.wrap(o.blotName, !0)), s.attributes.copy(a);
                }), this.unwrap()) : c.prototype.format.call(this, e, t);
              }, o.prototype.formatAt = function(e, t, s, a) {
                if (this.formats()[s] != null || _.query(s, _.Scope.ATTRIBUTE)) {
                  var l = this.isolate(e, t);
                  l.format(s, a);
                } else
                  c.prototype.formatAt.call(this, e, t, s, a);
              }, o.prototype.optimize = function(e) {
                c.prototype.optimize.call(this, e);
                var t = this.formats();
                if (Object.keys(t).length === 0)
                  return this.unwrap();
                var s = this.next;
                s instanceof o && s.prev === this && v(t, s.formats()) && (s.moveChildren(this), s.remove());
              }, o.blotName = "inline", o.scope = _.Scope.INLINE_BLOT, o.tagName = "SPAN", o;
            }(A.default)
          );
          u.default = p;
        },
        /* 47 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
              c.__proto__ = o;
            } || function(c, o) {
              for (var e in o)
                o.hasOwnProperty(e) && (c[e] = o[e]);
            };
            return function(c, o) {
              p(c, o);
              function e() {
                this.constructor = c;
              }
              c.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(18), _ = d(1), v = (
            /** @class */
            function(p) {
              T(c, p);
              function c() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return c.formats = function(o) {
                var e = _.query(c.blotName).tagName;
                if (o.tagName !== e)
                  return p.formats.call(this, o);
              }, c.prototype.format = function(o, e) {
                _.query(o, _.Scope.BLOCK) != null && (o === this.statics.blotName && !e ? this.replaceWith(c.blotName) : p.prototype.format.call(this, o, e));
              }, c.prototype.formatAt = function(o, e, t, s) {
                _.query(t, _.Scope.BLOCK) != null ? this.format(t, s) : p.prototype.formatAt.call(this, o, e, t, s);
              }, c.prototype.insertAt = function(o, e, t) {
                if (t == null || _.query(e, _.Scope.INLINE) != null)
                  p.prototype.insertAt.call(this, o, e, t);
                else {
                  var s = this.split(o), a = _.create(e, t);
                  s.parent.insertBefore(a, s);
                }
              }, c.prototype.update = function(o, e) {
                navigator.userAgent.match(/Trident/) ? this.build() : p.prototype.update.call(this, o, e);
              }, c.blotName = "block", c.scope = _.Scope.BLOCK_BLOT, c.tagName = "P", c;
            }(A.default)
          );
          u.default = v;
        },
        /* 48 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, c) {
              p.__proto__ = c;
            } || function(p, c) {
              for (var o in c)
                c.hasOwnProperty(o) && (p[o] = c[o]);
            };
            return function(p, c) {
              v(p, c);
              function o() {
                this.constructor = p;
              }
              p.prototype = c === null ? Object.create(c) : (o.prototype = c.prototype, new o());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(19), _ = (
            /** @class */
            function(v) {
              T(p, v);
              function p() {
                return v !== null && v.apply(this, arguments) || this;
              }
              return p.formats = function(c) {
              }, p.prototype.format = function(c, o) {
                v.prototype.formatAt.call(this, 0, this.length(), c, o);
              }, p.prototype.formatAt = function(c, o, e, t) {
                c === 0 && o === this.length() ? this.format(e, t) : v.prototype.formatAt.call(this, c, o, e, t);
              }, p.prototype.formats = function() {
                return this.statics.formats(this.domNode);
              }, p;
            }(A.default)
          );
          u.default = _;
        },
        /* 49 */
        /***/
        function(b, u, d) {
          var T = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
              c.__proto__ = o;
            } || function(c, o) {
              for (var e in o)
                o.hasOwnProperty(e) && (c[e] = o[e]);
            };
            return function(c, o) {
              p(c, o);
              function e() {
                this.constructor = c;
              }
              c.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
            };
          }();
          Object.defineProperty(u, "__esModule", { value: !0 });
          var A = d(19), _ = d(1), v = (
            /** @class */
            function(p) {
              T(c, p);
              function c(o) {
                var e = p.call(this, o) || this;
                return e.text = e.statics.value(e.domNode), e;
              }
              return c.create = function(o) {
                return document.createTextNode(o);
              }, c.value = function(o) {
                var e = o.data;
                return e.normalize && (e = e.normalize()), e;
              }, c.prototype.deleteAt = function(o, e) {
                this.domNode.data = this.text = this.text.slice(0, o) + this.text.slice(o + e);
              }, c.prototype.index = function(o, e) {
                return this.domNode === o ? e : -1;
              }, c.prototype.insertAt = function(o, e, t) {
                t == null ? (this.text = this.text.slice(0, o) + e + this.text.slice(o), this.domNode.data = this.text) : p.prototype.insertAt.call(this, o, e, t);
              }, c.prototype.length = function() {
                return this.text.length;
              }, c.prototype.optimize = function(o) {
                p.prototype.optimize.call(this, o), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof c && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
              }, c.prototype.position = function(o, e) {
                return [this.domNode, o];
              }, c.prototype.split = function(o, e) {
                if (e === void 0 && (e = !1), !e) {
                  if (o === 0)
                    return this;
                  if (o === this.length())
                    return this.next;
                }
                var t = _.create(this.domNode.splitText(o));
                return this.parent.insertBefore(t, this.next), this.text = this.statics.value(this.domNode), t;
              }, c.prototype.update = function(o, e) {
                var t = this;
                o.some(function(s) {
                  return s.type === "characterData" && s.target === t.domNode;
                }) && (this.text = this.statics.value(this.domNode));
              }, c.prototype.value = function() {
                return this.text;
              }, c.blotName = "text", c.scope = _.Scope.INLINE_BLOT, c;
            }(A.default)
          );
          u.default = v;
        },
        /* 50 */
        /***/
        function(b, u, d) {
          var T = document.createElement("div");
          if (T.classList.toggle("test-class", !1), T.classList.contains("test-class")) {
            var A = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(_, v) {
              return arguments.length > 1 && !this.contains(_) == !v ? v : A.call(this, _);
            };
          }
          String.prototype.startsWith || (String.prototype.startsWith = function(_, v) {
            return v = v || 0, this.substr(v, _.length) === _;
          }), String.prototype.endsWith || (String.prototype.endsWith = function(_, v) {
            var p = this.toString();
            (typeof v != "number" || !isFinite(v) || Math.floor(v) !== v || v > p.length) && (v = p.length), v -= _.length;
            var c = p.indexOf(_, v);
            return c !== -1 && c === v;
          }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(v) {
              if (this === null)
                throw new TypeError("Array.prototype.find called on null or undefined");
              if (typeof v != "function")
                throw new TypeError("predicate must be a function");
              for (var p = Object(this), c = p.length >>> 0, o = arguments[1], e, t = 0; t < c; t++)
                if (e = p[t], v.call(o, e, t, p))
                  return e;
            }
          }), document.addEventListener("DOMContentLoaded", function() {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
          });
        },
        /* 51 */
        /***/
        function(b, u) {
          var d = -1, T = 1, A = 0;
          function _(n, h, S) {
            if (n == h)
              return n ? [[A, n]] : [];
            (S < 0 || n.length < S) && (S = null);
            var O = o(n, h), E = n.substring(0, O);
            n = n.substring(O), h = h.substring(O), O = e(n, h);
            var N = n.substring(n.length - O);
            n = n.substring(0, n.length - O), h = h.substring(0, h.length - O);
            var m = v(n, h);
            return E && m.unshift([A, E]), N && m.push([A, N]), s(m), S != null && (m = i(m, S)), m = r(m), m;
          }
          function v(n, h) {
            var S;
            if (!n)
              return [[T, h]];
            if (!h)
              return [[d, n]];
            var O = n.length > h.length ? n : h, E = n.length > h.length ? h : n, N = O.indexOf(E);
            if (N != -1)
              return S = [
                [T, O.substring(0, N)],
                [A, E],
                [T, O.substring(N + E.length)]
              ], n.length > h.length && (S[0][0] = S[2][0] = d), S;
            if (E.length == 1)
              return [[d, n], [T, h]];
            var m = t(n, h);
            if (m) {
              var y = m[0], g = m[1], k = m[2], P = m[3], q = m[4], F = _(y, k), U = _(g, P);
              return F.concat([[A, q]], U);
            }
            return p(n, h);
          }
          function p(n, h) {
            for (var S = n.length, O = h.length, E = Math.ceil((S + O) / 2), N = E, m = 2 * E, y = new Array(m), g = new Array(m), k = 0; k < m; k++)
              y[k] = -1, g[k] = -1;
            y[N + 1] = 0, g[N + 1] = 0;
            for (var P = S - O, q = P % 2 != 0, F = 0, U = 0, Z = 0, B = 0, D = 0; D < E; D++) {
              for (var w = -D + F; w <= D - U; w += 2) {
                var j = N + w, I;
                w == -D || w != D && y[j - 1] < y[j + 1] ? I = y[j + 1] : I = y[j - 1] + 1;
                for (var H = I - w; I < S && H < O && n.charAt(I) == h.charAt(H); )
                  I++, H++;
                if (y[j] = I, I > S)
                  U += 2;
                else if (H > O)
                  F += 2;
                else if (q) {
                  var $ = N + P - w;
                  if ($ >= 0 && $ < m && g[$] != -1) {
                    var R = S - g[$];
                    if (I >= R)
                      return c(n, h, I, H);
                  }
                }
              }
              for (var C = -D + Z; C <= D - B; C += 2) {
                var $ = N + C, R;
                C == -D || C != D && g[$ - 1] < g[$ + 1] ? R = g[$ + 1] : R = g[$ - 1] + 1;
                for (var z = R - C; R < S && z < O && n.charAt(S - R - 1) == h.charAt(O - z - 1); )
                  R++, z++;
                if (g[$] = R, R > S)
                  B += 2;
                else if (z > O)
                  Z += 2;
                else if (!q) {
                  var j = N + P - C;
                  if (j >= 0 && j < m && y[j] != -1) {
                    var I = y[j], H = N + I - j;
                    if (R = S - R, I >= R)
                      return c(n, h, I, H);
                  }
                }
              }
            }
            return [[d, n], [T, h]];
          }
          function c(n, h, S, O) {
            var E = n.substring(0, S), N = h.substring(0, O), m = n.substring(S), y = h.substring(O), g = _(E, N), k = _(m, y);
            return g.concat(k);
          }
          function o(n, h) {
            if (!n || !h || n.charAt(0) != h.charAt(0))
              return 0;
            for (var S = 0, O = Math.min(n.length, h.length), E = O, N = 0; S < E; )
              n.substring(N, E) == h.substring(N, E) ? (S = E, N = S) : O = E, E = Math.floor((O - S) / 2 + S);
            return E;
          }
          function e(n, h) {
            if (!n || !h || n.charAt(n.length - 1) != h.charAt(h.length - 1))
              return 0;
            for (var S = 0, O = Math.min(n.length, h.length), E = O, N = 0; S < E; )
              n.substring(n.length - E, n.length - N) == h.substring(h.length - E, h.length - N) ? (S = E, N = S) : O = E, E = Math.floor((O - S) / 2 + S);
            return E;
          }
          function t(n, h) {
            var S = n.length > h.length ? n : h, O = n.length > h.length ? h : n;
            if (S.length < 4 || O.length * 2 < S.length)
              return null;
            function E(U, Z, B) {
              for (var D = U.substring(B, B + Math.floor(U.length / 4)), w = -1, j = "", I, H, $, R; (w = Z.indexOf(D, w + 1)) != -1; ) {
                var C = o(
                  U.substring(B),
                  Z.substring(w)
                ), z = e(
                  U.substring(0, B),
                  Z.substring(0, w)
                );
                j.length < z + C && (j = Z.substring(w - z, w) + Z.substring(w, w + C), I = U.substring(0, B - z), H = U.substring(B + C), $ = Z.substring(0, w - z), R = Z.substring(w + C));
              }
              return j.length * 2 >= U.length ? [
                I,
                H,
                $,
                R,
                j
              ] : null;
            }
            var N = E(
              S,
              O,
              Math.ceil(S.length / 4)
            ), m = E(
              S,
              O,
              Math.ceil(S.length / 2)
            ), y;
            if (!N && !m)
              return null;
            m ? N ? y = N[4].length > m[4].length ? N : m : y = m : y = N;
            var g, k, P, q;
            n.length > h.length ? (g = y[0], k = y[1], P = y[2], q = y[3]) : (P = y[0], q = y[1], g = y[2], k = y[3]);
            var F = y[4];
            return [g, k, P, q, F];
          }
          function s(n) {
            n.push([A, ""]);
            for (var h = 0, S = 0, O = 0, E = "", N = "", m; h < n.length; )
              switch (n[h][0]) {
                case T:
                  O++, N += n[h][1], h++;
                  break;
                case d:
                  S++, E += n[h][1], h++;
                  break;
                case A:
                  S + O > 1 ? (S !== 0 && O !== 0 && (m = o(N, E), m !== 0 && (h - S - O > 0 && n[h - S - O - 1][0] == A ? n[h - S - O - 1][1] += N.substring(0, m) : (n.splice(0, 0, [
                    A,
                    N.substring(0, m)
                  ]), h++), N = N.substring(m), E = E.substring(m)), m = e(N, E), m !== 0 && (n[h][1] = N.substring(N.length - m) + n[h][1], N = N.substring(0, N.length - m), E = E.substring(0, E.length - m))), S === 0 ? n.splice(
                    h - O,
                    S + O,
                    [T, N]
                  ) : O === 0 ? n.splice(
                    h - S,
                    S + O,
                    [d, E]
                  ) : n.splice(
                    h - S - O,
                    S + O,
                    [d, E],
                    [T, N]
                  ), h = h - S - O + (S ? 1 : 0) + (O ? 1 : 0) + 1) : h !== 0 && n[h - 1][0] == A ? (n[h - 1][1] += n[h][1], n.splice(h, 1)) : h++, O = 0, S = 0, E = "", N = "";
                  break;
              }
            n[n.length - 1][1] === "" && n.pop();
            var y = !1;
            for (h = 1; h < n.length - 1; )
              n[h - 1][0] == A && n[h + 1][0] == A && (n[h][1].substring(n[h][1].length - n[h - 1][1].length) == n[h - 1][1] ? (n[h][1] = n[h - 1][1] + n[h][1].substring(0, n[h][1].length - n[h - 1][1].length), n[h + 1][1] = n[h - 1][1] + n[h + 1][1], n.splice(h - 1, 1), y = !0) : n[h][1].substring(0, n[h + 1][1].length) == n[h + 1][1] && (n[h - 1][1] += n[h + 1][1], n[h][1] = n[h][1].substring(n[h + 1][1].length) + n[h + 1][1], n.splice(h + 1, 1), y = !0)), h++;
            y && s(n);
          }
          var a = _;
          a.INSERT = T, a.DELETE = d, a.EQUAL = A, b.exports = a;
          function l(n, h) {
            if (h === 0)
              return [A, n];
            for (var S = 0, O = 0; O < n.length; O++) {
              var E = n[O];
              if (E[0] === d || E[0] === A) {
                var N = S + E[1].length;
                if (h === N)
                  return [O + 1, n];
                if (h < N) {
                  n = n.slice();
                  var m = h - S, y = [E[0], E[1].slice(0, m)], g = [E[0], E[1].slice(m)];
                  return n.splice(O, 1, y, g), [O + 1, n];
                } else
                  S = N;
              }
            }
            throw new Error("cursor_pos is out of bounds!");
          }
          function i(n, h) {
            var S = l(n, h), O = S[1], E = S[0], N = O[E], m = O[E + 1];
            if (N == null)
              return n;
            if (N[0] !== A)
              return n;
            if (m != null && N[1] + m[1] === m[1] + N[1])
              return O.splice(E, 2, m, N), f(O, E, 2);
            if (m != null && m[1].indexOf(N[1]) === 0) {
              O.splice(E, 2, [m[0], N[1]], [0, N[1]]);
              var y = m[1].slice(N[1].length);
              return y.length > 0 && O.splice(E + 2, 0, [m[0], y]), f(O, E, 3);
            } else
              return n;
          }
          function r(n) {
            for (var h = !1, S = function(m) {
              return m.charCodeAt(0) >= 56320 && m.charCodeAt(0) <= 57343;
            }, O = function(m) {
              return m.charCodeAt(m.length - 1) >= 55296 && m.charCodeAt(m.length - 1) <= 56319;
            }, E = 2; E < n.length; E += 1)
              n[E - 2][0] === A && O(n[E - 2][1]) && n[E - 1][0] === d && S(n[E - 1][1]) && n[E][0] === T && S(n[E][1]) && (h = !0, n[E - 1][1] = n[E - 2][1].slice(-1) + n[E - 1][1], n[E][1] = n[E - 2][1].slice(-1) + n[E][1], n[E - 2][1] = n[E - 2][1].slice(0, -1));
            if (!h)
              return n;
            for (var N = [], E = 0; E < n.length; E += 1)
              n[E][1].length > 0 && N.push(n[E]);
            return N;
          }
          function f(n, h, S) {
            for (var O = h + S - 1; O >= 0 && O >= h - 1; O--)
              if (O + 1 < n.length) {
                var E = n[O], N = n[O + 1];
                E[0] === N[1] && n.splice(O, 2, [E[0], E[1] + N[1]]);
              }
            return n;
          }
        },
        /* 52 */
        /***/
        function(b, u) {
          u = b.exports = typeof Object.keys == "function" ? Object.keys : d, u.shim = d;
          function d(T) {
            var A = [];
            for (var _ in T)
              A.push(_);
            return A;
          }
        },
        /* 53 */
        /***/
        function(b, u) {
          var d = function() {
            return Object.prototype.toString.call(arguments);
          }() == "[object Arguments]";
          u = b.exports = d ? T : A, u.supported = T;
          function T(_) {
            return Object.prototype.toString.call(_) == "[object Arguments]";
          }
          u.unsupported = A;
          function A(_) {
            return _ && typeof _ == "object" && typeof _.length == "number" && Object.prototype.hasOwnProperty.call(_, "callee") && !Object.prototype.propertyIsEnumerable.call(_, "callee") || !1;
          }
        },
        /* 54 */
        /***/
        function(b, u) {
          var d = Object.prototype.hasOwnProperty, T = "~";
          function A() {
          }
          Object.create && (A.prototype = /* @__PURE__ */ Object.create(null), new A().__proto__ || (T = !1));
          function _(p, c, o) {
            this.fn = p, this.context = c, this.once = o || !1;
          }
          function v() {
            this._events = new A(), this._eventsCount = 0;
          }
          v.prototype.eventNames = function() {
            var c = [], o, e;
            if (this._eventsCount === 0)
              return c;
            for (e in o = this._events)
              d.call(o, e) && c.push(T ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(o)) : c;
          }, v.prototype.listeners = function(c, o) {
            var e = T ? T + c : c, t = this._events[e];
            if (o)
              return !!t;
            if (!t)
              return [];
            if (t.fn)
              return [t.fn];
            for (var s = 0, a = t.length, l = new Array(a); s < a; s++)
              l[s] = t[s].fn;
            return l;
          }, v.prototype.emit = function(c, o, e, t, s, a) {
            var l = T ? T + c : c;
            if (!this._events[l])
              return !1;
            var i = this._events[l], r = arguments.length, f, n;
            if (i.fn) {
              switch (i.once && this.removeListener(c, i.fn, void 0, !0), r) {
                case 1:
                  return i.fn.call(i.context), !0;
                case 2:
                  return i.fn.call(i.context, o), !0;
                case 3:
                  return i.fn.call(i.context, o, e), !0;
                case 4:
                  return i.fn.call(i.context, o, e, t), !0;
                case 5:
                  return i.fn.call(i.context, o, e, t, s), !0;
                case 6:
                  return i.fn.call(i.context, o, e, t, s, a), !0;
              }
              for (n = 1, f = new Array(r - 1); n < r; n++)
                f[n - 1] = arguments[n];
              i.fn.apply(i.context, f);
            } else {
              var h = i.length, S;
              for (n = 0; n < h; n++)
                switch (i[n].once && this.removeListener(c, i[n].fn, void 0, !0), r) {
                  case 1:
                    i[n].fn.call(i[n].context);
                    break;
                  case 2:
                    i[n].fn.call(i[n].context, o);
                    break;
                  case 3:
                    i[n].fn.call(i[n].context, o, e);
                    break;
                  case 4:
                    i[n].fn.call(i[n].context, o, e, t);
                    break;
                  default:
                    if (!f)
                      for (S = 1, f = new Array(r - 1); S < r; S++)
                        f[S - 1] = arguments[S];
                    i[n].fn.apply(i[n].context, f);
                }
            }
            return !0;
          }, v.prototype.on = function(c, o, e) {
            var t = new _(o, e || this), s = T ? T + c : c;
            return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], t] : this._events[s].push(t) : (this._events[s] = t, this._eventsCount++), this;
          }, v.prototype.once = function(c, o, e) {
            var t = new _(o, e || this, !0), s = T ? T + c : c;
            return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], t] : this._events[s].push(t) : (this._events[s] = t, this._eventsCount++), this;
          }, v.prototype.removeListener = function(c, o, e, t) {
            var s = T ? T + c : c;
            if (!this._events[s])
              return this;
            if (!o)
              return --this._eventsCount === 0 ? this._events = new A() : delete this._events[s], this;
            var a = this._events[s];
            if (a.fn)
              a.fn === o && (!t || a.once) && (!e || a.context === e) && (--this._eventsCount === 0 ? this._events = new A() : delete this._events[s]);
            else {
              for (var l = 0, i = [], r = a.length; l < r; l++)
                (a[l].fn !== o || t && !a[l].once || e && a[l].context !== e) && i.push(a[l]);
              i.length ? this._events[s] = i.length === 1 ? i[0] : i : --this._eventsCount === 0 ? this._events = new A() : delete this._events[s];
            }
            return this;
          }, v.prototype.removeAllListeners = function(c) {
            var o;
            return c ? (o = T ? T + c : c, this._events[o] && (--this._eventsCount === 0 ? this._events = new A() : delete this._events[o])) : (this._events = new A(), this._eventsCount = 0), this;
          }, v.prototype.off = v.prototype.removeListener, v.prototype.addListener = v.prototype.on, v.prototype.setMaxListeners = function() {
            return this;
          }, v.prefixed = T, v.EventEmitter = v, typeof b < "u" && (b.exports = v);
        },
        /* 55 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.matchText = u.matchSpacing = u.matchNewline = u.matchBlot = u.matchAttributor = u.default = void 0;
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(G) {
            return typeof G;
          } : function(G) {
            return G && typeof Symbol == "function" && G.constructor === Symbol && G !== Symbol.prototype ? "symbol" : typeof G;
          }, A = /* @__PURE__ */ function() {
            function G(V, Q) {
              var ee = [], Y = !0, oe = !1, ae = void 0;
              try {
                for (var le = V[Symbol.iterator](), Ee; !(Y = (Ee = le.next()).done) && (ee.push(Ee.value), !(Q && ee.length === Q)); Y = !0)
                  ;
              } catch (Ae) {
                oe = !0, ae = Ae;
              } finally {
                try {
                  !Y && le.return && le.return();
                } finally {
                  if (oe)
                    throw ae;
                }
              }
              return ee;
            }
            return function(V, Q) {
              if (Array.isArray(V))
                return V;
              if (Symbol.iterator in Object(V))
                return G(V, Q);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function G(V, Q) {
              for (var ee = 0; ee < Q.length; ee++) {
                var Y = Q[ee];
                Y.enumerable = Y.enumerable || !1, Y.configurable = !0, "value" in Y && (Y.writable = !0), Object.defineProperty(V, Y.key, Y);
              }
            }
            return function(V, Q, ee) {
              return Q && G(V.prototype, Q), ee && G(V, ee), V;
            };
          }(), v = d(3), p = g(v), c = d(2), o = g(c), e = d(0), t = g(e), s = d(5), a = g(s), l = d(10), i = g(l), r = d(9), f = g(r), n = d(36), h = d(37), S = d(13), O = g(S), E = d(26), N = d(38), m = d(39), y = d(40);
          function g(G) {
            return G && G.__esModule ? G : { default: G };
          }
          function k(G, V, Q) {
            return V in G ? Object.defineProperty(G, V, { value: Q, enumerable: !0, configurable: !0, writable: !0 }) : G[V] = Q, G;
          }
          function P(G, V) {
            if (!(G instanceof V))
              throw new TypeError("Cannot call a class as a function");
          }
          function q(G, V) {
            if (!G)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return V && (typeof V == "object" || typeof V == "function") ? V : G;
          }
          function F(G, V) {
            if (typeof V != "function" && V !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof V);
            G.prototype = Object.create(V && V.prototype, { constructor: { value: G, enumerable: !1, writable: !0, configurable: !0 } }), V && (Object.setPrototypeOf ? Object.setPrototypeOf(G, V) : G.__proto__ = V);
          }
          var U = (0, i.default)("quill:clipboard"), Z = "__ql-matcher", B = [[Node.TEXT_NODE, me], [Node.TEXT_NODE, ue], ["br", te], [Node.ELEMENT_NODE, ue], [Node.ELEMENT_NODE, W], [Node.ELEMENT_NODE, ce], [Node.ELEMENT_NODE, K], [Node.ELEMENT_NODE, Oe], ["li", ie], ["b", z.bind(z, "bold")], ["i", z.bind(z, "italic")], ["style", ne]], D = [n.AlignAttribute, N.DirectionAttribute].reduce(function(G, V) {
            return G[V.keyName] = V, G;
          }, {}), w = [n.AlignStyle, h.BackgroundStyle, E.ColorStyle, N.DirectionStyle, m.FontStyle, y.SizeStyle].reduce(function(G, V) {
            return G[V.keyName] = V, G;
          }, {}), j = function(G) {
            F(V, G);
            function V(Q, ee) {
              P(this, V);
              var Y = q(this, (V.__proto__ || Object.getPrototypeOf(V)).call(this, Q, ee));
              return Y.quill.root.addEventListener("paste", Y.onPaste.bind(Y)), Y.container = Y.quill.addContainer("ql-clipboard"), Y.container.setAttribute("contenteditable", !0), Y.container.setAttribute("tabindex", -1), Y.matchers = [], B.concat(Y.options.matchers).forEach(function(oe) {
                var ae = A(oe, 2), le = ae[0], Ee = ae[1];
                !ee.matchVisual && Ee === ce || Y.addMatcher(le, Ee);
              }), Y;
            }
            return _(V, [{
              key: "addMatcher",
              value: function(ee, Y) {
                this.matchers.push([ee, Y]);
              }
            }, {
              key: "convert",
              value: function(ee) {
                if (typeof ee == "string")
                  return this.container.innerHTML = ee.replace(/\>\r?\n +\</g, "><"), this.convert();
                var Y = this.quill.getFormat(this.quill.selection.savedRange.index);
                if (Y[O.default.blotName]) {
                  var oe = this.container.innerText;
                  return this.container.innerHTML = "", new o.default().insert(oe, k({}, O.default.blotName, Y[O.default.blotName]));
                }
                var ae = this.prepareMatching(), le = A(ae, 2), Ee = le[0], Ae = le[1], pe = C(this.container, Ee, Ae);
                return $(pe, `
`) && pe.ops[pe.ops.length - 1].attributes == null && (pe = pe.compose(new o.default().retain(pe.length() - 1).delete(1))), U.log("convert", this.container.innerHTML, pe), this.container.innerHTML = "", pe;
              }
            }, {
              key: "dangerouslyPasteHTML",
              value: function(ee, Y) {
                var oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a.default.sources.API;
                if (typeof ee == "string")
                  this.quill.setContents(this.convert(ee), Y), this.quill.setSelection(0, a.default.sources.SILENT);
                else {
                  var ae = this.convert(Y);
                  this.quill.updateContents(new o.default().retain(ee).concat(ae), oe), this.quill.setSelection(ee + ae.length(), a.default.sources.SILENT);
                }
              }
            }, {
              key: "onPaste",
              value: function(ee) {
                var Y = this;
                if (!(ee.defaultPrevented || !this.quill.isEnabled())) {
                  var oe = this.quill.getSelection(), ae = new o.default().retain(oe.index), le = this.quill.scrollingContainer.scrollTop;
                  this.container.focus(), this.quill.selection.update(a.default.sources.SILENT), setTimeout(function() {
                    ae = ae.concat(Y.convert()).delete(oe.length), Y.quill.updateContents(ae, a.default.sources.USER), Y.quill.setSelection(ae.length() - oe.length, a.default.sources.SILENT), Y.quill.scrollingContainer.scrollTop = le, Y.quill.focus();
                  }, 1);
                }
              }
            }, {
              key: "prepareMatching",
              value: function() {
                var ee = this, Y = [], oe = [];
                return this.matchers.forEach(function(ae) {
                  var le = A(ae, 2), Ee = le[0], Ae = le[1];
                  switch (Ee) {
                    case Node.TEXT_NODE:
                      oe.push(Ae);
                      break;
                    case Node.ELEMENT_NODE:
                      Y.push(Ae);
                      break;
                    default:
                      [].forEach.call(ee.container.querySelectorAll(Ee), function(pe) {
                        pe[Z] = pe[Z] || [], pe[Z].push(Ae);
                      });
                      break;
                  }
                }), [Y, oe];
              }
            }]), V;
          }(f.default);
          j.DEFAULTS = {
            matchers: [],
            matchVisual: !0
          };
          function I(G, V, Q) {
            return (typeof V > "u" ? "undefined" : T(V)) === "object" ? Object.keys(V).reduce(function(ee, Y) {
              return I(ee, Y, V[Y]);
            }, G) : G.reduce(function(ee, Y) {
              return Y.attributes && Y.attributes[V] ? ee.push(Y) : ee.insert(Y.insert, (0, p.default)({}, k({}, V, Q), Y.attributes));
            }, new o.default());
          }
          function H(G) {
            if (G.nodeType !== Node.ELEMENT_NODE)
              return {};
            var V = "__ql-computed-style";
            return G[V] || (G[V] = window.getComputedStyle(G));
          }
          function $(G, V) {
            for (var Q = "", ee = G.ops.length - 1; ee >= 0 && Q.length < V.length; --ee) {
              var Y = G.ops[ee];
              if (typeof Y.insert != "string")
                break;
              Q = Y.insert + Q;
            }
            return Q.slice(-1 * V.length) === V;
          }
          function R(G) {
            if (G.childNodes.length === 0)
              return !1;
            var V = H(G);
            return ["block", "list-item"].indexOf(V.display) > -1;
          }
          function C(G, V, Q) {
            return G.nodeType === G.TEXT_NODE ? Q.reduce(function(ee, Y) {
              return Y(G, ee);
            }, new o.default()) : G.nodeType === G.ELEMENT_NODE ? [].reduce.call(G.childNodes || [], function(ee, Y) {
              var oe = C(Y, V, Q);
              return Y.nodeType === G.ELEMENT_NODE && (oe = V.reduce(function(ae, le) {
                return le(Y, ae);
              }, oe), oe = (Y[Z] || []).reduce(function(ae, le) {
                return le(Y, ae);
              }, oe)), ee.concat(oe);
            }, new o.default()) : new o.default();
          }
          function z(G, V, Q) {
            return I(Q, G, !0);
          }
          function K(G, V) {
            var Q = t.default.Attributor.Attribute.keys(G), ee = t.default.Attributor.Class.keys(G), Y = t.default.Attributor.Style.keys(G), oe = {};
            return Q.concat(ee).concat(Y).forEach(function(ae) {
              var le = t.default.query(ae, t.default.Scope.ATTRIBUTE);
              le != null && (oe[le.attrName] = le.value(G), oe[le.attrName]) || (le = D[ae], le != null && (le.attrName === ae || le.keyName === ae) && (oe[le.attrName] = le.value(G) || void 0), le = w[ae], le != null && (le.attrName === ae || le.keyName === ae) && (le = w[ae], oe[le.attrName] = le.value(G) || void 0));
            }), Object.keys(oe).length > 0 && (V = I(V, oe)), V;
          }
          function W(G, V) {
            var Q = t.default.query(G);
            if (Q == null)
              return V;
            if (Q.prototype instanceof t.default.Embed) {
              var ee = {}, Y = Q.value(G);
              Y != null && (ee[Q.blotName] = Y, V = new o.default().insert(ee, Q.formats(G)));
            } else
              typeof Q.formats == "function" && (V = I(V, Q.blotName, Q.formats(G)));
            return V;
          }
          function te(G, V) {
            return $(V, `
`) || V.insert(`
`), V;
          }
          function ne() {
            return new o.default();
          }
          function ie(G, V) {
            var Q = t.default.query(G);
            if (Q == null || Q.blotName !== "list-item" || !$(V, `
`))
              return V;
            for (var ee = -1, Y = G.parentNode; !Y.classList.contains("ql-clipboard"); )
              (t.default.query(Y) || {}).blotName === "list" && (ee += 1), Y = Y.parentNode;
            return ee <= 0 ? V : V.compose(new o.default().retain(V.length() - 1).retain(1, { indent: ee }));
          }
          function ue(G, V) {
            return $(V, `
`) || (R(G) || V.length() > 0 && G.nextSibling && R(G.nextSibling)) && V.insert(`
`), V;
          }
          function ce(G, V) {
            if (R(G) && G.nextElementSibling != null && !$(V, `

`)) {
              var Q = G.offsetHeight + parseFloat(H(G).marginTop) + parseFloat(H(G).marginBottom);
              G.nextElementSibling.offsetTop > G.offsetTop + Q * 1.5 && V.insert(`
`);
            }
            return V;
          }
          function Oe(G, V) {
            var Q = {}, ee = G.style || {};
            return ee.fontStyle && H(G).fontStyle === "italic" && (Q.italic = !0), ee.fontWeight && (H(G).fontWeight.startsWith("bold") || parseInt(H(G).fontWeight) >= 700) && (Q.bold = !0), Object.keys(Q).length > 0 && (V = I(V, Q)), parseFloat(ee.textIndent || 0) > 0 && (V = new o.default().insert("	").concat(V)), V;
          }
          function me(G, V) {
            var Q = G.data;
            if (G.parentNode.tagName === "O:P")
              return V.insert(Q.trim());
            if (Q.trim().length === 0 && G.parentNode.classList.contains("ql-clipboard"))
              return V;
            if (!H(G.parentNode).whiteSpace.startsWith("pre")) {
              var ee = function(oe, ae) {
                return ae = ae.replace(/[^\u00a0]/g, ""), ae.length < 1 && oe ? " " : ae;
              };
              Q = Q.replace(/\r\n/g, " ").replace(/\n/g, " "), Q = Q.replace(/\s\s+/g, ee.bind(ee, !0)), (G.previousSibling == null && R(G.parentNode) || G.previousSibling != null && R(G.previousSibling)) && (Q = Q.replace(/^\s+/, ee.bind(ee, !1))), (G.nextSibling == null && R(G.parentNode) || G.nextSibling != null && R(G.nextSibling)) && (Q = Q.replace(/\s+$/, ee.bind(ee, !1)));
            }
            return V.insert(Q);
          }
          u.default = j, u.matchAttributor = K, u.matchBlot = W, u.matchNewline = ue, u.matchSpacing = ce, u.matchText = me;
        },
        /* 56 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function s(a, l) {
              for (var i = 0; i < l.length; i++) {
                var r = l[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
              }
            }
            return function(a, l, i) {
              return l && s(a.prototype, l), i && s(a, i), a;
            };
          }(), A = function s(a, l, i) {
            a === null && (a = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(a, l);
            if (r === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : s(f, l, i);
            } else {
              if ("value" in r)
                return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            }
          }, _ = d(6), v = p(_);
          function p(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function c(s, a) {
            if (!(s instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : s;
          }
          function e(s, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            s.prototype = Object.create(a && a.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : s.__proto__ = a);
          }
          var t = function(s) {
            e(a, s);
            function a() {
              return c(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return T(a, [{
              key: "optimize",
              value: function(i) {
                A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "optimize", this).call(this, i), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
              }
            }], [{
              key: "create",
              value: function() {
                return A(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this);
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), a;
          }(v.default);
          t.blotName = "bold", t.tagName = ["STRONG", "B"], u.default = t;
        },
        /* 57 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.addControls = u.default = void 0;
          var T = /* @__PURE__ */ function() {
            function y(g, k) {
              var P = [], q = !0, F = !1, U = void 0;
              try {
                for (var Z = g[Symbol.iterator](), B; !(q = (B = Z.next()).done) && (P.push(B.value), !(k && P.length === k)); q = !0)
                  ;
              } catch (D) {
                F = !0, U = D;
              } finally {
                try {
                  !q && Z.return && Z.return();
                } finally {
                  if (F)
                    throw U;
                }
              }
              return P;
            }
            return function(g, k) {
              if (Array.isArray(g))
                return g;
              if (Symbol.iterator in Object(g))
                return y(g, k);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function y(g, k) {
              for (var P = 0; P < k.length; P++) {
                var q = k[P];
                q.enumerable = q.enumerable || !1, q.configurable = !0, "value" in q && (q.writable = !0), Object.defineProperty(g, q.key, q);
              }
            }
            return function(g, k, P) {
              return k && y(g.prototype, k), P && y(g, P), g;
            };
          }(), _ = d(2), v = i(_), p = d(0), c = i(p), o = d(5), e = i(o), t = d(10), s = i(t), a = d(9), l = i(a);
          function i(y) {
            return y && y.__esModule ? y : { default: y };
          }
          function r(y, g, k) {
            return g in y ? Object.defineProperty(y, g, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : y[g] = k, y;
          }
          function f(y, g) {
            if (!(y instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(y, g) {
            if (!y)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : y;
          }
          function h(y, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            y.prototype = Object.create(g && g.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(y, g) : y.__proto__ = g);
          }
          var S = (0, s.default)("quill:toolbar"), O = function(y) {
            h(g, y);
            function g(k, P) {
              f(this, g);
              var q = n(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, k, P));
              if (Array.isArray(q.options.container)) {
                var F = document.createElement("div");
                N(F, q.options.container), k.container.parentNode.insertBefore(F, k.container), q.container = F;
              } else
                typeof q.options.container == "string" ? q.container = document.querySelector(q.options.container) : q.container = q.options.container;
              if (!(q.container instanceof HTMLElement)) {
                var U;
                return U = S.error("Container required for toolbar", q.options), n(q, U);
              }
              return q.container.classList.add("ql-toolbar"), q.controls = [], q.handlers = {}, Object.keys(q.options.handlers).forEach(function(Z) {
                q.addHandler(Z, q.options.handlers[Z]);
              }), [].forEach.call(q.container.querySelectorAll("button, select"), function(Z) {
                q.attach(Z);
              }), q.quill.on(e.default.events.EDITOR_CHANGE, function(Z, B) {
                Z === e.default.events.SELECTION_CHANGE && q.update(B);
              }), q.quill.on(e.default.events.SCROLL_OPTIMIZE, function() {
                var Z = q.quill.selection.getRange(), B = T(Z, 1), D = B[0];
                q.update(D);
              }), q;
            }
            return A(g, [{
              key: "addHandler",
              value: function(P, q) {
                this.handlers[P] = q;
              }
            }, {
              key: "attach",
              value: function(P) {
                var q = this, F = [].find.call(P.classList, function(Z) {
                  return Z.indexOf("ql-") === 0;
                });
                if (F) {
                  if (F = F.slice(3), P.tagName === "BUTTON" && P.setAttribute("type", "button"), this.handlers[F] == null) {
                    if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[F] == null) {
                      S.warn("ignoring attaching to disabled format", F, P);
                      return;
                    }
                    if (c.default.query(F) == null) {
                      S.warn("ignoring attaching to nonexistent format", F, P);
                      return;
                    }
                  }
                  var U = P.tagName === "SELECT" ? "change" : "click";
                  P.addEventListener(U, function(Z) {
                    var B = void 0;
                    if (P.tagName === "SELECT") {
                      if (P.selectedIndex < 0)
                        return;
                      var D = P.options[P.selectedIndex];
                      D.hasAttribute("selected") ? B = !1 : B = D.value || !1;
                    } else
                      P.classList.contains("ql-active") ? B = !1 : B = P.value || !P.hasAttribute("value"), Z.preventDefault();
                    q.quill.focus();
                    var w = q.quill.selection.getRange(), j = T(w, 1), I = j[0];
                    if (q.handlers[F] != null)
                      q.handlers[F].call(q, B);
                    else if (c.default.query(F).prototype instanceof c.default.Embed) {
                      if (B = prompt("Enter " + F), !B)
                        return;
                      q.quill.updateContents(new v.default().retain(I.index).delete(I.length).insert(r({}, F, B)), e.default.sources.USER);
                    } else
                      q.quill.format(F, B, e.default.sources.USER);
                    q.update(I);
                  }), this.controls.push([F, P]);
                }
              }
            }, {
              key: "update",
              value: function(P) {
                var q = P == null ? {} : this.quill.getFormat(P);
                this.controls.forEach(function(F) {
                  var U = T(F, 2), Z = U[0], B = U[1];
                  if (B.tagName === "SELECT") {
                    var D = void 0;
                    if (P == null)
                      D = null;
                    else if (q[Z] == null)
                      D = B.querySelector("option[selected]");
                    else if (!Array.isArray(q[Z])) {
                      var w = q[Z];
                      typeof w == "string" && (w = w.replace(/\"/g, '\\"')), D = B.querySelector('option[value="' + w + '"]');
                    }
                    D == null ? (B.value = "", B.selectedIndex = -1) : D.selected = !0;
                  } else if (P == null)
                    B.classList.remove("ql-active");
                  else if (B.hasAttribute("value")) {
                    var j = q[Z] === B.getAttribute("value") || q[Z] != null && q[Z].toString() === B.getAttribute("value") || q[Z] == null && !B.getAttribute("value");
                    B.classList.toggle("ql-active", j);
                  } else
                    B.classList.toggle("ql-active", q[Z] != null);
                });
              }
            }]), g;
          }(l.default);
          O.DEFAULTS = {};
          function E(y, g, k) {
            var P = document.createElement("button");
            P.setAttribute("type", "button"), P.classList.add("ql-" + g), k != null && (P.value = k), y.appendChild(P);
          }
          function N(y, g) {
            Array.isArray(g[0]) || (g = [g]), g.forEach(function(k) {
              var P = document.createElement("span");
              P.classList.add("ql-formats"), k.forEach(function(q) {
                if (typeof q == "string")
                  E(P, q);
                else {
                  var F = Object.keys(q)[0], U = q[F];
                  Array.isArray(U) ? m(P, F, U) : E(P, F, U);
                }
              }), y.appendChild(P);
            });
          }
          function m(y, g, k) {
            var P = document.createElement("select");
            P.classList.add("ql-" + g), k.forEach(function(q) {
              var F = document.createElement("option");
              q !== !1 ? F.setAttribute("value", q) : F.setAttribute("selected", "selected"), P.appendChild(F);
            }), y.appendChild(P);
          }
          O.DEFAULTS = {
            container: null,
            handlers: {
              clean: function() {
                var g = this, k = this.quill.getSelection();
                if (k != null)
                  if (k.length == 0) {
                    var P = this.quill.getFormat();
                    Object.keys(P).forEach(function(q) {
                      c.default.query(q, c.default.Scope.INLINE) != null && g.quill.format(q, !1);
                    });
                  } else
                    this.quill.removeFormat(k, e.default.sources.USER);
              },
              direction: function(g) {
                var k = this.quill.getFormat().align;
                g === "rtl" && k == null ? this.quill.format("align", "right", e.default.sources.USER) : !g && k === "right" && this.quill.format("align", !1, e.default.sources.USER), this.quill.format("direction", g, e.default.sources.USER);
              },
              indent: function(g) {
                var k = this.quill.getSelection(), P = this.quill.getFormat(k), q = parseInt(P.indent || 0);
                if (g === "+1" || g === "-1") {
                  var F = g === "+1" ? 1 : -1;
                  P.direction === "rtl" && (F *= -1), this.quill.format("indent", q + F, e.default.sources.USER);
                }
              },
              link: function(g) {
                g === !0 && (g = prompt("Enter link URL:")), this.quill.format("link", g, e.default.sources.USER);
              },
              list: function(g) {
                var k = this.quill.getSelection(), P = this.quill.getFormat(k);
                g === "check" ? P.list === "checked" || P.list === "unchecked" ? this.quill.format("list", !1, e.default.sources.USER) : this.quill.format("list", "unchecked", e.default.sources.USER) : this.quill.format("list", g, e.default.sources.USER);
              }
            }
          }, u.default = O, u.addControls = N;
        },
        /* 58 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
        },
        /* 59 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function s(a, l) {
              for (var i = 0; i < l.length; i++) {
                var r = l[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
              }
            }
            return function(a, l, i) {
              return l && s(a.prototype, l), i && s(a, i), a;
            };
          }(), A = function s(a, l, i) {
            a === null && (a = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(a, l);
            if (r === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : s(f, l, i);
            } else {
              if ("value" in r)
                return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            }
          }, _ = d(28), v = p(_);
          function p(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function c(s, a) {
            if (!(s instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : s;
          }
          function e(s, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            s.prototype = Object.create(a && a.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : s.__proto__ = a);
          }
          var t = function(s) {
            e(a, s);
            function a(l, i) {
              c(this, a);
              var r = o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
              return r.label.innerHTML = i, r.container.classList.add("ql-color-picker"), [].slice.call(r.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(f) {
                f.classList.add("ql-primary");
              }), r;
            }
            return T(a, [{
              key: "buildItem",
              value: function(i) {
                var r = A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "buildItem", this).call(this, i);
                return r.style.backgroundColor = i.getAttribute("value") || "", r;
              }
            }, {
              key: "selectItem",
              value: function(i, r) {
                A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "selectItem", this).call(this, i, r);
                var f = this.label.querySelector(".ql-color-label"), n = i && i.getAttribute("data-value") || "";
                f && (f.tagName === "line" ? f.style.stroke = n : f.style.fill = n);
              }
            }]), a;
          }(v.default);
          u.default = t;
        },
        /* 60 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function s(a, l) {
              for (var i = 0; i < l.length; i++) {
                var r = l[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
              }
            }
            return function(a, l, i) {
              return l && s(a.prototype, l), i && s(a, i), a;
            };
          }(), A = function s(a, l, i) {
            a === null && (a = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(a, l);
            if (r === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : s(f, l, i);
            } else {
              if ("value" in r)
                return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            }
          }, _ = d(28), v = p(_);
          function p(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function c(s, a) {
            if (!(s instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : s;
          }
          function e(s, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            s.prototype = Object.create(a && a.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : s.__proto__ = a);
          }
          var t = function(s) {
            e(a, s);
            function a(l, i) {
              c(this, a);
              var r = o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
              return r.container.classList.add("ql-icon-picker"), [].forEach.call(r.container.querySelectorAll(".ql-picker-item"), function(f) {
                f.innerHTML = i[f.getAttribute("data-value") || ""];
              }), r.defaultItem = r.container.querySelector(".ql-selected"), r.selectItem(r.defaultItem), r;
            }
            return T(a, [{
              key: "selectItem",
              value: function(i, r) {
                A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "selectItem", this).call(this, i, r), i = i || this.defaultItem, this.label.innerHTML = i.innerHTML;
              }
            }]), a;
          }(v.default);
          u.default = t;
        },
        /* 61 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function v(p, c) {
              for (var o = 0; o < c.length; o++) {
                var e = c[o];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(p, e.key, e);
              }
            }
            return function(p, c, o) {
              return c && v(p.prototype, c), o && v(p, o), p;
            };
          }();
          function A(v, p) {
            if (!(v instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          var _ = function() {
            function v(p, c) {
              var o = this;
              A(this, v), this.quill = p, this.boundsContainer = c || document.body, this.root = p.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px";
              }), this.hide();
            }
            return T(v, [{
              key: "hide",
              value: function() {
                this.root.classList.add("ql-hidden");
              }
            }, {
              key: "position",
              value: function(c) {
                var o = c.left + c.width / 2 - this.root.offsetWidth / 2, e = c.bottom + this.quill.root.scrollTop;
                this.root.style.left = o + "px", this.root.style.top = e + "px", this.root.classList.remove("ql-flip");
                var t = this.boundsContainer.getBoundingClientRect(), s = this.root.getBoundingClientRect(), a = 0;
                if (s.right > t.right && (a = t.right - s.right, this.root.style.left = o + a + "px"), s.left < t.left && (a = t.left - s.left, this.root.style.left = o + a + "px"), s.bottom > t.bottom) {
                  var l = s.bottom - s.top, i = c.bottom - c.top + l;
                  this.root.style.top = e - i + "px", this.root.classList.add("ql-flip");
                }
                return a;
              }
            }, {
              key: "show",
              value: function() {
                this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
              }
            }]), v;
          }();
          u.default = _;
        },
        /* 62 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function m(y, g) {
              var k = [], P = !0, q = !1, F = void 0;
              try {
                for (var U = y[Symbol.iterator](), Z; !(P = (Z = U.next()).done) && (k.push(Z.value), !(g && k.length === g)); P = !0)
                  ;
              } catch (B) {
                q = !0, F = B;
              } finally {
                try {
                  !P && U.return && U.return();
                } finally {
                  if (q)
                    throw F;
                }
              }
              return k;
            }
            return function(y, g) {
              if (Array.isArray(y))
                return y;
              if (Symbol.iterator in Object(y))
                return m(y, g);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = function m(y, g, k) {
            y === null && (y = Function.prototype);
            var P = Object.getOwnPropertyDescriptor(y, g);
            if (P === void 0) {
              var q = Object.getPrototypeOf(y);
              return q === null ? void 0 : m(q, g, k);
            } else {
              if ("value" in P)
                return P.value;
              var F = P.get;
              return F === void 0 ? void 0 : F.call(k);
            }
          }, _ = /* @__PURE__ */ function() {
            function m(y, g) {
              for (var k = 0; k < g.length; k++) {
                var P = g[k];
                P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(y, P.key, P);
              }
            }
            return function(y, g, k) {
              return g && m(y.prototype, g), k && m(y, k), y;
            };
          }(), v = d(3), p = f(v), c = d(8), o = f(c), e = d(43), t = f(e), s = d(27), a = f(s), l = d(15), i = d(41), r = f(i);
          function f(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function n(m, y) {
            if (!(m instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function h(m, y) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == "object" || typeof y == "function") ? y : m;
          }
          function S(m, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof y);
            m.prototype = Object.create(y && y.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(m, y) : m.__proto__ = y);
          }
          var O = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], E = function(m) {
            S(y, m);
            function y(g, k) {
              n(this, y), k.modules.toolbar != null && k.modules.toolbar.container == null && (k.modules.toolbar.container = O);
              var P = h(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, g, k));
              return P.quill.container.classList.add("ql-snow"), P;
            }
            return _(y, [{
              key: "extendToolbar",
              value: function(k) {
                k.container.classList.add("ql-snow"), this.buildButtons([].slice.call(k.container.querySelectorAll("button")), r.default), this.buildPickers([].slice.call(k.container.querySelectorAll("select")), r.default), this.tooltip = new N(this.quill, this.options.bounds), k.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(P, q) {
                  k.handlers.link.call(k, !q.format.link);
                });
              }
            }]), y;
          }(t.default);
          E.DEFAULTS = (0, p.default)(!0, {}, t.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(y) {
                    if (y) {
                      var g = this.quill.getSelection();
                      if (g == null || g.length == 0)
                        return;
                      var k = this.quill.getText(g);
                      /^\S+@\S+\.\S+$/.test(k) && k.indexOf("mailto:") !== 0 && (k = "mailto:" + k);
                      var P = this.quill.theme.tooltip;
                      P.edit("link", k);
                    } else
                      this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var N = function(m) {
            S(y, m);
            function y(g, k) {
              n(this, y);
              var P = h(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, g, k));
              return P.preview = P.root.querySelector("a.ql-preview"), P;
            }
            return _(y, [{
              key: "listen",
              value: function() {
                var k = this;
                A(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(P) {
                  k.root.classList.contains("ql-editing") ? k.save() : k.edit("link", k.preview.textContent), P.preventDefault();
                }), this.root.querySelector("a.ql-remove").addEventListener("click", function(P) {
                  if (k.linkRange != null) {
                    var q = k.linkRange;
                    k.restoreFocus(), k.quill.formatText(q, "link", !1, o.default.sources.USER), delete k.linkRange;
                  }
                  P.preventDefault(), k.hide();
                }), this.quill.on(o.default.events.SELECTION_CHANGE, function(P, q, F) {
                  if (P != null) {
                    if (P.length === 0 && F === o.default.sources.USER) {
                      var U = k.quill.scroll.descendant(a.default, P.index), Z = T(U, 2), B = Z[0], D = Z[1];
                      if (B != null) {
                        k.linkRange = new l.Range(P.index - D, B.length());
                        var w = a.default.formats(B.domNode);
                        k.preview.textContent = w, k.preview.setAttribute("href", w), k.show(), k.position(k.quill.getBounds(k.linkRange));
                        return;
                      }
                    } else
                      delete k.linkRange;
                    k.hide();
                  }
                });
              }
            }, {
              key: "show",
              value: function() {
                A(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
              }
            }]), y;
          }(e.BaseTooltip);
          N.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), u.default = E;
        },
        /* 63 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(29), A = Y(T), _ = d(36), v = d(38), p = d(64), c = d(65), o = Y(c), e = d(66), t = Y(e), s = d(67), a = Y(s), l = d(37), i = d(26), r = d(39), f = d(40), n = d(56), h = Y(n), S = d(68), O = Y(S), E = d(27), N = Y(E), m = d(69), y = Y(m), g = d(70), k = Y(g), P = d(71), q = Y(P), F = d(72), U = Y(F), Z = d(73), B = Y(Z), D = d(13), w = Y(D), j = d(74), I = Y(j), H = d(75), $ = Y(H), R = d(57), C = Y(R), z = d(41), K = Y(z), W = d(28), te = Y(W), ne = d(59), ie = Y(ne), ue = d(60), ce = Y(ue), Oe = d(61), me = Y(Oe), G = d(108), V = Y(G), Q = d(62), ee = Y(Q);
          function Y(oe) {
            return oe && oe.__esModule ? oe : { default: oe };
          }
          A.default.register({
            "attributors/attribute/direction": v.DirectionAttribute,
            "attributors/class/align": _.AlignClass,
            "attributors/class/background": l.BackgroundClass,
            "attributors/class/color": i.ColorClass,
            "attributors/class/direction": v.DirectionClass,
            "attributors/class/font": r.FontClass,
            "attributors/class/size": f.SizeClass,
            "attributors/style/align": _.AlignStyle,
            "attributors/style/background": l.BackgroundStyle,
            "attributors/style/color": i.ColorStyle,
            "attributors/style/direction": v.DirectionStyle,
            "attributors/style/font": r.FontStyle,
            "attributors/style/size": f.SizeStyle
          }, !0), A.default.register({
            "formats/align": _.AlignClass,
            "formats/direction": v.DirectionClass,
            "formats/indent": p.IndentClass,
            "formats/background": l.BackgroundStyle,
            "formats/color": i.ColorStyle,
            "formats/font": r.FontClass,
            "formats/size": f.SizeClass,
            "formats/blockquote": o.default,
            "formats/code-block": w.default,
            "formats/header": t.default,
            "formats/list": a.default,
            "formats/bold": h.default,
            "formats/code": D.Code,
            "formats/italic": O.default,
            "formats/link": N.default,
            "formats/script": y.default,
            "formats/strike": k.default,
            "formats/underline": q.default,
            "formats/image": U.default,
            "formats/video": B.default,
            "formats/list/item": s.ListItem,
            "modules/formula": I.default,
            "modules/syntax": $.default,
            "modules/toolbar": C.default,
            "themes/bubble": V.default,
            "themes/snow": ee.default,
            "ui/icons": K.default,
            "ui/picker": te.default,
            "ui/icon-picker": ce.default,
            "ui/color-picker": ie.default,
            "ui/tooltip": me.default
          }, !0), u.default = A.default;
        },
        /* 64 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.IndentClass = void 0;
          var T = /* @__PURE__ */ function() {
            function a(l, i) {
              for (var r = 0; r < i.length; r++) {
                var f = i[r];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
              }
            }
            return function(l, i, r) {
              return i && a(l.prototype, i), r && a(l, r), l;
            };
          }(), A = function a(l, i, r) {
            l === null && (l = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(l, i);
            if (f === void 0) {
              var n = Object.getPrototypeOf(l);
              return n === null ? void 0 : a(n, i, r);
            } else {
              if ("value" in f)
                return f.value;
              var h = f.get;
              return h === void 0 ? void 0 : h.call(r);
            }
          }, _ = d(0), v = p(_);
          function p(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function c(a, l) {
            if (!(a instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == "object" || typeof l == "function") ? l : a;
          }
          function e(a, l) {
            if (typeof l != "function" && l !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof l);
            a.prototype = Object.create(l && l.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
          }
          var t = function(a) {
            e(l, a);
            function l() {
              return c(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
            }
            return T(l, [{
              key: "add",
              value: function(r, f) {
                if (f === "+1" || f === "-1") {
                  var n = this.value(r) || 0;
                  f = f === "+1" ? n + 1 : n - 1;
                }
                return f === 0 ? (this.remove(r), !0) : A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "add", this).call(this, r, f);
              }
            }, {
              key: "canAdd",
              value: function(r, f) {
                return A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, r, f) || A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, r, parseInt(f));
              }
            }, {
              key: "value",
              value: function(r) {
                return parseInt(A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "value", this).call(this, r)) || void 0;
              }
            }]), l;
          }(v.default.Attributor.Class), s = new t("indent", "ql-indent", {
            scope: v.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          });
          u.IndentClass = s;
        },
        /* 65 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(4), A = _(T);
          function _(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function v(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(e, t) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && (typeof t == "object" || typeof t == "function") ? t : e;
          }
          function c(e, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
          }
          var o = function(e) {
            c(t, e);
            function t() {
              return v(this, t), p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return t;
          }(A.default);
          o.blotName = "blockquote", o.tagName = "blockquote", u.default = o;
        },
        /* 66 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function t(s, a) {
              for (var l = 0; l < a.length; l++) {
                var i = a[l];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(s, i.key, i);
              }
            }
            return function(s, a, l) {
              return a && t(s.prototype, a), l && t(s, l), s;
            };
          }(), A = d(4), _ = v(A);
          function v(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function p(t, s) {
            if (!(t instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(t, s) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : t;
          }
          function o(t, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            t.prototype = Object.create(s && s.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : t.__proto__ = s);
          }
          var e = function(t) {
            o(s, t);
            function s() {
              return p(this, s), c(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
            }
            return T(s, null, [{
              key: "formats",
              value: function(l) {
                return this.tagName.indexOf(l.tagName) + 1;
              }
            }]), s;
          }(_.default);
          e.blotName = "header", e.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], u.default = e;
        },
        /* 67 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.ListItem = void 0;
          var T = /* @__PURE__ */ function() {
            function n(h, S) {
              for (var O = 0; O < S.length; O++) {
                var E = S[O];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(h, E.key, E);
              }
            }
            return function(h, S, O) {
              return S && n(h.prototype, S), O && n(h, O), h;
            };
          }(), A = function n(h, S, O) {
            h === null && (h = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(h, S);
            if (E === void 0) {
              var N = Object.getPrototypeOf(h);
              return N === null ? void 0 : n(N, S, O);
            } else {
              if ("value" in E)
                return E.value;
              var m = E.get;
              return m === void 0 ? void 0 : m.call(O);
            }
          }, _ = d(0), v = t(_), p = d(4), c = t(p), o = d(25), e = t(o);
          function t(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function s(n, h, S) {
            return h in n ? Object.defineProperty(n, h, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : n[h] = S, n;
          }
          function a(n, h) {
            if (!(n instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(n, h) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : n;
          }
          function i(n, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            n.prototype = Object.create(h && h.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(n, h) : n.__proto__ = h);
          }
          var r = function(n) {
            i(h, n);
            function h() {
              return a(this, h), l(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return T(h, [{
              key: "format",
              value: function(O, E) {
                O === f.blotName && !E ? this.replaceWith(v.default.create(this.statics.scope)) : A(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "format", this).call(this, O, E);
              }
            }, {
              key: "remove",
              value: function() {
                this.prev == null && this.next == null ? this.parent.remove() : A(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "remove", this).call(this);
              }
            }, {
              key: "replaceWith",
              value: function(O, E) {
                return this.parent.isolate(this.offset(this.parent), this.length()), O === this.parent.statics.blotName ? (this.parent.replaceWith(O, E), this) : (this.parent.unwrap(), A(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "replaceWith", this).call(this, O, E));
              }
            }], [{
              key: "formats",
              value: function(O) {
                return O.tagName === this.tagName ? void 0 : A(h.__proto__ || Object.getPrototypeOf(h), "formats", this).call(this, O);
              }
            }]), h;
          }(c.default);
          r.blotName = "list-item", r.tagName = "LI";
          var f = function(n) {
            i(h, n), T(h, null, [{
              key: "create",
              value: function(O) {
                var E = O === "ordered" ? "OL" : "UL", N = A(h.__proto__ || Object.getPrototypeOf(h), "create", this).call(this, E);
                return (O === "checked" || O === "unchecked") && N.setAttribute("data-checked", O === "checked"), N;
              }
            }, {
              key: "formats",
              value: function(O) {
                if (O.tagName === "OL")
                  return "ordered";
                if (O.tagName === "UL")
                  return O.hasAttribute("data-checked") ? O.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
              }
            }]);
            function h(S) {
              a(this, h);
              var O = l(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, S)), E = function(m) {
                if (m.target.parentNode === S) {
                  var y = O.statics.formats(S), g = v.default.find(m.target);
                  y === "checked" ? g.format("list", "unchecked") : y === "unchecked" && g.format("list", "checked");
                }
              };
              return S.addEventListener("touchstart", E), S.addEventListener("mousedown", E), O;
            }
            return T(h, [{
              key: "format",
              value: function(O, E) {
                this.children.length > 0 && this.children.tail.format(O, E);
              }
            }, {
              key: "formats",
              value: function() {
                return s({}, this.statics.blotName, this.statics.formats(this.domNode));
              }
            }, {
              key: "insertBefore",
              value: function(O, E) {
                if (O instanceof r)
                  A(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "insertBefore", this).call(this, O, E);
                else {
                  var N = E == null ? this.length() : E.offset(this), m = this.split(N);
                  m.parent.insertBefore(O, m);
                }
              }
            }, {
              key: "optimize",
              value: function(O) {
                A(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "optimize", this).call(this, O);
                var E = this.next;
                E != null && E.prev === this && E.statics.blotName === this.statics.blotName && E.domNode.tagName === this.domNode.tagName && E.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (E.moveChildren(this), E.remove());
              }
            }, {
              key: "replace",
              value: function(O) {
                if (O.statics.blotName !== this.statics.blotName) {
                  var E = v.default.create(this.statics.defaultChild);
                  O.moveChildren(E), this.appendChild(E);
                }
                A(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "replace", this).call(this, O);
              }
            }]), h;
          }(e.default);
          f.blotName = "list", f.scope = v.default.Scope.BLOCK_BLOT, f.tagName = ["OL", "UL"], f.defaultChild = "list-item", f.allowedChildren = [r], u.ListItem = r, u.default = f;
        },
        /* 68 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(56), A = _(T);
          function _(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function v(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(e, t) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && (typeof t == "object" || typeof t == "function") ? t : e;
          }
          function c(e, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
          }
          var o = function(e) {
            c(t, e);
            function t() {
              return v(this, t), p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return t;
          }(A.default);
          o.blotName = "italic", o.tagName = ["EM", "I"], u.default = o;
        },
        /* 69 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function s(a, l) {
              for (var i = 0; i < l.length; i++) {
                var r = l[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
              }
            }
            return function(a, l, i) {
              return l && s(a.prototype, l), i && s(a, i), a;
            };
          }(), A = function s(a, l, i) {
            a === null && (a = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(a, l);
            if (r === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : s(f, l, i);
            } else {
              if ("value" in r)
                return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            }
          }, _ = d(6), v = p(_);
          function p(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function c(s, a) {
            if (!(s instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : s;
          }
          function e(s, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            s.prototype = Object.create(a && a.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : s.__proto__ = a);
          }
          var t = function(s) {
            e(a, s);
            function a() {
              return c(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return T(a, null, [{
              key: "create",
              value: function(i) {
                return i === "super" ? document.createElement("sup") : i === "sub" ? document.createElement("sub") : A(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this, i);
              }
            }, {
              key: "formats",
              value: function(i) {
                if (i.tagName === "SUB")
                  return "sub";
                if (i.tagName === "SUP")
                  return "super";
              }
            }]), a;
          }(v.default);
          t.blotName = "script", t.tagName = ["SUB", "SUP"], u.default = t;
        },
        /* 70 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(6), A = _(T);
          function _(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function v(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(e, t) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && (typeof t == "object" || typeof t == "function") ? t : e;
          }
          function c(e, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
          }
          var o = function(e) {
            c(t, e);
            function t() {
              return v(this, t), p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return t;
          }(A.default);
          o.blotName = "strike", o.tagName = "S", u.default = o;
        },
        /* 71 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = d(6), A = _(T);
          function _(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function v(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(e, t) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && (typeof t == "object" || typeof t == "function") ? t : e;
          }
          function c(e, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
          }
          var o = function(e) {
            c(t, e);
            function t() {
              return v(this, t), p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return t;
          }(A.default);
          o.blotName = "underline", o.tagName = "U", u.default = o;
        },
        /* 72 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function l(i, r) {
              for (var f = 0; f < r.length; f++) {
                var n = r[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
              }
            }
            return function(i, r, f) {
              return r && l(i.prototype, r), f && l(i, f), i;
            };
          }(), A = function l(i, r, f) {
            i === null && (i = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(i, r);
            if (n === void 0) {
              var h = Object.getPrototypeOf(i);
              return h === null ? void 0 : l(h, r, f);
            } else {
              if ("value" in n)
                return n.value;
              var S = n.get;
              return S === void 0 ? void 0 : S.call(f);
            }
          }, _ = d(0), v = c(_), p = d(27);
          function c(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function o(l, i) {
            if (!(l instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(l, i) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : l;
          }
          function t(l, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            l.prototype = Object.create(i && i.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(l, i) : l.__proto__ = i);
          }
          var s = ["alt", "height", "width"], a = function(l) {
            t(i, l);
            function i() {
              return o(this, i), e(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
            }
            return T(i, [{
              key: "format",
              value: function(f, n) {
                s.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, f, n);
              }
            }], [{
              key: "create",
              value: function(f) {
                var n = A(i.__proto__ || Object.getPrototypeOf(i), "create", this).call(this, f);
                return typeof f == "string" && n.setAttribute("src", this.sanitize(f)), n;
              }
            }, {
              key: "formats",
              value: function(f) {
                return s.reduce(function(n, h) {
                  return f.hasAttribute(h) && (n[h] = f.getAttribute(h)), n;
                }, {});
              }
            }, {
              key: "match",
              value: function(f) {
                return /\.(jpe?g|gif|png)$/.test(f) || /^data:image\/.+;base64/.test(f);
              }
            }, {
              key: "sanitize",
              value: function(f) {
                return (0, p.sanitize)(f, ["http", "https", "data"]) ? f : "//:0";
              }
            }, {
              key: "value",
              value: function(f) {
                return f.getAttribute("src");
              }
            }]), i;
          }(v.default.Embed);
          a.blotName = "image", a.tagName = "IMG", u.default = a;
        },
        /* 73 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function l(i, r) {
              for (var f = 0; f < r.length; f++) {
                var n = r[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
              }
            }
            return function(i, r, f) {
              return r && l(i.prototype, r), f && l(i, f), i;
            };
          }(), A = function l(i, r, f) {
            i === null && (i = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(i, r);
            if (n === void 0) {
              var h = Object.getPrototypeOf(i);
              return h === null ? void 0 : l(h, r, f);
            } else {
              if ("value" in n)
                return n.value;
              var S = n.get;
              return S === void 0 ? void 0 : S.call(f);
            }
          }, _ = d(4), v = d(27), p = c(v);
          function c(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function o(l, i) {
            if (!(l instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(l, i) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : l;
          }
          function t(l, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            l.prototype = Object.create(i && i.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(l, i) : l.__proto__ = i);
          }
          var s = ["height", "width"], a = function(l) {
            t(i, l);
            function i() {
              return o(this, i), e(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
            }
            return T(i, [{
              key: "format",
              value: function(f, n) {
                s.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, f, n);
              }
            }], [{
              key: "create",
              value: function(f) {
                var n = A(i.__proto__ || Object.getPrototypeOf(i), "create", this).call(this, f);
                return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(f)), n;
              }
            }, {
              key: "formats",
              value: function(f) {
                return s.reduce(function(n, h) {
                  return f.hasAttribute(h) && (n[h] = f.getAttribute(h)), n;
                }, {});
              }
            }, {
              key: "sanitize",
              value: function(f) {
                return p.default.sanitize(f);
              }
            }, {
              key: "value",
              value: function(f) {
                return f.getAttribute("src");
              }
            }]), i;
          }(_.BlockEmbed);
          a.blotName = "video", a.className = "ql-video", a.tagName = "IFRAME", u.default = a;
        },
        /* 74 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.FormulaBlot = void 0;
          var T = /* @__PURE__ */ function() {
            function f(n, h) {
              for (var S = 0; S < h.length; S++) {
                var O = h[S];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(n, O.key, O);
              }
            }
            return function(n, h, S) {
              return h && f(n.prototype, h), S && f(n, S), n;
            };
          }(), A = function f(n, h, S) {
            n === null && (n = Function.prototype);
            var O = Object.getOwnPropertyDescriptor(n, h);
            if (O === void 0) {
              var E = Object.getPrototypeOf(n);
              return E === null ? void 0 : f(E, h, S);
            } else {
              if ("value" in O)
                return O.value;
              var N = O.get;
              return N === void 0 ? void 0 : N.call(S);
            }
          }, _ = d(35), v = t(_), p = d(5), c = t(p), o = d(9), e = t(o);
          function t(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function s(f, n) {
            if (!(f instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n == "object" || typeof n == "function") ? n : f;
          }
          function l(f, n) {
            if (typeof n != "function" && n !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
          }
          var i = function(f) {
            l(n, f);
            function n() {
              return s(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
            }
            return T(n, null, [{
              key: "create",
              value: function(S) {
                var O = A(n.__proto__ || Object.getPrototypeOf(n), "create", this).call(this, S);
                return typeof S == "string" && (window.katex.render(S, O, {
                  throwOnError: !1,
                  errorColor: "#f00"
                }), O.setAttribute("data-value", S)), O;
              }
            }, {
              key: "value",
              value: function(S) {
                return S.getAttribute("data-value");
              }
            }]), n;
          }(v.default);
          i.blotName = "formula", i.className = "ql-formula", i.tagName = "SPAN";
          var r = function(f) {
            l(n, f), T(n, null, [{
              key: "register",
              value: function() {
                c.default.register(i, !0);
              }
            }]);
            function n() {
              s(this, n);
              var h = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
              if (window.katex == null)
                throw new Error("Formula module requires KaTeX.");
              return h;
            }
            return n;
          }(e.default);
          u.FormulaBlot = i, u.default = r;
        },
        /* 75 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.CodeToken = u.CodeBlock = void 0;
          var T = /* @__PURE__ */ function() {
            function S(O, E) {
              for (var N = 0; N < E.length; N++) {
                var m = E[N];
                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(O, m.key, m);
              }
            }
            return function(O, E, N) {
              return E && S(O.prototype, E), N && S(O, N), O;
            };
          }(), A = function S(O, E, N) {
            O === null && (O = Function.prototype);
            var m = Object.getOwnPropertyDescriptor(O, E);
            if (m === void 0) {
              var y = Object.getPrototypeOf(O);
              return y === null ? void 0 : S(y, E, N);
            } else {
              if ("value" in m)
                return m.value;
              var g = m.get;
              return g === void 0 ? void 0 : g.call(N);
            }
          }, _ = d(0), v = a(_), p = d(5), c = a(p), o = d(9), e = a(o), t = d(13), s = a(t);
          function a(S) {
            return S && S.__esModule ? S : { default: S };
          }
          function l(S, O) {
            if (!(S instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(S, O) {
            if (!S)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return O && (typeof O == "object" || typeof O == "function") ? O : S;
          }
          function r(S, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof O);
            S.prototype = Object.create(O && O.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(S, O) : S.__proto__ = O);
          }
          var f = function(S) {
            r(O, S);
            function O() {
              return l(this, O), i(this, (O.__proto__ || Object.getPrototypeOf(O)).apply(this, arguments));
            }
            return T(O, [{
              key: "replaceWith",
              value: function(N) {
                this.domNode.textContent = this.domNode.textContent, this.attach(), A(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "replaceWith", this).call(this, N);
              }
            }, {
              key: "highlight",
              value: function(N) {
                var m = this.domNode.textContent;
                this.cachedText !== m && ((m.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = N(m), this.domNode.normalize(), this.attach()), this.cachedText = m);
              }
            }]), O;
          }(s.default);
          f.className = "ql-syntax";
          var n = new v.default.Attributor.Class("token", "hljs", {
            scope: v.default.Scope.INLINE
          }), h = function(S) {
            r(O, S), T(O, null, [{
              key: "register",
              value: function() {
                c.default.register(n, !0), c.default.register(f, !0);
              }
            }]);
            function O(E, N) {
              l(this, O);
              var m = i(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, E, N));
              if (typeof m.options.highlight != "function")
                throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
              var y = null;
              return m.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
                clearTimeout(y), y = setTimeout(function() {
                  m.highlight(), y = null;
                }, m.options.interval);
              }), m.highlight(), m;
            }
            return T(O, [{
              key: "highlight",
              value: function() {
                var N = this;
                if (!this.quill.selection.composing) {
                  this.quill.update(c.default.sources.USER);
                  var m = this.quill.getSelection();
                  this.quill.scroll.descendants(f).forEach(function(y) {
                    y.highlight(N.options.highlight);
                  }), this.quill.update(c.default.sources.SILENT), m != null && this.quill.setSelection(m, c.default.sources.SILENT);
                }
              }
            }]), O;
          }(e.default);
          h.DEFAULTS = {
            highlight: function() {
              return window.hljs == null ? null : function(S) {
                var O = window.hljs.highlightAuto(S);
                return O.value;
              };
            }(),
            interval: 1e3
          }, u.CodeBlock = f, u.CodeToken = n, u.default = h;
        },
        /* 76 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 77 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
        },
        /* 78 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 79 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
        },
        /* 80 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
        },
        /* 81 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
        },
        /* 82 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
        },
        /* 83 */
        /***/
        function(b, u) {
          b.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
        },
        /* 84 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
        },
        /* 85 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
        },
        /* 86 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
        },
        /* 87 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 88 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 89 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 90 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
        },
        /* 91 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
        },
        /* 92 */
        /***/
        function(b, u) {
          b.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
        },
        /* 93 */
        /***/
        function(b, u) {
          b.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
        },
        /* 94 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
        },
        /* 95 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
        },
        /* 96 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
        },
        /* 97 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
        },
        /* 98 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
        },
        /* 99 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
        },
        /* 100 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
        },
        /* 101 */
        /***/
        function(b, u) {
          b.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
        },
        /* 102 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
        },
        /* 103 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
        },
        /* 104 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
        },
        /* 105 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
        },
        /* 106 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
        },
        /* 107 */
        /***/
        function(b, u) {
          b.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
        },
        /* 108 */
        /***/
        function(b, u, d) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), u.default = u.BubbleTooltip = void 0;
          var T = function O(E, N, m) {
            E === null && (E = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(E, N);
            if (y === void 0) {
              var g = Object.getPrototypeOf(E);
              return g === null ? void 0 : O(g, N, m);
            } else {
              if ("value" in y)
                return y.value;
              var k = y.get;
              return k === void 0 ? void 0 : k.call(m);
            }
          }, A = /* @__PURE__ */ function() {
            function O(E, N) {
              for (var m = 0; m < N.length; m++) {
                var y = N[m];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(E, y.key, y);
              }
            }
            return function(E, N, m) {
              return N && O(E.prototype, N), m && O(E, m), E;
            };
          }(), _ = d(3), v = l(_), p = d(8), c = l(p), o = d(43), e = l(o), t = d(15), s = d(41), a = l(s);
          function l(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function i(O, E) {
            if (!(O instanceof E))
              throw new TypeError("Cannot call a class as a function");
          }
          function r(O, E) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return E && (typeof E == "object" || typeof E == "function") ? E : O;
          }
          function f(O, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof E);
            O.prototype = Object.create(E && E.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(O, E) : O.__proto__ = E);
          }
          var n = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], h = function(O) {
            f(E, O);
            function E(N, m) {
              i(this, E), m.modules.toolbar != null && m.modules.toolbar.container == null && (m.modules.toolbar.container = n);
              var y = r(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, N, m));
              return y.quill.container.classList.add("ql-bubble"), y;
            }
            return A(E, [{
              key: "extendToolbar",
              value: function(m) {
                this.tooltip = new S(this.quill, this.options.bounds), this.tooltip.root.appendChild(m.container), this.buildButtons([].slice.call(m.container.querySelectorAll("button")), a.default), this.buildPickers([].slice.call(m.container.querySelectorAll("select")), a.default);
              }
            }]), E;
          }(e.default);
          h.DEFAULTS = (0, v.default)(!0, {}, e.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(E) {
                    E ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var S = function(O) {
            f(E, O);
            function E(N, m) {
              i(this, E);
              var y = r(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, N, m));
              return y.quill.on(c.default.events.EDITOR_CHANGE, function(g, k, P, q) {
                if (g === c.default.events.SELECTION_CHANGE)
                  if (k != null && k.length > 0 && q === c.default.sources.USER) {
                    y.show(), y.root.style.left = "0px", y.root.style.width = "", y.root.style.width = y.root.offsetWidth + "px";
                    var F = y.quill.getLines(k.index, k.length);
                    if (F.length === 1)
                      y.position(y.quill.getBounds(k));
                    else {
                      var U = F[F.length - 1], Z = y.quill.getIndex(U), B = Math.min(U.length() - 1, k.index + k.length - Z), D = y.quill.getBounds(new t.Range(Z, B));
                      y.position(D);
                    }
                  } else
                    document.activeElement !== y.textbox && y.quill.hasFocus() && y.hide();
              }), y;
            }
            return A(E, [{
              key: "listen",
              value: function() {
                var m = this;
                T(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                  m.root.classList.remove("ql-editing");
                }), this.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
                  setTimeout(function() {
                    if (!m.root.classList.contains("ql-hidden")) {
                      var y = m.quill.getSelection();
                      y != null && m.position(m.quill.getBounds(y));
                    }
                  }, 1);
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.show();
              }
            }, {
              key: "position",
              value: function(m) {
                var y = T(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "position", this).call(this, m), g = this.root.querySelector(".ql-tooltip-arrow");
                if (g.style.marginLeft = "", y === 0)
                  return y;
                g.style.marginLeft = -1 * y - g.offsetWidth / 2 + "px";
              }
            }]), E;
          }(o.BaseTooltip);
          S.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), u.BubbleTooltip = S, u.default = h;
        },
        /* 109 */
        /***/
        function(b, u, d) {
          b.exports = d(63);
        }
        /******/
      ]).default
    );
  });
})(bn);
var ys = bn.exports, gs = we && we.__extends || /* @__PURE__ */ function() {
  var x = function(L, b) {
    return x = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, d) {
      u.__proto__ = d;
    } || function(u, d) {
      for (var T in d)
        d.hasOwnProperty(T) && (u[T] = d[T]);
    }, x(L, b);
  };
  return function(L, b) {
    x(L, b);
    function u() {
      this.constructor = L;
    }
    L.prototype = b === null ? Object.create(b) : (u.prototype = b.prototype, new u());
  };
}(), Ye = we && we.__assign || function() {
  return Ye = Object.assign || function(x) {
    for (var L, b = 1, u = arguments.length; b < u; b++) {
      L = arguments[b];
      for (var d in L)
        Object.prototype.hasOwnProperty.call(L, d) && (x[d] = L[d]);
    }
    return x;
  }, Ye.apply(this, arguments);
}, ms = we && we.__spreadArrays || function() {
  for (var x = 0, L = 0, b = arguments.length; L < b; L++)
    x += arguments[L].length;
  for (var u = Array(x), d = 0, L = 0; L < b; L++)
    for (var T = arguments[L], A = 0, _ = T.length; A < _; A++, d++)
      u[d] = T[A];
  return u;
}, nt = we && we.__importDefault || function(x) {
  return x && x.__esModule ? x : { default: x };
}, Se = nt(gt), bs = nt(Cn), He = nt(ps), nn = nt(ys), _s = (
  /** @class */
  function(x) {
    gs(L, x);
    function L(b) {
      var u = x.call(this, b) || this;
      u.dirtyProps = [
        "modules",
        "formats",
        "bounds",
        "theme",
        "children"
      ], u.cleanProps = [
        "id",
        "className",
        "style",
        "placeholder",
        "tabIndex",
        "onChange",
        "onChangeSelection",
        "onFocus",
        "onBlur",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ], u.state = {
        generation: 0
      }, u.selection = null, u.onEditorChange = function(T, A, _, v) {
        var p, c, o, e;
        T === "text-change" ? (c = (p = u).onEditorChangeText) === null || c === void 0 || c.call(p, u.editor.root.innerHTML, A, v, u.unprivilegedEditor) : T === "selection-change" && ((e = (o = u).onEditorChangeSelection) === null || e === void 0 || e.call(o, A, v, u.unprivilegedEditor));
      };
      var d = u.isControlled() ? b.value : b.defaultValue;
      return u.value = d ?? "", u;
    }
    return L.prototype.validateProps = function(b) {
      var u;
      if (Se.default.Children.count(b.children) > 1)
        throw new Error("The Quill editing area can only be composed of a single React element.");
      if (Se.default.Children.count(b.children)) {
        var d = Se.default.Children.only(b.children);
        if (((u = d) === null || u === void 0 ? void 0 : u.type) === "textarea")
          throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
      }
      if (this.lastDeltaChangeSet && b.value === this.lastDeltaChangeSet)
        throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
    }, L.prototype.shouldComponentUpdate = function(b, u) {
      var d = this, T;
      if (this.validateProps(b), !this.editor || this.state.generation !== u.generation)
        return !0;
      if ("value" in b) {
        var A = this.getEditorContents(), _ = (T = b.value, T ?? "");
        this.isEqualValue(_, A) || this.setEditorContents(this.editor, _);
      }
      return b.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, b.readOnly), ms(this.cleanProps, this.dirtyProps).some(function(v) {
        return !He.default(b[v], d.props[v]);
      });
    }, L.prototype.shouldComponentRegenerate = function(b) {
      var u = this;
      return this.dirtyProps.some(function(d) {
        return !He.default(b[d], u.props[d]);
      });
    }, L.prototype.componentDidMount = function() {
      this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents());
    }, L.prototype.componentWillUnmount = function() {
      this.destroyEditor();
    }, L.prototype.componentDidUpdate = function(b, u) {
      var d = this;
      if (this.editor && this.shouldComponentRegenerate(b)) {
        var T = this.editor.getContents(), A = this.editor.getSelection();
        this.regenerationSnapshot = { delta: T, selection: A }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
      }
      if (this.state.generation !== u.generation) {
        var _ = this.regenerationSnapshot, T = _.delta, v = _.selection;
        delete this.regenerationSnapshot, this.instantiateEditor();
        var p = this.editor;
        p.setContents(T), rn(function() {
          return d.setEditorSelection(p, v);
        });
      }
    }, L.prototype.instantiateEditor = function() {
      this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
    }, L.prototype.destroyEditor = function() {
      this.editor && this.unhookEditor(this.editor);
    }, L.prototype.isControlled = function() {
      return "value" in this.props;
    }, L.prototype.getEditorConfig = function() {
      return {
        bounds: this.props.bounds,
        formats: this.props.formats,
        modules: this.props.modules,
        placeholder: this.props.placeholder,
        readOnly: this.props.readOnly,
        scrollingContainer: this.props.scrollingContainer,
        tabIndex: this.props.tabIndex,
        theme: this.props.theme
      };
    }, L.prototype.getEditor = function() {
      if (!this.editor)
        throw new Error("Accessing non-instantiated editor");
      return this.editor;
    }, L.prototype.createEditor = function(b, u) {
      var d = new nn.default(b, u);
      return u.tabIndex != null && this.setEditorTabIndex(d, u.tabIndex), this.hookEditor(d), d;
    }, L.prototype.hookEditor = function(b) {
      this.unprivilegedEditor = this.makeUnprivilegedEditor(b), b.on("editor-change", this.onEditorChange);
    }, L.prototype.unhookEditor = function(b) {
      b.off("editor-change", this.onEditorChange);
    }, L.prototype.getEditorContents = function() {
      return this.value;
    }, L.prototype.getEditorSelection = function() {
      return this.selection;
    }, L.prototype.isDelta = function(b) {
      return b && b.ops;
    }, L.prototype.isEqualValue = function(b, u) {
      return this.isDelta(b) && this.isDelta(u) ? He.default(b.ops, u.ops) : He.default(b, u);
    }, L.prototype.setEditorContents = function(b, u) {
      var d = this;
      this.value = u;
      var T = this.getEditorSelection();
      typeof u == "string" ? b.setContents(b.clipboard.convert(u)) : b.setContents(u), rn(function() {
        return d.setEditorSelection(b, T);
      });
    }, L.prototype.setEditorSelection = function(b, u) {
      if (this.selection = u, u) {
        var d = b.getLength();
        u.index = Math.max(0, Math.min(u.index, d - 1)), u.length = Math.max(0, Math.min(u.length, d - 1 - u.index)), b.setSelection(u);
      }
    }, L.prototype.setEditorTabIndex = function(b, u) {
      var d, T;
      !((T = (d = b) === null || d === void 0 ? void 0 : d.scroll) === null || T === void 0) && T.domNode && (b.scroll.domNode.tabIndex = u);
    }, L.prototype.setEditorReadOnly = function(b, u) {
      u ? b.disable() : b.enable();
    }, L.prototype.makeUnprivilegedEditor = function(b) {
      var u = b;
      return {
        getHTML: function() {
          return u.root.innerHTML;
        },
        getLength: u.getLength.bind(u),
        getText: u.getText.bind(u),
        getContents: u.getContents.bind(u),
        getSelection: u.getSelection.bind(u),
        getBounds: u.getBounds.bind(u)
      };
    }, L.prototype.getEditingArea = function() {
      if (!this.editingArea)
        throw new Error("Instantiating on missing editing area");
      var b = bs.default.findDOMNode(this.editingArea);
      if (!b)
        throw new Error("Cannot find element for editing area");
      if (b.nodeType === 3)
        throw new Error("Editing area cannot be a text node");
      return b;
    }, L.prototype.renderEditingArea = function() {
      var b = this, u = this.props, d = u.children, T = u.preserveWhitespace, A = this.state.generation, _ = {
        key: A,
        ref: function(v) {
          b.editingArea = v;
        }
      };
      return Se.default.Children.count(d) ? Se.default.cloneElement(Se.default.Children.only(d), _) : T ? Se.default.createElement("pre", Ye({}, _)) : Se.default.createElement("div", Ye({}, _));
    }, L.prototype.render = function() {
      var b;
      return Se.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (b = this.props.className, b ?? ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
    }, L.prototype.onEditorChangeText = function(b, u, d, T) {
      var A, _;
      if (this.editor) {
        var v = this.isDelta(this.value) ? T.getContents() : T.getHTML();
        v !== this.getEditorContents() && (this.lastDeltaChangeSet = u, this.value = v, (_ = (A = this.props).onChange) === null || _ === void 0 || _.call(A, b, u, d, T));
      }
    }, L.prototype.onEditorChangeSelection = function(b, u, d) {
      var T, A, _, v, p, c;
      if (this.editor) {
        var o = this.getEditorSelection(), e = !o && b, t = o && !b;
        He.default(b, o) || (this.selection = b, (A = (T = this.props).onChangeSelection) === null || A === void 0 || A.call(T, b, u, d), e ? (v = (_ = this.props).onFocus) === null || v === void 0 || v.call(_, b, u, d) : t && ((c = (p = this.props).onBlur) === null || c === void 0 || c.call(p, o, u, d)));
      }
    }, L.prototype.focus = function() {
      this.editor && this.editor.focus();
    }, L.prototype.blur = function() {
      this.editor && (this.selection = null, this.editor.blur());
    }, L.displayName = "React Quill", L.Quill = nn.default, L.defaultProps = {
      theme: "snow",
      modules: {},
      readOnly: !1
    }, L;
  }(Se.default.Component)
);
function rn(x) {
  Promise.resolve().then(x);
}
var yt = _s;
const Os = /* @__PURE__ */ Bn(yt), Es = "16px", As = ["bold", "italic", "underline", "link"], _n = [
  { label: "Heading 1 (34px)", value: "34px" },
  { label: "Heading 2 (24px)", value: "24px" },
  { label: "Heading 3 (20px)", value: "20px" },
  { label: "Body 1 (16px)", value: "16px" },
  { label: "Body 2 (14px)", value: "14px" },
  { label: "Body 3 (11px)", value: "11px" }
], Ts = (x) => {
  const {
    toolbarOptions: L = ["align", "color", "image", "size", "indents", "lists"],
    customSizes: b,
    formats: u,
    classes: d
  } = x;
  return /* @__PURE__ */ fe.jsx(fe.Fragment, { children: /* @__PURE__ */ fe.jsxs("div", { id: x.id, className: `rf-toolbar ${(d == null ? void 0 : d.root) || ""}`, children: [
    L.includes("size") && b ? xs(b) : Ss,
    /* @__PURE__ */ fe.jsxs("span", { className: "ql-formats", children: [
      u ? u.map((T) => /* @__PURE__ */ fe.jsx("button", { className: `ql-${T}` }, T)) : Rs,
      L.includes("color") && ks
    ] }),
    L.includes("image") && ws,
    L.includes("align") && Ls,
    L.includes("indents") && Ps,
    L.includes("lists") && Ns
  ] }) });
}, ws = /* @__PURE__ */ fe.jsx("button", { className: "ql-image" }), ks = /* @__PURE__ */ fe.jsxs("select", { className: "ql-color", title: "Char color", children: [
  /* @__PURE__ */ fe.jsx("option", { value: "color-picker", children: "Color Picker" }),
  /* @__PURE__ */ fe.jsx("option", { value: "red" }),
  /* @__PURE__ */ fe.jsx("option", { value: "green" }),
  /* @__PURE__ */ fe.jsx("option", { value: "blue" }),
  /* @__PURE__ */ fe.jsx("option", { value: "orange" }),
  /* @__PURE__ */ fe.jsx("option", { value: "violet" }),
  /* @__PURE__ */ fe.jsx("option", { value: "#d0d1d2" })
] }), xs = (x) => x.length ? /* @__PURE__ */ fe.jsx("select", { className: "ql-size", children: x.map((L, b) => /* @__PURE__ */ fe.jsxs(
  "option",
  {
    style: { fontSize: L.value },
    selected: b === 0,
    value: L.value,
    children: [
      L.label,
      " (",
      L.value,
      ")"
    ]
  },
  L.value
)) }) : null, Ss = /* @__PURE__ */ fe.jsx("select", { className: "ql-size", defaultValue: `${Es}`, children: _n.map((x) => /* @__PURE__ */ fe.jsx("option", { value: x.value, children: x.label }, x.value)) }), Ns = /* @__PURE__ */ fe.jsxs("span", { className: "ql-formats", children: [
  /* @__PURE__ */ fe.jsx("button", { className: "ql-list", value: "ordered" }),
  /* @__PURE__ */ fe.jsx("button", { className: "ql-list", value: "bullet" })
] }), Ps = /* @__PURE__ */ fe.jsxs("span", { className: "ql-formats", children: [
  /* @__PURE__ */ fe.jsx("button", { className: "ql-indent", value: "-1" }),
  /* @__PURE__ */ fe.jsx("button", { className: "ql-indent", value: "+1" })
] }), Rs = /* @__PURE__ */ fe.jsx(fe.Fragment, { children: As.map((x) => /* @__PURE__ */ fe.jsx("button", { className: `ql-${x}` }, x)) }), Ls = /* @__PURE__ */ fe.jsxs("span", { className: "ql-formats", children: [
  /* @__PURE__ */ fe.jsx("button", { className: "ql-direction", value: "rtl" }),
  /* @__PURE__ */ fe.jsx("select", { className: "ql-align" })
] }), Ds = (x) => {
  const {
    value: L,
    onChange: b,
    name: u,
    label: d,
    helperText: T,
    customImageUploadAdapter: A,
    toolbarProps: _,
    errorText: v,
    classes: p,
    sizes: c
  } = x, o = Dn(null);
  at(() => {
    const a = yt.Quill.import("attributors/style/size");
    a.whitelist = c ? c == null ? void 0 : c.map((l) => l.value) : _n.map((l) => l.value), yt.Quill.register(a, !1);
  }, [c]);
  const e = `toolbar-${u}`, t = Mn(() => {
    if (A) {
      const a = document.createElement("input");
      a.setAttribute("type", "file"), a.click(), a.onchange = async () => {
        var i, r;
        const l = (i = a.files) == null ? void 0 : i[0];
        if (l) {
          const f = await A(l), n = (r = o.current) == null ? void 0 : r.getEditor(), h = n == null ? void 0 : n.getSelection();
          h && (n == null || n.insertEmbed(h.index, "image", f));
        }
      };
    }
  }, [A]), s = (a) => {
    var i;
    const l = (i = o.current) == null ? void 0 : i.getEditor();
    if (console.log({ quill: l, value: a }), a === "color-picker") {
      let r = document.getElementById("color-picker");
      r || (r = document.createElement("input"), r.id = "color-picker", r.type = "color", r.style.display = "none", r.value = "#FF0000", document.body.appendChild(r), r.addEventListener(
        "change",
        function() {
          l == null || l.format("color", r.value);
        },
        !1
      )), r.click();
    } else
      l == null || l.format("color", a);
  };
  return at(() => {
    var l;
    const a = (l = o.current) == null ? void 0 : l.getEditor();
    a && a.getModule("toolbar").addHandler("image", t);
  }, [t]), at(() => {
    var i;
    const a = (i = o.current) == null ? void 0 : i.getEditor(), l = a == null ? void 0 : a.getModule("toolbar");
    l == null || l.addHandler("color", s), console.log("to", l);
  }, []), /* @__PURE__ */ fe.jsxs(fe.Fragment, { children: [
    /* @__PURE__ */ fe.jsx("label", { htmlFor: u, className: `rte-label ${p == null ? void 0 : p.input}`, children: d }),
    /* @__PURE__ */ fe.jsx(Ts, { ..._, customSizes: c, id: e }),
    /* @__PURE__ */ fe.jsx(
      Os,
      {
        ref: o,
        value: L,
        onChange: (a, l, i, r) => {
          b(r.getHTML());
        },
        modules: {
          toolbar: {
            container: `#${e}`
          }
        },
        className: `rte-input ${p == null ? void 0 : p.input}`
      }
    ),
    /* @__PURE__ */ fe.jsx("span", { className: `helper-text ${v ? "error" : ""}`, children: v || T })
  ] });
};
export {
  Ds as RteQuill
};
