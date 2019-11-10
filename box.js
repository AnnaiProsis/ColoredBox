(function() {
  let template = document.createElement("template");
  template.innerHTML = `

  <div id="gauge3" class="gauge-container three">
  <span class="label">.three</span>
  </div>

		<style>
		:host {
			border-radius: 25px;
			border-width: 4px;
			border-color: black;
			border-style: solid;
			display: block;
    } 

    body {
      background-color: rgba(0,0,0,0.8);
      color: #999;
      font-family: Hevletica, sans-serif;
    }
    
    .info {
      clear: both;
      padding: 10px;
      font-size: 0.9em;
    }
    a.link {
      color: rgb(47, 227, 255);
      text-decoration: none;
    }
    
    .warn {
      font-size: 0.8em;
      background-color: darken(orange, 15%);
      color: #fff;
      padding: 10px;
    }
    
    /* ------ Default Style ---------- */
    .gauge-container {
      width: 150px;
      height: 150px;
      display: block;
      float: left;
      padding: 10px;
      background-color: #222;
      margin: 7px;
      border-radius: 3px;
      position: relative;
    }
    .gauge-container > .label {
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
      background: rgba(0,0,0,0.5);
      font-family: monospace;
      font-size: 0.8em;
      padding: 5px 10px;
    }
    .gauge-container > .gauge > .dial {
      stroke: #334455;
      stroke-width: 2;
      fill: rgba(0,0,0,0);
    }
    .gauge-container > .gauge > .value {
      stroke: rgb(47, 227, 255);
      stroke-width: 2;
      fill: rgba(0,0,0,0);
    }
    .gauge-container > .gauge > .value-text {
      fill: rgb(47, 227, 255);
      font-family: sans-serif;
      font-weight: bold;
      font-size: 0.8em;
    }
    
    
    
    
    /* ------- Alternate Style ------- */
    .wrapper {
      height: 100px;
      float: left;
      margin: 7px;
      overflow: hidden;
    }
    .wrapper > .gauge-container {
      margin: 0;
    }
    .gauge-container.two {
    }
    .gauge-container.two > .gauge > .dial {
      stroke: #334455;
      stroke-width: 10;
    }
    .gauge-container.two > .gauge > .value {
      stroke: orange;
      stroke-dasharray: none;
      stroke-width: 13;
    }
    .gauge-container.two > .gauge > .value-text {
      fill: #ccc;
      font-weight: 100;
      font-size: 1em;
    }
    
    
    
    /* ------- Alternate Style ------- */
    .gauge-container.three {
    }
    .gauge-container.three > .gauge > .dial {
      stroke: #334455;
      stroke-width: 2;
    }
    .gauge-container.three > .gauge > .value {
      stroke: #C9DE3C;
      stroke-width: 5;
    }
    .gauge-container.three > .gauge > .value-text {
      fill: #C9DE3C;
    } 
    
    
    
    /* ----- Alternate Style ----- */
    .gauge-container.four > .gauge > .dial {
      stroke: #334455;
      stroke-width: 10;
    }
    .gauge-container.four > .gauge > .value {
      stroke: #F32450;
      stroke-dasharray: none;
      stroke-width: 10;
    }
    .gauge-container.four > .gauge > .value-text {
      fill: #F32450;
      transform: translate3d(24%, 23%, 0);
      display: inline-block;
    }
    .gauge-container.four > .value-text {
      color: #F32450;
      font-weight: 100;
      position: absolute;
      bottom: 18%;
      right: 10%;
      display: inline-block;
    } 
    
    
    
    /* ----- Alternate Style ----- */
    .gauge-container.five > .gauge > .dial {
      stroke: #334455;
      stroke-width: 5;
    }
    .gauge-container.five > .gauge > .value {
      stroke: #F8774B;
      stroke-dasharray: 25 1;
      stroke-width: 5;
    }
    .gauge-container.five > .gauge > .value-text {
      fill: #F8774B;
      font-size: 0.7em;
    }
    
    
    
    /* ----- Alternate Style ----- */
      .gauge-container.six > .gauge > .dial {
        stroke: #334455;
        fill: "#334455";
        stroke-width: 20;
      }
      .gauge-container.six > .gauge > .value {
        stroke: #FF6DAF;
        stroke-width: 20;
      }
      .gauge-container.six > .gauge > .value-text {
        fill: #FF6DAF;
        font-size: 0.7em;
      }
    
    
    .gauge-container.seven > .gauge > .dial {
      stroke: transparent;
      stroke-width: 5;
      transform: scale(0.9,0.9) translate3d(5.5px, 5.5px, 0);
      fill: rgba(148, 112, 57, 0.42);
    }
    .gauge-container.seven > .gauge > .value {
      stroke: #F8774B;
      stroke-dasharray: none;
      stroke-width: 5;
    }
    
    </style> 
    
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
