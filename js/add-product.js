// variables declaration


const product = () =>{
    const productList = [];
    const productOperations = {
        addNewProduct: (productName, productDetails, productPrice = 0, productPhoto) => {
            let Product = {
              name: productName,
              details: productDetails,
              price: productPrice,
              photo: productPhoto,
            };
            productList.push(Product);
          },
        getTotalPrice: () => {
            let totalPrice = 0;
            productList.forEach((product) => {
              totalPrice += product.price;
            });
            return totalPrice;
          }
    }
    return productOperations;
}

// functions declaration
function addNewProduct(productName, productDetails, productPrice = 0, productPhoto) {
  let Product = {
    name: productName,
    details: productDetails,
    price: productPrice,
    photo: productPhoto,
  };
  productList.push(Product);
}

function getTotalPrice() {
  let totalPrice = 0;
  productList.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}

function findProduct(productName) {
  const regex = new RegExp(productName, "i");
  return productList.filter((product) => product.name.search(regex) >= 0);
}


const body = el("#body");
body.classList.add('h-100')

const bodyTitle = `
    
`;


renderHtml(body,bodyTitle)