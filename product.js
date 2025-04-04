const app = new Vue({
    el: "#app",
    data() {
        return {
            products: [
                { id: 1, name: "Golden Kiwi", description: "Sweet golden kiwi", image: "kiwi1.jpg", price: 3.5 },
                { id: 2, name: "Green Kiwi", description: "Classic green kiwi", image: "kiwi2.jpg", price: 2.8 },
                { id: 3, name: "Mini Kiwi", description: "Miniature Kiwi", image: "kiwi3.jpg", price: 4.0 },
                { id: 4, name: "Organic Kiwi", description: "Organic Kiwi", image: "kiwi4.jpg", price: 5.0 },
                { id: 5, name: "Tropical Kiwi", description: "Kiwi from Tropics", image: "kiwi5.jpg", price: 3.0 }
            ],
            product: null
        };
    },
    methods: {
        addToCart(id) {
            let cart = JSON.parse(localStorage.getItem("cart")) || {};
            if (!cart[id]) {
                cart[id] = 1;
                localStorage.setItem("cart", JSON.stringify(cart));
            }
            alert("Товар додано до кошика");
        }
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));

        this.product = this.products.find(p => p.id === productId);
    }
});

