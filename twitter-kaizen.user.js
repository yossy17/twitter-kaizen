// ==UserScript==
// @name                Twitter kaizen
// @name:ja             Twitter kaizen
// @name:en             Twitter kaizen
// @name:zh-CN          Twitter kaizen
// @name:ko             Twitter kaizen
// @name:ru             Twitter kaizen
// @name:de             Twitter kaizen
// @description         Twitterの表示を改善するスクリプト
// @description:ja      Twitterの表示を改善するスクリプト
// @description:en      Script to improve Twitter display
// @description:zh-CN   改善Twitter显示的脚本
// @description:ko      트위터 표시를 개선하는 스크립트
// @description:ru      Скрипт для улучшения отображения Twitter
// @description:de      Skript zur Verbesserung der Twitter-Anzeige
// @version             2.2
// @author              Yos_sy
// @match               https://x.com/*
// @namespace           http://tampermonkey.net/
// @icon                data:image/png;base64,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
// @license             MIT
// @run-at              document-start
// @require             https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js
// @resource            IMPORTED_CSS https://raw.githubusercontent.com/yossy17/twitter-kaizen/main/style.css
// @grant               GM_addStyle
// @grant               GM_getResourceText
// @grant               GM_registerMenuCommand
// @downloadURL         https://update.greasyfork.org/scripts/498115/twitter-kaizen.user.js
// @updateURL           https://update.greasyfork.org/scripts/498115/twitter-kaizen.meta.js
// ==/UserScript==

(function () {
  "use strict";

  GM_addStyle(GM_getResourceText("IMPORTED_CSS"));

  // ローカルストレージから設定を読み込む
  function loadConfig() {
    const savedConfig = localStorage.getItem("twitterKaizenConfig");
    if (savedConfig) {
      Object.assign(config, JSON.parse(savedConfig));
    }
  }

  // ローカルストレージに設定を保存
  function saveConfig() {
    localStorage.setItem("twitterKaizenConfig", JSON.stringify(config));
  }

  // -----------------------------------------------------------------------------------
  // ユーティリティ関数と定数
  // -----------------------------------------------------------------------------------
  const Utils = {
    debounce: (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    },

    pad: (num) => num.toString().padStart(2, "0"),

    createElement: (tag, options = {}) => {
      const element = document.createElement(tag);
      if (options.id) element.id = options.id;
      options.classList?.forEach((cls) => element.classList.add(cls));
      Object.entries(options.attributes || {}).forEach(([attr, value]) =>
        element.setAttribute(attr, value)
      );
      if (options.innerHTML) element.innerHTML = options.innerHTML;
      if (options.textContent) element.textContent = options.textContent;
      return element;
    },

    observeDOM: (
      targetNode,
      callback,
      config = { childList: true, subtree: true }
    ) => {
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
      return observer;
    },
  };

  // 多言語定義
  const TRANSLATIONS = {
    en: {
      panel: {
        replaceIcons: "Reclaim Twitter (restore icon)",
        useAbsoluteTime: "Change TL time from relative to absolute time",
        showTimeAndDateSidebar: "Display time and date in sidebar",
        useDefaultVideoPlayer: "Revert video player to default",
        enhanceTweetEngagements: "Easy access to quoted tweets",
      },
      weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    ja: {
      panel: {
        replaceIcons: "Twitterを取り戻す (アイコンを元に戻す)",
        useAbsoluteTime: "TLの時間を相対時間から絶対時間に変更",
        showTimeAndDateSidebar: "サイドバーに時間、日付を表示",
        useDefaultVideoPlayer: "動画プレイヤーをデフォルトに戻す",
        enhanceTweetEngagements: "引用ツイートへのアクセスを簡単に",
      },
      weeks: ["日", "月", "火", "水", "木", "金", "土"],
    },
    zh: {
      panel: {
        replaceIcons: "替换 Twitter 图标",
        useAbsoluteTime: "使用绝对时间",
        showTimeAndDateSidebar: "显示时间和日期侧边栏",
        useDefaultVideoPlayer: "使用默认视频播放器",
        enhanceTweetEngagements: "增强推文互动",
      },
      weeks: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    },
    ko: {
      panel: {
        replaceIcons: "Twitter 아이콘 교체",
        useAbsoluteTime: "절대 시간 사용",
        showTimeAndDateSidebar: "시간 및 날짜 사이드바 표시",
        useDefaultVideoPlayer: "기본 비디오 플레이어 사용",
        enhanceTweetEngagements: "트윗 참여 향상",
      },
      weeks: ["일", "월", "화", "수", "목", "금", "토"],
    },
    ru: {
      panel: {
        replaceIcons: "Заменить иконки Twitter",
        useAbsoluteTime: "Использовать абсолютное время",
        showTimeAndDateSidebar: "Показать боковую панель времени и даты",
        useDefaultVideoPlayer: "Использовать стандартный видеоплеер",
        enhanceTweetEngagements: "Улучшить взаимодействие с твитами",
      },
      weeks: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    },
    de: {
      panel: {
        replaceIcons: "Twitter-Icons ersetzen",
        useAbsoluteTime: "Absolute Zeit verwenden",
        showTimeAndDateSidebar: "Zeit- und Datums-Sidebar anzeigen",
        useDefaultVideoPlayer: "Standard-Video-Player verwenden",
        enhanceTweetEngagements: "Tweet-Interaktionen verbessern",
      },
      weeks: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    },
  };

  const LANG = navigator.language.split("-")[0];
  const CURRENT_LANG = TRANSLATIONS[LANG] || TRANSLATIONS.en;

  const PANEL_LANG = CURRENT_LANG.panel;
  const WEEKS_LANG = CURRENT_LANG.weeks;

  // -----------------------------------------------------------------------------------
  // 設定パネル
  // -----------------------------------------------------------------------------------
  const config = {
    replaceIcons: true,
    useAbsoluteTime: true,
    showTimeAndDateSidebar: true,
    useDefaultVideoPlayer: true,
    enhanceTweetEngagements: true,
  };

  const SettingsModule = {
    createSettingsUI: function () {
      const settingsDiv = Utils.createElement("div", {
        id: "twitter-kaizen-panel",
        classList: ["twitter-kaizen-panel"],
      });

      // パネルのインラインスタイルを追加
      Object.assign(settingsDiv.style, {
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: "9999",
        background: "#f9f9f9",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        width: "300px",
        maxWidth: "100%",
        display: "none",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      });

      const title = Utils.createElement("h3", {
        textContent: "Twitter Kaizen Settings",
      });
      title.style.fontSize = "18px";
      title.style.margin = "10px";
      title.style.color = "#333";
      settingsDiv.appendChild(title);

      const features = [
        { key: "replaceIcons", label: PANEL_LANG.replaceIcons },
        { key: "useAbsoluteTime", label: PANEL_LANG.useAbsoluteTime },
        {
          key: "showTimeAndDateSidebar",
          label: PANEL_LANG.showTimeAndDateSidebar,
        },
        {
          key: "useDefaultVideoPlayer",
          label: PANEL_LANG.useDefaultVideoPlayer,
        },
        {
          key: "enhanceTweetEngagements",
          label: PANEL_LANG.enhanceTweetEngagements,
        },
      ];

      features.forEach(({ key, label }) => {
        const checkbox = Utils.createElement("input", {
          attributes: { type: "checkbox", id: key },
        });
        checkbox.checked = config[key];
        checkbox.addEventListener("change", () => {
          config[key] = checkbox.checked;
          saveConfig();
          location.reload();
        });

        const labelElement = Utils.createElement("label", {
          attributes: { for: key },
          textContent: label,
        });
        labelElement.style.marginLeft = "8px";
        labelElement.style.fontSize = "14px";
        labelElement.style.color = "#555";

        settingsDiv.appendChild(checkbox);
        settingsDiv.appendChild(labelElement);
        settingsDiv.appendChild(Utils.createElement("br"));
      });

      document.body.appendChild(settingsDiv);
    },

    toggleSettingsPanel: function () {
      const panel = document.getElementById("twitter-kaizen-panel");
      if (panel) {
        if (panel.style.display === "none") {
          panel.style.display = "block";
          panel.style.transform = "scale(1)";
          panel.style.opacity = "1";
        } else {
          panel.style.transform = "scale(0.9)";
          panel.style.opacity = "0";
          setTimeout(() => {
            panel.style.display = "none";
          }, 300);
        }
      }
    },
  };

  // ショートカットキー
  function setupKeyboardShortcut() {
    document.addEventListener("keydown", function (e) {
      if (e.ctrlKey && e.altKey && e.key === "o") {
        SettingsModule.toggleSettingsPanel();
      }
    });
  }

  // メニューコマンドの登録
  function setupMenuCommand() {
    GM_registerMenuCommand("Toggle Twitter Kaizen Settings", () => {
      SettingsModule.toggleSettingsPanel();
    });
  }

  // -----------------------------------------------------------------------------------
  // Twitterを取り戻す(アイコンを戻す)
  // -----------------------------------------------------------------------------------

  function replaceTwitterIcons() {
    if (!config.replaceIcons) return;

    const iconPaths = {
      main: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",
      logo: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",
      premium:
        "M 8.52 3.59 c 0.8 -1.1 2.04 -1.84 3.48 -1.84 s 2.68 0.74 3.49 1.84 c 1.34 -0.21 2.74 0.14 3.76 1.16 s 1.37 2.42 1.16 3.77 c 1.1 0.8 1.84 2.04 1.84 3.48 s -0.74 2.68 -1.84 3.48 c 0.21 1.34 -0.14 2.75 -1.16 3.77 s -2.42 1.37 -3.76 1.16 c -0.8 1.1 -2.05 1.84 -3.49 1.84 s -2.68 -0.74 -3.48 -1.84 c -1.34 0.21 -2.75 -0.14 -3.77 -1.16 c -1.01 -1.02 -1.37 -2.42 -1.16 -3.77 c -1.09 -0.8 -1.84 -2.04 -1.84 -3.48 s 0.75 -2.68 1.84 -3.48 c -0.21 -1.35 0.14 -2.75 1.16 -3.77 s 2.43 -1.37 3.77 -1.16 Z m 3.48 0.16 c -0.85 0 -1.66 0.53 -2.12 1.43 l -0.38 0.77 l -0.82 -0.27 c -0.96 -0.32 -1.91 -0.12 -2.51 0.49 c -0.6 0.6 -0.8 1.54 -0.49 2.51 l 0.27 0.81 l -0.77 0.39 c -0.9 0.46 -1.43 1.27 -1.43 2.12 s 0.53 1.66 1.43 2.12 l 0.77 0.39 l -0.27 0.81 c -0.31 0.97 -0.11 1.91 0.49 2.51 c 0.6 0.61 1.55 0.81 2.51 0.49 l 0.82 -0.27 l 0.38 0.77 c 0.46 0.9 1.27 1.43 2.12 1.43 s 1.66 -0.53 2.12 -1.43 l 0.39 -0.77 l 0.82 0.27 c 0.96 0.32 1.9 0.12 2.51 -0.49 c 0.6 -0.6 0.8 -1.55 0.48 -2.51 l -0.26 -0.81 l 0.76 -0.39 c 0.91 -0.46 1.43 -1.27 1.43 -2.12 s -0.52 -1.66 -1.43 -2.12 l -0.77 -0.39 l 0.27 -0.81 c 0.32 -0.97 0.12 -1.91 -0.48 -2.51 c -0.61 -0.61 -1.55 -0.81 -2.51 -0.49 l -0.82 0.27 l -0.39 -0.77 c -0.46 -0.9 -1.27 -1.43 -2.12 -1.43 Z m 4.74 5.68 l -6.2 6.77 l -3.74 -3.74 l 1.41 -1.42 l 2.26 2.26 l 4.8 -5.23 l 1.47 1.36 Z",
      home: "M12,1.696 L0.622,8.807l1.06,1.696L3,9.679V19.5C3,20.881 4.119,22 5.5,22h13c1.381,0 2.5,-1.119 2.5,-2.5V9.679l1.318,0.824 1.06,-1.696L12,1.696ZM12,16.5c-1.933,0 -3.5,-1.567 -3.5,-3.5s1.567,-3.5 3.5,-3.5 3.5,1.567 3.5,3.5 -1.567,3.5 -3.5,3.5Z",
    };

    function updateIcons() {
      const selectors = {
        main: '.r-64el8z[href="/home"] > div > svg > g > path',
        logo: ".r-1blnp2b > g > path",
        premium:
          '.r-eqz5dr[href="/i/premium_sign_up"] > div > div > svg > g > path',
        home: '.r-eqz5dr[href="/home"] > div > div > svg > g > path',
      };

      Object.entries(selectors).forEach(([key, selector]) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          el.setAttribute("d", iconPaths[key]);
        });
      });
    }

    Utils.observeDOM(document.body, Utils.debounce(updateIcons));
  }

  // -----------------------------------------------------------------------------------
  // TLの時間を相対時間から絶対時間に変更(HH:MM:SS･mm/dd/yy, week)
  // -----------------------------------------------------------------------------------
  // タイムスタンプモジュール
  const TimestampModule = {
    toFormattedDateString: function (date) {
      const YEAR = date.getFullYear().toString().slice(-2);
      const TIME = `${Utils.pad(date.getHours())}:${Utils.pad(date.getMinutes())}:${Utils.pad(date.getSeconds())}`;
      const DATE = `${Utils.pad(date.getMonth() + 1)}/${Utils.pad(date.getDate())}/${YEAR}, ${WEEKS_LANG[date.getDay()]}`;
      return `${TIME}･${DATE}`;
    },
    // タイムスタンプの更新
    updateTimestamps: function () {
      if (!config.useAbsoluteTime) return;

      const timeSelectors =
        'main div[data-testid="primaryColumn"] section article a[href*="/status/"] time, div.css-175oi2r.r-18u37iz.r-1q142lx div.css-175oi2r.r-1d09ksm.r-18u37iz.r-1wbh5a2 time';

      document.querySelectorAll(timeSelectors).forEach((timeElement) => {
        const parent = timeElement.parentNode;
        const span = Utils.createElement("span", {
          textContent: this.toFormattedDateString(
            new Date(timeElement.getAttribute("datetime"))
          ),
        });
        span.style.pointerEvents = "none";
        parent.appendChild(span);
        parent.removeChild(timeElement);
      });
    },
  };

  // -----------------------------------------------------------------------------------
  // サイドバーに時間、日付を表示(HH:MM:SS, mm/dd/yy, week)
  // -----------------------------------------------------------------------------------
  const SidebarModule = {
    createInfoElement: function (type) {
      if (!config.showTimeAndDateSidebar) return;

      const nav = document.querySelector(
        'div[class="css-175oi2r r-vacyoi r-ttdzmv"]'
      );
      if (!nav || document.getElementById(type)) return;

      const iconHTML =
        type === "time"
          ? '<i class="fa-regular fa-clock" style="width: 26.25px; height: 26.25px;"></i>'
          : '<i class="fa-solid fa-calendar-days" style="width: 26.25px; height: 26.25px;"></i>';

      const textContentFunc = () => {
        const date = new Date();
        const YEAR = date.getFullYear().toString().slice(-2);
        const TIME = `${Utils.pad(date.getHours())}:${Utils.pad(date.getMinutes())}:${Utils.pad(date.getSeconds())}`;
        const DATE = `${Utils.pad(date.getMonth() + 1)}/${Utils.pad(date.getDate())}/${YEAR}, ${WEEKS_LANG[date.getDay()]}`;

        return type === "time" ? `${TIME}` : `${DATE}`;
      };

      const infoElement = Utils.createElement("div", {
        id: type,
        classList: [
          "css-175oi2r",
          "r-6koalj",
          "r-eqz5dr",
          "r-16y2uox",
          "r-1habvwh",
          "r-cnw61z",
          "r-13qz1uu",
          "r-1loqt21",
          "r-1ny4l3l",
        ],
      });

      const container = Utils.createElement("div", {
        id: `${type}__container`,
        classList: [
          "css-175oi2r",
          "r-sdzlij",
          "r-dnmrzs",
          "r-1awozwy",
          "r-18u37iz",
          "r-1777fci",
          "r-xyw6el",
          "r-o7ynqc",
          "r-6416eg",
        ],
      });

      const icon = Utils.createElement("div", {
        id: `${type}__container__icon`,
        classList: ["css-175oi2r"],
        innerHTML: iconHTML,
      });

      const text = Utils.createElement("div", {
        id: `${type}__container__text`,
        classList: [
          "css-146c3p1",
          "r-dnmrzs",
          "r-1udh08x",
          "r-3s2u2q",
          "r-bcqeeo",
          "r-1ttztb7",
          "r-qvutc0",
          "r-1qd0xha",
          "r-adyw6z",
          "r-135wba7",
          "r-16dba41",
          "r-dlybji",
          "r-nazi8o",
        ],
      });

      const textContent = Utils.createElement("span", {
        id: `${type}__text__content`,
        classList: ["1jxf684", "r-bcqeeo", "r-1ttztb7", "r-qvutc0", "r-poiln3"],
        textContent: textContentFunc(),
      });

      text.appendChild(textContent);
      container.appendChild(icon);
      container.appendChild(text);
      infoElement.appendChild(container);
      nav.appendChild(infoElement);

      if (type === "time") {
        setInterval(() => {
          textContent.textContent = textContentFunc();
        }, 1000);
      }
    },

    init: function () {
      this.createInfoElement("time");
      this.createInfoElement("date");

      const observer = new MutationObserver(() => {
        this.createInfoElement("time");
        this.createInfoElement("date");
      });

      observer.observe(document.body, { childList: true, subtree: true });
    },
  };

  // -----------------------------------------------------------------------------------
  // 動画プレイヤーをデフォルトに戻す
  // -----------------------------------------------------------------------------------
  const VideoModule = {
    setupDefaultVideoPlayer: function (container) {
      if (!config.useDefaultVideoPlayer) return;

      const video = container.querySelector("div:first-child > div > video");
      if (!video) return;

      video.controls = true;
      video.removeAttribute("disablepictureinpicture");
      video.muted = false;

      const onClick = (e) => {
        e.preventDefault();
        video
          .play()
          .then(() => {
            video.muted = false;
          })
          .catch((error) => console.error("Video playback error:", error));

        const onVolumeChange = (e) => {
          if (e.target.muted) {
            e.target.muted = false;
          }
          e.target.removeEventListener("volumechange", onVolumeChange);
        };

        e.target.addEventListener("volumechange", onVolumeChange);
        video.removeEventListener("click", onClick);
      };

      video.addEventListener("click", onClick);

      container.parentElement.appendChild(video);
      container.remove();
    },

    observeVideos: function () {
      const observer = new MutationObserver(() => {
        const videoContainer = document.body.querySelector(
          'div[data-testid="videoComponent"]:not(.enhanced-video)'
        );
        if (videoContainer) {
          videoContainer.classList.add("enhanced-video");
          setTimeout(() => this.setupDefaultVideoPlayer(videoContainer), 100);
        }
      });

      observer.observe(document.body, { subtree: true, childList: true });
    },
  };

  // -----------------------------------------------------------------------------------
  // Tweet Engagements をアクセスしやすく
  // -----------------------------------------------------------------------------------
  const TweetEngagementModule = {
    createQuoteButton: function () {
      const buttonWrapper = Utils.createElement("div", {
        classList: ["css-175oi2r", "r-18u37iz", "r-1h0z5md", "r-13awgt0"],
      });

      const link = Utils.createElement("a", {
        attributes: {
          href: `${window.location.pathname}/quotes`,
          "data-testid": "tweetEngagements",
        },
        classList: [
          "css-175oi2r",
          "r-1777fci",
          "r-bt1l66",
          "r-bztko3",
          "r-lrvibr",
          "r-1loqt21",
          "r-1ny4l3l",
        ],
      });

      link.addEventListener("click", (event) => {
        event.preventDefault();
        location.href = event.currentTarget.getAttribute("href");
      });

      const contentDiv = Utils.createElement("div", {
        attributes: { dir: "ltr" },
        classList: [
          "css-146c3p1",
          "r-bcqeeo",
          "r-1ttztb7",
          "r-qvutc0",
          "r-1qd0xha",
          "r-a023e6",
          "r-rjixqe",
          "r-16dba41",
          "r-1awozwy",
          "r-6koalj",
          "r-1h0z5md",
          "r-o7ynqc",
          "r-clp7b1",
          "r-3s2u2q",
        ],
      });
      contentDiv.style.textOverflow = "unset";
      contentDiv.style.color = "rgb(113, 118, 123)";

      const iconDiv = Utils.createElement("div", {
        classList: ["css-175oi2r", "r-xoduu5"],
        innerHTML: `
          <div class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l"></div>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue">
            <g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g>
          </svg>
        `,
      });

      const countDiv = Utils.createElement("div", {
        classList: ["css-175oi2r", "r-xoduu5", "r-1udh08x"],
        innerHTML: `
          <span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);">
            <span class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd" style="text-overflow: unset">
              <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style="text-overflow: unset">Quotes</span>
            </span>
          </span>
        `,
      });

      contentDiv.appendChild(iconDiv);
      contentDiv.appendChild(countDiv);
      link.appendChild(contentDiv);
      buttonWrapper.appendChild(link);

      return buttonWrapper;
    },

    // 投稿ページかどうかを判定
    isTweetPage: function () {
      return (
        document.querySelector(
          "div.css-175oi2r.r-1kbdv8c.r-18u37iz.r-1oszu61.r-3qxfft.r-n7gxbd.r-2sztyj.r-1efd50x.r-5kkj8d.r-h3s6tt.r-1wtj0ep"
        ) !== null
      );
    },

    addQuoteElement: function () {
      // 投稿ページの場合ボタンを表示
      if (!this.isTweetPage()) {
        return;
      }

      const targetDiv = document.querySelector('div[role="group"][id^="id__"]');
      if (
        !targetDiv ||
        targetDiv.querySelector('[data-testid="tweetEngagements"]')
      ) {
        return;
      }

      const quoteButton = this.createQuoteButton();
      targetDiv.insertBefore(quoteButton, targetDiv.children[4]);
    },

    init: function () {
      const debouncedAddQuoteElement = Utils.debounce(
        () => this.addQuoteElement(),
        250
      );

      // URL変更の監視
      let lastUrl = location.href;
      const urlObserver = new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
          lastUrl = url;
          debouncedAddQuoteElement();
        }
      });

      urlObserver.observe(document, { subtree: true, childList: true });

      const retryInterval = setInterval(debouncedAddQuoteElement, 1000);

      window.addEventListener("popstate", debouncedAddQuoteElement);
      history.pushState = ((origPushState) => {
        return function (state, title, url) {
          origPushState.apply(this, arguments);
          debouncedAddQuoteElement();
        };
      })(history.pushState);

      history.replaceState = ((origReplaceState) => {
        return function (state, title, url) {
          origReplaceState.apply(this, arguments);
          debouncedAddQuoteElement();
        };
      })(history.replaceState);

      // DOMContentLoaded で初期化
      document.addEventListener("DOMContentLoaded", () => {
        debouncedAddQuoteElement();
        clearInterval(retryInterval);
      });

      debouncedAddQuoteElement();
    },
  };

  // -----------------------------------------------------------------------------------
  // メイン処理
  // -----------------------------------------------------------------------------------
  function main() {
    loadConfig();
    SettingsModule.createSettingsUI();
    setupKeyboardShortcut();
    setupMenuCommand();

    // タイムスタンプの更新を定期的に実行
    setInterval(() => TimestampModule.updateTimestamps(), 1000);

    // アイコン情報表示を初期化
    replaceTwitterIcons();

    // サイドバーの情報表示を初期化
    SidebarModule.init();

    // 動画プレイヤーの設定を監視
    VideoModule.observeVideos();

    // 引用ツイートボタンの追加を初期化
    TweetEngagementModule.init();
  }

  // ページ読み込み時にメイン処理を実行
  window.addEventListener("load", main);
})();
