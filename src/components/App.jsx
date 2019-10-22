import React, { Component } from 'react'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    const headerFixed = {
      position: 'fixed',
      fontSize: '16px',
      left: '0',
      width: '100%',
      zIndex: '63',
      top: '0',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: '400',
      color: '#000',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      transition: 'transform .5s ease .2s',
      willChange: 'transform'
    }
    const divHeader = {
      display: 'block',
      fontSize: '16px',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: '400',
      color: '#000',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box'
    }
    const vacio = {
      display: 'block',
      fontSize: '16px',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: '400',
      color: '#000',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box'
    }
    const glassHeaderTop = {
      fontFamily: 'Helvetica',
      fontWeight: '400',
      fontSize: '11px',
      display: 'block',
      background: 'linear-gradient(90deg,#000 30%,transparent 50%),linear-gradient(180deg,#000 0,#363738)',
      fontStyle: 'normal',
      color: '#000',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box'

    }
    const glassHeaderBottom = {
      height: '48px',
      paddingTop: '0',
      display: 'flex',
      backgroundColor: '#000',
      color: '#000'
    }
    const inner = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      height: '32px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      fontStyle: 'normal',
      color: '#000',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      fontFamily: 'Helvetica',
      fontWeight: '400',
      fontSize: '11px'
    }

    const menuSpacer = {
      height: '12px',
      width: '1px',
      position: 'relative',
      top: '-1px',
      backgroundColor: '#767677'
    }
    const menuSpacerLog = {
      height: '12px',
      width: '1px',
      position: 'relative',
      top: '-1px',
      backgroundColor: '#767677',
      display: 'none'
    }
    const paraA = {
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      textTransform: 'uppercase',
      textDecoration: 'none',
      cursor: 'pointer',
      color: '#ebedee',
      fontStyle: 'normal',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      fontFamily: 'Helvetica',
      fontWeight: '400',
      fontSize: '11px',
      borderRadius: '0',
      boxShadow: 'none',
      outline: 'none',
      touchAction: 'manipulation'

    }
    const paraA2 = {
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      textTransform: 'uppercase',
      textDecoration: 'none',
      cursor: 'pointer',
      color: 'white',
      fontStyle: 'normal',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      fontSize: '11px',
      borderRadius: '0',
      boxShadow: 'none',
      outline: 'none',
      touchAction: 'manipulation'

    }
    const paraA3 = {
      position: 'relative',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      fontFamily: 'AdineuePRO,Helvetica,Arial,sans-serif',
      fontWeight: '400',
      fontSize: '15px',
      lineHeight: '45px',
      margin: '0 3px',
      color: '#fff',
      textDecoration: 'none'
    }

    const em = {
      fontWeight: '700',
      display: 'inline-block',
      color: '#fff',
      fontStyle: 'normal',
      boxSizing: 'border-box',
      fontSize: '11px'

    }
    const inner3 = {
      boxSizing: 'border-box',
      display: 'flex',
      height: '100%',
      maxWidth: '1220px',
      margin: '0 auto',
      padding: '0 16px',
      width: '100%'

    }
    const aLogo = {
      width: '70px',
      top: '-15px',
      position: 'relative',
      transitionTimingFunction: 'cubic-bezier(.3,0,.45,1)',
      marginRight: '20px',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundImage: 'url(https://logodownload.org/wp-content/uploads/2014/07/Adidas-Logo-6.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0',
      backgroundSize: 'contain'
    }
    const adidasSpan = {
      border: '0',
      clip: 'rect(0,0,0,0)',
      height: '1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px'
    }
    const mainMenu = {
      flex: '1',
      boxSizing: 'border-box'
    }
    const glassNavigation = {

      position: 'relative',
      display: 'inline-block',
      height: '45px',
      marginTop: '3px',
      backgroundColor: ' #000',
      color: '#fff',
      userSelect: 'none'
    }
    const menuSpacer2 = {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '1px',
      height: '24px',
      margin: '12px 3px',
      backgroundColor: 'hsla(0,0%,100%,.25)'
    }
    const rightMenu = {
      display: 'flex',
      justifyContent: 'flex-end',
      minWidth: '96px'
    }
    const glassSearch = {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'block'
    }
    const searchInput = {
      textRendering: 'optimizeLegibility',
      color: '#000',
      boxSizing: 'border-box',
      height: '48px',
      padding: '8px 30px',
      position: 'relative',
      width: '140px',
      display: 'block'
    }
    const searchIcon = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '32px',
      width: '30px',
      position: 'absolute',
      left: '0',
      top: '8px',
      textAlign: 'center',
      color: '#000',
      backgroundColor: '#fff',
      cursor: 'pointer'
    }
    const svg = {
      display: 'inline-block',
      height: '24px',
      verticalAlign: 'text-top',
      width: '24px',
      backgroundImage: 'url(https://image.flaticon.com/icons/png/512/55/55369.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0',
      backgroundSize: 'contain'
    }
    const svg1 = {
      marginLeft: '5px',
      display: 'inline-block',
      height: '24px',
      verticalAlign: 'text-top',
      width: '24px',
      backgroundImage: 'url(https://www.athenaaspire.com/wp-content/uploads/2018/01/login-w-icon.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0',
      backgroundSize: 'contain'
    }
    const form = {
      width: '100%'
    }
    const input1 = {

      boxSizing: 'border-box',
      boxShadow: 'none',
      touchAction: 'manipulation',
      margin: '0',
      fontFamily: ' Helvetica,Arial,sans-serif',
      fontWeight: '400',
      lineHeight: '32px',
      backgroundColor: ' #fff',
      border: '0',
      height: '32px',
      outline: 'none',
      padding: '0',
      width: '100%',
      borderRadius: '0',
      color: '#000',
      fontSize: '13px'
    }
    const btnClear = {
      backgroundColor: '#fff',
      display: 'block',
      height: '32px',
      position: 'absolute',
      right: '0',
      top: '8px',
      width: '30px'
    }
    const input2 = {
      margin: '0',
      borderRadius: '0',
      boxSizing: 'border-box',
      boxShadow: 'none',
      outline: 'none'
    }
    const cart = {
      width: '48px',
      height: ' 48px',
      display: 'block',
      fontSize: '20px'
    }
    const cartA = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const svgCart = {
      display: 'inline-block',
      height: '50px',
      verticalAlign: 'text-top',
      width: '24px',
      backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVXNyXavhQa2jHly7onv_mC5g0n_WLPk_gZhUtsX94shyBxBddA)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0',
      backgroundSize: 'contain'

    }

    return (
      <div className="header" style={headerFixed}>
        <div className="headerDesktop" style={divHeader}>
          <div style={vacio}>
            <div className="glassHeaderTop" style={glassHeaderTop}>
              <div className="inner" style={inner}>
                <a href="https://www.adidas.com/us/help" style={paraA}>HELP</a>
                <div className="menu-spacer" style={menuSpacer} ></div>
                <a href="https://www.adidas.com/us/order-tracker" style={paraA} >ORDER TRACKER AND RETURNS</a>
                <div className="menu-spacer" style={menuSpacer}></div>
                <em className="em" style={em} tabIndex="1">
                  <a href="" style={paraA2}>NEWSLETTER SIGNUP</a>
                </em>
                <div className="menu-spacer-log" style={menuSpacerLog}></div>
                <div className="menu-spacer" style={menuSpacer}></div>
                <a href="" style={paraA}>CREATORS CLUB</a>
                <a href="" style={paraA}>LOG IN
                  <svg style={svg1}></svg>
                </a>
                <div className="menu-spacer-log" style= {menuSpacerLog} ></div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="glassHeaderBottom" style={glassHeaderBottom}>
            <div className="inner3" style={inner3}>
              <a href="" className="aLogo" style={aLogo}>
                <span style={adidasSpan}>adidas</span>
              </a>
              <div className="mainMenu" style={mainMenu}>
                <div className="glassNavigation" style={glassNavigation}>
                  <a href="" style={paraA3}>Men</a>
                </div>
                <div className="glassNavigation"style={glassNavigation}>
                  <a href=""style={paraA3}>Women</a>
                </div>
                <div className="glassNavigation"style={glassNavigation}>
                  <a href=""style={paraA3}>Kids</a>
                </div>
                <div className="menu-spacer2" style={menuSpacer2}></div>
                <div className="glassNavigation"style={glassNavigation}>
                  <a href=""style={paraA3}>Sports</a>
                </div>
                <div className="glassNavigation"style={glassNavigation}>
                  <a href=""style={paraA3}>Brands</a>
                </div>
                <div className="menu-spacer" style={menuSpacer2}></div>
                <div className="glassNavigation" style={glassNavigation}>
                  <a href=""style={paraA3}>Release Dates</a>
                </div>
              </div>
              <div className="rightMenu" style={rightMenu}>
                <div className="glassSearch" style={glassSearch}>
                  <div className="searchInput" style={searchInput}>
                    <div className="searchIcon" style={searchIcon}>
                      <svg className="svg" style = {svg}> </svg>
                    </div>
                    <form action="" style={form}>
                      <input name="q" className="input1" style={input1}placeholder="Search"/>
                      <input name="sitePath" type="hidden" style={input2}/>
                    </form>
                    <span style={btnClear}></span>
                  </div>
                </div>
                <div className="cart" style={cart}>
                  <a href="" style={cartA}>
                    <svg style={svgCart}></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
class HeaderTotal extends Component {
  render () {
    return (
      <div className="topbar" >
        <Header/>
        <Main/>
        <Footer/>

      </div>
    )
  }
}
class App extends Component {
  render () {
    const app = {
      boxSizing: 'border-box',
      fontSize: '16px',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: '400',
      color: '#000',
      textRendering: 'optimizeLegibility'
    }
    return (
      <div className="app" style={app}>
        <HeaderTotal />
      </div>
    )
  }
}
export default App
