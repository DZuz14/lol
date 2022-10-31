/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classNames from 'classnames';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <header className="p-3 mb-3">
      <div className={classNames('container', styles.navbar)}>
        <div className="row align-items-center justify-content-center">
          <Link
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none"
          >
            <img
              className={styles.navLogo}
              src="/img/logo.png"
              alt="partner"
              height={45}
            />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link href="/" className="nav-link px-2 link-secondary aria-current
">
                Naslovna
              </Link>
            </li>

            <li>
              <Link href="#" className="nav-link px-2 link-secondary">
                O nama
              </Link>
            </li>

            <li>
              <Link href="/services" className="nav-link px-2 link-secondary">
                Usluge
              </Link>
            </li>

            <li>
              <Link href="#" className="nav-link px-2 link-secondary">
                Blog
              </Link>
            </li>

            <li>
              <Link href="#" className="nav-link px-2 link-secondary">
                Kontakt
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-primary-outline btn-lg">
              Login
            </button>

            <button type="button" className="btn btn-primary btn-lg">
              Pridruži se
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}