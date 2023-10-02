const body = el("#body");
body.classList.add('container', 'mb-auto');


const addProductForm = `
<div class="product-form">
    <form id="addNewProductForm">
        <h1 class="h3 mb-3 fw-normal">Add New Product</h1>
    
        <div class="form-floating">
          <input type="text" class="form-control" id="productName" placeholder="Product Name">
          <label for="productName">Product Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="productDetails" placeholder="Product Details">
          <label for="productDetails">Product Details</label>
        </div>
        <div class="form-floating">
            <input type="number" class="form-control" id="productPrice" placeholder="Product Price">
            <label for="productPrice">Product Price</label>
        </div>
        <div class="form-floating">
            <input type="file" class="form-control" id="productImage" placeholder="Product Image" disabled>
            <label for="productImage">Product Image</label>
        </div>
        
        <button class="btn btn-dark mt-2 w-100 py-2" type="submit">Add</button>
    </form>
</div>
`;

renderHtml(body,addProductForm);

el(".product-form").classList.add("m-auto", "w-100");
els(".product-form .form-floating").forEach((node) => {
    node.classList.add("mb-3");
})

let productData = el('#addNewProductForm');

el('[type=submit]').addEventListener("click", (e) => {
    product.addNewProduct(productData[0].value, productData[1].value, productData[2].value, null);
  });

