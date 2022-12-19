<template>
    <div class="container mt-5 mb-5">
        <div class="row"> 
            <div class="col-md-4 col-sm-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block img-fluid rounded-4">
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1550483513-b4fd222ce32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="d-block img-fluid rounded-4">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> 
            </div>
            <div class="col-md-8 col-sm-6">
                <h2>{{ productName }}</h2>
                <h4 class="price"><strong>{{ price }}</strong></h4>
                <hr>
                <p>{{ productInfo }}</p>
                <span class="label label-default shipping text-success">무료배송</span>
                <div class="row mt-3">
                    <div class="col-md-6 col-sm-6">
                        <label>Select Option</label>
                        <div class="form-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>:: Option ::</option>
                                <option value="1">Laptop only</option>
                                <option value="2">Laptop + window</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <label>Select Amount</label>
                        <div class="form-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>:: Amount ::</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-7 offset-md-5 col-sm-8 text-end">
                        <button class="btn btn-dark"><i class="fa-solid fa-cart-shopping"></i> 주문하기</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-4 col-sm-4">
                <div class="info">
                    <div class="icon text-center text-warning mt-3 mb-3">
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <div class="description">
                        <h4 class="info-title"> 2 Days Delivery </h4>
                        <p>Spend your time generating new ideas. You don't have to think of implementing anymore.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="info">
                    <div class="icon text-center text-danger mt-3 mb-3">
                        <i class="fa-solid fa-credit-card"></i>
                    </div>
                    <div class="description">
                        <h4 class="info-title"> Refundable Policy </h4>
                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="info">
                    <div class="icon text-center text-warning mt-3 mb-3">
                        <i class="fa-solid fa-lightbulb"></i>
                    </div>
                    <div class="description">
                        <h4 class="info-title"> Popular Item </h4>
                        <p>Choose from a veriety of colors resembling sugar paper pastels.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Preview image figure-->
        <h4 class="mt-5">Detail View</h4>
        <figure class="mb-4 mt-4">
            <img class="img-fluid rounded" src="https://dummyimage.com/1200x400/ced4da/6c757d.jpg" alt="">
        </figure>
        <!-- Post content-->
        <section class="mb-5">
            <p class="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
            <p class="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
            <p class="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
        </section>
    </div>
</template>

<script>
export default{
    data(){
        return {
            productName: 'Laptop 1',
            productInfo: 
                `This blazer in suede is a must-have of your wardrobe.
                Team it with a angora blazer and a angora sweater.`,
        }
    }
}
</script>
<style scoped>
    .container{
        width: 50%;
    }
    .icon{
        font-size: 50px;
    }
</style>