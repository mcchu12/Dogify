import * as tf from '@tensorflow/tfjs';

export class BreedIdentifier {
    topModel: tf.Model;
    // baseModel: tf.Model;

    constructor(topModel: tf.Model, mobinet: tf.Model) {
        this.topModel = topModel;
        // this.baseModel = mobinet;
    }

    async predict(image: ImageData) {
        console.log(image);
        const tensor = await this.preprocessInput(image);
        // const bottleneck = await this.baseModel.predict(tensor);
        const predictions: any = await this.topModel.predict(tensor);
        const breed = await predictions.argMax(1).data();
        return breed;
    }

    preprocessInput (image: ImageData) {
        return tf.fromPixels(image)
            .resizeBilinear([224, 224], true)
            .toFloat()
            .div(tf.scalar(127.5))
            .sub(tf.scalar(1))
            .expandDims(0);
    }
}
