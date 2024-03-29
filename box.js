(function() {
  let template = document.createElement("template");
  template.innerHTML = `
		<style>
    /*----------------------------------
    Main
  ----------------------------------*/
  * { margin: 0; padding: 0; }
  
  .container {
    background: #64B1EE;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
  
  
  /*----------------------------------
    Cloud
  ----------------------------------*/
  .cloud,
  .cloud:before,
  .cloud:after {
    content: "";
    background: #D2EFFF ;
    display: block;	
    position: absolute;
    left: 25%;
    top: 15%;
    border-radius: 100%;
    width: 170px;
    height: 60px;
    z-index: 1;
  }
  .cloud:before {
    width: 125px;
    height: 65px;
    top: -22px;
    border-radius: 50%;
    left: 24px;
  }
  .cloud:after {
    width: 58px;
    height: 48px;
    top: -35px;
    left: 57px;
  }
  .cloud:nth-child(1) {
    -webkit-animation: cloud 18s linear  infinite;
    -o-animation: cloud 18s linear  infinite;
    animation: cloud 18s linear  infinite;
  }
  .cloud:nth-child(2) {
    left: 50%;
    top: 40%;
  
    /* transform */
    -webkit-transform: scale(1.8);
    -ms-transform: scale(1.8);
    -o-transform: scale(1.8);
    transform: scale(1.8);
  
    /* animation */
    -webkit-animation: cloud_b 26s linear infinite;
    -o-animation: cloud_b 26s linear infinite;
    animation: cloud_b 26s linear infinite;
  }
  .cloud:nth-child(3) {
    left: 62%;
    top: 25%;
  
    /* transform */
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    -o-transform: scale(1.3);
    transform: scale(1.3);
  
    /* animation */
    -webkit-animation: cloud_a 22s linear infinite;
    -o-animation: cloud_a 22s linear infinite;
    animation: cloud_a 22s linear infinite;
  }
  .cloud:nth-child(4) {
    left: 25%;
    top: 40%;
  
    /* transform */
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  
    /* animation */
    -webkit-animation: cloud_d 24s linear infinite;
    -o-animation: cloud_d 24s linear infinite;
    animation: cloud_d 24s linear infinite;
  }
  
  /*----------------------------------
    Ground
  ----------------------------------*/
  .ground {
    position: absolute;
    width:60%;
    height: 100px;
    border-radius: 100%;
    background: #5B916E;
    left: 20%;
    bottom: -60px;
    z-index: 1;
  }
  
  /*----------------------------------
    Tree
  ----------------------------------*/
  .tree {
    width: 10px;
    height: 50px;
    background: #C0B088;
    z-index: 1;
    display: block;
    position: absolute;
    bottom: 74px;
    left: 62%;
    -webkit-transform: rotate(6deg);
    -ms-transform: rotate(6deg);
    -o-transform: rotate(6deg);
    transform: rotate(6deg);
  }
  .leaves,
  .leaves:before,
  .leaves:after {
    content: "";
    background: #349638;
    border-radius: 100%;
    width: 70px;
    top: -20px;
    height: 30px;
    position: absolute;
    left: -30px;
    z-index: 1;
  }
  .leaves:before {
    width: 53px;
    top: -9px;
    left: 9px;
  }
  .leaves:after {
    width: 34px;
    top: -14px;
    left: 19px;
  }
  .tree:nth-child(2) { 
    bottom: 60px; 
    left: 80%;
    -webkit-transform: rotate(12deg) scale(0.7);
    -ms-transform: rotate(12deg) scale(0.7);
    -o-transform: rotate(12deg) scale(0.7);
    transform: rotate(12deg) scale(0.7);
  }
  .tree:nth-child(3) { 
    bottom: 80px; 
    left: 50%;
    -webkit-transform: rotate(-2deg) scale(0.5);
    -ms-transform: rotate(-2deg) scale(0.5);
    -o-transform: rotate(-2deg) scale(0.5);
    transform: rotate(-2deg) scale(0.5);
  }
  .tree:nth-child(4) { 
    bottom: 78px; 
    left: 40%;
    -webkit-transform: rotate(7deg) scale(0.6);
    -ms-transform: rotate(7deg) scale(0.6);
    -o-transform: rotate(7deg) scale(0.6);
    transform: rotate(7deg) scale(0.6);
  }
  .tree:nth-child(5) {
    bottom: 75px; 
    left: 26%;
    -webkit-transform: rotate(-12deg) scale(0.7);
    -ms-transform: rotate(-12deg) scale(0.7);
    -o-transform: rotate(-12deg) scale(0.7);
    transform: rotate(-12deg) scale(0.7);
  }
  
  
  /*----------------------------------
    Airplain
  ----------------------------------*/
  .airplane {
    position: absolute;	
    left: 40%;
    top: 10%;
    z-index: 3;
    -webkit-animation: plainfly 10s linear infinite;
    -o-animation: plainfly 10s linear infinite;
    animation: plainfly 10s linear infinite;
  }
  .airplane div {
    background: #F9FBFC;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 1;
  }
  div.head  {
    top: 21px;
    left: 83px;
    width: 60px;
    height: 25px;
    border-radius: 100%;
  }
  div.body  {
    top: 20px;
    left: 0;
    width: 130px;
    height: 26px;
    border-radius: 40% 30% 20% 50%;
    z-index: 1
  }
  div.lwing {
    top: 7px;
    left: 60px;
    height: 21px;
    width: 30px;	
    border-radius: 5px;	
    z-index: 0 ;
    -webkit-transform: skew(51deg, 0deg);
    -ms-transform: skew(51deg, 0deg);
    -o-transform: skew(51deg, 0deg);
    transform: skew(51deg, 0deg);
  }
  div.rwing {
    top: 34px;
    left: 57px;
    height: 27px;	
    width: 35px;
    border-radius: 5px;
    z-index: 1;	
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.16);
    -webkit-transform: skew(-49deg, 0deg);
    -ms-transform: skew(-49deg, 0deg);
    -o-transform: skew(-49deg, 0deg);
    transform: skew(-49deg, 0deg);
  }
  div.tale  {
    top: 15px;
    left: 10px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    -webkit-transform: skew(35deg, -9deg);
    -ms-transform: skew(35deg, -9deg);
    -o-transform: skew(35deg, -9deg);
    transform: skew(35deg, -9deg);
    background: linear-gradient(0deg,#FFF, #BBDEFF);
  }
  div.window,
  div.window:before,
  div.window:after {
    content: "";
    top: 6px;
    left: 48px;
    width: 4px; 
    height: 4px; 
    border-radius: 30%;
    background: #9AD0F5;
    border: 1px solid #5093D1;
    position: absolute;
  }
  div.window:before {
    left: -12px;
    top: -1px;
  }
  div.window:after {
    left: 10px;
    top: -1px;
  }
  div.window:nth-child(1){
    left:81px
  }
  div.window:nth-child(2){
    left:115px
  }
  div.window:nth-child(2):after {
    border-top-right-radius: 8px;
    width: 6px;
  }
  
  
  /*----------------------------------
    Animation
  ----------------------------------*/
  @-webkit-keyframes plainfly { 
    0% {
      left: -10%; 
      -webkit-transform: scale(.4);
      -ms-transform: scale(.4);
      -o-transform: scale(.4);
      transform: scale(.4);
    } 
    50% {
      left: 110%; 
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    } 
    51% {
      -webkit-transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    100% {
      left: -10%; 
      -webkit-transform: scale(1.4) rotateY(180deg);
      -ms-transform: scale(1.4) rotateY(180deg);
      -o-transform: scale(1.4) rotateY(180deg);
      transform: scale(1.4) rotateY(180deg);
    }
  }
  @-webkit-keyframes cloud   { 
    0% { left: 15%; }
    50% { left: 63%; } 
    100% { left: 15%; }
  }
  @-webkit-keyframes cloud_a { 
    0% { left: 62%; }
    50% { left: 90%; } 
    100% { left: 62%; }
  }
  @-webkit-keyframes cloud_b { 
    0% { left: 50%; }
    50% { left: 23%; } 
    100% { left: 50%; }
  }
  @-webkit-keyframes cloud_c { 
    0% { left: 37%; }
    50% { left: 47%; } 
    100% { left: 37%; }
  }
  @-webkit-keyframes cloud_d { 
    0% { left: 25%; }
    50% { left: 65%; } 
    100% { left: 25%; }
  }
    
    </style> 
    <div class="container">

    <!-- cloud -->
    <cloud class="cloud"></cloud>
    <cloud class="cloud"></cloud>
    <cloud class="cloud"></cloud>
    <cloud class="cloud"></cloud>
    <!-- /cloud -->
  
  
    <!-- airplain -->
    <airplane class="airplane">
      <div class="head"></div>
      <div class="body">
        <div class="window"></div>
        <div class="window"></div>
        <div class="window"></div>
      </div>
      <div class="lwing"></div>
      <div class="rwing"></div>
      <div class="tale"></div>
    </airplane>
    <!-- /airplain -->
  
  
    <!-- ground -->
    <ground class="ground">
      <tree class="tree">
        <div class="leaves"></div>
      </tree>
      <tree class="tree">
        <div class="leaves"></div>
      </tree>
      <tree class="tree">
        <div class="leaves"></div>
      </tree>
      <tree class="tree">
        <div class="leaves"></div>
      </tree>
      <tree class="tree">
        <div class="leaves"></div>
      </tree>
    </ground>
    <!-- /ground -->
  
  </div>
   
  
<script>
</script>

 

  
	`;

  class Box extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      this.addEventListener("click", event => {
        var event = new Event("onClick");
        this.dispatchEvent(event);
      });
      this._props = {};
    }

    onCustomWidgetBeforeUpdate(changedProperties) {
      this._props = { ...this._props, ...changedProperties };
    }

    onCustomWidgetAfterUpdate(changedProperties) {
      if ("color" in changedProperties) {
        this.style["background-color"] = changedProperties["color"];
      }

      if ("opacity" in changedProperties) {
        this.style["opacity"] = changedProperties["opacity"];
      }
    }
  }

  customElements.define("com-sample-box", Box);
})();
