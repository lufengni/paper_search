<template>
  <div class="root">
    <div class="home">
      <search-bar @search="toSearchPage"></search-bar>

    </div>

    <div class="dount_box" v-if="flage">
      <div class="donut"></div>
      <span class="text">搜索中...</span>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
  directives: {

  },
  data() {
    return {
      flage: false,
      searchText: "",
      data: [
      // <span style="color: red">大数据</span>
        {
          title: '基于<span style="color: red">大数据</span>的电商供应链成本控制策略',
          authorList: ['陈建鑫'],
          summary: '在社会经济迅速发展的环境下，大数据技术的应用显著提升了电商企业的管理质量，促进了电子商务迅速发展。在激烈的市场竞争环境下，电商企业需要强化生产、物流等供应链成本控制，以实现对供应链成本的显著降低，同时进一步提升企业的市场竞争力。大数据下要有效建构电商供应链成本控制策略，需要针对电商企业供应链管理中存在的实际问题制定针对性改善策略。本文结合某电商企业对其供应链成本控制中存在的问题进行了分析，并基于大数据提出了相应的成本控制策略。',
          keywordList: "大数据;电商;供应链成本控制;"
        },
        {
          title: ' <span style="color: red">大数据</span>驱动高校思想政治教育创新的价值、误区与路径',
          authorList: ['李晗', '逄红梅'],
          summary: '作为一种技术、一种工具、一种资源、一种思维，大数据已成为驱动高校思想政治教育创新发展的重要引擎。在思想政治教育工作实践中，要正确理解大数据价值，避免陷入盲目推崇大数据、片面夸大相关性、过度放纵混杂性的误区。发挥数据驱动优势、提高高校思想政治教育实效性，需要以大数据思维重构高校思想政治教育理念、优化高校思想政治教育大数据分析方法、探索高校思想政治教育精准模式创建。',
          keywordList: "	大数据驱动;高校思想政治教育;创新;路径;"
        },
        {
          title: '<span style="color: red">大数据</span>赋能高炉炼铁智能应用',
          authorList: ['唐文文', '李欣', '刘小杰', '李宏扬', '张淑会'],
          summary: '大数据是具有获取、存储、整理、分析数据等功能的合集，大数据分析挖掘数据规律能够帮助企业制定科学的发展战略，推动产业发展创新驱动模式。本文探讨了大数据对于企业发展信息化数字化的推动作用，指出了发展大数据分析技术融入高炉炼铁生产应用的时代需求，简要概述了大数据分析技术的重心和应用于高炉炼铁的分析挖掘流程，剖析了大数据分析在高炉炼铁中的应用价值。在炼铁智能平台构建、高炉炉温预测、高炉铁水质量预测、高炉炉缸侵蚀判断方面，阐述了大数据在高炉炼铁中的多项应用。展望了大数据赋能后高炉炼铁在炼铁大数据分析模式、炼铁数据仓库融合架构、算法与炼铁智能控制结合、炼铁数据资源平台化、炼铁工业互联网的发展趋势。通过先进的大数据信息技术与高炉炼铁产业深度融合，高炉炼铁行业将朝着智能、绿色、数字化、一体化的发展方向实现新突破。',
          keywordList: "大数据;高炉炼铁;智能平台;智能预测;炼铁发展;"
        },
        {
          title: '区域临床科研<span style="color: red">大数据</span>平台设计与实现',
          authorList: ['萧锘', '萧锘', '刘传丰', '冯东雷', '许德俊'],
          summary: '目的 建立区域电子病历大数据中心，构建区域临床科研大数据平台，在此基础上提供面向临床科研的大数据科研病例搜索和大数据科研课题探索服务。方法 通过运用临床术语、知识图谱、医学自然语言处理等，构建依据数据处理程度和应用目的性分层的数据资源中心，以及语义化的区域临床科研大数据平台，并提供数据抽取、语义标注、数据融合、数据服务等临床科研大数据基础服务。结果 实现区域内全量病例的快速处理和搜索，以及科研选题的验证。结论 区域临床科研大数据平台可以提升区域科研的效率、质量和水平，加快科研成果转化，从而促进区域内临床水平的提高。',
          keywordList: "	区域卫生;临床科研;大数据;知识图谱;自然语言处理;"
        }
      ]

    };
  },
  computed: {

  },
  methods: {
    toSearchPage(searchText) {
      this.flage = true

      setTimeout(() => {
        this.flage = false
        this.$store.commit({
          type: 'renewSearchList',
          searchList: this.data
        })
        //vuex方式，不传参
        this.searchText = searchText;
        this.$router.push({
          path: "/Search",
          query: {
            keyWorld: this.searchText,
          },
        });
      }, 1500)


      // const parData = JSON.stringify(this.data)
      // this.searchText = searchText;
      // this.$router.push({
      //   path: "/Search",
      //   query: {
      //     keyWorld: this.searchText,
      //     queryData: parData
      //   },
      // });

      // this.$axios.get('http://10.33.90.141:8200/search', {
      //   params: {
      //     page: 1,
      //     limit: 10,
      //     keyword: this.searchText
      //   }
      // })
      //   .then((data) => {
      //     console.log(data.data.queryData);
      //     this.$router.push({
      //       path: "/Search",
      //       query: {
      //         keyWorld: this.searchText,
      //         queryData: data.data.queryData
      //       },
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
    },
  },
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes rotation {

0% {

  transform: rotate(0deg);

}

100% {

  transform: rotate(360deg);

}

}
.dount_box {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text {
  margin-top: 10px;
}

.donut {
  width: 48px;

  height: 48px;
  border: 3px solid #FFF;

  border-radius: 50%;

  display: inline-block;

  position: relative;

  -webkit-animation: rotation 1s linear infinite;

  animation: rotation 1s linear infinite;

}

.donut:after {

  content: "";

  position: absolute;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);

  width: 56px;

  height: 56px;

  border-radius: 50%;

  border: 3px solid transparent;

  border-bottom-color: #FF3D00;

}

.root {
  width: 100vw;
  height: 100vh;
  background-color: #f4f3ef;
}

.home {
  padding: 100px;
}
</style>