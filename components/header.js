import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link href="/">
              <a className="navbar-brand me-auto" href="#">LOOCK</a>
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About us</a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>

              </li>

              <li>
                <Link href="/login-controlled">
                  <button type="button" class="btn btn-dark">Log in</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}