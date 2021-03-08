<template>
    <div>
        <Row class="margin-bottom-lg" :gutter="8">
            <i-col>
                <Button>新建楼宇</Button>
            </i-col>
            <i-col span="6">
                <Input placeholder="搜索楼宇名称" search />
            </i-col>
        </Row>
        <Row>
            <Table :columns="columns"></Table>
        </Row>
        <Row class="margin-top">
            <Page></Page>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns:[
                {
                    title: "楼宇名称",
                    key: "Name"
                },
                {
                    title: "楼宇面积",
                    key: "area"
                },
                {
                    title: "管理面积",
                    key: "marea"
                },
                {
                    title: "楼宇状态",
                    key: "status"
                }
            ]
        }
    }
}
</script>

<style>

</style>