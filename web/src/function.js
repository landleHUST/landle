import * as echarts from "echarts"
export const displayMap = (placeList) => {
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
            window.displayRelationM(params.data["id"]);
        })
        var datas = [];
        for (let i = 0; i < placeList.length; i++) {
            datas.push({ id: i,name: placeList[i]["name"], symbol: "rect", symbolSize: [210,150] });
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
                        repulsion: 1500
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

export const displayRelation= (id,correctId,placeList,featureList,correctFeatureList,myChart) =>{
    let mypromise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 100);
    });
    mypromise.then(() => {
        setTimeout(()=>{
        var dom = document.getElementById("relation");
        if (myChart != null && myChart !== "" && myChart !== undefined) {
            try {
                myChart.dispose(); // 销毁
            } catch (error) { }
        }
        dom.innerHTML='';
        myChart = echarts.init(dom);
        var option;
        var datas = [];
        datas[0] = {
            name: placeList[id]["name"],
            x: 50,
            y: 60,
            symbolSize: 60,
            colors: "#ffffff",
        };
        let i;
        for(i=0;i<placeList[id]["feature"].length;i++)
        {
            if(placeList[correctId]["feature"].indexOf(placeList[id]["feature"][i])!==-1)
            {
                if(correctFeatureList.indexOf(featureList[placeList[id]["feature"][i]-1])===-1)
                {
                    correctFeatureList.push(featureList[placeList[id]["feature"][i]-1]);
                }
                datas.push({
                    name: featureList[placeList[id]["feature"][i]-1],
                    symbolSize: [100,30],
                    symbol: "rect",
                    colors: "#66c18c"
                })
            }
            else
            {
                datas.push({
                    name: featureList[placeList[id]["feature"][i]-1],
                    symbolSize: [100,30],
                    symbol: "rect",
                    colors: "#d1c2d3"
                })
            }
        }
        var links = [];
        for (i=0;i<placeList[id]["feature"].length;i++) 
        {
            links.push({
                source: featureList[placeList[id]["feature"][i]-1],
                target: placeList[id]["name"]
            });
        }
        option = {
            title: {
                text: placeList[id]["name"]
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
        console.log(option);
        option && myChart.setOption(option);
        })
    });
}