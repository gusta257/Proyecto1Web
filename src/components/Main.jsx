import React, { Component } from "react";
import Foto2 from "./Main2.jsx";
import Foto3 from "./Main3.jsx";
import Foto4 from "./Main4.jsx";
import Foto5 from "./Main5.jsx";
class Foto1 extends Component{
     constructor(props){
          super(props)
          this.state = { }
     }
     render(){   
         return(
               <div className="data0" >
                    <section className="main0" >
                         <div className="content0" >
                              <div className="mainLayer" >
                                   <div className="container0">
                                   <video autoPlay playsInline loop src="https://brand.assets.adidas.com/video/upload/video/upload/global%20brand%20publishing/Originals/Home%20of%20Classics/originals-fw19-hoc-drop3-launch-hp-mh-small-takeover-v3-d.mp4"></video>
                                   </div>
                              </div>
                              
                              <div className="poster0">
                                   <picture className="logo0">
                                        <img className="img0" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/originals-fw19-hoc-drop3-tease-glp-w-mh-medium-logo_tcm221-403307.png" alt=""/>
                                   </picture>
                                   <h1 className="title0">
                                   </h1>
                                   <p className="summary0">
                                        Iconic leather silhouettes that get better with every step. Home of Classics. Made with care, worn without.
                                   </p>
                                   <div className="ctas0">
                                        <div className="contentItem0">
                                             <div className="cta0"> 
                                             <button type="button" className="gl-cta0">
                                                       <span className="gl-cta__text0">SHOP MEN</span>
                                                       <svg className="svgM0"></svg>
                                                   </button>
                                             </div>
                                             <div className="cta0"> 
                                             <button type="button" className="gl-cta0">
                                                       <span className="gl-cta__text0">SHOP WOMEN</span>
                                                       <svg className="svgM0"></svg>
                                                   </button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </div> 
          );
     }
}

class Main extends Component{
     render(){
          const main = {
               marginTop: "80px",
               padding: "0",
               boxSizing: "border-box",
               
               display: "block",
               content: "",
               width: "100%",
               height: "2861.88px"
                   
          }



          return(
               <div className="main" style={main} >
                    <div>
                         <div>
                              <Foto1 />
                              <Foto2 />
                              <Foto3 />
                              <Foto4 />
                              <Foto5 />
                         </div>
                    </div>
                                          
               </div>
          );
     }
}
export default Main;