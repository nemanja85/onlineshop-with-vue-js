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
				variantType: "green",
				variantImage: 'images/green-omega.jpg'
			},
			{
				variantId: 002,
				variantType: "blue",
				variantImage: 'images/blue-omega.jpg'
			},
			{
				variantId: 003,
				variantType: "yellow",
				variantImage: 'images/yellow-omega.png'
			}
		],
		cart:0
	},
	methods:{
		addToCart: function(){
			this.cart += 1
		}
	}
})