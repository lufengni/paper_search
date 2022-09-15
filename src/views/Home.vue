<template>
  <div class="home">
    <search-bar @search="toSearchPage"></search-bar>

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
  data () {
    return {
      searchText: "",
      data: [
        {
          title: '<span style="color: red">大数据</span>赋能高炉炼铁智能应用',
          authorList: ['唐文文', '李欣', '刘小杰', '李宏扬', '张淑会'],
          summary: '大数据是具有获取、存储、整理、分析数据等功能的合集，大数据分析挖掘数据规律能够帮助企业制定科学的发展战略，推动产业发展创新驱动模式。本文探讨了大数据对于企业发展信息化数字化的推动作用，指出了发展大数据分析技术融入高炉炼铁生产应用的时代需求，简要概述了大数据分析技术的重心和应用于高炉炼铁的分析挖掘流程，剖析了大数据分析在高炉炼铁中的应用价值。在炼铁智能平台构建、高炉炉温预测、高炉铁水质量预测、高炉炉缸侵蚀判断方面，阐述了大数据在高炉炼铁中的多项应用。展望了大数据赋能后高炉炼铁在炼铁大数据分析模式、炼铁数据仓库融合架构、算法与炼铁智能控制结合、炼铁数据资源平台化、炼铁工业互联网的发展趋势。通过先进的大数据信息技术与高炉炼铁产业深度融合，高炉炼铁行业将朝着智能、绿色、数字化、一体化的发展方向实现新突破。',
          keywordList: "大数据;高炉炼铁;智能平台;智能预测;炼铁发展;"
        },
        {
          title: '<span style="color: red">大数据</span>赋能高炉炼铁智能应用',
          authorList: ['唐文文', '李欣', '刘小杰', '李宏扬', '张淑会'],
          summary: '大数据是具有获取、存储、整理、分析数据等功能的合集，大数据分析挖掘数据规律能够帮助企业制定科学的发展战略，推动产业发展创新驱动模式。本文探讨了大数据对于企业发展信息化数字化的推动作用，指出了发展大数据分析技术融入高炉炼铁生产应用的时代需求，简要概述了大数据分析技术的重心和应用于高炉炼铁的分析挖掘流程，剖析了大数据分析在高炉炼铁中的应用价值。在炼铁智能平台构建、高炉炉温预测、高炉铁水质量预测、高炉炉缸侵蚀判断方面，阐述了大数据在高炉炼铁中的多项应用。展望了大数据赋能后高炉炼铁在炼铁大数据分析模式、炼铁数据仓库融合架构、算法与炼铁智能控制结合、炼铁数据资源平台化、炼铁工业互联网的发展趋势。通过先进的大数据信息技术与高炉炼铁产业深度融合，高炉炼铁行业将朝着智能、绿色、数字化、一体化的发展方向实现新突破。',
          keywordList: "大数据;高炉炼铁;智能平台;智能预测;炼铁发展;"
        },
        {
          title: '<span style="color: red">大数据</span>赋能高炉炼铁智能应用',
          authorList: ['唐文文', '李欣', '刘小杰', '李宏扬', '张淑会'],
          summary: '大数据是具有获取、存储、整理、分析数据等功能的合集，大数据分析挖掘数据规律能够帮助企业制定科学的发展战略，推动产业发展创新驱动模式。本文探讨了大数据对于企业发展信息化数字化的推动作用，指出了发展大数据分析技术融入高炉炼铁生产应用的时代需求，简要概述了大数据分析技术的重心和应用于高炉炼铁的分析挖掘流程，剖析了大数据分析在高炉炼铁中的应用价值。在炼铁智能平台构建、高炉炉温预测、高炉铁水质量预测、高炉炉缸侵蚀判断方面，阐述了大数据在高炉炼铁中的多项应用。展望了大数据赋能后高炉炼铁在炼铁大数据分析模式、炼铁数据仓库融合架构、算法与炼铁智能控制结合、炼铁数据资源平台化、炼铁工业互联网的发展趋势。通过先进的大数据信息技术与高炉炼铁产业深度融合，高炉炼铁行业将朝着智能、绿色、数字化、一体化的发展方向实现新突破。',
          keywordList: "大数据;高炉炼铁;智能平台;智能预测;炼铁发展;"
        },
        {
          title: '<span style="color: red">大数据</span>赋能高炉炼铁智能应用',
          authorList: ['唐文文', '李欣', '刘小杰', '李宏扬', '张淑会'],
          summary: '大数据是具有获取、存储、整理、分析数据等功能的合集，大数据分析挖掘数据规律能够帮助企业制定科学的发展战略，推动产业发展创新驱动模式。本文探讨了大数据对于企业发展信息化数字化的推动作用，指出了发展大数据分析技术融入高炉炼铁生产应用的时代需求，简要概述了大数据分析技术的重心和应用于高炉炼铁的分析挖掘流程，剖析了大数据分析在高炉炼铁中的应用价值。在炼铁智能平台构建、高炉炉温预测、高炉铁水质量预测、高炉炉缸侵蚀判断方面，阐述了大数据在高炉炼铁中的多项应用。展望了大数据赋能后高炉炼铁在炼铁大数据分析模式、炼铁数据仓库融合架构、算法与炼铁智能控制结合、炼铁数据资源平台化、炼铁工业互联网的发展趋势。通过先进的大数据信息技术与高炉炼铁产业深度融合，高炉炼铁行业将朝着智能、绿色、数字化、一体化的发展方向实现新突破。',
          keywordList: "大数据;高炉炼铁;智能平台;智能预测;炼铁发展;"
        }
      ]

    };
  },
  computed: {

  },
  methods: {
    toSearchPage (searchText) {
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
.home {
  padding: 100px;
}
</style>