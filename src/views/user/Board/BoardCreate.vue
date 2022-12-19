<template>
    <div class="container mt-5 mb-5">
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
        <div class="row justify-content-center mt-5 mb-5">
            <div class="col-3">
                <button type="button" class="btn btn-dark"><i class="fa-solid fa-pencil"></i> 작성하기</button>
            </div>
            <div class="col-3">
                <router-link to="/boardList"><button type="button" class="btn btn-secondary"><i class="fa-solid fa-delete-left"></i> 취소하기</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default{
}
</script>

<style scoped>
    .btn-dark{
        width:100%;
    }
    .btn-secondary{
        width:100%;
    }
</style>