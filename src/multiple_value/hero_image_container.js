import React from 'react'
import ReactDOM from 'react-dom'
import isEqual from 'lodash/isEqual'
import SSF from "ssf";

const baseOptions = {
  image_url: {
    label: "URL",
    type: 'string',
    section: 'Style',
    default: "",
    order: 0,
    display_size: 'normal'
}
}


looker.plugins.visualizations.add({
  options: baseOptions,
  create: function(element, config) {

    var css = element.innerHTML = `
    <style>
      .hero-image-vis 
      {
      height: 100%;
      width:100%;
      background-size: cover!important;
      position: relative;
      }
    </style>
  `;

  this._container = element.appendChild(document.createElement("div"));
  this._container.className = "hero-image-vis";



  },
  updateAsync: function(data, element, config, queryResponse, details, done) {

    let preloaderImg = document.createElement("img");
    preloaderImg.src = config.image_url;
    
    preloaderImg.addEventListener('load', (event) => {
      this._container.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${config.image_url}")  no-repeat center`
        preloaderImg = null;
        done()
    });
  }
})