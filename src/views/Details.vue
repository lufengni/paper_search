<template>
  <div class="details">
    <!-- <header class="header"></header> -->
    <div :class="container">
      <div class="content">
        <div class="title"
             v-html="$store.getters.getDetail.title">
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
            {{$store.getters.getDetail.keywordList}}
          </div>
        </div>
      </div>
      <div class="operate">
        <button class="btn read-online">在线阅读</button>
        <button class="btn Download">整本下载</button>
      </div>
      <div class="related-data">
        <hr class="hr-solid-content"
            data-content="论文引用次数" />
        <LineChart id="line"
                   :dataset="data1"></LineChart>

        <hr class="hr-solid-content"
            data-content="论文引用关系" />
        <CitedPapers id="cite"
                     :links="links"
                     :nodes="nodes"></CitedPapers>

        <hr class="hr-solid-content"
            data-content="作者合作关系" />
        <!-- <button @click="showCpn">点击加载组件</button> -->
        <AuthorPartnership id="partnership"
                           :links="links"
                           :nodes="nodes"></AuthorPartnership>
      </div>

      <!-- <div class="related-data">
        
      </div> -->
    </div>
  </div>
</template>

<script>
// import LineChart from '../components/LineChart.vue';
// import CitedPapers from '../components/CitedPapers.vue';
// import AuthorPartnership from '../components/AuthorPartnership.vue';
export default {
  components: {
    LineChart: () => ({
      component: import('../components/LineChart.vue')
    }),
    CitedPapers: () => ({
      component: import('../components/CitedPapers.vue')
    }),
    // AuthorPartnership
    AuthorPartnership: () => ({
      component: import('../components/AuthorPartnership.vue')
    })
  },
  directives: {
    'asyncLoadCpn': {
      bind: function (el, binding) {
        const ib = new IntersectionObserver(function (entries) {
          if (entries[0].intersectionRatio <= 0) {
            console.log('不在可视区');
            return
          }
          console.log(entries[0].target);
          console.log(binding, 1);
          console.log(binding.value, 2);
          console.log(el);
          // const vm = binding.value.vm
          // vm.showCpn()
          el.display
          console.log('在可视区');
        })
        ib.observe(el)
      }
    }
  },
  data () {
    return {
      windowWidth: document.documentElement.clientWidth,
      isShow: false,
      // content: JSON.parse(this.$route.query.detail),
      data1: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 }
      ],
      links: [
        { source: "同花顺", target: "IFIND", type: "resolved", rela: "主营产品" },
        {
          source: "同花顺",
          target: "手机金融信息服务",
          type: "resolved",
          rela: "主营产品",
        },
        {
          source: "同花顺",
          target: "互联网金融信息服务",
          type: "resolved",
          rela: "主营产品",
        },
        {
          source: "同花顺",
          target: "网上行情交易系统",
          type: "resolved",
          rela: "主营产品",
        },
        {
          source: "网上行情交易系统",
          target: "同花顺",
          type: "resolved",
          rela: "主营产品",
        },
        {
          source: "同花顺",
          target: "金融资讯及数据服务",
          type: "resolved",
          rela: "主营产品",
        },
        {
          source: "同花顺",
          target: "互联网金融",
          type: "resolved",
          rela: "主营产品",
        },
        {
          source: "随便",
          target: "互联网金融",
          type: "resolved",
          rela: "主营产品",
        },
      ],
      nodes: [
        { id: "同花顺", type: "resolved" },
        { id: "手机金融信息服务", type: "resolved" },
        { id: "IFIND", type: "resolved" },
        { id: "互联网金融信息服务", type: "resolved" },
        { id: "金融资讯及数据服务", type: "resolved" },
        { id: "互联网金融", type: "resolved" },
        { id: "网上行情交易系统", type: "resolved" },
        { id: "随便", type: "resolved" },
      ]

    };
  },
  computed: {
    container () {
      if (this.windowWidth > 750) {
        return 'pc_container'
      } else {
        return 'mobile_container'
      }
    }

  },
  mounted () {
    console.log(this.$store.state.screenWidth);
  },
  created () {
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
    showCpn () {
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