<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-2">
                <MenuBar/>
            </div>
            <div class="col-10">
                <h3 class="text-center mt-5">Main Board</h3>
                
            </div>
        </div>
    </div>
</template>

<script>
    import MenuBar from '@/components/AdminMenu.vue';

export default {
    components: {
        MenuBar
    }
}
</script>

<style scoped>
    a{
        color: black;
    }
    a:hover{
        color: green;
    }
    #logout{
        width: 80%;
    }
</style>