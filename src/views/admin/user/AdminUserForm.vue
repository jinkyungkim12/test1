<template>
    <div class="container-fluid">
        <div class="row mt-3 justify-content-center">
            <div class="col-2">
                <MenuBar/>
            </div>
            <div class="col-10">
                <div class="container area">
                    <!-- form s -->
                    <h3 class="text-center mt-5">User Form</h3>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Profile Image</label>
                            <input class="form-control" type="file" id="input-image" name="postImage">
                        </div>
                        <div class="col-6">
                            <div class="mb-3 text-start">
                                <label for="exampleFormControlInput1" class="form-label">Id</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="id">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3 text-start">
                                <label for="exampleFormControlInput2" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3 text-start">
                                <label for="exampleFormControlInput2" class="form-label">Nickname</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nickname">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3 text-start">
                                <label for="exampleFormControlInput2" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="010-1234-1234">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-4 text-start">
                                <label for="exampleFormControlInput1" class="form-label">Birth Day</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" value="1990-01-01">
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
                        <div class="col-6">
                            <div class="mb-4 text-start">
                                <label for="exampleFormControlInput2" class="form-label">Email</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="aaa@example.com">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3 text-start">
                                <label for="exampleFormControlInput1" class="form-label">Zip Code</label>
                                <div class="row">
                                    <div class="col-8">
                                        <input type="text" class="form-control" id="zipcode" placeholder="12345">
                                    </div>
                                    <div class="col-4">
                                        <button type="button" class="btn btn-outline-dark" @click="search()"><i class="fa-solid fa-magnifying-glass"></i></button>&nbsp;
                                        <button type="reset" class="btn btn-outline-dark" @click="clear()"><i class="fa-solid fa-rotate-left"></i></button>
                                    </div>
                                    <div class="col-12 mt-3">
                                        <input type="text" class="form-control" id="address" placeholder="주소">
                                    </div>
                                    <div class="col-12 mt-3">
                                        <input type="text" class="form-control" id="addressDetail" placeholder="상세주소">
                                    </div>
                                    <div class="col-12 mt-3">
                                        <input type="text" class="form-control" id="addressExtra" placeholder="참고사항">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- button s -->
                    <div class="row mt-5 mb-5">
                        <div class="col-1 text-start">
                            <router-link to="/adminUserList">
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