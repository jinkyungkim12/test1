<template>
    <div class="container-fluid">
        <div class="row mt-3 justify-content-center">
            <div class="col-2">
                <MenuBar/>
            </div>
            <div class="col-10 area2">
                <div class="container area">
                    <h3 class="text-center mt-5">User List</h3>
                    <!-- search s -->
                    <div class="row mt-5 mb-5">
                        <div class="col-2 mb-2"></div>
                        <div class="col-2 mb-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>:: 삭제여부 ::</option>
                                <option value="1">N</option>
                                <option value="2">Y</option>
                            </select>
                        </div>
                        <div class="col-2 mb-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>:: 검색 조건 ::</option>
                                <option value="1">등록일</option>
                                <option value="2">생년월일</option>
                            </select>
                        </div>
                        <div class="col-3 mb-2">
                            <input class="form-control" type="date" placeholder="시작일">
                        </div>
                        <div class="col-3 mb-2">
                            <input class="form-control" type="date" placeholder="종료일">
                        </div>
                        <div class="col-4"></div>
                        <div class="col-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>:: 검색 조건 ::</option>
                                <option value="1">이름</option>
                                <option value="2">아이디</option>
                                <option value="3">닉네임</option>
                                <option value="4">이메일</option>
                            </select>
                        </div>
                        <div class="col-3">
                            <input class="form-control" type="text" placeholder="검색어를 입력하세요.">
                        </div>
                        <div class="col-3 text-start">
                            <button type="button" class="btn btn-outline-dark"><i class="fa-solid fa-magnifying-glass"></i> Search</button>&nbsp;
                            <button type="button" class="btn btn-outline-dark"><i class="fa-solid fa-rotate-left"></i> </button>
                        </div>
                    </div>
                    <!-- search e -->
                    <!-- table s -->
                    <div class="row justify-content-center">
                        <table class="table table-hover">
                            <thead>
                                <tr class="table-dark text-white text-center">
                                    <th scope="col" >
                                        <input class="check" type="checkbox" v-model="select_all"> 
                                    </th>
                                    <th scope="col">NO</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">아이디</th>
                                    <th scope="col">닉네임</th>
                                    <th scope="col">생년월일</th>
                                    <th scope="col">핸드폰</th>
                                    <th scope="col">이메일</th>
                                    <th scope="col">성별</th>
                                    <th scope="col">삭제여부</th>
                                    <th scope="col">가입일</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr v-for="user in users" :key="user.id">
                                    <td>
                                        <input class="check" type="checkbox" :value="user.id" :checked="select_all">
                                    </td>
                                    <th scope="row">{{ user.number }}</th>
                                    <td><router-link to="/adminUserView">{{ user.name }}</router-link></td>
                                    <td>{{ user.user_id }}</td>
                                    <td>{{ user.nickname }}</td>
                                    <td>{{ user.dob }}</td>
                                    <td>{{ user.phone }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.gender }}</td>
                                    <td>{{ user.delNy }}</td>
                                    <td>{{ user.regDate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- table e -->
                    <!-- button s -->
                    <div class="row justify-content-between">
                        <div class="col-2 text-start">
                            <button class="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash-can"></i> 삭제하기</button>
                        </div>
                        <div class="col-10 text-end">
                            <router-link to="/adminUserForm">
                                <button class="btn btn-success" type="button"><i class="fa-solid fa-notes-medical"></i> 등록하기</button>
                            </router-link>
                        </div>
                    </div>
                    <!-- button e -->
                    <!-- pagination s-->
                    <div class="row justify-content-center">
                        <div class="row mt-5 mb-5">
                            <ul class="pagination">
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- pagination e-->
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
    data() {
        return{
            users: [ 
                { number: 1, name: "Shad", user_id: "Shad", nickname: "nickname1", dob : "1990-01-02", phone: "010-1234-1234", email: "example@example.com", gender: "여성", delNy: "No", regDate: "2020-10-10 10:00:00", selected: false}, 
                { number: 2, name: "Duane", user_id: "Duane", nickname: "nickname2", dob : "1990-01-02", phone: "010-1234-1234", email: "example@example.com", gender: "여성", delNy: "No", regDate: "2020-10-10 10:00:00", selected: false}, 
                { number: 3, name: "Myah", user_id: "Myah", nickname: "nickname3", dob : "1990-01-02", phone: "010-1234-1234", email: "example@example.com", gender: "여성", delNy: "No", regDate: "2020-10-10 10:00:00", selected: false}, 
                { number: 4, name: "Kamron", user_id: "Kamron", nickname: "nickname4", dob : "1990-01-02", phone: "010-1234-1234", email: "example@example.com", gender: "여성", delNy: "No", regDate: "2020-10-10 10:00:00", selected: false}, 
                { number: 5, name: "Brendon", user_id: "Brendon", nickname: "nickname5", dob : "1990-01-02", phone: "010-1234-1234", email: "example@example.com", gender: "여성", delNy: "No", regDate: "2020-10-10 10:00:00", selected: false}
            ],
            select_all: false,
        }
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
    .area{
        width: 90%;
    }
    .pagination {
    --bs-pagination-focus-box-shadow: 0 0 0 0.25rem #c6e4be;
    --bs-pagination-color: black;
    --bs-pagination-hover-color: #222222;
    --bs-pagination-focus-color: #222222;
    --bs-pagination-focus-bg: #c6e4be;
    --bs-pagination-active-bg: #c6e4be;
    --bs-pagination-active-border-color: #c6e4be;
    justify-content: center;
    }
    .check {
        accent-color: #198754;
    }
</style>