<template>
    <Row justify="center" class="login-position">
        <i-col class="login-width">
            <Card>
                <div class="title">客户关系管理系统</div>
                <Form>
                    <FormItem>
                        <Input size="large" prefix="ios-contact-outline" placeholder="用户名或手机号" />
                    </FormItem>
                    <FormItem>
                        <Input size="large" prefix="ios-lock-outline" placeholder="密码" type="password" password />
                    </FormItem>
                    <FormItem>
                        <Row justify="space-between">
                            <Checkbox size="large" v-model="autoLogin">自动登录</Checkbox>
                            <router-link :to="{name:'Password'}">忘记密码</router-link>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="large" long @click="login">登录</Button>
                    </FormItem>
                    <Row justify="space-between">
                        <router-link :to="{name:'Password'}">手机登录</router-link>
                        <router-link :to="{name:'Password'}">注册账户</router-link>
                    </Row>
                </Form>
            </Card>
        </i-col>
    </Row>
</template>

<script>
export default {
    data() {
        return {
            autoLogin: false
        }
    },
    methods: {
        login() {
            this.$router.push({name: "Users"});
        }
    }
}
</script>

<style>
.login-position {
    margin-top: 25vh;
}
.login-width {
    width: 400px;
}
.title {
    font-size: 24px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 20px;
}
</style>