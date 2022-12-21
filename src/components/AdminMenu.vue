<template>
    <div class="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0 sticky-top">
        <ul class="list-unstyled text-center">
            <li class="mt-3 mb-3"><router-link to="/adminMainBoard"><b>Main Board</b></router-link></li>
            <hr>
            <li class="mt-3 mb-3"><router-link to="/adminUserList"><b>User</b></router-link></li>
            <hr>
            <li class="mt-3 mb-3"><router-link to="/adminBoardList"><b>Board</b></router-link></li>
            <hr>
            <li class="mt-3 mb-3"><router-link to="/adminProductList"><b>Product</b></router-link></li>
            <hr>
            <li class="mt-3 mb-3"><router-link to="/adminBoardCommentList"><b>Board Comment</b></router-link></li>
            <hr>
            <li class="mt-3 mb-3"><router-link to="/adminProductCommentList"><b>Product Comment</b></router-link></li>
            <hr>
            <li class="mt-5 pb-3">
                <button class="btn btn-dark" id="logout">Log Out</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
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