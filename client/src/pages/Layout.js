import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
  	<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  	  <div className="container-fluid">
	    <a className="navbar-brand" href="#">Carousel</a>
      	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
      	    </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
		<ul className="navbar-nav me-auto mb-2 mb-md-0">
		  <li className="nav-item">
		    <Link className="nav-link" to="/">Home</Link>
		  </li>
		  <li className="nav-item">
		    <Link className="nav-link" to="/blogs">Blogs</Link>
		  </li>
		  <li className="nav-item">
		    <Link className="nav-link" to="/grocery">Groceries</Link>
		  </li>
		  <li className="nav-item">
		    <Link className="nav-link" to="/contact">Contact</Link>
		  </li>
		</ul>
		<form className="d-flex">
		  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
		  <button className="btn btn-outline-success" type="submit">Search</button>
		</form>
	     </div>
	   </div>
	 </nav>
      </header>

      <main>
	  <div className="container">
      		<Outlet />
	  	<hr className="featurette-divider"/>
	  </div>
	  <footer className="container">
	    <p className="float-end"><a href="#">Back to top</a></p>
	    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
	  </footer>
      </main>
    </>
  )
};

export default Layout;
