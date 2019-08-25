<template>
  <div>
    <div v-for="post in posts">
      <h2>
        <a class="post-title" v-bind:href="post.path">{{post.title}}</a>
      </h2>
      <p>{{post.frontmatter.description}}</p>
      <a class="read-more" v-bind:href="post.path">続きを読む</a>
    </div>
    <div class="page-nation-wrapper">
      <div
        class="page-num"
        v-bind:class="{ current: currentPageNum === pageNum}"
        v-for="pageNum of displayPageNumArray"
        @click="changePage(pageNum)"
      >{{ pageNum }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPageNum: 1
    };
  },
  computed: {
    posts() {
      let displayPages = this.$site.pages
        // docsディレクトリ以下を投稿記事一覧表示の対象とする
        .filter(post => post.path.match(/(\/.+\/.+)/))
        // dateに設定した日付の降順にソートする
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );

      if (this.currentPageNum === 1) {
        return displayPages.slice(
          this.currentPageNum - 1,
          this.currentPageNum * 5
        );
      }
      return displayPages.slice(
        (this.currentPageNum - 1) * 5,
        this.currentPageNum * 5
      );
    },
    totalPageNum() {
      return Math.ceil(this.$site.pages.length / 5);
    },
    endPageNum() {
      if (this.currentPageNum + 2 < this.totalPageNum) {
        return this.currentPageNum + 2;
      }
      return this.totalPageNum;
    },
    displayPageNumArray() {
      const pageNumArray = [];
      const startPageNum = this.currentPageNum -2;
      for (let pageNum = startPageNum ;pageNum < this.endPageNum;pageNum++) {
        if (pageNum > 0) {
          pageNumArray.push(pageNum);
        }
      }
      return pageNumArray;
    }
  },
  methods: {
    changePage(selectPageNum) {
      this.currentPageNum = selectPageNum;
    }
  }
};
</script>

<style lang="stylus" scoped>
.post-title {
  font-weight: bold;

  &:hover {
    color: orange;
  }
}

.read-more {
  &:hover {
    color: orange;
  }
}

.page-nation-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin: 50px auto;
  width: 150px;

  .page-num {
    border: solid #2ECC40 2px;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: orange;
      opacity: 0.6;
    }
  }

  .current {
    background-color: rgb(205, 249, 210);
  }
}

@media (max-width: $MQMobile) {
  .page-nation-wrapper {
    margin: calc((100 / 667) * 50 * 1vh) auto;
    width: calc((100 / 375) * 150 * 1vw);

    .page-num {
      padding: calc((100 / 667) * 8 * 1vh) calc((100 / 375) * 8 * 1vw);
    }
  }
}
</style>