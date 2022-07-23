<template>
  <div class="navbody">
    <nav class="navbar navbar-expand-lg navbarcolor">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img
            src="../../assets/Group1.png"
            width="250"
            height="250"
            class="img-fluid"
            alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu"></span>
        </button>
        <div
          class="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item px-5">
              <a class="nav-link" aria-current="page" href="#">About Us</a>
            </li>
            <li class="nav-item px-5">
              <a class="nav-link" href="#">Portfollo</a>
            </li>
            <li class="nav-item px-5">
              <a class="nav-link" href="#">Blog</a>
            </li>
          </ul>
          <form class="">
            <router-link to="/apply"
              ><button class="btn Btn pb-2" type="button">
                Apply for Funding &nbsp;&nbsp;
                <img
                  src="../../assets/Vector.png"
                  class="img-fluid"
                  width="7"
                  height="7"
                  alt=""
                /></button
            ></router-link>
          </form>
        </div>
      </div>
    </nav>

    <div class="banner">
      <div class="container textbanner">
        <div class="row col-lg-12 py-5 my-5 ban text-center">
          <img src="../../assets/27Africa.gif" class="mt-5" />
          <div>
            <router-link to="/apply"
              ><button class="btn Btn2">
                Apply For Funding &nbsp;&nbsp;
                <img
                  src="../../assets/Vector.png"
                  class="img-fluid"
                  width="7"
                  height="7"
                  alt=""
                /></button
            ></router-link>
          </div>
          <!-- <div class="bgimg">
            <img src="../../assets/Vector1.png " />
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12 mb-5">
        <h4 class="text-center">
          Some of Our Innovative Startups we are Proud of
        </h4>
      </div>
    </div>

    <div class="row text-center mb-5">
      <div class="col-md-3">
        <img
          src="../../assets/Property1.svg"
          class="img-fluid mb-3 mt-3"
          width="120"
          height="120"
        />
        <h6>Petme</h6>
      </div>
      <div class="col-md-3">
        <img
          src="../../assets/Vector.svg"
          class="img-fluid mb-3"
          width="70"
          height="70"
        />
        <h6>Wayamoney</h6>
      </div>
      <div class="col-md-3">
        <img
          src="../../assets/Bloom.svg"
          class="img-fluid mb-3"
          width="100"
          height="100"
        />
        <h6>Bloom Finance</h6>
      </div>
      <div class="col-md-3">
        <img
          src="../../assets/Property.svg"
          class="img-fluid mb-3"
          width="50"
          height="50"
        />
        <h6>Effex</h6>
      </div>
    </div>
  </div>

  <div class="numbers">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="service">
            <img src="../../assets/Rectangle7.png" class="img-fluid mt-3" />
          </div>
        </div>

        <div class="col-md-6 textNumbers">
          <h4 class="text-center mt-3">Our Numbers</h4>
          <p style="text-align: center; font-size: 16px">
            27 Africa invests in young resourceful founders that have shown grit
            in building tech enabled businesses in billion dollar markets.
          </p>
          <div class="mt-3">
            <div class="textHeader">
              <h6 style="font-size: 45px; text-align: center" class="mt-5">
                5+
              </h6>

              <h6 style="margin: 10px 0px 0 5px; text-align: center">
                Startups Funded
              </h6>
            </div>
            <div>
              <h6 style="font-size: 45px; text-align: center" class="mt-5">
                <b>$20m+</b>
              </h6>
              <h6 style="margin: 10px 0 0 5px; text-align: center">
                Portfolio Valuation
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section2">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card mt-5">
            <div class="card-body cc">
              <div class="row">
                <div class="col-sm-1">
                  <img src="../../assets/Vector2.png" />
                </div>
                <div class="col-sm-11">
                  <h4 class="h4section2">Who we are</h4>
                  <p class="psection2">
                    We seek to invest early in tech-enabled startups providing
                    solutions to Africans both locally and globally with a high
                    growth potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body cc">
              <div class="row">
                <div class="col-sm-1">
                  <img src="../../assets/Vector3.png" />
                </div>
                <div class="col-sm-11">
                  <h4 class="h4section2">Our Vision</h4>
                  <p class="psection2">
                    We are a VC firm with the vision of being the foremost
                    enabler of African innovators globally
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body cc">
              <div class="row">
                <div class="col-sm-1">
                  <img src="../../assets/Vector4.png" />
                </div>
                <div class="col-sm-11">
                  <h4 class="h4section2">Our Mission</h4>
                  <p class="psection2">
                    We are committed to supporting the next generation of young
                    African innovators and entrepreneurs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8 service">
          <div class="float-end">
            <img
              src="../../assets/Rectangle71.png"
              width="550"
              height="550"
              class="img-fluid mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="video">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="vid">
            <h3>Empowering The Next Generation Of African Innovators</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="apply">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="app text-center">
            <p>
              Are you an Entrepreneur with an idea for the next African Unicron?
            </p>
            <router-link to="/apply"
              ><button class="btn Btn6">Apply For Funding</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4">
          <div class="footlogo">
            <img src="../../assets/Group672.png" class="img-fluid" alt="" />
          </div>
          <div class="foot">
            <p>
              We are a Venture Capital firm supercharged with supporting next
              gen African Innovators
            </p>
            <span>©2022 27Africa, All Rights Reserved</span>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="foot">
            <h6>Company</h6>
            <ul>
              <li><router-link to="">About Us</router-link></li>
              <li><router-link to="">Carrers</router-link></li>
              <li><router-link to="">Contact Us</router-link></li>
              <li><router-link to="">Terms of Service</router-link></li>
              <li><router-link to="">Privacy Policy</router-link></li>
            </ul>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="foot">
            <h6>Contact Us</h6>
            <ul>
              <li><router-link to="">Email</router-link></li>
              <li><router-link to="">Phone</router-link></li>
              <li><router-link to="">Address</router-link></li>
            </ul>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="foot social">
            <h6>Follow Us</h6>
            <ul>
              <li><router-link to="">facebook</router-link></li>
              <li><router-link to="">twitter</router-link></li>
              <li><router-link to="">instagram</router-link></li>
              <li><router-link to="">linkdin</router-link></li>
            </ul>
            <p>Sign Up for Newsletter</p>
            <form action="">
              <input type="text" placeholder="Enter your email address" />
              <button class="Btn3">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
