<template>
    <div class="container mb-5 mt-5">
        <h2 class="section-title mb-5">Product List</h2>
        <div class="row justify-content-end mt-3 mb-3">
            <div class="col-2">
                <router-link to="/productCreate"><button type="button" class="btn btn-dark"><i class="fa-solid fa-circle-plus"></i> 상품등록</button></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.index">
                <div class="card card-product card-plain shadow p-3 mb-5 bg-body rounded border border-0">
                    <div class="card-image">
                        <router-link to="/productView">
                            <img src="https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Rounded Image" class="img-fluid rounded img-responsive">
                        </router-link>
                        <div class="card-body">
                            <div class="card-description">
                                <h5 class="card-title">{{ product.productName }}</h5>
                                <p class="card-description">{{ product.productContents }}</p>
                            </div>
                            <div class="price">
                                <s>{{ product.price }}</s> <span class="text-danger">{{ product.dcPrice }}</span>
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
    data(){
        return {
            products: [
                {
                    productName: 'Laptop',
                    productContents: 'This is a limited edition.',
                    price: '100,000 원',
                    dcPrice: '70,000 원'
                },
                {
                    productName: 'Laptop',
                    productContents: 'This is a limited edition.',
                    price: '100,000 원',
                    dcPrice: '70,000 원'
                },
                {
                    productName: 'Laptop',
                    productContents: 'This is a limited edition.',
                    price: '100,000 원',
                    dcPrice: '70,000 원'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .btn-dark{
        width: 100%;
    }
</style>