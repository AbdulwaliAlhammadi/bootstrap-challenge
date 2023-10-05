// const headEl = el('head');
// const headContent = `
// <link rel="stylesheet" href="css/bootstrap.min.css" />
//     <link rel="stylesheet" href="css/bootstrap-icons.min.css" />
//     <link rel="stylesheet" href="css/style.css" />
    
// `;

// renderHtml(headEl, headContent);


// var bootstrapLoaded = false;
//     var commonLoaded = false;

//     var bootstrapScript = document.createElement('script');
//     bootstrapScript.src = 'js/bootstrap.bundle.min.js';
//     bootstrapScript.onload = function() {
//       bootstrapLoaded = true;
//       checkLoaded();
//     };
//     document.head.appendChild(bootstrapScript);

//     var commonScript = document.createElement('script');
//     commonScript.src = 'js/common.js';
//     commonScript.onload = function() {
//       commonLoaded = true;
//       checkLoaded();
//     };
//     document.head.appendChild(commonScript);

//     function checkLoaded() {
//       if (bootstrapLoaded && commonLoaded) {
//         // All scripts are loaded successfully
//         // showContent();
//         console.log('sssssssss');
        
//       }
//     }

// const jsTags = `
//     <script src="js/bootstrap.bundle.min.js"></script>
//     <script src="js/common.js"></script>
// `;

// const mainEl = el('main');
// mainEl.insertAdjacentHTML('afterend', jsTags);

// const bodyTag = el('body');







const body = el("#body");
body.classList.add('mb-auto');

const allProducts = product.getAllProducts();

const bodyTitle = `
<section>
  <div class="p-5 mb-2 bg-dark text-white text-center">
    <h1 class="fw-bold fsn-1">Shop in style</h1>
    <span class="text-white-50">With this shop homepage template</span>
  </div>
</section>
`;

const createProductCard = function(productName, productDetails, productPrice, productImage){ 
    let productTag = `
            <span> 450x300 </span>
            <span class="vl"></span>
    `;

    if(productImage)
        productTag = `
            <img src="${productImage}" alt="${productName}" class="h-100 w-100"></img>
        `
        
    return `
    <div class="col">
        <div class="card h-100">
          <div class="card-div fs-1">
            ${productTag}
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold">${productName}</h5>
            <p class="card-text">$${productPrice}</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-dark">
              Add to cart
            </button>
          </div>
        </div>
    </div>
`
}



const productContainer = () =>{
    let allPCards = '';
    
    allProducts.forEach( prod => {
        allPCards += createProductCard(prod.name, prod.details, prod.price, prod.photo);
    });

    if (!allPCards){
        return `
            <div class="h2 my-5 text-center text-danger">No Products Added Yet!</div>
        `
    }

    return `
    <div class="container text-center mb-5 mt-5">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            ${allPCards}
        </div>
    </div>
    `
}

renderHtml(body,bodyTitle);
renderHtml(body,productContainer());

