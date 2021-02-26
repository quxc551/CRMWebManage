<template>
    <div>
        <Row class="margin-bottom-lg">
            <i-col span="6">
                <Input placeholder="搜索用户名" search />
            </i-col>
        </Row>
        <Row class="margin-tb">
            <Button>新建用户</Button>
        </Row>
        <Table :columns="columns" :data="users">
            <template v-slot:action>
                <Button @click="showUserDetail">编辑</Button>
                <Button class="margin-left-sm" type="error">删除</Button>
            </template>
        </Table>
        <Page class="margin-top" />
        <Drawer title="用户详情" :mask-closable="false" v-model="showDrawer" width="720">

        </Drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    title: '用户名',
                    key: 'name'
                },
                {
                    title: '手机号',
                    key: 'mobile'
                },
                {
                    title: '邮箱',
                    key: 'email'
                },
                {
                    title: '状态',
                    key: 'state'
                },
                {
                    title: '创建日期',
                    key: 'created'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ],
            users: [
                {
                    name: "张三",
                    mobile: "15102425963",
                    email: "test@163.com",
                    state: "正常",
                    created: "2020-9-6 20:02:36"
                }
            ],
            showDrawer: false
        }
    },
    methods: {
        showUserDetail() {
            this.showDrawer = true;
        }
    }

}
</script>

<style>

</style>