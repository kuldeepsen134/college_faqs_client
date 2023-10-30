import { DashboardLayoutPropsType } from "../../@types/DashboardLayout";

import * as React from "react";
import { useEffect } from "react";
import PublicFooter from "../../Components/public/PublicFooter";
import PublicHeader from "../../Components/public/PublicHeader";
import ScrollMagic from "scrollmagic";
import gsap from "gsap";
import { useSelector } from "react-redux";
import CollegeList from "../../Pages/CollegeList";
import { useLocation } from "react-router";

const DashboardLayout = ({ children }: DashboardLayoutPropsType) => {
  // Controller();

  const isCmsPage = window.location.href.includes("cms");

  function initial() {
    const preloader = preload[0];
    const bg = preloader ? preloader.querySelector(".preloader__bg") : null;
    gsap.registerEffect({
      name: "preloaderInitial",
      effect: (target: any, config: any) => {
        document.documentElement.classList.add("html-overflow-hidden");
        const tl = gsap.timeline();
        if (!document.body.classList.contains("preloader-visible")) {
          document.documentElement.classList.remove("html-overflow-hidden");
          return tl;
        }

        return tl.to(bg, {
          ease: "quart.inOut",
          duration: 0.6,
          scaleY: 0,
          onComplete: () => {
            document.documentElement.classList.remove("html-overflow-hidden");
          },
        });
      },
      extendTimeline: true,
    });
  }

  let SMcontroller = new ScrollMagic.Controller();
  const preload = document.getElementsByClassName("js-preloader");
  const Preloader = (function () {
    const preloader = preload[0];
    const bg = preloader ? preloader.querySelector(".preloader__bg") : null;

    function show() {
      if (bg) {
        gsap.registerEffect({
          name: "preloaderShow",
          effect: (target: any, config: any) => {
            const tl = gsap.timeline();
            if (!preloader) return tl;

            return tl.to(bg, {
              ease: "quart.inOut",
              duration: 0.6,
              scaleY: 1,
              onStart: () => {
                bg.classList.remove("origin-bottom");
                document.documentElement.classList.add("html-overflow-hidden");
              },
            });
          },
          extendTimeline: true,
        });
      }
    }

    function hide() {
      if (bg) {
        gsap.registerEffect({
          name: "preloaderHide",
          effect: (target: any, config: any) => {
            const tl = gsap.timeline();

            return tl.to(bg, {
              ease: "quart.inOut",
              duration: 0.6,
              delay: 0.1,
              scaleY: 0,
              // onSt
              art: () => {
                bg.classList.add("origin-bottom");
              },
              onComplete: () => {
                document.documentElement.classList.remove(
                  "html-overflow-hidden"
                );
                document.documentElement.classList.remove("overflow-hidden");
                document.body.classList.remove("overflow-hidden");
              },
            });
          },
          extendTimeline: true,
        });
      }
    }

    function init() {
      if (!preloader) return;
      initial();
      show();
      hide();
    }

    return {
      init: init,
    };
  })();

  const RevealAnim = (function () {
    function single() {
      const animationTarget = document.querySelectorAll("[data-anim]");
      if (!animationTarget.length) return;

      for (let i = 0; i < animationTarget.length; i++) {
        const el = animationTarget[i];
        new ScrollMagic.Scene({
          offset: 350,
          triggerElement: el,
          triggerHook: "onEnter",
          reverse: false,
        })
          .on("enter", function (event: any) {
            animateElement(el);
          })
          .addTo(SMcontroller);
      }
    }

    function container() {
      const animationContainer = document.querySelectorAll("[data-anim-wrap]");

      if (!animationContainer.length) {
        return;
      }

      for (let i = 0; i < animationContainer.length; i++) {
        const el = animationContainer[i];

        new ScrollMagic.Scene({
          offset: 350,
          triggerElement: el,
          triggerHook: "onEnter",
          reverse: false,
        })
          .on("enter", function (event: any) {
            const animChilds = el.querySelectorAll("[data-anim-child]");
            el.classList.add("animated");
            animChilds.forEach((el) => animateElement(el));
          })
          .addTo(SMcontroller);
      }
    }

    function animateElement(target: Element) {
      let attrVal;
      let animDelay;
      let attrDelayPart: any;

      if (target.getAttribute("data-anim")) {
        attrVal = target.getAttribute("data-anim");
      } else {
        attrVal = target.getAttribute("data-anim-child");
      }
      if (attrVal) {
        if (attrVal.includes("delay-")) {
          attrDelayPart = attrVal.split(" ").pop();
          if (attrDelayPart) {
            animDelay =
              attrDelayPart.substr(attrDelayPart.indexOf("-") + 1) / 10;
          }
        }

        if (attrVal.includes("counter")) {
          counter(target, animDelay);
        } else if (attrVal.includes("line-chart")) {
          lineChart(target, animDelay);
        } else if (attrVal.includes("pie-chart")) {
          pieChart(target, animDelay);
        } else if (attrVal.includes("split-lines")) {
          splitLines(target, animDelay);
        } else {
          target.classList.add("is-in-view");
        }
      }
    }

    function pieChart(
      target: {
        getAttribute: (arg0: string) => any;
        querySelector: (arg0: string) => any;
      },
      animDelay = 0
    ) {
      let counterVal = target.getAttribute("data-percent");
      const chartBar = target.querySelector(".js-chart-bar");

      if (counterVal < 0) {
        counterVal = 0;
      }
      if (counterVal > 100) {
        counterVal = 100;
      }

      gsap.fromTo(
        chartBar,
        {
          drawSVG: `0%`,
        },
        {
          delay: 0.3 + animDelay,
          duration: 1.4,
          ease: "power3.inOut",
          drawSVG: `${counterVal}%`,

          onStart: () => {
            chartBar.classList.remove("bar-stroke-hidden");
          },
        }
      );

      let object = { count: 0 };
      const barPercent = target.querySelector(".js-chart-percent");

      gsap.to(object, {
        count: counterVal,
        delay: 0.45 + animDelay,
        duration: 1,
        ease: "power3.inOut",

        onUpdate: function () {
          barPercent.innerHTML = Math.round(object.count) + "%";
        },
      });
    }

    function lineChart(
      target: {
        getAttribute: (arg0: string) => any;
        querySelector: (arg0: string) => gsap.TweenTarget;
      },
      animDelay = 0
    ) {
      const counterVal = target.getAttribute("data-percent");

      gsap.fromTo(
        target.querySelector(".js-bar"),
        {
          scaleX: 0,
        },
        {
          delay: 0.45 + animDelay,
          duration: 1,
          ease: "power3.inOut",
          scaleX: counterVal / 100,
        }
      );

      let object = { count: 0 };
      const barPercent: any = target.querySelector(".js-number");

      if (barPercent) {
        gsap.to(object, {
          count: counterVal,
          delay: 0.45 + animDelay,
          duration: 1,
          ease: "power3.inOut",

          onUpdate: function () {
            barPercent.innerHTML = Math.round(object.count);
          },
        });
      }
    }

    function counter(
      target: {
        getAttribute: (arg0: string) => any;
        querySelector: (arg0: string) => any;
      },
      animDelay = 0
    ) {
      const counterVal = target.getAttribute("data-counter");
      const counterAdd = target.getAttribute("data-counter-add");
      const totalDelay = animDelay;
      let symbols = "";

      let object = { count: 0 };
      const counterNum = target.querySelector(".js-counter-num");

      if (counterAdd) {
        symbols = counterAdd;
      }

      gsap.to(object, {
        count: counterVal,
        delay: totalDelay,
        duration: 1.8,
        ease: "power3.inOut",

        onUpdate: function () {
          counterNum.innerHTML = Math.round(object.count) + symbols;
        },
      });
    }

    function splitLines(
      target: { querySelectorAll: (arg0: string) => any },
      animDelay = 0
    ) {
      const lines = target.querySelectorAll(".split__line");

      gsap.to(lines, {
        delay: animDelay,
        stagger: 0.05,
        duration: 1.2,
        ease: "power2.out",
        y: "0%",
      });
    }

    function init() {
      single();
      container();
    }

    return {
      init: init,
    };
  })();

  function parallaxIt() {
    const target = document.querySelectorAll(".js-mouse-move-container");

    target.forEach((container) => {
      const $this = container as HTMLElement;
      if ($this) {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const _movement = el.getAttribute("data-move");
          let movement = 0;
          if (_movement) {
            movement = ~~_movement;
          }
          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - $this.offsetLeft;
            const relY = e.pageY - $this.offsetTop;

            gsap.to(el, {
              x:
                ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * movement,
              y:
                ((relY - $this.offsetHeight / 2) / $this.offsetHeight) *
                movement,
              duration: 0.2,
            });
          });
        });
      }
    });
  }

  const PageReveal = (function () {
    function base(tl: { add: (arg0: () => void) => void }) {
      tl.add(() => {
        RevealAnim.init();
      });
    }

    function init(tl: any) {
      base(tl);
      return tl;
    }

    return {
      init: init,
    };
  })();

  function initialReveal() {
    let tl = gsap.timeline();
    tl.preloaderInitial();
    tl = PageReveal.init(tl);
  }

  const Header = (function () {
    let menu;
    let mobileBg;
    let navList: Element | null;
    let mobileFooter;
    let navListLinks;

    let navBtnOpen;
    let navBtnClose;
    let navBtnListBack: NodeListOf<Element>;

    let menuDeepLevel: number;
    let timeline = gsap.timeline();

    function updateVars() {
      // menu = document.querySelector('.js-menu');
      // mobileBg = menu.querySelector('.js-mobile-bg');
      // mobileFooter = menu.querySelector('.js-mobile-footer');
      navList = document.querySelector(".js-navList");
      navListLinks = document.querySelectorAll(".js-navList > li > a");

      // navBtnOpen = document.querySelector('.js-nav-open');
      // navBtnClose = document.querySelector('.js-nav-close');
      navBtnListBack = document.querySelectorAll(".js-nav-list-back");
      menuDeepLevel = 0;
    }

    function init() {
      // if (!document.querySelector('.js-menu')) return
      updateVars();
      menuListBindEvents();
      // menuAnimBindEvents()
    }

    function deepLevelCheck(level: any) {
      return level;
    }

    function menuListBindEvents() {
      const listItems = document.querySelectorAll(
        ".js-navList .menu-item-has-children"
      );
      if (!listItems.length) return;
      if (navList) {
        navBtnListBack.forEach(
          (el: {
            addEventListener: (arg0: string, arg1: () => void) => void;
          }) => {
            el.addEventListener("click", () => {
              const visibleList =
                navList && navList.querySelector("ul.-is-active");
              if (
                visibleList &&
                visibleList.parentElement &&
                visibleList.parentElement.parentElement
              ) {
                const parentList = visibleList.parentElement.parentElement;
                if (parentList && parentList.parentElement) {
                  menuDeepLevel--;
                  menuListStepAnimate(
                    visibleList as HTMLElement,
                    parentList,
                    menuDeepLevel
                  );
                }
              }
            });
          }
        );
      }

      listItems.forEach((el) => {
        const parentLink = el.querySelector("li > a");
        if (parentLink) {
          parentLink.removeAttribute("href");

          parentLink.addEventListener("click", () => {
            const parent = el.parentElement;
            const subnavList = el.lastElementChild;

            menuDeepLevel++;
            menuListStepAnimate(parent, subnavList, menuDeepLevel);
          });
        }
      });
    }

    function menuListStepAnimate(
      hideList: HTMLElement | null,
      showList: Element | null,
      level: any
    ) {
      if (hideList && showList && level) {
        let hideListItems: any = hideList.children;
        hideListItems = Array.from(hideListItems);
        const hideListLinks = hideListItems.map(
          (item: { querySelector: (arg0: string) => any }) =>
            item.querySelector("li > a")
        );

        let showListItems: any = showList.children;
        showListItems = Array.from(showListItems);
        const showListLinks = showListItems.map(
          (item: { querySelector: (arg0: string) => any }) =>
            item.querySelector("li > a")
        );
        let width = window.innerWidth > 0 ? window.innerWidth : 1090;

        if (width < 1199) {
          timeline.clear();

          if (!deepLevelCheck(level)) {
            gsap.to(navBtnListBack, {
              ease: "quart.inOut",
              duration: 0.6,
              opacity: 0,
            });
          }

          timeline.to(hideListLinks, {
            ease: "quart.out",
            stagger: -0.04,
            duration: 0.8,
            y: "100%",
            onStart: () => {
              showList.classList.add("-is-active");
            },
            onComplete: () => {
              hideList.classList.remove("-is-active");
            },
          });

          if (deepLevelCheck(level)) {
            timeline.to(
              navBtnListBack,
              {
                ease: "quart.inOut",
                duration: 0.6,
                y: "0px",
                opacity: 1,
              },
              ">-0.5"
            );
          }

          timeline.to(
            showListLinks,
            {
              ease: "quart.out",
              stagger: 0.08,
              duration: 0.9,
              y: "0%",
            },
            ">-0.6"
          );
        }
      }
    }

    function headerSticky() {
      const header = document.querySelector(".js-header");
      if (!header) return;

      let classList = "is-sticky";

      if (header.getAttribute("data-add-bg")) {
        classList = header.getAttribute("data-add-bg") || "";
        classList = `${classList} is-sticky`;
      }

      new ScrollMagic.Scene({
        offset: 6,
      })
        .setClassToggle(header, classList)
        .addTo(SMcontroller);
    }

    return {
      headerSticky: headerSticky,
      init: init,
    };
  })();

  useEffect(() => {
    if (preload) {
      initial();
      Preloader.init();
      document.fonts.ready.then(function () {
        initialReveal();
        parallaxIt();
        Header.init();
      });
    }
  }, [preload]);

  const { search, loading } = useSelector((state: any) => state.commonHeader)

  const { pathname } = useLocation()

  console.log('pathname', pathname);


  return (
    <>
      <PublicHeader />
      {
        pathname !== '/' ? <main className="main-content  " style={{ marginTop: "45px" }}>
          <div className="content-wrapper  js-content-wrapper">
            <div
              style={{
                marginTop: isCmsPage ? "90px" : 0,
                backgroundColor: isCmsPage ? "#9d9d9d8c" : "#fff",
              }}
            >
              {children}
            </div>

          </div>
        </main> :
          search.data ?
            <CollegeList />
            : <main className="main-content  " style={{ marginTop: "45px" }}>
              <div className="content-wrapper  js-content-wrapper">
                <div
                  style={{
                    marginTop: isCmsPage ? "90px" : 0,
                    backgroundColor: isCmsPage ? "#9d9d9d8c" : "#fff",
                  }}
                >
                  {children}
                </div>

              </div>
            </main>
      }
      <PublicFooter />
    </>
  );
};

export default DashboardLayout;
