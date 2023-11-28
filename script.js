fetch(`https://dummyjson.com/carts`)
  .then((data) => data.json())
  .then((cart) => displayData(cart));
function displayData(cartGroup) {
  for (let cart of cartGroup.carts) {
    for (let product of cart.products) {
      const htmlData = `
            <div class="card m-2" style="width: 18rem">
             <img src="${product.thumbnail}" class="card-img-top" alt="..." />
              <div class="card-body">
               <h5 class="card-title">${product.title}</h5>
               <p class="card-text">price : ${product.discountedPrice}</p>
               <a href="#" class="btn btn-primary">But Now</a>
              </div>
            </div>`;
      cartContainer.innerHTML += htmlData;
    }
  }
}