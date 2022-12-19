<template>
	<div class="container-fluid">
        <!-- img s -->
        <div><img src="@/assets/boardImg.jpg"></div>
        <!-- img e -->
        <h1 class="text-center mt-5 mb-5">Board</h1>
        
        <!-- search s-->
        <div class="row">
            <div class="col-6"></div>
            <div class="col-2">
                <select class="form-select" aria-label="Default select example">
                    <option selected>검색조건</option>
                    <option value="1">아이디</option>
                    <option value="2">카테고리</option>
                    <option value="3">내용</option>
                </select>
            </div>
            <div class="col-3">
                <input class="form-control" type="text" value="" placeholder="검색어를 입력하세요.">
            </div>
            <div class="col-1">
                <button class="btn btn-dark"><i class="fa-solid fa-magnifying-glass"></i> 검색하기</button>
            </div>
        </div>
        <!-- search e -->

		<div class="row mt-5 mb-3">
            <div class="col text-end">
                <router-link to="/boardCreate"><button class="btn btn-dark"><i class="fa-solid fa-pencil"></i> 작성하기</button></router-link>
            </div>
        </div>
        
        <!-- table s -->
        <div class="row justify-content-center">
            <table class="table table-hover">
                <thead>
                    <tr class="table-dark text-white text-center">
                        <th scope="col" >
                            <input class="check" type="checkbox" name="check" onclick="selectAll(this)">
                        </th>
                        <th scope="col">NO</th>
                        <th scope="col">아이디</th>
                        <th scope="col">제목</th>
                        <th scope="col">내용</th>
                        <th scope="col">등록일</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr>
                        <td>
                            <input class="check" type="checkbox" name="check">
                        </td>
                        <th scope="row">{{ number }}</th>
                        <td><router-link to="/boardView">{{ memberId }}</router-link></td>
                        <td>{{ category }}</td>
                        <td>{{ contents }}</td>
                        <td>{{ regDate }}</td>
                    </tr>
                    <tr>
                        <td>
                            <input class="check" type="checkbox" name="check">
                        </td>
                        <th scope="row">{{ number }}</th>
                        <td>{{ memberId }}</td>
                        <td>{{ category }}</td>
                        <td>{{ contents }}</td>
                        <td>{{ regDate }}</td>
                    </tr>
                    <tr>
                        <td>
                            <input class="check" type="checkbox" name="check">
                        </td>
                        <th scope="row">{{ number }}</th>
                        <td>{{ memberId }}</td>
                        <td>{{ category }}</td>
                        <td>{{ contents }}</td>
                        <td>{{ regDate }}</td>
                    </tr>
                    <tr>
                        <td>
                            <input class="check" type="checkbox" name="check">
                        </td>
                        <th scope="row">{{ number }}</th>
                        <td>{{ memberId }}</td>
                        <td>{{ category }}</td>
                        <td>{{ contents }}</td>
                        <td>{{ regDate }}</td>
                    </tr>
                    <tr>
                        <td>
                            <input class="check" type="checkbox" name="check">
                        </td>
                        <th scope="row">{{ number }}</th>
                        <td>{{ memberId }}</td>
                        <td>{{ category }}</td>
                        <td>{{ contents }}</td>
                        <td>{{ regDate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- table e-->
        
        <!-- pagination s-->
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
        <!-- pagination e-->
    
    </div>
</template>

<script>
export default{
    data(){
        return {
            number: 1,
            memberId: '아이디',
            category: '제목',
            contents: '내용은 다음과 같습니다.',
            regDate: '2022-01-01 10:10:10'
        }
    }
}
</script>

<style scoped>
    .table{
        width: 99%;
    }
    .pagination {
    --bs-pagination-focus-box-shadow: 0 0 0 0.25rem #fcc4a361;
    --bs-pagination-color: black;
    --bs-pagination-hover-color: #f87320;
    --bs-pagination-focus-color: #f87320;
    --bs-pagination-focus-bg: #FCC4A3;
    --bs-pagination-active-bg: #FCC4A3;
    --bs-pagination-active-border-color: #FCC4A3;
    justify-content: center;
    }
</style>