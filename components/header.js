import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg flex items-center justify-between flex-wrap bg-teal-500 p-6">
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
                  <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">ABOUT US</a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link ">CONTACT US</a>
                </Link>

              </li>

              <li>
                <Link href="/login-native">
                  <button type="button" class="btn btn-dark">Join US</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}