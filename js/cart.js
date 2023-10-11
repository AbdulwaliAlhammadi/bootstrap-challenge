cartBtns.forEach((cartBtn)=>{
    cartBtn.classList.add('hover');
})


const cartDetails = `
<div class="container">
<div class="row mb-5">
  <div class="col-12">
    <div class="card mt-4">
      <div
        class="card-header bg-dark text-light d-flex align-items-center justify-content-between"
      >
        <div><i class="bi bi-cart-fill"></i> Shopping Cart</div>
        <div>
          <button type="button" class="btn btn-outline-light">
            Continue Shopping
          </button>
        </div>
      </div>
      <div class="card-body pb-0">
        <div class="d-none d-lg-block">
          <div class="row">
            <div class="col-2">Product Photo</div>
            <div class="col-6">Product Details</div>
            <div class="col-2">Price</div>
            <div class="col-1">Count</div>
            <div class="col-1">Action</div>
          </div>
          <hr />
        </div>

        <div class="row h-100 px-1">
          <div
            class="col-4 col-lg-2 text-center position-relative p-0"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y0yE4bnH6kJQvlXeQ4ansVtfre-v8qfw4pMOK1eq&s"
              class="rounded"
              width="100%"
            />
            <span
              id="priceTag"
              class="position-absolute translate-middle badge rounded-pill bg-danger top-0"
              style="right: -36px"
              >$100</span
            >
          </div>
          <div class="col-8 col-lg-6">
            <h5>Product Name</h5>
            <div style="font-size: 11px">Product Details</div>
            <div
              class="align-items-center container d-lg-none ps-0 row"
            >
              <div class="col-12" style="font-size: 11px">
                <span style="font-size: 17px; font-weight: bold">
                  $200</span
                >
              </div>
              <div class="col-10">
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                  <div style="font-size: 11px">
                    <span style="font-size: 17px">2</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <button class="btn btn-outline-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="d-none d-lg-block col-lg-2"
            style="font-size: 11px"
          >
            <span style="font-size: 17px">$200</span>
          </div>
          <div
            class="d-none d-lg-block col-lg-1"
            style="font-size: 11px"
          >
            <span style="font-size: 17px"> 2</span>
          </div>
          <div class="d-none d-lg-block col-lg-1">
            <button class="btn btn-outline-danger">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div class="card-footer">
        <div class="d-flex align-items-center justify-content-end">
          <div>
            <h5>Order Total: $200.00</h5>
          </div>
          <div class="px-3">
            <button
              type="submit"
              class="btn btn-success form-control"
            >
              <span class="px-5">Buy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

renderHtml(body,cartDetails);