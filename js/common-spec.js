// JsDocs
/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
const el = (element) => document.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements) => document.querySelectorAll(elements);

const renderHtml = (element, htmlString) => {
  element.innerHTML += htmlString;
};

const setStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      data: value,
    })
  );
};

const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data).data;
  return null;
};


const product = (() => {
  const productList = getStorage("products")??[]; 
  const productOperations = {
    addNewProduct: ( productName, productDetails, productPrice = 0, productPhoto ) => {
      let Product = {
        name: productName,
        details: productDetails,
        price: productPrice,
        photo: productPhoto,
      };
      productList.push(Product);
      setStorage("products", productList);
    },
    getAllProducts: () => {
      return productList;
    },
    getTotalPrice: () => {
      let totalPrice = 0;
      productList.forEach((product) => {
        totalPrice += product.price;
      });
      return totalPrice;
    },
    findProduct: (productName) => {
      const regex = new RegExp(productName, "i");
      return productList.filter((product) => product.name.search(regex) >= 0);
    },
  };
  return productOperations;
})();