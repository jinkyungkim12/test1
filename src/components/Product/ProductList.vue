<template>
    <div class="container mb-5 mt-5">
        <h2 class="section-title mb-5">Product List</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card card-product card-plain shadow p-3 mb-5 bg-body rounded border border-0">
                    <div class="card-image">
                        <a href="#paper-kit">
                            <img src="https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Rounded Image" class="img-fluid rounded img-responsive">
                        </a>
                        <div class="card-body">
                            <div class="card-description">
                                <h5 class="card-title">{{ productName1 }}</h5>
                                <p class="card-description">{{ productContents1 }}</p>
                            </div>
                            <div class="price">
                                <s>{{ price1 }}</s> <span class="text-danger">{{ dcPrice1 }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-product card-plain shadow p-3 mb-5 bg-body rounded border border-0">
                    <div class="card-image">
                        <a href="#paper-kit">
                            <img src="https://images.unsplash.com/photo-1493020258366-be3ead1b3027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Rounded Image" class="img-fluid rounded img-responsive">
                        </a>
                        <div class="card-body">
                            <div class="card-description">
                                <h5 class="card-title">{{ productName2 }}</h5>
                                <p class="card-description">{{ productContents2 }}</p>
                            </div>
                            <div class="price">
                                <s>{{ price2 }}</s> <span class="text-danger">{{ dcPrice2 }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-product card-plain shadow p-3 mb-5 bg-body rounded border border-0">
                    <div class="card-image">
                        <a href="#paper-kit">
                            <img src="https://images.unsplash.com/photo-1644953798828-a92178929505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvbXB1dGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Rounded Image" class="img-fluid rounded img-responsive">
                        </a>
                        <div class="card-body">
                            <div class="card-description">
                                <h5 class="card-title">{{ productName3 }}</h5>
                                <p class="card-description">{{ productContents3 }}</p>
                            </div>
                            <div class="price">
                                <s>{{ price3 }}</s> <span class="text-danger">{{ dcPrice3 }}</span>
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
            productName1: 'Laptop 1',
            productContents1: 'This is a limited edition.',
            price1: '3.520 $',
            dcPrice1: '3.000 $',
            productName2: 'Laptop 2',
            productContents2: 'This is a limited edition.',
            price2: '2.675 $',
            dcPrice2: '2.000 $',
            productName3: 'Tablets',
            productContents3: 'This is a limited edition.',
            price3: '2.675 $',
            dcPrice3: '2.000 $',
        }
    }
}
</script>

<style scoped>

</style>