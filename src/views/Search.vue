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
        <!-- <div class="content"
           v-for="(item, index) in dataList"
           :key="index"> -->
        <div class="title"
             v-html="item.titleHeightLight"
             @click="toDetais(item)">
        </div>
        <div class="abstract">
          {{ item.summary }}
        </div>
        <div class="author">
          {{ item.authors }}
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
      dataList: [],
      dataCited: [],
      linksCited: [],
      dataAuthor: [],
      linksAuthor: []
    };
  },
  mounted () {
    console.log("search.vue")

    console.log(this.$store.getters.getSearchList);
    console.log(this.$route.query.keyWorld);
    this.searchText = this.$route.query.keyWorld


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
      // console.log(item)
      // item.title = item.titleHeightLight.replace(/<[^>]+>/g, "")
      // console.log(item)
      this.$store.commit({
        type: 'renewDetail',
        detail: item
      })
      let title = item.titleHeightLight.replace(/<[^>]+>/g, "");

      this.$axios.get('http://localhost:8200/paper/quote', {
        params: {
          pageTitle: title
        }
      })
        .then((data) => {
          console.log(data)
          let set = new Set()
          data.data.queryData.map(item => {
            if (!set.has(item.startNode.title)) {
              this.dataCited.push({
                name: item.startNode.title,
                des: item.startNode.title,
              })
              set.add(item.startNode.title)
            }
            if (!set.has(item.endNode.title)) {
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

          this.$store.commit('setDataCited', this.dataCited)
          this.$store.commit('setLinksCited', this.linksCited)


          this.$axios.get('http://localhost:8200/author/paper-author-cooperation', {
            params: {
              pageTitle: title
            }
          }

          )
            .then((data) => {
              let set = new Set()
              data.data.queryData.map(item => {
                if (!set.has(item.startNode.title)) {
                  this.dataAuthor.push({
                    name: item.startNode.title,
                    category: 1,
                    draggable: true,
                  })
                  set.add(item.startNode.title)
                }
                if (!set.has(item.endNode.title)) {
                  this.dataAuthor.push({
                    name: item.endNode.title,
                    category: 1,
                    draggable: true,
                  })
                  set.add(item.endNode.title)
                }
                this.linksAuthor.push({
                  source: item.startNode.title,
                  target: item.endNode.title,
                  value: '合作'
                })
              })
              console.log(this.dataAuthor, this.linksAuthor)

              this.$store.commit('setDataAuthor', this.dataAuthor)
              this.$store.commit('setLinksAuthor', this.linksAuthor)


              this.$router.push({
                path: "Details",
                // params: {
                //   dataCited: this.dataCited,
                //   linksCited: this.linksCited
                // }
              });
            })

          this.$router.push({
            path: "Details",

          });
        })

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
