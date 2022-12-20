<template>
    <div class="container-fluid">
        <div class="row mt-3 justify-content-center">
            <div class="col-2">
                <MenuBar/>
            </div>
            <div class="col-10">
                <div class="container area">
                    <!-- form s -->
                    <h3 class="text-center mt-5 mb-5">Board Form</h3>
                    <div class="row">
                        <div class="col-md-5 col-sm-5">
                            <h6>Product Image</h6>
                            <input type="file" class="form-control" multiple="multiple">
                            <h6 class="mt-4">preview Image</h6>
                            <div>
                                <img class="img-fluid rounded" src="https://dummyimage.com/500x250/ced4da/6c757d.jpg" alt="...">&nbsp;
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-7">
                            <div class="form-group">
                                <h6>Title</h6>
                                <input type="text" class="form-control border-input mt-2 mb-4" placeholder="제목을 입력해주세요.">
                            </div>
                            <div class="form-group">
                                <h6>Category</h6>
                                <input type="text" class="form-control border-input mt-2 mb-4" placeholder="카테고리를 입력해주세요.">
                            </div>
                            <div class="form-group">
                                <h6>Content</h6>
                                <textarea class="form-control textarea-limited mt-2 mb-4" placeholder="내용을 입력해주세요." rows="13"></textarea>
                            </div>
                        </div>
                    </div>  
                    <!-- button s -->
                    <div class="row mt-5 mb-5">
                        <div class="col-1 text-start">
                            <router-link to="/adminProductList">
                                <button type="button" class="btn btn-outline-dark"><i class="fa-solid fa-bars"></i></button>
                            </router-link>
                        </div>
                        <div class="col-11 text-end">
                            <button type="button" class="btn btn-outline-success"><i class="fa-regular fa-bookmark"></i></button>&nbsp;
                            <button type="button" class="btn btn-outline-dark"><i class="fa-solid fa-x"></i></button>&nbsp;
                            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <!-- button e -->
                    <!-- Modal s -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">WithNetWorks</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                정말로 삭제하시겠습니까?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                                <button type="button" class="btn btn-dark">확인</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal e -->
                    <!-- form e -->
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
    }, 
}
</script>

<style scoped>
    a{
        color: black;
    }
    a:hover{
        color: green;
    }
    .area{
        width: 90%;
    }
</style>