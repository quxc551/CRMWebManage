<template>
    <div>
        <Row>
            <i-col span="6">
                <Input placeholder="搜索用户名" search />
            </i-col>
        </Row>
        <Row class="margin-tb">
            <Button>新建用户</Button>
        </Row>
        <Table :columns="columns">

        </Table>
    </div>
</template>

<script>
export default {
    data(){
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
            ]
        }
    }

}
</script>

<style>

</style>