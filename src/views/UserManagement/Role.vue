<template>
    <Collapse>
        <Panel v-for="(role, index) in roles" :key="index" :name="role.roleName">
            {{role.roleName}}
            <template v-slot:content>
                <Checkbox v-for="permisson in role.permissons" :key="permisson.name" v-model="permisson.has">{{permisson.name}}</Checkbox>
            </template>
        </Panel>
    </Collapse>
</template>

<script>
export default {
    data(){
        return {
            roles:[
                {
                    roleName: "管理员",
                    permissons: [
                        {
                            name: "添加用户",
                            has: true
                        },
                        {
                            name: "删除用户",
                            has: false
                        },
                        {
                            name: "查看用户",
                            has: true
                        }
                    ]
                },
                {
                    roleName: "普通用户",
                    permissons: [
                        {
                            name: "添加用户",
                            has: false
                        },
                        {
                            name: "删除用户",
                            has: false
                        },
                        {
                            name: "查看用户",
                            has: false
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>