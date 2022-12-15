<template>
    <div>
        <p>{{ name }}</p><br>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default{
    data(){
        return {
            name: 'lemon-tree',
        }
    },
    
    methods: {
        updateName(){
            this.name = 'lemon-tree updated';
        }
    }
}
</script>

<style scoped>

</style>