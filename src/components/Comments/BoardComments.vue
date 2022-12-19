<template>
    <div class="card bg-light">
        <div class="card-body">
            <!-- Comment form-->
            <form class="mb-4">
                <div class="row">
                    <div class="col-11">
                        <textarea class="form-control" rows="2" placeholder="Join the discussion and leave a comment!"></textarea>
                    </div>
                    <div class="col-1">
                        <button type="button" class="btn btn-success"><i class="fa-solid fa-pencil"></i> Submit</button>
                    </div>
                </div>
            </form>
            <!-- Comment with nested comments-->
            <div class="d-flex mb-4">
                <!-- Parent comment-->
                <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..."></div>
                <div class="ms-3">
                    <div class="fw-bold text-success">{{ name }}</div>
                    {{ content }} ({{regDate}})
                </div>
            </div>
            <!-- Single comment-->
            <div class="d-flex">
                <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..."></div>
                <div class="ms-3">
                    <div class="fw-bold text-success">{{ name }}</div>
                    {{ content }} ({{regDate}})
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    export default{
    data(){
        return {
            name: 'User name',
            content: 'When you put money directly to a problem, it makes a good headline.',
            regDate: '2022-11-11 10:00:00'
        }
    }
}
</script>

<style scoped>

</style>