var app = new Vue ({
	el:'#app',
	data: {
		product: 'Emegovitals Siberian Health',
		image: 'images/green-omega.jpg',
		inventory: 100,
		details: ["Complex with omega-3 acids"," Vitamin E","Vitamin D"],
		variants:[
			{
				variantId: 001,
				variantType: "Green",
				variantImage: 'images/green-omega.jpg'
			},
			{
				variantId: 002,
				variantType: "Blue",
				variantImage: 'images/blue-omega.jpg'
			},
			{
				variantId: 003,
				variantType: "Yellow",
				variantImage: 'images/yellow-omega.png'
			}
		],
		cart:0
	},
	methods:{
		addToCart: function(){
			this.cart += 1
		},
		removeFromCart: function(){
			this.cart -= 1
			if(this.cart < 0)
				this.cart = 0
		},
		updateProduct: function(variantImage){
			this.image = variantImage
		}
	}
})