<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu :active-name="activeName" theme="light" width="auto" :open-names="openNames" ref="side-menu" accordion>
                        <Submenu name="0">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                房屋管理
                            </template>
                            <MenuItem name="0-1">房屋列表</MenuItem>
                        </Submenu>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                客户管理
                            </template>
                            <MenuItem name="1-1">客户列表</MenuItem>
                            <MenuItem name="1-2">客户关系</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                合同管理
                            </template>
                            <MenuItem name="2-1">合同列表</MenuItem>
                            <MenuItem name="2-2">缴费通知单</MenuItem>
                            <MenuItem name="2-3">发票管理</MenuItem>
                        </Submenu>
                        <Submenu name="system">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                系统配置
                            </template>
                            <MenuItem name="Users" :to="{name: 'Users'}">用户管理</MenuItem>
                            <MenuItem name="Roles" :to="{name: 'Roles'}">角色管理</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <transition name="fade" mode="out-in" :duration="250">
                            <router-view></router-view>
                        </transition>
                    </Content>
                    <Footer class="layout-footer-center">&copy;&nbsp;本开发组版权所有</Footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
    created() {
        this.activeName = this.$route.name;
        this.openNames = [this.menuOrderMap[this.activeName]];
    },
    data() {
        return {
            activeName: undefined,
            openNames: undefined,
            menuOrderMap: {
                Users: "system",
                Roles: "system"
            }
        }
    }
}
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>