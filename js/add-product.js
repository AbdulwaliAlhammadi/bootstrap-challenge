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
            <input type="file" class="form-control" id="productImagePath" placeholder="Product Image Path" accept="image/jpeg, image/png">
            <label for="productImagePath">Product Image Path</label>
            <img id="previewProductImage" src="#" alt="Preview Product Image" class="d-none">
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

let prevImage = el('#previewProductImage');
el('#productImagePath').addEventListener('change', (event)=>{ 
    loadImage(event, prevImage);
});

let productForm = el('#addNewProductForm');

el('[type=submit]').addEventListener("click", (event) => {
    let productImg = prevImage.getAttribute('src');
    product.addNewProduct(productForm[0].value, productForm[1].value, productForm[2].value, productImg, event);
  });

  
productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    el('[type=submit]').classList.add('disabled');
    
    el('[type=submit]').innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Saving...</span>
    `;

    setTimeout(()=>{
        el('[type=submit]').classList.remove('disabled');
        el('[type=submit]').innerHTML = 'Add';

        let successAlert = `
        <div class="alert alert-success mt-3 alert-dismissible fade show" role="alert" id="successAlert">
            New Product Added Successfully!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        el(".product-form").insertAdjacentHTML('beforebegin', successAlert);

        els('#addNewProductForm input').forEach((input)=>{
            input.value='';
        });
        prevImage.setAttribute("src", "#");
    },1000);
})