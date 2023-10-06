const main = el("#main");

const navBarContent = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container container-fluid">
    <a class="navbar-brand" href="index.html">Start Bootstrap</a>
    <div>
      <button 
        id="search-btn"
        class="navbar-toggler py-2 btn btn-outline-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSearch"
        aria-controls="navbarSearch"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="bi bi-search"></span>
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="flex-grow-0 collapse navbar-collapse" id="navbarSearch">
      <div class="input-container d-block my-2">
        <input class="form-control border rounded-pill" type="search" id="searchInput" placeholder="search">
        <i class="bi bi-search"></i>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="add-product.html">Add Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Shop 1</a></li>
            <li><a class="dropdown-item" href="#">Shop 2</a></li>
            <li><a class="dropdown-item" href="#">Shop 3</a></li>
          </ul>
        </li>
      </ul>
      <div class="ml-auto">
       
        <button type="button" class="btn btn-outline-dark">
          <i class="bi bi-cart-fill"></i> Cart
          <span id="cartCnt" class="badge text-bg-secondary">0</span>
        </button>
      </div>
    </div>
  </div>
</nav>
`;


const footerContent = `
    <footer id="footer" class="footer mt-auto p-4 bg-dark text-white text-center fw-bold fs-4">
        Copyright &copy; Your Website 2023
        <div class="fs-5 fw-normal">
            Done By <span class="fst-italic fw-bolder">Abdulwali Al-Hammadi</span>
        </div>
    </footer>
`;


let bodySpinner = `
    <div id="spinner" class="mb-auto spinner" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
`;

const bodyContent = `
    <div id="body" class="mb-auto">
      
    </div>
`;



renderHtml(main, navBarContent);
// renderHtml(main, bodySpinner);
renderHtml(main, bodyContent);
renderHtml(main, footerContent);
main.classList.add("d-flex" ,"flex-column", "vh-100");
const body = el('#body');


el('#search-btn').addEventListener('click', () => {
  el('#searchInput').focus();
});

updateHtml(el('#cartCnt'),cart.getCount());

// async function loadPage() {
//   el("#spinner").style.top = `calc(50% - 120px / 2 - 48px  ) `;
//   el(".spinner").style.top = `calc(50% - 24px / 2 - 48px  ) `;
//   let myPromise = new Promise(function (resolve) {
//     let hide = () => {
//       el("#spinner").classList.add("d-none");
//       el(".spinner").classList.add("d-none");
//       el("").classList.remove("d-none");
//     };
//     setTimeout(function () {
//       window.onload = hide;
//       resolve(hide());
//     }, 3000);
//   });
//   await myPromise;
// }

// el("#body").classList.add("d-none");
// loadPage();