! function () {
    function t(e, i, n) {
        function s(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (o) return o(r, !0);
                    var h = new Error("Cannot find module '" + r + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var p = i[r] = {
                    exports: {}
                };
                e[r][0].call(p.exports, function (t) {
                    return s(e[r][1][t] || t)
                }, p, p.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) s(n[r]);
        return s
    }
    return t
}()({
    1: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s() {
            app.ajaxEnabled && (M.default.init(), M.default.on("popState", g), M.default.on("loading", y), M.default.on("loaded", v))
        }

        function o() {
            B = new j.default, B.transition = E.Transitions.outAndIn, B.on("transitionStart", x), B.on("transitionComplete", T)
        }

        function r() {
            z.default.init(), z.default.on("linkClick", _)
        }

        function a() {
            N.default.init(), N.default.on("linkClick", _)
        }

        function l() {
            Q.default.init(), Q.default.on("linkClick", _), Q.default.on("gotoPageSection", A)
        }

        function h() {
            var t = "main-loading",
                e = Z[t];
            B.addItem(t, e), B.showScreen(t, E.Transitions.in, {
                arguments: [{
                    id: t
                }],
                events: {
                    animateInComplete: S,
                    complete: I
                }
            })
        }

        function p() {
            var t = "ajax-loading";
            if (!B.getItem(t)) {
                var e = Z[t];
                B.addItem(t, e, {
                    canDispose: !1,
                    arguments: [{
                        id: t
                    }],
                    events: {
                        animateInComplete: P
                    }
                })
            }
            B.showScreen(t, E.Transitions.in)
        }

        function c() {
            K = {
                element: $(".page")[0]
            }, u()
        }

        function u() {
            var t = K.element || $(K.data)[0],
                e = t.id.split("-page")[0],
                i = B.getItem(e);
            if (!i) {
                var n = Z[e] || Z.default;
                i = B.addItem(e, n, {
                    events: {
                        linkClick: _,
                        pushState: k,
                        updateRequest: b
                    }
                })
            }
            i.setOptions({
                canDispose: !1,
                arguments: [{
                    id: e,
                    element: t,
                    owner: B,
                    isAjax: !!K.url
                }]
            }), K.id = e, K.screen = i.getScreen(), K.screen.on("assetsLoaded", O), K.screen.on("assetsLoadingProgress", C), K.screen.initPage(), K.screen.loadAssets()
        }

        function f() {
            K.screen && (K.screen.abortLoadAssets(), m(!0)), K = null
        }

        function d() {
            var t = B.currentScreen,
                e = t ? t.screenData : null;
            B.showScreen(K.id, null, {
                canDispose: !0,
                arguments: [{
                    id: K.id,
                    owner: B,
                    isAjax: K.isAjax,
                    element: K.element,
                    url: K.url,
                    prevScreenData: e
                }]
            }), m()
        }

        function m() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            K.screen.off("assetsLoaded", O), K.screen.off("assetsLoadingProgress", C), B.getItem(K.id).canDispose = !0, t && K.screen.dispose(), K = null
        }

        function _(t) {
            M.default.initialized && M.default.onLinkClick(t)
        }

        function g(t) {
            var e = B.currentScreen;
            "ajax-loading" !== e.id && "main-loading" !== e.id && B.currentScreen.onPopState(event)
        }

        function y(t) {
            var e = B.currentScreen;
            if ("ajax-loading" === e.id || "main-loading" === e.id) return K && f(), void("main-loading" === e.id && e.resetProgress());
            p()
        }

        function v(t) {
            if (200 !== t.status && 404 !== t.status) return void(location.href = app.baseUrl);
            K = {
                data: t.pageData,
                url: t.url
            }, B.transitionRunning || u()
        }

        function b(t) {
            for (var e in t) {
                var i = t[e];
                switch (e) {
                    case "logo":
                        N.default.update(i);
                        break;
                    case "nav":
                        z.default.update(i);
                        break;
                    case "nav-toggle":
                        z.default.updateToggleBtn(i)
                }
            }
        }

        function w(t) {
            app.windowWidth > 0 && (app.prevWindowWidth = app.windowWidth), app.windowWidth = window.innerWidth, app.windowHeight = window.innerHeight, 0 === app.prevWindowWidth && (app.prevWindowWidth = app.windowWidth), app.clientWidth = document.body.clientWidth, B && B.currentScreen && B.currentScreen.resize(t), z.default.resize(t)
        }

        function x() {
            var t = B.currentScreen.id;
            z.default.hide(), "main-loading" !== t && "ajax-loading" !== t && (z.default.updateSelectedItem(B.currentItemId), J && (J = !1, N.default.animateIn(), z.default.animateIn()))
        }

        function T() {
            var t = B.currentScreen.id;
            "main-loading" !== t && "ajax-loading" !== t && (tt && B.currentScreen.gotoSection(tt), tt = null)
        }

        function S() {
            c()
        }

        function I() {
            d()
        }

        function O() {
            var t = B.currentScreen;
            t && "main-loading" === t.id ? B.currentScreen.updateProgress(1) : d()
        }

        function C(t) {
            var e = B.currentScreen;
            e && "main-loading" === e.id && e.updateProgress(t)
        }

        function P() {
            M.default.isLoading || K && u()
        }

        function k(t, e) {
            M.default.initialized && M.default.pushState(t, e)
        }

        function A(t) {
            var e = B.currentScreen,
                i = document.createElement("a");
            i.setAttribute("href", e.url), i.pathname === t.pathname ? e.gotoSection(t.section) : (tt = t.section, M.default.gotoHref(t.href))
        }
        var E = t("screen-navigator"),
            j = n(E),
            R = t("navigation/ajaxify"),
            M = n(R),
            L = t("components/nav"),
            z = n(L),
            F = t("components/logo"),
            N = n(F);
        t("gsap");
        var B, D = t("throttle-debounce"),
            H = t("deep-assign"),
            W = (n(H), t("utils/screen/is-hdpi")),
            V = n(W),
            Y = t("url-query"),
            X = n(Y),
            q = t("components/footer"),
            Q = n(q),
            U = t("utils/browser/ie-version"),
            G = n(U),
            Z = {
                "main-loading": t("pages/MainLoading").default,
                "ajax-loading": t("pages/AjaxLoading").default,
                default: t("pages/BasePage").default,
                home: t("pages/Home").default,
                about: t("pages/About").default,
                contact: t("pages/Contact").default,
                projects: t("pages/Projects").default,
                solutions: t("pages/Solutions").default,
                process: t("pages/Process").default
            },
            J = !0,
            K = null,
            tt = null;
        ! function () {
            window.app = window.app || {}, app.screenXS = 480, app.screenS = 768, app.screenM = 1024, app.screenL = 1280, app.screenXL = 1400, app.screenXXL = 1600, app.windowWidth = app.windowHeight = 0, app.clientWidth = 0, app.prevWindowWidth = 0, app.hasHistory = Modernizr.history, app.isHdpi = (0, V.default)(), app.hasTouch = Modernizr.touchevents, app.ajaxEnabled = !0, app.hasHistory || (app.ajaxEnabled = !1), app.urlQuery = window.location.search ? (0, X.default)() : {}, app.IEVersion = (0, G.default)(), app.isIE = "-1" !== app.IEVersion.major, app.isIE && $("html").addClass("is-ie is-ie" + app.IEVersion.major), o(), s(), a(), r(), l(), $(window).on("resize", (0, D.debounce)(50, w)), w(), app.debug && app.urlQuery.skip ? c() : h()
        }()
    }, {
        "components/footer": 5,
        "components/logo": 6,
        "components/nav": 7,
        "deep-assign": 68,
        gsap: 70,
        "navigation/ajaxify": 13,
        "pages/About": 22,
        "pages/AjaxLoading": 23,
        "pages/BasePage": 24,
        "pages/Contact": 25,
        "pages/Home": 26,
        "pages/MainLoading": 27,
        "pages/Process": 28,
        "pages/Projects": 29,
        "pages/Solutions": 30,
        "screen-navigator": 81,
        "throttle-debounce": 100,
        "url-query": 103,
        "utils/browser/ie-version": 63,
        "utils/screen/is-hdpi": 67
    }],
    2: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            Array.isArray(t) ? t.forEach(function (t) {
                n(t, e)
            }) : (t.jquery || 1 === t.nodeType || "string" == typeof t) && TweenMax.set(t, {
                clearProps: e
            })
        }
        i.__esModule = !0, i.default = function (t) {
            t.getChildren().forEach(function (t) {
                if (t.target && t.vars && t.vars.css) {
                    var e;
                    for (var i in t.vars.css) e ? e += "," : e = "", "autoAlpha" === i && (i = "opacity,visibility"), e += i;
                    e && n(t.target, e)
                }
            })
        }
    }, {}],
    3: [function (t, e, i) {
        "use strict";
        var n = function (t) {
            this.frames = [], this.numFrames = t.frames.length;
            for (var e, i, n = 0; n < this.numFrames; n++) e = t.frames[n].frame, i = t.frames[n].spriteSourceSize, this.frames.push({
                index: n,
                sx: e.x,
                sy: e.y,
                sWidth: e.w,
                sHeight: e.h,
                dx: i.x,
                dy: i.y,
                dWidth: i.w,
                dHeight: i.h
            })
        };
        e.exports = n
    }, {}],
    4: [function (t, e, i) {
        "use strict";
        var n = function (t, e, i) {
            i = i || {}, this.canvas = t, this.sprite = e, this.context = t.getContext("2d")
        };
        n.prototype.render = function (t, e) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.drawImage(this.sprite, t.sx, t.sy, t.sWidth, t.sHeight, t.dx, t.dy, t.dWidth, t.dHeight)
        }, e.exports = n
    }, {}],
    5: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("tiny-emitter"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e() {
                    return n(this, e), s(this, t.call(this))
                }
                return o(e, t), e.prototype.init = function () {
                    $(".footer__page__title").on("click", this.onPageClick.bind(this)), $(".footer__page__section__title").on("click", this.onPageSectionClick.bind(this)), $("#footer__bottom a").on("click", this.onBottomLinkClick.bind(this))
                }, e.prototype.onPageClick = function (t) {
                    this.emit("linkClick", t)
                }, e.prototype.onPageSectionClick = function (t) {
                    var e = t.currentTarget;
                    if (!e.hash || !e.hash.length) return void this.emit("linkClick", t);
                    t.preventDefault(), this.emit("gotoPageSection", {
                        pathname: e.pathname,
                        href: e.href.replace(e.hash, ""),
                        section: e.hash.replace("#", "")
                    })
                }, e.prototype.onBottomLinkClick = function (t) {
                    this.emit("linkClick", t)
                }, e
            }(a.default);
        i.default = new l
    }, {
        "tiny-emitter": 102
    }],
    6: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("tiny-emitter"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e() {
                    return n(this, e), s(this, t.call(this))
                }
                return o(e, t), e.prototype.init = function () {
                    this.size = null, this.color = null, this.element = $("#logo").on("click", this.onClick.bind(this))
                }, e.prototype.resize = function () {}, e.prototype.update = function (t) {
                    t.hasOwnProperty("size") && this.updateSize(t.size), t.hasOwnProperty("color") && this.updateColor(t.color)
                }, e.prototype.updateSize = function (t) {
                    t !== this.size && (this.size = t, this.element.toggleClass("logo--small", "small" === t))
                }, e.prototype.updateColor = function (t) {
                    t !== this.color && (this.color = t, this.element.toggleClass("logo--dark", "dark" === t))
                }, e.prototype.animateIn = function () {
                    this.element[0].style.visibility = "inherit"
                }, e.prototype.onClick = function (t) {
                    t.preventDefault(), this.emit("linkClick", t)
                }, e
            }(a.default);
        i.default = new l
    }, {
        "tiny-emitter": 102
    }],
    7: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("tiny-emitter"),
            l = n(a),
            h = t("components/nav/toggle-btn"),
            p = n(h),
            c = t("anim/gsap/clear-timeline"),
            u = n(c);
        t("lib/DrawSVGPlugin");
        var f = function (t) {
            function e() {
                return s(this, e), o(this, t.call(this))
            }
            return r(e, t), e.prototype.init = function () {
                this.isVisible = !1, this.style = null, this.timelineIn = null, this.timelineStyle = null, this.timelineShow = null, this.timelineHide = null, this.selectedItem = null, this.window = $(window), this.element = $("#nav"), this.content = $("#nav__content"), this.items = $(".nav__item"), this.bg = $("#nav__content__bg"), this.bgImg = this.bg.find("svg"), this.bgPaths = this.bgImg.find("path"), this.bgSourceWidth = this.bgImg.attr("width"), this.bgSourceHeight = this.bgImg.attr("height"), p.default.init(), p.default.on("click", this.onToggleBtnClick.bind(this)), $(".nav__link").on("click", this.onLinkClick.bind(this)), this.mouseX = 0, this.mouseXDirection = 1, app.hasTouch || (this.element.on("mousemove", this.onMouseMove.bind(this)).on("mouseenter", this.onMouseEnter.bind(this)), $(".nav__link").on("mouseenter", this.onLinkMouseEnter.bind(this))), this.window.on("keyup", this.onKeyUp.bind(this)), this.hasScrollListener = !1, this.minScrollTop = 82
            }, e.prototype.disposeTimelineShow = function () {
                this.timelineShow && (this.timelineShow.kill(), (0, u.default)(this.timelineShow), this.timelineShow = null)
            }, e.prototype.disposeTimelineHide = function () {
                this.timelineHide && (this.timelineHide.kill(), (0, u.default)(this.timelineHide), this.timelineHide = null)
            }, e.prototype.disposeTimelineStyle = function () {
                this.timelineStyle && (this.timelineStyle.kill(), (0, u.default)(this.timelineStyle), this.timelineStyle = null)
            }, e.prototype.resize = function (t) {
                this.isVisible && this.hide();
                var e = app.windowWidth / this.bgSourceWidth,
                    i = app.windowHeight / this.bgSourceHeight,
                    n = Math.max(e, i),
                    s = parseInt(this.bgSourceWidth * n),
                    o = parseInt(this.bgSourceHeight * n),
                    r = parseInt(-.5 * (s - app.windowWidth)),
                    a = parseInt(-.5 * (o - app.windowHeight));
                this.bg.css({
                    left: r,
                    top: a,
                    width: s,
                    height: o
                }), app.windowWidth >= app.screenM ? this.hasScrollListener || this.addScrollListener() : this.hasScrollListener && this.removeScrollListener()
            }, e.prototype.addScrollListener = function () {
                this.hasScrollListener = !0, this.window.on("scroll." + this.uid, this.onScroll.bind(this))
            }, e.prototype.removeScrollListener = function () {
                this.hasScrollListener = !1, this.window.off("scroll." + this.uid)
            }, e.prototype.updateSelectedItem = function (t) {
                this.selectedItem && this.selectedItem.removeClass("nav__item--selected"), this.selectedItem = this.items.filter('[data-id="' + t + '"]').addClass("nav__item--selected")
            }, e.prototype.update = function (t) {
                t.hasOwnProperty("style") && this.updateStyle(t.style)
            }, e.prototype.updateToggleBtn = function (t) {
                p.default.update(t)
            }, e.prototype.updateStyle = function (t) {
                this.style !== t && (this.disposeTimelineStyle(), this.timelineStyle = new TimelineMax({
                    onComplete: this.onTimelineStyleComplete.bind(this)
                }), this.style = t, app.windowWidth >= app.screenM ? "fullscreen" === this.style ? (this.element[0].getBoundingClientRect().top > 0 && this.timelineStyle.add(this.animateOutInline()), this.timelineStyle.add(this.applyStyleClass.bind(this)).add(p.default.animateIn())) : this.timelineStyle.add(p.default.animateOut()).add(this.applyStyleClass.bind(this)).add(this.animateInInline()) : this.timelineStyle.add(this.applyStyleClass.bind(this)))
            }, e.prototype.applyStyleClass = function () {
                this.element.toggleClass("nav--fullscreen", "fullscreen" === this.style)
            }, e.prototype.toggle = function () {
                this.isVisible ? this.hide() : this.show()
            }, e.prototype.show = function () {
                this.isVisible || (this.isVisible = !0, p.default.update({
                    state: "close"
                }), this.disposeTimelineShow(), this.disposeTimelineHide(), this.timelineShow = new TimelineMax({
                    delay: .4,
                    onComplete: this.onShowComplete.bind(this)
                }).fromTo("#nav__content", .8, {
                    xPercent: 100
                }, {
                    xPercent: 0,
                    ease: Expo.easeOut
                }).fromTo("#nav__content__inner", .8, {
                    xPercent: -100
                }, {
                    xPercent: 0,
                    ease: Expo.easeOut
                }, 0).staggerFrom("#nav__main-list .nav__item", .8, {
                    y: 100,
                    opacity: 0,
                    ease: Expo.easeOut
                }, .04, .1).staggerFrom("#nav__side-list .nav__item", .8, {
                    y: 60,
                    opacity: 0,
                    ease: Expo.easeOut
                }, .1, .2).addLabel("bg", .2).fromTo(this.bg, 1.6, {
                    scale: 1.2,
                    rotation: -10
                }, {
                    scale: 1,
                    rotation: 0,
                    ease: Quart.easeOut
                }, "bg").fromTo(this.bgPaths[0], 1.4, {
                    drawSVG: "100% 100%"
                }, {
                    drawSVG: "0% 100%",
                    ease: Quart.easeOut
                }, "bg").fromTo(this.bgPaths[1], 1, {
                    drawSVG: "100% 100%"
                }, {
                    drawSVG: "0% 100%"
                }, "bg").fromTo(this.bgPaths[2], 1.5, {
                    drawSVG: "100% 100%"
                }, {
                    drawSVG: "0% 100%",
                    ease: Quart.easeOut
                }, "bg+=.1").fromTo(this.bgPaths[3], 1, {
                    drawSVG: "100% 100%"
                }, {
                    drawSVG: "0% 100%",
                    ease: Quart.easeOut
                }, "bg+=.2").fromTo(this.bgPaths[4], 1.1, {
                    drawSVG: "100% 100%"
                }, {
                    drawSVG: "0% 100%",
                    ease: Quart.easeOut
                }, "bg+=.1"), this.content[0].style.visibility = "inherit")
            }, e.prototype.hide = function () {
                this.isVisible && (this.isVisible = !1, p.default.update({
                    state: "list"
                }), this.disposeTimelineShow(), this.disposeTimelineHide(), this.timelineHide = new TimelineMax({
                    onComplete: this.onHideComplete.bind(this)
                }).to("#nav__content", .6, {
                    xPercent: 100,
                    ease: Expo.easeOut
                }).to("#nav__content__inner", .6, {
                    xPercent: -100,
                    ease: Expo.easeOut
                }, 0))
            }, e.prototype.animateIn = function () {
                this.timelineIn = new TimelineMax({
                    delay: .8,
                    onStart: this.onAnimateInStart.bind(this),
                    onComplete: this.onAnimateInComplete.bind(this)
                }), app.windowWidth >= app.screenM ? this.timelineIn.add(this.animateInInline()) : this.timelineIn.add(p.default.animateIn())
            }, e.prototype.animateInInline = function () {
                return TweenMax.staggerFrom(this.items, .8, {
                    xPercent: 100,
                    opacity: 0,
                    ease: Expo.easeOut
                }, .05)
            }, e.prototype.animateOutInline = function () {
                return TweenMax.staggerTo(this.items, .4, {
                    xPercent: 100,
                    opacity: 0,
                    ease: Expo.easeIn
                }, -.03)
            }, e.prototype.onShowComplete = function () {
                this.disposeTimelineShow()
            }, e.prototype.onHideComplete = function () {
                this.content[0].style.visibility = "", this.disposeTimelineHide()
            }, e.prototype.onTimelineStyleComplete = function () {
                this.disposeTimelineStyle()
            }, e.prototype.onAnimateInStart = function () {
                this.element[0].style.visibility = "inherit", this.emit("animateInStart")
            }, e.prototype.onAnimateInComplete = function () {
                (0, u.default)(this.timelineIn), this.timelineIn = null, this.emit("animateInComplete")
            }, e.prototype.onLinkClick = function (t) {
                this.emit("linkClick", t)
            }, e.prototype.onToggleBtnClick = function () {
                this.toggle()
            }, e.prototype.onMouseEnter = function () {
                this.mouseX = 0
            }, e.prototype.onMouseMove = function (t) {
                var e = t.originalEvent.screenX;
                this.mouseXDirection = e >= this.mouseX ? 1 : -1, this.mouseX = e
            }, e.prototype.onLinkMouseEnter = function (t) {
                this.element.toggleClass("nav--right-dir", -1 === this.mouseXDirection)
            }, e.prototype.onScroll = function (t) {
                window.pageYOffset > this.minScrollTop ? this.updateStyle("fullscreen") : this.updateStyle(null)
            }, e.prototype.onKeyUp = function (t) {
                27 === t.keyCode && "fullscreen" === this.style && this.hide()
            }, e
        }(l.default);
        i.default = new f
    }, {
        "anim/gsap/clear-timeline": 2,
        "components/nav/toggle-btn": 8,
        "lib/DrawSVGPlugin": 10,
        "tiny-emitter": 102
    }],
    8: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("tiny-emitter"),
            l = n(a),
            h = t("anim/gsap/clear-timeline"),
            p = n(h),
            c = function (t) {
                function e() {
                    s(this, e);
                    var i = o(this, t.call(this));
                    return i.isVisible = !1, i.color = null, i.state = null, i.timelineState = null, i
                }
                return r(e, t), e.prototype.init = function () {
                    this.element = $("#nav-toggle").on("click", this.onClick.bind(this))
                }, e.prototype.disposeTimelineState = function () {
                    this.timelineState && (this.timelineState.kill(), (0, p.default)(this.timelineState), this.timelineState = null)
                }, e.prototype.resize = function () {}, e.prototype.show = function () {
                    this.isVisible || (this.isVisible = !0, this.animateIn())
                }, e.prototype.hide = function () {
                    this.isVisible && (this.isVisible = !1, this.animateOut())
                }, e.prototype.update = function (t) {
                    t.color && this.updateColor(t.color), t.state && this.updateState(t.state)
                }, e.prototype.updateColor = function (t) {
                    t !== this.color && (this.color = t, this.element.toggleClass("nav-toggle--dark", "dark" === t))
                }, e.prototype.updateState = function (t) {
                    if (t !== this.state) {
                        var e = this.element[0].offsetLeft,
                            i = $("#nav-toggle__list"),
                            n = app.windowWidth - (e + i[0].offsetLeft) + 1;
                        this.state = t, this.disposeTimelineState(), this.timelineState = new TimelineMax({
                            onComplete: this.onTimelineStateComplete.bind(this)
                        }), "close" === this.state ? this.timelineState.staggerTo(".nav-toggle__list__line", .3, {
                            x: n,
                            ease: Quart.easeIn
                        }, .06).add(this.applyStateClass.bind(this)).add("close").from(".nav-toggle__cross__line", .8, {
                            rotation: 0,
                            ease: Expo.easeOut
                        }, "close+=.1").from(this.element, .8, {
                            x: app.windowWidth - e,
                            immediateRender: !1,
                            ease: Expo.easeOut
                        }, "close") : this.timelineState.to(this.element, .3, {
                            x: app.windowWidth - e,
                            ease: Quad.easeIn
                        }).to(".nav-toggle__cross__line", .3, {
                            rotation: 0,
                            ease: Expo.easeOut
                        }, 0).add(this.applyStateClass.bind(this)).set(this.element, {
                            clearProps: "x"
                        }).staggerFromTo(".nav-toggle__list__line", .7, {
                            x: n
                        }, {
                            x: 0,
                            ease: Expo.easeOut
                        }, .06)
                    }
                }, e.prototype.applyStateClass = function () {
                    this.element.toggleClass("nav-toggle--close", "close" === this.state)
                }, e.prototype.animateIn = function () {
                    var t = this.element[0].offsetLeft,
                        e = $("#nav-toggle__list"),
                        i = app.windowWidth - (t + e[0].offsetLeft) + 1,
                        n = $(".nav-toggle__list__line");
                    return (new TimelineMax).set(n, {
                        transition: "none"
                    }).staggerFromTo(".nav-toggle__list__line", .5, {
                        x: i
                    }, {
                        x: 0,
                        ease: Expo.easeOut
                    }, .06)
                }, e.prototype.animateOut = function () {
                    return new TimelineMax
                }, e.prototype.onTimelineStateComplete = function () {
                    this.disposeTimelineState()
                }, e.prototype.onAnimateInComplete = function () {}, e.prototype.onClick = function (t) {
                    t.preventDefault(), this.emit("click")
                }, e
            }(l.default);
        i.default = new c
    }, {
        "anim/gsap/clear-timeline": 2,
        "tiny-emitter": 102
    }],
    9: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        i.__esModule = !0;
        var s = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            n(this, t), this.x = e, this.y = i, this.width = s, this.height = o
        };
        i.default = s
    }, {}],
    10: [function (t, e, i) {
        (function (t) {
            "use strict";
            var i = void 0 !== e && e.exports && void 0 !== t ? t : window;
            (i._gsQueue || (i._gsQueue = [])).push(function () {
                function t(t, e, i, n) {
                    return i = parseFloat(i) - parseFloat(t), n = parseFloat(n) - parseFloat(e), Math.sqrt(i * i + n * n)
                }

                function e(t) {
                    return "string" != typeof t && t.nodeType || (t = i.TweenLite.selector(t), t.length && (t = t[0])), t
                }

                function n(t, e, i) {
                    var n, s, o = t.indexOf(" ");
                    return -1 === o ? (n = void 0 !== i ? i + "" : t, s = t) : (n = t.substr(0, o), s = t.substr(o + 1)), n = -1 !== n.indexOf("%") ? parseFloat(n) / 100 * e : parseFloat(n), s = -1 !== s.indexOf("%") ? parseFloat(s) / 100 * e : parseFloat(s), n > s ? [s, n] : [n, s]
                }

                function s(i) {
                    if (!i) return 0;
                    i = e(i);
                    var n, s, o, r, a, l, h, p, c = i.tagName.toLowerCase();
                    if ("path" === c) n = i.getTotalLength() || 0;
                    else if ("rect" === c) s = i.getBBox(), n = 2 * (s.width + s.height);
                    else if ("circle" === c) n = 2 * Math.PI * parseFloat(i.getAttribute("r"));
                    else if ("line" === c) n = t(i.getAttribute("x1"), i.getAttribute("y1"), i.getAttribute("x2"), i.getAttribute("y2"));
                    else if ("polyline" === c || "polygon" === c)
                        for (o = i.getAttribute("points").split(" "), n = 0, a = o[0].split(","), "polygon" === c && (o.push(o[0]), -1 === o[0].indexOf(",") && o.push(o[1])), l = 1; l < o.length; l++) r = o[l].split(","), 1 === r.length && (r[1] = o[l++]), 2 === r.length && (n += t(a[0], a[1], r[0], r[1]) || 0, a = r);
                    else "ellipse" === c && (h = parseFloat(i.getAttribute("rx")), p = parseFloat(i.getAttribute("ry")), n = Math.PI * (3 * (h + p) - Math.sqrt((3 * h + p) * (h + 3 * p))));
                    return n || 0
                }

                function o(t, i) {
                    if (!t) return [0, 0];
                    t = e(t), i = i || s(t) + 1;
                    var n = a(t),
                        o = n.strokeDasharray || "",
                        r = parseFloat(n.strokeDashoffset);
                    return o = -1 === o.indexOf(" ") ? i : parseFloat(o.split(" ")[0]) || 1e-5, o > i && (o = i), [Math.max(0, -r), o - r]
                }
                var r, a = document.defaultView ? document.defaultView.getComputedStyle : function () {};
                r = i._gsDefine.plugin({
                    propName: "drawSVG",
                    API: 2,
                    version: "0.0.4",
                    global: !0,
                    overwriteProps: ["drawSVG"],
                    init: function (t, e, i) {
                        if (!t.getBBox) return !1;
                        var r, a, l, h = s(t) + 1;
                        return this._style = t.style, !0 === e || "true" === e ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", r = o(t, h), a = n(e, h, r[0]), this._length = h + 10, 0 === r[0] && 0 === a[0] ? (l = Math.max(1e-5, a[1] - h), this._dash = h + l, this._offset = h - r[1] + l, this._addTween(this, "_offset", this._offset, h - a[1] + l, "drawSVG")) : (this._dash = r[1] - r[0] || 1e-6, this._offset = -r[0], this._addTween(this, "_dash", this._dash, a[1] - a[0] || 1e-5, "drawSVG"), this._addTween(this, "_offset", this._offset, -a[0], "drawSVG")), !0
                    },
                    set: function (t) {
                        this._firstPT && (this._super.setRatio.call(this, t), this._style.strokeDashoffset = this._offset, this._style.strokeDasharray = this._dash + " " + this._length)
                    }
                }), r.getLength = s, r.getPosition = o
            }), i._gsDefine && i._gsQueue.pop()()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    11: [function (t, e, i) {
        (function (t) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                n = void 0 !== e && e.exports && void 0 !== t ? t : window;
            (n._gsQueue || (n._gsQueue = [])).push(function () {
                var t = document.documentElement,
                    e = window,
                    s = function (i, n) {
                        var s = "x" === n ? "Width" : "Height",
                            o = "scroll" + s,
                            r = "client" + s,
                            a = document.body;
                        return i === e || i === t || i === a ? Math.max(t[o], a[o]) - (e["inner" + s] || t[r] || a[r]) : i[o] - i["offset" + s]
                    },
                    o = n._gsDefine.plugin({
                        propName: "scrollTo",
                        API: 2,
                        version: "1.7.5",
                        init: function (t, n, o) {
                            return this._wdw = t === e, this._target = t, this._tween = o, "object" !== (void 0 === n ? "undefined" : i(n)) && (n = {
                                y: n
                            }), this.vars = n, this._autoKill = !1 !== n.autoKill, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? (this._addTween(this, "x", this.x, "max" === n.x ? s(t, "x") : n.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != n.y ? (this._addTween(this, "y", this.y, "max" === n.y ? s(t, "y") : n.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                        },
                        set: function (t) {
                            this._super.setRatio.call(this, t);
                            var i = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                                n = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                                o = n - this.yPrev,
                                r = i - this.xPrev;
                            this._autoKill && (!this.skipX && (r > 7 || r < -7) && i < s(this._target, "x") && (this.skipX = !0), !this.skipY && (o > 7 || o < -7) && n < s(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? i : this.x, this.skipY ? n : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                        }
                    }),
                    r = o.prototype;
                o.max = s, r.getX = function () {
                    return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
                }, r.getY = function () {
                    return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
                }, r._kill = function (t) {
                    return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
                }
            }), n._gsDefine && n._gsQueue.pop()()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    12: [function (t, e, i) {
        (function (t) {
            "use strict";
            var i = void 0 !== e && e.exports && void 0 !== t ? t : window;
            ! function (t) {
                var e = t.GreenSockGlobals || t,
                    i = function (t) {
                        var i, n = t.split("."),
                            s = e;
                        for (i = 0; i < n.length; i++) s[n[i]] = s = s[n[i]] || {};
                        return s
                    }("com.greensock.utils"),
                    n = function t(e) {
                        var i = e.nodeType,
                            n = "";
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
                        } else if (3 === i || 4 === i) return e.nodeValue;
                        return n
                    },
                    s = document,
                    o = s.defaultView ? s.defaultView.getComputedStyle : function () {},
                    r = /([A-Z])/g,
                    a = function (t, e, i, n) {
                        var s;
                        return (i = i || o(t, null)) ? (t = i.getPropertyValue(e.replace(r, "-$1").toLowerCase()), s = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, s = i[e]), n ? s : parseInt(s, 10) || 0
                    },
                    l = function (t) {
                        return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                    },
                    h = function (t) {
                        var e, i, n, s = [],
                            o = t.length;
                        for (e = 0; e < o; e++)
                            if (i = t[e], l(i))
                                for (n = i.length, n = 0; n < i.length; n++) s.push(i[n]);
                            else s.push(i);
                        return s
                    },
                    p = ")eefec303079ad17405c",
                    c = /(?:<br>|<br\/>|<br \/>)/gi,
                    u = s.all && !s.addEventListener,
                    f = "<div style='position:relative;display:inline-block;" + (u ? "*display:inline;*zoom:1;'" : "'"),
                    d = function (t) {
                        t = t || "";
                        var e = -1 !== t.indexOf("++"),
                            i = 1;
                        return e && (t = t.split("++").join("")),
                            function () {
                                return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                            }
                    },
                    m = i.SplitText = e.SplitText = function (t, e) {
                        if ("string" == typeof t && (t = m.selector(t)), !t) throw "cannot split a null element.";
                        this.elements = l(t) ? h(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
                    },
                    _ = function t(e, i, n) {
                        var s = e.nodeType;
                        if (1 === s || 9 === s || 11 === s)
                            for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
                        else 3 !== s && 4 !== s || (e.nodeValue = e.nodeValue.split(i).join(n))
                    },
                    g = function (t, e) {
                        for (var i = e.length; --i > -1;) t.push(e[i])
                    },
                    y = function (t, e, i, r, l) {
                        c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, p));
                        var h, u, f, m, y, v, b, w, x, T, S, I, O, C, P = n(t),
                            k = e.type || e.split || "chars,words,lines",
                            A = -1 !== k.indexOf("lines") ? [] : null,
                            E = -1 !== k.indexOf("words"),
                            j = -1 !== k.indexOf("chars"),
                            R = "absolute" === e.position || !0 === e.absolute,
                            M = R ? "&#173; " : " ",
                            L = -999,
                            z = o(t),
                            F = a(t, "paddingLeft", z),
                            N = a(t, "borderBottomWidth", z) + a(t, "borderTopWidth", z),
                            B = a(t, "borderLeftWidth", z) + a(t, "borderRightWidth", z),
                            D = a(t, "paddingTop", z) + a(t, "paddingBottom", z),
                            H = a(t, "paddingLeft", z) + a(t, "paddingRight", z),
                            W = a(t, "textAlign", z, !0),
                            V = t.clientHeight,
                            Y = t.clientWidth,
                            X = d(e.wordsClass),
                            q = d(e.charsClass),
                            $ = -1 !== (e.linesClass || "").indexOf("++"),
                            Q = e.linesClass,
                            U = -1 !== P.indexOf("<"),
                            G = !0,
                            Z = [],
                            J = [],
                            K = [];
                        for ($ && (Q = Q.split("++").join("")), U && (P = P.split("<").join("{{LT}}")), h = P.length, m = X(), y = 0; y < h; y++)
                            if (")" === (b = P.charAt(y)) && P.substr(y, 20) === p) m += (G ? "</div>" : "") + "<BR/>", G = !1, y !== h - 20 && P.substr(y + 20, 20) !== p && (m += " " + X(), G = !0), y += 19;
                            else if (" " === b && " " !== P.charAt(y - 1) && y !== h - 1 && P.substr(y - 20, 20) !== p) {
                            for (m += G ? "</div>" : "", G = !1;
                                " " === P.charAt(y + 1);) m += M, y++;
                            ")" === P.charAt(y + 1) && P.substr(y + 1, 20) === p || (m += M + X(), G = !0)
                        } else m += j && " " !== b ? q() + b + "</div>" : b;
                        for (t.innerHTML = m + (G ? "</div>" : ""), U && _(t, "{{LT}}", "<"), v = t.getElementsByTagName("*"), h = v.length, w = [], y = 0; y < h; y++) w[y] = v[y];
                        if (A || R)
                            for (y = 0; y < h; y++) x = w[y], ((f = x.parentNode === t) || R || j && !E) && (T = x.offsetTop, A && f && T !== L && "BR" !== x.nodeName && (u = [], A.push(u), L = T), R && (x._x = x.offsetLeft, x._y = T, x._w = x.offsetWidth, x._h = x.offsetHeight), A && (E !== f && j || (u.push(x), x._x -= F), f && y && (w[y - 1]._wordEnd = !0), "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && A.push([])));
                        for (y = 0; y < h; y++) x = w[y], f = x.parentNode === t, "BR" !== x.nodeName ? (R && (I = x.style, E || f || (x._x += x.parentNode._x, x._y += x.parentNode._y), I.left = x._x + "px", I.top = x._y + "px", I.position = "absolute", I.display = "block", I.width = x._w + 1 + "px", I.height = x._h + "px"), E ? f && "" !== x.innerHTML ? J.push(x) : j && Z.push(x) : f ? (t.removeChild(x), w.splice(y--, 1), h--) : !f && j && (T = !A && !R && x.nextSibling, t.appendChild(x), T || t.appendChild(s.createTextNode(" ")), Z.push(x))) : A || R ? (t.removeChild(x), w.splice(y--, 1), h--) : E || t.appendChild(x);
                        if (A) {
                            for (R && (S = s.createElement("div"), t.appendChild(S), O = S.offsetWidth + "px", T = S.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(S)), I = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                            for (C = !R || !E && !j, y = 0; y < A.length; y++) {
                                for (u = A[y], S = s.createElement("div"), S.style.cssText = "display:block;text-align:" + W + ";position:" + (R ? "absolute;" : "relative;"), Q && (S.className = Q + ($ ? y + 1 : "")), K.push(S), h = u.length, v = 0; v < h; v++) "BR" !== u[v].nodeName && (x = u[v], S.appendChild(x), C && (x._wordEnd || E) && S.appendChild(s.createTextNode(" ")), R && (0 === v && (S.style.top = x._y + "px", S.style.left = F + T + "px"), x.style.top = "0px", T && (x.style.left = x._x - T + "px")));
                                0 === h && (S.innerHTML = "&nbsp;"), E || j || (S.innerHTML = n(S).split(String.fromCharCode(160)).join(" ")), R && (S.style.width = O, S.style.height = x._h + "px"), t.appendChild(S)
                            }
                            t.style.cssText = I
                        }
                        R && (V > t.clientHeight && (t.style.height = V - D + "px", t.clientHeight < V && (t.style.height = V + N + "px")), Y > t.clientWidth && (t.style.width = Y - H + "px", t.clientWidth < Y && (t.style.width = Y + B + "px"))), g(i, Z), g(r, J), g(l, K)
                    },
                    v = m.prototype;
                v.split = function (t) {
                    this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                }, v.revert = function () {
                    if (!this._originals) throw "revert() call wasn't scoped properly.";
                    for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
                    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                }, m.selector = t.$ || t.jQuery || function (e) {
                    var i = t.$ || t.jQuery;
                    return i ? (m.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                }, m.version = "0.3.3"
            }(i),
            function (t) {
                var n = function () {
                    return (i.GreenSockGlobals || i).SplitText
                };
                "function" == typeof define && define.amd ? define(["TweenLite"], n) : void 0 !== e && e.exports && (e.exports = n())
            }()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    13: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("tiny-emitter"),
            l = n(a),
            h = t("utils/location/is-same-origin"),
            p = n(h),
            c = function (t) {
                function e() {
                    s(this, e);
                    var i = o(this, t.call(this));
                    return i.currentAjaxRequest = null, i.cache = {}, i.cacheEnabled = !0, i.initialized = !1, i
                }
                return r(e, t), e.prototype.init = function () {
                    var t = {
                        href: window.location.href,
                        isFirstState: !0
                    };
                    this.initialized = !0, this.isLoading = !1, history.replaceState(t, "", window.location.href), window.onpopstate = this.onPopState.bind(this)
                }, e.prototype.loadPage = function (t) {
                    var e = this;
                    this.isLoading = !0, this.currentAjaxRequest && (this.currentAjaxRequest.abort(), this.currentAjaxRequest = null), this.emit("loading", t);
                    var i = this.cacheEnabled ? this.cache[t] : null;
                    if (i) return void setTimeout(function () {
                        e.onPageLoaded(i)
                    });
                    this.currentAjaxRequest = $.ajax({
                        url: t,
                        cache: !1,
                        complete: function (i) {
                            var n = {
                                pageData: i.responseText,
                                status: i.status,
                                url: t
                            };
                            200 === i.status && (e.cache[t] = n), e.currentAjaxRequest = null, e.onPageLoaded(n)
                        }
                    })
                }, e.prototype.pushState = function (t, e) {
                    history.pushState(t, "", e)
                }, e.prototype.replaceState = function (t, e) {
                    history.replaceState(t, "", e)
                }, e.prototype.gotoHref = function (t) {
                    var e = {
                        href: t
                    };
                    this.pushState(e, t), this.loadPage(t)
                }, e.prototype.onPageLoaded = function (t) {
                    this.isLoading = !1, this.emit("loaded", t)
                }, e.prototype.onLinkClick = function (t) {
                    if (!t.defaultPrevented) {
                        var e = t.currentTarget,
                            i = e.getAttribute("href");
                        i && i.length && (i.indexOf("mailto:") > -1 || (0, p.default)(e.href) && (e.target || (t.preventDefault(), e.pathname !== window.location.pathname && this.gotoHref(e.href))))
                    }
                }, e.prototype.onPopState = function (t) {
                    if (t.state) {
                        if (this.emit("popState", t.state), t.defaultPrevented) return;
                        t.state.href && this.loadPage(t.state.href)
                    }
                }, e
            }(l.default);
        i.default = new c
    }, {
        "tiny-emitter": 102,
        "utils/location/is-same-origin": 66
    }],
    14: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("net/loader/asset-library/AssetItem"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e(i, o) {
                    return n(this, e), s(this, t.call(this, i, o))
                }
                return o(e, t), e.prototype.load = function () {
                    t.prototype.load.call(this)
                }, e.prototype.isComplete = function () {
                    return !1
                }, e
            }(a.default);
        i.default = l
    }, {
        "net/loader/asset-library/AssetItem": 17
    }],
    15: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("net/loader/asset-library/AssetItem"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e(i, o) {
                    n(this, e);
                    var r = s(this, t.call(this, i, o));
                    return r.xhr = new XMLHttpRequest, r.responseType = o.responseType || "", r.onReadyStateChangeCb = r.onReadyStateChange.bind(r), r
                }
                return o(e, t), e.prototype.addEventHandlers = function () {
                    t.prototype.addEventHandlers.call(this), this.xhr.addEventListener("readystatechange", this.onReadyStateChangeCb), this.xhr.addEventListener("error", this.onErrorCb)
                }, e.prototype.removeEventHandlers = function () {
                    t.prototype.removeEventHandlers.call(this), this.xhr.removeEventListener("readystatechange", this.onReadyStateChangeCb), this.xhr.removeEventListener("error", this.onErrorCb)
                }, e.prototype.onReadyStateChange = function () {
                    4 === this.xhr.readyState && (200 === this.xhr.status ? this.onComplete() : this.onError())
                }, e.prototype.isComplete = function () {
                    return t.prototype.isComplete.call(this), 4 === this.xhr.readyState
                }, e.prototype.load = function () {
                    t.prototype.load.call(this), this.xhr.open("GET", this.url, !0), this.xhr.send(null), this.xhr.responseType = this.responseType
                }, e
            }(a.default);
        i.default = l
    }, {
        "net/loader/asset-library/AssetItem": 17
    }],
    16: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("net/loader/asset-library/AssetItem"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e(i, o) {
                    n(this, e);
                    var r = s(this, t.call(this, i, o));
                    return r.img = new Image, r
                }
                return o(e, t), e.prototype.addEventHandlers = function () {
                    t.prototype.addEventHandlers.call(this), this.img.onload = this.onCompleteCb, this.img.onerror = this.onErrorCb
                }, e.prototype.removeEventHandlers = function () {
                    t.prototype.removeEventHandlers.call(this), this.img.onload = null, this.img.onerror = null
                }, e.prototype.isComplete = function () {
                    return t.prototype.isComplete.call(this), this.img.complete
                }, e.prototype.load = function () {
                    t.prototype.load.call(this), this.img.src = this.url, this.img.complete && this.onComplete()
                }, e
            }(a.default);
        i.default = l
    }, {
        "net/loader/asset-library/AssetItem": 17
    }],
    17: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("tiny-emitter"),
            l = n(a),
            h = t("net/loader/asset-library/AssetStatus"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    s(this, e);
                    var r = o(this, t.call(this));
                    return r.value = i, r.options = n, r.isAssetItem = !0, r.verbose = void 0 === n.verbose || n.verbose, r.noProgressTimeout = n.noProgressTimeout || 4e3, r.status = p.default.WAITING, r.url = r.options.url, r.options.baseUrl && (r.url = r.options.baseUrl + r.url), r.onCompleteCb = r.onComplete.bind(r), r.onErrorCb = r.onError.bind(r), r.loadStartTime = 0, r.loadElapsedTime = 0, r.delayedComplete = r.options.delayedComplete || 0, r
                }
                return r(e, t), e.prototype.addEventHandlers = function () {}, e.prototype.removeEventHandlers = function () {}, e.prototype.dispose = function () {
                    this.removeEventHandlers()
                }, e.prototype.load = function () {
                    this.status = p.default.LOADING, this.loadStartTime = Date.now(), this.addEventHandlers()
                }, e.prototype.checkStatus = function (t) {
                    this.loadElapsedTime = t - this.loadStartTime, this.isComplete() || this.loadElapsedTime >= this.noProgressTimeout && this.onTimeout()
                }, e.prototype.isComplete = function () {}, e.prototype.log = function (t) {
                    this.verbose && this.emit("log", t)
                }, e.prototype.dispatchComplete = function () {
                    this.emit("complete", this)
                }, e.prototype.onError = function () {
                    this.status = p.default.ERROR, this.log("AssetItem error: The resource " + this.url + " cannot be loaded."), "function" == typeof this.options.onError && this.options.onError.call(this, this), this.removeEventHandlers(), this.emit("error", this)
                }, e.prototype.onTimeout = function () {
                    this.status = p.default.TIMEOUT, this.log("AssetItem timeout: The resource " + this.url + " cannot be loaded."), "function" == typeof this.options.onError && this.options.onTimeout.call(this, this), this.removeEventHandlers(), this.emit("timeout", this)
                }, e.prototype.onComplete = function () {
                    this.status === p.default.LOADING && (this.status = p.default.COMPLETE, this.removeEventHandlers(), "function" == typeof this.options.onComplete && this.options.onComplete.call(this, this), 0 !== this.delayedComplete ? setTimeout(this.dispatchComplete.bind(this), 1e3 * this.delayedComplete) : this.dispatchComplete())
                }, e
            }(l.default);
        i.default = c
    }, {
        "net/loader/asset-library/AssetStatus": 20,
        "tiny-emitter": 102
    }],
    18: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("net/loader/asset-library/AssetItem"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e(i, o) {
                    n(this, e);
                    var r = s(this, t.call(this, i, o));
                    return r.onLoadCb = r.onLoad.bind(r), r
                }
                return o(e, t), e.prototype.addEventHandlers = function () {
                    t.prototype.addEventHandlers.call(this), this.value.addEventListener("error", this.onErrorCb), this.value.addEventListener("load", this.onLoadCb)
                }, e.prototype.removeEventHandlers = function () {
                    t.prototype.removeEventHandlers.call(this), this.value.removeEventListener("error", this.onErrorCb), this.value.removeEventListener("load", this.onLoadCb)
                }, e.prototype.isComplete = function () {
                    return t.prototype.isComplete.call(this), this.value.className.indexOf("lazyloaded") > -1
                }, e.prototype.load = function () {
                    t.prototype.load.call(this), this.isComplete() ? this.onComplete() : (this.value.classList.add("lazyload"), lazySizes.loader.unveil(this.value))
                }, e.prototype.onLoad = function () {
                    1 === this.value.naturalWidth && 1 === this.value.naturalHeight || this.onComplete()
                }, e
            }(a.default);
        i.default = l
    }, {
        "net/loader/asset-library/AssetItem": 17
    }],
    19: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function a() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }

        function l(t) {
            var e, i = (0, d.default)(t).split("?")[0];
            switch (i) {
                case "jpg":
                case "jpeg":
                case "gif":
                case "png":
                case "webp":
                    e = I.IMAGE;
                    break;
                case "mp4":
                case "webm":
                    e = I.VIDEO;
                    break;
                case "mp3":
                case "ogg":
                    e = I.AUDIO;
                    break;
                default:
                    e = I.BINARY
            }
            return e
        }

        function h(t) {
            return "string" == typeof t ? t : t.url ? t.url : t.src ? t.src : a()
        }
        i.__esModule = !0;
        var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            c = t("tiny-emitter"),
            u = n(c),
            f = t("file-extension"),
            d = n(f),
            m = t("net/loader/asset-library/AssetImage"),
            _ = n(m),
            g = t("net/loader/asset-library/AssetVideo"),
            y = n(g),
            v = t("net/loader/asset-library/AssetAudio"),
            b = n(v),
            w = t("net/loader/asset-library/AssetStatus"),
            x = (n(w), t("net/loader/asset-library/AssetBinary")),
            T = n(x),
            S = {},
            I = {
                IMAGE: "image",
                VIDEO: "video",
                AUDIO: "audio",
                BINARY: "binary"
            },
            O = function (t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    s(this, e);
                    var r = o(this, t.call(this));
                    return r.id = i || a(), r.onCompleteCb = n.onComplete && "function" == typeof n.onComplete ? n.onComplete : null, r.onProgressCb = n.onProgress && "function" == typeof n.onProgress ? n.onProgress : null, r.baseUrl = n.baseUrl || "", r.verbose = void 0 === n.verbose || n.verbose, r.noProgressTimeout = n.noProgressTimeout || 1 / 0, r.checkStatusInterval = n.checkStatusInterval || 1e3, r.queue = [], r.currentQueueIndex = 0, r.items = {}, r.complete = !1, r.loadStartTime = 0, r.onItemCompleteCb = r.onItemComplete.bind(r), r.onItemErrorCb = r.onItemError.bind(r), r.onItemTimeoutCb = r.onItemTimeout.bind(r), r.onItemLogCb = r.onItemLog.bind(r), r.checkStatusCb = r.checkStatus.bind(r), r.checkStatusCbId = 0, S[i] = r, r
                }
                return r(e, t), e.prototype.dispose = function (t) {
                    void 0 === t && (t = !1);
                    for (var e = 0, i = this.queue.length; e < i; e++) {
                        var n = this.queue[e];
                        this.removeItemEventHandlers(n), n.hasOwnProperty("queue") && !t || n.dispose()
                    }
                    this.queue.length = 0, this.onCompleteCb = null, this.onProgressCb = null, clearTimeout(this.checkStatusCbId), S[this.id] = null
                }, e.prototype.addItem = function (t) {
                    var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = h(t),
                        s = i.id || n;
                    if ("object" === (void 0 === t ? "undefined" : p(t)) && t.hasOwnProperty("isAssetItem")) return e = t, this.items[s] = e, this.queue.push(e), e;
                    var o, r = void 0 !== i.verbose ? i.verbose : this.verbose,
                        a = (this.baseUrl, i.type || l(n));
                    switch (a) {
                        case I.IMAGE:
                            o = _.default;
                            break;
                        case I.VIDEO:
                            o = y.default;
                            break;
                        case I.AUDIO:
                            o = b.default;
                            break;
                        case I.BINARY:
                            o = T.default
                    }
                    return o ? (i.baseUrl || (i.baseUrl = this.baseUrl), i.url = n, i.verbose = r, i.noProgressTimeout || (i.noProgressTimeout = this.noProgressTimeout), e = new o(t, i), this.items[s] = e, this.queue.push(e), e) : void 0
                }, e.prototype.addLibrary = function (t) {
                    return this.items[t.id] = t, this.queue.push(t), t
                }, e.prototype.getItem = function (t) {
                    return e.getItem(this.id, t)
                }, e.prototype.getProgress = function () {
                    return (this.currentQueueIndex + 1) / this.queue.length
                }, e.prototype.load = function () {
                    this.loadStartTime = Date.now(), this.processQueue(), this.checkStatusCbId = setTimeout(this.checkStatusCb, this.checkStatusInterval)
                }, e.prototype.processQueue = function () {
                    if (this.currentQueueIndex >= this.queue.length) this.onComplete();
                    else {
                        var t = this.queue[this.currentQueueIndex];
                        t.on("log", this.onItemLogCb), t.on("error", this.onItemErrorCb), t.on("complete", this.onItemCompleteCb), t.on("timeout", this.onItemTimeoutCb), t.load()
                    }
                }, e.prototype.nextItemOnQueue = function () {
                    this.currentQueueIndex++, this.processQueue()
                }, e.prototype.checkStatus = function () {
                    var t = this.queue[this.currentQueueIndex],
                        e = Date.now();
                    t && (t.checkStatus(e), this.checkStatusCbId = setTimeout(this.checkStatusCb, this.checkStatusInterval))
                }, e.prototype.removeItemEventHandlers = function (t) {
                    t.off("log", this.onItemLogCb), t.off("complete", this.onItemCompleteCb), t.off("error", this.onItemErrorCb), t.off("timeout", this.onItemTimeoutCb)
                }, e.prototype.log = function (t) {
                    this.verbose && console.log(t)
                }, e.prototype.onItemComplete = function (t) {
                    this.removeItemEventHandlers(t), this.emit("itemComplete", t), this.onProgressCb && this.onProgressCb(this.getProgress()), this.nextItemOnQueue()
                }, e.prototype.onItemError = function (t) {
                    this.removeItemEventHandlers(t), this.emit("itemError", t), this.nextItemOnQueue()
                }, e.prototype.onItemTimeout = function (t) {
                    this.removeItemEventHandlers(t), this.emit("itemTimeout", t), this.nextItemOnQueue()
                }, e.prototype.onItemLog = function (t) {
                    this.verbose && console.log(t)
                }, e.prototype.onComplete = function () {
                    this.complete = !0, clearTimeout(this.checkStatusCbId), this.onCompleteCb && this.onCompleteCb.call(this), this.emit("complete", this)
                }, e
            }(u.default);
        i.default = O, O.libraries = S, O.getItem = function (t, e) {
            return S[t].items[e]
        }, O.getLibrary = function (t) {
            return S[t]
        }
    }, {
        "file-extension": 69,
        "net/loader/asset-library/AssetAudio": 14,
        "net/loader/asset-library/AssetBinary": 15,
        "net/loader/asset-library/AssetImage": 16,
        "net/loader/asset-library/AssetStatus": 20,
        "net/loader/asset-library/AssetVideo": 21,
        "tiny-emitter": 102
    }],
    20: [function (t, e, i) {
        "use strict";
        i.__esModule = !0, i.default = {
            WAITING: "waiting",
            LOADING: "loading",
            COMPLETE: "complete",
            ERROR: "error",
            TIMEOUT: "timeout"
        }
    }, {}],
    21: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("net/loader/asset-library/AssetItem"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e(i, o) {
                    n(this, e);
                    var r = s(this, t.call(this, i, o));
                    return 1 === i.nodeType && (r.video = i), r
                }
                return o(e, t), e.prototype.addEventHandlers = function () {
                    t.prototype.addEventHandlers.call(this), this.video.addEventListener("canplaythrough", this.onCompleteCb)
                }, e.prototype.removeEventHandlers = function () {
                    t.prototype.removeEventHandlers.call(this), this.video.removeEventListener("canplaythrough", this.onCompleteCb)
                }, e.prototype.isComplete = function () {
                    return t.prototype.isComplete.call(this), 4 === this.video.readyState
                }, e.prototype.load = function () {
                    t.prototype.load.call(this), this.video.load()
                }, e
            }(a.default);
        i.default = l
    }, {
        "net/loader/asset-library/AssetItem": 17
    }],
    22: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/BasePage"),
            l = n(a),
            h = t("raf"),
            p = n(h),
            c = t("utils/css/prefix-property"),
            u = n(c),
            f = function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.initPage = function () {
                    t.prototype.initPage.call(this), this.videoCTA = this.element.find(".about__testimonial__video__cta").on("click", this.onVideoCTAClick.bind(this)), this.headerImg = this.element.find("#about__header__img"), this.onFrameCb = this.onFrame.bind(this), this.onFrameCbId = 0, this.transformProperty = (0, u.default)("transform"), this.scrollIsSleeping = !0, this.scrollTop = 0, this.isTicking = !1, this.header = this.element.find("#about__header"), this.shape2 = this.element.find("#about__anim-in-shape-2"), this.bodyImgContainer = this.element.find("#about__body__img-container"), this.shape2ScrollTop = 0, this.shape2ScrollTopProgress = 0, this.shape2ScrollTopProgressOld = 0, this.shape2ScrollTopEnd = 0, this.shape2YEnd = 0, this.shape2ScaleYStart = 1, this.shape2ScaleYEnd = 1, this.shape2IsActive = !0, this.window = $(window).on("scroll." + this.uid, this.onScroll.bind(this))
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.videoCTA.off("click"), this.stopTicker(), this.window.off("scroll." + this.uid))
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e), this.resizeShape2()
                }, e.prototype.resizeShape2 = function () {
                    var t = this.header[0].getBoundingClientRect(),
                        e = this.bodyImgContainer[0].getBoundingClientRect(),
                        i = t.bottom + window.pageYOffset + 80;
                    this.shape2[0].style.top = i + "px", this.shape2ScrollTopEnd = e.top + window.pageYOffset - app.windowHeight + e.height, this.shape2YEnd = e.top + window.pageYOffset - i, this.shape2ScaleYEnd = e.height / this.shape2.height()
                }, e.prototype.startTicker = function () {
                    this.isTicking || (this.isTicking = !0, this.onFrameCbId = (0, p.default)(this.onFrameCb))
                }, e.prototype.stopTicker = function () {
                    this.isTicking && (this.isTicking = !1, p.default.cancel(this.onFrameCbId))
                }, e.prototype.initScroll = function () {}, e.prototype.renderScroll = function () {
                    var t = !1;
                    if (this.shape2IsActive) {
                        this.shape2ScrollTop += .1 * (this.scrollTop - this.shape2ScrollTop), this.shape2ScrollTopProgress = this.shape2ScrollTop / this.shape2ScrollTopEnd, this.shape2ScrollTopProgress > 1 && (this.shape2ScrollTopProgress = 1);
                        var e = this.shape2YEnd * this.shape2ScrollTopProgress,
                            i = this.shape2ScaleYStart + (this.shape2ScaleYEnd - this.shape2ScaleYStart) * this.shape2ScrollTopProgress;
                        this.shape2[0].style[this.transformProperty] = "translate3d(0," + e + "px,0) scaleY(" + i + ")";
                        t = Math.abs(this.shape2ScrollTopProgress - this.shape2ScrollTopProgressOld) > .001, this.shape2ScrollTopProgressOld = this.shape2ScrollTopProgress, this.shape2ScrollTopProgress > .999 && (this.shape2IsActive = !1, this.showBodyImg())
                    }
                    t || (this.scrollIsSleeping = !0)
                }, e.prototype.showBodyImg = function () {
                    TweenMax.to(this.shape2, .3, {
                        autoAlpha: 0
                    }), TweenMax.to(this.element.find("#about__body__img__overlay"), .9, {
                        scaleX: 0,
                        ease: Quart.easeInOut
                    }), TweenMax.from(this.element.find("#about__body__img"), 1.5, {
                        scale: 1.3,
                        ease: Quart.easeInOut
                    })
                }, e.prototype.animateIn = function (e) {
                    t.prototype.animateIn.call(this, e), e || this.startTicker()
                }, e.prototype.addPlayer = function () {
                    this.element.find(".project__media__player").html(iframe), this.img[0].style.visibility = "hidden"
                }, e.prototype.populateLoader = function () {
                    t.prototype.populateLoader.call(this), this.loader.addItem(this.headerImg[0].src)
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this);
                    var e = this.header[0].getBoundingClientRect(),
                        i = this.element.find("#about__anim-in-shape-1"),
                        n = this.element.find("#about__title"),
                        s = n[0].getBoundingClientRect(),
                        o = (new TimelineMax).set(i, {
                            visibility: "inherit",
                            width: Math.ceil(e.width),
                            height: Math.ceil(e.height),
                            left: Math.floor(e.left),
                            top: Math.floor(e.top + window.pageYOffset)
                        }, 0).to(i, 1.3, {
                            scaleY: .1,
                            y: .9 * e.height,
                            ease: Quart.easeInOut
                        }, 0).to(i, .4, {
                            scaleX: (s.width + 40) / e.width,
                            x: s.left - e.left - 20,
                            ease: Quart.easeInOut
                        }, "-=.3").to(i, .3, {
                            scaleY: (s.height + 30) / e.height,
                            y: s.top - e.top,
                            ease: Quad.easeInOut
                        }, "-=.1").to(i, .6, {
                            scaleY: 0,
                            y: s.top - e.top + (s.height + 30),
                            ease: Quart.easeInOut
                        }).from(n, .5, {
                            opacity: 0,
                            y: 30,
                            ease: Quart.easeOut
                        }, "-=.5").from(this.element.find("#about__body__intro"), .7, {
                            opacity: 0,
                            y: 30,
                            ease: Quart.easeOut
                        }, "-=.6");
                    this.timelineIn.from(this.headerImg, 3, {
                        scale: 1.2,
                        ease: Quart.easeOut
                    }, 0).add(o, 0).from(this.shape2, 1.5, {
                        y: "-=80",
                        ease: Quad.easeInOut
                    }, .1)
                }, e.prototype.onVideoCTAClick = function (t) {
                    var e = t.currentTarget,
                        i = e.parentNode,
                        n = i.querySelector(".about__testimonial__video__player"),
                        s = i.getAttribute("data-video"),
                        o = '<iframe src="//player.vimeo.com/video/' + s + '?color=fff&autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                    e.style.display = "none", n.innerHTML = o
                }, e.prototype.onFrame = function () {
                    if (this.scrollIsSleeping) return void(this.isTicking = !1);
                    this.renderScroll(), this.onFrameCbId = (0, p.default)(this.onFrameCb)
                }, e.prototype.onScroll = function (t) {
                    app.windowWidth < app.screenS || (this.scrollTop = window.pageYOffset, this.scrollIsSleeping && (this.scrollIsSleeping = !1, this.startTicker()))
                }, e
            }(l.default);
        i.default = f
    }, {
        "pages/BasePage": 24,
        raf: 79,
        "utils/css/prefix-property": 64
    }],
    23: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a, l = t("screen-navigator"),
            h = t("net/loader/asset-library/AssetLibrary"),
            p = n(h),
            c = t("sprite-anim"),
            u = n(c),
            f = t("anim/sprite-anim/Parser"),
            d = n(f),
            m = t("anim/sprite-anim/Renderer"),
            _ = n(m),
            g = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.id = i.id, n.initialized = !1, n.isVisible = !1, n.element = $("#ajax-loading-page"), n.timelineIn = null, n.timelineOut = null, n.txtTween = null, n.anim = null, n
                }
                return r(e, t), e.prototype.init = function () {
                    this.initialized = !0, this.txtTween = TweenMax.fromTo("#ajax-loading__txt", .8, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        repeat: -1,
                        yoyo: !0,
                        ease: Sine.easeInOut
                    }), this.loader = e.getLoader(), this.loader.once("complete", this.onLoaderComplete.bind(this)), this.loader.load()
                }, e.prototype.disposeTimelineIn = function () {
                    this.timelineIn && (this.timelineIn.kill(), this.timelineIn = null)
                }, e.prototype.disposeTimelineOut = function () {
                    this.timelineOut && (this.timelineOut.kill(), this.timelineOut = null)
                }, e.prototype.resize = function (t) {}, e.prototype.animateIn = function (e) {
                    t.prototype.animateIn.call(this, e), this.isVisible = !0, e || (this.disposeTimelineIn(), this.element[0].style.visibility = "inherit", this.initialized ? (this.txtTween.play(0), this.anim.gotoAndPlay(0)) : this.init(), this.timelineIn = new TimelineMax({
                        onComplete: this.onAnimateInComplete.bind(this)
                    }).fromTo("#ajax-loading__overlay", .4, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, 0).fromTo("#ajax-loading__outer", .8, {
                        yPercent: 100
                    }, {
                        yPercent: 0,
                        ease: Expo.easeInOut
                    }, 0).fromTo("#ajax-loading__inner", .8, {
                        yPercent: -100
                    }, {
                        yPercent: 0,
                        ease: Expo.easeInOut
                    }, 0).set({}, {}, "+=.5"))
                }, e.prototype.animateOut = function (e) {
                    if (t.prototype.animateOut.call(this, e), this.isVisible = !1, this.disposeTimelineOut(), e) return void this.onAnimateOutComplete();
                    this.timelineOut = new TimelineMax({
                        onComplete: this.onAnimateOutComplete.bind(this)
                    }).to("#ajax-loading__overlay", .8, {
                        opacity: 0
                    }, 0).fromTo("#ajax-loading__outer", .8, {
                        yPercent: 0
                    }, {
                        yPercent: -100,
                        ease: Expo.easeInOut
                    }, 0).fromTo("#ajax-loading__inner", .8, {
                        yPercent: 0
                    }, {
                        yPercent: 100,
                        ease: Expo.easeInOut
                    }, 0)
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.disposeTimelineIn()
                }, e.prototype.onAnimateOutComplete = function () {
                    t.prototype.onAnimateOutComplete.call(this), this.element[0].style.visibility = "", this.disposeTimelineOut(), this.anim && this.anim.gotoAndStop(0), this.txtTween.pause(0)
                }, e.prototype.onLoaderComplete = function () {
                    var t = $("#ajax-loading__anim"),
                        e = this.loader.getItem("img").img,
                        i = JSON.parse(this.loader.getItem("data").xhr.responseText),
                        n = new d.default(i),
                        s = new _.default(t[0], e);
                    if (this.anim = new u.default(n, s, {
                            loop: !0,
                            frameRate: 50
                        }), app.isHdpi) {
                        var o = t[0].width,
                            r = t[0].height;
                        t[0].width = parseInt(2 * o), t[0].height = parseInt(2 * r), t.css({
                            width: o,
                            height: r
                        })
                    }
                    this.isVisible && this.anim.play()
                }, e.getLoader = function () {
                    if (a) return a;
                    a = new p.default("ajax-loading");
                    var t = app.isHdpi ? "@2x" : "",
                        e = app.baseUrl + "/assets",
                        i = e + "/img/ajax-loading" + t + ".png",
                        n = e + "/data/ajax-loading" + t + ".json";
                    return a.addItem(i, {
                        id: "img"
                    }), a.addItem(n, {
                        id: "data"
                    }), a
                }, e
            }(l.AScreen);
        i.default = g
    }, {
        "anim/sprite-anim/Parser": 3,
        "anim/sprite-anim/Renderer": 4,
        "net/loader/asset-library/AssetLibrary": 19,
        "screen-navigator": 81,
        "sprite-anim": 90
    }],
    24: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("screen-navigator"),
            l = t("net/loader/asset-library/AssetLibrary"),
            h = n(l),
            p = t("pages/AjaxLoading"),
            c = n(p);
        t("lib/ScrollToPlugin");
        var u = t("anim/gsap/clear-timeline"),
            f = n(u),
            d = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this));
                    return n.id = i.id, n.owner = i.owner, n.isAjax = i.isAjax, n.element = $(i.element), n.prevScreenData = i.prevScreenData, n.url = i.url ? i.url : window.location.href, n.routeId = i.element.getAttribute("data-route-id"), n.screenData = {
                        id: n.id,
                        url: n.url,
                        routeId: n.routeId
                    }, n.uid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), n.initialized = !1, n.isLoading = !1, n.timelineIn = null, n.loader = null, n
                }
                return r(e, t), e.prototype.initPage = function () {
                    this.container = $("#page-container"), this.body = $("body"), this.isAjax && this.initAjaxPage(), this.links = this.element.find("a").not('[data-ajax="false"]').on("click." + this.uid, this.onLinkClick.bind(this)), this.initialized = !0
                }, e.prototype.initAjaxPage = function () {
                    var t = this.element[0].getAttribute("data-title");
                    this.container.append(this.element), this.body.addClass("page-id-" + this.id), t && t.length && (document.title = t)
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.links.off("click." + this.uid), this.disposeTimelineIn(), this.disposeLoader())
                }, e.prototype.disposeTimelineIn = function () {
                    this.timelineIn && (this.timelineIn.kill(), (0, f.default)(this.timelineIn), this.timelineIn = null)
                }, e.prototype.disposeLoader = function () {
                    this.loader && (this.loader.dispose(), this.loader = null)
                }, e.prototype.loadAssets = function () {
                    var t = this;
                    this.isLoading = !0, this.loader = new h.default(this.id, {
                        onComplete: this.onAssetsLoaded.bind(this),
                        onProgress: this.onAssetsLoadingProgress.bind(this),
                        verbose: app.debug
                    }), this.populateLoader(), 0 === this.loader.queue.length ? setTimeout(function () {
                        t.onAssetsLoaded()
                    }) : this.loader.load()
                }, e.prototype.populateLoader = function () {
                    this.isAjax || this.loader.addLibrary(c.default.getLoader())
                }, e.prototype.abortLoadAssets = function () {
                    this.disposeLoader()
                }, e.prototype.gotoSection = function (t) {
                    var e = this.element.find("[name=" + t + "]");
                    if (e.length) {
                        var i = parseInt(e.offset().top);
                        TweenMax.to(window, .8, {
                            scrollTo: {
                                y: i
                            },
                            ease: Quart.easeInOut
                        })
                    }
                }, e.prototype.resize = function (t) {}, e.prototype.animateIn = function (e) {
                    if (t.prototype.animateIn.call(this, e), e) return void this.onAnimateInComplete();
                    this.resize(), window.pageYOffset > 0 && setTimeout(function () {
                        window.scrollTo(0, 0)
                    }), this.timelineIn = new TimelineMax({
                        delay: this.isAjax ? .1 : .3,
                        onStart: this.onAnimateInStart.bind(this),
                        onComplete: this.onAnimateInComplete.bind(this)
                    }), this.populateTimelineIn()
                }, e.prototype.populateTimelineIn = function () {}, e.prototype.animateOut = function (e) {
                    t.prototype.animateOut.call(this, e), this.onAnimateOutComplete()
                }, e.prototype.onAnimateInStart = function () {
                    this.element[0].style.visibility = "inherit"
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.disposeTimelineIn()
                }, e.prototype.onAnimateOutComplete = function () {
                    this.initialized && (this.element.remove(), this.prevScreenData && this.prevScreenData.id === this.id || this.body.removeClass("page-id-" + this.id)), t.prototype.onAnimateOutComplete.call(this)
                }, e.prototype.onLinkClick = function (t) {
                    this.emit("linkClick", t)
                }, e.prototype.onAssetsLoaded = function () {
                    this.isLoading = !1, this.emit("assetsLoaded", this)
                }, e.prototype.onAssetsLoadingProgress = function (t) {
                    this.emit("assetsLoadingProgress", t)
                }, e.prototype.onPopState = function (t) {}, e
            }(a.AScreen);
        i.default = d
    }, {
        "anim/gsap/clear-timeline": 2,
        "lib/ScrollToPlugin": 11,
        "net/loader/asset-library/AssetLibrary": 19,
        "pages/AjaxLoading": 23,
        "screen-navigator": 81
    }],
    25: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/BasePage"),
            l = n(a);
        t("lib/ScrollToPlugin");
        var h = t("utils/google/maps/google-maps-api"),
            p = n(h),
            c = t("lib/SplitText"),
            u = n(c),
            f = t("pages/contact/ContactForm"),
            d = n(f),
            m = function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.initPage = function () {
                    t.prototype.initPage.call(this), this.subtitleBtns = $("#contact__subtitle span").on("click", this.onSubtitleBtnClick.bind(this)), this.form = new d.default({
                        element: this.element.find("#contact__form")
                    }), $(".contact__email-link").replaceWith(function (t, e) {
                        var i = e.replace("[at]", "@");
                        return '<a href="mailto:' + i + '">' + i + "</a>"
                    }), this.initJobs()
                }, e.prototype.initMap = function () {
                    this.onMapReadyCb = this.onMapReady.bind(this), p.default.isReady ? this.addMap() : (p.default.on("ready", this.onMapReadyCb), this.loadMap())
                }, e.prototype.initJobs = function () {
                    this.element.on("click", ".contact__jobs__item__more", this.onMoreBtnClick.bind(this)), this.jobCloseBtns = this.element.find(".contact__jobs__item__close").on("click", this.onCloseBtnClick.bind(this)), this.jobApplyBtns = this.element.find(".contact__jobs__item__apply").on("click", this.onJobApplyBtnClick.bind(this)), this.truncateJobs()
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.subtitleBtns.off("click"), p.default.off("ready", this.onMapReadyCb), this.element.off("click", ".contact__jobs__item__more"), this.jobCloseBtns.off("click"), this.form.dispose(), this.jobApplyBtns.off("click"))
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e), e && (this.truncateJobs(), this.form.resize(e))
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this);
                    var e = this.element.find("#contact__header__txt"),
                        i = e[0].getBoundingClientRect(),
                        n = this.element.find("#contact__header__overlay"),
                        s = this.element.find("#contact__header__img-wrapper"),
                        o = s[0].getBoundingClientRect(),
                        r = (new TimelineMax).set(n, {
                            left: Math.floor(o.left),
                            width: Math.ceil(o.width),
                            height: Math.ceil(o.height),
                            visibility: "inherit"
                        }, 0).to(n, .7, {
                            y: i.top - o.top,
                            scaleY: (o.bottom - i.top) / o.height,
                            ease: Quart.easeInOut
                        }, 0).to(n, .7, {
                            scaleX: i.width / o.width,
                            ease: Quart.easeInOut
                        }, "-=.2").to(n, .7, {
                            scaleY: o.height / i.height,
                            ease: Quart.easeInOut
                        }, "-=.2").to(n, .7, {
                            scaleY: 0,
                            y: i.bottom - o.top,
                            ease: Quart.easeInOut
                        }, "-=.2").staggerFrom(["#contact__title", "#contact__subtitle", "#contact__intro"], .7, {
                            opacity: 0,
                            y: 40,
                            ease: Expo.easeOut
                        }, .07, "-=.4");
                    this.timelineIn.from("#contact__header__img", 2.8, {
                        scale: 1.2,
                        ease: Quart.easeOut
                    }, 0).add(r, 0)
                }, e.prototype.truncateJobs = function () {
                    this.element.find(".contact__jobs__item__desc").each(function (t, e) {
                        var i = $(e),
                            n = i.find(".contact__jobs__item__desc__txt"),
                            s = i.find(".contact__jobs__item__desc__truncated-txt");
                        i.css("height", "");
                        var o = i[0].offsetHeight,
                            r = parseInt(i.css("line-height"));
                        if (parseInt(o / r) <= 5) i.removeClass("contact__jobs__item__desc--truncated");
                        else {
                            i.addClass("contact__jobs__item__desc--truncated"), s.text(n.text());
                            var a = new u.default(s, {
                                type: "lines,words"
                            });
                            if (a.lines.length > 5) {
                                var l = $(a.lines[4]),
                                    h = $('<button class="contact__jobs__item__more">More info</button>');
                                l.append(h);
                                for (var p = h.width(), c = i.width(), f = l.find("> div"), d = c - p - 50, m = a.lines.length; m > 4; m--) {
                                    var _ = a.lines[m];
                                    _ && _.parentNode.removeChild(_)
                                }
                                for (var m = f.length; m > -1; --m) {
                                    var g = f[m];
                                    if (g) {
                                        if (!(g.offsetLeft + g.offsetWidth > d)) {
                                            g.innerHTML += "...";
                                            break
                                        }
                                        g.parentNode.removeChild(g)
                                    }
                                }
                                i.height(s.height())
                            }
                        }
                    })
                }, e.prototype.loadMap = function () {
                    var t = document.createElement("script");
                    t.setAttribute("src", "https://maps.googleapis.com/maps/api/js?callback=onGoogleMapsAPIReady&key=AIzaSyB81MGIQPC3uivyhXpP4LxIzMQ-rQzNT6w"), $("head").append(t)
                }, e.prototype.addMap = function () {
                    var t = document.getElementById("contact__infos__map"),
                        e = new google.maps.Map(t, {
                            center: {
                                lat: 41.9952024,
                                lng: -87.970799
                            },
                            zoom: 15,
                            minZoom: 5,
                            mapTypeControl: !1,
                            scrollwheel: !1,
                            disableDefaultUI: !0
                        });
                    new google.maps.Marker({
                        position: {
                            lat: 41.9952024,
                            lng: -87.970799
                        },
                        map: e
                    })
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.initMap()
                }, e.prototype.onMapReady = function () {
                    this.addMap()
                }, e.prototype.onMoreBtnClick = function (t) {
                    var e = t.currentTarget,
                        i = $(e.parentNode.parentNode.parentNode),
                        n = (i.find(".contact__jobs__item__desc__txt"), i.height());
                    i.css("height", ""), i[0].style.display = "none", i[0].offsetHeight, i[0].style.display = "";
                    var s = i.css("height", "").height();
                    i.height(n), i[0].style.display = "none", i[0].offsetHeight, i[0].style.display = "", i.addClass("contact__jobs__item__desc--expanded").height(s)
                }, e.prototype.onCloseBtnClick = function (t) {
                    var e = t.currentTarget,
                        i = $(e.parentNode),
                        n = i.find(".contact__jobs__item__desc__truncated-txt");
                    i.height(n.height()).removeClass("contact__jobs__item__desc--expanded")
                }, e.prototype.onJobApplyBtnClick = function (t) {
                    var e = t.currentTarget,
                        i = e.getAttribute("data-id"),
                        n = parseInt(this.form.element.offset().top);
                    t.preventDefault(), this.form.selectSubject("job"), this.form.selectJob(i), TweenMax.to(window, .7, {
                        scrollTo: {
                            y: n
                        },
                        ease: Quart.easeInOut,
                        autoKill: !1,
                        delay: .3
                    })
                }, e.prototype.onSubtitleBtnClick = function (t) {
                    var e = t.currentTarget,
                        i = e.getAttribute("data-target"),
                        n = parseInt(this.form.element.offset().top);
                    this.element.find(".contact__form__subject__item input[value=" + i + "]").prop("checked", !0).trigger("change"), TweenMax.to(window, .7, {
                        scrollTo: {
                            y: n
                        },
                        ease: Quart.easeInOut
                    })
                }, e
            }(l.default);
        i.default = m
    }, {
        "lib/ScrollToPlugin": 11,
        "lib/SplitText": 12,
        "pages/BasePage": 24,
        "pages/contact/ContactForm": 31,
        "utils/google/maps/google-maps-api": 65
    }],
    26: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/BasePage"),
            l = n(a),
            h = t("screen-navigator"),
            p = n(h),
            c = t("pages/home/HomeLanding"),
            u = n(c),
            f = t("pages/home/HomeScreen"),
            d = n(f),
            m = t("url-query"),
            _ = n(m),
            g = t("pages/home/Pagination"),
            y = n(g),
            v = t("pages/home/ScrollCTA"),
            b = n(v),
            w = t("throttle-debounce/throttle"),
            x = (n(w), function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.initPage = function () {
                    t.prototype.initPage.call(this), this.window = $(window), this.videoLanding = $("#home-landing__bg__video"), this.hasVideo = this.videoLanding.length > 0, this.videoLandingIsHd = !1, this.initScreenNavigator(), this.initPagination(), this.initScrollCTA(), this.logo = $("#logo").on("click." + this.uid, this.onLogoClick.bind(this))
                }, e.prototype.initScreenNavigator = function () {
                    var t = this,
                        e = this.element.find(".home-screen");
                    this.screenNavigator = new p.default, this.screenNavigator.transition = h.Transitions.outAndIn, e.each(function (e, i) {
                        var n = i.id.split("home-").join(""),
                            s = "landing" === n ? u.default : d.default;
                        t.screenNavigator.addItem(n, s, {
                            arguments: [{
                                element: i,
                                id: n,
                                index: e,
                                owner: t.screenNavigator
                            }],
                            events: {
                                animateInStart: t.onScreenAnimateInStart.bind(t),
                                stepAnimateInStart: t.onStepAnimateInStart.bind(t),
                                stepAnimateInComplete: t.onStepAnimateInComplete.bind(t),
                                stepAnimateOutStart: t.onStepAnimateOutStart.bind(t),
                                stepUpdateRequest: t.onStepUpdateRequest.bind(t),
                                complete: t.onScreenComplete.bind(t),
                                swipe: t.onSwipe.bind(t)
                            }
                        })
                    })
                }, e.prototype.initPagination = function () {
                    this.pagination = new y.default, this.pagination.on("click", this.onPaginationClick.bind(this)), this.pagination.on("timerComplete", this.onPaginationTimerComplete.bind(this))
                }, e.prototype.initScrollCTA = function () {
                    this.scrollCTA = new b.default, this.scrollCTA.on("click", this.onScrollCTAClick.bind(this))
                }, e.prototype.initNav = function () {
                    this.window.on("keyup." + this.uid, this.onKeyUp.bind(this)), this.element.on("DOMMouseScroll mousewheel", this.onScroll.bind(this))
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.screenNavigator.dispose(), this.pagination.off("click"), this.pagination.dispose(), this.scrollCTA.off("click"), this.scrollCTA.dispose(), this.window.off("keyup." + this.uid), this.window = null, this.element.off("DOMMouseScroll mousewheel"), this.logo.off("click." + this.uid))
                }, e.prototype.populateLoader = function () {
                    var e = this;
                    if (t.prototype.populateLoader.call(this), this.hasVideo) {
                        var i = this.element.find("#home-landing__bg__video")[0];
                        this.loader.addItem(i, {
                            type: "video"
                        })
                    } else this.element.find(".home-screen__step-1__bg").each(function (t, i) {
                        var n = app.baseUrl + "/assets/img/home-screen-" + (t + 1) + "-step-1.jpg";
                        e.loader.addItem(n, {
                            id: "screen-" + (t + 1) + "-step-1"
                        })
                    })
                }, e.prototype.gotoSection = function (t) {
                    var e = this.element.find("[name=" + t + "]");
                    if (e.length) {
                        var i = e[0].id.replace("home-", "");
                        this.screenNavigator.showScreen(i)
                    }
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e), this.screenNavigator && this.screenNavigator.currentScreen && this.screenNavigator.currentScreen.resize(e), this.hasVideo && this.resizeVideoLanding()
                }, e.prototype.resizeVideoLanding = function () {
                    var t = app.windowWidth >= app.screenXL,
                        e = this.screenNavigator && this.screenNavigator.currentScreen && "landing" === this.screenNavigator.currentScreen.id;
                    if (t != this.videoLandingIsHd) {
                        var i = this.videoLanding[0].currentSrc;
                        if (this.videoLandingIsHd = t, t) {
                            if (-1 === i.indexOf("-hd")) {
                                var n = i.indexOf(".mp4");
                                i = i.slice(0, n) + "-hd" + i.slice(n)
                            }
                        } else -1 !== i.indexOf("-hd") && (i = i.replace("-hd", ""));
                        this.videoLanding.attr("src", i), e && this.screenNavigator.currentScreen.onVideoUpdated()
                    }
                }, e.prototype.animateIn = function (e) {
                    t.prototype.animateIn.call(this, e), e || this.emit("updateRequest", {
                        logo: {
                            color: "light"
                        },
                        "nav-toggle": {
                            color: "light"
                        }
                    })
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this), this.showFirstScreen(), this.timelineIn.add(this.screenNavigator.currentScreen.timelineIn)
                }, e.prototype.showFirstScreen = function () {
                    var t = "landing";
                    if (app.debug && window.location.search) {
                        var e = (0, _.default)();
                        if (e.screen) {
                            var i = "screen-" + e.screen;
                            this.screenNavigator.getItem(i) && (t = i)
                        }
                    }
                    this.screenNavigator.showScreen(t)
                }, e.prototype.updateRequest = function (t) {
                    this.emit("updateRequest", t)
                }, e.prototype.gotoNextStep = function () {
                    this.screenNavigator.transitionRunning || this.screenNavigator.currentScreen.gotoNextStep()
                }, e.prototype.gotoPrevStep = function () {
                    this.screenNavigator.transitionRunning || this.screenNavigator.currentScreen.gotoPrevStep()
                }, e.prototype.gotoScreen = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = 0 === t ? "landing" : "screen-" + t;
                    if (this.screenNavigator.getItem(i)) {
                        if (t !== this.screenNavigator.currentScreen.index) {
                            var n = this.screenNavigator.currentScreen.index > t ? -1 : 1;
                            this.screenNavigator.showScreen(i, null, {
                                properties: {
                                    direction: n,
                                    firstStepId: e
                                }
                            })
                        }
                    }
                }, e.prototype.gotoNextScreen = function () {
                    var t = this.screenNavigator.currentScreen.index;
                    this.gotoScreen(t + 1)
                }, e.prototype.gotoPrevScreen = function () {
                    var t = this.screenNavigator.currentScreen.index;
                    this.gotoScreen(t - 1)
                }, e.prototype.onScreenComplete = function (t) {
                    t.step && "step-1" === t.step ? this.gotoPrevScreen() : this.gotoNextScreen()
                }, e.prototype.onScreenAnimateInStart = function () {
                    var t = {
                        logo: {
                            size: "landing" === this.screenNavigator.currentScreen.id ? "large" : "small"
                        },
                        nav: {
                            style: "landing" === this.screenNavigator.currentScreen.id ? null : "fullscreen"
                        }
                    };
                    "landing" === this.screenNavigator.currentScreen.id && (t.logo.color = "light", this.pagination.hide(), this.scrollCTA.hide()), this.updateRequest(t)
                }, e.prototype.onStepAnimateInStart = function (t) {
                    var e = "screen-7" === this.screenNavigator.currentScreen.id && "step-2" === t.id;
                    this.updateRequest(t.elementsToUpdate), t.elementsToUpdate["scroll-cta"] && this.scrollCTA.update(t.elementsToUpdate["scroll-cta"]), this.pagination.updateIndex(this.screenNavigator.currentScreen.index), t.elementsToUpdate.pagination && this.pagination.update(t.elementsToUpdate.pagination), this.pagination.show(), this.scrollCTA.reverse(e), this.scrollCTA.show()
                }, e.prototype.onStepAnimateInComplete = function (t) {
                    "step-1" === t.stepId && this.pagination.startTimer(t.screenIndex)
                }, e.prototype.onStepAnimateOutStart = function (t) {
                    "step-1" === t.stepId && this.pagination.stopTimer(t.screenIndex)
                }, e.prototype.onScrollCTAClick = function () {
                    this.scrollCTA.isReversed ? this.gotoScreen(1) : this.gotoNextStep()
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.initNav()
                }, e.prototype.onAnimateOutComplete = function () {
                    var e = {
                        logo: {
                            size: null
                        },
                        nav: {
                            style: null
                        }
                    };
                    this.updateRequest(e), t.prototype.onAnimateOutComplete.call(this)
                }, e.prototype.onStepUpdateRequest = function (t) {
                    this.updateRequest(t.elementsToUpdate), t.elementsToUpdate.pagination && this.pagination.update(t.elementsToUpdate.pagination)
                }, e.prototype.onScroll = function (t) {
                    var e = t.target;
                    if (-1 !== e.parentNode.className.indexOf("home-screen__step-2__content__inner")) {
                        var i = e.parentNode.parentNode;
                        if (i.clientHeight < i.scrollHeight) return
                    }
                    t.preventDefault(), t.stopPropagation(), t.originalEvent.wheelDelta && t.originalEvent.wheelDelta < 0 || t.originalEvent.detail && t.originalEvent.detail > 0 ? this.gotoNextStep() : this.gotoPrevStep()
                }, e.prototype.onKeyUp = function (t) {
                    switch (t.keyCode) {
                        case 38:
                            this.gotoPrevStep();
                            break;
                        case 40:
                            this.gotoNextStep()
                    }
                }, e.prototype.onPaginationClick = function (t) {
                    this.gotoScreen(t.screenIndex, "step-1")
                }, e.prototype.onPaginationTimerComplete = function () {
                    this.gotoNextStep()
                }, e.prototype.onSwipe = function (t) {
                    t.direction === Hammer.DIRECTION_UP ? this.gotoNextStep() : t.direction === Hammer.DIRECTION_DOWN && this.gotoPrevStep()
                }, e.prototype.onLogoClick = function (t) {
                    this.gotoScreen(0)
                }, e
            }(l.default));
        i.default = x
    }, {
        "pages/BasePage": 24,
        "pages/home/HomeLanding": 33,
        "pages/home/HomeScreen": 34,
        "pages/home/Pagination": 35,
        "pages/home/ScrollCTA": 36,
        "screen-navigator": 81,
        "throttle-debounce/throttle": 101,
        "url-query": 103
    }],
    27: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("screen-navigator");
        t("lib/DrawSVGPlugin");
        var a = function (t) {
            function e(i) {
                n(this, e);
                var o = s(this, t.call(this, i));
                return o.id = i.id, o.element = $("#main-loading-page"), o.lines = $("#main-loading__lines"), o.linesImg = o.lines.find("svg"), o.linesPaths = o.linesImg.find("path"), o.progressTxt = $("#main-loading__progress__value"), o.lineWidth = o.linesImg.attr("width"), o.lineHeight = o.linesImg.attr("height"), o.screenData = {
                    id: o.id
                }, o.timelineIn = null, o.timelineOut = null, o.linesScale = 1, o.progressTimeline = null, o.progress = 0, o.logoTimeline = null, o
            }
            return o(e, t), e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this.timelineIn && (this.timelineIn.kill(), this.timelineIn = null), this.timelineOut && (this.timelineOut.kill(), this.timelineOut = null), this.progressTimeline && (this.progressTimeline.kill(), this.progressTimeline = null), this.logoTimeline && (this.logoTimeline.kill(), this.logoTimeline = null)
            }, e.prototype.resize = function (t) {
                var e = app.windowWidth / this.lineWidth,
                    i = app.windowHeight / this.lineHeight,
                    n = Math.max(e, i),
                    s = parseInt(this.lineWidth * n),
                    o = parseInt(this.lineHeight * n),
                    r = parseInt(-.5 * (s - app.windowWidth)),
                    a = parseInt(-.5 * (o - app.windowHeight));
                if (this.linesScale = n, this.lines.css({
                        left: r,
                        top: a,
                        width: s,
                        height: o
                    }), this.logoTimeline) {
                    var l = TweenMax.getTweensOf(this.lines)[0];
                    l && l.kill({
                        scale: !0
                    }), TweenMax.set(this.lines, {
                        scale: 79 / (390 * this.linesScale)
                    })
                }
            }, e.prototype.updateProgress = function (t, e) {
                if (!(this.progress >= t) && this.progressTimeline) {
                    var i = TweenMax.getTweensOf(this)[0];
                    i && i.kill({
                        progress: !0
                    }), e || (e = 1.5 * (t - this.progress)), TweenMax.to(this, e, {
                        progress: t,
                        ease: Sine.easeOut,
                        onUpdate: this.onProgressTweenUpdate.bind(this)
                    })
                }
            }, e.prototype.animateIn = function (e) {
                t.prototype.animateIn.call(this, e), this.resize(), this.element[0].style.visibility = "inherit", this.timelineIn = new TimelineMax({}).fromTo(this.lines, .6, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    onComplete: this.onAnimateInComplete.bind(this)
                }, 0).fromTo(this.lines, 5, {
                    scale: 1.1
                }, {
                    scale: 1,
                    ease: Sine.easeInOut
                }, 0).add(this.startProgress.bind(this), .3)
            }, e.prototype.startProgress = function () {
                var t = this.linesPaths;
                this.progressTimeline = new TimelineMax({
                    paused: !0,
                    onComplete: this.onLinesTimelineComplete.bind(this)
                }).to(t[t.length - 1], 1, {
                    drawSVG: "100% 100%",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 2], 1, {
                    drawSVG: "100% 100%",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 3], 1, {
                    drawSVG: "0",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 4], 1, {
                    drawSVG: "0",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 5], 1, {
                    drawSVG: "0",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 6], 1, {
                    drawSVG: "0",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 7], 1, {
                    drawSVG: "0",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 8], 1, {
                    drawSVG: "0",
                    ease: Quad.easeInOut
                }, 0).to(t[t.length - 9], 1, {
                    drawSVG: "0",
                    ease: Quad.easeInOut
                }, 0), this.updateProgress(.45, this.progress ? null : 3)
            }, e.prototype.resetProgress = function () {
                TweenMax.killTweensOf({
                    progress: !0
                }), this.progress = 0, this.onProgressTweenUpdate(), this.updateProgress(.45, 1)
            }, e.prototype.animLogo = function () {
                var t = this.linesPaths,
                    e = TweenMax.getTweensOf(this.lines)[0];
                e && e.kill({
                    scale: !0
                });
                new TimelineMax({
                    onComplete: this.onLogoTimelineComplete.bind(this)
                }).to([t[t.length - 10], t[t.length - 11], t[t.length - 12]], 1, {
                    strokeWidth: 64,
                    stroke: "#000",
                    ease: Expo.easeInOut
                }, 0).to(this.lines, 1, {
                    rotation: -45,
                    scale: 79 / (390 * this.linesScale),
                    x: -11 - parseInt(53) - 7,
                    y: -14,
                    ease: Expo.easeInOut
                }, 0).to($("#main-loading__logo"), 1, {
                    x: parseInt(53) + 7,
                    ease: Expo.easeInOut
                }, 0)
            }, e.prototype.animateOut = function (e) {
                t.prototype.animateOut.call(this, e), this.timelineOut = new TimelineMax({
                    onComplete: this.onAnimateOutComplete.bind(this)
                }).to("#main-loading__overlay", .8, {
                    opacity: 0
                }, 0).to("#main-loading__outer", .8, {
                    yPercent: -100,
                    ease: Expo.easeInOut
                }, 0).to("#main-loading__inner", .8, {
                    yPercent: 100,
                    ease: Expo.easeInOut
                }, 0).to([$("#main-loading__logo"), this.lines], .8, {
                    y: "-=200",
                    ease: Expo.easeInOut
                }, 0)
            }, e.prototype.onAnimateOutComplete = function () {
                t.prototype.onAnimateOutComplete.call(this), this.element[0].style.visibility = ""
            }, e.prototype.onLinesTimelineComplete = function () {
                this.animLogo()
            }, e.prototype.onProgressTweenUpdate = function () {
                var t = 1 === this.progress ? "100" : ("0" + parseInt(100 * this.progress)).slice(-2);
                this.progressTxt.text(t), this.progressTimeline.progress(this.progress)
            }, e.prototype.onLogoTimelineComplete = function () {
                this.emit("complete")
            }, e
        }(r.AScreen);
        i.default = a
    }, {
        "lib/DrawSVGPlugin": 10,
        "screen-navigator": 81
    }],
    28: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/BasePage"),
            l = n(a),
            h = t("lib/SplitText"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.initPage = function () {
                    t.prototype.initPage.call(this), this.splittedTitle = null
                }, e.prototype.disposeTimelineIn = function () {
                    t.prototype.disposeTimelineIn.call(this), this.splittedTitle && (this.splittedTitle.revert(), this.splittedTitle = null)
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this);
                    var e = this.element.find(".process__step");
                    this.splittedTitle = new p.default("#process__title", {
                        type: "lines"
                    }), this.timelineIn.staggerFrom(this.splittedTitle.lines, .7, {
                        y: 80,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .1, .2).staggerFrom(this.element.find(".process__intro__txt"), .7, {
                        y: 80,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .1, .4);
                    for (var i = 0, n = e.length; i < n; i++) {
                        var s = e[i];
                        if (s.getBoundingClientRect().top + window.pageYOffset > app.windowHeight) break;
                        this.timelineIn.staggerFrom([s.querySelector(".process__step__index"), s.querySelector(".process__step__title"), s.querySelector(".process__step__body"), s.querySelector(".process__step__img")], .7, {
                            opacity: 0,
                            y: 80,
                            ease: Expo.easeOut
                        }, .05, "-=.5")
                    }
                }, e
            }(l.default);
        i.default = c
    }, {
        "lib/SplitText": 12,
        "pages/BasePage": 24
    }],
    29: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/BasePage"),
            l = n(a),
            h = t("screen-navigator"),
            p = n(h),
            c = t("pages/projects/Nav"),
            u = n(c),
            f = t("pages/projects/Project"),
            d = n(f),
            m = t("pages/projects/ScrollCTA"),
            _ = n(m),
            g = t("throttle-debounce/throttle"),
            y = (n(g), t("path-to-regexp")),
            v = n(y),
            b = function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.initPage = function () {
                    t.prototype.initPage.call(this), this.window = $(window), this.firstProjectId = this.element[0].getAttribute("data-first-project-id"), this.projects = [], this.initNav(), this.initProjectNavigator(), this.initScrollCTA(), this.line = this.element.find("#projects-line"), this.window.on("keyup." + this.uid, this.onKeyUp.bind(this)), this.element.on("DOMMouseScroll mousewheel", this.onScroll.bind(this)), this.pathRegexp = null, this.pathParser = null
                }, e.prototype.initNav = function () {
                    this.nav = new u.default, this.nav.on("projectClick", this.onNavProjectClick.bind(this)), this.nav.on("expanded", this.onNavExpanded.bind(this))
                }, e.prototype.initProjectNavigator = function () {
                    var t = this,
                        e = this.element.find(".project");
                    this.projectNavigator = new p.default, this.projectNavigator.transition = h.Transitions.outAndIn, this.projectNavigator.on("transitionStart", this.onProjectNavigatorTransitionStart.bind(this)), e.each(function (e, i) {
                        var n = i.id.split("project-id-").join(""),
                            s = new d.default({
                                element: i,
                                id: n,
                                index: e,
                                page: t,
                                owner: t.projectNavigator
                            });
                        i.style.visibility = "", t.projects[e] = s, t.projectNavigator.addItem(n, s, {
                            events: {
                                mediaFullscreen: t.onMediaFullscreen.bind(t)
                            }
                        })
                    })
                }, e.prototype.initScrollCTA = function () {
                    this.scrollCTA = new _.default, this.scrollCTA.on("click", this.onScrollCTAClick.bind(this))
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.nav.off("linkClick"), this.nav.off("expanded"), this.nav.dispose(), this.nav = null, this.window.off("keyup." + this.uid), this.window = null, this.element.off("DOMMouseScroll mousewheel"), this.projectNavigator.off("transitionStart"), this.projectNavigator.dispose(), this.projectNavigator = null, this.scrollCTA.off("click"), this.scrollCTA.dispose(), this.scrollCTA = null, this.projects = null)
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e), this.projectNavigator && this.projectNavigator.currentScreen && this.projectNavigator.currentScreen.resize(e), TweenMax.killTweensOf(this.line), app.windowWidth >= app.screenM ? TweenMax.set(this.line, {
                        clearProps: "opacity,visibility"
                    }) : (TweenMax.set(this.line, {
                        autoAlpha: this.nav.isExpanded ? 0 : 1
                    }), this.emit("updateRequest", {
                        logo: {
                            color: this.nav.isExpanded ? "dark" : "light"
                        },
                        "nav-toggle": {
                            color: this.nav.isExpanded ? "dark" : "light"
                        }
                    }))
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this), this.projectNavigator.showScreen(this.firstProjectId);
                    var e = this.projectNavigator.currentScreen,
                        i = e.element.find(".project__tags__bg"),
                        n = i[0].getBoundingClientRect(),
                        s = e.media.element[0].getBoundingClientRect(),
                        o = this.element.find("#projects_media_overlay");
                    this.scrollCTA.animateIn(), this.timelineIn.staggerFrom(this.element.find(".projects__nav__index__txt, #projects__nav__expand"), .7, {
                        x: 20,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .1, .1).from(this.element.find(".projects__nav__index__txt"), .7, {
                        x: 20,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .1, .1).from(this.element.find(".projects__nav__item--selected .projects__nav__index__line"), .7, {
                        scaleY: 0,
                        ease: Expo.easeOut
                    }, .1).staggerFrom([e.title, e.desc], .7, {
                        x: -30,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, -.07, .1).set(i, {
                        x: -n.right,
                        scaleX: n.height / n.width
                    }, 0).add("tags", .2).to(i, .7, {
                        x: n.width,
                        ease: Expo.easeOut
                    }, "tags").to(i, .7, {
                        x: 0,
                        scaleX: 1,
                        ease: Expo.easeInOut
                    }, "tags+=.6").staggerFrom(e.element.find(".project__tag"), .7, {
                        y: 30,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .07, "tags+=1").set(o, {
                        left: Math.floor(s.left),
                        top: Math.floor(s.top),
                        width: Math.ceil(s.width),
                        height: Math.ceil(s.height),
                        visibility: "inherit"
                    }, 0).to(o, .7, {
                        scaleY: 0,
                        ease: Expo.easeInOut
                    }, .8).from(e.media.navigator.currentScreen.element, 1.3, {
                        scale: 1.3,
                        ease: Quart.easeOut
                    }, .8).from(e.media.nav.element, 1.3, {
                        opacity: 0
                    }, 1).add(this.scrollCTA.timelineIn, "-=.8")
                }, e.prototype.populateLoader = function () {
                    var e = this;
                    t.prototype.populateLoader.call(this), this.projects.forEach(function (t) {
                        var i = t.media.items[0].loader;
                        e.loader.addItem(i)
                    })
                }, e.prototype.getProjectIndex = function (t) {
                    for (var e = 0, i = this.projects.length; e < i; e++)
                        if (this.projects[e].id === t) return e;
                    return -1
                }, e.prototype.gotoNextProject = function () {
                    var t = this.projectNavigator.currentScreen.index;
                    this.gotoProject(t + 1)
                }, e.prototype.gotoPrevProject = function () {
                    var t = this.projectNavigator.currentScreen.index;
                    this.gotoProject(t - 1)
                }, e.prototype.gotoProject = function (t, e) {
                    if (!(t < 0 || t > this.projects.length - 1)) {
                        var i = this.projectNavigator.currentScreen.index > t ? -1 : 1,
                            n = this.projects[t].id;
                        if (n !== this.projectNavigator.currentScreen.id && (this.projectNavigator.currentScreen && (this.projectNavigator.currentScreen.direction = i), this.projectNavigator.showScreen(n, null, {
                                properties: {
                                    direction: i
                                }
                            }), !e || !e.isPopState)) {
                            var s = this.nav.getProjectLink(n);
                            this.emit("pushState", {
                                projectId: n,
                                href: s
                            }, s)
                        }
                    }
                }, e.prototype.onNavProjectClick = function (t) {
                    if (t !== this.projectNavigator.currentItemId) {
                        var e = this.getProjectIndex(t);
                        this.gotoProject(e)
                    }
                }, e.prototype.onPopState = function (e) {
                    if (t.prototype.onPopState.call(this, e), e.state.href) {
                        this.pathRegexp || (this.pathRegexp = (0, v.default)("/project/:id?"), this.pathParser = document.createElement("a")), this.pathParser.href = e.state.href;
                        var i = this.pathRegexp.exec(this.pathParser.pathname);
                        if (i) {
                            e.preventDefault();
                            var n = i[1],
                                s = n ? this.getProjectIndex(n) : 0;
                            this.gotoProject(s, {
                                isPopState: !0
                            })
                        }
                    }
                }, e.prototype.onScroll = function (t) {
                    t.preventDefault(), t.stopPropagation(), this.projectNavigator.transitionRunning || this.projectNavigator.currentScreen.media.isFullscreen || (t.originalEvent.wheelDelta && t.originalEvent.wheelDelta < 0 || t.originalEvent.detail && t.originalEvent.detail > 0 ? this.gotoNextProject() : this.gotoPrevProject())
                }, e.prototype.onKeyUp = function (t) {
                    if (!this.projectNavigator.transitionRunning && !this.projectNavigator.currentScreen.media.isFullscreen) switch (t.keyCode) {
                        case 38:
                            this.gotoPrevProject();
                            break;
                        case 40:
                            this.gotoNextProject()
                    }
                }, e.prototype.onScrollCTAClick = function () {
                    this.projectNavigator.transitionRunning || this.projectNavigator.currentScreen.media.isFullscreen || (this.scrollCTA.isReversed ? this.gotoProject(0) : this.gotoNextProject())
                }, e.prototype.onProjectNavigatorTransitionStart = function () {
                    var t = this.projectNavigator.currentScreen.index === this.projects.length - 1;
                    this.nav.selectItem(this.projectNavigator.currentItemId), this.scrollCTA.reverse(t)
                }, e.prototype.onMediaFullscreen = function (t) {
                    this.scrollCTA.fullscreen(t), this.nav.fullscreen(t), TweenMax.killTweensOf(this.line), TweenMax.to(this.line, .4, {
                        delay: t ? 0 : .3,
                        autoAlpha: t ? 0 : 1
                    })
                }, e.prototype.onNavExpanded = function (t) {
                    app.windowWidth >= app.screenM || (TweenMax.killTweensOf(this.line), TweenMax.to(this.line, .4, {
                        autoAlpha: t ? 0 : 1
                    }), this.emit("updateRequest", {
                        logo: {
                            color: t ? "dark" : "light"
                        },
                        "nav-toggle": {
                            color: t ? "dark" : "light"
                        }
                    }))
                }, e
            }(l.default);
        i.default = b
    }, {
        "pages/BasePage": 24,
        "pages/projects/Nav": 57,
        "pages/projects/Project": 58,
        "pages/projects/ScrollCTA": 62,
        "path-to-regexp": 76,
        "screen-navigator": 81,
        "throttle-debounce/throttle": 101
    }],
    30: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/BasePage"),
            l = n(a),
            h = t("raf"),
            p = n(h),
            c = t("utils/css/prefix-property"),
            u = n(c),
            f = t("lib/SplitText"),
            d = n(f),
            m = function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.initPage = function () {
                    t.prototype.initPage.call(this), this.headerImgWrapper = this.element.find("#solutions__header__img-wrapper"), this.headerImg = this.element.find("#solutions__header__img"), this.splittedSubtitle = null, this.splittedIntroTitle = null, this.initScroll(), this.initIndustries(), this.initMaterial()
                }, e.prototype.initIndustries = function () {
                    this.industriesItems = this.element.find(".solutions__industries__item").on("mouseenter", this.onIndustriesItemRollOver.bind(this)), this.selectIndustriesItem(this.industriesItems[0])
                }, e.prototype.initScroll = function () {
                    this.priceSquare = this.element.find("#solutions__price__images__square"), this.priceImg1 = this.element.find("#solutions__price__img-1"), this.expertsBg = this.element.find("#solutions__experts__bg"), this.onFrameCb = this.onFrame.bind(this), this.onFrameCbId = 0, this.transformProperty = (0, u.default)("transform"), this.scrollIsSleeping = !0, this.scrollTop = 0, this.isTicking = !1, this.priceSquareScrollTop = 0, this.priceSquareScrollTopProgress = 0, this.priceSquareScrollTopProgressOld = 0, this.priceSquareScrollTopEnd = 0, this.priceSquareYStart = 0, this.priceSquareScaleYStart = 1, this.priceSquareScaleYEnd = 1, this.priceSquareIsActive = !0, this.expertsBgScrollTop = 0, this.expertsBgScrollTopProgress = 0, this.expertsBgScrollTopProgressOld = 0, this.expertsBgScrollTopEnd = 0, this.expertsBgYStart = 0, this.expertsBgScaleX = 1, this.expertsBgScaleY = 1, this.expertsBgIsActive = !0, this.element.addClass("scroll-anim"), this.window = $(window).on("scroll." + this.uid, this.onScroll.bind(this))
                }, e.prototype.initMaterial = function () {
                    this.materialSelect = this.element.find("#solutions__material__select__input").on("change", this.onMaterialSelectChange.bind(this)), this.downloadBtnEnabled = !1, this.downloadBtn = this.element.find("#solutions__material__download").on("click", this.onDownloadBtnClick.bind(this))
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.stopTicker(), this.window.off("scroll." + this.uid),
                        this.industriesItems.off("hover"), this.materialSelect.off("change"), this.downloadBtn.off("click"))
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e), this.resizeHeaderImg(), app.windowWidth < app.screenM || (this.resizeScroll(), this.renderScroll())
                }, e.prototype.resizeHeaderImg = function () {
                    var t = this.headerImg[0].naturalWidth,
                        e = this.headerImg[0].naturalHeight,
                        i = this.headerImgWrapper.width(),
                        n = this.headerImgWrapper.height(),
                        s = i / t,
                        o = n / e,
                        r = Math.max(s, o),
                        a = Math.ceil(t * r),
                        l = Math.ceil(e * r),
                        h = Math.floor(-.5 * (a - i)),
                        p = Math.floor(-.5 * (l - n));
                    this.headerImg.css({
                        left: h,
                        top: p,
                        width: a,
                        height: l
                    })
                }, e.prototype.resizeScroll = function () {
                    var t = this.element.find("#solutions__service__title"),
                        e = t[0].getBoundingClientRect(),
                        i = this.priceImg1[0].getBoundingClientRect(),
                        n = this.element.find("#solutions__service__body"),
                        s = n[0].getBoundingClientRect(),
                        o = this.element.find("#solutions__experts"),
                        r = o[0].getBoundingClientRect(),
                        a = this.priceSquare.width();
                    this.priceSquareScrollTopEnd = i.top + window.pageYOffset - app.windowHeight + i.height + 100, this.priceSquareYStart = e.top + window.pageYOffset - (i.top + window.pageYOffset) - 50, this.priceSquareScaleYEnd = i.height / this.priceSquare.height(), this.expertsBgScrollTopEnd = r.top + window.pageYOffset - app.windowHeight + 200, this.expertsBgYStart = e.top + window.pageYOffset - (r.top + window.pageYOffset) + 50, this.expertsBgX = parseInt(s.right), this.expertsBgScaleX = a / r.width, this.expertsBgScaleY = a / r.height
                }, e.prototype.startTicker = function () {
                    this.isTicking || (this.isTicking = !0, this.onFrameCbId = (0, p.default)(this.onFrameCb))
                }, e.prototype.stopTicker = function () {
                    this.isTicking && (this.isTicking = !1, p.default.cancel(this.onFrameCbId))
                }, e.prototype.renderScroll = function () {
                    var t = !1;
                    if (this.priceSquareIsActive) {
                        this.priceSquareScrollTop += .1 * (this.scrollTop - this.priceSquareScrollTop), this.priceSquareScrollTopProgress = this.priceSquareScrollTop / this.priceSquareScrollTopEnd, this.priceSquareScrollTopProgress > 1 && (this.priceSquareScrollTopProgress = 1);
                        var e = this.priceSquareYStart * (1 - this.priceSquareScrollTopProgress),
                            i = this.priceSquareScaleYStart + (this.priceSquareScaleYEnd - this.priceSquareScaleYStart) * this.priceSquareScrollTopProgress;
                        this.priceSquare[0].style[this.transformProperty] = "translate3d(0," + e + "px,0) scaleY(" + i + ")";
                        t = Math.abs(this.priceSquareScrollTopProgress - this.priceSquareScrollTopProgressOld) > .001, this.priceSquareScrollTopProgressOld = this.priceSquareScrollTopProgress, this.priceSquareScrollTopProgress > .999 && (this.priceSquareIsActive = !1, this.showPriceImg())
                    }
                    if (this.expertsBgIsActive) {
                        this.expertsBgScrollTop += .1 * (this.scrollTop - this.expertsBgScrollTop), this.expertsBgScrollTopProgress = this.expertsBgScrollTop / this.expertsBgScrollTopEnd, this.expertsBgScrollTopProgress > 1 && (this.expertsBgScrollTopProgress = 1);
                        var e = (this.expertsBgYStart - 80) * (1 - this.expertsBgScrollTopProgress);
                        this.expertsBg[0].style[this.transformProperty] = "translate3d(" + this.expertsBgX + "px," + e + "px,0) scale(" + this.expertsBgScaleX + "," + this.expertsBgScaleY + ")";
                        t = Math.abs(this.expertsBgScrollTopProgress - this.expertsBgScrollTopProgressOld) > .001, this.expertsBgScrollTopProgressOld = this.expertsBgScrollTopProgress, this.expertsBgScrollTopProgress > .999 && (this.expertsBgIsActive = !1, this.showExperts())
                    }
                    t || (this.scrollIsSleeping = !0)
                }, e.prototype.showPriceImg = function () {
                    var t = this.element.find("#solutions__price__img-1-overlay"),
                        e = this.element.find("#solutions__price__img-2-overlay"),
                        i = this.element.find("#solutions__price__img-1"),
                        n = this.element.find("#solutions__price__img-2");
                    (new TimelineMax).to(t, .7, {
                        scaleX: 0,
                        ease: Expo.easeInOut
                    }).from(i, 2, {
                        scale: 1.3,
                        ease: Quart.easeOut
                    }, 0).to(e, .7, {
                        scaleX: 0,
                        ease: Expo.easeInOut
                    }, .5).from(n, 2, {
                        scale: 1.3,
                        ease: Quart.easeOut
                    }, .5)
                }, e.prototype.showExperts = function () {
                    (new TimelineMax).to(this.expertsBg, .9, {
                        x: 0,
                        scale: 1,
                        ease: Expo.easeInOut
                    }, 0).fromTo(["#solutions__experts__title", "#solutions__experts__subtitle"], .8, {
                        y: 100
                    }, {
                        y: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, .6).staggerFromTo(".solutions__experts__item", .8, {
                        y: 100
                    }, {
                        y: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, .05, .7).staggerFrom(".solutions__experts__item__body", .8, {
                        y: 50,
                        ease: Expo.easeOut
                    }, .08, .7)
                }, e.prototype.animateIn = function (e) {
                    t.prototype.animateIn.call(this, e), e || this.startTicker()
                }, e.prototype.populateLoader = function () {
                    t.prototype.populateLoader.call(this), this.loader.addItem(this.headerImg[0].src)
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this);
                    var e = this.element.find("#solutions__intro__bg"),
                        i = e[0].getBoundingClientRect(),
                        n = this.headerImg[0].getBoundingClientRect();
                    this.splittedSubtitle = new d.default("#solutions__subtitle", {
                        type: "lines"
                    }), this.splittedIntroTitle = new d.default("#solutions__intro__title", {
                        type: "lines"
                    });
                    var s = (new TimelineMax).set(e, {
                        y: n.top - i.top,
                        scaleX: n.width / i.width,
                        scaleY: n.height / i.height
                    }, 0).to(e, .8, {
                        y: -40,
                        scaleY: (n.top + n.height - i.top + 40) / i.height,
                        ease: Quart.easeInOut
                    }, 0).to(e, .4, {
                        scaleX: 1,
                        ease: Quart.easeInOut
                    }, "-=.3").to(e, .7, {
                        y: 0,
                        scaleY: 1,
                        ease: Expo.easeInOut
                    }, "-=.2");
                    this.timelineIn.add(s, 0).from(this.headerImg, 2, {
                        scale: 1.3,
                        ease: Quart.easeOut
                    }, 0).staggerFrom(["#solutions__title"].concat(this.splittedSubtitle.lines), .7, {
                        y: -50,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, -.07, .5).staggerFrom(["#solutions__intro__body"].concat(this.splittedIntroTitle.lines.reverse()), .7, {
                        y: -30,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .1, 1)
                }, e.prototype.selectIndustriesItem = function (t) {
                    var e = "solutions__industries__item--selected";
                    $(t).addClass(e).siblings().removeClass(e)
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.splittedSubtitle && (this.splittedSubtitle.revert(), this.splittedSubtitle = null), this.splittedIntroTitle && (this.splittedIntroTitle.revert(), this.splittedIntroTitle = null)
                }, e.prototype.onFrame = function () {
                    if (this.scrollIsSleeping) return void(this.isTicking = !1);
                    this.renderScroll(), this.onFrameCbId = (0, p.default)(this.onFrameCb)
                }, e.prototype.onScroll = function (t) {
                    app.windowWidth < app.screenS || (this.scrollTop = window.pageYOffset, this.scrollIsSleeping && (this.scrollIsSleeping = !1, this.startTicker()))
                }, e.prototype.onIndustriesItemRollOver = function (t) {
                    this.selectIndustriesItem(t.currentTarget)
                }, e.prototype.onMaterialSelectChange = function (t) {
                    var e = this.materialSelect.find("option:checked").val();
                    this.downloadBtnEnabled || (this.downloadBtnEnabled = !0, this.downloadBtn.removeClass("solutions__material__download--disabled")), this.downloadBtn.attr("href", e)
                }, e.prototype.onDownloadBtnClick = function (t) {
                    -1 !== t.currentTarget.className.indexOf("solutions__material__download--disabled") && t.preventDefault()
                }, e
            }(l.default);
        i.default = m
    }, {
        "lib/SplitText": 12,
        "pages/BasePage": 24,
        raf: 79,
        "utils/css/prefix-property": 64
    }],
    31: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        i.__esModule = !0, t("lib/ScrollToPlugin");
        var s = function () {
            function t(e) {
                n(this, t), this.element = e.element, this.element.on("submit", this.onSubmit.bind(this)), this.subjects = this.element.find(".contact__form__subject__item input").on("change", this.onSubjectChange.bind(this)), this.jobs = this.element.find("#contact__form__jobs").height($("#contact__form__jobs").outerHeight()).addClass("contact__form__jobs--hidden"), this.jobsSelect = this.element.find("#contact__form__jobs__select").on("change", this.onJobsSelectChange.bind(this)), this.jobDetailBtn = this.element.find("#contact__form__jobs__detail").css("display", "none").on("click", this.onJobDetailBtnClick.bind(this)), this.fileInput = this.element.find("#contact__form__file__input").on("change", this.onFileInputChange.bind(this)), $(".contact__form__edu, #contact__form__org").attr("disabled", !0), this.fileLabel = this.element.find("#contact__form__file__btn__label"), this.fileLabelTxt = null, this.alert = this.element.find("#contact__form__alert"), this.submitBtn = this.element.find("#contact__form__submit"), this.currentSubject = null, this.addEducationBtn = this.element.find("#contact__form__edu__add").on("click", this.onAddEducationBtnClick.bind(this)), this.element.on("click", ".contact__form__edu__remove", this.onRemoveEducationBtnClick.bind(this))
            }
            return t.prototype.dispose = function () {
                this.fileInput.off("change"), this.element.off("submit"), this.subjects.off("change"), this.jobDetailBtn.off("click"), this.jobsSelect.off("change"), this.addEducationBtn.off("click"), this.element.off("click", ".contact__form__edu__remove")
            }, t.prototype.resize = function (t) {
                var e = this.jobs.hasClass("contact__form__jobs--hidden");
                this.jobs.removeClass("contact__form__jobs--hidden"), this.jobs.css("height", ""), this.jobs.height(this.jobs.outerHeight()), this.jobs.toggleClass("contact__form__jobs--hidden", e)
            }, t.prototype.reset = function () {
                this.element.trigger("reset").removeClass("contact__form--success contact__form--fail contact__form--sending"), this.fileLabelTxt && this.fileLabel.text(this.fileLabelTxt), this.jobs.addClass("contact__form__jobs--hidden")
            }, t.prototype.selectSubject = function (t) {
                this.element.find('.contact__form__subject__item input[value="' + t + '"]').prop("checked", !0).trigger("change")
            }, t.prototype.selectJob = function (t) {
                this.jobsSelect.val(t)
            }, t.prototype.onSubjectChange = function (t) {
                var e = t.currentTarget.getAttribute("value"),
                    i = "job" === e;
                this.currentSubject && this.element.removeClass("contact__form--" + this.currentSubject), this.currentSubject = e, this.element.addClass("contact__form--" + e), this.jobs.toggleClass("contact__form__jobs--hidden", !i), $("#contact__form__edu, #contact__form__org").css("display", i ? "block" : "").attr("disabled", !i), $("#contact__form__name__personal, #contact__form__name__company").attr("disabled", "job" === e), $("#contact__form__name__last, #contact__form__name__first").attr("disabled", "job" !== e), this.submitBtn.attr("disabled", !1)
            }, t.prototype.onJobDetailBtnClick = function (t) {
                var e = this.jobsSelect.val(),
                    i = $("#contact__jobs__item--" + e),
                    n = parseInt(i.offset().top);
                TweenMax.to(window, .8, {
                    scrollTo: {
                        y: n
                    },
                    ease: Quart.easeInOut
                })
            }, t.prototype.onJobsSelectChange = function () {
                this.jobDetailBtn.css("display", "")
            }, t.prototype.onFileInputChange = function (t) {
                var e = t.target.value.split("\\").pop(),
                    i = e && e.length > 0;
                (this.fileLabelTxt || i) && (this.fileLabelTxt || (this.fileLabelTxt = this.fileLabel.text()), i && e.length > 20 && (e = e.substr(0, 10) + "..." + e.substr(e.length - 10, e.length)), this.fileLabel.text(i ? e : this.fileLabelTxt))
            }, t.prototype.onSubmit = function (t) {
                var e = new FormData(this.element[0]),
                    i = this.element.attr("action");
                t.preventDefault(), this.element.addClass("contact__form--sending").removeClass("contact__form--success contact__form--fail"), this.submitBtn.attr("disabled", !0), $.ajax({
                    url: i,
                    type: "POST",
                    data: e,
                    processData: !1,
                    contentType: !1,
                    enctype: "multipart/form-data",
                    success: this.onFormSuccess.bind(this),
                    error: this.onFormFail.bind(this),
                    complete: this.onFormResponse.bind(this)
                })
            }, t.prototype.onFormSuccess = function (t) {
                this.reset(), this.element.addClass("contact__form--success"), this.alert.text(t.message)
            }, t.prototype.onFormFail = function (t) {
                var e = $("<ul></ul>");
                if (this.element.addClass("contact__form--fail"), t && t.responseJSON && t.responseJSON.errors) {
                    t.responseJSON.errors.forEach(function (t, i) {
                        e.append("<li>" + t + "</li>")
                    })
                } else e.append("<li>Something went worng, please try again.</li>");
                this.alert.html(e)
            }, t.prototype.onFormResponse = function (t) {
                var e = parseInt(this.element.offset().top);
                this.element.removeClass("contact__form--sending"), this.submitBtn.attr("disabled", !1), TweenMax.to(window, .7, {
                    scrollTo: {
                        y: e
                    },
                    ease: Quart.easeInOut
                })
            }, t.prototype.onAddEducationBtnClick = function (t) {
                t.preventDefault();
                var e = this.element.find(".contact__form__edu__item:first"),
                    i = e.clone(),
                    n = i.find(".contact__form__edu__dates__start"),
                    s = i.find("label[for=" + n.attr("id") + "]"),
                    o = "contact__form__edu__dates__start--" + e.length;
                n.attr("id", o), s.attr("for", o);
                var r = i.find(".contact__form__edu__dates__end"),
                    a = i.find("label[for=" + r.attr("id") + "]"),
                    l = "contact__form__edu__dates__end--" + e.length;
                r.attr("id", l), a.attr("for", l), i.find(".contact__form__edu__graduate input").attr("name", "graduate[" + e.length + "]").prop("checked", !1), i.find(":input").val(""), $("#contact__form__edu__container").append(i)
            }, t.prototype.onRemoveEducationBtnClick = function (t) {
                $(t.currentTarget).parents(".contact__form__edu__item").remove(), $(".contact__form__edu__item").each(function (t, e) {
                    $(e).find(".contact__form__edu__graduate input").attr("name", "graduate[" + t + "]")
                })
            }, t
        }();
        i.default = s
    }, {
        "lib/ScrollToPlugin": 11
    }],
    32: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("screen-navigator"),
            a = t("anim/gsap/clear-timeline"),
            l = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a),
            h = function (t) {
                function e(i) {
                    n(this, e);
                    var o = s(this, t.call(this, i));
                    return o.id = i.id, o.index = i.index, o.element = $(i.element), o.owner = i.owner, o.initialized = !1, o.timelineIn = null, o.timelineOut = null, o.direction = 1, o.uid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), o.isVisible = !1, o
                }
                return o(e, t), e.prototype.init = function () {
                    this.initialized = !0
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.element[0].style.visibility = "", this.element[0].style.zIndex = ""), this.disposeTimelineIn(), this.disposeTimelineOut()
                }, e.prototype.disposeTimelineIn = function () {
                    this.timelineIn && (this.timelineIn.kill(), (0, l.default)(this.timelineIn), this.timelineIn = null)
                }, e.prototype.disposeTimelineOut = function () {
                    this.timelineOut && (this.timelineOut.kill(), (0, l.default)(this.timelineOut), this.timelineOut = null)
                }, e.prototype.resize = function (t) {}, e.prototype.gotoNextStep = function () {}, e.prototype.gotoPrevStep = function () {}, e.prototype.complete = function () {
                    this.emit("complete", {
                        id: this.id,
                        index: this.index,
                        step: this.stepNavigator ? this.stepNavigator.currentScreen.id : null
                    })
                }, e.prototype.animateIn = function (e) {
                    if (t.prototype.animateIn.call(this, e), e) return void this.timelineIn.kill();
                    this.isVisible = !0, this.init(), this.timelineIn = new TimelineMax({
                        onStart: this.onAnimateInStart.bind(this),
                        onComplete: this.onAnimateInComplete.bind(this)
                    }), this.populateTimelineIn()
                }, e.prototype.populateTimelineIn = function () {}, e.prototype.animateOut = function (e) {
                    if (t.prototype.animateOut.call(this, e), e) return this.disposeTimelineOut(), void this.onAnimateOutComplete();
                    this.timelineOut = new TimelineMax({
                        onStart: this.onAnimateOutStart.bind(this),
                        onComplete: this.onAnimateOutComplete.bind(this)
                    }), this.populateTimelineOut()
                }, e.prototype.populateTimelineOut = function () {
                    this.initialized
                }, e.prototype.onAnimateInStart = function () {
                    this.emit("animateInStart");
                    var t = 2;
                    if (this.owner.previousScreen) {
                        2 === this.owner.previousScreen.element[0].style.zIndex && (t = 1)
                    }
                    this.element[0].style.visibility = "inherit", this.element[0].style.zIndex = t
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.disposeTimelineIn()
                }, e.prototype.onAnimateOutStart = function () {
                    var t = 1,
                        e = this.owner.currentScreen;
                    if (e) {
                        var i = "landing" === e.id,
                            n = e.index < this.index,
                            s = this.stepNavigator && this.stepNavigator.previousScreen && "step-2" === this.stepNavigator.previousScreen.id,
                            o = "step-1" === e.firstStepId;
                        (i && !s || !i && n && !o) && (t = 2)
                    }
                    this.element[0].style.zIndex = t
                }, e.prototype.onAnimateOutComplete = function () {
                    t.prototype.onAnimateOutComplete.call(this), this.isVisible = !1
                }, e
            }(r.AScreen);
        i.default = h
    }, {
        "anim/gsap/clear-timeline": 2,
        "screen-navigator": 81
    }],
    33: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/AHomeScreen"),
            l = n(a),
            h = t("lib/SplitText"),
            p = n(h),
            c = t("hammerjs"),
            u = n(c),
            f = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.splittedTitle = null, n
                }
                return r(e, t), e.prototype.init = function () {
                    t.prototype.init.call(this), this.scrollBtn = $("#home-landing__scroll").on("click", this.onScrollBtnClick.bind(this)), this.ctaBtn = $("#home-landing__content__cta").on("click", this.onCtaBtnClick.bind(this)), this.video = $("#home-landing__bg__video"), app.hasTouch && (this.hammer = new u.default.Manager(this.element[0], {
                        recognizers: [
                            [u.default.Swipe, {
                                direction: u.default.DIRECTION_VERTICAL
                            }]
                        ]
                    }), this.hammer.on("swipe", this.onSwipe.bind(this)))
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.scrollBtn.off("click"), this.ctaBtn.off("click"), this.hammer && (this.hammer.destroy(), this.hammer = null), this.video.off("canplaythrough." + this.uid))
                }, e.prototype.disposeTimelineIn = function () {
                    t.prototype.disposeTimelineIn.call(this), this.splittedTitle && (this.splittedTitle.revert(), this.splittedTitle = null)
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e)
                }, e.prototype.gotoNextStep = function () {
                    this.complete()
                }, e.prototype.animateIn = function (e) {
                    t.prototype.animateIn.call(this, e)
                }, e.prototype.populateTimelineIn = function () {
                    var e = this;
                    t.prototype.populateTimelineIn.call(this);
                    var i = this.element.find(".home-landing__line"),
                        n = this.element.find("#home-landing__content__cta__bg"),
                        s = this.element.find("#home-landing__content__text__bg"),
                        o = this.element.find("#home-landing__content__text__heading__title"),
                        r = (s.height() / s.width()).toPrecision(4);
                    this.splittedTitle = new p.default(o, {
                        type: "lines"
                    }), this.timelineIn.set(this.element, {
                        pointerEvents: "none"
                    }, 0).add(function () {
                        e.video.length && e.video[0].play()
                    }, .1).from(i[0], .8, {
                        scaleY: 0,
                        ease: Quad.easeInOut
                    }, 0).from(i[1], .7, {
                        scaleY: 0,
                        ease: Quad.easeInOut
                    }, 0).from(i[2], .8, {
                        scaleY: 0,
                        ease: Quad.easeInOut
                    }, .3).set(n, {
                        scaleX: 4.4,
                        autoAlpha: 0
                    }, 0).fromTo(n, .8, {
                        xPercent: -440,
                        autoAlpha: 1
                    }, {
                        xPercent: 0,
                        immediateRender: !1,
                        ease: Expo.easeOut
                    }, .5).addLabel("text-bg", .5).fromTo(s, .9, {
                        xPercent: -100
                    }, {
                        xPercent: 10,
                        ease: Expo.easeOut
                    }, "text-bg").fromTo(s, .8, {
                        scaleX: r
                    }, {
                        scaleX: 1,
                        xPercent: 0,
                        ease: Expo.easeInOut
                    }, "text-bg+=.5").staggerFrom(["#home-landing__content__text__heading__baseline"].concat(this.splittedTitle.lines), .9, {
                        y: 50,
                        autoAlpha: 0,
                        ease: Expo.easeOut
                    }, .05, "text-bg+=.9").from("#home-landing__content__text__body", .7, {
                        y: -50,
                        autoAlpha: 0,
                        ease: Expo.easeOut
                    }, "text-bg+=1.2").from("#home-landing__content__cta__label", .7, {
                        y: 50,
                        autoAlpha: 0,
                        ease: Expo.easeOut
                    }, "text-bg+=1.4").from("#home-landing__scroll__icon", .7, {
                        y: -50,
                        autoAlpha: 0,
                        ease: Expo.easeOut
                    }, "text-bg+=1.6")
                }, e.prototype.populateTimelineOut = function () {
                    t.prototype.populateTimelineOut.call(this), this.timelineOut.to("#home-landing__content__text__bg", 1, {
                        xPercent: -100,
                        ease: Expo.easeInOut
                    }, 0).to("#home-landing__content__text__body", .3, {
                        opacity: 0
                    }, .2).to("#home-landing__content__text__heading", .3, {
                        opacity: 0
                    }, .3).to("#home-landing__content__cta__bg", .9, {
                        yPercent: 100,
                        ease: Expo.easeInOut
                    }, 0).to("#home-landing__content__cta__label", .3, {
                        autoAlpha: 0
                    }, .1)
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this)
                }, e.prototype.onAnimateOutComplete = function () {
                    t.prototype.onAnimateOutComplete.call(this), this.video.length && this.video[0].pause()
                }, e.prototype.onScrollBtnClick = function () {
                    this.complete()
                }, e.prototype.onCtaBtnClick = function () {
                    this.complete()
                }, e.prototype.onSwipe = function (t) {
                    this.emit("swipe", t)
                }, e.prototype.onVideoUpdated = function () {
                    this.video.one("canplaythrough." + this.uid, this.onVideoLoaded.bind(this))
                }, e.prototype.onVideoLoaded = function () {
                    this.isVisible && this.video[0].play()
                }, e
            }(l.default);
        i.default = f
    }, {
        hammerjs: 71,
        "lib/SplitText": 12,
        "pages/home/AHomeScreen": 32
    }],
    34: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/AHomeScreen"),
            l = n(a),
            h = t("screen-navigator"),
            p = n(h),
            c = t("pages/home/screen-steps/ScreenStep1"),
            u = n(c),
            f = t("pages/home/screen-steps/ScreenStep2"),
            d = n(f),
            m = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.firstStepId = null, n
                }
                return r(e, t), e.prototype.init = function () {
                    t.prototype.init.call(this), this.initStepNavigator()
                }, e.prototype.initStepNavigator = function () {
                    var t = this,
                        e = [u.default, d.default];
                    this.stepNavigator = new p.default, this.stepNavigator.transition = h.Transitions.outAndIn, e.forEach(function (e, i) {
                        var n = i + 1,
                            s = "step-" + n;
                        t.stepNavigator.addItem(s, e, {
                            arguments: [{
                                screen: t,
                                id: s,
                                index: n,
                                owner: t.stepNavigator
                            }],
                            events: {
                                complete: t.onStepComplete.bind(t),
                                animateInStart: t.onStepAnimateInStart.bind(t),
                                animateInComplete: t.onStepAnimateInComplete.bind(t),
                                animateOutStart: t.onStepAnimateOutStart.bind(t),
                                updateRequest: t.onStepUpdateRequest.bind(t),
                                swipe: t.onStepSwipe.bind(t)
                            }
                        })
                    })
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && this.stepNavigator.dispose()
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e), this.stepNavigator && this.stepNavigator.currentScreen && this.stepNavigator.currentScreen.resize(e)
                }, e.prototype.gotoNextStep = function () {
                    this.stepNavigator.transitionRunning || ("step-1" === this.stepNavigator.currentScreen.id ? this.stepNavigator.showScreen("step-2") : this.complete())
                }, e.prototype.gotoPrevStep = function () {
                    this.stepNavigator.transitionRunning || ("step-2" === this.stepNavigator.currentScreen.id ? this.stepNavigator.showScreen("step-1") : this.complete())
                }, e.prototype.animateIn = function (e) {
                    t.prototype.animateIn.call(this, e)
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this);
                    var e = this.firstStepId || "step-" + (1 === this.direction ? "1" : "2");
                    if (null === this.owner.previousItemId && app.debug && app.urlQuery.step) {
                        var i = "step-" + app.urlQuery.step;
                        this.stepNavigator.getItem(i) && (e = i)
                    }
                    this.stepNavigator.showScreen(e), this.timelineIn.add(this.stepNavigator.currentScreen.timelineIn)
                }, e.prototype.populateTimelineOut = function () {
                    t.prototype.populateTimelineOut.call(this), this.stepNavigator.clearScreen(), this.timelineOut.add(this.stepNavigator.previousScreen.timelineOut)
                }, e.prototype.getCurrentStepId = function () {
                    return this.stepNavigator.currentScreen.id
                }, e.prototype.onStepComplete = function () {}, e.prototype.onStepUpdateRequest = function (t) {
                    this.emit("stepUpdateRequest", t)
                }, e.prototype.onStepAnimateInStart = function (t) {
                    this.emit("stepAnimateInStart", t)
                }, e.prototype.onStepAnimateInComplete = function (t) {
                    this.emit("stepAnimateInComplete", {
                        stepId: t.id,
                        screenIndex: this.index
                    })
                }, e.prototype.onStepAnimateOutStart = function (t) {
                    this.emit("stepAnimateOutStart", {
                        stepId: t.id,
                        screenIndex: this.index
                    })
                }, e.prototype.onStepSwipe = function (t) {
                    this.emit("swipe", t)
                }, e
            }(l.default);
        i.default = m
    }, {
        "pages/home/AHomeScreen": 32,
        "pages/home/screen-steps/ScreenStep1": 38,
        "pages/home/screen-steps/ScreenStep2": 39,
        "screen-navigator": 81
    }],
    35: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("tiny-emitter"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r);
        t("lib/DrawSVGPlugin");
        var l = function (t) {
            function e() {
                n(this, e);
                var i = s(this, t.call(this));
                return i.element = $("#home-pagination"), i.number = $("#home-pagination__number"), i.numberInner = $("#home-pagination__number__inner"), i.numberCurrent = $("#home-pagination__number__current"), i.nav = $("#home-pagination__nav"), i.navItems = $(".home-pagination__nav__item"), i.navBtns = $(".home-pagination__nav__item__btn"), i.isVisible = !1, i.color = null, i.size = null, i.currentIndex = 0, i.timerIsRunning = !1, i.timerItemIndex = 0, i.timerTimeline = null, i.timerElement = null, i.timelineIn = null, i.timelineOut = null, i.navBtns.on("click", i.onNavBtnClick.bind(i)), i
            }
            return o(e, t), e.prototype.dispose = function () {
                this.navBtns.off("click"), this.disposeTimelineIn(), this.disposeTimelineOut()
            }, e.prototype.disposeTimelineIn = function () {
                this.timelineIn && (this.timelineIn.kill(), this.timelineIn = null)
            }, e.prototype.disposeTimelineOut = function () {
                this.timelineOut && (this.timelineOut.kill(), this.timelineOut = null)
            }, e.prototype.show = function () {
                this.isVisible || (this.isVisible = !0, this.animateIn(), this.element[0].style.visibility = "inherit")
            }, e.prototype.hide = function () {
                this.isVisible && (this.isVisible = !1, this.animateOut())
            }, e.prototype.animateIn = function () {
                this.timelineIn = new TimelineMax({
                    onComplete: this.onAnimateInComplete.bind(this)
                }).from("#home-pagination", 1, {
                    y: 60,
                    autoAlpha: 0,
                    ease: Expo.easeOut
                }, .3).staggerFrom(".home-pagination__nav__item", .8, {
                    y: 40,
                    autoAlpha: 0,
                    ease: Expo.easeOut
                }, .05, "-=.7")
            }, e.prototype.animateOut = function () {
                this.timelineOut = new TimelineMax({
                    onComplete: this.onAnimateOutComplete.bind(this)
                })
            }, e.prototype.update = function (t) {
                t.color && this.updateColor(t.color), t.size && this.updateSize(t.size)
            }, e.prototype.updateColor = function (t) {
                t && t !== this.color && (this.color = t, this.element.toggleClass("home-pagination--dark", "dark" === t))
            }, e.prototype.updateSize = function (t) {
                var e = this;
                if (t && t !== this.size) {
                    this.size = t, TweenMax.killTweensOf([this.element, this.number, this.nav]);
                    var i = "small" === t,
                        n = this.number.width(),
                        s = this.number[0].offsetTop,
                        o = this.element[0].offsetTop,
                        r = this.nav[0].offsetTop;
                    if (this.element.toggleClass("home-pagination--small", i), this.isVisible) {
                        var a = this.number.width() / n;
                        new TimelineMax({
                            onComplete: function () {
                                TweenMax.set(e.element, {
                                    clearProps: "y"
                                }), TweenMax.set(e.number, {
                                    clearProps: "scale, y, x"
                                }), TweenMax.set(e.nav, {
                                    clearProps: "y"
                                }), e.element.toggleClass("home-pagination--small", i)
                            }
                        }).to(this.element, .7, {
                            y: parseInt(this.element[0].offsetTop - o),
                            ease: Quart.easeInOut
                        }, 0).to(this.number, .7, {
                            x: parseInt(.5 * (n - this.number.width())),
                            y: parseInt(this.number[0].offsetTop + this.number.height() - s),
                            scale: a,
                            ease: Quart.easeInOut
                        }, 0).to(this.nav, .7, {
                            y: parseInt(this.nav[0].offsetTop - r),
                            ease: Quart.easeInOut
                        }, 0), this.element.toggleClass("home-pagination--small", !i)
                    }
                }
            }, e.prototype.updateIndex = function (t) {
                if (t !== this.currentIndex) {
                    this.currentIndex = t, this.numberCurrent.text(this.currentIndex), this.navItems.removeClass("home-pagination__nav__item--selected"), $(this.navItems[this.currentIndex - 1]).addClass("home-pagination__nav__item--selected")
                }
            }, e.prototype.startTimer = function (t) {
                this.timerIsRunning || (this.timerItemIndex = t - 1, this.timerIsRunning = !0, this.timerElement = $(this.navItems[this.timerItemIndex]).find(".home-pagination__nav__item__timer"), this.timerTimeline = new TimelineMax({
                    onComplete: this.onTimerComplete.bind(this)
                }).to(this.navBtns[this.timerItemIndex], .5, {
                    scale: 3,
                    autoAlpha: 0,
                    ease: Expo.easeOut
                }, 0).fromTo(this.timerElement, .5, {
                    scale: .2,
                    autoAlpha: 0
                }, {
                    scale: 1,
                    autoAlpha: 1,
                    ease: Expo.easeOut
                }, 0).fromTo(this.timerElement.find(".home-pagination__nav__item__timer__progress"), 7, {
                    drawSVG: "0"
                }, {
                    drawSVG: "0 100%",
                    ease: Linear.easeNone
                }))
            }, e.prototype.stopTimer = function (t) {
                this.timerIsRunning && t - 1 === this.timerItemIndex && (this.timerIsRunning = !1, this.timerTimeline.kill(), this.timerTimeline = null, TweenMax.to(this.timerElement, .3, {
                    scale: .2,
                    autoAlpha: 0,
                    ease: Quart.easeInOut
                }), TweenMax.to(this.navBtns[this.timerItemIndex], .3, {
                    scale: 1,
                    autoAlpha: 1,
                    ease: Quart.easeInOut
                }), this.timerElement = null)
            }, e.prototype.onTimerComplete = function () {
                this.stopTimer(this.timerItemIndex), this.emit("timerComplete")
            }, e.prototype.onNavBtnClick = function (t) {
                var e = parseInt(t.currentTarget.getAttribute("data-screen")) + 1;
                this.emit("click", {
                    screenIndex: e
                })
            }, e.prototype.onAnimateInComplete = function () {
                this.disposeTimelineIn()
            }, e.prototype.onAnimateOutComplete = function () {
                this.element[0].style.visibility = "", this.disposeTimelineOut()
            }, e
        }(a.default);
        i.default = l
    }, {
        "lib/DrawSVGPlugin": 10,
        "tiny-emitter": 102
    }],
    36: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("tiny-emitter"),
            l = n(a),
            h = t("anim/gsap/clear-timeline"),
            p = (n(h), t("hammerjs")),
            c = n(p),
            u = function (t) {
                function e() {
                    s(this, e);
                    var i = o(this, t.call(this));
                    return i.element = $("#home-scroll-cta"), i.isVisible = !1, i.color = null, i.btn = $("#home-scroll-cta__btn").on("click", i.onBtnClick.bind(i)), i.label = $("#home-scroll-cta__label"), i.timelineIn = null, i.timelineOut = null, app.hasTouch && (i.hammer = new c.default.Manager(i.element[0], {
                        recognizers: [
                            [c.default.Swipe, {
                                direction: c.default.DIRECTION_VERTICAL
                            }]
                        ]
                    }), i.hammer.on("swipe", i.onSwipe.bind(i))), i.originalLabel = null, i.isReversed = !1, i.timelineReverse = null, i
                }
                return r(e, t), e.prototype.dispose = function () {
                        this.btn.off("click"), this.disposeTimelineIn(), this.disposeTimelineOut(), this.hammer && (this.hammer.destroy(), this.hammer = null), this.disposeTimelineReverse()
                    }, e.prototype.disposeTimelineIn = function () {
                        this.timelineIn && (this.timelineIn.kill(), this.timelineIn = null)
                    }, e.prototype.disposeTimelineOut = function () {
                        this.timelineOut && (this.timelineOut.kill(), this.timelineOut = null)
                    }, e.prototype.disposeTimelineReverse = function () {
                        this.timelineReverse && (this.timelineReverse.kill(), this.timelineReverse = null)
                    }, e.prototype.show = function () {
                        this.isVisible || (this.isVisible = !0, this.animateIn(), this.element[0].style.visibility = "inherit")
                    }, e.prototype.hide = function () {
                        this.isVisible && (this.isVisible = !1, this.animateOut())
                    }, e.prototype.animateIn = function () {
                        this.timelineIn = new TimelineMax({
                            onComplete: this.onAnimateInComplete.bind(this)
                        }).staggerFrom([this.btn, this.label], .9, {
                            y: -110,
                            autoAlpha: 0,
                            ease: Expo.easeOut
                        }, .1, .5)
                    }, e.prototype.animateOut = function () {
                        this.timelineOut = new TimelineMax({
                            onComplete: this.onAnimateOutComplete.bind(this)
                        })
                    }, e.prototype.reverse = function (t) {
                        var e = this;
                        if (t !== this.isReversed) {
                            var i;
                            this.isReversed = t, this.disposeTimelineReverse(), this.isReversed ? (this.originalLabel || (this.originalLabel = this.label.text()), i = this.label.attr("data-reverse")) : this.originalLabel && (i = this.originalLabel), this.timelineReverse = new TimelineMax({
                                onComplete: this.onTimelineReverseComplete.bind(this)
                            }), this.isVisible && this.timelineReverse.to(this.label, .5, {
                                opacity: 0
                            }).to(this.btn, .5, {
                                opacity: 0
                            }, 0), this.timelineReverse.add(function () {
                                i && e.label.text(i)
                            }).set(this.btn, {
                                rotation: this.isReversed ? -180 : 0
                            }), this.isVisible && this.timelineReverse.add("show").to(this.label, .5, {
                                opacity: 1
                            }, "show").fromTo(this.btn, .5, {
                                opacity: 0,
                                y: 30,
                                immediateRender: !1
                            }, {
                                opacity: 1,
                                y: 0,
                                ease: Expo.easeOut
                            }, "show")
                        }
                    }, e.prototype.update = function (t) {
                        t.color && this.updateColor(t.color)
                    },
                    e.prototype.updateColor = function (t) {
                        t && t !== this.color && (this.color = t, this.element.toggleClass("home-scroll-cta--dark", "dark" === t))
                    }, e.prototype.onBtnClick = function () {
                        this.emit("click")
                    }, e.prototype.onAnimateInComplete = function () {
                        this.disposeTimelineIn()
                    }, e.prototype.onAnimateOutComplete = function () {
                        this.element[0].style.visibility = "", this.disposeTimelineOut()
                    }, e.prototype.onSwipe = function (t) {
                        this.emit("swipe", t)
                    }, e.prototype.onTimelineReverseComplete = function () {
                        this.disposeTimelineReverse()
                    }, e
            }(l.default);
        i.default = u
    }, {
        "anim/gsap/clear-timeline": 2,
        hammerjs: 71,
        "tiny-emitter": 102
    }],
    37: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("screen-navigator"),
            a = t("anim/gsap/clear-timeline"),
            l = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a),
            h = function (t) {
                function e(i) {
                    n(this, e);
                    var o = s(this, t.call(this, i));
                    return o.screen = i.screen, o.index = i.index, o.id = i.id, o.owner = i.owner, o.initialized = !1, o.element = o.screen.element.find(".home-screen__step-" + o.index), o.timelineIn = null, o.timelineInVars = {
                        onComplete: o.onAnimateInComplete.bind(o)
                    }, o.timelineOut = null, o.timelineOutVars = {
                        onComplete: o.onAnimateOutComplete.bind(o)
                    }, o.transition = null, o.transitionInClass = null, o.transitionOutClass = null, o
                }
                return o(e, t), e.prototype.init = function () {
                    this.initialized = !0
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.element[0].style.visibility = "", this.disposeTimelineIn(), this.disposeTimelineOut(), this.disposeTransition())
                }, e.prototype.disposeTimelineIn = function () {
                    this.timelineIn && ((0, l.default)(this.timelineIn), this.timelineIn.kill(), this.timelineIn = null)
                }, e.prototype.disposeTimelineOut = function () {
                    this.timelineOut && ((0, l.default)(this.timelineOut), this.timelineOut.kill(), this.timelineOut = null)
                }, e.prototype.disposeTransition = function () {
                    this.transition && (this.transition.dispose(), this.transition = null)
                }, e.prototype.resize = function (t) {
                    this.transition && this.transition.resize(), this.emit("updateRequest", {
                        elementsToUpdate: this.getElementsToUpdate()
                    })
                }, e.prototype.getElementsToUpdate = function () {
                    return {
                        logo: {
                            color: "step-1" === this.id ? "light" : "dark"
                        },
                        "nav-toggle": {
                            color: "step-1" === this.id ? "light" : "dark"
                        },
                        "scroll-cta": {
                            color: "step-1" === this.id ? "light" : "dark"
                        },
                        pagination: {
                            color: "step-1" === this.id ? "light" : "dark",
                            size: "step-1" === this.id ? "small" : "large"
                        }
                    }
                }, e.prototype.animateIn = function (e) {
                    t.prototype.animateIn.call(this, e), this.init(), this.timelineIn = new TimelineMax(this.timelineInVars), this.timelineIn.call(this.onAnimateInStart.bind(this)), this.populateTimelineIn()
                }, e.prototype.populateTimelineIn = function () {}, e.prototype.animateOut = function (e) {
                    if (t.prototype.animateOut.call(this, e), e) return this.disposeTimelineOut(), void this.onAnimateOutComplete();
                    this.timelineOut = new TimelineMax(this.timelineOutVars), this.timelineOut.call(this.onAnimateOutStart.bind(this)), this.populateTimelineOut()
                }, e.prototype.populateTimelineOut = function () {
                    this.initialized
                }, e.prototype.onAnimateInStart = function () {
                    this.element[0].style.visibility = "inherit", this.emit("animateInStart", {
                        id: this.id,
                        elementsToUpdate: this.getElementsToUpdate()
                    })
                }, e.prototype.onAnimateInComplete = function () {
                    this.disposeTimelineIn(), this.emit("animateInComplete", {
                        id: this.id
                    })
                }, e.prototype.onAnimateOutStart = function () {
                    this.emit("animateOutStart", {
                        id: this.id
                    })
                }, e.prototype.onAnimateOutComplete = function () {
                    t.prototype.onAnimateOutComplete.call(this)
                }, e.prototype.onTransitionInComplete = function () {
                    this.disposeTransition()
                }, e.prototype.onSwipe = function (t) {
                    this.emit("swipe", t)
                }, e
            }(r.AScreen);
        i.default = h
    }, {
        "anim/gsap/clear-timeline": 2,
        "screen-navigator": 81
    }],
    38: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/AScreenStep"),
            l = n(a),
            h = t("raf"),
            p = n(h),
            c = t("lib/SplitText"),
            u = n(c),
            f = t("net/loader/asset-library/AssetLibrary"),
            d = n(f),
            m = t("hammerjs"),
            _ = n(m),
            g = {
                1: t("pages/home/screen-steps/transitions/Step1In1").default,
                2: t("pages/home/screen-steps/transitions/Step1In2").default,
                3: t("pages/home/screen-steps/transitions/Step1In3").default
            },
            y = {
                1: t("pages/home/screen-steps/transitions/Step1Out1").default,
                2: t("pages/home/screen-steps/transitions/Step1Out2").default,
                3: t("pages/home/screen-steps/transitions/Step1Out3").default,
                4: t("pages/home/screen-steps/transitions/Step1Out4").default
            },
            v = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.timelineInVars.delay = .6, n
                }
                return r(e, t), e.prototype.init = function () {
                    switch (t.prototype.init.call(this), this.video = this.element.find(".home-screen__step-1__bg__video"), this.canvas = this.element.find(".home-screen__step-1__bg__canvas"), this.context = this.canvas[0].getContext("2d"), this.buffer = document.createElement("canvas"), this.bufferContext = this.buffer.getContext("2d"), this.hasVideo = this.video.length > 0, this.mediaLoader = null, this.media = this.video[0], this.media || (this.mediaLoader = d.default.getItem("home", "screen-" + this.screen.index + "-step-1"), this.media = this.mediaLoader.img), this.mediaWidth = 0, this.mediaHeight = 0, this.mediaNeedsUpdate = !0, this.onFrameCb = this.onFrame.bind(this), this.onFrameCbId = 0, this.isTicking = !1, this.splittedSubtitle = null, this.screen.index) {
                        case 2:
                        case 3:
                        case 4:
                            this.transitionInClass = g[2];
                            break;
                        case 5:
                            this.transitionInClass = g[3];
                            break;
                        default:
                            this.transitionInClass = g[1]
                    }
                    switch (this.screen.index) {
                        case 3:
                            this.transitionOutClass = y[2];
                            break;
                        case 4:
                            this.transitionOutClass = y[3];
                            break;
                        case 7:
                            this.transitionOutClass = y[4];
                            break;
                        default:
                            this.transitionOutClass = y[1]
                    }
                    app.hasTouch && (this.hammer = new _.default.Manager(this.element[0], {
                        recognizers: [
                            [_.default.Swipe, {
                                direction: _.default.DIRECTION_VERTICAL
                            }]
                        ]
                    }), this.hammer.on("swipe", this.onSwipe.bind(this)))
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.video.off("canplaythrough"), this.media = null, this.mediaLoader && (this.mediaLoader.off("complete"), this.mediaLoader = null), this.hammer && (this.hammer.destroy(), this.hammer = null))
                }, e.prototype.resize = function (e) {
                    t.prototype.resize.call(this, e), this.mediaNeedsUpdate = !0, this.resizeCanvas()
                }, e.prototype.resizeCanvas = function () {
                    this.canvas[0].width = this.buffer.width = app.windowWidth, this.canvas[0].height = this.buffer.height = app.windowHeight
                }, e.prototype.startTicker = function () {
                    this.isTicking || (this.isTicking = !0, this.onFrameCbId = (0, p.default)(this.onFrameCb))
                }, e.prototype.stopTicker = function () {
                    this.isTicking && (this.isTicking = !1, p.default.cancel(this.onFrameCbId))
                }, e.prototype.render = function () {
                    var t = app.windowWidth / this.mediaWidth,
                        e = app.windowHeight / this.mediaHeight,
                        i = Math.max(t, e),
                        n = Math.ceil(this.mediaWidth * i),
                        s = Math.ceil(this.mediaHeight * i),
                        o = parseInt(-.5 * (n - app.windowWidth)),
                        r = parseInt(-.5 * (s - app.windowHeight)),
                        a = [this.media, 0, 0, this.mediaWidth, this.mediaHeight, o, r, n, s];
                    this.transition ? this.transition.render(a) : (this.mediaNeedsUpdate && (this.bufferContext.drawImage.apply(this.bufferContext, a), this.context.drawImage(this.buffer, 0, 0)), this.hasVideo || (this.mediaNeedsUpdate = !1))
                }, e.prototype.animateIn = function () {
                    t.prototype.animateIn.call(this), this.resizeCanvas(), this.timelineIn.pause(), this.hasVideo ? 4 === this.media.readyState ? this.onVideoCanPlayThrough() : this.video.one("canplaythrough", this.onVideoCanPlayThrough.bind(this)) : this.media.complete ? this.onImageLoaded() : this.mediaLoader.once("complete", this.onImageLoaded.bind(this))
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this);
                    var e = this.element.find(".home-screen__step-1__content__title"),
                        i = this.element.find(".home-screen__step-1__content__subtitle"),
                        n = this.element.find(".home-screen__step-1__lines__line");
                    this.splittedSubtitle = new u.default(i, {
                        type: "lines"
                    }), this.transition = new this.transitionInClass({
                        canvas: this.canvas,
                        context: this.context,
                        onComplete: this.onTransitionInComplete.bind(this)
                    }), this.transition.init(), this.timelineIn.add(this.transition.timeline, 0).from(n[0], .9, {
                        scaleY: 0,
                        ease: Expo.easeInOut
                    }, 0).from(n[1], 1.2, {
                        scaleY: 0,
                        ease: Expo.easeInOut
                    }, 0).staggerFrom([e].concat(this.splittedSubtitle.lines), .7, {
                        y: 50,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .06, .4)
                }, e.prototype.populateTimelineOut = function () {
                    t.prototype.populateTimelineOut.call(this);
                    var e = this.element.find(".home-screen__step-1__content__title"),
                        i = this.element.find(".home-screen__step-1__content__subtitle"),
                        n = this.screen.element.find(".home-screen__step-2__content__inner__title"),
                        s = this.screen.element.find(".home-screen__step-2__content__inner__subtitle"),
                        o = e.offset(),
                        r = n.offset(),
                        a = i.offset(),
                        l = s.offset(),
                        h = this.element.find(".home-screen__step-1__lines__line");
                    this.transition = new this.transitionOutClass({
                        canvas: this.canvas,
                        context: this.context,
                        element: this.element,
                        screen: this.screen
                    }), this.transition.init(), this.timelineOut.add(this.transition.timeline, 0), this.owner.currentScreen ? this.timelineOut.addLabel("text", .7).to(h, 1, {
                        opacity: 0
                    }, "text").to(e, .7, {
                        x: r.left - o.left,
                        y: r.top - o.top,
                        opacity: 0,
                        ease: Expo.easeInOut
                    }, "text").to(i, .5, {
                        color: "#d62323",
                        ease: Sine.easeIn
                    }, "text+=.1").to(i, .7, {
                        x: l.left - a.left,
                        y: l.top - a.top,
                        scale: 1,
                        opacity: 0,
                        ease: Expo.easeInOut
                    }, "text+=.1") : this.timelineOut.to([e, i, h], .7, {
                        opacity: 0
                    }, .4)
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.splittedSubtitle && (this.splittedSubtitle.revert(), this.splittedSubtitle = null)
                }, e.prototype.onAnimateOutComplete = function () {
                    t.prototype.onAnimateOutComplete.call(this), this.stopTicker(), this.hasVideo && (this.video[0].currentTime = 0, this.video[0].pause())
                }, e.prototype.onVideoCanPlayThrough = function () {
                    this.mediaWidth = this.media.videoWidth, this.mediaHeight = this.media.videoHeight, this.startTicker(), this.video[0].play(), this.timelineIn.play()
                }, e.prototype.onImageLoaded = function () {
                    this.mediaWidth = this.media.width, this.mediaHeight = this.media.height, this.startTicker(), this.timelineIn.play()
                }, e.prototype.onFrame = function () {
                    this.render(), this.onFrameCbId = (0, p.default)(this.onFrameCb)
                }, e
            }(l.default);
        i.default = v
    }, {
        hammerjs: 71,
        "lib/SplitText": 12,
        "net/loader/asset-library/AssetLibrary": 19,
        "pages/home/screen-steps/AScreenStep": 37,
        "pages/home/screen-steps/transitions/Step1In1": 41,
        "pages/home/screen-steps/transitions/Step1In2": 42,
        "pages/home/screen-steps/transitions/Step1In3": 43,
        "pages/home/screen-steps/transitions/Step1Out1": 44,
        "pages/home/screen-steps/transitions/Step1Out2": 45,
        "pages/home/screen-steps/transitions/Step1Out3": 46,
        "pages/home/screen-steps/transitions/Step1Out4": 47,
        raf: 79
    }],
    39: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/AScreenStep"),
            l = n(a),
            h = t("deep-assign"),
            p = n(h),
            c = t("hammerjs"),
            u = n(c),
            f = {
                1: t("pages/home/screen-steps/transitions/Step2In1").default,
                2: t("pages/home/screen-steps/transitions/Step2In2").default,
                3: t("pages/home/screen-steps/transitions/Step2In3").default,
                4: t("pages/home/screen-steps/transitions/Step2In4").default,
                5: t("pages/home/screen-steps/transitions/Step2In5").default
            },
            d = {
                1: t("pages/home/screen-steps/transitions/Step2Out1").default,
                2: t("pages/home/screen-steps/transitions/Step2Out2").default,
                3: t("pages/home/screen-steps/transitions/Step2Out3").default,
                4: t("pages/home/screen-steps/transitions/Step2Out4").default
            },
            m = function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.init = function () {
                    var e = this;
                    switch (t.prototype.init.call(this), this.screen.index) {
                        case 2:
                            this.transitionInClass = f[2];
                            break;
                        case 3:
                            this.transitionInClass = f[3];
                            break;
                        case 4:
                            this.transitionInClass = f[4];
                            break;
                        case 7:
                            this.transitionInClass = f[5];
                            break;
                        default:
                            this.transitionInClass = f[1]
                    }
                    switch (this.screen.index) {
                        case 2:
                            this.transitionOutClass = d[2];
                            break;
                        case 3:
                            this.transitionOutClass = d[3];
                            break;
                        case 4:
                            this.transitionOutClass = d[4];
                            break;
                        default:
                            this.transitionOutClass = d[1]
                    }
                    if (app.hasTouch) {
                        var i = [this.element.find(".home-screen__step-2__bg")[0], this.element.find(".home-screen__step-2__img")[0], this.element.find(".home-screen__step-2__corner")[0]];
                        this.hammers = [], i.forEach(function (t, i) {
                            var n = new u.default.Manager(t, {
                                recognizers: [
                                    [u.default.Swipe, {
                                        direction: u.default.DIRECTION_VERTICAL
                                    }]
                                ]
                            });
                            n.on("swipe", e.onSwipe.bind(e)), e.hammers.push(n)
                        })
                    }
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && this.hammers && (this.hammers.forEach(function (t, e) {
                        t.destroy()
                    }), this.hammers = null)
                }, e.prototype.getElementsToUpdate = function () {
                    var e = t.prototype.getElementsToUpdate.call(this),
                        i = this.element[0].getAttribute("data-ui");
                    if (!i || !i.length) return e;
                    var n = JSON.parse(i),
                        s = (0, p.default)({}, e, n);
                    return app.windowWidth < app.screenM && (s.logo.color = s["nav-toggle"].color = s.pagination.color = "dark"), s
                }, e.prototype.populateTimelineIn = function () {
                    t.prototype.populateTimelineIn.call(this);
                    var e = this.element.find(".home-screen__step-2__content__inner__title"),
                        i = this.element.find(".home-screen__step-2__content__inner__subtitle"),
                        n = this.screen.element.find(".home-screen__step-1__content__title"),
                        s = this.screen.element.find(".home-screen__step-1__content__subtitle"),
                        o = e.offset(),
                        r = n.offset(),
                        a = i.offset(),
                        l = s.offset(),
                        h = s[0].getBoundingClientRect().width / s[0].offsetWidth,
                        p = this.element.find(".home-screen__step-2__content__inner__body"),
                        c = this.element.find(".home-screen__step-2__content__inner__link");
                    this.transition = new this.transitionInClass({
                        element: this.element,
                        onComplete: this.onTransitionInComplete.bind(this)
                    }), this.transition.init(), this.timelineIn.add(this.transition.timeline, 0).set([e, i], {
                        zIndex: 2
                    }, 0).addLabel("text", .7).from(e, .7, {
                        x: r.left - o.left,
                        y: r.top - o.top,
                        opacity: 0,
                        ease: Expo.easeInOut
                    }, "text").from(i, .7, {
                        x: l.left - a.left,
                        y: l.top - a.top,
                        opacity: 0,
                        scale: h,
                        ease: Expo.easeInOut
                    }, "text+=.1").staggerFrom([p, c], .7, {
                        y: 100,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .1, "text+=.5")
                }, e.prototype.populateTimelineOut = function () {
                    t.prototype.populateTimelineOut.call(this), this.transition = new this.transitionOutClass({
                        element: this.element
                    }), this.transition.init(), this.timelineOut.add(this.transition.timeline, 0).set({}, {}, "+=.7")
                }, e
            }(l.default);
        i.default = m
    }, {
        "deep-assign": 68,
        hammerjs: 71,
        "pages/home/screen-steps/AScreenStep": 37,
        "pages/home/screen-steps/transitions/Step2In1": 48,
        "pages/home/screen-steps/transitions/Step2In2": 49,
        "pages/home/screen-steps/transitions/Step2In3": 50,
        "pages/home/screen-steps/transitions/Step2In4": 51,
        "pages/home/screen-steps/transitions/Step2In5": 52,
        "pages/home/screen-steps/transitions/Step2Out1": 53,
        "pages/home/screen-steps/transitions/Step2Out2": 54,
        "pages/home/screen-steps/transitions/Step2Out3": 55,
        "pages/home/screen-steps/transitions/Step2Out4": 56
    }],
    40: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("tiny-emitter"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e(i) {
                    n(this, e);
                    var o = s(this, t.call(this));
                    return o.onCompleteCb = i.onComplete, o.isComplete = !1, o.timeline = new TimelineMax({
                        onComplete: o.onTimelineComplete.bind(o)
                    }), o
                }
                return o(e, t), e.prototype.init = function () {
                    this.resize(), this.populateTimeline()
                }, e.prototype.dispose = function () {}, e.prototype.disposeTimeline = function () {
                    this.timeline && (this.timeline.kill(), this.timeline = null)
                }, e.prototype.populateTimeline = function () {}, e.prototype.complete = function () {
                    this.isComplete = !0, this.onCompleteCb && this.onCompleteCb(), this.emit("complete")
                }, e.prototype.resize = function () {}, e.prototype.onTimelineComplete = function () {
                    this.complete()
                }, e
            }(a.default);
        i.default = l
    }, {
        "tiny-emitter": 102
    }],
    41: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.canvas = i.canvas, n.context = i.context, n.boxLeft = new p.default, n.boxRight = new p.default, n.videoLeft = new p.default, n.videoLeft.scale = 1, n.videoRight = new p.default, n.videoRight.scale = 1, n.buffer = document.createElement("canvas"), n.bufferContext = n.buffer.getContext("2d"), n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this), this.timeline.from(this.boxLeft, .8, {
                        y: app.windowHeight,
                        ease: Expo.easeOut
                    }, 0).from(this.boxRight, .8, {
                        y: -app.windowHeight,
                        ease: Expo.easeOut
                    }, .1).from(this.videoLeft, .8, {
                        y: app.windowHeight,
                        scale: 1.2,
                        ease: Expo.easeOut
                    }, .2).from(this.videoRight, .9, {
                        y: -app.windowHeight,
                        scale: 1.2,
                        ease: Expo.easeOut
                    }, .3)
                }, e.prototype.resize = function () {
                    t.prototype.resize.call(this), this.boxLeft.width = this.videoLeft.width = Math.ceil(.5 * app.windowWidth), this.boxLeft.height = this.videoLeft.height = app.windowHeight, this.boxRight.x = this.videoRight.x = Math.ceil(.5 * app.windowWidth), this.boxRight.width = this.videoRight.width = Math.floor(.5 * app.windowWidth), this.boxRight.height = this.videoRight.height = app.windowHeight, this.buffer.width = app.windowWidth, this.buffer.height = app.windowHeight
                }, e.prototype.render = function (t) {
                    var e, i, n, s, o, r, a, l;
                    this.context.fillStyle = "#fff", this.context.fillRect(this.boxLeft.x, this.boxLeft.y, this.boxLeft.width, this.boxLeft.height), this.context.fillRect(this.boxRight.x, this.boxRight.y, this.boxRight.width, this.boxRight.height), this.bufferContext.drawImage.apply(this.bufferContext, t), e = this.videoLeft.x + .5 * (this.videoLeft.width - this.videoLeft.width * (1 / this.videoLeft.scale)), i = this.videoLeft.y + .5 * (this.videoLeft.height - this.videoLeft.height * (1 / this.videoLeft.scale)), n = this.videoLeft.width * (1 / this.videoLeft.scale), s = (this.videoLeft.height - i) * (1 / this.videoLeft.scale), 0 === s && (s = 1e-4), o = this.videoLeft.x, r = this.videoLeft.y, a = this.videoLeft.width, l = this.videoLeft.height - this.videoLeft.y, this.context.drawImage(this.buffer, e, i, n, s, o, r, a, l), e = this.videoRight.x + .5 * (this.videoRight.width - this.videoRight.width * (1 / this.videoRight.scale)), i = .5 * (this.videoRight.height - this.videoRight.height * (1 / this.videoRight.scale)), n = this.videoRight.width * (1 / this.videoRight.scale), s = (this.videoRight.height + this.videoRight.y) * (1 / this.videoRight.scale), 0 === s && (s = 1e-4), o = this.videoRight.x, r = 0, a = this.videoRight.width, l = this.videoRight.height + this.videoRight.y, this.context.drawImage(this.buffer, e, i, n, s, o, r, a, l)
                }, e
            }(l.default);
        i.default = c
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    42: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    n.canvas = i.canvas, n.context = i.context, n.numBoxes = 3, n.boxes = [];
                    for (var r = 0; r < n.numBoxes; r++) n.boxes[r] = new p.default;
                    return n.buffer = document.createElement("canvas"), n.bufferContext = n.buffer.getContext("2d"), n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this), this.timeline.staggerFrom(this.boxes, .8, {
                        x: app.windowWidth,
                        ease: Expo.easeOut
                    }, .1)
                }, e.prototype.resize = function () {
                    t.prototype.resize.call(this);
                    for (var e = Math.ceil(app.windowHeight / this.numBoxes), i = 0; i < this.numBoxes; i++) {
                        var n = this.boxes[i];
                        n.width = app.windowWidth, n.height = e, n.y = e * i, n.y + n.height > app.windowHeight && (n.height = app.windowHeight - n.y)
                    }
                    this.buffer.width = app.windowWidth, this.buffer.height = app.windowHeight
                }, e.prototype.render = function (t) {
                    this.bufferContext.drawImage.apply(this.bufferContext, t);
                    for (var e = 0; e < this.numBoxes; e++) {
                        var i = this.boxes[e];
                        this.context.drawImage(this.buffer, 0, i.y, i.width, i.height, i.x, i.y, i.width, i.height)
                    }
                }, e
            }(l.default);
        i.default = c
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    43: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    n.canvas = i.canvas, n.context = i.context, n.overlay = new p.default;
                    var r = parseInt(.9 * app.windowWidth),
                        a = parseInt(.7 * app.windowHeight),
                        l = parseInt(.5 * (app.windowWidth - r)),
                        h = parseInt(.5 * (app.windowHeight - a));
                    return n.mask = new p.default, n.mask.x = l, n.mask.y = h, n.mask.width = r, n.mask.height = a, n.maskPosition = new p.default, n.buffer = document.createElement("canvas"), n.bufferContext = n.buffer.getContext("2d"), n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this), this.timeline.from(this.overlay, .8, {
                        y: app.windowHeight,
                        ease: Quart.easeInOut
                    }).from(this.maskPosition, .9, {
                        y: app.windowHeight,
                        ease: Quart.easeInOut
                    }, .1).to(this.mask, .9, {
                        x: 0,
                        y: 0,
                        width: app.windowWidth,
                        height: app.windowHeight,
                        ease: Expo.easeInOut
                    }, "-=.2")
                }, e.prototype.resize = function () {
                    t.prototype.resize.call(this), this.overlay.width = app.windowWidth, this.overlay.height = app.windowHeight, this.buffer.width = app.windowWidth, this.buffer.height = app.windowHeight
                }, e.prototype.render = function (t) {
                    this.bufferContext.drawImage.apply(this.bufferContext, t), this.context.clearRect(0, 0, app.windowWidth, app.windowHeight), this.context.fillStyle = "#fff", this.context.fillRect(this.overlay.x, this.overlay.y, this.overlay.width, this.overlay.height), this.context.drawImage(this.buffer, this.mask.x, this.mask.y, this.mask.width, this.mask.height, this.mask.x, this.maskPosition.y + this.mask.y, this.mask.width, this.mask.height)
                }, e
            }(l.default);
        i.default = c
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    44: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.canvas = i.canvas, n.context = i.context, n.position = new p.default, n.mask = new p.default, n.mask.width = app.windowWidth, n.mask.height = app.windowHeight, n.buffer = document.createElement("canvas"), n.bufferContext = n.buffer.getContext("2d"), n.resizeBuffer(), n
                }
                return r(e, t), e.prototype.resize = function () {
                    t.prototype.resize.call(this), this.resizeBuffer()
                }, e.prototype.resizeBuffer = function () {
                    this.buffer.width = app.windowWidth, this.buffer.height = app.windowHeight
                }, e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = parseInt(.9 * app.windowWidth),
                        i = parseInt(.7 * app.windowHeight),
                        n = parseInt(.5 * (app.windowWidth - e)),
                        s = parseInt(.5 * (app.windowHeight - i));
                    this.timeline.to(this.mask, .8, {
                        x: n,
                        y: s,
                        width: e,
                        height: i,
                        ease: Expo.easeInOut
                    }, .1).to(this.position, .7, {
                        x: -(n + e + 10),
                        ease: Expo.easeInOut
                    }, "-=.2")
                }, e.prototype.render = function (t) {
                    this.bufferContext.drawImage.apply(this.bufferContext, t), this.context.clearRect(0, 0, app.windowWidth, app.windowHeight), this.context.drawImage(this.buffer, this.mask.x, this.mask.y, this.mask.width, this.mask.height, this.position.x + this.mask.x, this.mask.y, this.mask.width, this.mask.height)
                }, e
            }(l.default);
        i.default = c
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    45: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.canvas = i.canvas, n.context = i.context, n.position = new p.default, n.mask = new p.default, n.mask.width = app.windowWidth, n.mask.height = app.windowHeight, n.buffer = document.createElement("canvas"), n.bufferContext = n.buffer.getContext("2d"), n.resizeBuffer(), n
                }
                return r(e, t), e.prototype.resize = function () {
                    t.prototype.resize.call(this), this.resizeBuffer()
                }, e.prototype.resizeBuffer = function () {
                    this.buffer.width = app.windowWidth, this.buffer.height = app.windowHeight
                }, e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = parseInt(.9 * app.windowWidth),
                        i = parseInt(.7 * app.windowHeight),
                        n = parseInt(.5 * (app.windowWidth - e)),
                        s = parseInt(.5 * (app.windowHeight - i));
                    this.timeline.to(this.mask, .8, {
                        x: n,
                        y: s,
                        width: e,
                        height: i,
                        ease: Expo.easeInOut
                    }, .1).to(this.position, .7, {
                        x: n + e + 10,
                        ease: Expo.easeInOut
                    }, "-=.2")
                }, e.prototype.render = function (t) {
                    this.bufferContext.drawImage.apply(this.bufferContext, t), this.context.clearRect(0, 0, app.windowWidth, app.windowHeight), this.context.drawImage(this.buffer, this.mask.x, this.mask.y, this.mask.width, this.mask.height, this.position.x + this.mask.x, this.mask.y, this.mask.width, this.mask.height)
                }, e
            }(l.default);
        i.default = c
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    46: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.canvas = i.canvas, n.context = i.context, n.position = new p.default, n.mask = new p.default, n.mask.width = app.windowWidth, n.mask.height = app.windowHeight, n.buffer = document.createElement("canvas"), n.bufferContext = n.buffer.getContext("2d"), n.resizeBuffer(), n
                }
                return r(e, t), e.prototype.resize = function () {
                    t.prototype.resize.call(this), this.resizeBuffer()
                }, e.prototype.resizeBuffer = function () {
                    this.buffer.width = app.windowWidth, this.buffer.height = app.windowHeight
                }, e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = parseInt(.9 * app.windowWidth),
                        i = parseInt(.7 * app.windowHeight),
                        n = parseInt(.5 * (app.windowWidth - e)),
                        s = parseInt(.5 * (app.windowHeight - i));
                    this.timeline.to(this.mask, .8, {
                        x: n,
                        y: s,
                        width: e,
                        height: i,
                        ease: Expo.easeInOut
                    }, .1).to(this.position, .7, {
                        y: -s - i - 10,
                        ease: Expo.easeInOut
                    }, "-=.2")
                }, e.prototype.render = function (t) {
                    this.bufferContext.drawImage.apply(this.bufferContext, t), this.context.clearRect(0, 0, app.windowWidth, app.windowHeight), this.context.drawImage(this.buffer, this.mask.x, this.mask.y, this.mask.width, this.mask.height, this.mask.x, this.position.y + this.mask.y, this.mask.width, this.mask.height)
                }, e
            }(l.default);
        i.default = c
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    47: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = n(h),
            c = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.canvas = i.canvas,
                        n.context = i.context, n.screen = i.screen, n.position = new p.default, n.mask = new p.default, n.mask.width = app.windowWidth, n.mask.height = app.windowHeight, n.buffer = document.createElement("canvas"), n.bufferContext = n.buffer.getContext("2d"), n.resizeBuffer(), n
                }
                return r(e, t), e.prototype.resize = function () {
                    t.prototype.resize.call(this), this.resizeBuffer()
                }, e.prototype.resizeBuffer = function () {
                    this.buffer.width = app.windowWidth, this.buffer.height = app.windowHeight
                }, e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.screen.element.find(".home-screen__step-2__bg"),
                        i = e.width(),
                        n = e.height(),
                        s = e[0].offsetTop;
                    this.timeline.to(this.mask, .8, {
                        y: s,
                        width: i,
                        height: n,
                        ease: Expo.easeInOut
                    }, .1).to(this.position, .7, {
                        x: -i,
                        ease: Expo.easeInOut
                    }, "-=.2")
                }, e.prototype.render = function (t) {
                    this.bufferContext.drawImage.apply(this.bufferContext, t), this.context.clearRect(0, 0, app.windowWidth, app.windowHeight), this.context.drawImage(this.buffer, this.mask.x, this.mask.y, this.mask.width, this.mask.height, this.position.x + this.mask.x, this.mask.y, this.mask.width, this.mask.height)
                }, e
            }(l.default);
        i.default = c
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    48: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__corner");
                    this.timeline.set(e, {
                        zIndex: 2
                    }, 0).from(e, .7, {
                        yPercent: 100,
                        ease: Expo.easeInOut
                    }, .2).from(e, .7, {
                        scaleX: .5,
                        x: .3 * app.windowWidth,
                        transformOrigin: "right bottom",
                        ease: Expo.easeInOut
                    }, "-=.1").from(this.element.find(".home-screen__step-2__bg"), .8, {
                        x: app.windowWidth,
                        ease: Expo.easeInOut
                    }, .7)
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    49: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__corner"),
                        i = this.element.find(".home-screen__step-2__img__overlay");
                    this.timeline.set(e, {
                        zIndex: 2
                    }, 0).set(i, {
                        visibility: "inherit"
                    }, 0).from(e, .7, {
                        yPercent: 100,
                        ease: Expo.easeInOut
                    }, .2).from(e, .7, {
                        scaleX: .5,
                        x: .3 * app.windowWidth,
                        transformOrigin: "right bottom",
                        ease: Expo.easeInOut
                    }, "-=.1").from(this.element.find(".home-screen__step-2__bg"), .8, {
                        x: app.windowWidth,
                        ease: Expo.easeInOut
                    }, .6).from(this.element.find(".home-screen__step-2__img"), 1.1, {
                        xPercent: 100,
                        ease: Expo.easeOut
                    }, .7).to(i, .8, {
                        xPercent: -100,
                        ease: Quart.easeInOut
                    }, .7)
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    50: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__img"),
                        i = this.element.find(".home-screen__step-2__img__overlay"),
                        n = this.element.find(".home-screen__step-2__bg");
                    this.timeline.set(i, {
                        visibility: "inherit"
                    }).to(i, .8, {
                        xPercent: 100,
                        ease: Quart.easeInOut
                    }, .6).from(e, 1.3, {
                        scale: 1.1,
                        ease: Quart.easeOut
                    }, .6).from(n, .8, {
                        yPercent: 100,
                        ease: Expo.easeInOut
                    }, .8)
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    51: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__img"),
                        i = this.element.find(".home-screen__step-2__corner"),
                        n = this.element.find(".home-screen__step-2__lines__line")[3];
                    this.timeline.from(e, 1.3, {
                        scale: 1.15,
                        opacity: 0,
                        ease: Quart.easeInOut
                    }, .4).set(i, {
                        zIndex: 2
                    }, 0).from(i, .8, {
                        yPercent: 100,
                        ease: Expo.easeInOut
                    }, .2).from(i, .8, {
                        x: .5 * (app.windowWidth - 4 * i.width()),
                        scaleX: 4,
                        ease: Expo.easeInOut
                    }, .8).from(n, .8, {
                        yPercent: 100,
                        ease: Expo.easeInOut
                    }, .6)
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    52: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__img__overlay");
                    this.timeline.set(e, {
                        visibility: "inherit"
                    }).to(e, .9, {
                        xPercent: -100,
                        ease: Expo.easeInOut
                    }, .7)
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    53: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__content"),
                        i = this.element.find(".home-screen__step-2__content__inner__body"),
                        n = this.element.find(".home-screen__step-2__content__inner__link");
                    this.timeline.to([i, n], .5, {
                        opacity: 0
                    }, 0).to(e, .7, {
                        xPercent: -60,
                        opacity: 0,
                        ease: Quart.easeIn
                    }, "-=.3")
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    54: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__img"),
                        i = this.element.find(".home-screen__step-2__img__overlay"),
                        n = this.element.find(".home-screen__step-2__content"),
                        s = this.element.find(".home-screen__step-2__bg");
                    this.timeline.to(n, .8, {
                        yPercent: 50,
                        opacity: 0,
                        ease: Quart.easeIn
                    }, 0).to(s, .6, {
                        y: 100,
                        opacity: 0,
                        ease: Quart.easeIn
                    }, .2).to(e, .6, {
                        x: 100 - e[0].offsetLeft,
                        ease: Expo.easeInOut
                    }, .2).set(i, {
                        visibility: "inherit"
                    }, 0).fromTo(i, .7, {
                        xPercent: 100
                    }, {
                        xPercent: 0,
                        ease: Expo.easeInOut
                    }, .3)
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    55: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this, i));
                    return n.element = i.element, n
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this);
                    var e = this.element.find(".home-screen__step-2__img"),
                        i = this.element.find(".home-screen__step-2__bg"),
                        n = this.element.find(".home-screen__step-2__content");
                    this.timeline.to(e, .8, {
                        xPercent: -100,
                        opacity: 0,
                        ease: Quart.easeIn
                    }, 0).to(n, .8, {
                        x: -n[0].offsetLeft - n.width(),
                        opacity: 0,
                        ease: Quart.easeIn
                    }, 0).to(i, .8, {
                        x: -i[0].offsetLeft - i.width(),
                        ease: Quart.easeIn
                    }, 0)
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    56: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("pages/home/screen-steps/transitions/ATransition"),
            l = n(a),
            h = t("geom/Rectangle"),
            p = (n(h), function (t) {
                function e(i) {
                    return s(this, e), o(this, t.call(this, i))
                }
                return r(e, t), e.prototype.populateTimeline = function () {
                    t.prototype.populateTimeline.call(this), this.timeline.set({}, {}, "+=2")
                }, e
            }(l.default));
        i.default = p
    }, {
        "geom/Rectangle": 9,
        "pages/home/screen-steps/transitions/ATransition": 40
    }],
    57: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("tiny-emitter"),
            l = n(a),
            h = t("anim/gsap/clear-timeline"),
            p = n(h),
            c = "projects__nav__item--selected",
            u = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this));
                    return n.isExpanded = !1, n.expandTimeline = null, n.shrinkTimeline = null, n.element = $("#projects__nav"), n.list = n.element.find("#projects__nav__list"), n.items = n.element.find(".projects__nav__item"), n.selectedItem = n.element.find("." + c), n.links = n.element.find(".projects__nav__link").on("click", n.onLinkClick.bind(n)), n.expandBtn = $("#projects__nav__expand").on("click", n.onExpandBtnClick.bind(n)), n.shrinkBtn = $("#projects__nav__shrink").on("click", n.onShrinkBtnClick.bind(n)), n.clickedProjectId = null, n.window = $(window), n.onKeyUpCb = n.onKeyUp.bind(n), n.window.on("keyup", n.onKeyUpCb), n
                }
                return r(e, t), e.prototype.dispose = function () {
                    this.disposeExpandTimeline(), this.disposeShrinkTimeline(), this.links.off("click"), this.expandBtn.off("click"), this.shrinkBtn.off("click"), this.window.off("keyup", this.onKeyUpCb)
                }, e.prototype.disposeExpandTimeline = function () {
                    this.expandTimeline && (this.expandTimeline.kill(), (0, p.default)(this.expandTimeline), this.expandTimeline = null)
                }, e.prototype.disposeShrinkTimeline = function () {
                    this.shrinkTimeline && (this.shrinkTimeline.kill(), (0, p.default)(this.shrinkTimeline), this.shrinkTimeline = null)
                }, e.prototype.getProjectLink = function (t) {
                    return this.element.find(".projects__nav__item[data-id=" + t + "]").find(".projects__nav__link").attr("href")
                }, e.prototype.getItemIndex = function (t) {
                    return Array.prototype.indexOf.call(t.parentNode.children, t)
                }, e.prototype.selectItem = function (t) {
                    var e = 1,
                        i = this.selectedItem;
                    if (this.selectedItem = this.list.find(".projects__nav__item[data-id=" + t + "]"), i[0] !== this.selectedItem[0]) {
                        this.selectedItem.addClass(c);
                        var n = this.selectedItem.find(".projects__nav__index__line");
                        if (i && this.getItemIndex(i[0]) > this.getItemIndex(this.selectedItem[0]) && (e = -1), i) {
                            var s = i.find(".projects__nav__index__line");
                            TweenMax.killTweensOf(s), i.removeClass(c), TweenMax.set(s, {
                                autoAlpha: 1
                            }), TweenMax.to(s, .3, {
                                scaleY: 0,
                                y: 1 === e ? s.height() : 0,
                                ease: Expo.easeIn,
                                onComplete: function () {
                                    TweenMax.set(s, {
                                        clearProps: "scale, y, opacity, visibility"
                                    })
                                }
                            })
                        }
                        TweenMax.killTweensOf(n), TweenMax.from(n, .6, {
                            delay: i ? .3 : 0,
                            scaleY: 0,
                            y: 1 === e ? 0 : n.height(),
                            ease: Expo.easeOut,
                            onComplete: function () {
                                TweenMax.set(n, {
                                    clearProps: "scale, y, opacity, visibility"
                                })
                            }
                        }), this.isExpanded && this.shrink()
                    }
                }, e.prototype.fullscreen = function (t) {
                    TweenMax.killTweensOf(this.element), t ? TweenMax.to(this.element, .5, {
                        autoAlpha: 0
                    }) : TweenMax.to(this.element, .5, {
                        delay: .3,
                        autoAlpha: 1
                    })
                }, e.prototype.expand = function () {
                    if (!this.isExpanded) {
                        this.isExpanded = !0, this.disposeExpandTimeline(), this.disposeShrinkTimeline();
                        var t = $("#projects__nav__color-overlay"),
                            e = this.expandBtn.offset(),
                            i = this.expandBtn.outerWidth(),
                            n = this.expandBtn.css("padding-left"),
                            s = (this.shrinkBtn.offset(), $(".projects__nav__index__txt")),
                            o = [],
                            r = [],
                            a = [],
                            l = $(".projects__nav__item--selected .projects__nav__index__line"),
                            h = l.height(),
                            p = l.offset();
                        s.each(function (t, e) {
                            o[t] = $(e).offset()
                        }), this.element.addClass("projects__nav--expanded");
                        var c = this.expandBtn.offset(),
                            u = e.top - c.top;
                        s.each(function (t, e) {
                            var i = $(e).offset();
                            r[t] = o[t].left - i.left, a[t] = o[t].top - i.top
                        }), this.expandTimeline = new TimelineMax({
                            onComplete: this.onExpandComplete.bind(this)
                        }).fromTo(t, .3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1
                        }, 0).from("#projects__nav__overlay", .8, {
                            scaleX: 0,
                            ease: Expo.easeInOut
                        }, 0).set(this.expandBtn, {
                            top: u,
                            left: e.left - c.left,
                            width: i,
                            paddingLeft: n
                        }, 0).fromTo(this.expandBtn, .6, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            xPercent: -50,
                            ease: Quad.easeIn
                        }, 0).from(l, .6, {
                            y: p.top - l.offset().top,
                            scaleY: h / l.height(),
                            ease: Quad.easeInOut
                        }, 0).staggerFrom(s, .6, {
                            cycle: {
                                x: r,
                                y: a
                            },
                            ease: Quad.easeInOut
                        }, 0, 0).staggerFrom(".projects__nav__infos", .8, {
                            x: 100,
                            autoAlpha: 0,
                            ease: Expo.easeOut
                        }, .1, .4).from(this.shrinkBtn, .8, {
                            autoAlpha: 0,
                            x: -50,
                            ease: Expo.easeOut
                        }, .5), this.onExpanded()
                    }
                }, e.prototype.shrink = function () {
                    if (this.isExpanded) {
                        this.isExpanded = !1, this.disposeExpandTimeline(), this.disposeShrinkTimeline();
                        var t = $("#projects__nav__overlay"),
                            e = $("#projects__nav__color-overlay"),
                            i = this.shrinkBtn.offset(),
                            n = $(".projects__nav__index__txt"),
                            s = [],
                            o = [],
                            r = [];
                        n.each(function (t, e) {
                            s[t] = $(e).offset()
                        });
                        var a = $(".projects__nav__infos"),
                            l = [],
                            h = [],
                            p = [],
                            c = a.width(),
                            u = a.outerHeight(!0);
                        a.each(function (t, e) {
                            l[t] = $(e).offset()
                        });
                        var f = $(".projects__nav__item--selected .projects__nav__index__line"),
                            d = f.height(),
                            m = f.offset();
                        this.element.removeClass("projects__nav--expanded");
                        var _ = app.windowWidth / t.width(),
                            g = app.windowHeight / t.height(),
                            y = this.shrinkBtn.offset(),
                            v = i.left - y.left,
                            b = i.top - y.top;
                        n.each(function (t, e) {
                            var i = $(e).offset();
                            o[t] = s[t].left - i.left, r[t] = s[t].top - i.top
                        });
                        var w = m.top - f.offset().top,
                            x = d / f.height();
                        a.each(function (t, e) {
                            var i = $(e).offset();
                            h[t] = l[t].left - i.left, p[t] = l[t].top - i.top
                        }), this.shrinkTimeline = this.expandTimeline = new TimelineMax({
                            onComplete: this.onShrinkComplete.bind(this)
                        }).set([t, e], {
                            autoAlpha: 1,
                            y: -t.offset().top,
                            scaleX: _,
                            scaleY: g
                        }, 0).fromTo(t, .8, {
                            x: 0
                        }, {
                            x: -app.windowWidth,
                            ease: Expo.easeInOut
                        }, 0).to(e, .7, {
                            autoAlpha: 0
                        }, 0).fromTo(this.shrinkBtn, .3, {
                            autoAlpha: 1,
                            x: v,
                            y: b
                        }, {
                            autoAlpha: 0,
                            x: v - 50,
                            ease: Quad.easeIn
                        }, 0).staggerFrom(n, .6, {
                            cycle: {
                                x: o,
                                y: r,
                                ease: Expo.easeInOut
                            }
                        }, 0, .1).from(f, .6, {
                            y: w,
                            scaleY: x,
                            ease: Quad.easeInOut
                        }, 0).set(a, {
                            width: c,
                            height: u
                        }, 0).staggerFromTo(a, .4, {
                            cycle: {
                                x: h,
                                y: p
                            },
                            autoAlpha: 1
                        }, {
                            cycle: {
                                x: function (t) {
                                    return h[t] - 30
                                }
                            },
                            autoAlpha: 0,
                            ease: Expo.easeInOut
                        }, 0, 0).fromTo(this.expandBtn, .8, {
                            autoAlpha: 0,
                            x: -50
                        }, {
                            autoAlpha: 1,
                            x: 0,
                            ease: Expo.easeOut
                        }, .3).add(this.goToClickedProject.bind(this), "-=.7"), this.onExpanded()
                    }
                }, e.prototype.goToClickedProject = function () {
                    this.clickedProjectId && (this.emit("projectClick", this.clickedProjectId), this.clickedProjectId = null)
                }, e.prototype.onExpanded = function () {
                    this.emit("expanded", this.isExpanded)
                }, e.prototype.onExpandComplete = function () {
                    this.disposeExpandTimeline()
                }, e.prototype.onShrinkComplete = function () {
                    this.disposeShrinkTimeline()
                }, e.prototype.onLinkClick = function (t) {
                    t.preventDefault();
                    var e = t.currentTarget;
                    this.clickedProjectId = e.parentNode.getAttribute("data-id"), this.isExpanded ? this.shrink() : this.goToClickedProject()
                }, e.prototype.onExpandBtnClick = function () {
                    this.expand()
                }, e.prototype.onShrinkBtnClick = function () {
                    this.shrink()
                }, e.prototype.onKeyUp = function (t) {
                    if (!this.expandTimeline && !this.shrinkTimeline) switch (t.keyCode) {
                        case 27:
                            this.shrink()
                    }
                }, e
            }(l.default);
        i.default = u
    }, {
        "anim/gsap/clear-timeline": 2,
        "tiny-emitter": 102
    }],
    58: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("screen-navigator"),
            l = t("anim/gsap/clear-timeline"),
            h = n(l),
            p = t("pages/projects/ProjectMedia"),
            c = n(p),
            u = t("lib/SplitText"),
            f = n(u),
            d = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this));
                    return n.id = i.id, n.index = i.index, n.element = $(i.element), n.owner = i.owner, n.page = i.page, n.initialized = !1, n.timelineIn = null, n.timelineOut = null, n.direction = 1, n.uid = n.page.uid + "__project-" + n.id, n.init(), n
                }
                return r(e, t), e.prototype.init = function () {
                    this.initialized = !0, this.media = new c.default({
                        element: this.element.find(".project__media"),
                        project: this,
                        uid: this.uid + "__media"
                    }), this.media.on("fullscreen", this.onMediaFullscreen.bind(this)), this.tags = this.element.find(".project__tags"), this.moreBtn = this.element.find(".project__desc__more").on("click", this.onMoreBtnClick.bind(this)), this.title = this.element.find(".project__title"), this.desc = this.element.find(".project__desc")
                }, e.prototype.dispose = function () {
                    t.prototype.dispose.call(this), this.initialized && (this.disposeTimelineIn(), this.disposeTimelineOut(), this.media.off("fullscreen"), this.media.dispose(), this.media = null, this.moreBtn.off("click"), this.moreBtn = null)
                }, e.prototype.disposeTimelineIn = function () {
                    if (this.timelineIn) {
                        var t = this.timelineIn.vars.onCompleteParams[0];
                        t && t.revert(), this.timelineIn.kill(), (0, h.default)(this.timelineIn), this.timelineIn = null
                    }
                }, e.prototype.disposeTimelineOut = function () {
                    this.timelineOut && (this.timelineOut.kill(), (0, h.default)(this.timelineOut), this.timelineOut = null)
                }, e.prototype.resize = function (t) {
                    this.media.resize(t)
                }, e.prototype.animateIn = function (e) {
                    if (t.prototype.animateIn.call(this, e), this.disposeTimelineIn(), this.disposeTimelineOut(), !e) {
                        var i = null === this.owner.previousItemId;
                        if (this.media.show(), i) return this.onAnimateInStart(), void this.onAnimateInComplete();
                        var n = this.element.find(".project__title"),
                            s = new f.default(n, {
                                type: "lines"
                            }),
                            o = this.element[0].getAttribute("data-title");
                        o && o.length && (document.title = o), this.timelineIn = new TimelineMax({
                            onStart: this.onAnimateInStart.bind(this),
                            onComplete: this.onAnimateInComplete.bind(this),
                            onCompleteParams: [s]
                        }).staggerFrom(this.element.find(".project__tag"), .7, {
                            y: -50 * this.direction,
                            opacity: 0,
                            ease: Expo.easeOut
                        }, .07, .4), app.windowWidth >= app.screenM ? this.timelineIn.addLabel("body", .4).staggerFrom(s.lines, .7, {
                            y: -60 * this.direction,
                            autoAlpha: 0,
                            ease: Expo.easeOut
                        }, -.1 * this.direction, "body" + (1 === this.direction ? "+=.1" : "")).from(this.element.find(".project__desc"), .7, {
                            y: -60 * this.direction,
                            autoAlpha: 0,
                            ease: Expo.easeOut
                        }, "body" + (1 === this.direction ? "" : "+=.2")).addLabel("media", 0).set(this.media.element, {
                            zIndex: ""
                        }, "media").from(this.media.element, .7, {
                            y: (this.media.element.offset().top + this.media.element.height()) * this.direction * -1,
                            ease: Expo.easeInOut
                        }, "media").from(this.media.navigator.currentScreen.element, .7, {
                            yPercent: 100 * this.direction,
                            ease: Expo.easeInOut
                        }, "media").from(this.media.nav.element, .7, {
                            autoAlpha: 0
                        }, "media+=.7") : this.timelineIn.set(this.media.element, {
                            zIndex: 3
                        }, 0).set(n, {
                            zIndex: 4
                        }, 0).from(this.media.element, .7, {
                            xPercent: 100 * this.direction,
                            ease: Expo.easeInOut
                        }, 0).staggerFrom([n, this.element.find(".project__desc__content"), this.element.find(".project__desc__more")], .7, {
                            x: 100 * this.direction,
                            autoAlpha: 0,
                            ease: Expo.easeInOut
                        }, .1, 0)
                    }
                }, e.prototype.animateOut = function (e) {
                    if (t.prototype.animateOut.call(this, e), this.disposeTimelineIn(), this.disposeTimelineOut(), e) return void this.onAnimateOutComplete();
                    var i = this.element.find(".project__title"),
                        n = new f.default(this.element.find(".project__title"), {
                            type: "lines"
                        });
                    this.timelineOut = new TimelineMax({
                        onStart: this.onAnimateOutStart.bind(this),
                        onComplete: this.onAnimateOutComplete.bind(this),
                        onCompleteParams: [n]
                    }).staggerTo(this.element.find(".project__tag"), .4, {
                        y: 50 * this.direction,
                        opacity: 0,
                        ease: Quart.easeIn
                    }, .07, .1), app.windowWidth >= app.screenM ? this.timelineOut.staggerTo(n.lines, .4, {
                        y: 60 * this.direction,
                        autoAlpha: 0,
                        ease: Quart.easeIn
                    }, -.05 * this.direction, 1 === this.direction ? .1 : 0).to(this.element.find(".project__desc"), .4, {
                        y: 60 * this.direction,
                        autoAlpha: 0,
                        ease: Quart.easeIn
                    }, 1 === this.direction ? .1 : 0).to(this.media.element, .6, {
                        y: 1 === this.direction ? app.windowHeight - this.media.element.offset().top : -1 * (this.media.element.offset().top + this.media.element.height()),
                        ease: Quart.easeInOut
                    }, 0).to(this.media.navigator.currentScreen.element, .6, {
                        yPercent: -100 * this.direction,
                        ease: Quart.easeInOut
                    }, 0).to(this.media.nav.element, .3, {
                        opacity: 0
                    }, 0) : this.timelineOut.set(this.media.element, {
                        zIndex: 2
                    }, 0).set(i, {
                        zIndex: 3
                    }, 0).to(this.media.element, .7, {
                        xPercent: -100 * this.direction,
                        ease: Expo.easeInOut
                    }, 0).staggerTo([i, this.element.find(".project__desc__content"), this.element.find(".project__desc__more")], .7, {
                        x: -100 * this.direction,
                        autoAlpha: 0,
                        ease: Expo.easeInOut
                    }, .05, 0)
                }, e.prototype.onAnimateInStart = function () {
                    this.element[0].style.visibility = "inherit", this.emit("animateInStart")
                }, e.prototype.onAnimateInComplete = function () {
                    t.prototype.onAnimateInComplete.call(this), this.disposeTimelineIn(), this.media.loadItems()
                }, e.prototype.onAnimateOutStart = function () {}, e.prototype.onAnimateOutComplete = function () {
                    t.prototype.onAnimateOutComplete.call(this), this.disposeTimelineOut(), this.element[0].style.visibility = this.tags[0].style.visibility = this.title[0].style.visibility = ""
                }, e.prototype.onMediaFullscreen = function (t) {
                    var e = this;
                    TweenMax.killTweensOf([this.tags, this.title, this.desc]), t ? (app.windowWidth >= app.screenM ? TweenMax.staggerTo([this.title, this.desc], .4, {
                        x: -100,
                        autoAlpha: 0,
                        ease: Quart.easeIn
                    }, .05) : TweenMax.staggerTo(this.title, .6, {
                        y: 100,
                        autoAlpha: 0,
                        ease: Expo.easeInOut
                    }), TweenMax.to(this.tags, .5, {
                        yPercent: 100,
                        ease: Quart.easeIn
                    })) : (app.windowWidth >= app.screenM ? TweenMax.staggerTo([this.title, this.desc], .7, {
                        delay: .3,
                        x: 0,
                        autoAlpha: 1,
                        ease: Expo.easeOut,
                        onComplete: function () {
                            TweenMax.set([e.title, e.desc], {
                                clearProps: "all"
                            })
                        }
                    }, .05) : TweenMax.staggerTo(this.title, .7, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                        onComplete: function () {
                            TweenMax.set([e.title, e.desc], {
                                clearProps: "all"
                            })
                        }
                    }), TweenMax.to(this.tags, .7, {
                        delay: .3,
                        yPercent: 0,
                        ease: Expo.easeOut,
                        onComplete: function () {
                            TweenMax.set(e.tags, {
                                clearProps: "all"
                            })
                        }
                    })), this.emit("mediaFullscreen", t)
                }, e.prototype.onMoreBtnClick = function () {
                    this.media.openFullscreen()
                }, e
            }(a.AScreen);
        i.default = d
    }, {
        "anim/gsap/clear-timeline": 2,
        "lib/SplitText": 12,
        "pages/projects/ProjectMedia": 59,
        "screen-navigator": 81
    }],
    59: [function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("tiny-emitter"),
            l = n(a),
            h = t("screen-navigator"),
            p = n(h),
            c = t("pages/projects/ProjectMediaItem"),
            u = n(c),
            f = t("pages/projects/ProjectMediaNav"),
            d = n(f),
            m = t("anim/gsap/clear-timeline"),
            _ = n(m),
            g = t("hammerjs"),
            y = n(g),
            v = "project__media--fullscreen",
            b = function (t) {
                function e(i) {
                    s(this, e);
                    var n = o(this, t.call(this));
                    return n.element = i.element, n.uid = i.uid, n.project = i.project, n.isFullscreen = n.element.hasClass(v), n.timelineOpenFullscreen = null, n.timelineCloseFullscreen = null, n.items = [], n.firstItemIndex = n.element[0].getAttribute("data-first-media-index"), n.nav = new d.default({
                        element: n.element.find(".project__media__nav")
                    }), n.nav.on("click", n.onNavClick.bind(n)), n.moreBlock = n.element.find(".project__media__more").on("click", n.onMoreBlockClick.bind(n)), n.closeBtn = n.element.find(".project__media__close").on("click", n.onCloseBtnClick.bind(n)), n.initNavigator(), n.window = $(window).on("keyup." + n.uid, n.onKeyUp.bind(n)), n.hammer = null, Modernizr.touchevents && (n.hammer = new y.default.Manager(n.element[0], {
                        recognizers: [
                            [y.default.Swipe, {
                                direction: y.default.DIRECTION_HORIZONTAL
                            }]
                        ]
                    }), n.hammer.on("swipe", n.onSwipe.bind(n))), n
                }
                return r(e, t), e.prototype.initNavigator = function () {
                    var t = this;
                    this.navigator = new p.default, this.navigator.transition = h.Transitions.outAndIn, this.element.find(".project__media__item").each(function (e, i) {
                        var n = "media-" + e,
                            s = new u.default({
                                index: e,
                                element: i,
                                id: n,
                                owner: t.navigator,
                                container: t
                            });
                        t.items[e] = s, t.navigator.addItem(n, s, {
                            events: {
                                animateInStart: t.onItemAnimateInStart.bind(t)
                            }
                        })
                    })
                }, e.prototype.dispose = function () {
                    this.disposeTimelineOpenFullscreen(), this.disposeTimelineCloseFullscreen(), this.navigator.dispose(), this.navigator = null, this.nav.off("click"), this.nav.dispose(), this.nav = null, this.moreBlock.off("click"), this.moreBlock = null, this.closeBtn.off("click"), this.closeBtn = null, this.window.off("keyup." + this.uid), this.items = null, this.hammer && (this.hammer.destroy(), this.hammer = null)
                }, e.prototype.disposeTimelineOpenFullscreen = function () {
                    this.timelineOpenFullscreen && (this.timelineOpenFullscreen.kill(), (0, _.default)(this.timelineOpenFullscreen), this.timelineOpenFullscreen = null)
                }, e.prototype.disposeTimelineCloseFullscreen = function () {
                    this.timelineCloseFullscreen && (this.timelineCloseFullscreen.kill(), (0, _.default)(this.timelineCloseFullscreen), this.timelineCloseFullscreen = null)
                }, e.prototype.loadItems = function () {
                    this.items.forEach(function (t) {
                        t.load()
                    })
                }, e.prototype.resize = function (t) {
                    this.navigator && this.navigator.currentScreen.resize(t)
                }, e.prototype.show = function () {
                    this.navigator.showScreen("media-" + this.firstItemIndex)
                }, e.prototype.gotoNextItem = function () {
                    var t = this.navigator.currentScreen.index;
                    this.gotoItem(t + 1)
                }, e.prototype.gotoPrevItem = function () {
                    var t = this.navigator.currentScreen.index;
                    this.gotoItem(t - 1)
                }, e.prototype.gotoItem = function (t) {
                    if (!this.project.owner.transitionRunning && !(t < 0 || t > this.items.length - 1)) {
                        var e = "media-" + t;
                        if (this.navigator.getItem(e)) {
                            var i = this.navigator.currentScreen.index < t ? 1 : -1;
                            this.navigator.currentScreen && (this.navigator.currentScreen.direction = i), this.navigator.showScreen(e, null, {
                                properties: {
                                    direction: i
                                }
                            })
                        }
                    }
                }, e.prototype.openFullscreen = function () {
                    if (!this.isFullscreen) {
                        this.disposeTimelineOpenFullscreen(), this.disposeTimelineCloseFullscreen();
                        var t = this.nav.element.width(),
                            e = this.nav.element.offset(),
                            i = this.nav.nextBtn[0].offsetLeft,
                            n = this.nav.element.find(".project__media__nav__line"),
                            s = n[0].offsetLeft,
                            o = this.navigator.currentScreen.element,
                            r = o.offset(),
                            a = o.width(),
                            l = o.height(),
                            h = this.navigator.currentScreen.img,
                            p = h.position(),
                            c = h.width(),
                            u = h.height();
                        this.isFullscreen = !0, this.element.addClass(v), this.resize(), this.onFullscreenChange();
                        var f = t / this.nav.element.outerWidth(),
                            d = this.nav.element.offset(),
                            m = o.offset(),
                            _ = r.left - m.left,
                            g = r.top - m.top,
                            y = h.position();
                        this.timelineOpenFullscreen = new TimelineMax({
                            onComplete: this.onOpenFullscreenComplete.bind(this)
                        }).from(this.element.find(".project__media__close__label"), .5, {
                            opacity: 0
                        }, .2).from(this.element.find(".project__media__close__btn"), .8, {
                            yPercent: -100,
                            ease: Expo.easeOut
                        }, .2), app.windowWidth >= app.screenM ? this.timelineOpenFullscreen.from(this.element.find(".project__media__overlay"), .5, {
                            opacity: 0
                        }, 0).from(this.nav.element, .8, {
                            x: e.left - d.left,
                            y: e.top - d.top,
                            ease: Quart.easeInOut
                        }, 0).from(this.nav.element.find(".project__media__nav__bg"), .8, {
                            scaleX: f,
                            ease: Quart.easeInOut
                        }, 0).from(this.nav.nextBtn[0], .8, {
                            x: i - this.nav.nextBtn[0].offsetLeft,
                            ease: Quart.easeInOut
                        }, 0).from(n, .8, {
                            x: s - n[0].offsetLeft,
                            opacity: 1,
                            ease: Quart.easeInOut
                        }, 0).staggerFrom(this.nav.element.find(".project__media__nav__item"), .7, {
                            yPercent: 100,
                            opacity: 0,
                            ease: Expo.easeOut
                        }, .05, .4).fromTo(o, .8, {
                            clip: "rect(" + g + "," + (_ + a) + "," + (g + l) + "," + _ + ")"
                        }, {
                            clip: "rect(0," + app.windowWidth + "," + app.windowHeight + ",0)",
                            ease: Expo.easeInOut
                        }, 0).from(h, .8, {
                            x: _ + (p.left - y.left),
                            y: g + (p.top - y.top),
                            scaleX: c / h.width(),
                            scaleY: u / h.height(),
                            ease: Expo.easeInOut
                        }, 0) : this.timelineOpenFullscreen.fromTo(this.element.find(".project__media__overlay"), .8, {
                            autoAlpha: .6,
                            scaleY: l / o.height()
                        }, {
                            autoAlpha: 0,
                            scaleY: 1,
                            ease: Expo.easeInOut
                        }, 0).from(this.nav.element, .8, {
                            yPercent: 100,
                            ease: Quart.easeOut
                        }, .4).fromTo(o, .8, {
                            clip: "rect(0," + app.windowWidth + "," + l + ",0)"
                        }, {
                            clip: "rect(0," + app.windowWidth + "," + app.windowHeight + ",0)",
                            ease: Expo.easeInOut
                        }, 0).from(h, .8, {
                            x: _ + (p.left - y.left),
                            y: g + (p.top - y.top),
                            scaleX: c / h.width(),
                            scaleY: u / h.height(),
                            ease: Expo.easeInOut
                        }, 0)
                    }
                }, e.prototype.closeFullscreen = function () {
                    if (this.isFullscreen) {
                        this.disposeTimelineOpenFullscreen(), this.disposeTimelineCloseFullscreen();
                        var t = this.element.find(".project__media__overlay"),
                            e = this.closeBtn.offset(),
                            i = this.nav.element.offset(),
                            n = this.nav.element.outerWidth(),
                            s = this.nav.element.height(),
                            o = this.nav.element.find(".project__media__nav__line"),
                            r = this.nav.nextBtn[0].offsetLeft,
                            a = this.nav.element.find(".project__media__nav__list"),
                            l = a[0].offsetLeft,
                            h = this.element.find(".project__media__list"),
                            p = this.navigator.currentScreen.element,
                            c = p.offset(),
                            u = (p.width(), p.height()),
                            f = this.navigator.currentScreen.img,
                            d = f.position(),
                            m = f.width(),
                            _ = f.height();
                        this.isFullscreen = !1, this.element.removeClass(v), this.resize(), this.onFullscreenChange();
                        var g = t.offset(),
                            y = this.closeBtn.offset(),
                            b = n / this.nav.element.outerWidth(),
                            w = this.nav.element.offset(),
                            x = this.nav.nextBtn[0].offsetLeft,
                            T = p.offset(),
                            S = c.left - T.left,
                            I = c.top - T.top,
                            O = p.width(),
                            C = p.height(),
                            P = f.position();
                        this.timelineCloseFullscreen = new TimelineMax({
                            onStart: this.onCloseFullscreenStart.bind(this),
                            onComplete: this.onCloseFullscreenComplete.bind(this)
                        }).set(this.closeBtn, {
                            x: e.left - y.left,
                            y: e.top - y.top
                        }, 0).set(this.element.find(".project__media__close"), {
                            autoAlpha: 1
                        }, 0).to(this.element.find(".project__media__close__label"), .3, {
                            opacity: 0
                        }, 0).to(this.element.find(".project__media__close__btn"), .3, {
                            yPercent: -101,
                            ease: Quad.easeIn
                        }, 0), app.windowWidth >= app.screenM ? this.timelineCloseFullscreen.set(t, {
                            y: -g.top,
                            x: -g.left,
                            width: app.windowWidth
                        }, 0).from(t, .9, {
                            autoAlpha: 1
                        }, 0).set(p.find(".project__media__more"), {
                            autoAlpha: 0
                        }, 0).from(this.nav.element, .6, {
                            x: i.left - w.left,
                            y: i.top - w.top,
                            ease: Quart.easeInOut
                        }, 0).from(this.nav.element.find(".project__media__nav__bg"), .6, {
                            scaleX: b,
                            ease: Quart.easeInOut
                        }, 0).from(this.nav.element.find(".project__media__nav__btn--next"), .6, {
                            x: r - x,
                            ease: Quart.easeInOut
                        }, 0).set(a, {
                            autoAlpha: 1,
                            x: l - a[0].offsetLeft
                        }, 0).to(this.nav.element.find(".project__media__nav__item"), .7, {
                            opacity: 0
                        }, 0).from(o, .3, {
                            opacity: 0,
                            ease: Quart.easeInOut
                        }, .3).set([h, p], {
                            overflow: "visible"
                        }, 0).fromTo(p, .8, {
                            clip: "rect(" + I + "," + (app.windowWidth - T.left) + "," + (app.windowHeight - T.top) + "," + S + ")"
                        }, {
                            clip: "rect(0," + O + "," + C + ",0)",
                            ease: Expo.easeInOut
                        }, 0).from(f, .8, {
                            x: S + (d.left - P.left),
                            y: I + (d.top - P.top),
                            scaleX: m / f.width(),
                            scaleY: _ / f.height(),
                            ease: Expo.easeInOut
                        }, 0) : this.timelineCloseFullscreen.set(this.nav.element, {
                            autoAlpha: 1,
                            bottom: -(app.windowHeight - C),
                            height: s
                        }, 0).to(this.nav.element, .8, {
                            yPercent: 100,
                            ease: Quart.easeInOut
                        }, 0).from(this.element.find(".project__media__overlay"), .8, {
                            autoAlpha: 0,
                            scaleY: u / p.height(),
                            ease: Expo.easeInOut
                        }, 0).set([h, p], {
                            overflow: "visible"
                        }, 0).fromTo(p, .8, {
                            clip: "rect(0," + app.windowWidth + "," + app.windowHeight + ",0)"
                        }, {
                            clip: "rect(0," + app.windowWidth + "," + C + ",0)",
                            ease: Expo.easeInOut
                        }, 0).from(f, .8, {
                            x: S + (d.left - P.left),
                            y: I + (d.top - P.top),
                            scaleX: m / f.width(),
                            scaleY: _ / f.height(),
                            ease: Expo.easeInOut
                        }, 0)
                    }
                }, e.prototype.onOpenFullscreenComplete = function () {
                    this.disposeTimelineOpenFullscreen(), this.nav.activateAutoHide(), this.emit("openFullscreenComplete")
                }, e.prototype.onCloseFullscreenStart = function () {
                    this.nav.deactivateAutoHide(), this.emit("closeFullscreenStart")
                }, e.prototype.onCloseFullscreenComplete = function () {
                    this.disposeTimelineCloseFullscreen(), this.emit("closeFullscreenComplete")
                }, e.prototype.onFullscreenChange = function () {
                    this.emit("fullscreen", this.isFullscreen)
                }, e.prototype.onNavClick = function (t) {
                    "next" === t ? this.gotoNextItem() : "prev" === t ? this.gotoPrevItem() : this.gotoItem(t)
                }, e.prototype.onMoreBlockClick = function () {
                    this.openFullscreen()
                }, e.prototype.onCloseBtnClick = function () {
                    this.closeFullscreen()
                }, e.prototype.onItemAnimateInStart = function () {
                    this.nav.selectItem(this.navigator.currentScreen.index)
                }, e.prototype.onKeyUp = function (t) {
                    if (!(this.navigator.transitionRunning || this.timelineOpenFullscreen || this.timelineCloseFullscreen)) switch (t.keyCode) {
                        case 39:
                            this.gotoNextItem();
                            break;
                        case 37:
                            this.gotoPrevItem();
                            break;
                        case 27:
                            this.closeFullscreen()
                    }
                }, e.prototype.onSwipe = function (t) {
                    t.direction === y.default.DIRECTION_LEFT ? this.gotoNextItem() : t.direction === y.default.DIRECTION_RIGHT && this.gotoPrevItem()
                }, e
            }(l.default);
        i.default = b
    }, {
        "anim/gsap/clear-timeline": 2,
        hammerjs: 71,
        "pages/projects/ProjectMediaItem": 60,
        "pages/projects/ProjectMediaNav": 61,
        "screen-navigator": 81,
        "tiny-emitter": 102
    }],
    60: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("screen-navigator"),
            a = t("net/loader/asset-library/AssetLazyImage"),
            l = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a);
        t("lazysizes");
        var h = function (t) {
            function e(i) {
                n(this, e);
                var o = s(this, t.call(this));
                return o.id = i.id, o.index = i.index, o.element = $(i.element), o.owner = i.owner, o.container = i.container, o.type = o.element.hasClass("project__media__item--video") ? "video" : "image", o.img = o.element.find(".project__media__img"), o.initialized = !1, o.isVisible = !1, o.direction = 1, o.loader = new l.default(o.img[0]), o
            }
            return o(e, t), e.prototype.init = function () {
                this.initialized = !0, this.container.on("openFullscreenComplete", this.onOpenFullscreenComplete.bind(this)), this.container.on("closeFullscreenStart", this.onCloseFullscreenStart.bind(this))
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this.initialized && (this.element[0].style.visibility = "", this.container.off("openFullscreenComplete"), this.container.off("closeFullscreenStart"), this.loader.dispose())
            }, e.prototype.load = function () {
                "waiting" === this.loader.status && this.loader.load()
            }, e.prototype.resize = function (t) {
                var e = this.img[0].naturalWidth,
                    i = this.img[0].naturalHeight,
                    n = this.element.width(),
                    s = this.element.height(),
                    o = n / e,
                    r = s / i,
                    a = Math.max(o, r),
                    l = parseInt(e * a),
                    h = parseInt(i * a),
                    p = parseInt(.5 * (n - l)),
                    c = parseInt(.5 * (s - h));
                this.img.css({
                    width: l,
                    height: h,
                    top: c,
                    left: p
                })
            }, e.prototype.addPlayer = function () {
                var t = this.element.find(".project__media__player"),
                    e = t.attr("data-id"),
                    i = '<iframe src="//player.vimeo.com/video/' + e + '?color=fff&autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                t.html(i), this.img[0].style.visibility = "hidden"
            }, e.prototype.removePlayer = function () {
                this.element.find(".project__media__player").empty(), this.img[0].style.visibility = ""
            }, e.prototype.animateIn = function (e) {
                if (t.prototype.animateIn.call(this, e), this.isVisible = !0, !e) {
                    if (TweenMax.killTweensOf(this.element), this.init(), this.resize(), this.element[0].style.visibility = "inherit", this.container.project.owner.transitionRunning) return this.onAnimateInStart(), void this.onAnimateInComplete();
                    TweenMax.fromTo(this.element, .7, {
                        xPercent: 100 * this.direction
                    }, {
                        xPercent: 0,
                        ease: Quart.easeInOut,
                        onStart: this.onAnimateInStart.bind(this),
                        onComplete: this.onAnimateInComplete.bind(this)
                    })
                }
            }, e.prototype.animateOut = function (e) {
                if (t.prototype.animateOut.call(this, e), this.isVisible = !1, !e) {
                    if (TweenMax.killTweensOf(this.element), this.container.project.owner.transitionRunning) return void this.onAnimateOutComplete();
                    TweenMax.to(this.element, .7, {
                        xPercent: -100 * this.direction,
                        ease: Quart.easeInOut,
                        onComplete: this.onAnimateOutComplete.bind(this)
                    })
                }
            }, e.prototype.onAnimateInStart = function () {
                this.emit("animateInStart")
            }, e.prototype.onAnimateInComplete = function () {
                t.prototype.onAnimateInComplete.call(this), TweenMax.set(this.element, {
                    clearProps: "x"
                }), "video" === this.type && this.container.isFullscreen && this.addPlayer()
            }, e.prototype.onAnimateOutComplete = function () {
                t.prototype.onAnimateOutComplete.call(this), TweenMax.set(this.element, {
                    clearProps: "x"
                }), this.element[0].style.visibility = "", "video" === this.type && this.container.isFullscreen && this.removePlayer()
            }, e.prototype.onOpenFullscreenComplete = function () {
                this.isVisible && ("video" === this.type ? this.addPlayer() : lazySizes.autoSizer.checkElems())
            }, e.prototype.onCloseFullscreenStart = function () {
                "video" === this.type && this.isVisible && this.removePlayer()
            }, e
        }(r.AScreen);
        i.default = h
    }, {
        lazysizes: 75,
        "net/loader/asset-library/AssetLazyImage": 18,
        "screen-navigator": 81
    }],
    61: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("tiny-emitter"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = "project__media__nav__item--selected",
            h = function (t) {
                function e(i) {
                    n(this, e);
                    var o = s(this, t.call(this));
                    return o.element = i.element, o.selectedItem = o.element.find("." + l), o.items = o.element.find(".project__media__nav__item"), o.items.length < 2 && o.element.css("display", "none"), o.itemsBtns = o.element.find(".project__media__nav__item__btn").on("click", o.onItemBtnClick.bind(o)), o.nextBtn = o.element.find(".project__media__nav__btn--next").on("click", o.onNextBtnClick.bind(o)), o.prevBtn = o.element.find(".project__media__nav__btn--prev").on("click", o.onPrevBtnClick.bind(o)), o.isVisible = !0, o.autoHideActivated = !0, o.autoHideLocked = !1, o.autoHideTimeoutId = 0, o.hideCb = o.hide.bind(o), o
                }
                return o(e, t), e.prototype.dispose = function () {
                    this.element[0].style.visibility = "", this.nextBtn.off("click"), this.nextBtn = null, this.prevBtn.off("click"), this.prevBtn = null, this.itemsBtns.off("click"), this.itemsBtns = null, this.unselectItem(), this.selectedItem = null, this.clearAutoHideTimeout(), this.removeUserActivityListeners()
                }, e.prototype.resize = function (t) {}, e.prototype.show = function () {
                    this.isVisible || (this.isVisible = !0, TweenMax.killTweensOf(this.element), TweenMax.to(this.element, .7, {
                        autoAlpha: 1,
                        onComplete: this.onShowComplete.bind(this)
                    }))
                }, e.prototype.hide = function () {
                    this.isVisible && (this.isVisible = !1, TweenMax.killTweensOf(this.element), TweenMax.to(this.element, .7, {
                        autoAlpha: 0,
                        onComplete: this.onHideComplete.bind(this)
                    }))
                }, e.prototype.autoHide = function () {
                    this.clearAutoHideTimeout(), this.autoHideTimeoutId = setTimeout(this.hideCb, 1e3)
                }, e.prototype.clearAutoHideTimeout = function () {
                    0 !== this.autoHideTimeoutId && (clearTimeout(this.autoHideTimeoutId), this.autoHideTimeoutId = 0)
                }, e.prototype.addUserActivityListeners = function () {
                    this.element.parent().on("mousemove.internal", this.onMouseMove.bind(this)), this.element.on("mouseenter.internal", this.onMouseEnter.bind(this)).on("mouseleave.internal", this.onMouseLeave.bind(this))
                }, e.prototype.removeUserActivityListeners = function () {
                    this.element.parent().off("mousemove.internal"), this.element.off("mouseenter.internal mouseleave.internal")
                }, e.prototype.activateAutoHide = function () {
                    this.autoHideActivated = !0, this.autoHide(), this.addUserActivityListeners()
                }, e.prototype.deactivateAutoHide = function () {
                    this.autoHideActivated = !1, this.clearAutoHideTimeout(), this.show(), this.removeUserActivityListeners()
                }, e.prototype.selectItem = function (t) {
                    this.unselectItem(), this.selectedItem = $(this.items[t]).addClass(l)
                }, e.prototype.unselectItem = function () {
                    this.selectedItem && this.selectedItem.removeClass(l)
                }, e.prototype.onMouseMove = function () {
                    this.autoHideLocked || (this.isVisible ? this.autoHide() : this.show())
                }, e.prototype.onShowComplete = function () {
                    this.autoHideLocked || this.autoHide(), this.emit("showComplete")
                }, e.prototype.onHideComplete = function () {
                    this.emit("hideComplete")
                }, e.prototype.onNextBtnClick = function () {
                    this.emit("click", "next")
                }, e.prototype.onPrevBtnClick = function () {
                    this.emit("click", "prev")
                }, e.prototype.onItemBtnClick = function (t) {
                    this.emit("click", t.currentTarget.getAttribute("data-index"))
                }, e.prototype.onMouseEnter = function () {
                    this.autoHideLocked = !0, this.clearAutoHideTimeout(), this.show()
                }, e.prototype.onMouseLeave = function () {
                    this.autoHideLocked = !1, this.autoHide()
                }, e
            }(a.default);
        i.default = h
    }, {
        "tiny-emitter": 102
    }],
    62: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("tiny-emitter"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e(i) {
                    n(this, e);
                    var o = s(this, t.call(this));
                    return o.element = $("#projects__scroll-cta"), o.label = $("#projects__scroll-cta__label"), o.btn = $("#projects__scroll-cta__btn").on("click", o.onBtnClick.bind(o)), o.isVisible = !1, o.timelineIn = null, o.originalLabel = null, o.isReversed = !1, o.timelineReverse = null, o
                }
                return o(e, t), e.prototype.dispose = function () {
                    this.btn.off("click"), this.disposeTimelineIn(), this.disposeTimelineReverse()
                }, e.prototype.disposeTimelineIn = function () {
                    this.timelineIn && (this.timelineIn.kill(), this.timelineIn = null)
                }, e.prototype.disposeTimelineReverse = function () {
                    this.timelineReverse && (this.timelineReverse.kill(), this.timelineReverse = null)
                }, e.prototype.animateIn = function () {
                    this.isVisible = !0, this.timelineIn = new TimelineMax({
                        onComplete: this.onAnimateInComplete.bind(this)
                    }).staggerFrom([this.btn, this.label], .7, {
                        y: -50 * (this.isReversed ? -1 : 1),
                        opacity: 0,
                        ease: Expo.easeOut
                    }, -.07), this.element[0].style.visibility = ""
                }, e.prototype.animateOut = function () {
                    this.isVisible = !1, this.element[0].style.visibility = "hidden"
                }, e.prototype.fullscreen = function (t) {
                    var e = this;
                    TweenMax.killTweensOf(this.element), t ? app.windowWidth >= app.screenM ? TweenMax.to(this.element, .5, {
                        xPercent: 100,
                        autoAlpha: 0,
                        ease: Quart.easeIn
                    }) : TweenMax.to(this.element, .5, {
                        yPercent: 100,
                        ease: Quart.easeIn
                    }) : app.windowWidth >= app.screenM ? TweenMax.fromTo(this.element, .6, {
                        xPercent: 100,
                        yPercent: 0,
                        autoAlpha: 0
                    }, {
                        delay: .3,
                        xPercent: 0,
                        autoAlpha: 1,
                        ease: Expo.easeOut,
                        onComplete: function () {
                            TweenMax.set(e.element, {
                                clearProps: "all"
                            })
                        }
                    }) : TweenMax.fromTo(this.element, .6, {
                        xPercent: 0,
                        yPercent: 100,
                        autoAlpha: 1
                    }, {
                        delay: .3,
                        yPercent: 0,
                        ease: Expo.easeOut,
                        onComplete: function () {
                            TweenMax.set(e.element, {
                                clearProps: "all"
                            })
                        }
                    })
                }, e.prototype.reverse = function (t) {
                    var e = this;
                    if (t !== this.isReversed) {
                        var i;
                        this.isReversed = t, this.disposeTimelineReverse(), this.isReversed ? (this.originalLabel || (this.originalLabel = this.label.text()), i = this.label.attr("data-reverse")) : this.originalLabel && (i = this.originalLabel), this.timelineReverse = new TimelineMax({
                            onComplete: this.onTimelineReverseComplete.bind(this)
                        }), this.isVisible && this.timelineReverse.to(this.label, .5, {
                            opacity: 0
                        }).to(this.btn, .5, {
                            opacity: 0
                        }, 0), this.timelineReverse.add(function () {
                            i && e.label.text(i)
                        }).set(this.btn, {
                            rotation: this.isReversed ? -180 : 0
                        }), this.isVisible && this.timelineReverse.add("show").to(this.label, .5, {
                            opacity: 1
                        }, "show").fromTo(this.btn, .5, {
                            opacity: 0,
                            y: 30,
                            immediateRender: !1
                        }, {
                            opacity: 1,
                            y: 0,
                            ease: Expo.easeOut
                        }, "show")
                    }
                }, e.prototype.onBtnClick = function () {
                    this.emit("click")
                }, e.prototype.onAnimateInComplete = function () {
                    this.disposeTimelineIn()
                }, e.prototype.onTimelineReverseComplete = function () {
                    this.disposeTimelineReverse()
                }, e
            }(a.default);
        i.default = l
    }, {
        "tiny-emitter": 102
    }],
    63: [function (t, e, i) {
        "use strict";
        i.__esModule = !0, i.default = function () {
            var t = navigator.userAgent,
                e = /MSIE\s?(\d+)(?:\.(\d+))?/i,
                i = t.match(e);
            return null != i ? {
                major: i[1],
                minor: i[2]
            } : {
                major: "-1",
                minor: "-1"
            }
        }
    }, {}],
    64: [function (t, e, i) {
        "use strict";
        var n, s = ["", "ms", "Webkit", "Moz", "O"],
            o = s.length;
        e.exports = function (t) {
            n || (n = document.createElement("div"));
            for (var e = 0; e < o; e++) {
                var i = s[e];
                t = "" === i ? t : t.charAt(0).toUpperCase() + t.substring(1).toLowerCase();
                var r = i + t;
                if (void 0 !== n.style[r]) return r
            }
        }
    }, {}],
    65: [function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var r = t("tiny-emitter"),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r),
            l = function (t) {
                function e() {
                    n(this, e);
                    var i = s(this, t.call(this));
                    return i.isReady = !1, i
                }
                return o(e, t), e.prototype.onReady = function () {
                    this.isReady = !0, this.emit("ready")
                }, e
            }(a.default),
            h = new l;
        window.onGoogleMapsAPIReady = function () {
            h.onReady()
        }, i.default = h
    }, {
        "tiny-emitter": 102
    }],
    66: [function (t, e, i) {
        "use strict";
        i.__esModule = !0, i.default = function (t) {
            var e = location.protocol + "//" + location.hostname;
            return location.port && (e += ":" + location.port), t && 0 === t.indexOf(e)
        }
    }, {}],
    67: [function (t, e, i) {
        "use strict";
        e.exports = function () {
            return window.matchMedia ? window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)").matches : window.devicePixelRatio && window.devicePixelRatio > 1.3
        }
    }, {}],
    68: [function (t, e, i) {
        "use strict";

        function n(t) {
            if (null === t || void 0 === t) throw new TypeError("Sources cannot be null or undefined");
            return Object(t)
        }

        function s(t, e, i) {
            var n = e[i];
            if (void 0 !== n && null !== n) {
                if (a.call(t, i) && (void 0 === t[i] || null === t[i])) throw new TypeError("Cannot convert undefined or null to object (" + i + ")");
                a.call(t, i) && r(n) ? t[i] = o(Object(t[i]), e[i]) : t[i] = n
            }
        }

        function o(t, e) {
            if (t === e) return t;
            e = Object(e);
            for (var i in e) a.call(e, i) && s(t, e, i);
            if (Object.getOwnPropertySymbols)
                for (var n = Object.getOwnPropertySymbols(e), o = 0; o < n.length; o++) l.call(e, n[o]) && s(t, e, n[o]);
            return t
        }
        var r = t("is-obj"),
            a = Object.prototype.hasOwnProperty,
            l = Object.prototype.propertyIsEnumerable;
        e.exports = function (t) {
            t = n(t);
            for (var e = 1; e < arguments.length; e++) o(t, arguments[e]);
            return t
        }
    }, {
        "is-obj": 73
    }],
    69: [function (t, e, i) {
        "use strict";
        ! function (t) {
            "object" == typeof i ? e.exports = t() : "function" == typeof define && define.amd ? define([], t) : this.fileExtension = t()
        }(function () {
            return function (t, e) {
                if (e || (e = {}), !t) return "";
                var i = (/[^.\/\\]*$/.exec(t) || [""])[0];
                return e.preserveCase ? i : i.toLowerCase()
            }
        })
    }, {}],
    70: [function (t, e, i) {
        (function (t) {
            var i = void 0 !== e && e.exports && void 0 !== t ? t : this || window;
            (i._gsQueue || (i._gsQueue = [])).push(function () {
                    "use strict";
                    i._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                            var n = function (t) {
                                    var e, i = [],
                                        n = t.length;
                                    for (e = 0; e !== n; i.push(t[e++]));
                                    return i
                                },
                                s = function (t, e, i) {
                                    var n, s, o = t.cycle;
                                    for (n in o) s = o[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                                    delete t.cycle
                                },
                                o = function (t, e, n) {
                                    i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = o.prototype.render
                                },
                                r = i._internals,
                                a = r.isSelector,
                                l = r.isArray,
                                h = o.prototype = i.to({}, .1, {}),
                                p = [];
                            o.version = "1.20.4", h.constructor = o, h.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, h.invalidate = function () {
                                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                            }, h.updateTo = function (t, e) {
                                var n, s = this.ratio,
                                    o = this.vars.immediateRender || t.immediateRender;
                                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                                for (n in t) this.vars[n] = t[n];
                                if (this._initted || o)
                                    if (e) this._initted = !1, o && this.render(0, !0, !0);
                                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                    var r = this._totalTime;
                                    this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                                } else if (this._initted = !1, this._init(), this._time > 0 || o)
                                    for (var a, l = 1 / (1 - s), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                                return this
                            }, h.render = function (t, e, n) {
                                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                                var s, o, a, l, h, p, c, u, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                                    m = this._time,
                                    _ = this._totalTime,
                                    g = this._cycle,
                                    y = this._duration,
                                    v = this._rawPrevTime;
                                if (t >= d - 1e-7 && t >= 0 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && t >= -1e-7 || 1e-10 === v && "isPause" !== this.data) && v !== t && (n = !0, v > 1e-10 && (o = "onReverseComplete")), this._rawPrevTime = u = !e || t || v === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === y && v > 0) && (o = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (v >= 0 && (n = !0), this._rawPrevTime = u = !e || t || v === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && _ <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !f ? (h = this._time / y, p = this._easeType, c = this._easePower, (1 === p || 3 === p && h >= .5) && (h = 1 - h), 3 === p && (h *= 2), 1 === c ? h *= h : 2 === c ? h *= h * h : 3 === c ? h *= h * h * h : 4 === c && (h *= h * h * h * h), 1 === p ? this.ratio = 1 - h : 2 === p ? this.ratio = h : this._time / y < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), m === this._time && !n && g === this._cycle) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = _, this._rawPrevTime = v, this._cycle = g, r.lazyTweens.push(this), void(this._lazy = [t, e]);
                                    !this._time || s || f ? s && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                                }
                                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== _ || o) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== u && (this._rawPrevTime = 0)))
                            }, o.to = function (t, e, i) {
                                return new o(t, e, i)
                            }, o.from = function (t, e, i) {
                                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                            }, o.fromTo = function (t, e, i, n) {
                                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
                            }, o.staggerTo = o.allTo = function (t, e, r, h, c, u, f) {
                                h = h || 0;
                                var d, m, _, g, y = 0,
                                    v = [],
                                    b = function () {
                                        r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), c.apply(f || r.callbackScope || this, u || p)
                                    },
                                    w = r.cycle,
                                    x = r.startAt && r.startAt.cycle;
                                for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], h < 0 && (t = n(t), t.reverse(), h *= -1), d = t.length - 1, _ = 0; _ <= d; _++) {
                                    m = {};
                                    for (g in r) m[g] = r[g];
                                    if (w && (s(m, t, _), null != m.duration && (e = m.duration, delete m.duration)), x) {
                                        x = m.startAt = {};
                                        for (g in r.startAt) x[g] = r.startAt[g];
                                        s(m.startAt, t, _)
                                    }
                                    m.delay = y + (m.delay || 0), _ === d && c && (m.onComplete = b), v[_] = new o(t[_], e, m), y += h
                                }
                                return v
                            }, o.staggerFrom = o.allFrom = function (t, e, i, n, s, r, a) {
                                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, s, r, a)
                            }, o.staggerFromTo = o.allFromTo = function (t, e, i, n, s, r, a, l) {
                                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, s, r, a, l)
                            }, o.delayedCall = function (t, e, i, n, s) {
                                return new o(e, 0, {
                                    delay: t,
                                    onComplete: e,
                                    onCompleteParams: i,
                                    callbackScope: n,
                                    onReverseComplete: e,
                                    onReverseCompleteParams: i,
                                    immediateRender: !1,
                                    useFrames: s,
                                    overwrite: 0
                                })
                            }, o.set = function (t, e) {
                                return new o(t, 0, e)
                            }, o.isTweening = function (t) {
                                return i.getTweensOf(t, !0).length > 0
                            };
                            var c = function (t, e) {
                                    for (var n = [], s = 0, o = t._first; o;) o instanceof i ? n[s++] = o : (e && (n[s++] = o), n = n.concat(c(o, e)), s = n.length), o = o._next;
                                    return n
                                },
                                u = o.getAllTweens = function (e) {
                                    return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                                };
                            o.killAll = function (t, i, n, s) {
                                null == i && (i = !0), null == n && (n = !0);
                                var o, r, a, l = u(0 != s),
                                    h = l.length,
                                    p = i && n && s;
                                for (a = 0; a < h; a++) r = l[a], (p || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
                            }, o.killChildTweensOf = function (t, e) {
                                if (null != t) {
                                    var s, h, p, c, u, f = r.tweenLookup;
                                    if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                                        for (c = t.length; --c > -1;) o.killChildTweensOf(t[c], e);
                                    else {
                                        s = [];
                                        for (p in f)
                                            for (h = f[p].target.parentNode; h;) h === t && (s = s.concat(f[p].tweens)), h = h.parentNode;
                                        for (u = s.length, c = 0; c < u; c++) e && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                                    }
                                }
                            };
                            var f = function (t, i, n, s) {
                                i = !1 !== i, n = !1 !== n, s = !1 !== s;
                                for (var o, r, a = u(s), l = i && n && s, h = a.length; --h > -1;) r = a[h], (l || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && r.paused(t)
                            };
                            return o.pauseAll = function (t, e, i) {
                                f(!0, t, e, i)
                            }, o.resumeAll = function (t, e, i) {
                                f(!1, t, e, i)
                            }, o.globalTimeScale = function (e) {
                                var n = t._rootTimeline,
                                    s = i.ticker.time;
                                return arguments.length ? (e = e || 1e-10, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                            }, h.progress = function (t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                            }, h.totalProgress = function (t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                            }, h.time = function (t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                            }, h.duration = function (e) {
                                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                            }, h.totalDuration = function (t) {
                                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                            }, h.repeat = function (t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                            }, h.repeatDelay = function (t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                            }, h.yoyo = function (t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                            }, o
                        }, !0), i._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, n) {
                            var s = function (t) {
                                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                    var i, n, s = this.vars;
                                    for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                                    l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                                },
                                o = n._internals,
                                r = s._internals = {},
                                a = o.isSelector,
                                l = o.isArray,
                                h = o.lazyTweens,
                                p = o.lazyRender,
                                c = i._gsDefine.globals,
                                u = function (t) {
                                    var e, i = {};
                                    for (e in t) i[e] = t[e];
                                    return i
                                },
                                f = function (t, e, i) {
                                    var n, s, o = t.cycle;
                                    for (n in o) s = o[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                                    delete t.cycle
                                },
                                d = r.pauseCallback = function () {},
                                m = function (t) {
                                    var e, i = [],
                                        n = t.length;
                                    for (e = 0; e !== n; i.push(t[e++]));
                                    return i
                                },
                                _ = s.prototype = new e;
                            return s.version = "1.20.4", _.constructor = s, _.kill()._gc = _._forcingPlayhead = _._hasPause = !1, _.to = function (t, e, i, s) {
                                var o = i.repeat && c.TweenMax || n;
                                return e ? this.add(new o(t, e, i), s) : this.set(t, i, s)
                            }, _.from = function (t, e, i, s) {
                                return this.add((i.repeat && c.TweenMax || n).from(t, e, i), s)
                            }, _.fromTo = function (t, e, i, s, o) {
                                var r = s.repeat && c.TweenMax || n;
                                return e ? this.add(r.fromTo(t, e, i, s), o) : this.set(t, s, o)
                            }, _.staggerTo = function (t, e, i, o, r, l, h, p) {
                                var c, d, _ = new s({
                                        onComplete: l,
                                        onCompleteParams: h,
                                        callbackScope: p,
                                        smoothChildTiming: this.smoothChildTiming
                                    }),
                                    g = i.cycle;
                                for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], a(t) && (t = m(t)), o = o || 0, o < 0 && (t = m(t), t.reverse(), o *= -1), d = 0; d < t.length; d++) c = u(i), c.startAt && (c.startAt = u(c.startAt),
                                    c.startAt.cycle && f(c.startAt, t, d)), g && (f(c, t, d), null != c.duration && (e = c.duration, delete c.duration)), _.to(t[d], e, c, d * o);
                                return this.add(_, r)
                            }, _.staggerFrom = function (t, e, i, n, s, o, r, a) {
                                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, o, r, a)
                            }, _.staggerFromTo = function (t, e, i, n, s, o, r, a, l) {
                                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, o, r, a, l)
                            }, _.call = function (t, e, i, s) {
                                return this.add(n.delayedCall(0, t, e, i), s)
                            }, _.set = function (t, e, i) {
                                return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
                            }, s.exportRoot = function (t, e) {
                                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                                var i, o, r, a, l = new s(t),
                                    h = l._timeline;
                                for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, r = h._first; r;) a = r._next, e && r instanceof n && r.target === r.vars.onComplete || (o = r._startTime - r._delay, o < 0 && (i = 1), l.add(r, o)), r = a;
                                return h.add(l, 0), i && l.totalDuration(), l
                            }, _.add = function (i, o, r, a) {
                                var h, p, c, u, f, d;
                                if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, i)), !(i instanceof t)) {
                                    if (i instanceof Array || i && i.push && l(i)) {
                                        for (r = r || "normal", a = a || 0, h = o, p = i.length, c = 0; c < p; c++) l(u = i[c]) && (u = new s({
                                            tweens: u
                                        })), this.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === r ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === r && (u._startTime -= u.delay())), h += a;
                                        return this._uncache(!0)
                                    }
                                    if ("string" == typeof i) return this.addLabel(i, o);
                                    if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                                    i = n.delayedCall(0, i)
                                }
                                if (e.prototype.add.call(this, i, o), i._time && i.render((this.rawTime() - i._startTime) * i._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                    for (f = this, d = f.rawTime() > i._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                                return this
                            }, _.remove = function (e) {
                                if (e instanceof t) {
                                    this._remove(e, !1);
                                    var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                                    return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                                }
                                if (e instanceof Array || e && e.push && l(e)) {
                                    for (var n = e.length; --n > -1;) this.remove(e[n]);
                                    return this
                                }
                                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                            }, _._remove = function (t, i) {
                                return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                            }, _.append = function (t, e) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                            }, _.insert = _.insertMultiple = function (t, e, i, n) {
                                return this.add(t, e || 0, i, n)
                            }, _.appendMultiple = function (t, e, i, n) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                            }, _.addLabel = function (t, e) {
                                return this._labels[t] = this._parseTimeOrLabel(e), this
                            }, _.addPause = function (t, e, i, s) {
                                var o = n.delayedCall(0, d, i, s || this);
                                return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                            }, _.removeLabel = function (t) {
                                return delete this._labels[t], this
                            }, _.getLabelTime = function (t) {
                                return null != this._labels[t] ? this._labels[t] : -1
                            }, _._parseTimeOrLabel = function (e, i, n, s) {
                                var o, r;
                                if (s instanceof t && s.timeline === this) this.remove(s);
                                else if (s && (s instanceof Array || s.push && l(s)))
                                    for (r = s.length; --r > -1;) s[r] instanceof t && s[r].timeline === this && this.remove(s[r]);
                                if (o = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - o : 0, n);
                                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                                else {
                                    if (-1 === (r = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = o + i : i : this._labels[e] + i;
                                    i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : o
                                }
                                return Number(e) + i
                            }, _.seek = function (t, e) {
                                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                            }, _.stop = function () {
                                return this.paused(!0)
                            }, _.gotoAndPlay = function (t, e) {
                                return this.play(t, e)
                            }, _.gotoAndStop = function (t, e) {
                                return this.pause(t, e)
                            }, _.render = function (t, e, i) {
                                this._gc && this._enabled(!0, !1);
                                var n, s, o, r, a, l, c, u = this._time,
                                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                                    d = this._startTime,
                                    m = this._timeScale,
                                    _ = this._paused;
                                if (u !== this._time && (t += this._time - u), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, r = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                                else if (t < 1e-7)
                                    if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (r = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = s = !0, r = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                                    else {
                                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                                        t = 0, this._initted || (a = !0)
                                    }
                                else {
                                    if (this._hasPause && !this._forcingPlayhead && !e) {
                                        if (t >= u)
                                            for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                                        else
                                            for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                    }
                                    this._totalTime = this._time = this._rawPrevTime = t
                                }
                                if (this._time !== u && this._first || i || a || l) {
                                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && t > 0 && (this._active = !0), 0 === u && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (c = this._time) >= u)
                                        for (n = this._first; n && (o = n._next, c === this._time && (!this._paused || _));)(n._active || n._startTime <= c && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                                    else
                                        for (n = this._last; n && (o = n._prev, c === this._time && (!this._paused || _));) {
                                            if (n._active || n._startTime <= u && !n._paused && !n._gc) {
                                                if (l === n) {
                                                    for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                                    l = null, this.pause()
                                                }
                                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                            }
                                            n = o
                                        }
                                    this._onUpdate && (e || (h.length && p(), this._callback("onUpdate"))), r && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (h.length && p(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r)))
                                }
                            }, _._hasPausedChild = function () {
                                for (var t = this._first; t;) {
                                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                                    t = t._next
                                }
                                return !1
                            }, _.getChildren = function (t, e, i, s) {
                                s = s || -9999999999;
                                for (var o = [], r = this._first, a = 0; r;) r._startTime < s || (r instanceof n ? !1 !== e && (o[a++] = r) : (!1 !== i && (o[a++] = r), !1 !== t && (o = o.concat(r.getChildren(!0, e, i)), a = o.length))), r = r._next;
                                return o
                            }, _.getTweensOf = function (t, e) {
                                var i, s, o = this._gc,
                                    r = [],
                                    a = 0;
                                for (o && this._enabled(!0, !0), i = n.getTweensOf(t), s = i.length; --s > -1;)(i[s].timeline === this || e && this._contains(i[s])) && (r[a++] = i[s]);
                                return o && this._enabled(!1, !0), r
                            }, _.recent = function () {
                                return this._recent
                            }, _._contains = function (t) {
                                for (var e = t.timeline; e;) {
                                    if (e === this) return !0;
                                    e = e.timeline
                                }
                                return !1
                            }, _.shiftChildren = function (t, e, i) {
                                i = i || 0;
                                for (var n, s = this._first, o = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                                if (e)
                                    for (n in o) o[n] >= i && (o[n] += t);
                                return this._uncache(!0)
                            }, _._kill = function (t, e) {
                                if (!t && !e) return this._enabled(!1, !1);
                                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                                return s
                            }, _.clear = function (t) {
                                var e = this.getChildren(!1, !0, !0),
                                    i = e.length;
                                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                                return !1 !== t && (this._labels = {}), this._uncache(!0)
                            }, _.invalidate = function () {
                                for (var e = this._first; e;) e.invalidate(), e = e._next;
                                return t.prototype.invalidate.call(this)
                            }, _._enabled = function (t, i) {
                                if (t === this._gc)
                                    for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                                return e.prototype._enabled.call(this, t, i)
                            }, _.totalTime = function (e, i, n) {
                                this._forcingPlayhead = !0;
                                var s = t.prototype.totalTime.apply(this, arguments);
                                return this._forcingPlayhead = !1, s
                            }, _.duration = function (t) {
                                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                            }, _.totalDuration = function (t) {
                                if (!arguments.length) {
                                    if (this._dirty) {
                                        for (var e, i, n = 0, s = this._last, o = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > o && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : o = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), o = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
                                        this._duration = this._totalDuration = n, this._dirty = !1
                                    }
                                    return this._totalDuration
                                }
                                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                            }, _.paused = function (e) {
                                if (!e)
                                    for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                                return t.prototype.paused.apply(this, arguments)
                            }, _.usesFrames = function () {
                                for (var e = this._timeline; e._timeline;) e = e._timeline;
                                return e === t._rootFramesTimeline
                            }, _.rawTime = function (t) {
                                return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                            }, s
                        }, !0), i._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, n) {
                            var s = function (e) {
                                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                                },
                                o = e._internals,
                                r = o.lazyTweens,
                                a = o.lazyRender,
                                l = i._gsDefine.globals,
                                h = new n(null, null, 1, 0),
                                p = s.prototype = new t;
                            return p.constructor = s, p.kill()._gc = !1, s.version = "1.20.4", p.invalidate = function () {
                                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                            }, p.addCallback = function (t, i, n, s) {
                                return this.add(e.delayedCall(0, t, n, s), i)
                            }, p.removeCallback = function (t, e) {
                                if (t)
                                    if (null == e) this._kill(null, t);
                                    else
                                        for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                                return this
                            }, p.removePause = function (e) {
                                return this.removeCallback(t._internals.pauseCallback, e)
                            }, p.tweenTo = function (t, i) {
                                i = i || {};
                                var n, s, o, r = {
                                        ease: h,
                                        useFrames: this.usesFrames(),
                                        immediateRender: !1,
                                        lazy: !1
                                    },
                                    a = i.repeat && l.TweenMax || e;
                                for (s in i) r[s] = i[s];
                                return r.time = this._parseTimeOrLabel(t), n = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, o = new a(this, n, r), r.onStart = function () {
                                    o.target.paused(!0), o.vars.time === o.target.time() || n !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                                }, o
                            }, p.tweenFromTo = function (t, e, i) {
                                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                                    onComplete: this.seek,
                                    onCompleteParams: [t],
                                    callbackScope: this
                                }, i.immediateRender = !1 !== i.immediateRender;
                                var n = this.tweenTo(e, i);
                                return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                            }, p.render = function (t, e, i) {
                                this._gc && this._enabled(!0, !1);
                                var n, s, o, l, h, p, c, u, f = this._time,
                                    d = this._dirty ? this.totalDuration() : this._totalDuration,
                                    m = this._duration,
                                    _ = this._totalTime,
                                    g = this._startTime,
                                    y = this._timeScale,
                                    v = this._rawPrevTime,
                                    b = this._paused,
                                    w = this._cycle;
                                if (f !== this._time && (t += this._time - f), t >= d - 1e-7 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || v < 0 || 1e-10 === v) && v !== t && this._first && (h = !0, v > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                                else if (t < 1e-7)
                                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === m && 1e-10 !== v && (v > 0 || t < 0 && v >= 0) && !this._locked) && (l = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, l = "onReverseComplete") : v >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                                    else {
                                        if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                                        t = 0, this._initted || (h = !0)
                                    }
                                else if (0 === m && v < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = m + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && _ <= t && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                                    if ((t = this._time) >= f || this._repeat && w !== this._cycle)
                                        for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                                    else
                                        for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                                    c && c._startTime < m && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                if (this._cycle !== w && !this._locked) {
                                    var x = this._yoyo && 0 != (1 & w),
                                        T = x === (this._yoyo && 0 != (1 & this._cycle)),
                                        S = this._totalTime,
                                        I = this._cycle,
                                        O = this._rawPrevTime,
                                        C = this._time;
                                    if (this._totalTime = w * m, this._cycle < w ? x = !x : this._totalTime += m, this._time = f, this._rawPrevTime = 0 === m ? v - 1e-4 : v, this._cycle = w, this._locked = !0, f = x ? 0 : m, this.render(f, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = I, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                                    if (T && (this._cycle = w, this._locked = !0, f = x ? m + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !b) return;
                                    this._time = C, this._totalTime = S, this._cycle = I, this._rawPrevTime = O
                                }
                                if (!(this._time !== f && this._first || i || h || c)) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (u = this._time) >= f)
                                    for (n = this._first; n && (o = n._next, u === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                                else
                                    for (n = this._last; n && (o = n._prev, u === this._time && (!this._paused || b));) {
                                        if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                            if (c === n) {
                                                for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                                c = null, this.pause()
                                            }
                                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                        }
                                        n = o
                                    }
                                this._onUpdate && (e || (r.length && a(), this._callback("onUpdate"))), l && (this._locked || this._gc || g !== this._startTime && y === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (s && (r.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                            }, p.getActive = function (t, e, i) {
                                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                                var n, s, o = [],
                                    r = this.getChildren(t, e, i),
                                    a = 0,
                                    l = r.length;
                                for (n = 0; n < l; n++) s = r[n], s.isActive() && (o[a++] = s);
                                return o
                            }, p.getLabelAfter = function (t) {
                                t || 0 !== t && (t = this._time);
                                var e, i = this.getLabelsArray(),
                                    n = i.length;
                                for (e = 0; e < n; e++)
                                    if (i[e].time > t) return i[e].name;
                                return null
                            }, p.getLabelBefore = function (t) {
                                null == t && (t = this._time);
                                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                                    if (e[i].time < t) return e[i].name;
                                return null
                            }, p.getLabelsArray = function () {
                                var t, e = [],
                                    i = 0;
                                for (t in this._labels) e[i++] = {
                                    time: this._labels[t],
                                    name: t
                                };
                                return e.sort(function (t, e) {
                                    return t.time - e.time
                                }), e
                            }, p.invalidate = function () {
                                return this._locked = !1, t.prototype.invalidate.call(this)
                            }, p.progress = function (t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                            }, p.totalProgress = function (t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                            }, p.totalDuration = function (e) {
                                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                            }, p.time = function (t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                            }, p.repeat = function (t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                            }, p.repeatDelay = function (t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                            }, p.yoyo = function (t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                            }, p.currentLabel = function (t) {
                                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                            }, s
                        }, !0),
                        function () {
                            var t = 180 / Math.PI,
                                e = [],
                                n = [],
                                s = [],
                                o = {},
                                r = i._gsDefine.globals,
                                a = function (t, e, i, n) {
                                    i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                                },
                                l = function (t, e, i, n) {
                                    var s = {
                                            a: t
                                        },
                                        o = {},
                                        r = {},
                                        a = {
                                            c: n
                                        },
                                        l = (t + e) / 2,
                                        h = (e + i) / 2,
                                        p = (i + n) / 2,
                                        c = (l + h) / 2,
                                        u = (h + p) / 2,
                                        f = (u - c) / 8;
                                    return s.b = l + (t - l) / 4, o.b = c + f, s.c = o.a = (s.b + o.b) / 2, o.c = r.a = (c + u) / 2, r.b = u - f, a.b = p + (n - p) / 4, r.c = a.a = (r.b + a.b) / 2, [s, o, r, a]
                                },
                                h = function (t, i, o, r, a) {
                                    var h, p, c, u, f, d, m, _, g, y, v, b, w, x = t.length - 1,
                                        T = 0,
                                        S = t[0].a;
                                    for (h = 0; h < x; h++) f = t[T], p = f.a, c = f.d, u = t[T + 1].d, a ? (v = e[h], b = n[h], w = (b + v) * i * .25 / (r ? .5 : s[h] || .5), d = c - (c - p) * (r ? .5 * i : 0 !== v ? w / v : 0), m = c + (u - c) * (r ? .5 * i : 0 !== b ? w / b : 0), _ = c - (d + ((m - d) * (3 * v / (v + b) + .5) / 4 || 0))) : (d = c - (c - p) * i * .5, m = c + (u - c) * i * .5, _ = c - (d + m) / 2), d += _, m += _, f.c = g = d, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = c - p, f.ca = g - p, f.ba = S - p, o ? (y = l(p, S, g, c), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = m;
                                    f = t[T], f.b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, o && (y = l(f.a, S, f.c, f.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                                },
                                p = function (t, i, s, o) {
                                    var r, l, h, p, c, u, f = [];
                                    if (o)
                                        for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof (u = t[l][i]) && "=" === u.charAt(1) && (t[l][i] = o[i] + Number(u.charAt(0) + u.substr(2)));
                                    if ((r = t.length - 2) < 0) return f[0] = new a(t[0][i], 0, 0, t[0][i]), f;
                                    for (l = 0; l < r; l++) h = t[l][i], p = t[l + 1][i], f[l] = new a(h, 0, 0, p), s && (c = t[l + 2][i], e[l] = (e[l] || 0) + (p - h) * (p - h), n[l] = (n[l] || 0) + (c - p) * (c - p));
                                    return f[l] = new a(t[l][i], 0, 0, t[l + 1][i]), f
                                },
                                c = function (t, i, r, a, l, c) {
                                    var u, f, d, m, _, g, y, v, b = {},
                                        w = [],
                                        x = c || t[0];
                                    l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == i && (i = 1);
                                    for (f in t[0]) w.push(f);
                                    if (t.length > 1) {
                                        for (v = t[t.length - 1], y = !0, u = w.length; --u > -1;)
                                            if (f = w[u], Math.abs(x[f] - v[f]) > .05) {
                                                y = !1;
                                                break
                                            } y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                                    }
                                    for (e.length = n.length = s.length = 0, u = w.length; --u > -1;) f = w[u], o[f] = -1 !== l.indexOf("," + f + ","), b[f] = p(t, f, o[f], c);
                                    for (u = e.length; --u > -1;) e[u] = Math.sqrt(e[u]), n[u] = Math.sqrt(n[u]);
                                    if (!a) {
                                        for (u = w.length; --u > -1;)
                                            if (o[f])
                                                for (d = b[w[u]], g = d.length - 1, m = 0; m < g; m++) _ = d[m + 1].da / n[m] + d[m].da / e[m] || 0, s[m] = (s[m] || 0) + _ * _;
                                        for (u = s.length; --u > -1;) s[u] = Math.sqrt(s[u])
                                    }
                                    for (u = w.length, m = r ? 4 : 1; --u > -1;) f = w[u], d = b[f], h(d, i, r, a, o[f]), y && (d.splice(0, m), d.splice(d.length - m, m));
                                    return b
                                },
                                u = function (t, e, i) {
                                    e = e || "soft";
                                    var n, s, o, r, l, h, p, c, u, f, d, m = {},
                                        _ = "cubic" === e ? 3 : 2,
                                        g = "soft" === e,
                                        y = [];
                                    if (g && i && (t = [i].concat(t)), null == t || t.length < _ + 1) throw "invalid Bezier data";
                                    for (u in t[0]) y.push(u);
                                    for (h = y.length; --h > -1;) {
                                        for (u = y[h], m[u] = l = [], f = 0, c = t.length, p = 0; p < c; p++) n = null == i ? t[p][u] : "string" == typeof (d = t[p][u]) && "=" === d.charAt(1) ? i[u] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && p > 1 && p < c - 1 && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                                        for (c = f - _ + 1, f = 0, p = 0; p < c; p += _) n = l[p], s = l[p + 1], o = l[p + 2], r = 2 === _ ? 0 : l[p + 3], l[f++] = d = 3 === _ ? new a(n, s, o, r) : new a(n, (2 * s + n) / 3, (2 * s + o) / 3, o);
                                        l.length = f
                                    }
                                    return m
                                },
                                f = function (t, e, i) {
                                    for (var n, s, o, r, a, l, h, p, c, u, f, d = 1 / i, m = t.length; --m > -1;)
                                        for (u = t[m], o = u.a, r = u.d - o, a = u.c - o, l = u.b - o, n = s = 0, p = 1; p <= i; p++) h = d * p, c = 1 - h, n = s - (s = (h * h * r + 3 * c * (h * a + c * l)) * h), f = m * i + p - 1, e[f] = (e[f] || 0) + n * n
                                },
                                d = function (t, e) {
                                    e = e >> 0 || 6;
                                    var i, n, s, o, r = [],
                                        a = [],
                                        l = 0,
                                        h = 0,
                                        p = e - 1,
                                        c = [],
                                        u = [];
                                    for (i in t) f(t[i], r, e);
                                    for (s = r.length, n = 0; n < s; n++) l += Math.sqrt(r[n]), o = n % e, u[o] = l, o === p && (h += l, o = n / e >> 0, c[o] = u, a[o] = h, l = 0, u = []);
                                    return {
                                        length: h,
                                        lengths: a,
                                        segments: c
                                    }
                                },
                                m = i._gsDefine.plugin({
                                    propName: "bezier",
                                    priority: -1,
                                    version: "1.3.8",
                                    API: 2,
                                    global: !0,
                                    init: function (t, e, i) {
                                        this._target = t, e instanceof Array && (e = {
                                            values: e
                                        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                        var n, s, o, r, a, l = e.values || [],
                                            h = {},
                                            p = l[0],
                                            f = e.autoRotate || i.vars.orientToBezier;
                                        this._autoRotate = f ? f instanceof Array ? f : [
                                            ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                                        ] : null;
                                        for (n in p) this._props.push(n);
                                        for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                                        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                            var m = d(this._beziers, this._timeRes);
                                            this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                        }
                                        if (f = this._autoRotate)
                                            for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1;) {
                                                for (r = 0; r < 3; r++) n = f[o][r], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                                n = f[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                            }
                                        return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                                    },
                                    set: function (e) {
                                        var i, n, s, o, r, a, l, h, p, c, u = this._segCount,
                                            f = this._func,
                                            d = this._target,
                                            m = e !== this._startRatio;
                                        if (this._timeRes) {
                                            if (p = this._lengths, c = this._curSeg, e *= this._length, s = this._li, e > this._l2 && s < u - 1) {
                                                for (h = u - 1; s < h && (this._l2 = p[++s]) <= e;);
                                                this._l1 = p[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0]
                                            } else if (e < this._l1 && s > 0) {
                                                for (; s > 0 && (this._l1 = p[--s]) >= e;);
                                                0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = p[s], this._li = s, this._curSeg = c = this._segments[s], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                            }
                                            if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < c.length - 1) {
                                                for (h = c.length - 1; s < h && (this._s2 = c[++s]) <= e;);
                                                this._s1 = c[s - 1], this._si = s
                                            } else if (e < this._s1 && s > 0) {
                                                for (; s > 0 && (this._s1 = c[--s]) >= e;);
                                                0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = c[s], this._si = s
                                            }
                                            a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                        } else i = e < 0 ? 0 : e >= 1 ? u - 1 : u * e >> 0, a = (e - i * (1 / u)) * u;
                                        for (n = 1 - a, s = this._props.length; --s > -1;) o = this._props[s], r = this._beziers[o][i], l = (a * a * r.da + 3 * n * (a * r.ca + n * r.ba)) * a + r.a, this._mod[o] && (l = this._mod[o](l, d)), f[o] ? d[o](l) : d[o] = l;
                                        if (this._autoRotate) {
                                            var _, g, y, v, b, w, x, T = this._autoRotate;
                                            for (s = T.length; --s > -1;) o = T[s][2], w = T[s][3] || 0, x = !0 === T[s][4] ? 1 : t, r = this._beziers[T[s][0]], _ = this._beziers[T[s][1]], r && _ && (r = r[i], _ = _[i], g = r.a + (r.b - r.a) * a, v = r.b + (r.c - r.b) * a, g += (v - g) * a, v += (r.c + (r.d - r.c) * a - v) * a, y = _.a + (_.b - _.a) * a, b = _.b + (_.c - _.b) * a, y += (b - y) * a, b += (_.c + (_.d - _.c) * a - b) * a, l = m ? Math.atan2(b - y, v - g) * x + w : this._initialRotations[s], this._mod[o] && (l = this._mod[o](l, d)), f[o] ? d[o](l) : d[o] = l)
                                        }
                                    }
                                }),
                                _ = m.prototype;
                            m.bezierThrough = c, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
                                return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                            }, m._cssRegister = function () {
                                var t = r.CSSPlugin;
                                if (t) {
                                    var e = t._internals,
                                        i = e._parseToProxy,
                                        n = e._setPluginRatio,
                                        s = e.CSSPropTween;
                                    e._registerComplexSpecialProp("bezier", {
                                        parser: function (t, e, o, r, a, l) {
                                            e instanceof Array && (e = {
                                                values: e
                                            }), l = new m;
                                            var h, p, c, u = e.values,
                                                f = u.length - 1,
                                                d = [],
                                                _ = {};
                                            if (f < 0) return a;
                                            for (h = 0; h <= f; h++) c = i(t, u[h], r, a, l, f !== h), d[h] = c.end;
                                            for (p in e) _[p] = e[p];
                                            return _.values = d, a = new s(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = n, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (h = !0 === _.autoRotate ? 0 : Number(_.autoRotate), _.autoRotate = null != c.end.left ? [
                                                ["left", "top", "rotation", h, !1]
                                            ] : null != c.end.x && [
                                                ["x", "y", "rotation", h, !1]
                                            ]), _.autoRotate && (r._transform || r._enableTransforms(!1), c.autoRotate = r._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, r._overwriteProps.push("rotation")), l._onInitTween(c.proxy, _, r._tween), a
                                        }
                                    })
                                }
                            }, _._mod = function (t) {
                                for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                            }, _._kill = function (t) {
                                var e, i, n = this._props;
                                for (e in this._beziers)
                                    if (e in t)
                                        for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                                if (n = this._autoRotate)
                                    for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                                return this._super._kill.call(this, t)
                            }
                        }(), i._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                            var n, s, o, r, a = function () {
                                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                                },
                                l = i._gsDefine.globals,
                                h = {},
                                p = a.prototype = new t("css");
                            p.constructor = a, a.version = "1.20.4", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, p = "px", a.suffixMap = {
                                top: p,
                                right: p,
                                bottom: p,
                                left: p,
                                width: p,
                                height: p,
                                fontSize: p,
                                padding: p,
                                margin: p,
                                perspective: p,
                                lineHeight: ""
                            };
                            var c, u, f, d, m, _, g, y, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                                b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                                x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                                T = /(?:\d|\-|\+|=|#|\.)*/g,
                                S = /opacity *= *([^)]*)/i,
                                I = /opacity:([^;]*)/i,
                                O = /alpha\(opacity *=.+?\)/i,
                                C = /^(rgb|hsl)/,
                                P = /([A-Z])/g,
                                k = /-([a-z])/gi,
                                A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                                E = function (t, e) {
                                    return e.toUpperCase()
                                },
                                j = /(?:Left|Right|Width)/i,
                                R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                                L = /,(?=[^\)]*(?:\(|$))/gi,
                                z = /[\s,\(]/i,
                                F = Math.PI / 180,
                                N = 180 / Math.PI,
                                B = {},
                                D = {
                                    style: {}
                                },
                                H = i.document || {
                                    createElement: function () {
                                        return D
                                    }
                                },
                                W = function (t, e) {
                                    return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t)
                                },
                                V = W("div"),
                                Y = W("img"),
                                X = a._internals = {
                                    _specialProps: h
                                },
                                q = (i.navigator || {}).userAgent || "",
                                $ = function () {
                                    var t = q.indexOf("Android"),
                                        e = W("a");
                                    return f = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || parseFloat(q.substr(t + 8, 2)) > 3), m = f && parseFloat(q.substr(q.indexOf("Version/") + 8, 2)) < 6, d = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (_ = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                                }(),
                                Q = function (t) {
                                    return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                                },
                                U = function (t) {
                                    i.console && console.log(t)
                                },
                                G = "",
                                Z = "",
                                J = function (t, e) {
                                    e = e || V;
                                    var i, n, s = e.style;
                                    if (void 0 !== s[t]) return t;
                                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                                    return n >= 0 ? (Z = 3 === n ? "ms" : i[n], G = "-" + Z.toLowerCase() + "-", Z + t) : null
                                },
                                K = H.defaultView ? H.defaultView.getComputedStyle : function () {},
                                tt = a.getStyle = function (t, e, i, n, s) {
                                    var o;
                                    return $ || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || K(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == s || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : s) : Q(t)
                                },
                                et = X.convertToPixels = function (t, i, n, s, o) {
                                    if ("px" === s || !s && "lineHeight" !== i) return n;
                                    if ("auto" === s || !n) return 0;
                                    var r, l, h, p = j.test(i),
                                        c = t,
                                        u = V.style,
                                        f = n < 0,
                                        d = 1 === n;
                                    if (f && (n = -n), d && (n *= 100), "lineHeight" !== i || s)
                                        if ("%" === s && -1 !== i.indexOf("border")) r = n / 100 * (p ? t.clientWidth : t.clientHeight);
                                        else {
                                            if (u.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) u[p ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                                            else {
                                                if (c = t.parentNode || H.body, -1 !== tt(c, "display").indexOf("flex") && (u.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && p && l.time === h) return l.width * n / 100;
                                                u[p ? "width" : "height"] = n + s
                                            }
                                            c.appendChild(V), r = parseFloat(V[p ? "offsetWidth" : "offsetHeight"]), c.removeChild(V), p && "%" === s && !1 !== a.cacheWidths && (l = c._gsCache = c._gsCache || {}, l.time = h, l.width = r / n * 100), 0 !== r || o || (r = et(t, i, n, s, !0))
                                        }
                                    else l = K(t).lineHeight, t.style.lineHeight = n, r = parseFloat(K(t).lineHeight), t.style.lineHeight = l;
                                    return d && (r /= 100), f ? -r : r
                                },
                                it = X.calculateOffset = function (t, e, i) {
                                    if ("absolute" !== tt(t, "position", i)) return 0;
                                    var n = "left" === e ? "Left" : "Top",
                                        s = tt(t, "margin" + n, i);
                                    return t["offset" + n] - (et(t, e, parseFloat(s), s.replace(T, "")) || 0)
                                },
                                nt = function (t, e) {
                                    var i, n, s, o = {};
                                    if (e = e || K(t, null))
                                        if (i = e.length)
                                            for (; --i > -1;) s = e[i], -1 !== s.indexOf("-transform") && At !== s || (o[s.replace(k, E)] = e.getPropertyValue(s));
                                        else
                                            for (i in e) - 1 !== i.indexOf("Transform") && kt !== i || (o[i] = e[i]);
                                    else if (e = t.currentStyle || t.style)
                                        for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(k, E)] = e[i]);
                                    return $ || (o.opacity = Q(t)), n = Yt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, jt && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                                },
                                st = function (t, e, i, n, s) {
                                    var o, r, a, l = {},
                                        h = t.style;
                                    for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || s && s[r]) && -1 === r.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(x, "") ? o : 0 : it(t, r), void 0 !== h[r] && (a = new vt(h, r, h[r], a))));
                                    if (n)
                                        for (r in n) "className" !== r && (l[r] = n[r]);
                                    return {
                                        difs: l,
                                        firstMPT: a
                                    }
                                },
                                ot = {
                                    width: ["Left", "Right"],
                                    height: ["Top", "Bottom"]
                                },
                                rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                                at = function (t, e, i) {
                                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
                                    if (t.getCTM && Ht(t)) return t.getBBox()[e] || 0;
                                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                        s = ot[e],
                                        o = s.length;
                                    for (i = i || K(t, null); --o > -1;) n -= parseFloat(tt(t, "padding" + s[o], i, !0)) || 0, n -= parseFloat(tt(t, "border" + s[o] + "Width", i, !0)) || 0;
                                    return n
                                },
                                lt = function (t, e) {
                                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                                    null != t && "" !== t || (t = "0 0");
                                    var i, n = t.split(" "),
                                        s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                                    if (n.length > 3 && !e) {
                                        for (n = t.split(", ").join(",").split(","), t = [],
                                            i = 0; i < n.length; i++) t.push(lt(n[i]));
                                        return t.join(",")
                                    }
                                    return null == o ? o = "center" === s ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(s.replace(x, "")), e.oy = parseFloat(o.replace(x, "")), e.v = t), e || t
                                },
                                ht = function (t, e) {
                                    return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                                },
                                pt = function (t, e) {
                                    return "function" == typeof t && (t = t(y, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                                },
                                ct = function (t, e, i, n) {
                                    var s, o, r, a, l;
                                    return "function" == typeof t && (t = t(y, g)), null == t ? a = e : "number" == typeof t ? a = t : (s = 360, o = t.split("_"), l = "=" === t.charAt(1), r = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), o.length && (n && (n[i] = e + r), -1 !== t.indexOf("short") && (r %= s) !== r % (s / 2) && (r = r < 0 ? r + s : r - s), -1 !== t.indexOf("_cw") && r < 0 ? r = (r + 9999999999 * s) % s - (r / s | 0) * s : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * s) % s - (r / s | 0) * s)), a = e + r), a < 1e-6 && a > -1e-6 && (a = 0), a
                                },
                                ut = {
                                    aqua: [0, 255, 255],
                                    lime: [0, 255, 0],
                                    silver: [192, 192, 192],
                                    black: [0, 0, 0],
                                    maroon: [128, 0, 0],
                                    teal: [0, 128, 128],
                                    blue: [0, 0, 255],
                                    navy: [0, 0, 128],
                                    white: [255, 255, 255],
                                    fuchsia: [255, 0, 255],
                                    olive: [128, 128, 0],
                                    yellow: [255, 255, 0],
                                    orange: [255, 165, 0],
                                    gray: [128, 128, 128],
                                    purple: [128, 0, 128],
                                    green: [0, 128, 0],
                                    red: [255, 0, 0],
                                    pink: [255, 192, 203],
                                    cyan: [0, 255, 255],
                                    transparent: [255, 255, 255, 0]
                                },
                                ft = function (t, e, i) {
                                    return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                                },
                                dt = a.parseColor = function (t, e) {
                                    var i, n, s, o, r, a, l, h, p, c, u;
                                    if (t)
                                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                        else {
                                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
                                            else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                            else if ("hsl" === t.substr(0, 3))
                                                if (i = u = t.match(v), e) {
                                                    if (-1 !== t.indexOf("=")) return t.match(b)
                                                } else r = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, s = l <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - s, i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(r + 1 / 3, n, s), i[1] = ft(r, n, s), i[2] = ft(r - 1 / 3, n, s);
                                            else i = t.match(v) || ut.transparent;
                                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                        }
                                    else i = ut.black;
                                    return e && !u && (n = i[0] / 255, s = i[1] / 255, o = i[2] / 255, h = Math.max(n, s, o), p = Math.min(n, s, o), l = (h + p) / 2, h === p ? r = a = 0 : (c = h - p, a = l > .5 ? c / (2 - h - p) : c / (h + p), r = h === n ? (s - o) / c + (s < o ? 6 : 0) : h === s ? (o - n) / c + 2 : (n - s) / c + 4, r *= 60), i[0] = r + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                                },
                                mt = function (t, e) {
                                    var i, n, s, o = t.match(_t) || [],
                                        r = 0,
                                        a = "";
                                    if (!o.length) return t;
                                    for (i = 0; i < o.length; i++) n = o[i], s = t.substr(r, t.indexOf(n, r) - r), r += s.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                                    return a + t.substr(r)
                                },
                                _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                            for (p in ut) _t += "|" + p + "\\b";
                            _t = new RegExp(_t + ")", "gi"), a.colorStringFilter = function (t) {
                                var e, i = t[0] + " " + t[1];
                                _t.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), _t.lastIndex = 0
                            }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                            var gt = function (t, e, i, n) {
                                    if (null == t) return function (t) {
                                        return t
                                    };
                                    var s, o = e ? (t.match(_t) || [""])[0] : "",
                                        r = t.split(o).join("").match(w) || [],
                                        a = t.substr(0, t.indexOf(r[0])),
                                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                        h = -1 !== t.indexOf(" ") ? " " : ",",
                                        p = r.length,
                                        c = p > 0 ? r[0].replace(v, "") : "";
                                    return p ? s = e ? function (t) {
                                        var e, u, f, d;
                                        if ("number" == typeof t) t += c;
                                        else if (n && L.test(t)) {
                                            for (d = t.replace(L, "|").split("|"), f = 0; f < d.length; f++) d[f] = s(d[f]);
                                            return d.join(",")
                                        }
                                        if (e = (t.match(_t) || [o])[0], u = t.split(e).join("").match(w) || [], f = u.length, p > f--)
                                            for (; ++f < p;) u[f] = i ? u[(f - 1) / 2 | 0] : r[f];
                                        return a + u.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                                    } : function (t) {
                                        var e, o, u;
                                        if ("number" == typeof t) t += c;
                                        else if (n && L.test(t)) {
                                            for (o = t.replace(L, "|").split("|"), u = 0; u < o.length; u++) o[u] = s(o[u]);
                                            return o.join(",")
                                        }
                                        if (e = t.match(w) || [], u = e.length, p > u--)
                                            for (; ++u < p;) e[u] = i ? e[(u - 1) / 2 | 0] : r[u];
                                        return a + e.join(h) + l
                                    } : function (t) {
                                        return t
                                    }
                                },
                                yt = function (t) {
                                    return t = t.split(","),
                                        function (e, i, n, s, o, r, a) {
                                            var l, h = (i + "").split(" ");
                                            for (a = {}, l = 0; l < 4; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                            return s.parse(e, a, o, r)
                                        }
                                },
                                vt = (X._setPluginRatio = function (t) {
                                    this.plugin.setRatio(t);
                                    for (var e, i, n, s, o, r = this.data, a = r.proxy, l = r.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                                    if (r.autoRotate && (r.autoRotate.rotation = r.mod ? r.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                        for (l = r.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                                            if (i = l.t, i.type) {
                                                if (1 === i.type) {
                                                    for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                                    i[o] = s
                                                }
                                            } else i[o] = i.s + i.xs0;
                                            l = l._next
                                        }
                                }, function (t, e, i, n, s) {
                                    this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                                }),
                                bt = (X._parseToProxy = function (t, e, i, n, s, o) {
                                    var r, a, l, h, p, c = n,
                                        u = {},
                                        f = {},
                                        d = i._transform,
                                        m = B;
                                    for (i._transform = null, B = e, n = p = i.parse(t, e, n, s), B = m, o && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                                        if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, u[a] = n.s, o || (h = new vt(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                            for (r = n.l; --r > 0;) l = "xn" + r, a = n.p + "_" + l, f[a] = n.data[l], u[a] = n[l], o || (h = new vt(n, l, a, h, n.rxp[l]));
                                        n = n._next
                                    }
                                    return {
                                        proxy: u,
                                        end: f,
                                        firstMPT: h,
                                        pt: p
                                    }
                                }, X.CSSPropTween = function (t, e, i, s, o, a, l, h, p, c, u) {
                                    this.t = t, this.p = e, this.s = i, this.c = s, this.n = l || e, t instanceof bt || r.push(this.n), this.r = h, this.type = a || 0, p && (this.pr = p, n = !0), this.b = void 0 === c ? i : c, this.e = void 0 === u ? i + s : u, o && (this._next = o, o._prev = this)
                                }),
                                wt = function (t, e, i, n, s, o) {
                                    var r = new bt(t, e, i, n - i, s, -1, o);
                                    return r.b = i, r.e = r.xs0 = n, r
                                },
                                xt = a.parseComplex = function (t, e, i, n, s, o, r, l, h, p) {
                                    i = i || o || "", "function" == typeof n && (n = n(y, g)), r = new bt(t, e, 0, 0, r, p ? 2 : 1, null, !1, l, i, n), n += "", s && _t.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                                    var u, f, d, m, _, w, x, T, S, I, O, C, P, k = i.split(", ").join(",").split(" "),
                                        A = n.split(", ").join(",").split(" "),
                                        E = k.length,
                                        j = !1 !== c;
                                    for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (k = k.join(" ").replace(L, ", ").split(" "), A = A.join(" ").replace(L, ", ").split(" ")) : (k = k.join(" ").split(",").join(", ").split(" "), A = A.join(" ").split(",").join(", ").split(" ")), E = k.length), E !== A.length && (k = (o || "").split(" "), E = k.length), r.plugin = h, r.setRatio = p, _t.lastIndex = 0, u = 0; u < E; u++)
                                        if (m = k[u], _ = A[u], (T = parseFloat(m)) || 0 === T) r.appendXtra("", T, ht(_, T), _.replace(b, ""), j && -1 !== _.indexOf("px"), !0);
                                        else if (s && _t.test(m)) C = _.indexOf(")") + 1, C = ")" + (C ? _.substr(C) : ""), P = -1 !== _.indexOf("hsl") && $, I = _, m = dt(m, P), _ = dt(_, P), S = m.length + _.length > 6, S && !$ && 0 === _[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(A[u]).join("transparent")) : ($ || (S = !1), P ? r.appendXtra(I.substr(0, I.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], ht(_[0], m[0]), ",", !1, !0).appendXtra("", m[1], ht(_[1], m[1]), "%,", !1).appendXtra("", m[2], ht(_[2], m[2]), S ? "%," : "%" + C, !1) : r.appendXtra(I.substr(0, I.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], _[0] - m[0], ",", !0, !0).appendXtra("", m[1], _[1] - m[1], ",", !0).appendXtra("", m[2], _[2] - m[2], S ? "," : C, !0), S && (m = m.length < 4 ? 1 : m[3], r.appendXtra("", m, (_.length < 4 ? 1 : _[3]) - m, C, !1))), _t.lastIndex = 0;
                                    else if (w = m.match(v)) {
                                        if (!(x = _.match(b)) || x.length !== w.length) return r;
                                        for (d = 0, f = 0; f < w.length; f++) O = w[f], I = m.indexOf(O, d), r.appendXtra(m.substr(d, I - d), Number(O), ht(x[f], O), "", j && "px" === m.substr(I + O.length, 2), 0 === f), d = I + O.length;
                                        r["xs" + r.l] += m.substr(d)
                                    } else r["xs" + r.l] += r.l || r["xs" + r.l] ? " " + _ : _;
                                    if (-1 !== n.indexOf("=") && r.data) {
                                        for (C = r.xs0 + r.data.s, u = 1; u < r.l; u++) C += r["xs" + u] + r.data["xn" + u];
                                        r.e = C + r["xs" + u]
                                    }
                                    return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
                                },
                                Tt = 9;
                            for (p = bt.prototype, p.l = p.pr = 0; --Tt > 0;) p["xn" + Tt] = 0, p["xs" + Tt] = "";
                            p.xs0 = "", p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null, p.appendXtra = function (t, e, i, n, s, o) {
                                var r = this,
                                    a = r.l;
                                return r["xs" + a] += o && (a || r["xs" + a]) ? " " + t : t || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", a > 0 ? (r.data["xn" + a] = e + i, r.rxp["xn" + a] = s, r["xn" + a] = e, r.plugin || (r.xfirst = new bt(r, "xn" + a, e, i, r.xfirst || r, 0, r.n, s, r.pr), r.xfirst.xs0 = 0), r) : (r.data = {
                                    s: e + i
                                }, r.rxp = {}, r.s = e, r.c = i, r.r = s, r)) : (r["xs" + a] += e + (n || ""), r)
                            };
                            var St = function (t, e) {
                                    e = e || {}, this.p = e.prefix ? J(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                                },
                                It = X._registerComplexSpecialProp = function (t, e, i) {
                                    "object" != typeof e && (e = {
                                        parser: i
                                    });
                                    var n, s = t.split(","),
                                        o = e.defaultValue;
                                    for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new St(s[n], e)
                                },
                                Ot = X._registerPluginProp = function (t) {
                                    if (!h[t]) {
                                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                        It(t, {
                                            parser: function (t, i, n, s, o, r, a) {
                                                var p = l.com.greensock.plugins[e];
                                                return p ? (p._cssRegister(), h[n].parse(t, i, n, s, o, r, a)) : (U("Error: " + e + " js file not loaded."), o)
                                            }
                                        })
                                    }
                                };
                            p = St.prototype, p.parseComplex = function (t, e, i, n, s, o) {
                                var r, a, l, h, p, c, u = this.keyword;
                                if (this.multi && (L.test(i) || L.test(e) ? (a = e.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : u && (a = [e], l = [i])), l) {
                                    for (h = l.length > a.length ? l.length : a.length, r = 0; r < h; r++) e = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, u && (p = e.indexOf(u), c = i.indexOf(u), p !== c && (-1 === c ? a[r] = a[r].split(u).join("") : -1 === p && (a[r] += " " + u)));
                                    e = a.join(", "), i = l.join(", ")
                                }
                                return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, o)
                            }, p.parse = function (t, e, i, n, s, r, a) {
                                return this.parseComplex(t.style, this.format(tt(t, this.p, o, !1, this.dflt)), this.format(e), s, r)
                            }, a.registerSpecialProp = function (t, e, i) {
                                It(t, {
                                    parser: function (t, n, s, o, r, a, l) {
                                        var h = new bt(t, s, 0, 0, r, 2, s, !1, i);
                                        return h.plugin = a, h.setRatio = e(t, n, o._tween, s), h
                                    },
                                    priority: i
                                })
                            }, a.useSVGTransformAttr = !0;
                            var Ct, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                                kt = J("transform"),
                                At = G + "transform",
                                Et = J("transformOrigin"),
                                jt = null !== J("perspective"),
                                Rt = X.Transform = function () {
                                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !jt) && (a.defaultForce3D || "auto")
                                },
                                Mt = i.SVGElement,
                                Lt = function (t, e, i) {
                                    var n, s = H.createElementNS("http://www.w3.org/2000/svg", t),
                                        o = /([a-z])([A-Z])/g;
                                    for (n in i) s.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                                    return e.appendChild(s), s
                                },
                                zt = H.documentElement || {},
                                Ft = function () {
                                    var t, e, n, s = _ || /Android/i.test(q) && !i.chrome;
                                    return H.createElementNS && !s && (t = Lt("svg", zt), e = Lt("rect", t, {
                                        width: 100,
                                        height: 50,
                                        x: 100
                                    }), n = e.getBoundingClientRect().width, e.style[Et] = "50% 50%", e.style[kt] = "scaleX(0.5)", s = n === e.getBoundingClientRect().width && !(d && jt), zt.removeChild(t)), s
                                }(),
                                Nt = function (t, e, i, n, s, o) {
                                    var r, l, h, p, c, u, f, d, m, _, g, y, v, b, w = t._gsTransform,
                                        x = Vt(t, !0);
                                    w && (v = w.xOrigin, b = w.yOrigin), (!n || (r = n.split(" ")).length < 2) && (f = t.getBBox(), 0 === f.x && 0 === f.y && f.width + f.height === 0 && (f = {
                                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                        width: 0,
                                        height: 0
                                    }), e = lt(e).split(" "), r = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = p = parseFloat(r[0]), i.yOrigin = c = parseFloat(r[1]), n && x !== Wt && (u = x[0], f = x[1], d = x[2], m = x[3], _ = x[4], g = x[5], (y = u * m - f * d) && (l = p * (m / y) + c * (-d / y) + (d * g - m * _) / y, h = p * (-f / y) + c * (u / y) - (u * g - f * _) / y, p = i.xOrigin = r[0] = l, c = i.yOrigin = r[1] = h)), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), s || !1 !== s && !1 !== a.defaultSmoothOrigin ? (l = p - v, h = c - b, w.xOffset += l * x[0] + h * x[2] - l, w.yOffset += l * x[1] + h * x[3] - h) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", r.join(" "))
                                },
                                Bt = function (t) {
                                    var e, i = W("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                        n = this.parentNode,
                                        s = this.nextSibling,
                                        o = this.style.cssText;
                                    if (zt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Bt
                                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                                    return s ? n.insertBefore(this, s) : n.appendChild(this), zt.removeChild(i), this.style.cssText = o, e
                                },
                                Dt = function (t) {
                                    try {
                                        return t.getBBox()
                                    } catch (e) {
                                        return Bt.call(t, !0)
                                    }
                                },
                                Ht = function (t) {
                                    return !(!Mt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Dt(t))
                                },
                                Wt = [1, 0, 0, 1, 0, 0],
                                Vt = function (t, e) {
                                    var i, n, s, o, r, a, l = t._gsTransform || new Rt,
                                        h = t.style;
                                    if (kt ? n = tt(t, At, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(R), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !kt || !(a = !K(t) || "none" === K(t).display) && t.parentNode || (a && (o = h.display, h.display = "block"), t.parentNode || (r = 1, zt.appendChild(t)), n = tt(t, At, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? h.display = o : a && Qt(h, "display"), r && zt.removeChild(t)), (l.svg || t.getCTM && Ht(t)) && (i && -1 !== (h[kt] + "").indexOf("matrix") && (n = h[kt], i = 0), s = t.getAttribute("transform"), i && s && (s = t.transform.baseVal.consolidate().matrix, n = "matrix(" + s.a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return Wt;
                                    for (s = (n || "").match(v) || [], Tt = s.length; --Tt > -1;) o = Number(s[Tt]), s[Tt] = (r = o - (o |= 0)) ? (1e5 * r + (r < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                                    return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                                },
                                Yt = X.getTransform = function (t, i, n, s) {
                                    if (t._gsTransform && n && !s) return t._gsTransform;
                                    var o, r, l, h, p, c, u = n ? t._gsTransform || new Rt : new Rt,
                                        f = u.scaleX < 0,
                                        d = jt ? parseFloat(tt(t, Et, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin || 0 : 0,
                                        m = parseFloat(a.defaultTransformPerspective) || 0;
                                    if (u.svg = !(!t.getCTM || !Ht(t)), u.svg && (Nt(t, tt(t, Et, i, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), Ct = a.useSVGTransformAttr || Ft), (o = Vt(t)) !== Wt) {
                                        if (16 === o.length) {
                                            var _, g, y, v, b, w = o[0],
                                                x = o[1],
                                                T = o[2],
                                                S = o[3],
                                                I = o[4],
                                                O = o[5],
                                                C = o[6],
                                                P = o[7],
                                                k = o[8],
                                                A = o[9],
                                                E = o[10],
                                                j = o[12],
                                                R = o[13],
                                                M = o[14],
                                                L = o[11],
                                                z = Math.atan2(C, E);
                                            u.zOrigin && (M = -u.zOrigin, j = k * M - o[12], R = A * M - o[13], M = E * M + u.zOrigin - o[14]), u.rotationX = z * N, z && (v = Math.cos(-z), b = Math.sin(-z), _ = I * v + k * b, g = O * v + A * b, y = C * v + E * b, k = I * -b + k * v, A = O * -b + A * v, E = C * -b + E * v, L = P * -b + L * v, I = _, O = g, C = y), z = Math.atan2(-T, E), u.rotationY = z * N, z && (v = Math.cos(-z), b = Math.sin(-z), _ = w * v - k * b, g = x * v - A * b, y = T * v - E * b, A = x * b + A * v, E = T * b + E * v, L = S * b + L * v, w = _, x = g, T = y), z = Math.atan2(x, w), u.rotation = z * N, z && (v = Math.cos(z), b = Math.sin(z), _ = w * v + x * b, g = I * v + O * b, y = k * v + A * b, x = x * v - w * b, O = O * v - I * b, A = A * v - k * b, w = _, I = g, k = y), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), z = Math.atan2(I, O), u.scaleX = (1e5 * Math.sqrt(w * w + x * x + T * T) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(O * O + C * C) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(k * k + A * A + E * E) + .5 | 0) / 1e5, w /= u.scaleX, I /= u.scaleY, x /= u.scaleX, O /= u.scaleY, Math.abs(z) > 2e-5 ? (u.skewX = z * N, I = 0, "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(z))) : u.skewX = 0, u.perspective = L ? 1 / (L < 0 ? -L : L) : 0, u.x = j, u.y = R, u.z = M, u.svg && (u.x -= u.xOrigin - (u.xOrigin * w - u.yOrigin * I), u.y -= u.yOrigin - (u.yOrigin * x - u.xOrigin * O))
                                        } else if (!jt || s || !o.length || u.x !== o[4] || u.y !== o[5] || !u.rotationX && !u.rotationY) {
                                            var F = o.length >= 6,
                                                B = F ? o[0] : 1,
                                                D = o[1] || 0,
                                                H = o[2] || 0,
                                                W = F ? o[3] : 1;
                                            u.x = o[4] || 0, u.y = o[5] || 0, l = Math.sqrt(B * B + D * D), h = Math.sqrt(W * W + H * H), p = B || D ? Math.atan2(D, B) * N : u.rotation || 0, c = H || W ? Math.atan2(H, W) * N + p : u.skewX || 0, u.scaleX = l, u.scaleY = h, u.rotation = p, u.skewX = c, jt && (u.rotationX = u.rotationY = u.z = 0, u.perspective = m, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * B + u.yOrigin * H), u.y -= u.yOrigin - (u.xOrigin * D + u.yOrigin * W))
                                        }
                                        Math.abs(u.skewX) > 90 && Math.abs(u.skewX) < 270 && (f ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180)), u.zOrigin = d;
                                        for (r in u) u[r] < 2e-5 && u[r] > -2e-5 && (u[r] = 0)
                                    }
                                    return n && (t._gsTransform = u, u.svg && (Ct && t.style[kt] ? e.delayedCall(.001, function () {
                                        Qt(t.style, kt)
                                    }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function () {
                                        t.removeAttribute("transform")
                                    }))), u
                                },
                                Xt = function (t) {
                                    var e, i, n = this.data,
                                        s = -n.rotation * F,
                                        o = s + n.skewX * F,
                                        r = (Math.cos(s) * n.scaleX * 1e5 | 0) / 1e5,
                                        a = (Math.sin(s) * n.scaleX * 1e5 | 0) / 1e5,
                                        l = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5,
                                        h = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5,
                                        p = this.t.style,
                                        c = this.t.currentStyle;
                                    if (c) {
                                        i = a, a = -l, l = -i, e = c.filter, p.filter = "";
                                        var u, f, d = this.t.offsetWidth,
                                            m = this.t.offsetHeight,
                                            g = "absolute" !== c.position,
                                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + a + ", M21=" + l + ", M22=" + h,
                                            v = n.x + d * n.xPercent / 100,
                                            b = n.y + m * n.yPercent / 100;
                                        if (null != n.ox && (u = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2, f = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2, v += u - (u * r + f * a), b += f - (u * l + f * h)), g ? (u = d / 2, f = m / 2, y += ", Dx=" + (u - (u * r + f * a) + v) + ", Dy=" + (f - (u * l + f * h) + b) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? p.filter = e.replace(M, y) : p.filter = y + " " + e, 0 !== t && 1 !== t || 1 === r && 0 === a && 0 === l && 1 === h && (g && -1 === y.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && p.removeAttribute("filter")), !g) {
                                            var w, x, I, O = _ < 8 ? 1 : -1;
                                            for (u = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((d - ((r < 0 ? -r : r) * d + (a < 0 ? -a : a) * m)) / 2 + v), n.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * d)) / 2 + b), Tt = 0; Tt < 4; Tt++) x = rt[Tt], w = c[x], i = -1 !== w.indexOf("px") ? parseFloat(w) : et(this.t, x, parseFloat(w), w.replace(T, "")) || 0, I = i !== n[x] ? Tt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Tt < 2 ? u - n.ieOffsetX : f - n.ieOffsetY, p[x] = (n[x] = Math.round(i - I * (0 === Tt || 2 === Tt ? 1 : O))) + "px"
                                        }
                                    }
                                },
                                qt = X.set3DTransformRatio = X.setTransformRatio = function (t) {
                                    var e, i, n, s, o, r, a, l, h, p, c, u, f, m, _, g, y, v, b, w, x, T, S, I = this.data,
                                        O = this.t.style,
                                        C = I.rotation,
                                        P = I.rotationX,
                                        k = I.rotationY,
                                        A = I.scaleX,
                                        E = I.scaleY,
                                        j = I.scaleZ,
                                        R = I.x,
                                        M = I.y,
                                        L = I.z,
                                        z = I.svg,
                                        N = I.perspective,
                                        B = I.force3D,
                                        D = I.skewY,
                                        H = I.skewX;
                                    if (D && (H += D, C += D), ((1 === t || 0 === t) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !L && !N && !k && !P && 1 === j || Ct && z || !jt) return void(C || H || z ? (C *= F, T = H * F, S = 1e5, i = Math.cos(C) * A, o = Math.sin(C) * A, n = Math.sin(C - T) * -E, r = Math.cos(C - T) * E, T && "simple" === I.skewType && (e = Math.tan(T - D * F), e = Math.sqrt(1 + e * e), n *= e, r *= e, D && (e = Math.tan(D * F), e = Math.sqrt(1 + e * e), i *= e, o *= e)), z && (R += I.xOrigin - (I.xOrigin * i + I.yOrigin * n) + I.xOffset, M += I.yOrigin - (I.xOrigin * o + I.yOrigin * r) + I.yOffset, Ct && (I.xPercent || I.yPercent) && (_ = this.t.getBBox(), R += .01 * I.xPercent * _.width, M += .01 * I.yPercent * _.height), _ = 1e-6, R < _ && R > -_ && (R = 0), M < _ && M > -_ && (M = 0)), b = (i * S | 0) / S + "," + (o * S | 0) / S + "," + (n * S | 0) / S + "," + (r * S | 0) / S + "," + R + "," + M + ")", z && Ct ? this.t.setAttribute("transform", "matrix(" + b) : O[kt] = (I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) matrix(" : "matrix(") + b) : O[kt] = (I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + E + "," + R + "," + M + ")");
                                    if (d && (_ = 1e-4, A < _ && A > -_ && (A = j = 2e-5), E < _ && E > -_ && (E = j = 2e-5), !N || I.z || I.rotationX || I.rotationY || (N = 0)), C || H) C *= F, g = i = Math.cos(C), y = o = Math.sin(C), H && (C -= H * F, g = Math.cos(C), y = Math.sin(C), "simple" === I.skewType && (e = Math.tan((H - D) * F), e = Math.sqrt(1 + e * e), g *= e, y *= e, I.skewY && (e = Math.tan(D * F), e = Math.sqrt(1 + e * e), i *= e, o *= e))), n = -y, r = g;
                                    else {
                                        if (!(k || P || 1 !== j || N || z)) return void(O[kt] = (I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + M + "px," + L + "px)" + (1 !== A || 1 !== E ? " scale(" + A + "," + E + ")" : ""));
                                        i = r = 1, n = o = 0
                                    }
                                    p = 1, s = a = l = h = c = u = 0, f = N ? -1 / N : 0, m = I.zOrigin, _ = 1e-6, w = ",", x = "0", C = k * F, C && (g = Math.cos(C), y = Math.sin(C), l = -y, c = f * -y, s = i * y, a = o * y, p = g, f *= g, i *= g, o *= g), C = P * F, C && (g = Math.cos(C), y = Math.sin(C), e = n * g + s * y, v = r * g + a * y, h = p * y, u = f * y, s = n * -y + s * g, a = r * -y + a * g, p *= g, f *= g, n = e, r = v), 1 !== j && (s *= j, a *= j, p *= j, f *= j), 1 !== E && (n *= E, r *= E, h *= E, u *= E), 1 !== A && (i *= A, o *= A, l *= A, c *= A), (m || z) && (m && (R += s * -m, M += a * -m, L += p * -m + m), z && (R += I.xOrigin - (I.xOrigin * i + I.yOrigin * n) + I.xOffset, M += I.yOrigin - (I.xOrigin * o + I.yOrigin * r) + I.yOffset), R < _ && R > -_ && (R = x), M < _ && M > -_ && (M = x), L < _ && L > -_ && (L = 0)), b = I.xPercent || I.yPercent ? "translate(" + I.xPercent + "%," + I.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < _ && i > -_ ? x : i) + w + (o < _ && o > -_ ? x : o) + w + (l < _ && l > -_ ? x : l), b += w + (c < _ && c > -_ ? x : c) + w + (n < _ && n > -_ ? x : n) + w + (r < _ && r > -_ ? x : r), P || k || 1 !== j ? (b += w + (h < _ && h > -_ ? x : h) + w + (u < _ && u > -_ ? x : u) + w + (s < _ && s > -_ ? x : s), b += w + (a < _ && a > -_ ? x : a) + w + (p < _ && p > -_ ? x : p) + w + (f < _ && f > -_ ? x : f) + w) : b += ",0,0,0,0,1,0,", b += R + w + M + w + L + w + (N ? 1 + -L / N : 1) + ")", O[kt] = b
                                };
                            p = Rt.prototype, p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0, p.scaleX = p.scaleY = p.scaleZ = 1, It("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                                parser: function (t, e, i, n, s, r, l) {
                                    if (n._lastParsedTransform === l) return s;
                                    n._lastParsedTransform = l;
                                    var h, p = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                    "function" == typeof l[i] && (h = l[i], l[i] = e), p && (l.scale = p(y, t));
                                    var c, u, f, d, m, _, v, b, w, x = t._gsTransform,
                                        T = t.style,
                                        S = Pt.length,
                                        I = l,
                                        O = {},
                                        C = Yt(t, o, !0, I.parseTransform),
                                        P = I.transform && ("function" == typeof I.transform ? I.transform(y, g) : I.transform);
                                    if (C.skewType = I.skewType || C.skewType || a.defaultSkewType, n._transform = C, P && "string" == typeof P && kt) u = V.style, u[kt] = P, u.display = "block", u.position = "absolute", H.body.appendChild(V), c = Yt(V, null, !1), "simple" === C.skewType && (c.scaleY *= Math.cos(c.skewX * F)), C.svg && (_ = C.xOrigin, v = C.yOrigin, c.x -= C.xOffset, c.y -= C.yOffset, (I.transformOrigin || I.svgOrigin) && (P = {}, Nt(t, lt(I.transformOrigin), P, I.svgOrigin, I.smoothOrigin, !0), _ = P.xOrigin, v = P.yOrigin, c.x -= P.xOffset - C.xOffset, c.y -= P.yOffset - C.yOffset), (_ || v) && (b = Vt(V, !0), c.x -= _ - (_ * b[0] + v * b[2]), c.y -= v - (_ * b[1] + v * b[3]))), H.body.removeChild(V), c.perspective || (c.perspective = C.perspective), null != I.xPercent && (c.xPercent = pt(I.xPercent, C.xPercent)), null != I.yPercent && (c.yPercent = pt(I.yPercent, C.yPercent));
                                    else if ("object" == typeof I) {
                                        if (c = {
                                                scaleX: pt(null != I.scaleX ? I.scaleX : I.scale, C.scaleX),
                                                scaleY: pt(null != I.scaleY ? I.scaleY : I.scale, C.scaleY),
                                                scaleZ: pt(I.scaleZ, C.scaleZ),
                                                x: pt(I.x, C.x),
                                                y: pt(I.y, C.y),
                                                z: pt(I.z, C.z),
                                                xPercent: pt(I.xPercent, C.xPercent),
                                                yPercent: pt(I.yPercent, C.yPercent),
                                                perspective: pt(I.transformPerspective, C.perspective)
                                            }, null != (m = I.directionalRotation))
                                            if ("object" == typeof m)
                                                for (u in m) I[u] = m[u];
                                            else I.rotation = m;
                                        "string" == typeof I.x && -1 !== I.x.indexOf("%") && (c.x = 0, c.xPercent = pt(I.x, C.xPercent)), "string" == typeof I.y && -1 !== I.y.indexOf("%") && (c.y = 0, c.yPercent = pt(I.y, C.yPercent)), c.rotation = ct("rotation" in I ? I.rotation : "shortRotation" in I ? I.shortRotation + "_short" : "rotationZ" in I ? I.rotationZ : C.rotation, C.rotation, "rotation", O), jt && (c.rotationX = ct("rotationX" in I ? I.rotationX : "shortRotationX" in I ? I.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", O), c.rotationY = ct("rotationY" in I ? I.rotationY : "shortRotationY" in I ? I.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", O)), c.skewX = ct(I.skewX, C.skewX), c.skewY = ct(I.skewY, C.skewY)
                                    }
                                    for (jt && null != I.force3D && (C.force3D = I.force3D, d = !0), f = C.force3D || C.z || C.rotationX || C.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == I.scale || (c.scaleZ = 1); --S > -1;) w = Pt[S], ((P = c[w] - C[w]) > 1e-6 || P < -1e-6 || null != I[w] || null != B[w]) && (d = !0, s = new bt(C, w, C[w], P, s), w in O && (s.e = O[w]), s.xs0 = 0, s.plugin = r, n._overwriteProps.push(s.n));
                                    return P = I.transformOrigin, C.svg && (P || I.svgOrigin) && (_ = C.xOffset, v = C.yOffset, Nt(t, lt(P), c, I.svgOrigin, I.smoothOrigin), s = wt(C, "xOrigin", (x ? C : c).xOrigin, c.xOrigin, s, "transformOrigin"), s = wt(C, "yOrigin", (x ? C : c).yOrigin, c.yOrigin, s, "transformOrigin"), _ === C.xOffset && v === C.yOffset || (s = wt(C, "xOffset", x ? _ : C.xOffset, C.xOffset, s, "transformOrigin"), s = wt(C, "yOffset", x ? v : C.yOffset, C.yOffset, s, "transformOrigin")), P = "0px 0px"), (P || jt && f && C.zOrigin) && (kt ? (d = !0, w = Et, P = (P || tt(t, w, o, !1, "50% 50%")) + "", s = new bt(T, w, 0, 0, s, -1, "transformOrigin"), s.b = T[w], s.plugin = r, jt ? (u = C.zOrigin, P = P.split(" "), C.zOrigin = (P.length > 2 && (0 === u || "0px" !== P[2]) ? parseFloat(P[2]) : u) || 0, s.xs0 = s.e = P[0] + " " + (P[1] || "50%") + " 0px", s = new bt(C, "zOrigin", 0, 0, s, -1, s.n), s.b = u, s.xs0 = s.e = C.zOrigin) : s.xs0 = s.e = P) : lt(P + "", C)), d && (n._transformType = C.svg && Ct || !f && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), p && (l.scale = p), s
                                },
                                prefix: !0
                            }), It("boxShadow", {
                                defaultValue: "0px 0px 0px 0px #999",
                                prefix: !0,
                                color: !0,
                                multi: !0,
                                keyword: "inset"
                            }), It("borderRadius", {
                                defaultValue: "0px",
                                parser: function (t, e, i, n, r, a) {
                                    e = this.format(e);
                                    var l, h, p, c, u, f, d, m, _, g, y, v, b, w, x, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                        I = t.style;
                                    for (_ = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = J(S[h])), u = c = tt(t, S[h], o, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), f = p = l[h], d = parseFloat(u), v = u.substr((d + "").length), b = "=" === f.charAt(1), b ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), y = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f), y = f.substr((m + "").length)), "" === y && (y = s[i] || v), y !== v && (w = et(t, "borderLeft", d, v), x = et(t, "borderTop", d, v), "%" === y ? (u = w / _ * 100 + "%", c = x / g * 100 + "%") : "em" === y ? (T = et(t, "borderLeft", 1, "em"), u = w / T + "em", c = x / T + "em") : (u = w + "px", c = x + "px"), b && (f = parseFloat(u) + m + y, p = parseFloat(c) + m + y)), r = xt(I, S[h], u + " " + c, f + " " + p, !1, "0px", r);
                                    return r
                                },
                                prefix: !0,
                                formatter: gt("0px 0px 0px 0px", !1, !0)
                            }), It("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                                defaultValue: "0px",
                                parser: function (t, e, i, n, s, r) {
                                    return xt(t.style, i, this.format(tt(t, i, o, !1, "0px 0px")), this.format(e), !1, "0px", s)
                                },
                                prefix: !0,
                                formatter: gt("0px 0px", !1, !0)
                            }), It("backgroundPosition", {
                                defaultValue: "0 0",
                                parser: function (t, e, i, n, s, r) {
                                    var a, l, h, p, c, u, f = "background-position",
                                        d = o || K(t, null),
                                        m = this.format((d ? _ ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                        g = this.format(e);
                                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (u = tt(t, "backgroundImage").replace(A, "")) && "none" !== u) {
                                        for (a = m.split(" "), l = g.split(" "), Y.setAttribute("src", u), h = 2; --h > -1;) m = a[h], (p = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[h] = p ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                                        m = a.join(" ")
                                    }
                                    return this.parseComplex(t.style, m, g, s, r)
                                },
                                formatter: lt
                            }), It("backgroundSize", {
                                defaultValue: "0 0",
                                formatter: function (t) {
                                    return t += "", lt(-1 === t.indexOf(" ") ? t + " " + t : t)
                                }
                            }), It("perspective", {
                                defaultValue: "0px",
                                prefix: !0
                            }), It("perspectiveOrigin", {
                                defaultValue: "50% 50%",
                                prefix: !0
                            }), It("transformStyle", {
                                prefix: !0
                            }), It("backfaceVisibility", {
                                prefix: !0
                            }), It("userSelect", {
                                prefix: !0
                            }), It("margin", {
                                parser: yt("marginTop,marginRight,marginBottom,marginLeft")
                            }), It("padding", {
                                parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                            }), It("clip", {
                                defaultValue: "rect(0px,0px,0px,0px)",
                                parser: function (t, e, i, n, s, r) {
                                    var a, l, h;
                                    return _ < 9 ? (l = t.currentStyle, h = _ < 8 ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(tt(t, this.p, o, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, r)
                                }
                            }), It("textShadow", {
                                defaultValue: "0px 0px 0px #999",
                                color: !0,
                                multi: !0
                            }), It("autoRound,strictUnits", {
                                parser: function (t, e, i, n, s) {
                                    return s
                                }
                            }), It("border", {
                                defaultValue: "0px solid #000",
                                parser: function (t, e, i, n, s, r) {
                                    var a = tt(t, "borderTopWidth", o, !1, "0px"),
                                        l = this.format(e).split(" "),
                                        h = l[0].replace(T, "");
                                    return "px" !== h && (a = parseFloat(a) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", o, !1, "solid") + " " + tt(t, "borderTopColor", o, !1, "#000")), l.join(" "), s, r)
                                },
                                color: !0,
                                formatter: function (t) {
                                    var e = t.split(" ");
                                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
                                }
                            }), It("borderWidth", {
                                parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                            }), It("float,cssFloat,styleFloat", {
                                parser: function (t, e, i, n, s, o) {
                                    var r = t.style,
                                        a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                                    return new bt(r, a, 0, 0, s, -1, i, !1, 0, r[a], e)
                                }
                            });
                            var $t = function (t) {
                                var e, i = this.t,
                                    n = i.filter || tt(this.data, "filter") || "",
                                    s = this.s + this.c * t | 0;
                                100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(O, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(S, "opacity=" + s))
                            };
                            It("opacity,alpha,autoAlpha", {
                                defaultValue: "1",
                                parser: function (t, e, i, n, s, r) {
                                    var a = parseFloat(tt(t, "opacity", o, !1, "1")),
                                        l = t.style,
                                        h = "autoAlpha" === i;
                                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === tt(t, "visibility", o) && 0 !== e && (a = 0), $ ? s = new bt(l, "opacity", a, e - a, s) : (s = new bt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = r, s.setRatio = $t), h && (s = new bt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                                }
                            });
                            var Qt = function (t, e) {
                                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                                },
                                Ut = function (t) {
                                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Qt(i, e.p), e = e._next;
                                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                                };
                            It("className", {
                                parser: function (t, e, i, s, r, a, l) {
                                    var h, p, c, u, f, d = t.getAttribute("class") || "",
                                        m = t.style.cssText;
                                    if (r = s._classNamePT = new bt(t, i, 0, 0, r, 2), r.setRatio = Ut, r.pr = -11, n = !0, r.b = d, p = nt(t, o), c = t._gsClassPT) {
                                        for (u = {}, f = c.data; f;) u[f.p] = 1, f = f._next;
                                        c.setRatio(1)
                                    }
                                    return t._gsClassPT = r, r.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), h = st(t, p, nt(t), l, u), t.setAttribute("class", d), r.data = h.firstMPT, t.style.cssText = m, r = r.xfirst = s.parse(t, h.difs, r, a)
                                }
                            });
                            var Gt = function (t) {
                                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                    var e, i, n, s, o, r = this.t.style,
                                        a = h.transform.parse;
                                    if ("all" === this.e) r.cssText = "", s = !0;
                                    else
                                        for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], h[i] && (h[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Et : h[i].p), Qt(r, i);
                                    s && (Qt(r, kt), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                                }
                            };
                            for (It("clearProps", {
                                    parser: function (t, e, i, s, o) {
                                        return o = new bt(t, i, 0, 0, o, 2), o.setRatio = Gt, o.e = e, o.pr = -10, o.data = s._tween, n = !0, o
                                    }
                                }), p = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = p.length; Tt--;) Ot(p[Tt]);
                            p = a.prototype, p._firstPT = p._lastParsedTransform = p._transform = null, p._onInitTween = function (t, e, i, l) {
                                if (!t.nodeType) return !1;
                                this._target = g = t, this._tween = i, this._vars = e, y = l, c = e.autoRound, n = !1, s = e.suffixMap || a.suffixMap, o = K(t, ""), r = this._overwriteProps;
                                var p, d, _, v, b, w, x, T, S, O = t.style;
                                if (u && "" === O.zIndex && ("auto" !== (p = tt(t, "zIndex", o)) && "" !== p || this._addLazySet(O, "zIndex", 0)), "string" == typeof e && (v = O.cssText, p = nt(t, o), O.cssText = v + ";" + e, p = st(t, p, nt(t)).difs, !$ && I.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, O.cssText = v), e.className ? this._firstPT = d = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                                    for (S = 3 === this._transformType, kt ? f && (u = !0, "" === O.zIndex && ("auto" !== (x = tt(t, "zIndex", o)) && "" !== x || this._addLazySet(O, "zIndex", 0)), m && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : O.zoom = 1, _ = d; _ && _._next;) _ = _._next;
                                    T = new bt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, _), T.setRatio = kt ? qt : Xt, T.data = this._transform || Yt(t, o, !0), T.tween = i, T.pr = -1, r.pop()
                                }
                                if (n) {
                                    for (; d;) {
                                        for (w = d._next, _ = v; _ && _.pr > d.pr;) _ = _._next;
                                        (d._prev = _ ? _._prev : b) ? d._prev._next = d: v = d, (d._next = _) ? _._prev = d : b = d, d = w
                                    }
                                    this._firstPT = v
                                }
                                return !0
                            }, p.parse = function (t, e, i, n) {
                                var r, a, l, p, u, f, d, m, _, v, b = t.style;
                                for (r in e) {
                                    if (f = e[r], "function" == typeof f && (f = f(y, g)), a = h[r]) i = a.parse(t, f, r, this, i, n, e);
                                    else {
                                        if ("--" === r.substr(0, 2)) {
                                            this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(r) + "", f + "", r, !1, r);
                                            continue
                                        }
                                        u = tt(t, r, o) + "", _ = "string" == typeof f, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || _ && C.test(f) ? (_ || (f = dt(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = xt(b, r, u, f, !0, "transparent", i, 0, n)) : _ && z.test(f) ? i = xt(b, r, u, f, !0, null, i, 0, n) : (l = parseFloat(u), d = l || 0 === l ? u.substr((l + "").length) : "", "" !== u && "auto" !== u || ("width" === r || "height" === r ? (l = at(t, r, o), d = "px") : "left" === r || "top" === r ? (l = it(t, r, o), d = "px") : (l = "opacity" !== r ? 0 : 1, d = "")), v = _ && "=" === f.charAt(1), v ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), m = f.replace(T, "")) : (p = parseFloat(f), m = _ ? f.replace(T, "") : ""), "" === m && (m = r in s ? s[r] : d), f = p || 0 === p ? (v ? p + l : p) + m : e[r], d !== m && ("" === m && "lineHeight" !== r || (p || 0 === p) && l && (l = et(t, r, l, d), "%" === m ? (l /= et(t, r, 100, "%") / 100, !0 !== e.strictUnits && (u = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= et(t, r, 1, m) : "px" !== m && (p = et(t, r, p, m), m = "px"), v && (p || 0 === p) && (f = p + l + m))), v && (p += l), !l && 0 !== l || !p && 0 !== p ? void 0 !== b[r] && (f || f + "" != "NaN" && null != f) ? (i = new bt(b, r, p || l || 0, 0, i, -1, r, !1, 0, u, f), i.xs0 = "none" !== f || "display" !== r && -1 === r.indexOf("Style") ? f : u) : U("invalid " + r + " tween value: " + e[r]) : (i = new bt(b, r, l, p - l, i, 0, r, !1 !== c && ("px" === m || "zIndex" === r), 0, u, f), i.xs0 = m))
                                    }
                                    n && i && !i.plugin && (i.plugin = n)
                                }
                                return i
                            }, p.setRatio = function (t) {
                                var e, i, n, s = this._firstPT;
                                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                        for (; s;) {
                                            if (e = s.c * t + s.s, s.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), s.type)
                                                if (1 === s.type)
                                                    if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                                    else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                            else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                            else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                            else {
                                                for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                            else s.t[s.p] = e + s.xs0;
                                            s = s._next
                                        } else
                                            for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                                    else
                                        for (; s;) {
                                            if (2 !== s.type)
                                                if (s.r && -1 !== s.type)
                                                    if (e = Math.round(s.s + s.c), s.type) {
                                                        if (1 === s.type) {
                                                            for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                            s.t[s.p] = i
                                                        }
                                                    } else s.t[s.p] = e + s.xs0;
                                            else s.t[s.p] = s.e;
                                            else s.setRatio(t);
                                            s = s._next
                                        }
                            }, p._enableTransforms = function (t) {
                                this._transform = this._transform || Yt(this._target, o, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
                            };
                            var Zt = function (t) {
                                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                            };
                            p._addLazySet = function (t, e, i) {
                                var n = this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2);
                                n.e = i, n.setRatio = Zt, n.data = this
                            }, p._linkCSSP = function (t, e, i, n) {
                                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                            }, p._mod = function (t) {
                                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                            }, p._kill = function (e) {
                                var i, n, s, o = e;
                                if (e.autoAlpha || e.alpha) {
                                    o = {};
                                    for (n in e) o[n] = e[n];
                                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                                }
                                for (e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                                return t.prototype._kill.call(this, o)
                            };
                            var Jt = function (t, e, i) {
                                var n, s, o, r;
                                if (t.slice)
                                    for (s = t.length; --s > -1;) Jt(t[s], e, i);
                                else
                                    for (n = t.childNodes, s = n.length; --s > -1;) o = n[s], r = o.type, o.style && (e.push(nt(o)), i && i.push(o)), 1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || Jt(o, e, i)
                            };
                            return a.cascadeTo = function (t, i, n) {
                                var s, o, r, a, l = e.to(t, i, n),
                                    h = [l],
                                    p = [],
                                    c = [],
                                    u = [],
                                    f = e._internals.reservedProps;
                                for (t = l._targets || l.target, Jt(t, p, u), l.render(i, !0, !0), Jt(t, c), l.render(0, !0, !0), l._enabled(!0), s = u.length; --s > -1;)
                                    if (o = st(u[s], p[s], c[s]), o.firstMPT) {
                                        o = o.difs;
                                        for (r in n) f[r] && (o[r] = n[r]);
                                        a = {};
                                        for (r in o) a[r] = p[s][r];
                                        h.push(e.fromTo(u[s], i, a, o))
                                    } return h
                            }, t.activate([a]), a
                        }, !0),
                        function () {
                            var t = i._gsDefine.plugin({
                                    propName: "roundProps",
                                    version: "1.6.0",
                                    priority: -1,
                                    API: 2,
                                    init: function (t, e, i) {
                                        return this._tween = i, !0
                                    }
                                }),
                                e = function (t) {
                                    for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                                },
                                n = t.prototype;
                            n._onInitAllProps = function () {
                                for (var t, i, n, s = this._tween, o = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), r = o.length, a = {}, l = s._propLookup.roundProps; --r > -1;) a[o[r]] = Math.round;
                                for (r = o.length; --r > -1;)
                                    for (t = o[r], i = s._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n), i._next = i._prev = null, s._propLookup[t] = l)), i = n;
                                return !1
                            }, n._add = function (t, e, i, n) {
                                this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                            }
                        }(),
                        function () {
                            i._gsDefine.plugin({
                                propName: "attr",
                                API: 2,
                                version: "0.6.1",
                                init: function (t, e, i, n) {
                                    var s, o;
                                    if ("function" != typeof t.setAttribute) return !1;
                                    for (s in e) o = e[s], "function" == typeof o && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", o + "", s, !1, s), this._overwriteProps.push(s);
                                    return !0
                                }
                            })
                        }(), i._gsDefine.plugin({
                            propName: "directionalRotation",
                            version: "0.3.1",
                            API: 2,
                            init: function (t, e, i, n) {
                                "object" != typeof e && (e = {
                                    rotation: e
                                }), this.finals = {};
                                var s, o, r, a, l, h, p = !0 === e.useRadians ? 2 * Math.PI : 360;
                                for (s in e) "useRadians" !== s && (a = e[s], "function" == typeof a && (a = a(n, t)), h = (a + "").split("_"), o = h[0], r = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), a = this.finals[s] = "string" == typeof o && "=" === o.charAt(1) ? r + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, l = a - r, h.length && (o = h.join("_"), -1 !== o.indexOf("short") && (l %= p) !== l % (p / 2) && (l = l < 0 ? l + p : l - p), -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * p) % p - (l / p | 0) * p : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * p) % p - (l / p | 0) * p)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, s, r, r + l, s), this._overwriteProps.push(s)));
                                return !0
                            },
                            set: function (t) {
                                var e;
                                if (1 !== t) this._super.setRatio.call(this, t);
                                else
                                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                            }
                        })._autoCSS = !0, i._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                            var e, n, s, o, r = i.GreenSockGlobals || i,
                                a = r.com.greensock,
                                l = 2 * Math.PI,
                                h = Math.PI / 2,
                                p = a._class,
                                c = function (e, i) {
                                    var n = p("easing." + e, function () {}, !0),
                                        s = n.prototype = new t;
                                    return s.constructor = n, s.getRatio = i, n
                                },
                                u = t.register || function () {},
                                f = function (t, e, i, n, s) {
                                    var o = p("easing." + t, {
                                        easeOut: new e,
                                        easeIn: new i,
                                        easeInOut: new n
                                    }, !0);
                                    return u(o, t), o
                                },
                                d = function (t, e, i) {
                                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                                },
                                m = function (e, i) {
                                    var n = p("easing." + e, function (t) {
                                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                        }, !0),
                                        s = n.prototype = new t;
                                    return s.constructor = n, s.getRatio = i, s.config = function (t) {
                                        return new n(t)
                                    }, n
                                },
                                _ = f("Back", m("BackOut", function (t) {
                                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                                }), m("BackIn", function (t) {
                                    return t * t * ((this._p1 + 1) * t - this._p1)
                                }), m("BackInOut", function (t) {
                                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                                })),
                                g = p("easing.SlowMo", function (t, e, i) {
                                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                                }, !0),
                                y = g.prototype = new t;
                            return y.constructor = g, y.getRatio = function (t) {
                                var e = t + (.5 - t) * this._p;
                                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                            }, g.ease = new g(.7, .7), y.config = g.config = function (t, e, i) {
                                return new g(t, e, i)
                            }, e = p("easing.SteppedEase", function (t, e) {
                                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                            }, !0), y = e.prototype = new t, y.constructor = e, y.getRatio = function (t) {
                                return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                            }, y.config = e.config = function (t, i) {
                                return new e(t, i)
                            }, n = p("easing.ExpoScaleEase", function (t, e, i) {
                                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
                            }, !0), y = n.prototype = new t, y.constructor = n, y.getRatio = function (t) {
                                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                            }, y.config = n.config = function (t, e, i) {
                                return new n(t, e, i)
                            }, s = p("easing.RoughEase", function (e) {
                                e = e || {};
                                for (var i, n, s, o, r, a, l = e.taper || "none", h = [], p = 0, c = 0 | (e.points || 20), u = c, f = !1 !== e.randomize, m = !0 === e.clamp, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --u > -1;) i = f ? Math.random() : 1 / c * u, n = _ ? _.getRatio(i) : i, "none" === l ? s = g : "out" === l ? (o = 1 - i, s = o * o * g) : "in" === l ? s = i * i * g : i < .5 ? (o = 2 * i, s = o * o * .5 * g) : (o = 2 * (1 - i), s = o * o * .5 * g), f ? n += Math.random() * s - .5 * s : u % 2 ? n += .5 * s : n -= .5 * s, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[p++] = {
                                    x: i,
                                    y: n
                                };
                                for (h.sort(function (t, e) {
                                        return t.x - e.x
                                    }), a = new d(1, 1, null), u = c; --u > -1;) r = h[u], a = new d(r.x, r.y, a);
                                this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                            }, !0), y = s.prototype = new t, y.constructor = s, y.getRatio = function (t) {
                                var e = this._prev;
                                if (t > e.t) {
                                    for (; e.next && t >= e.t;) e = e.next;
                                    e = e.prev
                                } else
                                    for (; e.prev && t <= e.t;) e = e.prev;
                                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                            }, y.config = function (t) {
                                return new s(t)
                            }, s.ease = new s, f("Bounce", c("BounceOut", function (t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            }), c("BounceIn", function (t) {
                                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                            }), c("BounceInOut", function (t) {
                                var e = t < .5;
                                return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                            })), f("Circ", c("CircOut", function (t) {
                                return Math.sqrt(1 - (t -= 1) * t)
                            }), c("CircIn", function (t) {
                                return -(Math.sqrt(1 - t * t) - 1)
                            }), c("CircInOut", function (t) {
                                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            })), o = function (e, i, n) {
                                var s = p("easing." + e, function (t, e) {
                                        this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0), this._p2 = l / this._p2
                                    }, !0),
                                    o = s.prototype = new t;
                                return o.constructor = s, o.getRatio = i, o.config = function (t, e) {
                                    return new s(t, e)
                                }, s
                            }, f("Elastic", o("ElasticOut", function (t) {
                                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                            }, .3), o("ElasticIn", function (t) {
                                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                            }, .3), o("ElasticInOut", function (t) {
                                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                            }, .45)), f("Expo", c("ExpoOut", function (t) {
                                return 1 - Math.pow(2, -10 * t)
                            }), c("ExpoIn", function (t) {
                                return Math.pow(2, 10 * (t - 1)) - .001
                            }), c("ExpoInOut", function (t) {
                                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                            })), f("Sine", c("SineOut", function (t) {
                                return Math.sin(t * h)
                            }), c("SineIn", function (t) {
                                return 1 - Math.cos(t * h)
                            }), c("SineInOut", function (t) {
                                return -.5 * (Math.cos(Math.PI * t) - 1)
                            })), p("easing.EaseLookup", {
                                find: function (e) {
                                    return t.map[e]
                                }
                            }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(s, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), _
                        }, !0)
                }), i._gsDefine && i._gsQueue.pop()(),
                function (t, i) {
                    "use strict";
                    var n = {},
                        s = t.document,
                        o = t.GreenSockGlobals = t.GreenSockGlobals || t;
                    if (!o.TweenLite) {
                        var r, a, l, h, p, c = function (t) {
                                var e, i = t.split("."),
                                    n = o;
                                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                                return n
                            },
                            u = c("com.greensock"),
                            f = function (t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                            },
                            d = function () {},
                            m = function () {
                                var t = Object.prototype.toString,
                                    e = t.call([]);
                                return function (i) {
                                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                                }
                            }(),
                            _ = {},
                            g = function (i, s, r, a) {
                                this.sc = _[i] ? _[i].sc : [], _[i] = this, this.gsClass = null, this.func = r;
                                var l = [];
                                this.check = function (h) {
                                    for (var p, u, f, d, m = s.length, y = m; --m > -1;)(p = _[s[m]] || new g(s[m], [])).gsClass ? (l[m] = p.gsClass, y--) : h && p.sc.push(this);
                                    if (0 === y && r) {
                                        if (u = ("com.greensock." + i).split("."), f = u.pop(), d = c(u.join("."))[f] = this.gsClass = r.apply(r, l), a)
                                            if (o[f] = n[f] = d, void 0 !== e && e.exports)
                                                if ("TweenMax" === i) {
                                                    e.exports = n.TweenMax = d;
                                                    for (m in n) d[m] = n[m]
                                                } else n.TweenMax && (n.TweenMax[f] = d);
                                        else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function () {
                                            return d
                                        });
                                        for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                                    }
                                }, this.check(!0)
                            },
                            y = t._gsDefine = function (t, e, i, n) {
                                return new g(t, e, i, n)
                            },
                            v = u._class = function (t, e, i) {
                                return e = e || function () {}, y(t, [], function () {
                                    return e
                                }, i), e
                            };
                        y.globals = o;
                        var b = [0, 0, 1, 1],
                            w = v("easing.Ease", function (t, e, i, n) {
                                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? b.concat(e) : b
                            }, !0),
                            x = w.map = {},
                            T = w.register = function (t, e, i, n) {
                                for (var s, o, r, a, l = e.split(","), h = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                                    for (o = l[h], s = n ? v("easing." + o, null, !0) : u.easing[o] || {}, r = p.length; --r > -1;) a = p[r], x[o + "." + a] = x[a + o] = s[a] = t.getRatio ? t : t[a] || new t
                            };
                        for (l = w.prototype, l._calcEnd = !1, l.getRatio = function (t) {
                                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                                var e = this._type,
                                    i = this._power,
                                    n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                            }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = r.length; --a > -1;) l = r[a] + ",Power" + a, T(new w(null, null, 1, a), l, "easeOut", !0), T(new w(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), T(new w(null, null, 3, a), l, "easeInOut");
                        x.linear = u.easing.Linear.easeIn, x.swing = u.easing.Quad.easeInOut;
                        var S = v("events.EventDispatcher", function (t) {
                            this._listeners = {}, this._eventTarget = t || this
                        });
                        l = S.prototype, l.addEventListener = function (t, e, i, n, s) {
                            s = s || 0;
                            var o, r, a = this._listeners[t],
                                l = 0;
                            for (this !== h || p || h.wake(), null == a && (this._listeners[t] = a = []), r = a.length; --r > -1;) o = a[r], o.c === e && o.s === i ? a.splice(r, 1) : 0 === l && o.pr < s && (l = r + 1);
                            a.splice(l, 0, {
                                c: e,
                                s: i,
                                up: n,
                                pr: s
                            })
                        }, l.removeEventListener = function (t, e) {
                            var i, n = this._listeners[t];
                            if (n)
                                for (i = n.length; --i > -1;)
                                    if (n[i].c === e) return void n.splice(i, 1)
                        }, l.dispatchEvent = function (t) {
                            var e, i, n, s = this._listeners[t];
                            if (s)
                                for (e = s.length, e > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(n = s[e]) && (n.up ? n.c.call(n.s || i, {
                                    type: t,
                                    target: i
                                }) : n.c.call(n.s || i))
                        };
                        var I = t.requestAnimationFrame,
                            O = t.cancelAnimationFrame,
                            C = Date.now || function () {
                                return (new Date).getTime()
                            },
                            P = C();
                        for (r = ["ms", "moz", "webkit", "o"], a = r.length; --a > -1 && !I;) I = t[r[a] + "RequestAnimationFrame"], O = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
                        v("Ticker", function (t, e) {
                            var i, n, o, r, a, l = this,
                                c = C(),
                                u = !(!1 === e || !I) && "auto",
                                f = 500,
                                m = 33,
                                _ = function (t) {
                                    var e, s, h = C() - P;
                                    h > f && (c += h - m), P += h, l.time = (P - c) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= r ? .004 : r - e), s = !0), !0 !== t && (o = n(_)), s && l.dispatchEvent("tick")
                                };
                            S.call(l), l.time = l.frame = 0, l.tick = function () {
                                _(!0)
                            }, l.lagSmoothing = function (t, e) {
                                if (!arguments.length) return f < 1e10;
                                f = t || 1e10, m = Math.min(e, f, 0)
                            }, l.sleep = function () {
                                null != o && (u && O ? O(o) : clearTimeout(o), n = d, o = null, l === h && (p = !1))
                            }, l.wake = function (t) {
                                null !== o ? l.sleep() : t ? c += -P + (P = C()) : l.frame > 10 && (P = C() - f + 5), n = 0 === i ? d : u && I ? I : function (t) {
                                    return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                                }, l === h && (p = !0), _(2)
                            }, l.fps = function (t) {
                                if (!arguments.length) return i;
                                i = t, r = 1 / (i || 60), a = this.time + r, l.wake()
                            }, l.useRAF = function (t) {
                                if (!arguments.length) return u;
                                l.sleep(), u = t, l.fps(i)
                            }, l.fps(t), setTimeout(function () {
                                "auto" === u && l.frame < 5 && "hidden" !== (s || {}).visibilityState && l.useRAF(!1)
                            }, 1500)
                        }), l = u.Ticker.prototype = new u.events.EventDispatcher, l.constructor = u.Ticker;
                        var k = v("core.Animation", function (t, e) {
                            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, U) {
                                p || h.wake();
                                var i = this.vars.useFrames ? Q : U;
                                i.add(this, i._time), this.vars.paused && this.paused(!0)
                            }
                        });
                        h = k.ticker = new u.Ticker, l = k.prototype, l._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
                        var A = function () {
                            p && C() - P > 2e3 && ("hidden" !== (s || {}).visibilityState || !h.lagSmoothing()) && h.wake();
                            var t = setTimeout(A, 2e3);
                            t.unref && t.unref()
                        };
                        A(), l.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                        }, l.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0)
                        }, l.resume = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!1)
                        }, l.seek = function (t, e) {
                            return this.totalTime(Number(t), !1 !== e)
                        }, l.restart = function (t, e) {
                            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                        }, l.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                        }, l.render = function (t, e, i) {}, l.invalidate = function () {
                            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                        }, l.isActive = function () {
                            var t, e = this._timeline,
                                i = this._startTime;
                            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                        }, l._enabled = function (t, e) {
                            return p || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                        }, l._kill = function (t, e) {
                            return this._enabled(!1, !1)
                        }, l.kill = function (t, e) {
                            return this._kill(t, e), this
                        }, l._uncache = function (t) {
                            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                            return this
                        }, l._swapSelfInParams = function (t) {
                            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                            return i
                        }, l._callback = function (t) {
                            var e = this.vars,
                                i = e[t],
                                n = e[t + "Params"],
                                s = e[t + "Scope"] || e.callbackScope || this;
                            switch (n ? n.length : 0) {
                                case 0:
                                    i.call(s);
                                    break;
                                case 1:
                                    i.call(s, n[0]);
                                    break;
                                case 2:
                                    i.call(s, n[0], n[1]);
                                    break;
                                default:
                                    i.apply(s, n)
                            }
                        }, l.eventCallback = function (t, e, i, n) {
                            if ("on" === (t || "").substr(0, 2)) {
                                var s = this.vars;
                                if (1 === arguments.length) return s[t];
                                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                            }
                            return this
                        }, l.delay = function (t) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                        }, l.duration = function (t) {
                            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        }, l.totalDuration = function (t) {
                            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                        }, l.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                        }, l.totalTime = function (t, e, i) {
                            if (p || h.wake(), !arguments.length) return this._totalTime;
                            if (this._timeline) {
                                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                    this._dirty && this.totalDuration();
                                    var n = this._totalDuration,
                                        s = this._timeline;
                                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                                        for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                                }
                                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (L.length && Z(), this.render(t, e, !1), L.length && Z())
                            }
                            return this
                        }, l.progress = l.totalProgress = function (t, e) {
                            var i = this.duration();
                            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                        }, l.startTime = function (t) {
                            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                        }, l.endTime = function (t) {
                            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                        }, l.timeScale = function (t) {
                            if (!arguments.length) return this._timeScale;
                            var e, i;
                            for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                            return this
                        }, l.reversed = function (t) {
                            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                        }, l.paused = function (t) {
                            if (!arguments.length) return this._paused;
                            var e, i, n = this._timeline;
                            return t != this._paused && n && (p || t || h.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                        };
                        var E = v("core.SimpleTimeline", function (t) {
                            k.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                        });
                        l = E.prototype = new k, l.constructor = E, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function (t, e, i, n) {
                            var s, o;
                            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                                for (o = t._startTime; s && s._startTime > o;) s = s._prev;
                            return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
                        }, l._remove = function (t, e) {
                            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                        }, l.render = function (t, e, i) {
                            var n, s = this._first;
                            for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
                        }, l.rawTime = function () {
                            return p || h.wake(), this._totalTime
                        };
                        var j = v("TweenLite", function (e, i, n) {
                                if (k.call(this, i, n), this.render = j.prototype.render, null == e) throw "Cannot tween a null target.";
                                this.target = e = "string" != typeof e ? e : j.selector(e) || e;
                                var s, o, r, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                    l = this.vars.overwrite;
                                if (this._overwrite = l = null == l ? $[j.defaultOverwrite] : "number" == typeof l ? l >> 0 : $[l], (a || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                                    for (this._targets = r = f(e), this._propLookup = [], this._siblings = [], s = 0; s < r.length; s++) o = r[s], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(s--, 1), this._targets = r = r.concat(f(o))) : (this._siblings[s] = J(o, this, !1), 1 === l && this._siblings[s].length > 1 && tt(o, this, null, 1, this._siblings[s])) : "string" == typeof (o = r[s--] = j.selector(o)) && r.splice(s + 1, 1) : r.splice(s--, 1);
                                else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                            }, !0),
                            R = function (e) {
                                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                            },
                            M = function (t, e) {
                                var i, n = {};
                                for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                                t.css = n
                            };
                        l = j.prototype = new k, l.constructor = j, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, j.version = "1.20.4", j.defaultEase = l._ease = new w(null, null, 1, 1), j.defaultOverwrite = "auto", j.ticker = h, j.autoSleep = 120, j.lagSmoothing = function (t, e) {
                            h.lagSmoothing(t, e)
                        }, j.selector = t.$ || t.jQuery || function (e) {
                            var i = t.$ || t.jQuery;
                            return i ? (j.selector = i, i(e)) : void 0 === s ? e : s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                        };
                        var L = [],
                            z = {},
                            F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                            N = /[\+-]=-?[\.\d]/,
                            B = function (t) {
                                for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                            },
                            D = function (t, e, i, n) {
                                var s, o, r, a, l, h, p, c = [],
                                    u = 0,
                                    f = "",
                                    d = 0;
                                for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(F) || [], o = e.match(F) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = o.length, a = 0; a < l; a++) p = o[a], h = e.substr(u, e.indexOf(p, u) - u), f += h || !a ? h : ",", u += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), p === s[a] || s.length <= a ? f += p : (f && (c.push(f), f = ""), r = parseFloat(s[a]), c.push(r), c._firstPT = {
                                    _next: c._firstPT,
                                    t: c,
                                    p: c.length - 1,
                                    s: r,
                                    c: ("=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * parseFloat(p.substr(2)) : parseFloat(p) - r) || 0,
                                    f: 0,
                                    m: d && d < 4 ? Math.round : 0
                                }), u += p.length;
                                return f += e.substr(u), f && c.push(f), c.setRatio = B, N.test(e) && (c.end = null), c
                            },
                            H = function (t, e, i, n, s, o, r, a, l) {
                                "function" == typeof n && (n = n(l || 0, t));
                                var h, p = typeof t[e],
                                    c = "function" !== p ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                    u = "get" !== i ? i : c ? r ? t[c](r) : t[c]() : t[e],
                                    f = "string" == typeof n && "=" === n.charAt(1),
                                    d = {
                                        t: t,
                                        p: e,
                                        s: u,
                                        f: "function" === p,
                                        pg: 0,
                                        n: s || e,
                                        m: o ? "function" == typeof o ? o : Math.round : 0,
                                        pr: 0,
                                        c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
                                    };
                                if (("number" != typeof u || "number" != typeof n && !f) && (r || isNaN(u) || !f && isNaN(n) || "boolean" == typeof u || "boolean" == typeof n ? (d.fp = r, h = D(u, f ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : n, a || j.defaultStringFilter, d), d = {
                                        t: h,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 2,
                                        pg: 0,
                                        n: s || e,
                                        pr: 0,
                                        m: 0
                                    }) : (d.s = parseFloat(u), f || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                            },
                            W = j._internals = {
                                isArray: m,
                                isSelector: R,
                                lazyTweens: L,
                                blobDif: D
                            },
                            V = j._plugins = {},
                            Y = W.tweenLookup = {},
                            X = 0,
                            q = W.reservedProps = {
                                ease: 1,
                                delay: 1,
                                overwrite: 1,
                                onComplete: 1,
                                onCompleteParams: 1,
                                onCompleteScope: 1,
                                useFrames: 1,
                                runBackwards: 1,
                                startAt: 1,
                                onUpdate: 1,
                                onUpdateParams: 1,
                                onUpdateScope: 1,
                                onStart: 1,
                                onStartParams: 1,
                                onStartScope: 1,
                                onReverseComplete: 1,
                                onReverseCompleteParams: 1,
                                onReverseCompleteScope: 1,
                                onRepeat: 1,
                                onRepeatParams: 1,
                                onRepeatScope: 1,
                                easeParams: 1,
                                yoyo: 1,
                                immediateRender: 1,
                                repeat: 1,
                                repeatDelay: 1,
                                data: 1,
                                paused: 1,
                                reversed: 1,
                                autoCSS: 1,
                                lazy: 1,
                                onOverwrite: 1,
                                callbackScope: 1,
                                stringFilter: 1,
                                id: 1,
                                yoyoEase: 1
                            },
                            $ = {
                                none: 0,
                                all: 1,
                                auto: 2,
                                concurrent: 3,
                                allOnStart: 4,
                                preexisting: 5,
                                true: 1,
                                false: 0
                            },
                            Q = k._rootFramesTimeline = new E,
                            U = k._rootTimeline = new E,
                            G = 30,
                            Z = W.lazyRender = function () {
                                var t, e = L.length;
                                for (z = {}; --e > -1;)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                                L.length = 0
                            };
                        U._startTime = h.time, Q._startTime = h.frame, U._active = Q._active = !0, setTimeout(Z, 1), k._updateRoot = j.render = function () {
                            var t, e, i;
                            if (L.length && Z(), U.render((h.time - U._startTime) * U._timeScale, !1, !1), Q.render((h.frame - Q._startTime) * Q._timeScale, !1, !1), L.length && Z(), h.frame >= G) {
                                G = h.frame + (parseInt(j.autoSleep, 10) || 120);
                                for (i in Y) {
                                    for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                    0 === e.length && delete Y[i]
                                }
                                if ((!(i = U._first) || i._paused) && j.autoSleep && !Q._first && 1 === h._listeners.tick.length) {
                                    for (; i && i._paused;) i = i._next;
                                    i || h.sleep()
                                }
                            }
                        }, h.addEventListener("tick", k._updateRoot);
                        var J = function (t, e, i) {
                                var n, s, o = t._gsTweenID;
                                if (Y[o || (t._gsTweenID = o = "t" + X++)] || (Y[o] = {
                                        target: t,
                                        tweens: []
                                    }), e && (n = Y[o].tweens, n[s = n.length] = e, i))
                                    for (; --s > -1;) n[s] === e && n.splice(s, 1);
                                return Y[o].tweens
                            },
                            K = function (t, e, i, n) {
                                var s, o, r = t.vars.onOverwrite;
                                return r && (s = r(t, e, i, n)), r = j.onOverwrite, r && (o = r(t, e, i, n)), !1 !== s && !1 !== o
                            },
                            tt = function (t, e, i, n, s) {
                                var o, r, a, l;
                                if (1 === n || n >= 4) {
                                    for (l = s.length, o = 0; o < l; o++)
                                        if ((a = s[o]) !== e) a._gc || a._kill(null, t, e) && (r = !0);
                                        else if (5 === n) break;
                                    return r
                                }
                                var h, p = e._startTime + 1e-10,
                                    c = [],
                                    u = 0,
                                    f = 0 === e._duration;
                                for (o = s.length; --o > -1;)(a = s[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || et(e, 0, f), 0 === et(a, h, f) && (c[u++] = a)) : a._startTime <= p && a._startTime + a.totalDuration() / a._timeScale > p && ((f || !a._initted) && p - a._startTime <= 2e-10 || (c[u++] = a)));
                                for (o = u; --o > -1;)
                                    if (a = c[o], 2 === n && a._kill(i, t, e) && (r = !0), 2 !== n || !a._firstPT && a._initted) {
                                        if (2 !== n && !K(a, e)) continue;
                                        a._enabled(!1, !1) && (r = !0)
                                    } return r
                            },
                            et = function (t, e, i) {
                                for (var n = t._timeline, s = n._timeScale, o = t._startTime; n._timeline;) {
                                    if (o += n._startTime, s *= n._timeScale, n._paused) return -100;
                                    n = n._timeline
                                }
                                return o /= s, o > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / s) > e + 1e-10 ? 0 : o - e - 1e-10
                            };
                        l._init = function () {
                            var t, e, i, n, s, o, r = this.vars,
                                a = this._overwrittenProps,
                                l = this._duration,
                                h = !!r.immediateRender,
                                p = r.ease;
                            if (r.startAt) {
                                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                                for (n in r.startAt) s[n] = r.startAt[n];
                                if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== r.lazy, s.startAt = s.delay = null, s.onUpdate = r.onUpdate, s.onUpdateParams = r.onUpdateParams, s.onUpdateScope = r.onUpdateScope || r.callbackScope || this, this._startAt = j.to(this.target, 0, s), h)
                                    if (this._time > 0) this._startAt = null;
                                    else if (0 !== l) return
                            } else if (r.runBackwards && 0 !== l)
                                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                                else {
                                    0 !== this._time && (h = !1), i = {};
                                    for (n in r) q[n] && "autoCSS" !== n || (i[n] = r[n]);
                                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== r.lazy, i.immediateRender = h, this._startAt = j.to(this.target, 0, i), h) {
                                        if (0 === this._time) return
                                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                                } if (this._ease = p = p ? p instanceof w ? p : "function" == typeof p ? new w(p, r.easeParams) : x[p] || j.defaultEase : j.defaultEase, r.easeParams instanceof Array && p.config && (this._ease = p.config.apply(p, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                                for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                            if (e && j._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                            this._onUpdate = r.onUpdate, this._initted = !0
                        }, l._initProps = function (e, i, n, s, o) {
                            var r, a, l, h, p, c;
                            if (null == e) return !1;
                            z[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && V.css && !1 !== this.vars.autoCSS && M(this.vars, e);
                            for (r in this.vars)
                                if (c = this.vars[r], q[r]) c && (c instanceof Array || c.push && m(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                                else if (V[r] && (h = new V[r])._onInitTween(e, this.vars[r], this, o)) {
                                for (this._firstPT = p = {
                                        _next: this._firstPT,
                                        t: h,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 1,
                                        n: r,
                                        pg: 1,
                                        pr: h._priority,
                                        m: 0
                                    }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), p._next && (p._next._prev = p)
                            } else i[r] = H.call(this, e, r, "get", c, r, 0, null, this.vars.stringFilter, o);
                            return s && this._kill(s, e) ? this._initProps(e, i, n, s, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && tt(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), l)
                        }, l.render = function (t, e, i) {
                            var n, s, o, r, a = this._time,
                                l = this._duration,
                                h = this._rawPrevTime;
                            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = r = !e || t || h === t ? t : 1e-10);
                            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = r = !e || t || h === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                            else if (this._totalTime = this._time = t, this._easeType) {
                                var p = t / l,
                                    c = this._easeType,
                                    u = this._easePower;
                                (1 === c || 3 === c && p >= .5) && (p = 1 - p), 3 === c && (p *= 2), 1 === u ? p *= p : 2 === u ? p *= p * p : 3 === u ? p *= p * p * p : 4 === u && (p *= p * p * p * p), this.ratio = 1 === c ? 1 - p : 2 === c ? p : t / l < .5 ? p / 2 : 1 - p / 2
                            } else this.ratio = this._ease.getRatio(t / l);
                            if (this._time !== a || i) {
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, L.push(this), void(this._lazy = [t, e]);
                                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                }
                                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== r && (this._rawPrevTime = 0)))
                            }
                        }, l._kill = function (t, e, i) {
                            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                            e = "string" != typeof e ? e || this._targets || this.target : j.selector(e) || e;
                            var n, s, o, r, a, l, h, p, c, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                            if ((m(e) || R(e)) && "number" != typeof e[0])
                                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                            else {
                                if (this._targets) {
                                    for (n = this._targets.length; --n > -1;)
                                        if (e === this._targets[n]) {
                                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                            break
                                        }
                                } else {
                                    if (e !== this.target) return !1;
                                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                                }
                                if (a) {
                                    if (h = t || a, p = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (j.onOverwrite || this.vars.onOverwrite)) {
                                        for (o in h) a[o] && (c || (c = []), c.push(o));
                                        if ((c || !t) && !K(this, i, e, c)) return !1
                                    }
                                    for (o in h)(r = a[o]) && (u && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, l = !0), r.pg && r.t._kill(h) && (l = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[o]), p && (s[o] = 1);
                                    !this._firstPT && this._initted && this._enabled(!1, !1)
                                }
                            }
                            return l
                        }, l.invalidate = function () {
                            return this._notifyPluginsOfEnabled && j._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], k.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                        }, l._enabled = function (t, e) {
                            if (p || h.wake(), t && this._gc) {
                                var i, n = this._targets;
                                if (n)
                                    for (i = n.length; --i > -1;) this._siblings[i] = J(n[i], this, !0);
                                else this._siblings = J(this.target, this, !0)
                            }
                            return k.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && j._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                        }, j.to = function (t, e, i) {
                            return new j(t, e, i)
                        }, j.from = function (t, e, i) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new j(t, e, i)
                        }, j.fromTo = function (t, e, i, n) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new j(t, e, n)
                        }, j.delayedCall = function (t, e, i, n, s) {
                            return new j(e, 0, {
                                delay: t,
                                onComplete: e,
                                onCompleteParams: i,
                                callbackScope: n,
                                onReverseComplete: e,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                lazy: !1,
                                useFrames: s,
                                overwrite: 0
                            })
                        }, j.set = function (t, e) {
                            return new j(t, 0, e)
                        }, j.getTweensOf = function (t, e) {
                            if (null == t) return [];
                            t = "string" != typeof t ? t : j.selector(t) || t;
                            var i, n, s, o;
                            if ((m(t) || R(t)) && "number" != typeof t[0]) {
                                for (i = t.length, n = []; --i > -1;) n = n.concat(j.getTweensOf(t[i], e));
                                for (i = n.length; --i > -1;)
                                    for (o = n[i], s = i; --s > -1;) o === n[s] && n.splice(i, 1)
                            } else if (t._gsTweenID)
                                for (n = J(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                            return n || []
                        }, j.killTweensOf = j.killDelayedCallsTo = function (t, e, i) {
                            "object" == typeof e && (i = e, e = !1);
                            for (var n = j.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
                        };
                        var it = v("plugins.TweenPlugin", function (t, e) {
                            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype
                        }, !0);
                        if (l = it.prototype, it.version = "1.19.0", it.API = 2, l._firstPT = null, l._addTween = H, l.setRatio = B, l._kill = function (t) {
                                var e, i = this._overwriteProps,
                                    n = this._firstPT;
                                if (null != t[this._propName]) this._overwriteProps = [];
                                else
                                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                                return !1
                            }, l._mod = l._roundProps = function (t) {
                                for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                            }, j._onPluginEvent = function (t, e) {
                                var i, n, s, o, r, a = e._firstPT;
                                if ("_onInitAllProps" === t) {
                                    for (; a;) {
                                        for (r = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                                        (a._prev = n ? n._prev : o) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : o = a, a = r
                                    }
                                    a = e._firstPT = s
                                }
                                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                                return i
                            }, it.activate = function (t) {
                                for (var e = t.length; --e > -1;) t[e].API === it.API && (V[(new t[e])._propName] = t[e]);
                                return !0
                            }, y.plugin = function (t) {
                                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                                var e, i = t.propName,
                                    n = t.priority || 0,
                                    s = t.overwriteProps,
                                    o = {
                                        init: "_onInitTween",
                                        set: "setRatio",
                                        kill: "_kill",
                                        round: "_mod",
                                        mod: "_mod",
                                        initAll: "_onInitAllProps"
                                    },
                                    r = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                                        it.call(this, i, n), this._overwriteProps = s || []
                                    }, !0 === t.global),
                                    a = r.prototype = new it(i);
                                a.constructor = r, r.API = t.API;
                                for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                                return r.version = t.version, it.activate([r]), r
                            }, r = t._gsQueue) {
                            for (a = 0; a < r.length; a++) r[a]();
                            for (l in _) _[l].func || t.console.log("GSAP encountered missing dependency: " + l)
                        }
                        p = !1
                    }
                }(void 0 !== e && e.exports && void 0 !== t ? t : this || window)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    71: [function (t, e, i) {
        ! function (t, i, n, s) {
            "use strict";

            function o(t, e, i) {
                return setTimeout(p(t, i), e)
            }

            function r(t, e, i) {
                return !!Array.isArray(t) && (a(t, i[e], i), !0)
            }

            function a(t, e, i) {
                var n;
                if (t)
                    if (t.forEach) t.forEach(e, i);
                    else if (t.length !== s)
                    for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
                else
                    for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
            }

            function l(e, i, n) {
                var s = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
                return function () {
                    var i = new Error("get-stack-trace"),
                        n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        o = t.console && (t.console.warn || t.console.log);
                    return o && o.call(t.console, s, n), e.apply(this, arguments)
                }
            }

            function h(t, e, i) {
                var n, s = e.prototype;
                n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && ct(n, i)
            }

            function p(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }

            function c(t, e) {
                return typeof t == dt ? t.apply(e ? e[0] || s : s, e) : t
            }

            function u(t, e) {
                return t === s ? e : t
            }

            function f(t, e, i) {
                a(g(e), function (e) {
                    t.addEventListener(e, i, !1)
                })
            }

            function d(t, e, i) {
                a(g(e), function (e) {
                    t.removeEventListener(e, i, !1)
                })
            }

            function m(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function _(t, e) {
                return t.indexOf(e) > -1
            }

            function g(t) {
                return t.trim().split(/\s+/g)
            }

            function y(t, e, i) {
                if (t.indexOf && !i) return t.indexOf(e);
                for (var n = 0; n < t.length;) {
                    if (i && t[n][i] == e || !i && t[n] === e) return n;
                    n++
                }
                return -1
            }

            function v(t) {
                return Array.prototype.slice.call(t, 0)
            }

            function b(t, e, i) {
                for (var n = [], s = [], o = 0; o < t.length;) {
                    var r = e ? t[o][e] : t[o];
                    y(s, r) < 0 && n.push(t[o]), s[o] = r, o++
                }
                return i && (n = e ? n.sort(function (t, i) {
                    return t[e] > i[e]
                }) : n.sort()), n
            }

            function w(t, e) {
                for (var i, n, o = e[0].toUpperCase() + e.slice(1), r = 0; r < ut.length;) {
                    if (i = ut[r], (n = i ? i + o : e) in t) return n;
                    r++
                }
                return s
            }

            function x() {
                return bt++
            }

            function T(e) {
                var i = e.ownerDocument || e;
                return i.defaultView || i.parentWindow || t
            }

            function S(t, e) {
                var i = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                    c(t.options.enable, [t]) && i.handler(e)
                }, this.init()
            }

            function I(t) {
                var e = t.options.inputClass;
                return new(e || (Tt ? B : St ? W : xt ? Y : N))(t, O)
            }

            function O(t, e, i) {
                var n = i.pointers.length,
                    s = i.changedPointers.length,
                    o = e & Ot && n - s == 0,
                    r = e & (Pt | kt) && n - s == 0;
                i.isFirst = !!o, i.isFinal = !!r, o && (t.session = {}), i.eventType = e, C(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
            }

            function C(t, e) {
                var i = t.session,
                    n = e.pointers,
                    s = n.length;
                i.firstInput || (i.firstInput = A(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = A(e) : 1 === s && (i.firstMultiple = !1);
                var o = i.firstInput,
                    r = i.firstMultiple,
                    a = r ? r.center : o.center,
                    l = e.center = E(n);
                e.timeStamp = gt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = L(a, l), e.distance = M(a, l), P(i, e), e.offsetDirection = R(e.deltaX, e.deltaY);
                var h = j(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = h.x, e.overallVelocityY = h.y, e.overallVelocity = _t(h.x) > _t(h.y) ? h.x : h.y, e.scale = r ? F(r.pointers, n) : 1, e.rotation = r ? z(r.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, k(i, e);
                var p = t.element;
                m(e.srcEvent.target, p) && (p = e.srcEvent.target), e.target = p
            }

            function P(t, e) {
                var i = e.center,
                    n = t.offsetDelta || {},
                    s = t.prevDelta || {},
                    o = t.prevInput || {};
                e.eventType !== Ot && o.eventType !== Pt || (s = t.prevDelta = {
                    x: o.deltaX || 0,
                    y: o.deltaY || 0
                }, n = t.offsetDelta = {
                    x: i.x,
                    y: i.y
                }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
            }

            function k(t, e) {
                var i, n, o, r, a = t.lastInterval || e,
                    l = e.timeStamp - a.timeStamp;
                if (e.eventType != kt && (l > It || a.velocity === s)) {
                    var h = e.deltaX - a.deltaX,
                        p = e.deltaY - a.deltaY,
                        c = j(l, h, p);
                    n = c.x, o = c.y, i = _t(c.x) > _t(c.y) ? c.x : c.y, r = R(h, p), t.lastInterval = e
                } else i = a.velocity, n = a.velocityX, o = a.velocityY, r = a.direction;
                e.velocity = i, e.velocityX = n, e.velocityY = o, e.direction = r
            }

            function A(t) {
                for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                    clientX: mt(t.pointers[i].clientX),
                    clientY: mt(t.pointers[i].clientY)
                }, i++;
                return {
                    timeStamp: gt(),
                    pointers: e,
                    center: E(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                }
            }

            function E(t) {
                var e = t.length;
                if (1 === e) return {
                    x: mt(t[0].clientX),
                    y: mt(t[0].clientY)
                };
                for (var i = 0, n = 0, s = 0; s < e;) i += t[s].clientX, n += t[s].clientY, s++;
                return {
                    x: mt(i / e),
                    y: mt(n / e)
                }
            }

            function j(t, e, i) {
                return {
                    x: e / t || 0,
                    y: i / t || 0
                }
            }

            function R(t, e) {
                return t === e ? At : _t(t) >= _t(e) ? t < 0 ? Et : jt : e < 0 ? Rt : Mt
            }

            function M(t, e, i) {
                i || (i = Nt);
                var n = e[i[0]] - t[i[0]],
                    s = e[i[1]] - t[i[1]];
                return Math.sqrt(n * n + s * s)
            }

            function L(t, e, i) {
                i || (i = Nt);
                var n = e[i[0]] - t[i[0]],
                    s = e[i[1]] - t[i[1]];
                return 180 * Math.atan2(s, n) / Math.PI
            }

            function z(t, e) {
                return L(e[1], e[0], Bt) + L(t[1], t[0], Bt)
            }

            function F(t, e) {
                return M(e[0], e[1], Bt) / M(t[0], t[1], Bt)
            }

            function N() {
                this.evEl = Ht, this.evWin = Wt, this.pressed = !1, S.apply(this, arguments)
            }

            function B() {
                this.evEl = Xt, this.evWin = qt, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            function D() {
                this.evTarget = Qt, this.evWin = Ut, this.started = !1, S.apply(this, arguments)
            }

            function H(t, e) {
                var i = v(t.touches),
                    n = v(t.changedTouches);
                return e & (Pt | kt) && (i = b(i.concat(n), "identifier", !0)), [i, n]
            }

            function W() {
                this.evTarget = Zt, this.targetIds = {}, S.apply(this, arguments)
            }

            function V(t, e) {
                var i = v(t.touches),
                    n = this.targetIds;
                if (e & (Ot | Ct) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                var s, o, r = v(t.changedTouches),
                    a = [],
                    l = this.target;
                if (o = i.filter(function (t) {
                        return m(t.target, l)
                    }), e === Ot)
                    for (s = 0; s < o.length;) n[o[s].identifier] = !0, s++;
                for (s = 0; s < r.length;) n[r[s].identifier] && a.push(r[s]), e & (Pt | kt) && delete n[r[s].identifier], s++;
                return a.length ? [b(o.concat(a), "identifier", !0), a] : void 0
            }

            function Y() {
                S.apply(this, arguments);
                var t = p(this.handler, this);
                this.touch = new W(this.manager, t), this.mouse = new N(this.manager, t), this.primaryTouch = null, this.lastTouches = []
            }

            function X(t, e) {
                t & Ot ? (this.primaryTouch = e.changedPointers[0].identifier, q.call(this, e)) : t & (Pt | kt) && q.call(this, e)
            }

            function q(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    this.lastTouches.push(i);
                    var n = this.lastTouches,
                        s = function () {
                            var t = n.indexOf(i);
                            t > -1 && n.splice(t, 1)
                        };
                    setTimeout(s, Jt)
                }
            }

            function $(t) {
                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                    var s = this.lastTouches[n],
                        o = Math.abs(e - s.x),
                        r = Math.abs(i - s.y);
                    if (o <= Kt && r <= Kt) return !0
                }
                return !1
            }

            function Q(t, e) {
                this.manager = t, this.set(e)
            }

            function U(t) {
                if (_(t, se)) return se;
                var e = _(t, oe),
                    i = _(t, re);
                return e && i ? se : e || i ? e ? oe : re : _(t, ne) ? ne : ie
            }

            function G(t) {
                this.options = ct({}, this.defaults, t || {}), this.id = x(), this.manager = null, this.options.enable = u(this.options.enable, !0), this.state = le, this.simultaneous = {}, this.requireFail = []
            }

            function Z(t) {
                return t & fe ? "cancel" : t & ce ? "end" : t & pe ? "move" : t & he ? "start" : ""
            }

            function J(t) {
                return t == Mt ? "down" : t == Rt ? "up" : t == Et ? "left" : t == jt ? "right" : ""
            }

            function K(t, e) {
                var i = e.manager;
                return i ? i.get(t) : t
            }

            function tt() {
                G.apply(this, arguments)
            }

            function et() {
                tt.apply(this, arguments), this.pX = null, this.pY = null
            }

            function it() {
                tt.apply(this, arguments)
            }

            function nt() {
                G.apply(this, arguments), this._timer = null, this._input = null
            }

            function st() {
                tt.apply(this, arguments)
            }

            function ot() {
                tt.apply(this, arguments)
            }

            function rt() {
                G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function at(t, e) {
                return e = e || {}, e.recognizers = u(e.recognizers, at.defaults.preset), new lt(t, e)
            }

            function lt(t, e) {
                this.options = ct({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = I(this), this.touchAction = new Q(this, this.options.touchAction), ht(this, !0), a(this.options.recognizers, function (t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }, this)
            }

            function ht(t, e) {
                var i = t.element;
                if (i.style) {
                    var n;
                    a(t.options.cssProps, function (s, o) {
                        n = w(i.style, o), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = s) : i.style[n] = t.oldCssProps[n] || ""
                    }), e || (t.oldCssProps = {})
                }
            }

            function pt(t, e) {
                var n = i.createEvent("Event");
                n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
            }
            var ct, ut = ["", "webkit", "Moz", "MS", "ms", "o"],
                ft = i.createElement("div"),
                dt = "function",
                mt = Math.round,
                _t = Math.abs,
                gt = Date.now;
            ct = "function" != typeof Object.assign ? function (t) {
                if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (n !== s && null !== n)
                        for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
                }
                return e
            } : Object.assign;
            var yt = l(function (t, e, i) {
                    for (var n = Object.keys(e), o = 0; o < n.length;)(!i || i && t[n[o]] === s) && (t[n[o]] = e[n[o]]), o++;
                    return t
                }, "extend", "Use `assign`."),
                vt = l(function (t, e) {
                    return yt(t, e, !0)
                }, "merge", "Use `assign`."),
                bt = 1,
                wt = /mobile|tablet|ip(ad|hone|od)|android/i,
                xt = "ontouchstart" in t,
                Tt = w(t, "PointerEvent") !== s,
                St = xt && wt.test(navigator.userAgent),
                It = 25,
                Ot = 1,
                Ct = 2,
                Pt = 4,
                kt = 8,
                At = 1,
                Et = 2,
                jt = 4,
                Rt = 8,
                Mt = 16,
                Lt = Et | jt,
                zt = Rt | Mt,
                Ft = Lt | zt,
                Nt = ["x", "y"],
                Bt = ["clientX", "clientY"];
            S.prototype = {
                handler: function () {},
                init: function () {
                    this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(T(this.element), this.evWin, this.domHandler)
                },
                destroy: function () {
                    this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(T(this.element), this.evWin, this.domHandler)
                }
            };
            var Dt = {
                    mousedown: Ot,
                    mousemove: Ct,
                    mouseup: Pt
                },
                Ht = "mousedown",
                Wt = "mousemove mouseup";
            h(N, S, {
                handler: function (t) {
                    var e = Dt[t.type];
                    e & Ot && 0 === t.button && (this.pressed = !0), e & Ct && 1 !== t.which && (e = Pt), this.pressed && (e & Pt && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: "mouse",
                        srcEvent: t
                    }))
                }
            });
            var Vt = {
                    pointerdown: Ot,
                    pointermove: Ct,
                    pointerup: Pt,
                    pointercancel: kt,
                    pointerout: kt
                },
                Yt = {
                    2: "touch",
                    3: "pen",
                    4: "mouse",
                    5: "kinect"
                },
                Xt = "pointerdown",
                qt = "pointermove pointerup pointercancel";
            t.MSPointerEvent && !t.PointerEvent && (Xt = "MSPointerDown", qt = "MSPointerMove MSPointerUp MSPointerCancel"), h(B, S, {
                handler: function (t) {
                    var e = this.store,
                        i = !1,
                        n = t.type.toLowerCase().replace("ms", ""),
                        s = Vt[n],
                        o = Yt[t.pointerType] || t.pointerType,
                        r = "touch" == o,
                        a = y(e, t.pointerId, "pointerId");
                    s & Ot && (0 === t.button || r) ? a < 0 && (e.push(t), a = e.length - 1) : s & (Pt | kt) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, s, {
                        pointers: e,
                        changedPointers: [t],
                        pointerType: o,
                        srcEvent: t
                    }), i && e.splice(a, 1))
                }
            });
            var $t = {
                    touchstart: Ot,
                    touchmove: Ct,
                    touchend: Pt,
                    touchcancel: kt
                },
                Qt = "touchstart",
                Ut = "touchstart touchmove touchend touchcancel";
            h(D, S, {
                handler: function (t) {
                    var e = $t[t.type];
                    if (e === Ot && (this.started = !0), this.started) {
                        var i = H.call(this, t, e);
                        e & (Pt | kt) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: "touch",
                            srcEvent: t
                        })
                    }
                }
            });
            var Gt = {
                    touchstart: Ot,
                    touchmove: Ct,
                    touchend: Pt,
                    touchcancel: kt
                },
                Zt = "touchstart touchmove touchend touchcancel";
            h(W, S, {
                handler: function (t) {
                    var e = Gt[t.type],
                        i = V.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: t
                    })
                }
            });
            var Jt = 2500,
                Kt = 25;
            h(Y, S, {
                handler: function (t, e, i) {
                    var n = "touch" == i.pointerType,
                        s = "mouse" == i.pointerType;
                    if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (n) X.call(this, e, i);
                        else if (s && $.call(this, i)) return;
                        this.callback(t, e, i)
                    }
                },
                destroy: function () {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var te = w(ft.style, "touchAction"),
                ee = te !== s,
                ie = "auto",
                ne = "manipulation",
                se = "none",
                oe = "pan-x",
                re = "pan-y",
                ae = function () {
                    if (!ee) return !1;
                    var e = {},
                        i = t.CSS && t.CSS.supports;
                    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
                        e[n] = !i || t.CSS.supports("touch-action", n)
                    }), e
                }();
            Q.prototype = {
                set: function (t) {
                    "compute" == t && (t = this.compute()), ee && this.manager.element.style && ae[t] && (this.manager.element.style[te] = t), this.actions = t.toLowerCase().trim()
                },
                update: function () {
                    this.set(this.manager.options.touchAction)
                },
                compute: function () {
                    var t = [];
                    return a(this.manager.recognizers, function (e) {
                        c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    }), U(t.join(" "))
                },
                preventDefaults: function (t) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) return void e.preventDefault();
                    var n = this.actions,
                        s = _(n, se) && !ae[se],
                        o = _(n, re) && !ae[re],
                        r = _(n, oe) && !ae[oe];
                    if (s) {
                        var a = 1 === t.pointers.length,
                            l = t.distance < 2,
                            h = t.deltaTime < 250;
                        if (a && l && h) return
                    }
                    return r && o ? void 0 : s || o && i & Lt || r && i & zt ? this.preventSrc(e) : void 0
                },
                preventSrc: function (t) {
                    this.manager.session.prevented = !0, t.preventDefault()
                }
            };
            var le = 1,
                he = 2,
                pe = 4,
                ce = 8,
                ue = ce,
                fe = 16;
            G.prototype = {
                defaults: {},
                set: function (t) {
                    return ct(this.options, t), this.manager && this.manager.touchAction.update(), this
                },
                recognizeWith: function (t) {
                    if (r(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                },
                dropRecognizeWith: function (t) {
                    return r(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
                },
                requireFailure: function (t) {
                    if (r(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return t = K(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
                },
                dropRequireFailure: function (t) {
                    if (r(t, "dropRequireFailure", this)) return this;
                    t = K(t, this);
                    var e = y(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                },
                hasRequireFailures: function () {
                    return this.requireFail.length > 0
                },
                canRecognizeWith: function (t) {
                    return !!this.simultaneous[t.id]
                },
                emit: function (t) {
                    function e(e) {
                        i.manager.emit(e, t)
                    }
                    var i = this,
                        n = this.state;
                    n < ce && e(i.options.event + Z(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ce && e(i.options.event + Z(n))
                },
                tryEmit: function (t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = 32
                },
                canEmit: function () {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (32 | le))) return !1;
                        t++
                    }
                    return !0
                },
                recognize: function (t) {
                    var e = ct({}, t);
                    if (!c(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                    this.state & (ue | fe | 32) && (this.state = le), this.state = this.process(e), this.state & (he | pe | ce | fe) && this.tryEmit(e)
                },
                process: function (t) {},
                getTouchAction: function () {},
                reset: function () {}
            }, h(tt, G, {
                defaults: {
                    pointers: 1
                },
                attrTest: function (t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e
                },
                process: function (t) {
                    var e = this.state,
                        i = t.eventType,
                        n = e & (he | pe),
                        s = this.attrTest(t);
                    return n && (i & kt || !s) ? e | fe : n || s ? i & Pt ? e | ce : e & he ? e | pe : he : 32
                }
            }), h(et, tt, {
                defaults: {
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: Ft
                },
                getTouchAction: function () {
                    var t = this.options.direction,
                        e = [];
                    return t & Lt && e.push(re), t & zt && e.push(oe), e
                },
                directionTest: function (t) {
                    var e = this.options,
                        i = !0,
                        n = t.distance,
                        s = t.direction,
                        o = t.deltaX,
                        r = t.deltaY;
                    return s & e.direction || (e.direction & Lt ? (s = 0 === o ? At : o < 0 ? Et : jt, i = o != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === r ? At : r < 0 ? Rt : Mt, i = r != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
                },
                attrTest: function (t) {
                    return tt.prototype.attrTest.call(this, t) && (this.state & he || !(this.state & he) && this.directionTest(t))
                },
                emit: function (t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = J(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                }
            }), h(it, tt, {
                defaults: {
                    event: "pinch",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function () {
                    return [se]
                },
                attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & he)
                },
                emit: function (t) {
                    if (1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + e
                    }
                    this._super.emit.call(this, t)
                }
            }), h(nt, G, {
                defaults: {
                    event: "press",
                    pointers: 1,
                    time: 251,
                    threshold: 9
                },
                getTouchAction: function () {
                    return [ie]
                },
                process: function (t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        s = t.deltaTime > e.time;
                    if (this._input = t, !n || !i || t.eventType & (Pt | kt) && !s) this.reset();
                    else if (t.eventType & Ot) this.reset(), this._timer = o(function () {
                        this.state = ue, this.tryEmit()
                    }, e.time, this);
                    else if (t.eventType & Pt) return ue;
                    return 32
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function (t) {
                    this.state === ue && (t && t.eventType & Pt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = gt(), this.manager.emit(this.options.event, this._input)))
                }
            }), h(st, tt, {
                defaults: {
                    event: "rotate",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function () {
                    return [se]
                },
                attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & he)
                }
            }), h(ot, tt, {
                defaults: {
                    event: "swipe",
                    threshold: 10,
                    velocity: .3,
                    direction: Lt | zt,
                    pointers: 1
                },
                getTouchAction: function () {
                    return et.prototype.getTouchAction.call(this)
                },
                attrTest: function (t) {
                    var e, i = this.options.direction;
                    return i & (Lt | zt) ? e = t.overallVelocity : i & Lt ? e = t.overallVelocityX : i & zt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && _t(e) > this.options.velocity && t.eventType & Pt
                },
                emit: function (t) {
                    var e = J(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }
            }), h(rt, G, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                },
                getTouchAction: function () {
                    return [ne]
                },
                process: function (t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        s = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & Ot && 0 === this.count) return this.failTimeout();
                    if (n && s && i) {
                        if (t.eventType != Pt) return this.failTimeout();
                        var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
                            a = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                        this.pTime = t.timeStamp, this.pCenter = t.center, a && r ? this.count += 1 : this.count = 1, this._input = t;
                        if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = o(function () {
                            this.state = ue, this.tryEmit()
                        }, e.interval, this), he) : ue
                    }
                    return 32
                },
                failTimeout: function () {
                    return this._timer = o(function () {
                        this.state = 32
                    }, this.options.interval, this), 32
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function () {
                    this.state == ue && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), at.VERSION = "2.0.7", at.defaults = {
                domEvents: !1,
                touchAction: "compute",
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [
                    [st, {
                        enable: !1
                    }],
                    [it, {
                            enable: !1
                        },
                        ["rotate"]
                    ],
                    [ot, {
                        direction: Lt
                    }],
                    [et, {
                            direction: Lt
                        },
                        ["swipe"]
                    ],
                    [rt],
                    [rt, {
                            event: "doubletap",
                            taps: 2
                        },
                        ["tap"]
                    ],
                    [nt]
                ],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            lt.prototype = {
                set: function (t) {
                    return ct(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                },
                stop: function (t) {
                    this.session.stopped = t ? 2 : 1
                },
                recognize: function (t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        var i, n = this.recognizers,
                            s = e.curRecognizer;
                        (!s || s && s.state & ue) && (s = e.curRecognizer = null);
                        for (var o = 0; o < n.length;) i = n[o], 2 === e.stopped || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (he | pe | ce) && (s = e.curRecognizer = i), o++
                    }
                },
                get: function (t) {
                    if (t instanceof G) return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++)
                        if (e[i].options.event == t) return e[i];
                    return null
                },
                add: function (t) {
                    if (r(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                },
                remove: function (t) {
                    if (r(t, "remove", this)) return this;
                    if (t = this.get(t)) {
                        var e = this.recognizers,
                            i = y(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                    }
                    return this
                },
                on: function (t, e) {
                    if (t !== s && e !== s) {
                        var i = this.handlers;
                        return a(g(t), function (t) {
                            i[t] = i[t] || [], i[t].push(e)
                        }), this
                    }
                },
                off: function (t, e) {
                    if (t !== s) {
                        var i = this.handlers;
                        return a(g(t), function (t) {
                            e ? i[t] && i[t].splice(y(i[t], e), 1) : delete i[t]
                        }), this
                    }
                },
                emit: function (t, e) {
                    this.options.domEvents && pt(t, e);
                    var i = this.handlers[t] && this.handlers[t].slice();
                    if (i && i.length) {
                        e.type = t, e.preventDefault = function () {
                            e.srcEvent.preventDefault()
                        };
                        for (var n = 0; n < i.length;) i[n](e), n++
                    }
                },
                destroy: function () {
                    this.element && ht(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, ct(at, {
                INPUT_START: Ot,
                INPUT_MOVE: Ct,
                INPUT_END: Pt,
                INPUT_CANCEL: kt,
                STATE_POSSIBLE: le,
                STATE_BEGAN: he,
                STATE_CHANGED: pe,
                STATE_ENDED: ce,
                STATE_RECOGNIZED: ue,
                STATE_CANCELLED: fe,
                STATE_FAILED: 32,
                DIRECTION_NONE: At,
                DIRECTION_LEFT: Et,
                DIRECTION_RIGHT: jt,
                DIRECTION_UP: Rt,
                DIRECTION_DOWN: Mt,
                DIRECTION_HORIZONTAL: Lt,
                DIRECTION_VERTICAL: zt,
                DIRECTION_ALL: Ft,
                Manager: lt,
                Input: S,
                TouchAction: Q,
                TouchInput: W,
                MouseInput: N,
                PointerEventInput: B,
                TouchMouseInput: Y,
                SingleTouchInput: D,
                Recognizer: G,
                AttrRecognizer: tt,
                Tap: rt,
                Pan: et,
                Swipe: ot,
                Pinch: it,
                Rotate: st,
                Press: nt,
                on: f,
                off: d,
                each: a,
                merge: vt,
                extend: yt,
                assign: ct,
                inherit: h,
                bindFn: p,
                prefixed: w
            }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = at, "function" == typeof define && define.amd ? define(function () {
                return at
            }) : void 0 !== e && e.exports ? e.exports = at : t.Hammer = at
        }(window, document)
    }, {}],
    72: [function (t, e, i) {
        "function" == typeof Object.create ? e.exports = function (t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function (t, e) {
            t.super_ = e;
            var i = function () {};
            i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
        }
    }, {}],
    73: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = typeof t;
            return null !== t && ("object" === e || "function" === e)
        }
    }, {}],
    74: [function (t, e, i) {
        e.exports = Array.isArray || function (t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        }
    }, {}],
    75: [function (t, e, i) {
        ! function (t, i) {
            var n = function (t, e) {
                "use strict";
                if (e.getElementsByClassName) {
                    var i, n, s = e.documentElement,
                        o = t.Date,
                        r = t.HTMLPictureElement,
                        a = t.addEventListener,
                        l = t.setTimeout,
                        h = t.requestAnimationFrame || l,
                        p = t.requestIdleCallback,
                        c = /^picture$/i,
                        u = ["load", "error", "lazyincluded", "_lazyloaded"],
                        f = {},
                        d = Array.prototype.forEach,
                        m = function (t, e) {
                            return f[e] || (f[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), f[e].test(t.getAttribute("class") || "") && f[e]
                        },
                        _ = function (t, e) {
                            m(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e)
                        },
                        g = function (t, e) {
                            var i;
                            (i = m(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(i, " "))
                        },
                        y = function (t, e, i) {
                            var n = i ? "addEventListener" : "removeEventListener";
                            i && y(t, e), u.forEach(function (i) {
                                t[n](i, e)
                            })
                        },
                        v = function (t, n, s, o, r) {
                            var a = e.createEvent("CustomEvent");
                            return s || (s = {}), s.instance = i, a.initCustomEvent(n, !o, !r, s), t.dispatchEvent(a), a
                        },
                        b = function (e, i) {
                            var s;
                            !r && (s = t.picturefill || n.pf) ? s({
                                reevaluate: !0,
                                elements: [e]
                            }) : i && i.src && (e.src = i.src)
                        },
                        w = function (t, e) {
                            return (getComputedStyle(t, null) || {})[e]
                        },
                        x = function (t, e, i) {
                            for (i = i || t.offsetWidth; i < n.minSize && e && !t._lazysizesWidth;) i = e.offsetWidth, e = e.parentNode;
                            return i
                        },
                        T = function () {
                            var t, i, n = [],
                                s = [],
                                o = n,
                                r = function () {
                                    var e = o;
                                    for (o = n.length ? s : n, t = !0, i = !1; e.length;) e.shift()();
                                    t = !1
                                },
                                a = function (n, s) {
                                    t && !s ? n.apply(this, arguments) : (o.push(n), i || (i = !0, (e.hidden ? l : h)(r)))
                                };
                            return a._lsFlush = r, a
                        }(),
                        S = function (t, e) {
                            return e ? function () {
                                T(t)
                            } : function () {
                                var e = this,
                                    i = arguments;
                                T(function () {
                                    t.apply(e, i)
                                })
                            }
                        },
                        I = function (t) {
                            var e, i = 0,
                                s = n.throttleDelay,
                                r = n.ricTimeout,
                                a = function () {
                                    e = !1, i = o.now(), t()
                                },
                                h = p && r > 49 ? function () {
                                    p(a, {
                                        timeout: r
                                    }), r !== n.ricTimeout && (r = n.ricTimeout)
                                } : S(function () {
                                    l(a)
                                }, !0);
                            return function (t) {
                                var n;
                                (t = !0 === t) && (r = 33), e || (e = !0, n = s - (o.now() - i), n < 0 && (n = 0), t || n < 9 ? h() : l(h, n))
                            }
                        },
                        O = function (t) {
                            var e, i, n = function () {
                                    e = null, t()
                                },
                                s = function () {
                                    var t = o.now() - i;
                                    t < 99 ? l(s, 99 - t) : (p || n)(n)
                                };
                            return function () {
                                i = o.now(), e || (e = l(s, 99))
                            }
                        };
                    ! function () {
                        var e, i = {
                            lazyClass: "lazyload",
                            loadedClass: "lazyloaded",
                            loadingClass: "lazyloading",
                            preloadClass: "lazypreload",
                            errorClass: "lazyerror",
                            autosizesClass: "lazyautosizes",
                            srcAttr: "data-src",
                            srcsetAttr: "data-srcset",
                            sizesAttr: "data-sizes",
                            minSize: 40,
                            customMedia: {},
                            init: !0,
                            expFactor: 1.5,
                            hFac: .8,
                            loadMode: 2,
                            loadHidden: !0,
                            ricTimeout: 0,
                            throttleDelay: 125
                        };
                        n = t.lazySizesConfig || t.lazysizesConfig || {};
                        for (e in i) e in n || (n[e] = i[e]);
                        t.lazySizesConfig = n, l(function () {
                            n.init && k()
                        })
                    }();
                    var C = function () {
                            var r, h, p, u, f, x, C, k, A, E, j, R, M, L, z = /^img$/i,
                                F = /^iframe$/i,
                                N = "onscroll" in t && !/glebot/.test(navigator.userAgent),
                                B = 0,
                                D = 0,
                                H = -1,
                                W = function (t) {
                                    D--, t && t.target && y(t.target, W), (!t || D < 0 || !t.target) && (D = 0)
                                },
                                V = function (t, i) {
                                    var n, o = t,
                                        r = "hidden" == w(e.body, "visibility") || "hidden" != w(t, "visibility");
                                    for (k -= i, j += i, A -= i, E += i; r && (o = o.offsetParent) && o != e.body && o != s;)(r = (w(o, "opacity") || 1) > 0) && "visible" != w(o, "overflow") && (n = o.getBoundingClientRect(), r = E > n.left && A < n.right && j > n.top - 1 && k < n.bottom + 1);
                                    return r
                                },
                                Y = function () {
                                    var t, o, a, l, p, c, f, d, m, _ = i.elements;
                                    if ((u = n.loadMode) && D < 8 && (t = _.length)) {
                                        o = 0, H++, null == M && ("expand" in n || (n.expand = s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370), R = n.expand, M = R * n.expFactor), B < M && D < 1 && H > 2 && u > 2 && !e.hidden ? (B = M, H = 0) : B = u > 1 && H > 1 && D < 6 ? R : 0;
                                        for (; o < t; o++)
                                            if (_[o] && !_[o]._lazyRace)
                                                if (N)
                                                    if ((d = _[o].getAttribute("data-expand")) && (c = 1 * d) || (c = B), m !== c && (x = innerWidth + c * L, C = innerHeight + c, f = -1 * c, m = c), a = _[o].getBoundingClientRect(), (j = a.bottom) >= f && (k = a.top) <= C && (E = a.right) >= f * L && (A = a.left) <= x && (j || E || A || k) && (n.loadHidden || "hidden" != w(_[o], "visibility")) && (h && D < 3 && !d && (u < 3 || H < 4) || V(_[o], c))) {
                                                        if (J(_[o]), p = !0, D > 9) break
                                                    } else !p && h && !l && D < 4 && H < 4 && u > 2 && (r[0] || n.preloadAfterLoad) && (r[0] || !d && (j || E || A || k || "auto" != _[o].getAttribute(n.sizesAttr))) && (l = r[0] || _[o]);
                                        else J(_[o]);
                                        l && !p && J(l)
                                    }
                                },
                                X = I(Y),
                                q = function (t) {
                                    _(t.target, n.loadedClass), g(t.target, n.loadingClass), y(t.target, Q), v(t.target, "lazyloaded")
                                },
                                $ = S(q),
                                Q = function (t) {
                                    $({
                                        target: t.target
                                    })
                                },
                                U = function (t, e) {
                                    try {
                                        t.contentWindow.location.replace(e)
                                    } catch (i) {
                                        t.src = e
                                    }
                                },
                                G = function (t) {
                                    var e, i = t.getAttribute(n.srcsetAttr);
                                    (e = n.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i)
                                },
                                Z = S(function (t, e, i, s, o) {
                                    var r, a, h, u, f, m;
                                    (f = v(t, "lazybeforeunveil", e)).defaultPrevented || (s && (i ? _(t, n.autosizesClass) : t.setAttribute("sizes", s)), a = t.getAttribute(n.srcsetAttr), r = t.getAttribute(n.srcAttr), o && (h = t.parentNode, u = h && c.test(h.nodeName || "")), m = e.firesLoad || "src" in t && (a || r || u), f = {
                                        target: t
                                    }, m && (y(t, W, !0), clearTimeout(p), p = l(W, 2500), _(t, n.loadingClass), y(t, Q, !0)), u && d.call(h.getElementsByTagName("source"), G), a ? t.setAttribute("srcset", a) : r && !u && (F.test(t.nodeName) ? U(t, r) : t.src = r), o && (a || u) && b(t, {
                                        src: r
                                    })), t._lazyRace && delete t._lazyRace, g(t, n.lazyClass), T(function () {
                                        (!m || t.complete && t.naturalWidth > 1) && (m ? W(f) : D--, q(f))
                                    }, !0)
                                }),
                                J = function (t) {
                                    var e, i = z.test(t.nodeName),
                                        s = i && (t.getAttribute(n.sizesAttr) || t.getAttribute("sizes")),
                                        o = "auto" == s;
                                    (!o && h || !i || !t.getAttribute("src") && !t.srcset || t.complete || m(t, n.errorClass) || !m(t, n.lazyClass)) && (e = v(t, "lazyunveilread").detail, o && P.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, D++, Z(t, e, o, s, i))
                                },
                                K = function () {
                                    if (!h) {
                                        if (o.now() - f < 999) return void l(K, 999);
                                        var t = O(function () {
                                            n.loadMode = 3, X()
                                        });
                                        h = !0, n.loadMode = 3, X(), a("scroll", function () {
                                            3 == n.loadMode && (n.loadMode = 2), t()
                                        }, !0)
                                    }
                                };
                            return {
                                _: function () {
                                    f = o.now(), i.elements = e.getElementsByClassName(n.lazyClass), r = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass), L = n.hFac, a("scroll", X, !0), a("resize", X, !0), t.MutationObserver ? new MutationObserver(X).observe(s, {
                                        childList: !0,
                                        subtree: !0,
                                        attributes: !0
                                    }) : (s.addEventListener("DOMNodeInserted", X, !0), s.addEventListener("DOMAttrModified", X, !0), setInterval(X, 999)), a("hashchange", X, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (t) {
                                        e.addEventListener(t, X, !0)
                                    }), /d$|^c/.test(e.readyState) ? K() : (a("load", K), e.addEventListener("DOMContentLoaded", X), l(K, 2e4)), i.elements.length ? (Y(), T._lsFlush()) : X()
                                },
                                checkElems: X,
                                unveil: J
                            }
                        }(),
                        P = function () {
                            var t, i = S(function (t, e, i, n) {
                                    var s, o, r;
                                    if (t._lazysizesWidth = n, n += "px", t.setAttribute("sizes", n), c.test(e.nodeName || ""))
                                        for (s = e.getElementsByTagName("source"), o = 0, r = s.length; o < r; o++) s[o].setAttribute("sizes", n);
                                    i.detail.dataAttr || b(t, i.detail)
                                }),
                                s = function (t, e, n) {
                                    var s, o = t.parentNode;
                                    o && (n = x(t, o, n), s = v(t, "lazybeforesizes", {
                                        width: n,
                                        dataAttr: !!e
                                    }), s.defaultPrevented || (n = s.detail.width) && n !== t._lazysizesWidth && i(t, o, s, n))
                                },
                                o = function () {
                                    var e, i = t.length;
                                    if (i)
                                        for (e = 0; e < i; e++) s(t[e])
                                },
                                r = O(o);
                            return {
                                _: function () {
                                    t = e.getElementsByClassName(n.autosizesClass), a("resize", r)
                                },
                                checkElems: r,
                                updateElem: s
                            }
                        }(),
                        k = function () {
                            k.i || (k.i = !0, P._(), C._())
                        };
                    return i = {
                        cfg: n,
                        autoSizer: P,
                        loader: C,
                        init: k,
                        uP: b,
                        aC: _,
                        rC: g,
                        hC: m,
                        fire: v,
                        gW: x,
                        rAF: T
                    }
                }
            }(t, t.document);
            t.lazySizes = n, "object" == typeof e && e.exports && (e.exports = n)
        }(window)
    }, {}],
    76: [function (t, e, i) {
        function n(t, e) {
            for (var i, n = [], s = 0, o = 0, r = "", a = e && e.delimiter || "/"; null != (i = y.exec(t));) {
                var p = i[0],
                    c = i[1],
                    u = i.index;
                if (r += t.slice(o, u), o = u + p.length, c) r += c[1];
                else {
                    var f = t[o],
                        d = i[2],
                        m = i[3],
                        _ = i[4],
                        g = i[5],
                        v = i[6],
                        b = i[7];
                    r && (n.push(r), r = "");
                    var w = null != d && null != f && f !== d,
                        x = "+" === v || "*" === v,
                        T = "?" === v || "*" === v,
                        S = i[2] || a,
                        I = _ || g;
                    n.push({
                        name: m || s++,
                        prefix: d || "",
                        delimiter: S,
                        optional: T,
                        repeat: x,
                        partial: w,
                        asterisk: !!b,
                        pattern: I ? h(I) : b ? ".*" : "[^" + l(S) + "]+?"
                    })
                }
            }
            return o < t.length && (r += t.substr(o)), r && n.push(r), n
        }

        function s(t, e) {
            return a(n(t, e))
        }

        function o(t) {
            return encodeURI(t).replace(/[\/?#]/g, function (t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        function r(t) {
            return encodeURI(t).replace(/[?#]/g, function (t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        function a(t) {
            for (var e = new Array(t.length), i = 0; i < t.length; i++) "object" == typeof t[i] && (e[i] = new RegExp("^(?:" + t[i].pattern + ")$"));
            return function (i, n) {
                for (var s = "", a = i || {}, l = n || {}, h = l.pretty ? o : encodeURIComponent, p = 0; p < t.length; p++) {
                    var c = t[p];
                    if ("string" != typeof c) {
                        var u, f = a[c.name];
                        if (null == f) {
                            if (c.optional) {
                                c.partial && (s += c.prefix);
                                continue
                            }
                            throw new TypeError('Expected "' + c.name + '" to be defined')
                        }
                        if (g(f)) {
                            if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                            if (0 === f.length) {
                                if (c.optional) continue;
                                throw new TypeError('Expected "' + c.name + '" to not be empty')
                            }
                            for (var d = 0; d < f.length; d++) {
                                if (u = h(f[d]), !e[p].test(u)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(u) + "`");
                                s += (0 === d ? c.prefix : c.delimiter) + u
                            }
                        } else {
                            if (u = c.asterisk ? r(f) : h(f), !e[p].test(u)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + u + '"');
                            s += c.prefix + u
                        }
                    } else s += c
                }
                return s
            }
        }

        function l(t) {
            return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
        }

        function h(t) {
            return t.replace(/([=!:$\/()])/g, "\\$1")
        }

        function p(t, e) {
            return t.keys = e, t
        }

        function c(t) {
            return t.sensitive ? "" : "i"
        }

        function u(t, e) {
            var i = t.source.match(/\((?!\?)/g);
            if (i)
                for (var n = 0; n < i.length; n++) e.push({
                    name: n,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
            return p(t, e)
        }

        function f(t, e, i) {
            for (var n = [], s = 0; s < t.length; s++) n.push(_(t[s], e, i).source);
            return p(new RegExp("(?:" + n.join("|") + ")", c(i)), e)
        }

        function d(t, e, i) {
            return m(n(t, i), e, i)
        }

        function m(t, e, i) {
            g(e) || (i = e || i, e = []), i = i || {};
            for (var n = i.strict, s = !1 !== i.end, o = "", r = 0; r < t.length; r++) {
                var a = t[r];
                if ("string" == typeof a) o += l(a);
                else {
                    var h = l(a.prefix),
                        u = "(?:" + a.pattern + ")";
                    e.push(a), a.repeat && (u += "(?:" + h + u + ")*"), u = a.optional ? a.partial ? h + "(" + u + ")?" : "(?:" + h + "(" + u + "))?" : h + "(" + u + ")", o += u
                }
            }
            var f = l(i.delimiter || "/"),
                d = o.slice(-f.length) === f;
            return n || (o = (d ? o.slice(0, -f.length) : o) + "(?:" + f + "(?=$))?"), o += s ? "$" : n && d ? "" : "(?=" + f + "|$)", p(new RegExp("^" + o, c(i)), e)
        }

        function _(t, e, i) {
            return g(e) || (i = e || i, e = []), i = i || {}, t instanceof RegExp ? u(t, e) : g(t) ? f(t, e, i) : d(t, e, i)
        }
        var g = t("isarray");
        e.exports = _, e.exports.parse = n, e.exports.compile = s, e.exports.tokensToFunction = a, e.exports.tokensToRegExp = m;
        var y = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g")
    }, {
        isarray: 74
    }],
    77: [function (t, e, i) {
        (function (t) {
            (function () {
                var i, n, s, o, r, a;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                    return performance.now()
                } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
                    return (i() - r) / 1e6
                }, n = t.hrtime, i = function () {
                    var t;
                    return t = n(), 1e9 * t[0] + t[1]
                }, o = i(), a = 1e9 * t.uptime(), r = o - a) : Date.now ? (e.exports = function () {
                    return Date.now() - s
                }, s = Date.now()) : (e.exports = function () {
                    return (new Date).getTime() - s
                }, s = (new Date).getTime())
            }).call(this)
        }).call(this, t("_process"))
    }, {
        _process: 78
    }],
    78: [function (t, e, i) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(t) {
            if (c === setTimeout) return setTimeout(t, 0);
            if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
            try {
                return c(t, 0)
            } catch (e) {
                try {
                    return c.call(null, t, 0)
                } catch (e) {
                    return c.call(this, t, 0)
                }
            }
        }

        function r(t) {
            if (u === clearTimeout) return clearTimeout(t);
            if ((u === s || !u) && clearTimeout) return u = clearTimeout, clearTimeout(t);
            try {
                return u(t)
            } catch (e) {
                try {
                    return u.call(null, t)
                } catch (e) {
                    return u.call(this, t)
                }
            }
        }

        function a() {
            _ && d && (_ = !1, d.length ? m = d.concat(m) : g = -1, m.length && l())
        }

        function l() {
            if (!_) {
                var t = o(a);
                _ = !0;
                for (var e = m.length; e;) {
                    for (d = m, m = []; ++g < e;) d && d[g].run();
                    g = -1, e = m.length
                }
                d = null, _ = !1, r(t)
            }
        }

        function h(t, e) {
            this.fun = t, this.array = e
        }

        function p() {}
        var c, u, f = e.exports = {};
        ! function () {
            try {
                c = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                c = n
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                u = s
            }
        }();
        var d, m = [],
            _ = !1,
            g = -1;
        f.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            m.push(new h(t, e)), 1 !== m.length || _ || o(l)
        }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = p, f.addListener = p, f.once = p, f.off = p, f.removeListener = p, f.removeAllListeners = p, f.emit = p, f.prependListener = p, f.prependOnceListener = p, f.listeners = function (t) {
            return []
        }, f.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, f.cwd = function () {
            return "/"
        }, f.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, f.umask = function () {
            return 0
        }
    }, {}],
    79: [function (t, e, i) {
        (function (i) {
            for (var n = t("performance-now"), s = "undefined" == typeof window ? i : window, o = ["moz", "webkit"], r = "AnimationFrame", a = s["request" + r], l = s["cancel" + r] || s["cancelRequest" + r], h = 0; !a && h < o.length; h++) a = s[o[h] + "Request" + r], l = s[o[h] + "Cancel" + r] || s[o[h] + "CancelRequest" + r];
            if (!a || !l) {
                var p = 0,
                    c = 0,
                    u = [];
                a = function (t) {
                    if (0 === u.length) {
                        var e = n(),
                            i = Math.max(0, 1e3 / 60 - (e - p));
                        p = i + e, setTimeout(function () {
                            var t = u.slice(0);
                            u.length = 0;
                            for (var e = 0; e < t.length; e++)
                                if (!t[e].cancelled) try {
                                    t[e].callback(p)
                                } catch (t) {
                                    setTimeout(function () {
                                        throw t
                                    }, 0)
                                }
                        }, Math.round(i))
                    }
                    return u.push({
                        handle: ++c,
                        callback: t,
                        cancelled: !1
                    }), c
                }, l = function (t) {
                    for (var e = 0; e < u.length; e++) u[e].handle === t && (u[e].cancelled = !0)
                }
            }
            e.exports = function (t) {
                return a.call(s, t)
            }, e.exports.cancel = function () {
                l.apply(s, arguments)
            }, e.exports.polyfill = function (t) {
                t || (t = s), t.requestAnimationFrame = a, t.cancelAnimationFrame = l
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "performance-now": 77
    }],
    80: [function (t, e, i) {
        var n = t("tiny-emitter"),
            s = t("inherits"),
            o = function () {};
        s(o, n), o.prototype.animateIn = function (t) {}, o.prototype.onAnimateInComplete = function () {
            this.emit("animateInComplete")
        }, o.prototype.animateOut = function (t) {}, o.prototype.onAnimateOutComplete = function () {
            this.emit("animateOutComplete")
        }, o.prototype.dispose = function () {
            this.off("animateInComplete").off("animateOutComplete")
        }, e.exports = o
    }, {
        inherits: 72,
        "tiny-emitter": 102
    }],
    81: [function (t, e, i) {
        var n = t("tiny-emitter"),
            s = t("inherits"),
            o = t("./ScreenNavigatorItem.js"),
            r = t("./Transitions.js"),
            a = function () {
                this.items = {}, this.currentItemId = null, this.previousItemId = null, this.currentScreen = null, this.previousScreen = null, this.transition = a.defaultTransition, this.transitionRunning = !1, this.transitionCancel = null
            };
        s(a, n), a.defaultTransition = r.none, a.prototype.addItem = function (t, e, i) {
            var n = new o(e, i);
            return this.items[t] = n, n
        }, a.prototype.getItem = function (t) {
            return this.items[t]
        }, a.prototype.showScreen = function (t, e, i) {
            if (!this.getItem(t)) throw new Error("ScreenNavigator - the item with the id " + t + " doesn't exist");
            this.transitionRunning && this.onTransitionComplete(!0), this.currentScreen && (this.previousItemId = this.currentItemId, this.previousScreen = this.currentScreen), this.currentItemId = t, this.onScreenChange(), this.startTransition(e, i)
        }, a.prototype.clearScreen = function (t) {
            this.currentScreen && (this.previousItemId = this.currentItemId, this.previousScreen = this.currentScreen, this.currentItemId = null, this.onScreenChange(), this.startTransition(t))
        }, a.prototype.startTransition = function (t, e) {
            t = t || this.transition;
            var i = this.getItem(this.currentItemId);
            e && i.setOptions(e), this.currentScreen = i ? i.getScreen(e) : null, this.transitionRunning = !0, this.emit("transitionStart"), this.transitionCancel = t(this.currentScreen, this.previousScreen, this.onTransitionComplete.bind(this))
        }, a.prototype.onScreenChange = function () {
            this.emit("screenChange")
        }, a.prototype.onTransitionComplete = function (t, e) {
            this.transitionRunning = !1, t && this.transitionCancel && this.transitionCancel(), this.disposePreviousScreen(), e || (t ? this.emit("transitionCancel") : this.emit("transitionComplete")), this.transitionCancel = null
        }, a.prototype.dispose = function (t) {
            "boolean" != typeof t && (t = !0), this.transitionRunning && this.onTransitionComplete(!0, !0), this.disposeCurrentScreen(), this.disposePreviousScreen();
            for (var e in this.items) this.items[e].dispose(t), delete this.items[e];
            this.transition = null
        }, a.prototype.disposePreviousScreen = function () {
            this.previousScreen && (this.getItem(this.previousItemId).disposeScreen(this.previousScreen), this.previousScreen = null)
        }, a.prototype.disposeCurrentScreen = function () {
            this.currentScreen && (this.getItem(this.currentItemId).disposeScreen(this.currentScreen), this.currentScreen = null)
        }, e.exports = a, e.exports.AScreen = t("./AScreen.js"), e.exports.ScreenNavigatorItem = o, e.exports.Transitions = r
    }, {
        "./AScreen.js": 80,
        "./ScreenNavigatorItem.js": 82,
        "./Transitions.js": 83,
        inherits: 72,
        "tiny-emitter": 102
    }],
    82: [function (t, e, i) {
        var n = function (t, e) {
            this.screen = t, this.isInstance = "function" != typeof t, this.internalInstance = null, this.arguments = null, this.properties = null, this.canDispose = !this.isInstance, this.events = null, this.hasEventsListeners = !1, this.setOptions(e)
        };
        n.prototype.setOptions = function (t) {
            for (var e in t) void 0 !== this[e] && (this[e] = t[e])
        }, n.prototype.getScreen = function () {
            function t() {
                n.apply(this, i)
            }
            var e;
            if (this.isInstance) e = this.screen;
            else if (this.internalInstance) e = this.internalInstance;
            else {
                var i = this.arguments,
                    n = this.screen;
                t.prototype = n.prototype, e = new t, this.canDispose || (this.internalInstance = e)
            }
            if (this.properties)
                for (var s in this.properties) e[s] = this.properties[s];
            return this.events && this.addEventsListeners(e), e
        }, n.prototype.addEventsListeners = function (t) {
            if (!this.canDispose) {
                if (this.hasEventsListeners) return;
                this.hasEventsListeners = !0
            }
            for (var e in this.events) "function" == typeof this.events[e] && t.on(e, this.events[e])
        }, n.prototype.removeEventsListeners = function (t) {
            this.hasEventsListeners = !1;
            for (var e in this.events) "function" == typeof this.events[e] && t.off(e, this.events[e])
        }, n.prototype.disposeScreen = function (t, e) {
            this.events && this.removeEventsListeners(t), (e || this.canDispose) && ("function" == typeof t.dispose && t.dispose(), this.internalInstance = null)
        }, n.prototype.dispose = function (t) {
            "boolean" != typeof t && (t = !0);
            var e = this.isInstance ? this.screen : this.internalInstance;
            e && this.disposeScreen(e, t), this.screen = this.internalInstance = this.arguments = this.properties = this.events = null
        }, e.exports = n
    }, {}],
    83: [function (t, e, i) {
        e.exports = {
            none: t("./transitions/none.js"),
            outAndIn: t("./transitions/outAndIn.js"),
            outThenIn: t("./transitions/outThenIn.js"),
            inThenOut: t("./transitions/inThenOut.js"),
            in: t("./transitions/in.js"),
            out: t("./transitions/out.js")
        }
    }, {
        "./transitions/in.js": 84,
        "./transitions/inThenOut.js": 85,
        "./transitions/none.js": 86,
        "./transitions/out.js": 87,
        "./transitions/outAndIn.js": 88,
        "./transitions/outThenIn.js": 89
    }],
    84: [function (t, e, i) {
        e.exports = function (t, e, i) {
            function n() {
                t && t.off("animateInComplete", s)
            }

            function s() {
                o()
            }

            function o() {
                e && e.animateOut(), n(), i()
            }
            return t ? (t.on("animateInComplete", s), t.animateIn()) : o(),
                function () {
                    n(), e && e.animateOut(!0), t && t.animateIn(!0)
                }
        }
    }, {}],
    85: [function (t, e, i) {
        e.exports = function (t, e, i) {
            function n() {
                e ? (e.on("animateOutComplete", r), e.animateOut()) : a()
            }

            function s() {
                e && e.off("animateOutComplete", r), t && t.off("animateInComplete", o)
            }

            function o() {
                e ? n() : a()
            }

            function r() {
                a()
            }

            function a() {
                s(), i()
            }
            return t ? (t.on("animateInComplete", o), t.animateIn()) : n(),
                function () {
                    s(), e && e.animateOut(!0), t && t.animateIn(!0)
                }
        }
    }, {}],
    86: [function (t, e, i) {
        e.exports = function (t, e, i) {
            return e && e.animateOut(), t && t.animateIn(), i(),
                function () {}
        }
    }, {}],
    87: [function (t, e, i) {
        e.exports = function (t, e, i) {
            function n() {
                e && e.off("animateOutComplete", s)
            }

            function s() {
                o()
            }

            function o() {
                t && t.animateIn(), n(), i()
            }
            return e ? (e.on("animateOutComplete", s), e.animateOut()) : o(),
                function () {
                    n(), e && e.animateOut(!0), t && t.animateIn(!0)
                }
        }
    }, {}],
    88: [function (t, e, i) {
        e.exports = function (t, e, i) {
            function n() {
                ++o === r && i()
            }

            function s() {
                e && e.off("animateOutComplete", n), t && t.off("animateOutComplete", n)
            }
            var o = 0,
                r = 0;
            return e && r++, t && r++, e && (e.on("animateOutComplete", n), e.animateOut()), t && (t.on("animateInComplete", n), t.animateIn()),
                function () {
                    s(), e && e.animateOut(!0), t && t.animateIn(!0)
                }
        }
    }, {}],
    89: [function (t, e, i) {
        e.exports = function (t, e, i) {
            function n() {
                t ? o() : a()
            }

            function s() {
                a()
            }

            function o() {
                t.on("animateInComplete", s), t.animateIn()
            }

            function r() {
                e && e.off("animateOutComplete", n), t && t.off("animateInComplete", s)
            }

            function a() {
                r(), i()
            }
            return e ? (e.on("animateOutComplete", n), e.animateOut()) : o(),
                function () {
                    r(), e && e.animateOut(!0), t && t.animateIn(!0)
                }
        }
    }, {}],
    90: [function (t, e, i) {
        "use strict";
        var n = t("./utils/default-values"),
            s = t("tiny-emitter"),
            o = t("inherits"),
            r = t("./Ticker"),
            a = new r,
            l = function (t, e, i) {
                i = i || {}, this.parser = t, this.renderer = e;
                var s = {
                    manualUpdate: !1,
                    frameRate: 60,
                    loop: !1,
                    yoyo: !1,
                    numFrames: t.numFrames
                };
                return n(this, s, i), this.lastFrame = this.numFrames - 1, this.enterFrameId = -1, this.enterFrameCb = this.onEnterFrame.bind(this), this.currentFrame = 0, this.isPlaying = !1, this.reversed = !1, this.complete = !1, this.lastFrameTime = 0, this.interval = 1e3 / this.frameRate, this.x = 0, this.y = 0, this.alpha = 1, this
            };
        o(l, s), l.prototype.play = function () {
            return this.isPlaying = !0, this.complete = !1, this.manualUpdate || (this.enterFrameId = a.add(this.enterFrameCb)), this
        }, l.prototype.pause = function () {
            return this.isPlaying = !1, this.manualUpdate || a.remove(this.enterFrameId), this
        }, l.prototype.stop = function () {
            return this.pause(), this.currentFrame = 0, this
        }, l.prototype.gotoAndPlay = function (t) {
            return this.currentFrame = t, this.complete = !1, this.isPlaying || this.play(), this
        }, l.prototype.gotoAndStop = function (t) {
            return this.isPlaying && this.pause(), this.currentFrame = t, this.renderFrame(), this
        }, l.prototype.nextFrame = function () {
            return this.currentFrame++, this.currentFrame > this.lastFrame && (this.currentFrame = this.lastFrame), this.currentFrame >= this.lastFrame && (this.complete = !0), this
        }, l.prototype.prevFrame = function () {
            return this.currentFrame--, this.currentFrame < 0 && (this.currentFrame = 0), this.currentFrame <= 0 && (this.complete = !0), this
        }, l.prototype.renderFrame = function () {
            return this.renderer.render(this.parser.frames[this.currentFrame], this), this
        }, l.prototype.dispose = function () {
            return this.stop(), this.off("complete").off("enterFrame"), this
        }, l.prototype.onComplete = function () {
            return this.loop ? (this.yoyo && (this.reversed = !this.reversed), this.reversed ? this.gotoAndPlay(this.lastFrame) : this.gotoAndPlay(0)) : this.pause(), this.emit("complete"), this
        }, l.prototype.onEnterFrame = function (t) {
            if (t - this.lastFrameTime > this.interval || 0 === this.lastFrameTime) {
                if (this.lastFrameTime = t, this.manualUpdate || this.renderFrame(), this.complete) return void this.onComplete();
                this.isPlaying && (this.reversed ? this.prevFrame() : this.nextFrame()), this.emit("enterFrame")
            }
            return this
        }, e.exports = l, e.exports.CanvasRenderer = t("./renderer/CanvasRenderer.js"), e.exports.OffScreenCanvasRenderer = t("./renderer/OffScreenCanvasRenderer.js"), e.exports.DOMRenderer = t("./renderer/DOMRenderer.js"), e.exports.SimpleParser = t("./parser/SimpleParser.js"), e.exports.JSONArrayParser = t("./parser/JSONArrayParser.js")
    }, {
        "./Ticker": 91,
        "./parser/JSONArrayParser.js": 92,
        "./parser/SimpleParser.js": 93,
        "./renderer/CanvasRenderer.js": 94,
        "./renderer/DOMRenderer.js": 95,
        "./renderer/OffScreenCanvasRenderer.js": 96,
        "./utils/default-values": 97,
        inherits: 72,
        "tiny-emitter": 102
    }],
    91: [function (t, e, i) {
        "use strict";
        var n = t("raf"),
            s = 0,
            o = function () {
                this.items = [], this.isRunning = !1, this.tickId = -1, this.tickCb = this.onTick.bind(this)
            };
        o.prototype.start = function () {
            this.isRunning = !0, this.tickId = n(this.tickCb)
        }, o.prototype.pause = function () {
            this.isRunning = !1, n.cancel(this.tickId)
        }, o.prototype.add = function (t) {
            var e = s++;
            return this.items.push({
                id: e,
                cb: t
            }), this.isRunning || this.start(), e
        }, o.prototype.remove = function (t) {
            for (var e, i = 0, n = this.items.length; i < n; i++)
                if (this.items[i].id === t) {
                    e = this.items.splice(i, 1)[0];
                    break
                } return 0 === this.items.length && this.pause(), e
        }, o.prototype.onTick = function (t) {
            this.tickId = n(this.tickCb);
            for (var e = 0, i = this.items.length; e < i; e++) this.items[e] && this.items[e].cb(t)
        }, e.exports = o
    }, {
        raf: 79
    }],
    92: [function (t, e, i) {
        "use strict";
        var n = function (t, e) {
            e = e || 1, this.frames = [], this.numFrames = t.frames.length;
            for (var i, n = 0; n < this.numFrames; n++) i = t.frames[n].frame, this.frames.push({
                index: n,
                x: i.x * e,
                y: i.y * e,
                width: i.w * e,
                height: i.h * e
            })
        };
        e.exports = n
    }, {}],
    93: [function (t, e, i) {
        "use strict";
        var n = t("../utils/is-array"),
            s = function (t, e, i) {
                if (this.frameSize = e, this.options = i || {}, this.scaleFactor = this.options.scaleFactor || 1, this.numFrames = this.options.numFrames, this.frames = [], n(t))
                    for (var s = 0, o = t.length; s < o; s++) this.initSpriteFrames(t[s], s);
                else this.initSpriteFrames(t, 0);
                this.numFrames || (this.numFrames = this.frames.length)
            };
        s.prototype.initSpriteFrames = function (t, e) {
            var i = t.naturalWidth || t.width,
                n = t.naturalHeight || t.height;
            i *= this.scaleFactor, n *= this.scaleFactor;
            var s = Math.ceil(i / this.frameSize.width),
                o = Math.ceil(n / this.frameSize.height);
            t: for (var r = 0; r < o; r++)
                for (var a = 0; a < s; a++)
                    if (this.frames.push({
                            x: a * this.frameSize.width,
                            y: r * this.frameSize.height,
                            index: this.frames.length,
                            width: this.frameSize.width,
                            height: this.frameSize.height,
                            spriteIndex: e
                        }), this.frames.length === this.numFrames) break t
        }, e.exports = s
    }, {
        "../utils/is-array": 98
    }],
    94: [function (t, e, i) {
        "use strict";
        var n = t("../utils/default-values"),
            s = t("../utils/is-array"),
            o = function (t, e, i) {
                i = i || {}, n(this, {
                    clearFrame: !0
                }, i), this.canvas = t, s(e) ? this.sprites = e : this.sprites = [e], this.sprite = e, this.context = t.getContext("2d")
            };
        o.prototype.render = function (t, e) {
            this.clearFrame && this.context.clearRect(0, 0, t.width, t.height), this.context.globalAlpha = e.alpha, this.context.drawImage(this.sprites[t.spriteIndex], t.x, t.y, t.width, t.height, e.x, e.y, t.width, t.height)
        }, e.exports = o
    }, {
        "../utils/default-values": 97,
        "../utils/is-array": 98
    }],
    95: [function (t, e, i) {
        "use strict";
        var n = t("../utils/is-array"),
            s = function (t, e) {
                e = e || {}, this.element = t, this.scaleFactor = e.scaleFactor || 1, this.sprite = e.sprite, this.spriteIndex = 0, this.sprite && this.updateSprite()
            };
        s.prototype.updateSprite = function () {
            var t;
            t = n(this.sprite) ? this.sprite[this.spriteIndex] : this.sprite;
            var e = t.naturalWidth * this.scaleFactor,
                i = t.naturalHeight * this.scaleFactor;
            this.element.style.backgroundImage = "url(" + t.src + ")", this.element.style.backgroundSize = e + "px " + i + "px"
        }, s.prototype.render = function (t) {
            t.spriteIndex !== this.spriteIndex && (this.spriteIndex = t.spriteIndex, this.updateSprite()), this.element.style.backgroundPosition = "-" + t.x * this.scaleFactor + "px -" + t.y * this.scaleFactor + "px"
        }, e.exports = s
    }, {
        "../utils/is-array": 98
    }],
    96: [function (t, e, i) {
        "use strict";
        var n = t("../utils/default-values"),
            s = function (t, e, i) {
                i = i || {}, this.canvas = t, this.sprite = e, n(this, {
                    clearFrame: !0
                }, i), this.buffer = document.createElement("canvas"), this.buffer.width = e.width, this.buffer.height = e.height, this.bufferContext = this.buffer.getContext("2d"), this.bufferContext.drawImage(e, 0, 0), this.context = t.getContext("2d")
            };
        s.prototype.render = function (t, e) {
            this.clearFrame && this.context.clearRect(0, 0, t.width, t.height), this.context.globalAlpha = e.alpha, this.context.putImageData(this.bufferContext.getImageData(t.x, t.y, t.width, t.height), e.x, e.y, 0, 0, t.width, t.height)
        }, e.exports = s
    }, {
        "../utils/default-values": 97
    }],
    97: [function (t, e, i) {
        e.exports = function (t, e, i) {
            for (var n in e) t[n] = void 0 !== i[n] ? i[n] : e[n]
        }
    }, {}],
    98: [function (t, e, i) {
        e.exports = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    }, {}],
    99: [function (t, e, i) {
        var n = t("./throttle");
        e.exports = function (t, e, i) {
            return void 0 === i ? n(t, e, !1) : n(t, i, !1 !== e)
        }
    }, {
        "./throttle": 101
    }],
    100: [function (t, e, i) {
        var n = t("./throttle"),
            s = t("./debounce");
        e.exports = {
            throttle: n,
            debounce: s
        }
    }, {
        "./debounce": 99,
        "./throttle": 101
    }],
    101: [function (t, e, i) {
        e.exports = function (t, e, i, n) {
            function s() {
                function s() {
                    r = Number(new Date), i.apply(l, p)
                }

                function a() {
                    o = void 0
                }
                var l = this,
                    h = Number(new Date) - r,
                    p = arguments;
                n && !o && s(), o && clearTimeout(o), void 0 === n && h > t ? s() : !0 !== e && (o = setTimeout(n ? a : s, void 0 === n ? t - h : t))
            }
            var o, r = 0;
            return "boolean" != typeof e && (n = i, i = e, e = void 0), s
        }
    }, {}],
    102: [function (t, e, i) {
        function n() {}
        n.prototype = {
            on: function (t, e, i) {
                var n = this.e || (this.e = {});
                return (n[t] || (n[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            },
            once: function (t, e, i) {
                function n() {
                    s.off(t, n), e.apply(i, arguments)
                }
                var s = this;
                return n._ = e, this.on(t, n, i)
            },
            emit: function (t) {
                var e = [].slice.call(arguments, 1),
                    i = ((this.e || (this.e = {}))[t] || []).slice(),
                    n = 0,
                    s = i.length;
                for (n; n < s; n++) i[n].fn.apply(i[n].ctx, e);
                return this
            },
            off: function (t, e) {
                var i = this.e || (this.e = {}),
                    n = i[t],
                    s = [];
                if (n && e)
                    for (var o = 0, r = n.length; o < r; o++) n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
                return s.length ? i[t] = s : delete i[t], this
            }
        }, e.exports = n
    }, {}],
    103: [function (t, e, i) {
        e.exports = function (t) {
            var e = t || "undefined" != typeof location && location.search;
            if (!e) throw new TypeError("search argument missing");
            e = e.trim().replace(/^(\?)/, ""), e = e.split("&");
            var i = {};
            return e.forEach(function (t) {
                var e = t.split("=");
                i[e[0]] = !(e.length > 1) || e[1]
            }), i
        }
    }, {}]
}, {}, [1]);