import "./tab.css";

export const Tab = ({ title, desccorta, id, currentTab, handleTab }) => {
  return (
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
          <p>{desccorta}</p>
        </a>
      </li>
      <li className="nav-item" role="presentation"></li>
    </ul>
  );
};
