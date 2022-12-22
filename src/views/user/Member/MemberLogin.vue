<template>
  <div class="row justify-content-center mt-5 mb-5">
    <div class="card mb-3 shadow p-3 mb-5 bg-body rounded border border-0">
      <div class="row g-0">
        <div class="col-md-7">
          <div class="card-body">
            <h2 class="card-title mb-5">Login</h2>
            <div class="mb-4 text-start">
              <label for="exampleFormControlInput1" class="form-label">Id</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="id">
            </div>
            <div class="mb-3 text-start">
              <label for="exampleFormControlInput2" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="password">
            </div>
            <div class="row justify-content-center mt-5">
              <router-link to="/"><button type="button" class="btn btn-dark loginButton">Login</button></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <img src="https://images.unsplash.com/photo-1531771686035-25f47595c87a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" class="img-fluid rounded-end">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return {
            name: '여기는 로그인',
        }
    }
}
</script>

<style scoped>
  .card{
    width: 50%;
  }
  .loginButton{
    width: 100%;
  }
</style>