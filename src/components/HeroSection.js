function HeroSection() {
  return (
    <div class="container">
      <div class="main-header-wraper">
        <div class="header-logo">
          <a href="./" aria-label="XenoQuant Logo Header">
            {/* <img
              class="logo-nav"
              src="image/XenoQuant_logo_white.webp"
              alt="XenoQuant"
              width="40px"
              height="40px"
            ></img> */}
          </a>
        </div>
        <div class="header-links" id="navbar">
          <button
            class="menu-close"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-label="Toggle navigation Close"
          >
            <span></span>
          </button>
          <ul id="primary-menu" class="menu">
            <li class="menu-item-has-children dropdown contry-dropdown">
              <span class="dropdown-toggle-btn">
                <a href="#" class="menu-link">
                  Home
                </a>
              </span>
            </li>
            <li class="menu-item-has-children dropdown has-mega-dropdown">
              <span class="dropdown-toggle-btn">
                <a href="#ourserviceheading" class="menu-link">
                  Services
                </a>
              </span>
            </li>
            <li class="menu-item-has-children dropdown has-mega-dropdown contry-dropdown">
              <span class="dropdown-toggle-btn">
                <a href="#ourclientsheading" class="menu-link">
                  Clients
                </a>
              </span>
            </li>
            <li>
              <a href="/contact-us.html" class="contact-btn menu-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
