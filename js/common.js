const main = el("#main");

const navBarContent = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container container-fluid">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
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
      <button type="button" class="btn btn-outline-dark mt-2">
        <i class="bi bi-cart-fill"></i> Cart
        <span class="badge text-bg-secondary">0</span>
      </button>
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

const bodyContent = `
    <div id="spinner" class="mb-auto spinner" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div id="body" class="d-none">
      
    </div>
`;




renderHtml(main, navBarContent);
renderHtml(main, bodyContent);
renderHtml(main, footerContent);
main.classList.add("d-flex" ,"flex-column", "vh-100");


async function loadPage() {
  el("#spinner").style.top = `calc(50% - ${el('#footer').offsetHeight}px + ${el('#spinner').offsetHeight}px/2 ) `;
  let myPromise = new Promise(function (resolve) {
    let hide = () => {
      // el("#spinner").classList.add("d-none");
      // el("#body").classList.remove("d-none");
    };
    setTimeout(function () {
      window.onload = hide;
      resolve(hide());
    }, 3000);
  });
  await myPromise;
}

loadPage();