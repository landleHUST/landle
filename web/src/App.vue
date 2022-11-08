<template>
  <transition name="loadingOut">
    <div v-if="loading" id="loading"
      style="font-family:fontCh;overflow:hidden;position:relative;text-align: center;width:auto;height:auto;background-color: black;padding-top: 40vh;padding-bottom: 50vh;"
      @click="loadingTohome">
      <div style="font-size: 6vh;color: white;filter: contrast(15);" id="placeFirst"></div>
      <div style=";font-size: 6vh;color: white;filter: contrast(15);" id="featureFirst"></div>
      <div style=";font-size: 6vh;color: white;filter: contrast(15);" id="static"></div>
    </div>
  </transition>
  <transition name="homePage">
    <div id="homePage" v-if="homePage"
      style="padding-top:10vh;weight:auto;height:auto;text-align: center;position: absolute;">
      <div style="font-family:fontEn;font-size:10vh">landle</div>
      <br><br><br><br><br><br>
      <main>
        <n-space vertical style=";z-index: 100;">
          <n-button quaternary @click="signup = true"><img style="width:4vh" src="./assets/images/person-circle.svg">
            为你起个名字吧:)</n-button>
          <br>
          <n-button type="tertiary" @click="homeToRule">开始游戏</n-button>
        </n-space>
        <div id="signup" v-if="signup" style="position:absolute;padding:20vh 35vw;z-index: 101;">
          <n-card hoverable style="width:30vw;height: 15vh;border-radius: 2vh;">
            <template #action>
              <n-space vertical justify="center">
                <n-input v-model:value="name" placeholder="name......" />
                <n-button type="tertiary" @click="submitName">提交</n-button>
              </n-space>
            </template>
          </n-card>
        </div>
        <div class="icons" ref="icons">
          <div ref="vue" style="display: none">
            <img src="./assets/images/兵马俑.png" style="width:30vw">
          </div>
          <div ref="nuxt" style="display: none">
            <img src="./assets/images/长城.png" style="width:30vw">
          </div>
          <div ref="quasar" style="display: none">
            <img src="./assets/images/纳木错.png" style="width:30vw">
          </div>
          <div ref="vuepress" style="display: none">
            <img src="./assets/images/雅鲁藏布大峡谷.png" style="width:30vw">
          </div>
          <div ref="gridsome" style="display: none">
            <img src="./assets/images/大足石刻.png" style="width:30vw">
          </div>
        </div>
      </main>
    </div>
  </transition>
  <transition name="rule">
    <div class="g-container" v-if="rule">
      <div class="word">点击</div>
      <div class="word">任意</div>
      <div class="word">icon</div>
      <div class="word">寻找绿色tag</div>
      <div class="word">快来解锁</div>
      <div class="word">你的谜底</div>
      <n-button type="tertiary" @click="toMainPage" style="float:right;">skip</n-button>
    </div>
  </transition>
  <transition name="mainPage">
    <n-space id="mainPage" vertical size="small" v-if="mainPage" ref="mainPage">
      <n-layout-header style="position:relative;z-index: 1000000;border-radius: 2vh;" ref="header">
        <n-space justify="center">
          <n-button quaternary @click="toHomePage"><img src="./assets/images/house-fill.svg">Home</n-button>
          <n-input v-on:keyup="searchRelative" v-model:value="value" type="text" placeholder="输入可能正确的景点......" />
          <n-button type="tertiary" @click="submit">
            提交
          </n-button>
          <n-button quaternary @click="rankClick"><img src="./assets/images/boxes.svg">rank</n-button>
          <n-button quaternary @click="comment = true"><img src="./assets/images/chat-square-text.svg">comment
          </n-button>
        </n-space>
        <n-list v-if="search" hoverable clickable
          style="position:absolute;width:50vw;margin-left:25vw;border-radius: 2vh;">
          <n-list-item v-for="place in relativePlaceList" @click="relativeSearch(place)">
            <n-thing>
              {{ place }}
            </n-thing>
          </n-list-item>
        </n-list>
      </n-layout-header>
      <n-layout content-style="border-radius: 2vh;height:80vh" has-sider sider-placement="left">
        <div id="map" style="position:absolute;width:100%; height: 100%; border-radius:2vh">
          <div class="wrap" style="z-index:10000">
            <transition name="fade">
              <div v-show="show">
                <img src="./assets/images/mask.png" style="width:100vw;height:70vh">
              </div>
            </transition>
            <button @click="show = !show" style="z-index:1000">switch</button>
          </div>
        </div>
        <div id="result" v-if="card" style="padding:5vh 10vw">
          <n-card hoverable closable @close="this.card = false" style="width:80vw;height: 70vh;border-radius: 2vh;">
            <template #header-extra>
              <n-button-group>
                <n-button ghost @click="displayRelationM(id)"> result </n-button>
                <n-button ghost @click="displayIntroduciton">introduction</n-button>
              </n-button-group>
            </template>
            <template #action>
              <div id="relation" style="width: 100%; height: 50vh"></div>
              <n-space justify="center">
                <n-button type="tertiary" v-if="correctRe" @click="rePlay">再来一局</n-button>
              </n-space>
            </template>
          </n-card>
        </div>
        <div id="comment" v-if="comment" style="padding:10vh 10vw;overflow:scroll;">
          <n-card title="评论" hoverable closable @close="this.comment = false"
            style="width:80vw;height: 60vh;border-radius: 2vh;">
            <template #action>
              <n-space vertical>
                <n-input v-model:value="comments" type="textarea" placeholder="可以发表关于这个网站的评论，或者谈谈选中的景点在你眼中的印象......" />
                <n-button type="tertiary" @click="submitComment">提交</n-button>
                <n-card v-for="j in commentsList.length">
                  <template #header>
                    {{ commentsList[j - 1] }}
                  </template>
                  User:{{ user }} <br> {{ timeList[j - 1] }}
                </n-card>
              </n-space>
            </template>
          </n-card>
        </div>
        <div id="rank" v-if="rank" style="padding:10vh 10vw;overflow:scroll;">
          <n-card title="排行" hoverable closable @close="this.rank = false"
            style="width:80vw;height: 60vh;border-radius: 2vh;">
            <template #action>
              <n-space vertical>
                <n-card v-for="i in rankList.length">
                  <template #header>
                    第{{ i }}名 : {{ rankList[i - 1] }}
                  </template>
                </n-card>
              </n-space>
            </template>
          </n-card>
        </div>
        <n-layout-sider bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
          :native-scrollbar="true" :show-collapsed-content="false"
          style="height: 80vh;position:absolute;opacity: 1;z-index: 10000;">
          <n-scrollbar style="height: 75vh" trigger="none">
            <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuList"
              style="opacity: 1;z-index: 10000;" />
          </n-scrollbar>
        </n-layout-sider>
      </n-layout>
      <n-layout-footer style="border-radius: 2vh;" ref="footer">
        <n-space>
          <a href="https://github.com/landleHUST/landle" target="_blank" style="float: right;"><img style="width:5vh;"
              src="./assets/images/github.svg"></a>
          <n-tag v-for="feature in correctFeatureList" type="success">
            {{ feature }}
          </n-tag>
        </n-space>
      </n-layout-footer>
    </n-space>
  </transition>
</template>
<script>
import { ref } from "vue";
import * as echarts from "echarts"
import { placeList } from "./data"
import { featureList } from "./data"
import { gsap } from "gsap"
import { menuList } from "./data"
import { mapList } from "./data"
var myChart;
var map;
var correctId = Math.round(Math.random() * 60);
let commentsList = [];
let timeList = [];
let click = 0;
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
window.onload = function () //窗口打开即开始加载
{
  var num1 = document.getElementById("placeFirst");
  var i = 0;
  var id1 = setInterval(frame1, 40);
  function frame1() {
    if (i >= 60) {
      clearInterval(id1);
    } else {
      i++;
      num1.innerHTML = `我们一共收集了${i}个中国景点`;
    }
  }
  var j = 0;
  var num2 = document.getElementById("featureFirst");
  setTimeout(() => {
    var id2 = setInterval(frame2, 20);
    function frame2() {
      if (j >= 208) {
        clearInterval(id2);
      } else {
        j++;
        num2.innerHTML = `整理了${j}个景点标签`;
      }
    }
  }, 3000);

  var num3 = document.getElementById("static");
  setTimeout(() => {
    num3.innerHTML = `这个游戏用标签带你领略祖国大地`;
  }, 8000);
};
export default {
  setup() {
    return {
      value: ref(null),
      comments: ref(null),
      name: ref(null),
    }
  },
  data() {
    return {
      card: false,
      id: 5,
      correctFeatureList: [],
      feature: "",
      search: true,
      place: "",
      placeList: placeList,
      relativePlaceList: [],
      featureList: featureList,
      show: true,
      mainPage: false,
      loading: true,
      intro: true,
      statement: ["OUR", "PROJECT", "IS", "LANDLE", "!"],
      choose: 0,
      chooseId: 0,
      rule: false,
      homePage: false,
      width: window.innerWidth / 2,
      height: (window.innerHeight * 0.8) / 2,
      count: 15,
      index: 0,
      iconsList: ["nuxt", "vue", "quasar", "vuepress", "gridsome"],
      animationStart: false,
      menuList: menuList,
      comment: false,
      rank: false,
      singleComment: "",
      commentsList: [],
      time: "",
      signup: false,
      user: "",
      rank: false,
      rankList: [],
      gameTimes: 0,
      correctRe: false,
      i: "",
      j: "",
      timeList: []
    }
  },
  methods: {
    displayRelationM(id) {
      this.card = true;
      this.id = id;
      let mypromise = new Promise((resolve) => {
        setTimeout(function () {
          resolve();
        }, 100);
      });
      mypromise.then(() => {
        setTimeout(() => {
          var dom = document.getElementById("relation");
          if (myChart != null && myChart !== "" && myChart !== undefined) {
            try {
              myChart.dispose(); // 销毁
            } catch (error) { }
          }
          dom.innerHTML = '';
          myChart = echarts.init(dom);
          var option;
          var datas = [];
          datas[0] = {
            name: placeList[this.id]["name"],
            x: 50,
            y: 60,
            symbolSize: 60,
            colors: "#ffffff",
          };
          let i;
          for (i = 0; i < placeList[this.id]["feature"].length; i++) {
            if (placeList[correctId]["feature"].indexOf(placeList[this.id]["feature"][i]) !== -1) {
              if (this.correctFeatureList.indexOf(this.featureList[placeList[this.id]["feature"][i] - 1]) === -1) {
                this.correctFeatureList.push(this.featureList[placeList[this.id]["feature"][i] - 1]);
              }
              datas.push({
                name: this.featureList[placeList[this.id]["feature"][i] - 1],
                symbolSize: [100, 30],
                symbol: "rect",
                colors: "#66c18c"
              })
            }
            else {
              datas.push({
                name: this.featureList[placeList[this.id]["feature"][i] - 1],
                symbolSize: [100, 30],
                symbol: "rect",
                colors: "#d1c2d3"
              })
            }
          }
          var links = [];
          for (i = 0; i < placeList[this.id]["feature"].length; i++) {
            links.push({
              source: this.featureList[placeList[this.id]["feature"][i] - 1],
              target: placeList[this.id]["name"]
            });
          }
          option = {
            title: {
              text: placeList[this.id]["name"]
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            scaleLimit: {
              min: 1,
              max: 6,
            },
            draggable: true,
            series: [
              {
                type: "graph",
                layout: "force",
                force: {
                  repulsion: 1500,
                },
                label: {
                  show: true,
                },
                data: datas,
                // links: [],
                links: links,
                lineStyle: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0,
                },
                itemStyle: {
                  normal: {
                    color: function (params) {
                      return params.data.colors; //获取具体的参数
                    },
                  },
                },
              },
            ],
          };
          console.log(option);
          option && myChart.setOption(option);
        })
      });
    },
    displayMap() {
      let newPormise = new Promise((resolve) => {
        setTimeout(function () {
          resolve();
        }, 500);
      });
      newPormise.then(() => {
        const dom = document.getElementById("map");
        if (map != null && map !== "" && map !== undefined) {
          try {
            map.dispose(); // 销毁
          } catch (error) { }
        }
        map = echarts.init(dom);
        map.on("click", function (params) {
          window.displayRelationM(params.data["id"]);
          click++;
        })
        var datas = [];
        for (let i = 0; i < placeList.length; i++) {
          if (i !== correctId) {
            if (i === 25 || i === 30 || i === 24)
              datas.push({ id: i, name: placeList[i]["name"], symbol: mapList[i], symbolSize: 400 });
            else if (i === 12 || i === 23)
              datas.push({ id: i, name: placeList[i]["name"], symbol: mapList[i], symbolSize: 350 });
            else if (i === 33 || i === 35 || i === 29)
              datas.push({ id: i, name: placeList[i]["name"], symbol: mapList[i], symbolSize: 300 });
            else if (i === 46 || i === 41 || i === 31 || i === 42)
              datas.push({ id: i, name: placeList[i]["name"], symbol: mapList[i], symbolSize: 250 });
            else
              datas.push({ id: i, name: placeList[i]["name"], symbol: mapList[i], symbolSize: 200 });
          }
        }
        var option = {
          backgroundColor: "#fbeed3",
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: "quinticInOut",
          layoutAnimation: true,
          scaleLimit: {
            min: 0.5,
            max: 4,
          },
          draggable: true,
          series: [
            {
              type: "graph",
              layout: "force",
              roam: true,
              force: {
                repulsion: 2000
              },
              label: {
                show: false,
              },
              data: datas,
              lineStyle: {
                opacity: 0,
                width: 2,
                curveness: 0,
              },
            },
          ],
        };
        option && map.setOption(option);
      });
    },
    displayIntroduciton() {
      var dom = document.getElementById("relation");
      dom.innerHTML = `
        <p>${placeList[this.id]["introduction"]}</p>
        `;
    },
    submit() {
      click++;
      let i;
      this.search = false;
      for (i = 0; i < placeList.length; i++) {
        if (this.value === placeList[i]["name"]) {
          this.id = i;
          window.displayRelationM(this.id);
          if (i == correctId) {
            this.correctRe = true;
            this.congratulation();
          }
          break;
        }
      }
    },
    submitName() {
      this.user = this.name;
      this.name = "";
      this.signup = false;
    },
    submitComment() {
      let date = new Date();
      let a = date.getFullYear();
      let b = date.getMonth() + 1;
      let c = date.getDate();
      let d = date.getHours();
      let e = date.getMinutes()
      let h = date.getSeconds()
      this.time = `${a}年${b}月${c}日 ${d}:${e}:${h}`
      this.commentsList = commentsList;
      this.timeList = timeList;
      this.commentsList.push(this.comments);
      this.timeList.push(this.time);
      commentsList = this.commentsList;
      timeList = this.timeList;
      this.comments = "";
    },
    rankClick() {
      setTimeout(() => {
        this.rank = true;
      }, 10);
    },
    searchRelative() {
      this.relativePlaceList = [];
      this.search = true;
      let i;
      for (i = 0; i < this.placeList.length; i++) {
        if (this.placeList[i]["name"].indexOf(this.value) !== -1 && this.value != "") {
          this.relativePlaceList.push(this.placeList[i]["name"]);
        }
      }
    },
    relativeSearch(place) {
      this.value = place;
      this.search = false;
    },
    toMainPage() {
      this.rule = false;
      this.mainPage = true;
      this.displayMap()
    },
    toHomePage() {
      this.chooseId = 0;
      this.choose = 0;
      this.mainPage = false;
      this.homePage = true;
      this.popIcons();
    },
    switchStatement() {
      this.intro = !this.intro;
      var dom;
      setTimeout(() => {
        if (!this.choose) {
          this.chooseId++;
          this.chooseId = this.chooseId % this.statement.length;
          this.choose = 1;
          dom = document.getElementById("second");
          dom.innerHTML = this.statement[this.chooseId];
        } else {
          this.chooseId++;
          this.chooseId = this.chooseId % this.statement.length;
          this.choose = 0;
          dom = document.getElementById("first");
          dom.innerHTML = this.statement[this.chooseId];
        }
      }, 0);
    },
    loadingTohome() {
      this.loading = false;
      this.homePage = true;
      setTimeout(this.popIcons(), 10);
    },
    homeToRule() {
      this.homePage = false;
      this.rule = true;
      setTimeout(this.popIcons(), 10);
    },
    rePlay() {
      this.correctRe = false;
      console.log(click);
      this.rankList.push(click);
      click = 0;
      this.rankList = this.rankList.sort();
      for (let i = 0; i < this.rankList.length; i++)
        for (let j = 1; j < this.rankList.length; j++) {
          if (this.rankList[j] < this.rankList[j - 1]) {
            let tmp = this.rankList[j - 1];
            this.rankList[j - 1] = this.rankList[j];
            this.rankList[j] = tmp;
          }
        }

      correctId = Math.round(Math.random() * 60);
      this.correctFeatureList = [];
      console.log(this.rankList);
      this.card = false;
      this.displayMap();
    },
    popIcons() {
      let className = null;
      if (!this.animationStart) {
        className = this.iconsList[this.index];
        this.animationStart = true;
      } else {
        this.index =
          this.index == this.iconsList.length - 1 ? 0 : this.index + 1;
        className = this.iconsList[this.index];
      }
      setTimeout(() => {
        const icons = this.$refs.icons;
        const target = this.$refs[className];
        target.style = "";
        target.classList.add(className);
        const targetCopy = target.cloneNode(true);
        const newNodeList = [];
        for (let i = this.count; i--;) {
          let node = targetCopy.cloneNode(true);
          newNodeList.push(node);
          icons.appendChild(node);
        }
        const animationTask = [];
        var nodes = document.getElementsByClassName(className);
        nodes = Array.from(nodes);
        nodes.forEach((node) => {
          animationTask.push(this.animation(node));
        });
        Promise.all(animationTask).then(() => {
          newNodeList.forEach((node) => {
            node.parentNode.removeChild(node);
          });
          this.popIcons();
        });
      }, 10)
    },
    animation(node) {
      const width = this.width;
      const height = this.height;
      return new Promise((resolve, reject) => {
        try {
          const v = gsap.to(node, 0.3, {
            x: 2 * (Math.random() - 0.5) * width,
            y: 2 * (Math.random() - 0.5) * height,
            autoAlpha: Math.random() * 0.4 + 0.2,
            scale: Math.random() * 0.5 + 0.3,
            rotate: 2 * (Math.random() - 0.5) * 40,
          });
          setTimeout(() => {
            v.reverse().then(() => {
              resolve();
            });
          }, 3000);
        } catch (e) {
          reject(e);
        }
      });
    },
    congratulation() {
      !function (t, e) { !function t(e, n, a, i) { var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL); function r() { } function l(t) { var a = n.exports.Promise, i = void 0 !== a ? a : e.Promise; return "function" == typeof i ? new i(t) : (t(r, r), null) } var c, s, u, d, f, h, m, g, b, v = (u = Math.floor(1e3 / 60), d = {}, f = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (c = function (t) { var e = Math.random(); return d[e] = requestAnimationFrame((function n(a) { f === a || f + u - 1 < a ? (f = a, delete d[e], t()) : d[e] = requestAnimationFrame(n) })), e }, s = function (t) { d[t] && cancelAnimationFrame(d[t]) }) : (c = function (t) { return setTimeout(t, u) }, s = function (t) { return clearTimeout(t) }), { frame: c, cancel: s }), p = (g = {}, function () { if (h) return h; if (!a && o) { var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n"); try { h = new Worker(URL.createObjectURL(new Blob([e]))) } catch (t) { return void 0 !== typeof console && "function" == typeof console.warn && console.warn("馃帄 Could not load worker", t), null } !function (t) { function e(e, n) { t.postMessage({ options: e || {}, callback: n }) } t.init = function (e) { var n = e.transferControlToOffscreen(); t.postMessage({ canvas: n }, [n]) }, t.fire = function (n, a, i) { if (m) return e(n, null), m; var o = Math.random().toString(36).slice(2); return m = l((function (a) { function r(e) { e.data.callback === o && (delete g[o], t.removeEventListener("message", r), m = null, i(), a()) } t.addEventListener("message", r), e(n, o), g[o] = r.bind(null, { data: { callback: o } }) })) }, t.reset = function () { for (var e in t.postMessage({ reset: !0 }), g) g[e](), delete g[e] } }(h) } return h }), y = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: .9, gravity: 1, drift: 0, ticks: 200, x: .5, y: .5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 }; function M(t, e, n) { return function (t, e) { return e ? e(t) : t }(t && null != t[e] ? t[e] : y[e], n) } function w(t) { return t < 0 ? 0 : Math.floor(t) } function x(t) { return parseInt(t, 16) } function C(t) { return t.map(k) } function k(t) { var e = String(t).replace(/[^0-9a-f]/gi, ""); return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), { r: x(e.substring(0, 2)), g: x(e.substring(2, 4)), b: x(e.substring(4, 6)) } } function I(t) { t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight } function S(t) { var e = t.getBoundingClientRect(); t.width = e.width, t.height = e.height } function T(t, e, n, o, r) { var c, s, u = e.slice(), d = t.getContext("2d"), f = l((function (e) { function l() { c = s = null, d.clearRect(0, 0, o.width, o.height), r(), e() } c = v.frame((function e() { !a || o.width === i.width && o.height === i.height || (o.width = t.width = i.width, o.height = t.height = i.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), d.clearRect(0, 0, o.width, o.height), u = u.filter((function (t) { return function (t, e) { e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += e.wobbleSpeed, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble); var n = e.tick++ / e.totalTicks, a = e.x + e.random * e.tiltCos, i = e.y + e.random * e.tiltSin, o = e.wobbleX + e.random * e.tiltCos, r = e.wobbleY + e.random * e.tiltSin; return t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")", t.beginPath(), "circle" === e.shape ? t.ellipse ? t.ellipse(e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function (t, e, n, a, i, o, r, l, c) { t.save(), t.translate(e, n), t.rotate(o), t.scale(a, i), t.arc(0, 0, 1, r, l, c), t.restore() }(t, e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : (t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(o), Math.floor(r)), t.lineTo(Math.floor(a), Math.floor(e.wobbleY))), t.closePath(), t.fill(), e.tick < e.totalTicks }(d, t) })), u.length ? c = v.frame(e) : l() })), s = l })); return { addFettis: function (t) { return u = u.concat(t), f }, canvas: t, promise: f, reset: function () { c && v.cancel(c), s && s() } } } function E(t, n) { var a, i = !t, r = !!M(n || {}, "resize"), c = M(n, "disableForReducedMotion", Boolean), s = o && !!M(n || {}, "useWorker") ? p() : null, u = i ? I : S, d = !(!t || !s) && !!t.__confetti_initialized, f = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches; function h(e, n, i) { for (var o, r, l, c, s, d = M(e, "particleCount", w), f = M(e, "angle", Number), h = M(e, "spread", Number), m = M(e, "startVelocity", Number), g = M(e, "decay", Number), b = M(e, "gravity", Number), v = M(e, "drift", Number), p = M(e, "colors", C), y = M(e, "ticks", Number), x = M(e, "shapes"), k = M(e, "scalar"), I = function (t) { var e = M(t, "origin", Object); return e.x = M(e, "x", Number), e.y = M(e, "y", Number), e }(e), S = d, E = [], F = t.width * I.x, N = t.height * I.y; S--;)E.push((o = { x: F, y: N, angle: f, spread: h, startVelocity: m, color: p[S % p.length], shape: x[(c = 0, s = x.length, Math.floor(Math.random() * (s - c)) + c)], ticks: y, decay: g, gravity: b, drift: v, scalar: k }, r = void 0, l = void 0, r = o.angle * (Math.PI / 180), l = o.spread * (Math.PI / 180), { x: o.x, y: o.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(.11, .1 * Math.random() + .05), velocity: .5 * o.startVelocity + Math.random() * o.startVelocity, angle2D: -r + (.5 * l - Math.random() * l), tiltAngle: (.5 * Math.random() + .25) * Math.PI, color: o.color, shape: o.shape, tick: 0, totalTicks: o.ticks, decay: o.decay, drift: o.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * o.gravity, ovalScalar: .6, scalar: o.scalar })); return a ? a.addFettis(E) : (a = T(t, E, u, n, i)).promise } function m(n) { var o = c || M(n, "disableForReducedMotion", Boolean), m = M(n, "zIndex", Number); if (o && f) return l((function (t) { t() })); i && a ? t = a.canvas : i && !t && (t = function (t) { var e = document.createElement("canvas"); return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e }(m), document.body.appendChild(t)), r && !d && u(t); var g = { width: t.width, height: t.height }; function b() { if (s) { var e = { getBoundingClientRect: function () { if (!i) return t.getBoundingClientRect() } }; return u(e), void s.postMessage({ resize: { width: e.width, height: e.height } }) } g.width = g.height = null } function v() { a = null, r && e.removeEventListener("resize", b), i && t && (document.body.removeChild(t), t = null, d = !1) } return s && !d && s.init(t), d = !0, s && (t.__confetti_initialized = !0), r && e.addEventListener("resize", b, !1), s ? s.fire(n, g, v) : h(n, g, v) } return m.reset = function () { s && s.reset(), a && a.reset() }, m } function F() { return b || (b = E(null, { useWorker: !0, resize: !0 })), b } n.exports = function () { return F().apply(this, arguments) }, n.exports.reset = function () { F().reset() }, n.exports.create = E }(function () { return void 0 !== t ? t : "undefined" != typeof self ? self : this || {} }(), e, !1), t.confetti = e.exports }(window, {});
      var duration = 10 * 400;
      var animationEnd = Date.now() + duration;
      var defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0
      };

      var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        var particleCount = 150 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2
          }
        }));
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2
          }
        }));
      }, 250);
    }

  },
  created() {
    window.displayRelationM = this.displayRelationM;
  }
}
</script>
<style scoped>
@font-face {
  font-family: fontCh;
  src: url(./assets/chiFont.ttf);
}

@font-face {
  font-family: fontEn;
  src: url(./assets/fontEn.ttf);
}

.n-layout-header,
.n-layout-footer {
  background: rgba(146, 209, 245, 0.4);
  padding: 2.5vh;
  height: auto;
}

.n-layout-sider {
  background: rgba(255, 175, 175, 0.2);
}

.n-layout-content {
  background: rgba(255, 175, 175, 0.2);
  height: 75vh;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
    /*开始为原始大小*/
    opacity: 1;
  }

  25% {
    transform: scale(1.5);
    /*放大1.1倍*/
    opacity: 0.75;
  }

  50% {
    transform: scale(2);
    opacity: 0.3;
  }

  75% {
    transform: scale(5);
    opacity: 0;
  }

  100% {
    transform: scale(10);
    opacity: 0;
  }
}

.fade-enter-active {
  transform-origin: left center;
  animation: bounce-in 1s;
}

@keyframes loadingOut {
  0% {
    opacity: 1;
    filter: blur(0px);
  }

  100% {
    opacity: 0;
    filter: blur(100px);
  }
}

.loadingOut-leave-active {
  animation: loadingOut 2s ease;
}

.rule-leave-active {
  animation: loadingOut 2s ease;
}

@keyframes homePageIn {
  0% {
    opacity: 0;
    filter: blur(100px);
  }

  100% {
    opacity: 1;
    filter: blur(0px);
  }
}

.homePage-enter-active,
.rule-enter-actice,
.mainPage-enter-active {
  animation: homePageIn 2s ease;
}

@keyframes ruleIn {
  0% {
    opacity: 0;
    filter: blur(100px);
  }

  100% {
    opacity: 1;
    filter: blur(0px);
  }
}


@keyframes in {
  0% {
    filter: blur(80px);
    opacity: 0;
  }

  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes out {
  0% {
    filter: blur(0px);
    opacity: 1;
  }

  100% {
    filter: blur(80px);
    opacity: 0;
  }
}

.first-enter-active,
.second-enter-active {
  animation: in 1s ease;
}

.first-leave-active,
.second-leave-active {
  animation: out 4s ease;
}
</style>
<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}

#homePage {
  overflow: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

$speed: 12s;
$wordCount: 6;

.g-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  font-size: 120px;
  filter: contrast(15);
  font-family: fontCh;
}

.word {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: change $speed infinite ease-in-out;

  @for $i from 0 to $wordCount {
    &:nth-child(#{$i + 1}) {
      animation-delay: ($speed / ($wordCount + 1) * $i) - $speed;
    }
  }
}

@keyframes change {

  0%,
  5%,
  100% {
    filter: blur(0px);
    opacity: 1;
  }

  50%,
  80% {
    filter: blur(80px);
    opacity: 0;
  }
}

main {
  height: 85%;
  border-bottom: 1px solid fade-out(#313131, 0.7);

  .vue,
  .nuxt,
  .quasar,
  .vuepress,
  .gridsome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: -1;
  }
}

.icons {
  position: relative;
  height: 100%;
}
</style>