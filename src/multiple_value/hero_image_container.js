import React from 'react'
import ReactDOM from 'react-dom'
import isEqual from 'lodash/isEqual'
import heroImage from './hero_image'
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
let currentOptions = {}
let currentConfig = {}

looker.plugins.visualizations.add({
  id: "hero_image",
  label: "hero_image",
  options: baseOptions,
  create: function(element, config) {
    this.chart = ReactDOM.render(
      <heroImage
        config={{}}
        data={[]}
      />,
      element
    );

  },
  updateAsync: function(data, element, config, queryResponse, details, done) {
    this.clearErrors();

    const measures = [].concat(
      queryResponse.fields.dimensions,
      queryResponse.fields.measures,
      queryResponse.fields.table_calculations
    )

    const options = Object.assign({}, baseOptions)
    
  
    if (
      !isEqual(currentOptions, options) ||
      !isEqual(currentConfig, config)
    ) {
      this.trigger('registerOptions', options)
      currentOptions = Object.assign({}, options)
      currentConfig = Object.assign({}, config)
    }
  

    this.chart = ReactDOM.render(
      <heroImage
        config={config}
      />,
      element
    );
    done()
  }
});
