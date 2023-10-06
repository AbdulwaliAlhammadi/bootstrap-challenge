const allProducts = product.getAllProducts();

const bodyTitle = `
<section>
  <div class="p-5 mb-2 bg-dark text-white text-center">
    <h1 class="fw-bold fsn-1">Shop in style</h1>
    <span class="text-white-50">With this shop homepage template</span>
  </div>
</section>
`;

const createProductCard = function (
  productId,
  productName,
  productDetails,
  productPrice,
  productImage
) {
  let productTag = `
            <span> 450x300 </span>
            <span class="vl"></span>
    `;

  if (productImage)
    productTag = `
            <img src="${productImage}" alt="${productName}" class="h-100 w-100"></img>
        `;

  return `
    <div class="col product-item">
        <div class="card h-100">
          <div class="card-div fs-1">
            ${productTag}
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold product-name">${productName}</h5>
            <p class="card-text">$${productPrice}</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-dark" value="${productId}">
              Add to cart
            </button>
          </div>
        </div>
    </div>
`;
};

const productContainer = (allProd) => {
  let allPCards = "";

  allProd.forEach((prod) => {
    allPCards += createProductCard(
      prod.id,
      prod.name,
      prod.details,
      prod.price,
      prod.photo
    );
  });

  if (!allPCards) {
    return `
            <div class="h2 my-5 text-center text-danger">No Products Found!</div>
        `;
  }

  return `
    <div class="container text-center mb-5 mt-5 product-container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            ${allPCards}
        </div>
    </div>
    `;
};

renderHtml(body, bodyTitle);
renderHtml(body, productContainer(allProducts));

const chechDisabledBtn = (checkAddBtns) => {
  checkAddBtns.forEach((btn) => {
    let productCnt = cart.getCartProductsById(btn.value).length;
    if (productCnt != 0) {
      btn.classList.add("disabled", "text-black-50", "border");
    }
  });
};

const searchEl = el("#searchInput");
const productContainerDiv = el(".product-container");
let addBtns = els(".product-container .card-footer>button");
chechDisabledBtn(addBtns);

searchEl.addEventListener("input", () => {
  const fetchedProducts = product.getProductsByName(searchEl.value);
  updateHtml(productContainerDiv, productContainer(fetchedProducts));
  addBtns = els(".product-container .card-footer>button");
  chechDisabledBtn(addBtns);
});

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let productCnt = cart.getCartProductsById(btn.value).length;
    if (productCnt == 0) {
      cart.add(btn.value);
      updateHtml(el("#cartCnt"), cart.getCount());
    }
    // btn.classList.add("disabled", "text-black-50", "border");
    chechDisabledBtn(addBtns);
  });
});
