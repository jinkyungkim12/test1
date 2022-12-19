<template>
  <div id="app">
    <!-- header s -->
    <div class="mainHeader">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <router-link to="/"><i class="fa-solid fa-w text-warning"></i> WithNetWorks</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <router-link to="/">Home</router-link>
                  <router-link to="/boardList">Board</router-link>
                  <router-link to="/productList">Product</router-link>
                  <router-link to="/memberLogin">Login</router-link>
                </ul>
                <form class="d-flex">
                  <router-link to="/signIn"><button type="button" class="btn btn-outline-dark">Sign In</button></router-link>
                </form>
                </div>
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
    animation: none;
    text-decoration: none;
    padding-right: 20px;
}
</style>
