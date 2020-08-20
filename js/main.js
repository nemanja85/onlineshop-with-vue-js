Vue.component('product',{
	template: `
	<div class="product">
				<nav class="navbar navbar-dark bg-dark">
					<div class="cart">
						<p class="float-right"><i class="fas fa-shopping-cart"></i> {{cart}}</p>
					</div>
				</nav>
				<div class="container">
					<div class="row mt-5">
						<div class="col-sm-6 col-md-6 col-lg-4">
							<div class="product-image">
								<img :src="image" alt="" />
							</div>
						</div>
						<div class="col-sm-6 col-md-6 col-lg-8">
							<div class="product-info">
								<h2>{{ title }}</h2>
								<p v-if="selectedVariant > 10">In Stock</p>
								<p v-else-if="selectedVariant < 10 && selectedVariant > 0">Almost sold out!</p>
								<p v-else>Out Stock</p>
								
								<ul>
									<li v-for="detail in details">{{ detail }}</li>
								</ul>
								<div class="product-color">
									<div v-for="(variant, index) in variants" 
									 :key="variant.variantId" 
									 :style="{backgroundColor: variant.variantType}"
									 @mouseover="updateProduct(index)"
									 class="color-box">
									</div>
								</div>
								
								<button @click="addToCart" 
										:disabled="!inStock"
										:class="{disabledButton: !inStock}"
										class="btn btn-primary "> Add to Cart </button>
								<button @click="removeFromCart" 
										:disabled="!inStock" 
										:class="{disabledButton: !inStock}"
										class="btn btn-danger"> Remove from Cart </button>
							</div>
						</div>
					</div>
				</div>
			</div>
	`,
	data(){
		return {
		product: 'Emegovitals',
		brand: 'Siberian Health',
		selectedVariant: 0,
		details: ["Complex with omega-3 acids"," Vitamin E","Vitamin D"],
		variants:[
			{
				variantId: 001,
				variantType: "Green",
				variantImage: 'images/green-omega.jpg',
				variantQuantity: 250
			},
			{
				variantId: 002,
				variantType: "Blue",
				variantImage: 'images/blue-omega.jpg',
				variantQuantity: 8
			},
			{
				variantId: 003,
				variantType: "Yellow",
				variantImage: 'images/yellow-omega.png',
				variantQuantity: 0
			}
		],
		cart:0
		}
	},
	methods: {
		addToCart: function(){
			this.cart += 1
		},
		removeFromCart: function(){
			this.cart -= 1
			if(this.cart < 0)
				this.cart = 0
		},
		updateProduct: function(index){
			this.selectedVariant = index
		}
	},
	computed: {
		title() {
			return this.product + ' ' + this.brand
		},
		image(){
			return this.variants[this.selectedVariant].variantImage
		},
		inStock(){
			return this.variants[this.selectedVariant].variantQuantity
		}
	}
})


var app = new Vue ({
	el:'#app'
})