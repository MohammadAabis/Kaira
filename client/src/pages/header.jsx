const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid main-div">
          <div className="main-div-left">
            <img src="/img/main-logo.png" alt="" />
          </div>

          <div className="main-div-center">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="offcanvas offcanvas-end"
                  data-bs-scroll="true"
                  id="navbarNavAltMarkup"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div className="scroll-menu navbar-toggler border-0">
                    <span>MENU</span>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      fdprocessedid="1inn4n"
                    ></button>
                  </div>

                  <div class="navbar-nav navbar-itemList ">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="##"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        HOME
                      </a>
                      <ul class="dropdown-menu border-0">
                        <li>
                          <a class="dropdown-item" href="##">
                            HOME 1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="##">
                            HOME 2
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="##">
                            HOME 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="##"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        SHOP
                      </a>
                      <ul class="dropdown-menu border-0">
                        <li>
                          <a class="dropdown-item" href="##">
                            SHOP 1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="##">
                            SHOP 2
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="##">
                            SHOP 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        BLOGS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        PAGES
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        CONTACT
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="main-div-right">
            <a href="##" className="whish-list">
              Wishlist (0)
            </a>
            <i className="bi bi-heart"></i>
            <a href="##" className="cart">
              Cart (0)
            </a>
            <i className="bi bi-cart"></i>
            <button className="search-bar bi bi-search"></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
