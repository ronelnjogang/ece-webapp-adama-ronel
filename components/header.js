import Link from 'next/link'

export default function Header(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link href="/">
       <a class="navbar-brand me-auto" href="#">LOOCK</a> 
    </Link>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
        <Link href="/">
           <a class="nav-link active" aria-current="page" href="#">Home</a> 
        </Link>
          
        </li>
        <li class="nav-item">
        <Link href="/articles">
            <a class="nav-link" href="#">Articles</a>
        </Link>  
        </li>
        <li class="nav-item">
        <Link href="/about">
           <a class="nav-link">About us</a> 
        </Link>
          
        </li>
        <li class="nav-item">
        <Link href="/contact">
          <a class="nav-link">Contact</a>  
        </Link>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}