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
      {background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${config.image_url}");
      height: 50%;
      width:100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      }
    </style>
  `;

  var container = element.appendChild(document.createElement("div"));
  container.className = "hero-image-vis";



  },
  updateAsync: function(data, element, config, queryResponse, details, done) {
    done()
  }
})