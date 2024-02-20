import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

export const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between">
          <div style={{ paddingTop: "8rem" }}>
            <a
              href=""
              className="text-decoration-none ms-4 d-flex align-items-center text-white"
              role="button"
            >
              <span className="f5-4">Side Menu</span>
            </a>
            <hr className="text-white d-none d-sm-block" />
            <ul className="nav nav-pills flex-column" id="parentM">
              <li className="nav-item my-1">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2 d-none d-xl-inline">Dashboard</span>
                </a>
              </li>
              <li className="nav-item text-white my-1">
                <a
                  href="#submenu"
                  className="nav-link text-white"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-2 d-none d-xl-inline">Products</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul
                  className="nav collapse ms-2 flex-column"
                  id="submenu"
                  data-bs-parent="#parentM"
                >
                  <li className="nav-item text-white">
                    <a
                      className="nav-link text-white"
                      href="#"
                      aria-current="page"
                    >
                      Item 1
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link text-white"
                      href="#"
                      aria-current="page"
                    >
                      Item 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-white my-1">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-2 d-none d-xl-inline">House</span>
                </a>
              </li>
              <li className="nav-item text-white my-1">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-xl-inline">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
