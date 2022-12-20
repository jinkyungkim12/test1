<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-2">
                <MenuBar/>
            </div>
            <div class="col-10">
                <h3 class="text-center mt-5">Main DashBoard</h3>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-1"></div>
                        <div class="col-3">
                            <div class="card border-0 shadow h-100 py-2 rounded-5">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="text-secondary text-uppercase h3">Total <br>user</div>
                                        </div>
                                        <div class="col-4">
                                            <i class="fa-duotone fa-box-taped fa-4x text-gray-300"></i>
                                            <i class="fa-solid fa-people-group fa-4x text-gray-300"></i>
                                        </div>
                                        <div class="h3 text-gray-800 mt-2 text-center"><b class="text-success">30</b> persons</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card border-0 shadow h-100 py-2 rounded-5">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="text-secondary text-uppercase h3">Total <br>post</div>
                                        </div>
                                        <div class="col-4">
                                            <i class="fa-duotone fa-box-taped fa-4x text-gray-300"></i>
                                            <i class="fa-solid fa-file-pen fa-4x text-gray-300"></i>
                                        </div>
                                        <div class="h3 text-gray-800 mt-2 text-center"><b class="text-success">40</b> posts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card border-0 shadow h-100 py-2 rounded-5">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="text-secondary text-uppercase h3">Total <br> product</div>
                                        </div>
                                        <div class="col-4">
                                            <i class="fa-duotone fa-box-taped fa-4x text-gray-300"></i>
                                            <i class="fa-solid fa-boxes-stacked fa-4x text-gray-300"></i>
                                        </div>
                                        <div class="h3 text-gray-800 mt-2 text-center"><b class="text-success">50</b> products</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2"></div>
                    </div>
                    <div class="row mt-5 mb-5">
                        <div class="col-1"></div>
                        <div class="col-6">
                            <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img-fluid rounded-5">
                        </div>
                        <div class="col-3">
                            <div class="card border-0 shadow h-100 py-2 rounded-5">
                                <div class="card-body">
                                    <h5 class="text-center mt-3"><b>Most Popular Products 5</b></h5>
                                    <div class="row mt-4">
                                        <div class="col-3 text-end">
                                            <i class="fa-solid fa-square-check fa-2x text-success"></i>
                                        </div>
                                        <div class="col-9"><h4 class="fw-semibold">A product</h4></div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-3 text-end">
                                            <i class="fa-solid fa-square-check fa-2x text-success"></i>
                                        </div>
                                        <div class="col-9"><h4 class="fw-semibold">B product</h4></div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-3 text-end">
                                            <i class="fa-solid fa-square-check fa-2x text-success"></i>
                                        </div>
                                        <div class="col-9"><h4 class="fw-semibold">C product</h4></div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-3 text-end">
                                            <i class="fa-solid fa-square-check fa-2x text-success"></i>
                                        </div>
                                        <div class="col-9"><h4 class="fw-semibold">D product</h4></div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-3 text-end">
                                            <i class="fa-solid fa-square-check fa-2x text-success"></i>
                                        </div>
                                        <div class="col-9"><h4 class="fw-semibold">E product</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
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