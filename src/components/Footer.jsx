import React, { Component } from 'react'

class FooterTotal extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <footer className="footer" >
        <div className="footerNew" >
          <div className="container">
            <div className="row no-gutters">
              <div className="col-l-11 col-s-12">
                <div className="footerNewSubscribe">
                  <h4 className="h4">
                    <span>
                      <span> Sign up for news & get</span>
                      <span>
                        <span> 15% OFF</span>
                      </span>
                      <span></span>
                    </span>
                  </h4>
                </div>
              </div>
              <div className="col-l-12 offset-l-1 col-s-12">
                <div className="footerNewSubscribeInput">
                  <div className="gl-form-item">
                    <div className="gl-input">
                      <input className="inputF" type="email" name="email"/>
                      <label className="labelF" htmlFor="">your email</label>
                    </div>
                    <button type="button" className="buttonF">
                      <span> </span>
                      <svg className="btnStyle"></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="row">
            <div className="col-l-24 col-s-12 no-gutters">
              <div className="footerContent">
                <div>
                  <div className="contentasset">
                    <div className="content-wrapper">
                      <div>
                        <ul className="ulF1">
                          <h5 className="h5F">
                            <a className="aCustom" href="http://www.adidas.com/us/help" rel="nofollow" target="_blank">CUSTOMER SUPPORT</a></h5>
                          <li className="liF">Get Help</li>
                          <li className="liF">Track Order</li>
                          <li className="liF">Returns & Refunds</li>
                          <li className="liF">Sizing</li>
                          <li className="liF">Promotions</li>
                          <li className="liF">How to Clean</li>
                          <li className="liF">Store Locator</li>
                          <li className="liF">Site Map</li>
                        </ul>
                        <ul className="ulF2">
                          <h5 className="h5F">
                            <a className="aCustom" href="http://www.adidas.com/us/help" rel="nofollow" target="_blank">COMPANY INFO</a></h5>
                          <li style={{ listStyle: 'none' }} > &nbsp; </li>
                          <li className="liF">About Us</li>
                          <li className="liF">Careers</li>
                          <li className="liF">Press</li>
                          <li className="liF">Affiliates</li>
                          <li className="liF">Military Discount</li>
                          <li className="liF">Student Discount</li>
                          <li className="liF">Mobile Apps</li>
                          <li className="liF">Creators Club</li>
                          <li className="liF">adidas Stories</li>
                        </ul>
                        <ul className="ulF3">
                          <h5 className="h5F">
                            <a className="aCustom" href="http://www.adidas.com/us/help" rel="nofollow" target="_blank">PARTNER SITES</a></h5>
                          <li style={{ listStyle: 'none' }} > &nbsp; </li>
                          <li className="liF">adidas Outdoor</li>
                          <li className="liF">miTeam</li>
                        </ul>
                        <ul className="ulF4">
                          <h5 className="h5F">
                            <a className="aCustom" href="http://www.adidas.com/us/help" rel="nofollow" target="_blank">PRIVACY & TERMS</a></h5>
                          <li style={{ listStyle: 'none' }} > &nbsp; </li>
                          <li className="liF">Privacy & Security</li>
                          <li className="liF">adidas - Runstatic Privacy Statement</li>
                          <li className="liF">Terms and Conditions</li>
                          <li className="liF">Policy on Human Trafficking</li>
                        </ul>
                        <ul className="ulF5">
                          <h5 className="h5F">
                            <a className="aCustom" href="http://www.adidas.com/us/help" rel="nofollow" target="_blank">GIFT CARDS</a></h5>
                          <li style={{ listStyle: 'none' }} > &nbsp; </li>
                          <li className="liF">Check Balance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-copy">
                <div className="footer-copy-inner">
                  <div className="footer-country">
                    <a className="country"href="">
                      <img className="imgUsa" src="https://adl-foundation.adidas.com/prod/v18.2.1/assets/flags/us.svg" alt="usa"/>
                      <span>USA</span>
                    </a>
                  </div>
                  <div className="footer_links">
                    <div className="inline-link-list">
                      <div className="contentasset1"></div>
                      <ol className="copy">
                        <li className="lias">
                          <a className="aF" href="/us/help/what-is-the-privacy-policy.html" rel="nofollow"> Privacy Policy</a>
                        </li>
                        <li className="lias">
                          <span className="spanF">|</span>
                        </li>
                        <li className="lias">
                          <a className="aF" href="/us/help/what-are-the-terms-and-conditions.html" rel="nofollow">Terms and Conditions</a>
                        </li>
                        <li className="lias">
                          <span className="spanF">|</span>
                        </li>
                        <li className="lias">
                          <p className="pF">© 2019 adidas America Inc.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>

    )
  }
}

class Footer extends Component {
  render () {
    return (
      <div className="final" >
        <FooterTotal />
      </div>
    )
  }
}
export default Footer
