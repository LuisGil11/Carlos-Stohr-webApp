import { Row } from "react-bootstrap";
import "./tab.css";

export const Tab = ({
  title,
  descCorta,
  descLarga,
  imagen,
  id,
  currentTab,
  handleTab,
}) => {
  return (
    <Row className="tabs">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <ul className="nav flex-column" role="tablist">
          <li
            className="nav-item"
            role="presentation"
            onClick={() => handleTab(id)}
          >
            <a
              className={`nav-link show ${currentTab === id ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={"#" + id}
              aria-selected="true"
              role="tab"
            >
              <h4>{title}</h4>
              <p>{descCorta}</p>
            </a>
          </li>
          <li className="nav-item" role="presentation"></li>
        </ul>
      </div>
      <div className="col-lg-8">
        <div className="tab-content">
          <div
            className={`tab-pane ${currentTab === id ? "active show" : ""}`}
            id={id}
            role="tabpanel"
          >
            <h3>{title}</h3>
            <p className="fst-italic">{descCorta}</p>
            <img src={imagen} alt="img" className="img-fluid" />
            <p>{descLarga}</p>
          </div>
        </div>
      </div>
    </Row>
  );
};
