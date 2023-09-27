import '../pages/Dashboard.css';

const SideBar = () => {

  return (
    <div className="sidebar__container">
      <h5 className="board__logo">QuadB Tech</h5>

      <ul className="nav__links">
  
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <i class="ri-focus-fill"></i>About
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <i class="ri-focus-fill"></i>Company Review
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <i class="ri-focus-fill"></i>HR Consulting
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <i class="ri-focus-fill"></i>Contact
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <i class="ri-focus-fill"></i>FAQs
          </a>
        </li>
      </ul>

    </div>
  );
}

export default SideBar;