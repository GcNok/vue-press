<template>
  <div>
    <div v-for="post in posts">
      <h2>
        <a class="post-title" v-bind:href="post.path">{{post.title}}</a>
      </h2>
      <p>{{post.frontmatter.description}}</p>
      <a class="read-more" v-bind:href="post.path">続きを読む</a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    posts() {
      return (
        this.$site.pages
          // frontendディレクトリ配下のindex.md以外を表示
          .filter(post => post.path.match(/\/frontend\/.+/))
          // dateに設定した日付の降順にソートする
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          )
      );
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
</style>