<template>
    <n-space vertical size="large">
        <n-layout>
            <n-layout-header>
                <n-space>
                    <n-button type="tertiary" @mouseover="this.id = 0" @click="displayRelation">
                        黄鹤楼
                    </n-button>
                    <n-button type="tertiary" @mouseover="this.id = 1" @click="displayRelation">
                        武当山
                    </n-button>
                    <n-button type="tertiary" @mouseover="this.id = 2" @click="displayRelation">
                        西湖
                    </n-button>
                    <n-button type="tertiary" @mouseover="this.id = 3" @click="displayRelation">
                        莫干山
                    </n-button>
                </n-space>
            </n-layout-header>
            <n-layout-content content-style="padding: 0px;">
                <div id="map" style="position:absolute;width:100%; height: 100%">
                </div>
                <div id="result" v-if="card">
                    <n-card v-if="card" hoverable closable @close="this.card = false">
                        <template #header-extra>
                            <n-button-group>
                                <n-button ghost @click="displayRelation"> result </n-button>
                                <n-button ghost @click="displayIntroduciton">
                                    introduction
                                </n-button>
                            </n-button-group>
                        </template>
                        <template #action>
                            <div id="relation" style="width: 100%; height: 300px"></div>
                        </template>
                    </n-card>
                </div>
            </n-layout-content>
            <n-layout-footer>
                <n-space justify="center">
                    <n-input v-model:value="value" type="text" placeholder="输入可能正确的景点......" />
                    <n-button type="tertiary" @click="this.card = !this.card">
                        提交
                    </n-button>
                </n-space>
            </n-layout-footer>
        </n-layout>
    </n-space>
</template>
<script>
import * as echarts from "echarts";
import sample from "./assets/images/sample.png";
var _sample = "image://" + sample;
var myChart;
import { place as json } from "./data";
function displayMap() {
    var myChart;
    let newPormise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 500);
    });
    newPormise.then(() => {
        const dom = document.getElementById("map");
        myChart = echarts.init(dom);
        myChart.on("click", function (params) {
            console.log(params.data["name"]);
        })
        var datas = [];
        for (let i = 0; i < 100; i++) {
            datas.push({ name: `Node ${i}`, symbol: _sample, symbolSize: 70 });
        }
        var option = {
            backgroundColor: "#fbeed3",
            title: {
                text: "map",
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            layoutAnimation: true,
            scaleLimit: {
                min: 1,
                max: 6,
            },
            draggable: true,
            series: [
                {
                    type: "graph",
                    layout: "force",
                    roam: true,
                    force: {
                        repulsion: 100
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
        option && myChart.setOption(option);
    });
}
displayMap();
export default {
    data() {
        return {
            tag: [false, false, false, false],
            card: false,
            id: 0,
            feature: [],
            featureNum: -1,
            ansId: 1,
        }
    },
    methods: {
        displayRelation() {
            this.card = true;
            let mypromise = new Promise((resolve) => {
                setTimeout(function () {
                    resolve();
                }, 100);
            });
            mypromise.then(() => {
                var dom = document.getElementById("relation");
                //this.title = json[this.id]["name"];
                if (myChart != null && myChart !== "" && myChart !== undefined) {
                    try {
                        myChart.dispose(); // 销毁
                    } catch (error) { }
                }
                myChart = echarts.init(dom);
                var option;
                var datas = [];
                datas[0] = {
                    name: json[this.id]["name"],
                    x: 50,
                    y: 60,
                    symbolSize: 60,
                    colors: "#ffffff",
                };
                var key;
                for (key in json[this.id]) {
                    if (key !== "name" && json[this.id][key] !== "") {
                        if (json[this.id][key] === json[this.ansId][key]) {
                            datas.push({
                                name: json[this.id][key],
                                symbolSize: [100, 30],
                                symbol: "rect",
                                colors: "#66c18c",
                            });
                            let flag = this.feature.indexOf(json[this.id][key]);
                            if (flag === -1) {
                                this.feature.push(json[this.id][key]);
                                this.featureNum++;
                                this.tag[this.featureNum] = true;
                            }
                        } else {
                            datas.push({
                                name: json[this.id][key],
                                symbolSize: [100, 30],
                                symbol: "rect",
                                colors: "#d1c2d3",
                            });
                        }
                    }
                }
                console.log(datas);
                var links = [];
                for (key in json[this.id]) {
                    if (key !== "name" && json[this.id][key] !== "") {
                        links.push({
                            source: json[this.id][key],
                            target: json[this.id]["name"],
                        });
                    }
                }
                option = {
                    title: {
                        text: json[this.id]["name"],
                    },
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: "quinticInOut",
                    series: [
                        {
                            type: "graph",
                            layout: "force",
                            force: {
                                repulsion: 1800,
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
                option && myChart.setOption(option);
            });
        },
        displayIntroduciton() {
            var dom = document.getElementById("relation");
            dom.innerHTML = `
        <p>黄鹤楼，位于湖北省武汉市武昌区，地处蛇山之巅，濒临万里长江，为武汉市地标建筑；始建于三国吴黄武二年（223年），历代屡加重修，现存建筑以清代“同治楼”为原型设计，重建于1985年；因唐代诗人崔颢登楼所题《黄鹤楼》一诗而名扬四海。自古有“天下绝景”之美誉，与晴川阁、古琴台并称为“武汉三大名胜”，与湖南岳阳岳阳楼、江西南昌滕王阁并称为“江南三大名楼”，是“武汉十大景”之首、“中国古代四大名楼”之一、“中国十大历史文化名楼”之一，世称"天下江山第一楼"。</p>
        `;
        }
    },
};
</script>
  
<style>
.n-layout-header,
.n-layout-footer {
    background: rgba(146, 209, 245, 0.4);
    padding: 24px;
    height: 10vh;
}

.n-layout-sider {
    background: rgba(255, 175, 175, 0.2);
}

.n-layout-content {
    background: rgba(255, 175, 175, 0.2);
    height: 80vh;
}
</style>
  