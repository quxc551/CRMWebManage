<template>
    <div>
        <Row></Row>
        <Row>
            <Table :columns="columns"></Table>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns:[
                {
                    title: "房屋名称",
                    key: "Name"
                },
                {
                    title: "房屋面积",
                    key: "area"
                },
                {
                    title: "房屋状态",
                    key: "status"
                }
            ]
        }
    }
}
</script>

<style>

</style>