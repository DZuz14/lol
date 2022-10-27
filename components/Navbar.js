import '../css/components/Navbar.css';
import img from '../img/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header class="p-3 mb-3">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img className='nav-logo' src={img} alt="partner" height={45} />
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Naslovna</Link></li>
          <li><a href="#" class="nav-link px-2 link-secondary">O nama</a></li>
          <li><Link to="/services" className="nav-link px-2 link-secondary">Usluge</Link></li>
          <li><a href="#" class="nav-link px-2 link-secondary">Blog</a></li>
          <li><a href="#" class="nav-link px-2 link-secondary">Kontakt</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-primary-outline btn-lg"> Login </button>
          <button type="button" class="btn btn-primary btn-lg">Pridruži se </button>
        </div>
        
      </div>
    </div>
  </header>
  );
}