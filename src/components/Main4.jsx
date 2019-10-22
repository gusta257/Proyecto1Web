import React, { Component } from 'react'
class Foto4 extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <div className="data4" >
        <section className="main4" >
          <div className="content4" >
            <div className="mainLayer" >
              <div className="container4">
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/adidas_SBB_IDOG_DOTCOM_Masthead_Desktop_1920x800px_tcm221-411168.jpg" alt=""/>
              </div>
            </div>

            <div className="poster4">
              <h1 className="title4">
                                    Keep Girls in Sport: A Digital Coaching Curriculum
              </h1>
              <p className="summary4">
                                    Be the reason she stays in the game. adidas x Up2Us Sports partner to provide the tools to coach girls.
              </p>
              <div className="ctas4">
                <div className="contentItem4">
                  <div className="cta4">
                    <button type="button" className="gl-cta4">
                      <span className="gl-cta__text4">LEARN MORE</span>
                      <svg className="svgM4"></svg>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Foto4
