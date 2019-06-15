! function(i) {
    var s = {};

    function n(e) {
        if (s[e]) return s[e].exports;
        var t = s[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
    }
    n.m = i, n.c = s, n.p = "", n(0)
}([function(e, t, i) {
    "use strict";
    i(1), i(2);
    var s, n = i(3),
        r = (s = n) && s.__esModule ? s : {
            default: s
        };
    document.addEventListener("DOMContentLoaded", function() {
        [].slice.call(document.querySelectorAll("select")).forEach(function(e) {
            e.classList.add("cs-select"), new SelectFx(e)
        });
    });
    new r.default
}, function(c, u, d) {
    var h, f;
    ! function(i) {
        "use strict";

        function s(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var n, r, o;

        function e(e, t) {
            (n(e, t) ? o : r)(e, t)
        }
        o = "classList" in document.documentElement ? (n = function(e, t) {
            return e.classList.contains(t)
        }, r = function(e, t) {
            e.classList.add(t)
        }, function(e, t) {
            e.classList.remove(t)
        }) : (n = function(e, t) {
            return s(t).test(e.className)
        }, r = function(e, t) {
            n(e, t) || (e.className = e.className + " " + t)
        }, function(e, t) {
            e.className = e.className.replace(s(t), " ")
        });
        var a = {
            hasClass: n,
            addClass: r,
            removeClass: o,
            toggleClass: e,
            has: n,
            add: r,
            remove: o,
            toggle: e
        };

        function l(e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }

        function t(e, t) {
            this.el = e, this.options = l({}, this.options), l(this.options, t), this._init()
        }
        void 0 === (f = "function" == typeof(h = a) ? h.call(u, d, u, c) : h) || (c.exports = f), t.prototype.options = {
            newTab: !0,
            stickyPlaceholder: !0,
            onChange: function(e) {
                return !1
            }
        }, t.prototype._init = function() {
            var e = this.el.querySelector("option[selected]");
            this.hasDefaultPlaceholder = e && e.disabled, this.selectedOpt = e || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
        }, t.prototype._createSelectEl = function() {
            function i(e) {
                var t = "",
                    i = "",
                    s = "";
                return !e.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (i += "cs-selected ", this.foundSelected = !0), e.getAttribute("data-class") && (i += e.getAttribute("data-class")), e.getAttribute("data-link") && (s = "data-link=" + e.getAttribute("data-link")), "" !== i && (t = 'class="' + i + '" '), "<li " + t + s + ' data-option data-value="' + e.value + '"><span>' + e.textContent + "</span></li>"
            }
            var s = "";
            [].slice.call(this.el.children).forEach(function(e) {
                if (!e.disabled) {
                    var t = e.tagName.toLowerCase();
                    "option" === t ? s += i(e) : "optgroup" === t && (s += '<li class="cs-optgroup"><span>' + e.label + "</span><ul>", [].slice.call(e.children).forEach(function(e) {
                        s += i(e)
                    }), s += "</ul></li>")
                }
            });
            var e = '<div class="cs-options"><ul>' + s + "</ul></div>";
            this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + e, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
        }, t.prototype._initEvents = function() {
            var i = this;
            this.selPlaceholder.addEventListener("click", function() {
                i._toggleSelect()
            }), this.selOpts.forEach(function(e, t) {
                e.addEventListener("click", function() {
                    i.current = t, i._changeOption(), i._toggleSelect()
                })
            }), document.addEventListener("click", function(e) {
                var t = e.target;
                i._isOpen() && t !== i.selEl && ! function(e, t) {
                    if (!e) return !1;
                    for (var i = e.target || e.srcElement || e || !1; i && i != t;) i = i.parentNode || !1;
                    return !1 !== i
                }(t, i.selEl) && i._toggleSelect()
            }), this.selEl.addEventListener("keydown", function(e) {
                switch (e.keyCode || e.which) {
                    case 38:
                        e.preventDefault(), i._navigateOpts("prev");
                        break;
                    case 40:
                        e.preventDefault(), i._navigateOpts("next");
                        break;
                    case 32:
                        e.preventDefault(), i._isOpen() && void 0 !== i.preSelCurrent && -1 !== i.preSelCurrent && i._changeOption(), i._toggleSelect();
                        break;
                    case 13:
                        e.preventDefault(), i._isOpen() && void 0 !== i.preSelCurrent && -1 !== i.preSelCurrent && (i._changeOption(), i._toggleSelect());
                        break;
                    case 27:
                        e.preventDefault(), i._isOpen() && i._toggleSelect()
                }
            })
        }, t.prototype._navigateOpts = function(e) {
            this._isOpen() || this._toggleSelect();
            var t = void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent ? this.preSelCurrent : this.current;
            ("prev" === e && 0 < t || "next" === e && t < this.selOptsCount - 1) && (this.preSelCurrent = "next" === e ? t + 1 : t - 1, this._removeFocus(), a.add(this.selOpts[this.preSelCurrent], "cs-focus"))
        }, t.prototype._toggleSelect = function() {
            this._removeFocus(), this._isOpen() ? (-1 !== this.current && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), a.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), a.add(this.selEl, "cs-active"))
        }, t.prototype._changeOption = function() {
            void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
            var e = this.selOpts[this.current];
            this.selPlaceholder.textContent = e.textContent, this.el.value = e.getAttribute("data-value");
            var t = this.selEl.querySelector("li.cs-selected");
            t && a.remove(t, "cs-selected"), a.add(e, "cs-selected"), e.getAttribute("data-link") && (this.options.newTab ? i.open(e.getAttribute("data-link"), "_blank") : i.location = e.getAttribute("data-link")), this.options.onChange(this.el.value)
        }, t.prototype._isOpen = function(e) {
            return a.has(this.selEl, "cs-active")
        }, t.prototype._removeFocus = function(e) {
            var t = this.selEl.querySelector("li.cs-focus");
            t && a.remove(t, "cs-focus")
        }, i.SelectFx = t
    }(window)
}, function(e, t) {
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
        "use strict";
        if ("Element" in e) {
            var t = "classList",
                i = "prototype",
                s = e.Element[i],
                n = Object,
                r = String[i].trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                o = Array[i].indexOf || function(e) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                a = function(e, t) {
                    this.name = e, this.code = DOMException[e], this.message = t
                },
                l = function(e, t) {
                    if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return o.call(e, t)
                },
                c = function(e) {
                    for (var t = r.call(e.getAttribute("class") || ""), i = t ? t.split(/\s+/) : [], s = 0, n = i.length; s < n; s++) this.push(i[s]);
                    this._updateClassName = function() {
                        e.setAttribute("class", this.toString())
                    }
                },
                u = c[i] = [],
                d = function() {
                    return new c(this)
                };
            if (a[i] = Error[i], u.item = function(e) {
                    return this[e] || null
                }, u.contains = function(e) {
                    return -1 !== l(this, e += "")
                }, u.add = function() {
                    for (var e, t = arguments, i = 0, s = t.length, n = !1; - 1 === l(this, e = t[i] + "") && (this.push(e), n = !0), ++i < s;);
                    n && this._updateClassName()
                }, u.remove = function() {
                    var e, t, i = arguments,
                        s = 0,
                        n = i.length,
                        r = !1;
                    do {
                        for (t = l(this, e = i[s] + ""); - 1 !== t;) this.splice(t, 1), r = !0, t = l(this, e)
                    } while (++s < n);
                    r && this._updateClassName()
                }, u.toggle = function(e, t) {
                    e += "";
                    var i = this.contains(e),
                        s = i ? !0 !== t && "remove" : !1 !== t && "add";
                    return s && this[s](e), !0 === t || !1 === t ? t : !i
                }, u.toString = function() {
                    return this.join(" ")
                }, n.defineProperty) {
                var h = {
                    get: d,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    n.defineProperty(s, t, h)
                } catch (e) {
                    void 0 !== e.number && -2146823252 !== e.number || (h.enumerable = !1, n.defineProperty(s, t, h))
                }
            } else n[i].__defineGetter__ && s.__defineGetter__(t, d)
        }
    }(window.self), function() {
        "use strict";
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function(e) {
                var s = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function(e) {
                    var t, i = arguments.length;
                    for (t = 0; t < i; t++) e = arguments[t], s.call(this, e)
                }
            };
            t("add"), t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var i = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : i.call(this, e)
            }
        }
        e = null
    }())
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var r = y(i(4)),
        o = i(6),
        a = y(i(5)),
        l = y(i(7)),
        c = y(i(19)),
        u = y(i(20)),
        d = y(i(17)),
        h = i(13),
        f = y(i(16)),
        p = y(i(21));
    i(24), i(25);
    var m = i(26),
        v = i(28),
        g = y(i(29));

    function y(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var w = (s(b, [{
        key: "init",
        value: function() {
            this.Preloader = new c.default, this.Nav = new r.default, this.projectPreview = new l.default, this.allProjects = new u.default, new p.default(".contact-form", "php/index.php", "contact"), new p.default(".subscribe-form", "php/index.php", "subscribe"), this.scroll = new d.default(a.default.main), this.initEvents()
        }
    }, {
        key: "initEvents",
        value: function() {
            var c = this;
            window.addEventListener("load", function() {
                c.slider = new g.default, c.allProjects.init(), c.scroll.init(), a.default.windowIsLoad = !0, c.Preloader.showAtail(), setTimeout(function() {
                    (0, f.default)(".intro-demo-image img"), (0, f.default)(".atail-text-logo img"), (0, f.default)(".atail-slider-item img"), (0, f.default)(".preview-images-item img"), (0, f.default)(".atail-post-title  img"), (0, f.default)(".atail-brands-item a img"), (0, f.default)(".atail-post-title img"), (0, f.default)(".figure-extended img"), (0, f.default)(".atail-post-most-likes img"), (0, f.default)(".widget_recent_entries img"), (0, f.default)(".widget_atail_recent_posts_widget img")
                }, 0)
            }), o.optimizedResize.add(function() {
                new h.Promise(function(e, t) {
                    e(!0)
                }).then(function(e) {
                    return a.default.resize(), c.Preloader.resize(), !0
                }).then(function(e) {
                    return c.Nav.resize(), e
                }).then(function(e) {
                    return c.projectPreview.resize(), e
                }).then(function(e) {
                    return c.allProjects.resize(), e
                }).then(function(e) {
                    return c.scroll.resize(), e
                }).then(function(e) {
                    return e
                }).catch(function(e) {
                    console.error("Error when window was resizing!", e)
                })
            }), document.addEventListener("click", function(e) {
                var t = e.target,
                    i = t.getAttribute("data-action"),
                    s = "A" === t.tagName,
                    n = "BODY" === t.tagName;
                if (!s && !i)
                    for (; !(s && i || 9 === (t = t.parentNode).nodeType);) {
                        if ("BODY" === t.tagName) {
                            n = !0;
                            break
                        }
                        if (i = t.getAttribute("data-action"), s = "A" === t.tagName, null !== i || s) break
                    }
                if (n) return !1;
                if (s) {
                    var r = t.getAttribute("href"),
                        o = r && -1 !== r.indexOf("#"),
                        a = t.getAttribute("onClick");
                    if (!o && !i) {
                        if (!a) {
                            var l = t.getAttribute("target");
                            if (l && -1 !== l.indexOf("_blank")) return !1;
                            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) return c.Nav.closeNav(), !1;
                            e.preventDefault(), document.body.classList.add("atail-hide-body"), setTimeout(function() {
                                location.href = r
                            }, 300)
                        }
                        return
                    }
                    if (o && !i) return
                }
                if (i) switch (i) {
                    case "show-nav":
                        c.Nav.showNav();
                        break;
                    case "close-nav":
                        c.Nav.closeNav();
                        break;
                    case "open-full-post":
                        c.projectPreview.openFullPost(t);
                        break;
                    case "full-post-close":
                        c.projectPreview.closeFullPost(t);
                        break;
                    case "full-post-next-slide":
                        c.projectPreview.nextSlide();
                        break;
                    case "full-post-prev-slide":
                        c.projectPreview.prevSlide();
                        break;
                    case "full-post-show-info":
                        e.stopPropagation(), c.projectPreview.fullPostShowInfo();
                        break;
                    case "show-category":
                        c.allProjects.showCategory(t);
                        break;
                    case "like":
                        (0, m.blogPostLike)(t);
                        break;
                    case "dislike":
                        (0, v.blogPostDislike)(t);
                        break;
                    case "slider-prev-slide":
                        c.slider.goPrev(!0);
                        break;
                    case "slider-next-slide":
                        c.slider.goNext(!0);
                        break;
                    case "all-projects":
                        c.allProjects.showProjects(t);
                        break;
                    case "all-projects-close":
                        c.allProjects.closeProjects()
                }
            });
            var t = document.documentElement,
                i = document.body;
            document.addEventListener("scroll", function() {
                var e = t.scrollTop || i && i.scrollTop || 0;
                a.default.ww < 992 && c.allProjects.onScroll(e)
            })
        }
    }]), b);

    function b() {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, b), this.init()
    }
    t.default = w
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var r, o = i(5),
        a = (r = o) && r.__esModule ? r : {
            default: r
        };
    var l = (s(c, [{
        key: "init",
        value: function() {
            var e = this,
                t = e.navList = document.querySelector(".nav-list");
            if (!t) return !1;
            if (this.atailHeader = document.querySelector(".atail"), !this.atailHeader) return console.error('Dont find node with class ".atail"'), !1;
            this.showNavBtn = document.querySelector('[data-action="show-nav"]');
            var i = e.navListli = t.children;
            return !!i && ([].forEach.call(i, function(e, t) {
                var i = document.createElement("span");
                i.className = "nav-list-counter";
                var s = e.children[0];
                i.innerHTML = "0" + (t + 1), s.insertBefore(i, s.firstChild)
            }), !((e.navListLiLength = i.length) <= e.maxLinksCount) && (e._createLink(), e._hideExcessives(), this.isInit = !0))
        }
    }, {
        key: "showNav",
        value: function() {
            this.atailHeader.classList.add("atail-header-opened"), this.showNavBtn.setAttribute("data-action", "close-nav"), document.body.style.overflow = "hidden"
        }
    }, {
        key: "closeNav",
        value: function() {
            this.atailHeader.classList.remove("atail-header-opened"), this.showNavBtn.setAttribute("data-action", "show-nav"), document.body.style.overflow = ""
        }
    }, {
        key: "_hideExcessives",
        value: function() {
            if (a.default.ww < 992) return !1;
            var t = this;
            if (t.excessives) return !1;
            t.excessives = !0;
            var e = t.maxLinksCount;
            return !(t.navListLiLength < t.maxLinksCount || ((t.remnant = [].slice.call(t.navListli, e - 1)).forEach(function(e) {
                t.moreUl.appendChild(e)
            }), t.navList.appendChild(this.more), this.closeNav(), 0))
        }
    }, {
        key: "_showExcessives",
        value: function() {
            var t = this,
                e = this;
            return !(!e.excessives || (e.excessives = !1, e.navListLiLength < e.maxLinksCount || (this.navList.removeChild(e.more), e.remnant.forEach(function(e) {
                t.navList.appendChild(e)
            }), 0)))
        }
    }, {
        key: "_createLink",
        value: function() {
            var e = this.more = document.createElement("li");
            e.className = "col-xs-2 more-links menu-item-has-children", e.innerHTML = '<a href="#"><span>More</span></a><ul></ul>', this.moreUl = e.querySelector("ul")
        }
    }, {
        key: "resize",
        value: function() {
            return !!this.isInit && (992 <= a.default.ww ? this._hideExcessives() : this._showExcessives(), !0)
        }
    }]), c);

    function c() {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c);
        this.maxLinksCount = 5, this.excessives = !1, this.isInit = !1, this.init()
    }
    t.default = l
}, function(e, t) {
    "use strict";

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function(e, t, i) {
        return t && s(e.prototype, t), i && s(e, i), e
    }(n, [{
        key: "setScrollWidth",
        value: function() {
            var e = document.createElement("div");
            e.style.visibility = "hidden", e.style.width = "100px", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
            var t = e.offsetWidth;
            e.style.overflow = "scroll";
            var i = document.createElement("div");
            i.style.width = "100%", e.appendChild(i);
            var s = i.offsetWidth;
            e.parentNode.removeChild(e), this.scrollWidth = t - s
        }
    }, {
        key: "resize",
        value: function() {
            this.ww = window.innerWidth, this.wh = window.innerHeight, this.mainClientWidth = this.main.clientWidth, this.setScrollWidth()
        }
    }]), n);

    function n() {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, n), this.ww = window.innerWidth, this.wh = window.innerHeight, this.atailMain = document.querySelector(".atail"), this.atailMainClientWidth = this.atailMain.clientWidth, this.main = document.querySelector(".main-scroll"), this.mainClientWidth = this.main.clientWidth, this.sides = document.querySelector(".sides"), this.header = document.querySelector(".atail-header"), this.lang = document.querySelector(".widget-lang"), this.windowIsLoad = !1, this.setScrollWidth(), this.main.ontouchstart = function(e) {
            e.stopPropagation()
        }
    }
    t.default = new i
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, s;
    t.optimizedResize = (s = !(i = []), {
        add: function(e) {
            i.length || window.addEventListener("resize", n),
                function(e) {
                    e && i.push(e)
                }(e)
        }
    });

    function n() {
        s || (s = !0, window.requestAnimationFrame ? window.requestAnimationFrame(r) : setTimeout(r, 66))
    }

    function r() {
        i.forEach(function(e) {
            e()
        }), s = !1
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var L = i(8),
        x = i(9),
        r = i(10),
        a = i(11),
        o = i(12),
        S = l(i(5)),
        d = l(i(16)),
        j = l(i(17));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = (s(u, [{
        key: "init",
        value: function() {
            var s = this,
                e = this.projectPreview = document.querySelector(".project-preview");
            if (!e) return !1;
            this.scroll = new j.default(e), this.scroll.init(), this.projectPreviewParent = e.parentNode, document.body.classList.add("window-height"), e.focus();
            var t = this.projects = e.children;
            if (!t.length) return !1;
            this.projectsLength = t.length;
            var n = this.projectsImagesBox = document.querySelector(".preview-images-item");
            this.projectsImages = [], this.fullPostSliderImages = [], t[0].classList.add("projects-item-active"), t[0].classList.add("projects-item-animate"), [].forEach.call(t, function(e) {
                e.classList.add("projects-item");
                var t = e.querySelector('[id^="project-"]');
                if (t && (t = t.getAttribute("id")), n) {
                    var i = n.querySelector("." + t);
                    i ? s.projectsImages.push(i) : s.projectsImages.push(!1)
                }
            }), this.projectsImages && this.projectsImages[0] && this.projectsImages[0].classList.add("images-item-active"), this.currentProject = t[0], this.currentProjectIndex = 0, this.prevProjectIndex = 0, this.animateBoxBot(), this.checkScroll(), this.initMouseWheel(), this.onKeyPress(), this.onTouch(), this.createFullPost(), this.scroll.createScroll(), this.isInit = !0
        }
    }, {
        key: "initMouseWheel",
        value: function() {
            function e(e) {
                if ((e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1, n.isAnimating) return e.preventDefault(), !1;
                var t = e.currentTarget,
                    i = e.deltaY || e.detail || e.wheelDelta;
                if ((/rv:11.0/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent)) && (i = -i), i < 100 && 0 < i ? i = 100 : -100 < i && i < 0 && (i = -100), n.hasScroll) {
                    var s = t;
                    0 === s.scrollTop && i < 0 ? o = !0 : s.scrollTop >= n.maxScrollHeight && 0 < i ? r = !0 : (n.isAnimating = !0, n.startPosition = s.scrollTop, n.endPosition = n.startPosition + 2 * i, n.path = n.endPosition - n.startPosition, (0, a.jsAnimation)({
                        duration: 300,
                        timing: function(e) {
                            return e
                        },
                        draw: function(e) {
                            if (s.scrollTop = n.startPosition + n.path * e, 992 <= S.default.ww) {
                                var t = (n.startPosition + n.path * e) * n.scroll.precent;
                                t < 0 ? t = 0 : t > s.clientHeight - n.scroll.lineHeight && (t = s.clientHeight - n.scroll.lineHeight), n.scroll.scrollLine.style.top = t + "px"
                            }
                            1 <= e && (n.isAnimating = !1)
                        }
                    }))
                } else 0 < i ? r = !0 : i < 0 && (o = !0);
                r && (n.showNextProject(), r = !1), o && (n.showPrevProject(), o = !1)
            }
            var n = this,
                r = !1,
                o = !1,
                t = this.projectPreview;
            t.addEventListener ? "onwheel" in document ? t.addEventListener("wheel", e) : "onmousewheel" in document ? t.addEventListener("mousewheel", e) : t.addEventListener("MozMousePixelScroll", e) : t.attachEvent("onmousewheel", e)
        }
    }, {
        key: "onKeyPress",
        value: function() {
            var t = this,
                i = !1,
                s = !1,
                n = !1;
            this.projectPreview.addEventListener("keydown", function() {
                if (n) return !1;
                n = !0, t.maxScrollHeight || t.checkScroll(), t.hasScroll && (i = 0 === t.projectPreview.scrollTop, s = t.projectPreview.scrollTop >= t.maxScrollHeight)
            }), this.projectPreview.addEventListener("keyup", function(e) {
                if (t.fullPostIsOpen || t.isAnimating) return !1;
                t.hasScroll ? i && 0 === t.projectPreview.scrollTop ? 38 === e.keyCode && t.showPrevProject() : s && t.projectPreview.scrollTop >= t.maxScrollHeight && 40 === e.keyCode && t.showNextProject() : (38 === e.keyCode && t.showPrevProject(), 40 === e.keyCode && t.showNextProject()), n = s = i = !1
            })
        }
    }, {
        key: "onTouch",
        value: function() {
            var i = this,
                s = !1,
                n = !1,
                r = null,
                o = null,
                a = 0;
            this.projectPreview.addEventListener("touchstart", function(e) {
                if (i.isAnimating) return !1;
                i.maxScrollHeight || i.checkScroll(), i.hasScroll && (s = 0 === i.projectPreview.scrollTop, n = i.projectPreview.scrollTop === i.maxScrollHeight);
                var t = e.touches[0];
                r = t.clientY
            }), this.projectPreview.addEventListener("touchmove", function(e) {
                if (i.isAnimating) return !1;
                var t = e.touches[0];
                o = t.clientY, a = r - o
            }), this.projectPreview.addEventListener("touchend", function() {
                if (i.isAnimating) return !1;
                i.hasScroll || (a < -20 ? s = !0 : 20 < a && (n = !0)), 0 === i.projectPreview.scrollTop && s && a < -20 && i.showPrevProject(), i.projectPreview.scrollTop === i.maxScrollHeight && n && 20 < a && i.showNextProject(), n = s = !1, a = 0
            })
        }
    }, {
        key: "showNextProject",
        value: function() {
            if (this.isAnimating) return !1;
            this.prevProjectIndex = this.currentProjectIndex;
            var e = this.currentProjectIndex + 1;
            if (e >= this.projectsLength && (e = 0), this.currentProjectIndex = e, this.prevProjectIndex === this.currentProjectIndex) return !1;
            this.fromBottom = !0, this.showProject()
        }
    }, {
        key: "showPrevProject",
        value: function() {
            if (this.isAnimating) return !1;
            this.prevProjectIndex = this.currentProjectIndex;
            var e = this.currentProjectIndex - 1;
            if (e < 0 && (e = this.projectsLength - 1), this.currentProjectIndex = e, this.prevProjectIndex === this.currentProjectIndex) return !1;
            this.fromTop = !0, this.showProject()
        }
    }, {
        key: "showProject",
        value: function() {
            if (this.isAnimating = !0, !r.animationSupport) {
                var e = this.projects,
                    t = this.projectsImages,
                    i = this.currentProjectIndex,
                    s = this.prevProjectIndex;
                return e[i].classList.add("projects-item-active"), e[s].classList.remove("projects-item-active"), e[i].classList.add("projects-item-animate"), e[s].classList.remove("projects-item-animate"), this.projectPreview.scrollTop = 0, t[s] && t[s].classList.remove("images-item-active"), t[i] && t[i].classList.add("images-item-active"), this.checkScroll(), this.isAnimating = !1
            }
            this.animateWrap.classList.add("z-index-3"), this.projects[this.prevProjectIndex].classList.add("projects-count-hide"), this.projects[this.prevProjectIndex].classList.remove("projects-item-animate"), this.fromBottom && this.animateBoxBot.classList.add("from-bottom"), this.fromTop && this.animateBoxTop.classList.add("from-top")
        }
    }, {
        key: "checkScroll",
        value: function() {
            var e = this.offsetHeight = this.projectPreview.offsetHeight,
                t = this.fullHeight = this.projectPreview.scrollHeight;
            this.maxScrollHeight = t - e, this.hasScroll = e + 1 < t
        }
    }, {
        key: "animateBoxBot",
        value: function() {
            var n = this,
                r = this.animateBoxBot = document.createElement("DIV"),
                o = this.animateBoxTop = document.createElement("DIV"),
                a = this.animateWrap = document.createElement("DIV");

            function e() {
                var e = n.projects,
                    t = n.projectsImages,
                    i = n.currentProjectIndex,
                    s = n.prevProjectIndex;
                1 == ++l ? (e[i].classList.add("projects-item-active"), e[s].classList.remove("projects-item-active"), e[s].classList.remove("projects-count-hide"), setTimeout(function() {
                    e[i].classList.add("projects-item-animate")
                }, 0), n.projectPreview.scrollTop = 0, t[s] && t[s].classList.remove("images-item-active"), t[i] && t[i].classList.add("images-item-active"), n.checkScroll(), n.fromBottom ? r.classList.add("from-bottom-end") : n.fromTop && o.classList.add("from-top-end"), n.scroll.setScrollSize()) : 2 === l && (a.classList.remove("z-index-3"), l = 0, n.fromBottom ? (r.classList.remove("from-bottom"), r.classList.remove("from-bottom-end"), n.fromBottom = !1) : n.fromTop && (o.classList.remove("from-top"), o.classList.remove("from-top-end"), n.fromTop = !1), n.isAnimating = !1)
            }
            r.className = "animate-box-bot", o.className = "animate-box-top", a.className = "animate-wrap", r.innerHTML = "<div></div><div></div><div></div>", o.innerHTML = "<div></div><div></div><div></div>", a.appendChild(r), a.appendChild(o), this.projectsImagesBox.appendChild(a);
            var l = 0;
            r.addEventListener(L.transitionEvent, e), o.addEventListener(L.transitionEvent, e)
        }
    }, {
        key: "openFullPost",
        value: function(t) {
            var u = this;
            if (this.isAnimating) return !1;
            this.isAnimating = !0, t.classList.add("is-loading"), (0, o.httpGet)("jsons/atail_get_popup_project/", t).then(function(e) {
                return t.classList.remove("is-loading"), S.default.atailMain.appendChild(u.fullPost), u.fullPostIsOpen = !0, e = JSON.parse(e)
            }, function() {
                return !1
            }).then(function(e) {
                if (!e) return !1;
                var t = u.projectsImages[u.currentProjectIndex] && u.projectsImages[u.currentProjectIndex].cloneNode(!0);
                if (t) {
                    t.classList.add("active");
                    var i = document.createElement("DIV");
                    i.className = "post-slider-image-item", i.appendChild(t), u.postSliderImages.appendChild(i), u.fullPostSliderImages.push(i), t.getAttribute("src")
                }
                e.slides && e.slides.forEach(function(e) {
                    var t = e.type;
                    if ("image" === t) {
                        var i = new Image,
                            s = e.src.img,
                            n = e.src.title;
                        i.onload = function() {
                            (0, d.default)(i)
                        };
                        var r = document.createElement("DIV");
                        r.className = "post-slider-image-item";
                        var o = e.fit;
                        switch (o) {
                            case "contain":
                                r.classList.add("contain-fit");
                                break;
                            case "full":
                                r.classList.add("full-fit")
                        }
                        i.src = s, i.alt = n;
                        var a = null;
                        "full" === o ? ((a = document.createElement("DIV")).className = "post-slider-item-scroll", a.appendChild(i), r.appendChild(a)) : r.appendChild(i), u.postSliderImages.appendChild(r), u.fullPostSliderImages.push(r), "full" === o && u.scrollItem.push(new j.default(a))
                    } else if ("video" === t) {
                        var l = document.createElement("IFRAME");
                        l.setAttribute("frameborder", 0), setTimeout(function() {
                            l.setAttribute("src", e.src)
                        }, 2e3);
                        var c = document.createElement("DIV");
                        c.className = "post-slider-video-item", c.appendChild(l), u.postSliderImages.appendChild(c), u.fullPostSliderImages.push(c)
                    }
                }), u.fullPostSliderImages && 0 < u.fullPostSliderImages.length && (u.fullPostCurrentIndex = 0, u.fullPostPrevIndex = 0, u.fullPostSliderImages[0].classList.add("active"), 1 < u.fullPostSliderImages.length && (u.fullPostNextSlide.innerHTML = u.arrowTemplate, u.fullPostPrevSlide.innerHTML = u.arrowTemplate, u.postSliderImages.appendChild(u.fullPostNextSlide), u.postSliderImages.appendChild(u.fullPostPrevSlide)));
                var s = e.date_start ? e.date_start : "",
                    n = e.date_finish ? e.date_finish : "";
                u.contentHeader.innerHTML = "<h4>" + e.title + "</h4>" + s + n + "<p>" + e.content + "</p>";
                var r = e.positions ? e.participants : "",
                    o = e.positions;
                for (var a in e.positions) o.hasOwnProperty(a) && (r += '<span class="small-title">' + o[a].title + "<span>" + o[a].url + "</span></span>");
                return u.contentFooter.innerHTML = r, u.createShares(e.link, e.title), S.default.lang && S.default.lang.classList.add("hide-lang"), !0
            }).then(function(e) {
                return setTimeout(function() {
                    u.fullPost.classList.add("show-post-content"), r.animationSupport || u.fullPost.classList.add("no-animating")
                }, 1e3 / 60), e
            }).then(function(e) {
                return u.isAnimating = !1, e
            }).catch(function() {
                u.isAnimating = !1
            })
        }
    }, {
        key: "closeFullPost",
        value: function() {
            this.fullPost.classList.add("close-post-content"), this.fullPost.classList.remove("show-post-content"), this.fullPost.classList.remove("show-in-mobile"), S.default.main.parentNode.style.opacity = "";
            var e = this.projectsImages,
                t = this.fullPostSliderImages,
                i = this.currentProjectIndex,
                s = this.fullPostCurrentIndex;
            if (!e[i] || !t[s]) return !1;
            if (this.scrollItem.forEach(function(e) {
                    e.remove()
                }), this.scrollItem = [], this.scrollItemIsInited = !1, !r.animationSupport) {
                for (this.fullPost.classList.remove("no-animating"), this.fullPost.classList.remove("close-post-content"), this.fullPost.classList.remove("show-post-content"), this.fullPost.parentNode.removeChild(this.fullPost); this.postSliderImages.firstChild;) this.postSliderImages.removeChild(this.postSliderImages.firstChild);
                this.fullPostSliderImages = [], this.fullPostIsOpen = !1, this.projectPreview.focus(), S.default.lang && S.default.lang.classList.remove("hide-lang")
            }
        }
    }, {
        key: "createFullPost",
        value: function() {
            var e = this,
                t = this.fullPost = document.createElement("DIV");
            t.className = "full-post row", t.style.width = S.default.main.offsetWidth + "px";
            var i = this.fullPostSlider = document.createElement("DIV");
            i.className = "full-post-slider col-xs-10";
            var s = this.postSliderImages = document.createElement("DIV");
            s.className = "post-slider-images";
            var n = void 0,
                r = void 0,
                o = void 0;
            s.addEventListener("touchstart", function(e) {
                var t = e.touches[0];
                n = t.clientX
            }), s.addEventListener("touchmove", function(e) {
                var t = e.touches[0];
                r = t.clientX
            }), s.addEventListener("touchend", function() {
                if (o = n - r, e.fullPostSliderImages.length <= 1) return !1;
                50 <= o ? e.nextSlide() : o <= -50 && e.prevSlide()
            }), i.appendChild(s);
            var a = this.arrowTemplate = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width = "57.143px" height = "34.454px" viewBox = "0 0 57.143 34.454" enable - background = "new 0 0 57.143 34.454" xml: space = "preserve"><g><g><polygon points ="51.908,17.599 46.891,13.1 46.891,17.094 6.904,17.094 6.904,18.094 46.891,18.094 46.891,22.099"/></g></g></svg>';
            this.fullPostNextSlide = document.createElement("SPAN"), this.fullPostNextSlide.className = "full-post-next-slide", this.fullPostNextSlide.setAttribute("data-action", "full-post-next-slide"), this.fullPostNextSlide.innerHTML = a, this.fullPostPrevSlide = document.createElement("SPAN"), this.fullPostPrevSlide.className = "full-post-prev-slide", this.fullPostPrevSlide.setAttribute("data-action", "full-post-prev-slide"), this.fullPostPrevSlide.innerHTML = a;
            var l = this.fullPostContent = document.createElement("DIV");
            l.className = "full-post-content col-xs-2";
            var c = this.contentTableWrapper = document.createElement("DIV");
            c.className = "post-content-table-wrapper";
            var u = this.contentTable = document.createElement("DIV");
            u.className = "post-content-table";
            var d = this.contentHeader = document.createElement("DIV");
            d.className = "post-content-header";
            var h = this.contentFooter = document.createElement("DIV");
            h.className = "post-content-footer", c.appendChild(u), u.appendChild(d), u.appendChild(h), l.appendChild(c), t.appendChild(i), t.appendChild(l), l.addEventListener(L.transitionEvent, function() {
                e.fullPost.classList.contains("show-post-content") && (S.default.main.parentNode.style.opacity = "0")
            });
            var f = document.createElement("DIV"),
                p = document.createElement("BUTTON"),
                m = document.createElement("DIV");
            f.className = "full-post-mobile-menu";
            var v = this.mobileMenuCloseBtn = document.createElement("SPAN");
            v.className = "mobile-menu-close-btn", v.setAttribute("data-action", "full-post-show-info"), p.className = "full-post-mobile-info", p.setAttribute("data-action", "full-post-show-info"), p.innerHTML = "info", f.appendChild(p), f.appendChild(m), t.appendChild(f), t.appendChild(v);
            var g = this.closeBtn = document.createElement("SPAN");
            g.className = "full-post-close", g.setAttribute("data-action", "full-post-close"), t.appendChild(g), this.scrollItem = [], this.scrollItemIsInited = !1, s.addEventListener(x.animationEvent, function() {
                e.isAnimating = !1, e.fullPost.classList.contains("close-post-content") ? (e.fullPost.classList.remove("close-post-content"), e.fullPost.classList.remove("show-post-content"), e.fullPost.parentNode.removeChild(e.fullPost), e.postSliderImages.innerHTML = "", e.fullPostSliderImages = [], e.scrollItem = [], e.fullPostIsOpen = !1, e.projectPreview.focus(), S.default.lang && S.default.lang.classList.remove("hide-lang")) : e.fullPost.classList.contains("show-post-content") && (e.scrollItemIsInited ? e.scrollItemIsInited && e.scrollItem.forEach(function(e) {
                    e.resize()
                }) : (e.scrollItemIsInited = !0, e.scrollItem.push(new j.default(e.contentTableWrapper)), e.scrollItem.forEach(function(e) {
                    e.init()
                })))
            });
            var y = this.fullPostAnimateBox = document.createElement("DIV"),
                w = this.animateBoxRight = document.createElement("DIV"),
                b = this.animateBoxLeft = document.createElement("DIV");

            function P() {
                e.fullPostAnimateBox.classList.contains("from-right") ? e.fullPostAnimateBox.classList.contains("from-right-end") ? (e.fullPostAnimateBox.classList.remove("from-right-end"), e.fullPostAnimateBox.classList.remove("from-right")) : (e.fullPostSliderImages[e.fullPostCurrentIndex].classList.add("active"), e.fullPostSliderImages[e.fullPostPrevIndex].classList.remove("active"), e.fullPostAnimateBox.classList.add("from-right-end")) : e.fullPostAnimateBox.classList.contains("from-left") && (e.fullPostAnimateBox.classList.contains("from-left-end") ? (e.fullPostAnimateBox.classList.remove("from-left-end"), e.fullPostAnimateBox.classList.remove("from-left")) : (e.fullPostSliderImages[e.fullPostCurrentIndex].classList.add("active"), e.fullPostSliderImages[e.fullPostPrevIndex].classList.remove("active"), e.fullPostAnimateBox.classList.add("from-left-end")))
            }
            y.className = "full-post-animate-box", w.className = "animate-box-right", b.className = "animate-box-left", y.appendChild(b), y.appendChild(w), w.addEventListener(L.transitionEvent, P), b.addEventListener(L.transitionEvent, P), i.appendChild(y)
        }
    }, {
        key: "nextSlide",
        value: function() {
            var e = this.fullPostCurrentIndex;
            this.fullPostPrevIndex = e, ++e >= this.fullPostSliderImages.length && (e = 0), this.fullPostCurrentIndex = e, r.animationSupport ? this.fullPostAnimateBox.classList.add("from-right") : (this.fullPostSliderImages[this.fullPostCurrentIndex].classList.add("active"), this.fullPostSliderImages[this.fullPostPrevIndex].classList.remove("active"))
        }
    }, {
        key: "prevSlide",
        value: function() {
            var e = this.fullPostCurrentIndex;
            this.fullPostPrevIndex = e, --e < 0 && (e = this.fullPostSliderImages.length - 1), this.fullPostCurrentIndex = e, r.animationSupport ? this.fullPostAnimateBox.classList.add("from-left") : (this.fullPostSliderImages[this.fullPostCurrentIndex].classList.add("active"), this.fullPostSliderImages[this.fullPostPrevIndex].classList.remove("active"))
        }
    }, {
        key: "showSlide",
        value: function() {
            r.animationSupport || (this.fullPostSliderImages[this.fullPostCurrentIndex].classList.add("active"), this.fullPostSliderImages[this.fullPostPrevIndex].classList.remove("active"), this.scroll.setScrollSize())
        }
    }, {
        key: "fullPostShowInfo",
        value: function() {
            this.fullPost.classList.contains("show-in-mobile") ? this.fullPost.classList.remove("show-in-mobile") : this.fullPost.classList.add("show-in-mobile")
        }
    }, {
        key: "resize",
        value: function() {
            if (!this.isInit) return !1;
            this.checkScroll(), this.fullPost.style.width = S.default.main.offsetWidth + "px", this.scroll.resize(), this.scrollItem.forEach(function(e) {
                e.resize()
            })
        }
    }, {
        key: "createShares",
        value: function(e, t) {
            var i = document.createElement("DIV");
            i.classList.add("atail-project-shares"), this.contentHeader.appendChild(i);
            var s = JSON.parse(document.body.getAttribute("data-share"));
            jQuery(i).jsSocials({
                url: e,
                text: t,
                showLabel: !1,
                showCount: !0,
                shares: s
            })
        }
    }]), u);

    function u() {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, u), this.isInit = !1, this.init()
    }
    t.default = c
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.transitionEvent = function() {
        var e, t = document.createElement("fakeelement"),
            i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
        for (e in i)
            if (void 0 !== t.style[e]) return i[e]
    }()
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.animationEvent = function() {
        var e, t = document.createElement("fakeelement"),
            i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (e in i)
            if (void 0 !== t.style[e]) return i[e]
    }()
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = !1,
        s = "Webkit Moz O ms Khtml".split(" "),
        n = "",
        r = document.createElement("div");
    if (void 0 !== r.style.animationName && (i = !0), !1 === i)
        for (var o = 0; o < s.length; o++)
            if (void 0 !== r.style[s[o] + "AnimationName"]) {
                (n = s[o]) + "Animation", "-" + n.toLowerCase() + "-", i = !0;
                break
            }
    t.animationSupport = i
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.jsAnimation = function(n) {
        var r = performance.now();
        requestAnimationFrame(function e(t) {
            var i = (t - r) / n.duration;
            1 < i && (i = 1);
            var s = n.timing(i);
            n.draw(s), i < 1 && requestAnimationFrame(e)
        })
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.httpGet = function(s, e) {
        var n = e.getAttribute("data-post");
        return n = n ? n + ".json" : "", new l.Promise(function(t, i) {
            var e = new XMLHttpRequest;
            e.open("GET", s + n + "?nochashe=" + (new Date).getTime(), !0), e.onload = function() {
                if (200 == this.status) t(this.response);
                else {
                    var e = new Error(this.statusText);
                    e.code = this.status, i(e)
                }
            }, e.onerror = function() {
                i(new Error("Network Error"))
            }, e.send()
        })
    }, t.httpPost = function(r, o, a) {
        return new l.Promise(function(t, i) {
            var e = new XMLHttpRequest;
            e.open("POST", r, !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.onload = function() {
                if (200 == this.status) t(this.response);
                else {
                    var e = new Error(this.statusText);
                    e.code = this.status, i(e)
                }
            }, e.onerror = function() {
                i(new Error("Network Error"))
            };
            var s = "action=" + a;
            for (var n in o) o.hasOwnProperty(n) && (s += s ? "&" + n + "=" + o[n] : n + "=" + o[n]);
            e.send(s)
        })
    };
    var l = i(13)
}, function(t, e, U) {
    (function(R, V) {
        var e;
        e = function() {
            "use strict";

            function c(e) {
                return "function" == typeof e
            }
            var i = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                s = 0,
                t = void 0,
                n = void 0,
                a = function(e, t) {
                    h[s] = e, h[s + 1] = t, 2 === (s += 2) && (n ? n(f) : y())
                };
            var e = "undefined" != typeof window ? window : void 0,
                r = e || {},
                o = r.MutationObserver || r.WebKitMutationObserver,
                l = "undefined" == typeof self && void 0 !== R && "[object process]" === {}.toString.call(R),
                u = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function d() {
                var e = setTimeout;
                return function() {
                    return e(f, 1)
                }
            }
            var h = new Array(1e3);

            function f() {
                for (var e = 0; e < s; e += 2) {
                    (0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0
                }
                s = 0
            }
            var p, m, v, g, y = void 0;

            function w(e, t) {
                var i = arguments,
                    s = this,
                    n = new this.constructor(L);
                void 0 === n[P] && q(n);
                var r, o = s._state;
                return o ? (r = i[o - 1], a(function() {
                    return B(o, n, r, s._result)
                })) : N(s, n, e, t), n
            }

            function b(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(L);
                return T(t, e), t
            }
            y = l ? function() {
                return R.nextTick(f)
            } : o ? (m = 0, v = new o(f), g = document.createTextNode(""), v.observe(g, {
                characterData: !0
            }), function() {
                g.data = m = ++m % 2
            }) : u ? ((p = new MessageChannel).port1.onmessage = f, function() {
                return p.port2.postMessage(0)
            }) : void 0 === e ? function() {
                try {
                    var e = U(15);
                    return t = e.runOnLoop || e.runOnContext,
                        function() {
                            t(f)
                        }
                } catch (e) {
                    return d()
                }
            }() : d();
            var P = Math.random().toString(36).substring(16);

            function L() {}
            var x = void 0,
                S = 1,
                j = 2,
                I = new M;

            function A(e) {
                try {
                    return e.then
                } catch (e) {
                    return I.error = e, I
                }
            }

            function E(e, t, i) {
                t.constructor === e.constructor && i === w && t.constructor.resolve === b ? function(t, e) {
                    e._state === S ? k(t, e._result) : e._state === j ? C(t, e._result) : N(e, void 0, function(e) {
                        return T(t, e)
                    }, function(e) {
                        return C(t, e)
                    })
                }(e, t) : i === I ? C(e, I.error) : void 0 === i ? k(e, t) : c(i) ? function(e, s, n) {
                    a(function(t) {
                        var i = !1,
                            e = function(e, t, i, s) {
                                try {
                                    e.call(t, i, s)
                                } catch (e) {
                                    return e
                                }
                            }(n, s, function(e) {
                                i || (i = !0, s !== e ? T(t, e) : k(t, e))
                            }, function(e) {
                                i || (i = !0, C(t, e))
                            }, t._label);
                        !i && e && (i = !0, C(t, e))
                    }, e)
                }(e, t, i) : k(e, t)
            }

            function T(e, t) {
                e === t ? C(e, new TypeError("You cannot resolve a promise with itself")) : ! function(e) {
                    return "function" == typeof e || "object" == typeof e && null !== e
                }(t) ? k(e, t) : E(e, t, A(t))
            }

            function _(e) {
                e._onerror && e._onerror(e._result), O(e)
            }

            function k(e, t) {
                e._state === x && (e._result = t, e._state = S, 0 !== e._subscribers.length && a(O, e))
            }

            function C(e, t) {
                e._state === x && (e._state = j, e._result = t, a(_, e))
            }

            function N(e, t, i, s) {
                var n = e._subscribers,
                    r = n.length;
                e._onerror = null, n[r] = t, n[r + S] = i, n[r + j] = s, 0 === r && e._state && a(O, e)
            }

            function O(e) {
                var t = e._subscribers,
                    i = e._state;
                if (0 !== t.length) {
                    for (var s = void 0, n = void 0, r = e._result, o = 0; o < t.length; o += 3) s = t[o], n = t[o + i], s ? B(i, s, n, r) : n(r);
                    e._subscribers.length = 0
                }
            }

            function M() {
                this.error = null
            }
            var H = new M;

            function B(e, t, i, s) {
                var n = c(i),
                    r = void 0,
                    o = void 0,
                    a = void 0,
                    l = void 0;
                if (n) {
                    if ((r = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return H.error = e, H
                            }
                        }(i, s)) === H ? (l = !0, o = r.error, r = null) : a = !0, t === r) return void C(t, new TypeError("A promises callback cannot return that same promise."))
                } else r = s, a = !0;
                t._state !== x || (n && a ? T(t, r) : l ? C(t, o) : e === S ? k(t, r) : e === j && C(t, r))
            }
            var D = 0;

            function q(e) {
                e[P] = D++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function W(e, t) {
                this._instanceConstructor = e, this.promise = new e(L), this.promise[P] || q(this.promise), i(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && k(this.promise, this._result))) : C(this.promise, new Error("Array Methods must be provided an Array"))
            }

            function z(e) {
                this[P] = D++, this._result = this._state = void 0, this._subscribers = [], L !== e && ("function" != typeof e && function() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }(), this instanceof z ? function(t, e) {
                    try {
                        e(function(e) {
                            T(t, e)
                        }, function(e) {
                            C(t, e)
                        })
                    } catch (e) {
                        C(t, e)
                    }
                }(this, e) : function() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }())
            }

            function F() {
                var e = void 0;
                if (void 0 !== V) e = V;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var i = null;
                    try {
                        i = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === i && !t.cast) return
                }
                e.Promise = z
            }
            return W.prototype._enumerate = function() {
                for (var e = this.length, t = this._input, i = 0; this._state === x && i < e; i++) this._eachEntry(t[i], i)
            }, W.prototype._eachEntry = function(t, e) {
                var i = this._instanceConstructor,
                    s = i.resolve;
                if (s === b) {
                    var n = A(t);
                    if (n === w && t._state !== x) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof n) this._remaining--, this._result[e] = t;
                    else if (i === z) {
                        var r = new i(L);
                        E(r, t, n), this._willSettleAt(r, e)
                    } else this._willSettleAt(new i(function(e) {
                        return e(t)
                    }), e)
                } else this._willSettleAt(s(t), e)
            }, W.prototype._settledAt = function(e, t, i) {
                var s = this.promise;
                s._state === x && (this._remaining--, e === j ? C(s, i) : this._result[t] = i), 0 === this._remaining && k(s, this._result)
            }, W.prototype._willSettleAt = function(e, t) {
                var i = this;
                N(e, void 0, function(e) {
                    return i._settledAt(S, t, e)
                }, function(e) {
                    return i._settledAt(j, t, e)
                })
            }, z.all = function(e) {
                return new W(this, e).promise
            }, z.race = function(n) {
                var r = this;
                return i(n) ? new r(function(e, t) {
                    for (var i = n.length, s = 0; s < i; s++) r.resolve(n[s]).then(e, t)
                }) : new r(function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }, z.resolve = b, z.reject = function(e) {
                var t = new this(L);
                return C(t, e), t
            }, z._setScheduler = function(e) {
                n = e
            }, z._setAsap = function(e) {
                a = e
            }, z._asap = a, z.prototype = {
                constructor: z,
                then: w,
                catch: function(e) {
                    return this.then(null, e)
                }
            }, F(), z.polyfill = F, z.Promise = z
        }, t.exports = e()
    }).call(e, U(14), function() {
        return this
    }())
}, function(e, t) {
    var i, s, n = e.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (i === setTimeout) return setTimeout(t, 0);
        if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0);
        try {
            return i(t, 0)
        } catch (e) {
            try {
                return i.call(null, t, 0)
            } catch (e) {
                return i.call(this, t, 0)
            }
        }
    }! function() {
        try {
            i = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            i = r
        }
        try {
            s = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            s = o
        }
    }();
    var l, c = [],
        u = !1,
        d = -1;

    function h() {
        u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && f())
    }

    function f() {
        if (!u) {
            var e = a(h);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++d < t;) l && l[d].run();
                d = -1, t = c.length
            }
            l = null, u = !1,
                function(t) {
                    if (s === clearTimeout) return clearTimeout(t);
                    if ((s === o || !s) && clearTimeout) return s = clearTimeout, clearTimeout(t);
                    try {
                        s(t)
                    } catch (e) {
                        try {
                            return s.call(null, t)
                        } catch (e) {
                            return s.call(this, t)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        c.push(new p(e, t)), 1 !== c.length || u || a(f)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
        return []
    }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}, function(e, t) {}, function(e, t) {
    "use strict";
    var r = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        o = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        i = new Image,
        a = "object-fit" in i.style,
        n = "object-position" in i.style,
        l = "string" == typeof i.currentSrc,
        c = i.getAttribute,
        s = i.setAttribute,
        u = !1;

    function d(t, e) {
        if (!t[r].parsingSrcset) {
            var i = function(e) {
                for (var t, i = getComputedStyle(e).fontFamily, s = {}; null !== (t = o.exec(i));) s[t[1]] = t[2];
                return s
            }(t);
            if (i["object-fit"] = i["object-fit"] || "fill", !t[r].s) {
                if ("fill" === i["object-fit"]) return;
                if (!t[r].skipTest && a && !i["object-position"]) return
            }
            var s = t[r].ios7src || t.currentSrc || t.src;
            if (e) s = e;
            else if (t.srcset && !l && window.picturefill) {
                var n = window.picturefill._;
                t[r].parsingSrcset = !0, t[n.ns] && t[n.ns].evaled || n.fillImg(t, {
                    reselect: !0
                }), t[n.ns].curSrc || (t[n.ns].supported = !1, n.fillImg(t, {
                    reselect: !0
                })), delete t[r].parsingSrcset, s = t[n.ns].curSrc || s
            }
            if (t[r].s) t[r].s = s, e && (t[r].srcAttr = e);
            else {
                t[r] = {
                    s: s,
                    srcAttr: e || c.call(t, "src"),
                    srcsetAttr: t.srcset
                }, t.src = r;
                try {
                    t.srcset && (t.srcset = "", Object.defineProperty(t, "srcset", {
                            value: t[r].srcsetAttr
                        })),
                        function(t) {
                            var e = {
                                get: function() {
                                    return t[r].s
                                },
                                set: function(e) {
                                    return delete t[r].i, d(t, e), e
                                }
                            };
                            Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
                                get: e.get
                            })
                        }(t)
                } catch (e) {
                    t[r].ios7src = s
                }
            }
            t.style.backgroundImage = 'url("' + s + '")', t.style.backgroundPosition = i["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", /scale-down/.test(i["object-fit"]) ? (t[r].i || (t[r].i = new Image, t[r].i.src = s), function e() {
                t[r].i.naturalWidth ? t[r].i.naturalWidth > t.width || t[r].i.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto" : setTimeout(e, 100)
            }()) : t.style.backgroundSize = i["object-fit"].replace("none", "auto").replace("fill", "100% 100%")
        }
    }

    function h(e, t) {
        var i = !u && !e;
        if (t = t || {}, e = e || "img", n && !t.skipTest) return !1;
        "string" == typeof e ? e = document.querySelectorAll("img") : "length" in e || (e = [e]);
        for (var s = 0; s < e.length; s++) e[s][r] = e[s][r] || t, d(e[s]);
        i && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && h(e.target, {
                skipTest: t.skipTest
            })
        }, !0), u = !0, e = "img"), t.watchMQ && window.addEventListener("resize", h.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    h.supportsObjectFit = a, (h.supportsObjectPosition = n) || (HTMLImageElement.prototype.getAttribute = function(e) {
        return !this[r] || "src" !== e && "srcset" !== e ? c.call(this, e) : this[r][e + "Attr"]
    }, HTMLImageElement.prototype.setAttribute = function(e, t) {
        !this[r] || "src" !== e && "srcset" !== e ? s.call(this, e, t) : this["src" === e ? "src" : e + "Attr"] = String(t)
    }), e.exports = h
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var a = o(i(5)),
        r = o(i(18));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = (s(c, [{
        key: "init",
        value: function() {
            this.scrollIsInit = !0, this.createScroll(), this.onScroll()
        }
    }, {
        key: "createScroll",
        value: function() {
            var t = this;
            if (!this.scrollIsInit) return !1;
            this.currentTop = 0;
            var e = this.scroll = document.createElement("DIV");
            e.className = "atail-scroll";
            var i = this.scrollLine = document.createElement("SPAN");
            i.className = "atail-scroll-line", e.appendChild(i), this.isMainScroll || this.isAllProjects ? document.body.appendChild(e) : this.parent && this.parent.appendChild(e);
            var s, n, r, o = !1,
                a = !1,
                l = function e() {
                    a = o = !1, t.scrollLine.style.transition = "", t.scrollLine.style.WebkitTransition = "", document.removeEventListener("mouseup", e)
                };
            e.addEventListener("mouseenter", function() {
                e.classList.add("hovered")
            }), e.addEventListener("mouseleave", function() {
                e.classList.remove("hovered")
            }), e.addEventListener("click", function(e) {
                e.preventDefault(), e.stopPropagation(), a || (t.box.scrollTop = e.clientY / t.precent, a = !1)
            }), i.addEventListener("click", function(e) {
                e.preventDefault(), e.stopPropagation(), o = !1, t.scrollLine.style.transition = "", t.scrollLine.style.WebkitTransition = "", document.removeEventListener("mouseup", l)
            }), i.addEventListener("mousedown", function(e) {
                o = !0, e.preventDefault(), s = e.clientY, t.currentScrollTop = t.box.scrollTop, t.scrollLine.style.transition = "top 0s ease, height .3s ease, border-right-width .2s ease, opacity .3s ease", t.scrollLine.style.WebkitTransition = "top 0s ease, height .3s ease, border-right-width .2s ease, opacity .3s ease"
            }), document.addEventListener("mousemove", function(e) {
                if (!o) return !1;
                a = !0, n = e.clientY, r = n - s, t.box.scrollTop = t.currentScrollTop + r / t.precent, document.addEventListener("mouseup", l)
            }), this.setBoxWidth(), this.setScrollSize(), this.animateScroll()
        }
    }, {
        key: "setBoxWidth",
        value: function() {}
    }, {
        key: "setScrollSize",
        value: function() {
            if (this.isIos) return !1;
            if (!this.scrollIsInit) return !1;
            getComputedStyle(this.box);
            var e = this.minTop = 0,
                t = this.offsetHeight = this.box.offsetHeight,
                i = this.fullHeight = this.box.scrollHeight,
                s = 0;
            if (!this.isProjectPreview) {
                var n = document.body.offsetHeight;
                s = this.n = n - t
            }
            if (t = this.offsetHeight = t, i = this.fullHeight = i, this.maxScrollHeight = i - t, this.hasScroll = t + 1 < i, this.hasScroll)
                if (this.scroll.classList.remove("display-none"), a.default.ww < 992) this.scrollLine.style.height = 0, this.box.style.width = "";
                else {
                    var r = this.box.clientHeight - e,
                        o = this.box.scrollHeight - e;
                    this.precent = r / o, this.lineHeight = r * this.precent + s, this.scrollLine.style.height = this.lineHeight + "px", this.scrollLine.style.top = this.minTop + "px", this.box.style.width = a.default.scrollWidth + this.parent.clientWidth + "px"
                } else this.scrollLine.style.height = 0, this.box.style.width = "", this.scroll.classList.add("display-none")
        }
    }, {
        key: "animateScroll",
        value: function() {
            if (a.default.ww < 992) return !1;
            var e = this.box.scrollTop * this.precent + this.minTop,
                t = this.box.clientHeight;
            e < 0 ? e = this.minTop : e > t + this.n - this.lineHeight && (e = t + this.n - this.lineHeight), this.currentTop = e, this.scrollLine.style.top = e + "px"
        }
    }, {
        key: "onScroll",
        value: function() {
            var t = this;
            if (!this.scrollIsInit) return !1;
            var e = (0, r.default)(function(e) {
                if (t.isIos) return !1;
                e.stopPropagation(), t.animateScroll()
            }, 100);
            this.box.addEventListener("scroll", e)
        }
    }, {
        key: "remove",
        value: function() {
            this.scroll && this.scroll.parentNode && this.scroll.parentNode.removeChild(this.scroll)
        }
    }, {
        key: "resize",
        value: function() {
            if (!this.scrollIsInit) return !1;
            this.setBoxWidth(), this.setScrollSize()
        }
    }]), c);

    function c(e) {
        if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), !e || !e.nodeType) return !1;
        if (this.box = e, this.parent = e.parentNode, this.boxWithScroll = e, this.hasScroll = !1, this.isProjectPreview = !1, this.isAjaxProject = !1, this.isAjaxProjectTableWrapper = !1, this.isMainScroll = !1, this.isAllProjects = !1, this.box.classList.contains("all-atail-projects")) {
            if (this.isAllProjects = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("main-scroll")) {
            if (this.isMainScroll = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("project-preview")) {
            if (this.isProjectPreview = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("post-slider-item-scroll")) {
            if (this.isAjaxProject = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("post-content-table-wrapper")) {
            if (this.isAjaxProjectTableWrapper = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else {
            if (document.body.querySelector(".atail-scroll")) return !1
        }
        this.isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, this.scrollIsInit = !1
    }
    t.default = l
}, function(f, e) {
    (function(e) {
        var y = "Expected a function",
            s = NaN,
            n = "[object Symbol]",
            r = /^\s+|\s+$/g,
            o = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            c = parseInt,
            t = "object" == typeof e && e && e.Object === Object && e,
            i = "object" == typeof self && self && self.Object === Object && self,
            u = t || i || Function("return this")(),
            d = Object.prototype.toString,
            w = Math.max,
            b = Math.min,
            P = function() {
                return u.Date.now()
            };

        function h(s, i, e) {
            var n, r, o, a, l, c, u = 0,
                d = !1,
                h = !1,
                t = !0;
            if ("function" != typeof s) throw new TypeError(y);

            function f(e) {
                var t = n,
                    i = r;
                return n = r = void 0, u = e, a = s.apply(i, t)
            }

            function p(e) {
                var t = e - c;
                return void 0 === c || i <= t || t < 0 || h && o <= e - u
            }

            function m() {
                var e = P();
                if (p(e)) return v(e);
                l = setTimeout(m, function(e) {
                    var t = i - (e - c);
                    return h ? b(t, o - (e - u)) : t
                }(e))
            }

            function v(e) {
                return l = void 0, t && n ? f(e) : (n = r = void 0, a)
            }

            function g() {
                var e = P(),
                    t = p(e);
                if (n = arguments, r = this, c = e, t) {
                    if (void 0 === l) return function(e) {
                        return u = e, l = setTimeout(m, i), d ? f(e) : a
                    }(c);
                    if (h) return l = setTimeout(m, i), f(c)
                }
                return void 0 === l && (l = setTimeout(m, i)), a
            }
            return i = x(i) || 0, L(e) && (d = !!e.leading, o = (h = "maxWait" in e) ? w(x(e.maxWait) || 0, i) : o, t = "trailing" in e ? !!e.trailing : t), g.cancel = function() {
                void 0 !== l && clearTimeout(l), n = c = r = l = void(u = 0)
            }, g.flush = function() {
                return void 0 === l ? a : v(P())
            }, g
        }

        function L(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function x(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && d.call(e) == n
                }(e)) return s;
            if (L(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = L(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(r, "");
            var i = a.test(e);
            return i || l.test(e) ? c(e.slice(2), i ? 2 : 8) : o.test(e) ? s : +e
        }
        f.exports = function(e, t, i) {
            var s = !0,
                n = !0;
            if ("function" != typeof e) throw new TypeError(y);
            return L(i) && (s = "leading" in i ? !!i.leading : s, n = "trailing" in i ? !!i.trailing : n), h(e, t, {
                leading: s,
                maxWait: t,
                trailing: n
            })
        }
    }).call(e, function() {
        return this
    }())
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var r, o = i(5),
        l = (r = o) && r.__esModule ? r : {
            default: r
        },
        a = i(8),
        c = i(10);
    var u = (s(d, [{
        key: "init",
        value: function() {
            var s = this;
            this.preloader.classList.add("atail-loading");
            var e = document.querySelectorAll("img"),
                n = e.length,
                r = 0;
            if (n) {
                var o = 100 / n,
                    a = 0;
                return [].forEach.call(e, function(e) {
                    var t = new Image,
                        i = e.src;
                    t.onload = function() {
                        ++r === n ? (s.preloader.classList.add("full-preloader"), s.preloader.style.width = "", c.animationSupport || (s.preloader.classList.add("atail-preloader-loaded"), l.default.atailMain.classList.add("atail-opacity-1"))) : (a += o, s.preloader.style.width = a + o + "%")
                    }, t.onerror = function() {
                        ++r === n ? (s.preloader.classList.add("full-preloader"), s.preloader.style.width = "", c.animationSupport || (s.preloader.classList.add("atail-preloader-loaded"), l.default.atailMain.classList.add("atail-opacity-1"))) : (a += o, s.preloader.style.width = a + o + "%")
                    }, t.src = i
                }), !0
            }
            this.preloader.classList.add("full-preloader"), this.preloader.style.width = "", c.animationSupport || (this.preloader.classList.add("atail-preloader-loaded"), l.default.atailMain.classList.add("atail-opacity-1"))
        }
    }, {
        key: "showAtail",
        value: function() {
            var e = this;
            setTimeout(function() {
                e.preloader.classList.contains("atail-preloader-loaded") || (e.preloader.classList.add("atail-preloader-loaded"), l.default.atailMain.classList.add("atail-opacity-1"), e.span.classList.add("display-none"), setTimeout(function() {
                    e.vis() && e.preloaderWrap.classList.add("display-none")
                }, 600))
            }, 1800)
        }
    }, {
        key: "resize",
        value: function() {
            this.cloneSpan.style.width = window.innerWidth + "px"
        }
    }, {
        key: "vis",
        value: function() {
            var t, i, e = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (t in e)
                if (t in document) {
                    i = e[t];
                    break
                }
            return function(e) {
                return e && document.addEventListener(i, e), !document[t]
            }
        }
    }]), d);

    function d() {
        var t = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, d);
        var e = this.preloaderWrap = document.querySelector(".atail-preloader-wrapper"),
            i = this.preloader = e.querySelector(".atail-preloader");
        this.span = e.querySelector("span"), this.cloneSpan = i.querySelector("span"), this.cloneSpan.style.width = window.innerWidth + "px";
        i.addEventListener(a.transitionEvent, function e() {
            if (i.classList.contains("atail-preloader-loaded")) return t.preloaderWrap.classList.add("display-none"), !1;
            if (i.classList.contains("full-preloader")) {
                if (!l.default.windowIsLoad) return setTimeout(e, 100), !1;
                l.default.atailMain.classList.add("atail-opacity-1"), i.classList.add("atail-preloader-loaded"), t.span.classList.add("display-none")
            }
        }), setTimeout(function() {
            t.init()
        }, 0)
    }
    t.default = u
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var u = a(i(5)),
        d = i(8),
        h = a(i(17)),
        o = i(10),
        r = i(12),
        f = a(i(18));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = (s(c, [{
        key: "init",
        value: function() {
            var i = this,
                s = this.allProjects = document.querySelector(".all-atail-projects");
            if (!s) return !1;
            this.atailProjectsParent = document.querySelector(".all-atail-projects-wrapper");
            var e = this.allProjectsArray = s.querySelectorAll(".all-atail-projects-single");
            if (!e) return !1;
            this.allProjectsArrayIE = [], [].forEach.call(e, function(e) {
                var t = e.cloneNode(!0);
                i.allProjectsArrayIE.push(t)
            }), this.currentCategoryArray = [].slice.call(this.allProjectsArray, 0), this.projectsCategoryWrapper = this.currentCategoryArray[0].parentNode, this.allProjectsLength = e.length, this.projectCategory = document.querySelector(".all-atail-projects-category");
            var t = 0,
                n = .3333333;
            991 < u.default.ww && (n = .1666667, t = 1400 < u.default.ww ? 100 : 70), this.projectCategory.style.cssText = "width: " + u.default.mainClientWidth * n + "px; right: " + ((u.default.ww - u.default.atailMainClientWidth) / 2 + t) + "px", this.categoryWrapper = this.projectCategory.querySelector(".all-atail-projects-category-wrapper"), this.projectsCategoryWrapperScroll = new h.default(this.categoryWrapper), this.projectsCategoryWrapperScroll.init();
            var r = this.projectInfo = [];
            r.top = [], r.bot = [], r.height = [], [].forEach.call(e, function(e) {
                r.top.push(e.offsetTop), r.bot.push(e.offsetTop + e.clientHeight), r.height.push(e.clientHeight)
            }), this.scrollHeight = this.allProjects.scrollHeight;
            var o = this.style = document.createElement("STYLE");
            document.body.appendChild(o);
            var a = this.animateBox = document.createElement("DIV");
            a.className = "all-projects-animate-box", a.innerHTML = "<div></div><div></div><div></div><div></div><div></div>", u.default.sides.querySelector("div").appendChild(a), a.addEventListener(d.transitionEvent, this.categoryAnimating.bind(this)), this.isInit = !0, this.currentTarget = this.projectCategory.querySelector('.active[data-action="show-category"]');
            var l = this.allProjects.scrollTop;
            this.onScroll(l), this.scroll = new h.default(s), this.scroll.init();
            var c = (0, f.default)(function(e) {
                e.stopPropagation();
                var t = s.scrollTop;
                i.onScroll(t)
            }, 150);
            s.addEventListener("scroll", c)
        }
    }, {
        key: "load",
        value: function() {
            this.isInit && this.scroll.resize()
        }
    }, {
        key: "onScroll",
        value: function(e) {
            if (!this.isInit) return !1;
            for (var t = e + .85 * u.default.wh, i = this.currentCategoryArray.length, s = this.projectInfo, n = this.currentCategoryArray, r = 0; r < i; r++) o.animationSupport ? s.top[r] < t ? (s.bot[r] < e ? n[r].classList.add("is-visible-bot") : n[r].classList.remove("is-visible-bot"), n[r].classList.add("is-visible")) : n[r].classList.remove("is-visible") : n[r].classList.add("is-visible")
        }
    }, {
        key: "showCategory",
        value: function(e) {
            if (e.classList.contains("active")) return !1;
            this.currentTarget || (this.currentTarget = e), this.currentTarget.classList.remove("active"), (this.currentTarget = e).classList.add("active"), this.categoryId = e.getAttribute("data-category"), o.animationSupport ? u.default.sides.classList.add("all-projects-box-animating") : (u.default.sides.classList.add("all-projects-box-animating"), this.categoryAnimating())
        }
    }, {
        key: "categoryAnimating",
        value: function() {
            var s = this,
                e = u.default.sides,
                n = this.categoryId;
            if (e.classList.contains("all-projects-box-animating"))
                if (e.classList.contains("box-animating")) e.classList.remove("all-projects-box-animating"), e.classList.remove("box-animating"), this.categoryId = null;
                else {
                    this.currentCategoryArray = [], this.fragment = document.createDocumentFragment(), this.allProjectsArray = [], [].forEach.call(this.allProjectsArrayIE, function(e) {
                        var t = e.cloneNode(!0);
                        s.allProjectsArray.push(t)
                    }), [].forEach.call(this.allProjectsArray, function(e) {
                        var t = e.cloneNode(!0);
                        t.classList.remove("is-visible"), t.classList.remove("is-visible-bot");
                        var i = t.getAttribute("data-categories"); - 1 !== n.indexOf("cat-all") ? (s.currentCategoryArray.push(t), s.fragment.appendChild(t)) : -1 !== i.indexOf(n) && (s.currentCategoryArray.push(t), s.fragment.appendChild(t))
                    }), this.projectsCategoryWrapper.innerHTML = "", this.projectsCategoryWrapper.appendChild(this.fragment);
                    var r = this.projectInfo = [];
                    r.top = [], r.bot = [], r.height = [], [].forEach.call(this.currentCategoryArray, function(e) {
                        var t = e.offsetTop,
                            i = e.clientHeight;
                        r.top.push(t), r.bot.push(t + i), r.height.push(i)
                    }), setTimeout(function() {
                        s.scrollHeight = s.allProjects.scrollHeight, s.allProjects.scrollTop = 0, document.body.scrollTop = 0, s.onScroll(0), s.scroll.resize(), o.animationSupport ? e.classList.add("box-animating") : (e.classList.remove("all-projects-box-animating"), e.classList.remove("box-animating"), s.categoryId = null)
                    }, 100)
                }
        }
    }, {
        key: "showProjects",
        value: function(e) {
            var o = this;
            if (this.isOpened) return !1;
            this.isOpened = !0, (0, r.httpGet)("jsons/atail_get_all_projects/all_projects.html", e).then(function(r) {
                u.default.main.classList.add("all-projects-loading");
                var e = o.closeProjectsBtn = document.createElement("DIV");
                e.className = "close-projects-btn", e.setAttribute("data-action", "all-projects-close"), e.innerHTML = "<span></span><span></span>", u.default.header.appendChild(o.closeProjectsBtn), u.default.lang && u.default.lang.classList.add("hide-lang"), setTimeout(function() {
                    u.default.main.classList.add("all-projects-loaded"), document.body.classList.remove("window-height"), u.default.main.insertAdjacentHTML("beforeend", r), o.closeProjectsBtn.classList.add("close-projects-btn-loaded");
                    var e = u.default.main.querySelector(".all-atail-projects-wrapper");
                    if (!e) return !1;
                    e.style.opacity = 0;
                    var t = e.querySelectorAll("img");
                    if (t.length <= 0) e.style.opacity = "", o.init();
                    else {
                        var i = t.length,
                            s = 0,
                            n = function() {
                                ++s === i && (e.style.opacity = "", o.init())
                            };
                        [].forEach.call(t, function(e) {
                            var t = new Image;
                            t.onload = function() {
                                n()
                            }, t.onerror = function() {
                                n()
                            }, t.src = e.src
                        })
                    }
                    setTimeout(function() {
                        var e = 0,
                            t = .3333333;
                        991 < u.default.ww && (t = .1666667, e = 1400 < u.default.ww ? 100 : 70), o.projectCategory.style.width = u.default.main.clientWidth * t + "px", o.projectCategory.style.right = (u.default.ww - u.default.atailMain.clientWidth) / 2 + e + "px"
                    }, 100)
                }, 100)
            }).catch(function() {
                o.isAnimating = !1
            })
        }
    }, {
        key: "closeProjects",
        value: function() {
            var e = this;
            this.closeProjectsBtn.classList.remove("close-projects-btn-loaded"), u.default.main.classList.add("all-projects-closing"), setTimeout(function() {
                document.body.classList.add("window-height"), u.default.main.removeChild(e.atailProjectsParent), u.default.header.removeChild(e.closeProjectsBtn), u.default.main.classList.remove("all-projects-loaded"), setTimeout(function() {
                    u.default.main.classList.remove("all-projects-loading")
                }, 0), u.default.main.classList.remove("all-projects-closing"), u.default.main.classList.remove("atail-disable-decoration"), u.default.lang && u.default.lang.classList.remove("hide-lang"), e.scroll.remove(), e.isOpened = !1
            }, 600)
        }
    }, {
        key: "resize",
        value: function() {
            var i = this;
            clearTimeout(this.timeOver), this.timeOver = setTimeout(function() {
                if (!i.isInit) return !1;
                var t = i.projectInfo = [];
                t.top = [], t.bot = [], t.height = [], [].forEach.call(i.currentCategoryArray, function(e) {
                    t.top.push(e.offsetTop), t.bot.push(e.offsetTop + e.clientHeight), t.height.push(e.clientHeight)
                }), setTimeout(function() {
                    992 <= u.default.ww ? (i.scrollHeight = i.allProjects.scrollHeight, i.onScroll(i.allProjects.scrollTop)) : (i.scrollHeight = document.body.scrollHeight, i.onScroll(document.body.scrollTop)), i.scroll.resize();
                    var e = 0,
                        t = .3333333;
                    991 < u.default.ww && (t = .1666667, e = 1400 < u.default.ww ? 100 : 70), i.projectCategory.style.width = u.default.main.clientWidth * t + "px", i.projectCategory.style.right = (u.default.ww - u.default.atailMain.clientWidth) / 2 + e + "px", i.projectsCategoryWrapperScroll.resize()
                }, 0)
            }, 200)
        }
    }]), c);

    function c() {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), this.isInit = !1, this.timeOver = null
    }
    t.default = l
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var l = i(12),
        c = i(22),
        u = i(23);
    var r = (s(o, [{
        key: "init",
        value: function() {
            var a = this;
            if (this.forms.length <= 0) return !1;
            var e = this.forms;
            [].forEach.call(e, function(o) {
                o.onsubmit = function(e) {
                    e.preventDefault();
                    var t = o.querySelector('[type="submit"]'),
                        i = o.querySelector('[name="comment"]'),
                        s = o.querySelector('[name="email"]'),
                        n = o.querySelector('[name="name"]'),
                        r = !0;
                    if (i && (i.value ? i.classList.remove("error") : (i.classList.add("error"), r = !1)), s && (s.value && a.validateEmail(s.value) ? s.classList.remove("error") : (s.classList.add("error"), r = !1)), n && (n.value ? n.classList.remove("error") : (n.classList.add("error"), r = !1)), !r) return !1;
                    (0, l.httpPost)(a.fileUrl, (0, c.form_serialize)(o), a.action).then(function(e) {
                        "success" === (e = JSON.parse(e)).status ? (o.classList.add("form-success"), t && t.setAttribute("disabled", "disabled"), (0, u.clean_form)(o), setTimeout(function() {
                            o.classList.remove("form-success")
                        }, 300)) : (e.commentMissed && i && i.classList.add("error"), e.emailMissed && s && s.classList.add("error"), e.nameMissed && n && n.classList.add("error"))
                    })
                }
            })
        }
    }, {
        key: "validateEmail",
        value: function(e) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        }
    }]), o);

    function o(e, t, i) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, o), e && t && (this.fileUrl = t || null, this.forms = document.querySelectorAll(e), this.action = i || "contact", this.init())
    }
    t.default = r
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.form_serialize = function(e) {
        if (!e || "FORM" !== e.nodeName) return;
        var t, i, s = {};
        for (t = e.elements.length - 1; 0 <= t; t -= 1)
            if ("" !== e.elements[t].name) switch (e.elements[t].nodeName) {
                case "INPUT":
                    switch (e.elements[t].type) {
                        case "text":
                        case "hidden":
                        case "password":
                        case "button":
                        case "reset":
                        case "submit":
                            s[e.elements[t].name] = encodeURIComponent(e.elements[t].value);
                            break;
                        case "email":
                            s[e.elements[t].name] = e.elements[t].value;
                            break;
                        case "checkbox":
                        case "radio":
                            e.elements[t].checked && (s[e.elements[t].name] = encodeURIComponent(e.elements[t].value))
                    }
                    break;
                case "TEXTAREA":
                    s[e.elements[t].name] = encodeURIComponent(e.elements[t].value);
                    break;
                case "SELECT":
                    switch (e.elements[t].type) {
                        case "select-one":
                            s[e.elements[t].name] = encodeURIComponent(e.elements[t].value);
                            break;
                        case "select-multiple":
                            for (i = e.elements[t].options.length - 1; 0 <= i; i -= 1) e.elements[t].options[i].selected && (s[e.elements[t].name] = encodeURIComponent(e.elements[t].options[i].value))
                    }
                    break;
                case "BUTTON":
                    switch (e.elements[t].type) {
                        case "reset":
                        case "submit":
                        case "button":
                            s[e.elements[t].name] = encodeURIComponent(e.elements[t].value)
                    }
            }
            return s
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clean_form = function(e) {
        if (!e || "FORM" !== e.nodeName) return;
        var t;
        for (t = e.elements.length - 1; 0 <= t; t -= 1)
            if ("" !== e.elements[t].name) switch (e.elements[t].nodeName) {
                case "INPUT":
                    switch (e.elements[t].type) {
                        case "text":
                        case "hidden":
                        case "password":
                        case "button":
                        case "reset":
                        case "submit":
                        case "email":
                            e.elements[t].value = ""
                    }
                    break;
                case "TEXTAREA":
                    e.elements[t].value = ""
            }
    }
}, function(e, t) {
    "use strict";
    ! function() {
        for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var i = (new Date).getTime(),
                s = Math.max(0, 16 - (i - r)),
                n = window.setTimeout(function() {
                    e(i + s)
                }, s);
            return r = i + s, n
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }()
}, function(e, t) {
    "use strict";
    ! function() {
        if ("performance" in window == 0 && (window.performance = {}), Date.now = Date.now || function() {
                return (new Date).getTime()
            }, "now" in window.performance == 0) {
            var e = Date.now();
            performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
                return Date.now() - e
            }
        }
    }()
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blogPostLike = function(i) {
        wp.ajax.send("atail_add_like", {
            data: {
                token: (0, s.getCookie)("atail_xslt"),
                post_id: i.getAttribute("data-post")
            },
            success: function(e) {
                var t = '<i class="fa fa-heart-o" aria-hidden="true"></i>' + e.likes;
                i.innerHTML = t, (0, s.setCookie)("atail_xslt", e.token)
            },
            error: function(e) {
                console.error(e)
            }
        })
    };
    var s = i(27)
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setCookie = function(e, t, i) {
        var s = (i = i || {}).expires;
        if ("number" == typeof s && s) {
            var n = new Date;
            n.setTime(n.getTime() + 1e3 * s), s = i.expires = n
        }
        s && s.toUTCString && (i.expires = s.toUTCString());
        t = encodeURIComponent(t);
        var r = e + "=" + t;
        for (var o in i) {
            r += "; " + o;
            var a = i[o];
            !0 !== a && (r += "=" + a)
        }
        document.cookie = r
    }, t.getCookie = function(e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blogPostDislike = function(i) {
        wp.ajax.send("atail_add_dislike", {
            data: {
                token: (0, s.getCookie)("atail_xslt"),
                post_id: i.getAttribute("data-post")
            },
            success: function(e) {
                var t = '<span class="comments-icon">&#207;</span>' + e.dislikes;
                i.innerHTML = t, (0, s.setCookie)("atail_xslt", e.token)
            },
            error: function(e) {
                console.error(e)
            }
        })
    };
    var s = i(27)
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    };

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var r = i(10),
        o = i(8);
    var a = (s(l, [{
        key: "init",
        value: function(e) {
            var t = this,
                i = this.slider = document.querySelector(e);
            if (!i) return !1;
            i.classList.add("atail-slider");
            var s = this.sliderItems = i.children;
            return this.sliderItems = [], !(s.length <= 0) && (s[0].classList.add("active"), [].forEach.call(s, function(e) {
                t.sliderItems.push(e), e.classList.add("atail-slider-item")
            }), this.currentItem = 0, this.prevItem = 0, this.createAnimateBox(), this.mouseEvent(), this.onTouch(), this.isInited = !0, (!this.autoplay || !this.isMouseOver) && void 0)
        }
    }, {
        key: "createAnimateBox",
        value: function() {
            var t = this;
            if (this.sliderItems.length <= 1) return !1;
            var e = this.sliderAnimateBox = document.createElement("DIV"),
                i = this.animateBoxRight = document.createElement("DIV"),
                s = this.animateBoxLeft = document.createElement("DIV");

            function n(e) {
                if (clearTimeout(t.setTimeout), e.currentTarget, t.sliderAnimateBox.classList.contains("from-right"))
                    if (t.sliderAnimateBox.classList.contains("from-right-end")) {
                        if (t.sliderAnimateBox.classList.remove("from-right-end"), t.sliderAnimateBox.classList.remove("from-right"), t.isAnimating = !1, t.autoplay) {
                            if (t.isMouseOver) return !1;
                            t.setTimeout = setTimeout(function() {
                                t.goNext()
                            }, 2500)
                        }
                    } else t.sliderItems[t.prevItem].classList.remove("active"), t.sliderItems[t.currentItem].classList.add("active"), t.sliderAnimateBox.classList.add("from-right-end");
                else if (t.sliderAnimateBox.classList.contains("from-left"))
                    if (t.sliderAnimateBox.classList.contains("from-left-end")) {
                        if (t.sliderAnimateBox.classList.remove("from-left-end"), t.sliderAnimateBox.classList.remove("from-left"), t.isAnimating = !1, t.autoplay) {
                            if (t.isMouseOver) return !1;
                            t.setTimeout = setTimeout(function() {
                                t.goNext()
                            }, 2500)
                        }
                    } else t.sliderItems[t.prevItem].classList.remove("active"), t.sliderItems[t.currentItem].classList.add("active"), t.sliderAnimateBox.classList.add("from-left-end")
            }
            e.className = "slider-animate-box", i.className = "animate-box-right", s.className = "animate-box-left", e.appendChild(s), e.appendChild(i), this.setTimeout = setTimeout(function() {
                t.goNext()
            }, 2500), i.addEventListener(o.transitionEvent, n), s.addEventListener(o.transitionEvent, n);
            var r = this.arrowTemplate = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width = "57.143px" height = "34.454px" viewBox = "0 0 57.143 34.454" enable - background = "new 0 0 57.143 34.454" xml: space = "preserve"><g><g><polygon points ="51.908,17.599 46.891,13.1 46.891,17.094 6.904,17.094 6.904,18.094 46.891,18.094 46.891,22.099"/></g></g></svg>';
            this.fullPostNextSlide = document.createElement("SPAN"), this.fullPostNextSlide.className = "slider-next-slide", this.fullPostNextSlide.setAttribute("data-action", "slider-next-slide"), this.fullPostNextSlide.innerHTML = r, this.fullPostPrevSlide = document.createElement("SPAN"), this.fullPostPrevSlide.className = "slider-prev-slide", this.fullPostPrevSlide.setAttribute("data-action", "slider-prev-slide"), this.fullPostPrevSlide.innerHTML = r, this.slider.appendChild(e), this.slider.appendChild(this.fullPostNextSlide), this.slider.appendChild(this.fullPostPrevSlide)
        }
    }, {
        key: "goNext",
        value: function(e) {
            var t = 0 < arguments.length && void 0 !== e && e;
            return !(this.sliderItems.length <= 1) && !(!t && this.isMouseOver) && !this.isAnimating && (this.prevItem = this.currentItem, this.currentItem++, this.currentItem >= this.sliderItems.length && (this.currentItem = 0), void(r.animationSupport ? (this.isAnimating = !0, this.sliderAnimateBox.classList.add("from-right")) : this.changeSlide()))
        }
    }, {
        key: "goPrev",
        value: function(e) {
            var t = 0 < arguments.length && void 0 !== e && e;
            return !(this.sliderItems.length <= 1) && !(!t && this.isMouseOver) && !this.isAnimating && (this.prevItem = this.currentItem, this.currentItem--, this.currentItem < 0 && (this.currentItem = this.sliderItems.length - 1), void(r.animationSupport ? (this.isAnimating = !0, this.sliderAnimateBox.classList.add("from-left")) : this.changeSlide()))
        }
    }, {
        key: "changeSlide",
        value: function() {
            this.sliderItems[this.prevItem].classList.remove("active"), this.sliderItems[this.currentItem].classList.add("active")
        }
    }, {
        key: "mouseEvent",
        value: function() {
            var t = this;
            if (this.sliderItems.length <= 1) return !1;
            var e = this.slider;
            e.onmouseenter = function(e) {
                t.isMouseOver = !0, clearTimeout(t.setTimeout)
            }, e.onmouseleave = function(e) {
                t.isMouseOver = !1, t.autoplay && setTimeout(function() {
                    t.goNext()
                }, 2500)
            }, e.onmousedown = function(e) {}
        }
    }, {
        key: "onTouch",
        value: function() {
            var t = this;
            if (this.sliderItems.length <= 1) return !1;
            var i = null,
                s = null,
                n = 0;
            this.slider.addEventListener("touchstart", function(e) {
                var t = e.touches[0];
                i = t.clientX
            }), this.slider.addEventListener("touchmove", function(e) {
                var t = e.touches[0];
                s = t.clientX, n = i - s
            }), this.slider.addEventListener("touchend", function(e) {
                n < -20 && t.goPrev(!0), 20 < n && t.goNext(!0), n = 0
            })
        }
    }]), l);

    function l() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".atail-slider",
            t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, l), this.isInited = !1, this.isMouseOver = !1, this.autoplay = t, this.init(e)
    }
    t.default = a
}]);