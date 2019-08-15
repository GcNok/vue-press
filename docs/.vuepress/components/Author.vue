<template>
    <div class="author-wrapper">
        <div class="author-name-wrapper">
            <div class="author">この記事を書いた人</div>
            <div class="author-name">{{ author }}</div>
        </div>
        <img class="author-image" :src="$withBase(authorImage)" alt="author-image" />
    </div>
</template>
<script>
export default {
    computed: {
        author () {
            return this.$page.frontmatter.author;
        },
        authorImage () {
            return this.$page.frontmatter.authorImage;
        }
    }
}
</script>

<style lang="stylus" scoped>
.author-wrapper {
    display: flex;
    justify-content: flex-end;

    .author-name-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-right : 30px;

        .author {
            font-size : 10px;
        }

        .author-name {
            text-align: right;
            font-size : 20px;
            font-weight:bold;
        }
    }

    .author-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid gray ;
        object-fit: contain;
    }
}

@media (max-width: $MQMobile) {
    .author-wrapper {
        .author-name-wrapper {
            margin-right: calc((100 / 375) * 20 * 1vw);

            .author {
                font-size: calc((100 / 375) * 10 * 1vw);
            }

            .author-name {
                font-size: calc((100 / 375) * 20 * 1vw);
                font-weight: bold;
            }
        }

        .author-image {
            width: calc((100 / 375) * 40 * 1vw);
            height: calc((100 / 667) * 40 * 1vh);
            border-radius: 50%;
            border: 1px solid gray ;
            object-fit: contain;
        }
    }
}
</style>