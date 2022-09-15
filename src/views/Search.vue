<template>
  <div class="search">
    <header class="header">
      <search-bar></search-bar>
    </header>
    <div class="search-list">
      <!-- $store.getters.getSearchList -->
      <div class="content"
           v-for="(item, index) in $store.getters.getSearchList"
           :key="index">
        <div class="title"
             v-html="item.title"
             @click="toDetais(item)">
        </div>
        <div class="abstract">
          {{ item.summary }}
        </div>
        <div class="author">
          {{ item.authorList }}
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
  data () {
    return {
      searchText: "",
      // list: JSON.parse(this.$route.query.queryData),
    };
  },
  mounted () {
    console.log(this.$store.getters.getSearchList);
    // console.log(this.$route.query.queryData);
  },
  computed: {
    // searchList () {
    //   return this.$store.state.searchList
    // }
  },
  methods: {
    toSearchPage (searchText) {
      this.searchText = searchText;
    },
    toDetais (item) {
      //vuex方式，不传参

      this.$store.commit({
        type: 'renewDetail',
        detail: item
      })
      this.$router.push({
        path: "/Details",
      });
      // const parItem = JSON.stringify(item)
      // this.$router.push({
      //   path: "/Details",
      //   query: {
      //     detail: parItem,
      //     // titel: item.titel,
      //     // abstract: item.abstract,
      //     // author: item.author,
      //   },
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background: #f5f5f5;
}
.search-list {
  width: 700px;
  // border: 1px solid black;
  margin: 90px auto 0 auto;
  .content {
    text-align: left;
    line-height: 1.46;
    padding: 7px 0 12px 0;

    .title {
      font-size: 17px;
      color: #660099;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title:hover {
      text-decoration: underline;
    }
    .abstract {
      font-size: 13px;
      color: #222222;
      margin: 2px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .author {
      font-size: 12px;
      color: #006621;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
