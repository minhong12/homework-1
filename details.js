const showProddata = [
    {
        img:"img/image 26 (1).png",
        name:"Fresh and Healthy Mixed Mayonnaise Salad",
        price:"$30",
    },
    {
        img:"img/image 26 (2).png",
        name:"The Creamiest Creamy Chicken",
        price:"$30",
    },
    {
        img:"img/image 26 (3).png",
        name:"Fruity Pancake with Orange & Blueberry",
        price:"$30",
    }
];
function showProducts(data){
    let product_item = document.querySelector(".prod");
    product_item.innerHTML="";
     if (product_item) {
        for (let item of data) {
            product_item.innerHTML += `
            <div class="products-details">
                    <div class="prod-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="prod-desc">
                        <h4>${item.name}</h4>
                        <p>${item.price}</p>
                        <button>Add To Cart</button>
                    </div>
            </div>
            `;
        }
    }
}
showProducts(showProddata);