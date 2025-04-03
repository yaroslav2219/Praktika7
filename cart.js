new Vue({
    el: "#app",
    data: {
        products: [
            { id: 1, name: "Gold Kiwi", description: "Sweet golden kiwi", image: "kiwi1.jpg", price: 3.5 },
            { id: 2, name: "Green Kiwi", description: "Classic green kiwi", image: "kiwi2.jpg", price: 2.8 },
            { id: 3, name: "Mini Kiwi", description: "Miniature Kiwi", image: "kiwi3.jpg", price: 4.0 },
            { id: 4, name: "Organic Kiwi", description: "Organic Kiwi", image: "kiwi4.jpg", price: 5.0 },
            { id: 5, name: "Tropical Kiwi", description: "Kiwi from Tropics", image: "kiwi5.jpg", price: 3.0 }
        ],
        cart: JSON.parse(localStorage.getItem("cart")) || {},
    },
    computed: {
        cartProducts() {
            let cartItems = [];
            for (let id in this.cart) {
                let product = this.products.find(p => p.id == id);
                if (product) {
                    cartItems.push({ ...product, quantity: this.cart[id] });
                }
            }
            return cartItems;
        },
        total() {
            return this.cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);
        }
    },
    methods: {
        removeFromCart(id) {
            const stringId = id.toString(); 
            const cart = { ...this.cart };
            if (cart[stringId]) {
                delete cart[stringId]; 
                localStorage.setItem("cart", JSON.stringify(cart));
                this.cart = cart;
            }
        },
        goToCheckout() {
            window.location.href = "checkout.html"; 
        }
    }
});

