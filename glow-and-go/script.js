let count = 0;
let total = 0;

function addToCart(price) {
    count++;
    total += price;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;

    alert("Product added to cart!");
}

function filterProducts(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}