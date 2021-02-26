<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
const axios = require("axios")
export default {
    name: "app",
    components: {},
    created() {
        if (process.env.NODE_ENV !== 'production') {
            this.$Notice.info({
                title: "当前处于非生产模式",
                desc: `当前模式为：${process.env.NODE_ENV}。如有疑问请联系开发者。`,
                duration: 0
            });
            axios.get("/api/test/mytest")
            .then(res => {
                this.$Notice.success({
                    title: "成功连接服务器。",
                    desc: res.status + '：' + res.statusText
                });
            })
            .catch(err => {
                console.log(err);
                this.$Notice.error({
                    title: "未能与服务器建立连接。",
                    desc: "请在控制台查看详情"
                });
            })
        }
    }
};
</script>

<style>
.margin-left-sm{
    margin-left: 5px;
}

.margin-bottom-lg {
    margin-bottom: 12px;
}

.margin-bottom {
    margin-bottom: 8px;
}

.margin-top {
    margin-top: 8px;
}

.margin-tb {
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>
