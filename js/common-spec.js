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

const tryCatch = (callbackFunction) => {
  try {
    callbackFunction();
  } catch (error) {
    console.log("error: ", error);
  } finally {
    // console.log("finally");
  }
};

const setStorage = (key, value) => {
  tryCatch(() => {
    localStorage.setItem(
      key,
      JSON.stringify({
        data: value,
      })
    );
  });
};

const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data).data;
  return null;
};

const product = (() => {
  const productList = getStorage("products") ?? [];
  const productOperations = {
    addNewProduct: (
      productName,
      productDetails,
      productPrice = 0,
      productPhoto,
      eventHandler
    ) => {
      if (
        !productPhoto.startsWith("data:image/png") &&
        !productPhoto.startsWith("data:image/jpeg") &&
        !productPhoto.startsWith("data:image/jpg")
      )
        productPhoto = null;

      if (
        !(productName && productDetails && productPrice)
      ) {
        eventHandler.preventDefault();
        throw "Fields must me filled";
      }

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

const loadImage = (event, imgElementPara) => {
  tryCatch(() => {
    var file = event.target.files[0]; // Get the selected file

    // Check if a file is selected
    if (file) {
      var allowedTypes = ["image/jpeg", "image/png"];
      var fileType = file.type;

      if (allowedTypes.includes(fileType)) {
        var reader = new FileReader(); // Create a FileReader object

        // Set up the FileReader onload event
        reader.onload = function () {
          var imgElement = imgElementPara;
          imgElement.src = reader.result; // Set the src attribute of the img tag to the selected image
        };

        reader.readAsDataURL(file); // Read the selected file as a Data URL
      } else {
        prevImage.setAttribute("src", "#");
        throw "Not a vaild file";
      }
    }
  });
};
