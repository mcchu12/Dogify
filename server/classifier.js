global.fetch = require('node-fetch');

const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const { Image, createCanvas } = require('canvas');

const BaseUrl = 'http://localhost:3000/';

module.exports = class BreedClassifier {

  constructor() {
    this.loadModel();
  }

  async loadModel() {
    const model = await tf.loadModel(BaseUrl + 'model/model.json');
    const base = await tf.loadModel(BaseUrl + 'baseModel/model.json');
    this.model = model;
    console.log('Load model done!');
    this.baseModel = base;
    console.log('Load base done!');
    return {model, base};
  }

  async createImage(dataUrl) {
    const canvas = createCanvas(224, 224);
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.onload = () => ctx.drawImage(image, 0, 0, 224, 224);
    image.onerror = () => { console.log(err); }
    image.src = dataUrl;
    console.log(canvas);
    return canvas;
  }
  
  async preprocessInput (image) {
    return tf.fromPixels(image)
      .resizeBilinear([224, 224], true)
      .toFloat()
      .div(tf.scalar(127.5))
      .sub(tf.scalar(1))
      .expandDims(0);
  }

  predict(dataUrl) {
    this.createImage(dataUrl)
      .then(image => {
        this.preprocessInput(image).then(
          tensor => {
            this.baseModel.predict(tensor).then(
              bottleneck => {
                this.model.predict(bottleneck).then(
                  predictions => {
                    return predictions.argMax(1).data();
                  }
                )
              }
            )
          }
        )
      });    
  }

}
