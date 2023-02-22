<template>
  <div class="details">
    <!-- <header class="header"></header> -->
    <div :class="container">
      <div class="content">
        <div class="title" v-html="$store.getters.getDetail.title">
          <!-- {{ content.title }} -->
        </div>
        <div class="author">
          {{ $store.getters.getDetail.authorList }}
        </div>
        <div class="abstract">
          <div class="text-title">
            <div class="text">摘要:</div>
          </div>
          <div class="abstract-content">
            {{ $store.getters.getDetail.summary }}
          </div>
        </div>
        <div class="keyworld">
          <div class="text-title">
            <div class="text">关键词:</div>
          </div>
          <div class="keyworld-content">
            {{ $store.getters.getDetail.keywordList }}
          </div>
        </div>
      </div>
      <div class="operate">
        <button class="btn read-online">在线阅读</button>
        <button class="btn Download">整本下载</button>
      </div>
      <div class="related-data">
        <!-- <hr class="hr-solid-content"
            data-content="论文引用次数" />
        <LineChart></LineChart> -->

        <hr class="hr-solid-content" data-content="论文引用关系" />
        <!-- <CitedPapers :data="dataCited" :links="linksCited"></CitedPapers> -->
        <CitedPapers></CitedPapers>

        <hr class="hr-solid-content" data-content="作者合作关系" />
        <AuthorPartnership></AuthorPartnership>
      </div>


    </div>
  </div>
</template>

<script>
import CitedPapers from '../components/CitedPapers.vue';
import AuthorPartnership from '../components/AuthorPartnership.vue';
export default {
  components: {
    CitedPapers, AuthorPartnership
    // LineChart: () => ({
    //   component: import('../components/LineChart.vue')
    // }),
    // CitedPapers: () => ({
    //   component: import('../components/CitedPapers.vue')
    // }),
    // AuthorPartnership: () => ({
    //   component: import('../components/AuthorPartnership.vue')
    // })
  },
  // directives: {
  //   'asyncLoadCpn': {
  //     bind: function (el, binding) {
  //       const ib = new IntersectionObserver(function (entries) {
  //         if (entries[0].intersectionRatio <= 0) {
  //           console.log('不在可视区');
  //           return
  //         }
  //         console.log(entries[0].target);
  //         console.log(binding, 1);
  //         console.log(binding.value, 2);
  //         console.log(el);
  //         // const vm = binding.value.vm
  //         // vm.showCpn()
  //         el.display
  //         console.log('在可视区');
  //       })
  //       ib.observe(el)
  //     }
  //   }
  // },

  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      isShow: false,
      dataCited: [
        // {
        //   name: 'test2'
        // },
        // {
        //   name: '6'
        // },
        // {
        //   name: '3'
        // },
        // {
        //   name: '5'
        // },
      ],
      linksCited: [
        // {
        //   source: 'test2',
        //   target: '6',
        //   name: '引用'
        // },
        // {
        //   source: 'test2',
        //   target: '3',
        //   name: '引用'
        // },
        // {
        //   source: 'test2',
        //   target: '5',
        //   name: '引用'
        // },
      ],
      // dataCited: [{
      //   name: '侯亮平',
      //   des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
      //   // symbolSize: 100,
      //   itemStyle: {
      //     normal: {
      //       // color: 'red'
      //     }
      //   }
      // }, {
      //   name: '李达康',
      //   des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '祁同伟',
      //   des: '汉东省公安厅厅长',
      //   symbolSize: 100
      // }, {
      //   name: '陈岩石',
      //   des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '陆亦可',
      //   des: '汉东省检察院反贪局一处处长',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '高育良',
      //   des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。',
      //   symbolSize: 100
      // }, {
      //   name: '沙瑞金',
      //   des: '汉东省省委书记',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '高小琴',
      //   des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
      // }, {
      //   name: '高小凤'
      // }, {
      //   name: '赵东来',
      //   des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '程度',
      //   des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',
      // }, {
      //   name: '吴惠芬',
      //   des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '赵瑞龙',
      //   des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
      // }, {
      //   name: '赵立春',
      //   des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
      // }, {
      //   name: '陈海',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '大数据赋能高炉炼铁智能应用',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '刘新建'
      // }, {
      //   name: '欧阳菁'
      // }, {
      //   name: '吴心怡',
      //   itemStyle: {
      //     normal: {
      //       color: 'red'
      //     }
      //   }
      // }, {
      //   name: '蔡成功'
      // }, {
      //   name: '丁义珍'
      // }],
      // linksCited: [{
      //   source: '高育良',
      //   target: '侯亮平',
      //   name: '师生',
      //   des: '侯亮平是高育良的得意门生'
      // }, {
      //   source: '高育良',
      //   target: '祁同伟',
      //   name: '师生'
      // }, {
      //   source: '赵立春',
      //   target: '高育良',
      //   name: "前领导"
      // }, {
      //   source: '赵立春',
      //   target: '赵瑞龙',
      //   name: "父子"
      // }, {
      //   source: '赵立春',
      //   target: '刘新建',
      //   name: "前部队下属"
      // }, {
      //   source: '李达康',
      //   target: '赵立春',
      //   name: "前任秘书"
      // }, {
      //   source: '祁同伟',
      //   target: '高小琴',
      //   name: "情人"
      // }, {
      //   source: '陈岩石',
      //   target: '陈海',
      //   name: "父子"
      // }, {
      //   source: '陆亦可',
      //   target: '陈海',
      //   name: "属下"
      // }, {
      //   source: '沙瑞金',
      //   target: '陈岩石',
      //   name: "故人"
      // }, {
      //   source: '祁同伟',
      //   target: '陈海',
      //   name: "师哥"
      // }, {
      //   source: '祁同伟',
      //   target: '侯亮平',
      //   name: "师哥"
      // }, {
      //   source: '侯亮平',
      //   target: '陈海',
      //   name: "同学，生死朋友"
      // }, {
      //   source: '高育良',
      //   target: '吴惠芬',
      //   name: "夫妻"
      // }, {
      //   source: '陈海',
      //   target: '赵东来',
      //   name: "朋友"
      // }, {
      //   source: '高小琴',
      //   target: '高小凤',
      //   name: "双胞胎",
      //   symbolSize: '1'
      // }, {
      //   source: '赵东来',
      //   target: '陆亦可',
      //   name: "爱慕"
      // }, {
      //   source: '祁同伟',
      //   target: '程度',
      //   name: "领导"
      // }, {
      //   source: '高育良',
      //   target: '高小凤',
      //   name: "情人"
      // }, {
      //   source: '赵瑞龙',
      //   target: '祁同伟',
      //   name: "勾结",
      //   symbolSize: '1',
      // }, {
      //   source: '李达康',
      //   target: '赵东来',
      //   name: "领导"
      // }, {
      //   source: '赵瑞龙',
      //   target: '程度',
      //   name: "领导"
      // }, {
      //   source: '沙瑞金',
      //   target: '李达康',
      //   name: "领导"
      // }, {
      //   source: '沙瑞金',
      //   target: '高育良',
      //   name: "领导"
      // }, {
      //   source: '祁同伟',
      //   target: '大数据赋能高炉炼铁智能应用',
      //   name: "夫妻"
      // }, {
      //   source: '吴惠芬',
      //   target: '大数据赋能高炉炼铁智能应用',
      //   name: "朋友"
      // }, {
      //   source: '李达康',
      //   target: '欧阳菁',
      //   name: "夫妻"
      // }, {
      //   source: '赵瑞龙',
      //   target: '刘新建',
      //   name: "洗钱工具"
      // }, {
      //   source: '赵瑞龙',
      //   target: '高小琴',
      //   name: "勾结，腐化",
      //   symbolSize: '1'
      // }, {
      //   source: '赵瑞龙',
      //   target: '高小凤',
      //   name: "腐化"
      // }, {
      //   source: '吴心怡',
      //   target: '陆亦可',
      //   name: "母女"
      // }, {
      //   source: '吴心怡',
      //   target: '吴惠芬',
      //   name: "姐妹"
      // }, {
      //   source: '蔡成功',
      //   target: '侯亮平',
      //   name: "发小"
      // }, {
      //   source: '蔡成功',
      //   target: '欧阳菁',
      //   name: "举报",
      //   lineStyle: {
      //     normal: {
      //       type: 'dotted',
      //       color: '#000'
      //     }
      //   }
      // }, {
      //   source: '欧阳菁',
      //   target: '刘新建',
      //   name: "举报",
      //   lineStyle: {
      //     normal: {
      //       type: 'dotted',
      //       color: '#000'
      //     }
      //   }
      // }, {
      //   source: '刘新建',
      //   target: '赵瑞龙',
      //   name: "举报",
      //   lineStyle: {
      //     normal: {
      //       type: 'dotted',
      //       color: '#000'
      //     }
      //   }
      // }, {
      //   source: '李达康',
      //   target: '丁义珍',
      //   name: "领导"
      // }, {
      //   source: '高小琴',
      //   target: '丁义珍',
      //   name: "策划出逃"
      // }, {
      //   source: '祁同伟',
      //   target: '丁义珍',
      //   name: "勾结"
      // }, {
      //   source: '赵瑞龙',
      //   target: '丁义珍',
      //   name: "勾结"
      // }]

    };
  },
  computed: {
    container() {
      if (this.windowWidth > 750) {
        return 'pc_container'
      } else {
        return 'mobile_container'
      }
    }



  },
  mounted() {
    console.log(this.$store.state.screenWidth);
    let set = new Set()
    let data = {
      "success": true,
      "code": 200,
      "message": "操作成功",
      "queryData": [
        {
          "id": 44,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 45,
            "paperId": null,
            "publishedYear": null,
            "title": "6"
          }
        },
        {
          "id": 42,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 3,
            "paperId": null,
            "publishedYear": null,
            "title": "3"
          }
        },
        {
          "id": 43,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 44,
            "paperId": null,
            "publishedYear": null,
            "title": "5"
          }
        }
      ]

    }

    // let dataCited = []
    // let linksCited = []
    data.queryData.map(item => {
      if (!set.has(item.startNode.title)) {

        this.dataCited.push({
          name: item.startNode.title,
          des: item.startNode.title,
        })
        set.add(item.startNode.title)

      }

      if(!set.has(item.endNode.title)) {

        this.dataCited.push({
          name: item.endNode.title,
          des: item.endNode.title,
        })
        set.add(item.endNode.title)

      }

      this.linksCited.push({
        source: item.startNode.title,
        target: item.endNode.title,
        name: '引用'
      })

    })

    console.log(this.dataCited, this.linksCited)
  },
  created() {
    // this.$axios.get('http://10.33.124.44:8200/data/yearReferenceTimes', {
    //   params: {
    //     pageIndex: this.content.thesisIndex
    //   }
    // })
    //   .then((data) => {

    //   })

    // this.$axios.get('http://10.33.90.141:8200/data/paper', {
    //   params: {
    //     pageIndex: this.content.thesisIndex
    //   }
    // })
    //   .then((data) => {
    //     console.log(data.data.queryData);
    //     const datas = data.data.queryData
    //     datas.forEach((element, index) => {
    //       this.links[index] = {
    //         sid: element.startNode.id,
    //         tid: element.endNode.id,
    //         source: element.startNode.title,
    //         target: element.endNode.title,
    //         type: "resolved",
    //         rela: "引用",
    //       }
    //     })
    //     console.log(this.links);
    //   })


  },
  methods: {
    showCpn() {
      this.isShow = true
    },
  },
  watch: {
    '$store.state.screenWidth': function (val) { //监听屏幕宽度变化
      this.windowWidth = val;
    }
  },

};
</script>

<style lang="scss" scoped>
@import '../css/mobile_container.scss';

.details {
  // width: 96%;
  padding-top: 15px;
}

.pc_container {
  width: 65rem;
  margin: 0 auto;

  // height: 100%;
  // border: 1px solid black;
  .content {
    .title {
      font-size: 1.5rem;
      padding: 25px 0 15px 0;
      color: #333333;
    }

    .author {
      font-size: 14px;
      line-height: 27px;
      text-align: center;
      color: #666666;
    }

    .abstract {
      padding: 6px 6px;
      text-align: left;
      font-size: 1rem;
      display: flex;
      color: #666666;

      .text {
        width: 2.5rem;
        color: #000;
      }
    }

    .text-title {
      font-weight: bold;
      padding-right: 5px;
    }

    .keyworld {
      padding-top: 6px;
      text-align: left;
      display: flex;
      color: #666666;

      .text {
        width: 3.4rem;
        color: #000;
      }
    }
  }

  .operate {
    margin: 30px 0;
    text-align: left;

    .btn {
      width: 89px;
      height: 32px;
      color: #fff;
      padding: 0 8px;
      margin: 0 8px;
      border: none;
    }

    .read-online {
      background: #30b7d7;
    }

    .Download {
      background: #3594ff;
    }
  }

  .related-data {

    // margin: auto;
    .hr-solid-content {
      color: #a2a9b6;
      border: 0;
      font-size: 16px;
      padding: 1em 0;
      position: relative;
    }

    .hr-solid-content::before {
      content: attr(data-content);
      position: absolute;
      padding: 0 1ch;
      line-height: 1px;
      border: solid #d0d0d5;
      border-width: 0 99vw;
      width: fit-content;
      /* for 不支持fit-content浏览器 */
      white-space: nowrap;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>