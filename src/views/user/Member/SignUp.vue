<template>
    <div class="container mt-5">
        <div class="card mb-3 shadow p-3 mb-5 bg-body rounded border border-0">
            <div class="row g-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <img src="https://images.unsplash.com/photo-1511933801659-156d99ebea3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="img-fluid rounded-start">
                        </div>
                        <div class="col-8">
                            <h2 class="card-title mb-5 text-center">Sign up</h2>
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
                                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="password">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-4 text-start">
                                        <label for="exampleFormControlInput1" class="form-label">Password Check</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="password check">
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
                                        <div class="row">
                                            <div class="col-8">
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="aaa@example.com">
                                            </div>
                                            <div class="col-4">
                                                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">인증하기</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 이메일 인증 모달 -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">이메일 인증하기</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <label for="exampleFormControlInput2" class="form-label">Email</label>
                                                    <div class="row">
                                                        <div class="col-9">
                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="email@example.com">
                                                        </div>
                                                        <div class="col-3">
                                                            <button type="button" class="btn btn-dark">인증하기</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-3">
                                                    <label for="exampleFormControlInput2" class="form-label">Email 인증번호 입력</label>
                                                    <div class="row">
                                                        <div class="col-9">
                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="123456">
                                                        </div>
                                                        <div class="col-3">
                                                            <button type="button" class="btn btn-dark">인증완료</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                                                <button type="button" class="btn btn-dark">확인</button>
                                            </div>
                                        </div>
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
                            <div class="row justify-content-center mt-5">
                                <router-link to="/"><button type="button" class="btn btn-dark loginButton">Sign Up</button></router-link>
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
    name: "AddressSearch",
    methods : {
        search(){ //@click을 사용할 때 함수는 이렇게 작성해야 한다.
            new window.daum.Postcode({
            oncomplete: (data) => { //function이 아니라 => 로 바꿔야한다.
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var roadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zipcode').value = data.zonecode;
                document.getElementById("address").value = roadAddr;
                
                // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
                if(roadAddr !== ''){
                    document.getElementById("addressDetail").value = extraRoadAddr;
                } else {
                    document.getElementById("addressDetail").value = '';
                }

                var guideTextBox = document.getElementById("guide");
                // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
                if(data.autoRoadAddress) {
                    var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                    guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                    guideTextBox.style.display = 'block';

                } else {
                    guideTextBox.innerHTML = '';
                    guideTextBox.style.display = 'none';
                }
            }
        }).open();
        
        },
        clear(){
            document.getElementById('zipcode').value = '';
            document.getElementById("address").value = '';
            document.getElementById("addressDetail").value ='';
            document.getElementById("addressExtra").value ='';
        }
    },
}
</script>

<style scoped>
    .loginButton{
        width: 100%;
    }
    .img-fluid{
        height: 100%;
    }
    .profile{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        background-color: rgb(209, 204, 204);
	}
</style>