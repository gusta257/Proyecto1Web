import React, { Component } from 'react'
class Foto2 extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <div className="data1">
        <section className="wrapper">
          <div className="row containerA">
            <section className="main">
              <a className="tile-wrapper" href="/us/powerfully_versatile">
                <div className="tileWallpaper">
                  <div className="wallPaperWrapper">
                    <picture>
                      <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/Lorenza-Homepage-Teaser-Card-960x480jpg_tcm221-414846.png" alt="l"/>
                    </picture>
                  </div>
                </div>
                <div className="content">
                  <h2 className="tile">/ POWERFULLY / VERSATILE /</h2>
                  <p className="summary">A collection as flexible as you are.</p>
                  <div>
                    <div className="content_item">
                      <div className="cta">
                        <button type="button" className="gl-cta2">
                          <span className="gl-cta__text">SHOP THE COLLECTION</span>
                          <svg className="svgM2"></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section className="main">
              <a className="tile-wrapper" href="/us/powerfully_versatile">
                <div className="tileWallpaper">
                  <div className="wallPaperWrapper">
                    <picture>
                      <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/Teaser-Card-Background-Desktop-Fleece_tcm221-415210.jpg" alt="l"/>
                    </picture>
                  </div>
                </div>
                <div className="content">
                  <h2 className="tile">FALL LAYERS</h2>
                  <p className="summary">Perfect for warming up or chilling out.</p>
                  <div>
                    <div className="content_item">
                      <div className="cta">
                        <button type="button" className="gl-cta2">
                          <span className="gl-cta__text">SHOP NOW</span>
                          <svg className="svgM2"></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </section>
          </div>
        </section>
      </div>
    )
  }
}

export default Foto2
