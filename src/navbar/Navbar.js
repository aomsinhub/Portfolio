import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="Profile">
            <h2 data-text = "WELCOME TO MY PORTFOLIO">WELCOME TO MY PORTFOLIO</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="Profile">Profile</a>
              <a class="nav-link" href="Works">Works</a>
              <a class="nav-link" href="Certificates">Certificates</a>
              <a class="nav-link" href="Activities">Activities</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar