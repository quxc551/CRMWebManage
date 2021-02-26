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
    created(){
        if (process.env.NODE_ENV !== 'production') {
            this.$Notice.info({
                title: "当前处于非生产模式",
                desc: `当前模式为：${process.env.NODE_ENV}。如有疑问请联系开发者。`,
                duration: 0
            });
            axios.get("/api/test/mytest")
            .then(res => {
                console.log(res);
                this.$Notice.success({
                    title: "成功与服务器取得连接。"
                });
            })
            .catch(err => {
                console.log(err);
                this.$Notice.error({
                    title: "未能与服务器建立连接。"
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

.margin-tb {
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>
