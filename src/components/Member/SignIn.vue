<template>
    <div class="container mt-5">
        <div class="card mb-3 shadow p-3 mb-5 bg-body rounded border border-0">
            <div class="row g-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="img-fluid rounded-start">
                        </div>
                        <div class="col-8">
                            <h2 class="card-title mb-5 text-center">Sign up</h2>
                            <div class="row">
                                <div class="col-6">
                                    <div class="mb-4 text-start">
                                        <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3 text-start">
                                        <label for="exampleFormControlInput2" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="password">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-4 text-start">
                                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-4 text-start">
                                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Kim">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-4 text-start">
                                        <label for="exampleFormControlInput1" class="form-label">Birth Day</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="1990-01-01">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-4 text-start">
                                        <label for="exampleFormControlInput1" class="form-label">Gender</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>::Gender::</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center mt-5">
                                <button type="button" class="btn btn-dark loginButton">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped>
    .loginButton{
        width: 97%;
    }
</style>