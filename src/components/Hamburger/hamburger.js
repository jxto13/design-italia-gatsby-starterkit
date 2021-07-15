import React from 'react'
import styled from 'styled-components'

import Img1 from '../../images/jf.png'


const Burger = styled.div`
#center {
    text-align: center;
    margin-bottom: 5px;
}

#center > span {
    background-color: #06c;
    padding: 2px;
}

#container {
    display: flex;
    justify-content: space-between;
    background-color: lightyellow;
}

.box {
    height: 50px;
    width: 75px;
    border: 1px dashed red;
    background-color: springgreen;

}

.box1 { width: 100px; }
.box3 { width: 100px; }


`;


export default function hamburger() {

      
      
      return (
          <Burger>           
           
                <div id="container">
                    <div className="box box1"></div>
                    {/* <div className="box box2"></div> */}
                    <img className="box1" src={Img1} alt="sup" />
                    <div className="box box3"></div>
                </div>

        </Burger>
    )
}
