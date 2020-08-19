var app = new Vue ({
	el:'#app',
	data: {
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