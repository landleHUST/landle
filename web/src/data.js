export const place=[
    {
      "name": "黄鹤楼",
      "location": "湖北省",
      "level": "5A级",
      "religion": "",
      "kind": "塔楼"
    },
    {
      "name": "武当山",
      "location": "湖北省",
      "level": "5A级",
      "religion": "佛教",
      "kind": "山"
    },
    {
      "name": "西湖",
      "location": "浙江省",
      "level": "5A级",
      "religion": "",
      "kind": "湖泊"
    },
    {
      "name": "莫干山",
      "location": "浙江省",
      "level": "4A级",
      "religion": "佛教",
      "kind": "山"
    }
  ]
  
export function displayRelation(json){
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
                      opacity :0.8
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
}