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
                                                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">????????????</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ????????? ?????? ?????? -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">????????? ????????????</h1>
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
                                                            <button type="button" class="btn btn-dark">????????????</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-3">
                                                    <label for="exampleFormControlInput2" class="form-label">Email ???????????? ??????</label>
                                                    <div class="row">
                                                        <div class="col-9">
                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="123456">
                                                        </div>
                                                        <div class="col-3">
                                                            <button type="button" class="btn btn-dark">????????????</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">??????</button>
                                                <button type="button" class="btn btn-dark">??????</button>
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
                                                <input type="text" class="form-control" id="address" placeholder="??????">
                                            </div>
                                            <div class="col-12 mt-3">
                                                <input type="text" class="form-control" id="addressDetail" placeholder="????????????">
                                            </div>
                                            <div class="col-12 mt-3">
                                                <input type="text" class="form-control" id="addressExtra" placeholder="????????????">
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
        search(){ //@click??? ????????? ??? ????????? ????????? ???????????? ??????.
            new window.daum.Postcode({
            oncomplete: (data) => { //function??? ????????? => ??? ???????????????.
                // ???????????? ???????????? ????????? ??????????????? ????????? ????????? ???????????? ??????.

                // ????????? ????????? ?????? ????????? ?????? ????????? ????????????.
                // ???????????? ????????? ?????? ?????? ????????? ??????('')?????? ????????????, ?????? ???????????? ?????? ??????.
                var roadAddr = data.roadAddress; // ????????? ?????? ??????
                var extraRoadAddr = ''; // ?????? ?????? ??????

                // ??????????????? ?????? ?????? ????????????. (???????????? ??????)
                // ???????????? ?????? ????????? ????????? "???/???/???"??? ?????????.
                if(data.bname !== '' && /[???|???|???]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // ???????????? ??????, ??????????????? ?????? ????????????.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // ????????? ??????????????? ?????? ??????, ???????????? ????????? ?????? ???????????? ?????????.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // ??????????????? ?????? ????????? ?????? ????????? ?????????.
                document.getElementById('zipcode').value = data.zonecode;
                document.getElementById("address").value = roadAddr;
                
                // ???????????? ???????????? ?????? ?????? ?????? ????????? ?????????.
                if(roadAddr !== ''){
                    document.getElementById("addressDetail").value = extraRoadAddr;
                } else {
                    document.getElementById("addressDetail").value = '';
                }

                var guideTextBox = document.getElementById("guide");
                // ???????????? '?????? ??????'??? ????????? ??????, ?????? ???????????? ????????? ?????????.
                if(data.autoRoadAddress) {
                    var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                    guideTextBox.innerHTML = '(?????? ????????? ?????? : ' + expRoadAddr + ')';
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