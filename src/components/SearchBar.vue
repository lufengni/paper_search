<template>
  <div class="search-bar-wrapper">
    <div class="title" @click="unfold">
      <span>{{ title }}</span>
      <div class="icon"></div>
      
    </div>
    <div class="list" v-if="show">
        <div class="item" v-for="(item,index) in list" :key="index" @click="itemClick(item)">{{ item }}</div>
      </div>

    <textarea class="search-input"
           v-model="searchText"
           @keydown.enter="handleSearch" ></textarea>
    <button class="search-clear-btn"
            @click="handleClear"
            v-show="!searchTextIsNull()">
      <span class="clear-icon">×</span>
    </button>
    <button class="search-btn"
            @click="handleSearch">
      <span class="search-icon">
        <svg focusable="false"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data () {
    return {
      searchText: this.$route.query.keyWorld || "",
      list: ['关键字','摘要'],
      title: '关键字',
      show: false
    };
  },
  mounted() {
    document.querySelector('.search-input').addEventListener('resize',function(e) {
      console.log(1)
    })
  },
  methods: {
    clearSearchText () {
      this.searchText = "";
    },
    searchTextIsNull () {
      return this.searchText === "";
    },
    handleClear () {
      if (this.searchTextIsNull()) {
        return;
      }
      this.clearSearchText();
    },
    handleSearch () {
      if (this.searchTextIsNull()) {
        return;
      }
      this.$emit("search", this.searchText);
    },
    unfold() {
      this.show = !this.show
      // if(this.show) this.show = false
      // else this.show = true
    },
    itemClick(item) {
      // if(item == '摘要') {
      //   document.querySelector('.search-input').style.height = '100px'
      // }else {
      //   document.querySelector('.search-input').style.height = '48px'
      // }
      this.title = item
      this.show = false
      this.$emit('itemClick',item)
    }
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 375px) {
  html {
    /* iPhone6的375px尺寸作为16px基准，414px正好18px大小, 600 20px */
    font-size: calc(100% + 2 * (100vw - 375px) / 39);
    font-size: calc(16px + 2 * (100vw - 375px) / 39);
  }
}
@media screen and (min-width: 414px) {
  html {
    /* 414px-1000px每100像素宽字体增加1px(18px-22px) */
    font-size: calc(112.5% + 4 * (100vw - 414px) / 586);
    font-size: calc(18px + 4 * (100vw - 414px) / 586);
  }
}
@media screen and (min-width: 600px) {
  html {
    /* 600px-1000px每100像素宽字体增加1px(20px-24px) */
    font-size: calc(125% + 4 * (100vw - 600px) / 400);
    font-size: calc(20px + 4 * (100vw - 600px) / 400);
  }
}
@media screen and (min-width: 1000px) {
  html {
    /* 1000px往后是每100像素0.5px增加 */
    font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
    font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
  }
}
.search-bar-wrapper {
  display: flex;
  height: 50px;
  width: 800px;
  margin: 8px auto;
  // border-radius: 20px;
  // height: 2.5rem;
  // width: 40rem;
  // margin: 2.5rem auto;
  // border-radius: 1.25rem;
  align-items: start;
  background-color: #fff;
  position: relative;
}

.title {
  height: 48px;
  width: 90px;
  background-color: #fff;
  // border-right:1px solid #6d6d6d;
  line-height: 48px;
  // text-align: left;
  display: flex;
  // align-items: center;
  span {
    margin-left: 10px;
  }
  .icon {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 10px solid #6d6d6d;
    margin-top: 20px;
    margin-left: 5px;
    // align-self: center;
  }
}

// .title:hover .list {
//   display: block;
// }

.list {
  // display: none;
  background-color: #fff;
  position: absolute;
  top: 50px;
  left: 0;
  .item {
    width: 90px;
    height: 50px;
    line-height: 50px;
  }
}


.search-input {
  flex: 1;
  height: 48px;
  line-height: 38px;
  padding: 0 36px 0 16px;
  font-size: 18px;
  outline: none;
  border: none;
  border-top: 1px solid #dfe1e5;
  border-bottom: 1px solid #dfe1e5;
  border-left: 1px solid #dfe1e5;
  // resize: none;
  overflow: auto;
  font-family: 'Courier New', Courier, monospace;
  // border-top-left-radius: 20px;
  // border-bottom-left-radius: 20px;
}

.search-clear-btn {
  position: absolute;
  right: 50px;
  padding: 0;
  margin: 0 10px;
  outline: none;
  border: none;
  background: none;

  .clear-icon {
    display: inline-block;
    width: 16px;
    font-size: 27px;
    color: #757575;
  }
}

.search-btn {
  width: 42px;
  height: 48px;
  line-height: 40px;
  padding: 0;
  // border-top-right-radius: 20px;
  // border-bottom-right-radius: 20px;
  background-color: #3b78e7;
  border: 1px solid #3367d6;
  outline: none;

  .search-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
  }

  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
    vertical-align: bottom;
  }
}
</style>