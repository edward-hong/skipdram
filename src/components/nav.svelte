<style lang="scss">

$sm-icon-color: #444;

nav {
  display: block;
  width: 100%;
  height: 50px;
  position: fixed;
  overflow: hidden;
  transition: background-color 1s linear;
  z-index: 10;

  .nav-icons {
    width: 40px;
    height: 40px;
    top: 5px;
    position: absolute;
    font-size: 40px;
    color: $sm-icon-color;
  }

  &.scrolled {
    background-color: #000;
  }
}

#nav {
  &-bar {
    margin: auto;
    max-width: 1200px;
    display: block;
  }

  &-logo {
    float: left;
    margin-left: 16px;
    position: relative;

    a {
      text-decoration: none;
    }

    img {
      display: block;
      margin: 0;
      width: 50px;
      padding: 5px;
      max-width: 100%;
      box-sizing: border-box;
    }
  }

  &-links {
    float: right;
    position: relative;
    display: none;

    &.active {
      display: block;
    }
  }

  &-links-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;


    li {
      float: left;
      line-height: 50px;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;

      &:hover {
        background: #000;
        opacity: 0.8;
      }

      a {
        display: block;
        text-decoration: none;
        color: #fff;
        padding: 0 16px;
        box-sizing: border-box;
      }
    }
  }

  &-hamburger {
    width: 60px;
    float: right;
    line-height: 50px;
    cursor: pointer;
    position: relative;
    color: #fff;
    height: 50px;

    &:hover {
      background-color: #000;
      opacity: 0.7;
    }

    &.active {
      background-color: #000;
      opacity: 0.7;

      #hamburger-icon {
        background-color: transparent;

        &:before,
        &:after {
          top: 0;
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(135deg);
        }
      }
    }

    #hamburger-icon {
      width: 30px;
      height: 3px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: #fff;

        transition: 0.2s;
      }

      &:before {
        top: -8px;
      }

      &:after {
        top: 8px;
      }
    }
  }
}

@each $i in (1, 2, 3) {
  .nav-icons:nth-child(#{$i}) {
    animation: spin #{10-$i}s infinite linear;
  }
}

@keyframes spin {
  from {
    left: -100px;
  }
  to {
    left: 100%;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media (min-width: 601px) {
  #nav {
    &-hamburger {
      display: none;
    }

    &-links {
      display: block !important;
    }
  }
}
</style>

<nav>
  <i class="nav-icons fa fa-instagram"></i>
  <i class="nav-icons fa fa-youtube-play"></i>
  <i class="nav-icons fa fa-twitter"></i>

  <div id="nav-bar">
    <div id="nav-logo">
      <a href="/">
        <img
          src="https://res.cloudinary.com/avatarhzh/image/upload/c_scale,w_64/v1516243799/nation-of-social-media/global.png"
          alt="navigation logo"
        />
      </a>
    </div>

    <button class:active={hamburgerActive} on:click={handleToggleHamburger} id="nav-hamburger">
      <div id="hamburger-icon"></div>
    </button>

    <div class:active={hamburgerActive} id="nav-links">
      <ul id="nav-links-items">
        <li><a href="/">World</a></li>
        <li><a href="/usa">USA</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  </div>
</nav>

<script>
  let hamburgerActive = false

  const handleToggleHamburger = () => hamburgerActive = !hamburgerActive
</script>
