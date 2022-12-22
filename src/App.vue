<template>
  <div id="app">
    <!-- header s -->
    <div class="mainHeader">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="tab"><router-link to="/"><i class="fa-solid fa-w text-warning"></i> WithNetWorks</router-link></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/">Home</router-link></li>
                    <li class="nav-item"><router-link to="/boardList">Board</router-link></li>
                    <li class="nav-item"><router-link to="/productList">Product</router-link></li>
                    <li class="nav-item"><router-link to="/adminMainBoard">Admin</router-link></li>
                  </ul>
                </div>
                <form class="d-flex">
                  <router-link to="/memberLogin"><button type="button" class="btn btn-outline-secondary">Login</button></router-link>&nbsp;
                  <router-link to="/signUp"><button type="button" class="btn btn-outline-dark">Sign Up</button></router-link>
                </form>
            </div>
        </nav>
    </div>
    
    <!-- content s -->
    <router-view/>
    <!-- content e -->

    <!-- footer s -->
    <MainFooter />
    <!-- footer e -->
  </div>
</template>

<script>
import MainFooter from './components/MainPage/MainFooter.vue';

export default {
    components: {
      MainFooter,
    },
  }
</script>

<style>
#app {
  font-family: 'GmarketSansMedium';
  -webkit-font-smoothing: antialisased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


nav a {
  color: #111214;
}

a:hover{
  color: #626266db;
}

a {
    text-decoration: none;
  }
  .nav-item{
    padding-right: 20px;
  }
  .tab{
    padding-right: 20px;
  }
</style>
