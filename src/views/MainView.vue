<template>
    <div class="container mt-5">
        <div class="row">
			
			<!-- USER -->
			
			<div class="col-6">
				<div class="shadow p-3 mb-5 bg-body rounded-4">
					<div class="padding">
						<div class="text-center"><h1><b>User</b></h1></div>
						
						<!-- 이미지 -->
						<div class="row justify-content-center mt-5 mb-5">
							<img src="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80" width="504" height="350">						
						</div>
						
						<!-- 버튼 -->
						<div class="row">
							<router-link to="/"><button type="button" class="btn btn-dark"><b>입장하기</b></button></router-link>
						</div>
						
					</div>
				</div>
			</div>
			
			
			<!-- ADMIN -->
			
			<div class="col-6">
				<div class="shadow p-3 mb-5 bg-body rounded-4">
					<div class="padding">
						<div class="text-center"><h1><b>Admin</b></h1></div>
						
						<!-- 이미지 -->
						<div class="row justify-content-center mt-5 mb-5">
							<img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="504" height="350">					
						</div>
										
						<!-- 버튼 -->
						<div class="row">
							<router-link to="/adminHome"><button type="button" class="btn btn-dark"><b>입장하기</b></button></router-link>
						</div>
					
					</div>
				</div>
			</div>
		</div>
    </div>            
</template>

<script>
export default {

}
</script>

<style scoped>
	.padding{
		padding: 50px;
	}
	.btn-dark{
		width: 100%; 
		border: 0px solid transparent;
	}
</style>