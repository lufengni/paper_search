<template>
  <div class="details">
    <!-- <header class="header"></header> -->
    <div :class="container">
      <div class="content">
        <div class="title">
          <!-- v-html="$store.getters.getDetail.titleHeightLight" -->
          <!-- {{ content.title }} -->
          {{ $store.getters.getDetail.title }}
        </div>
        <div class="author">
          {{ $store.getters.getDetail.authors }}
        </div>
        <div class="abstract">
          <div class="text-title">
            <div class="text">摘要:</div>
          </div>
          <div class="abstract-content"
               v-html="$store.getters.getDetail.summary">
            <!-- {{ $store.getters.getDetail.summary }} -->
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
            data-content="论文引用关系" />
        <CitedPapers :data="dataCited"
                     :links="linksCited"></CitedPapers>

        <hr class="hr-solid-content"
            data-content="作者合作关系" />
        <AuthorPartnership :data="dataAuthor"
                           :links="linksAuthor"></AuthorPartnership>
      </div>

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
      dataCited: this.$store.getters.getDataCited,
      linksCited: this.$store.getters.getLinksCited,
      dataAuthor: this.$store.getters.getDataAuthor,
      linksAuthor: this.$store.getters.getLinksAuthor,
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
    console.log(this.dataCited, this.$route.params)

  },
  created () {
    console.log(this.dataCited, this.$route.params.dataCited)
    // this.$axios.get('http://localhost:8200/paper/quote', {
    //   params: {
    //     pageTitle: this.$store.getters.getDetail.title
    //   }
    // })
    //   .then((data) => {
    //     console.log(data)
    //     let set = new Set()
    //     data.data.queryData.map(item => {
    //       if (!set.has(item.startNode.title)) {
    //         this.dataCited.push({
    //           name: item.startNode.title,
    //           des: item.startNode.title,
    //         })
    //         set.add(item.startNode.title)
    //       }
    //       if (!set.has(item.endNode.title)) {
    //         this.dataCited.push({
    //           name: item.endNode.title,
    //           des: item.endNode.title,
    //         })
    //         set.add(item.endNode.title)
    //       }
    //       this.linksCited.push({
    //         source: item.startNode.title,
    //         target: item.endNode.title,
    //         name: '引用'
    //       })
    //     })
    //     console.log(this.dataCited, this.linksCited)

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