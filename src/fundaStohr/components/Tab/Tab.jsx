import { useSelector } from "react-redux";
import "./tab.css";

export const Tab = ({ title, desccorta, id, handleTab }) => {
  const { tipoDeConcurso } = useSelector((state) => state.concurso);

  return (
    <ul className="nav flex-column" role="tablist">
      <li
        className="nav-item"
        role="presentation"
        onClick={() => handleTab(id)}
      >
        <a
          className={`nav-link show ${tipoDeConcurso === id ? "active" : ""}`}
          data-bs-toggle="tab"
          data-bs-target={"#" + id}
          aria-selected="true"
          role="tab"
        >
          <h4 style={{ fontFamily: '"Madimi One", sans-serif' }}>{title}</h4>
          <p style={{ fontFamily: '"Raleway", sans-serif' }}>{desccorta}</p>
        </a>
      </li>
      <li className="nav-item" role="presentation"></li>
    </ul>
  );
};
