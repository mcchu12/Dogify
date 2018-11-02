import * as tf from '@tensorflow/tfjs';
import { Tensor } from '@tensorflow/tfjs';

export class BreedIdentifier {
    topModel: tf.Model;
    baseModel: tf.Model;

    constructor(topModel: tf.Model, baseModel: tf.Model) {
        this.topModel = topModel;
        this.baseModel = baseModel;
    }

    /**
     * Predict a breed using transfer learning from pretrained
     * Keras model
     *
     * @param dataUrl The image to classify in base64 obtained from
     *  FileReader.readAsDataUrl
     */
    async predict(dataUrl: string) {
        const image = await this.createImage(dataUrl);
        const tensor = await this.preprocessInput(image);
        const bottleneck = await this.baseModel.predict(tensor);
        const predictions: any = await this.topModel.predict(bottleneck);
        const breed = await predictions.argMax(1).data();
        return breed;
    }


     /**
     * Create a HtmlImageElement
     *
     * @param dataUrl The image to classify in base64 obtained from
     *  FileReader.readAsDataUrl
     */
    private createImage(dataUrl: string): HTMLImageElement {
        const image = new Image();
        image.src = dataUrl;
        return image;
    }

    /**
     * Return a tensor with a shape of (1, 224, 224, 3)
     * Each are value are between -1 and 1
     *
     * @param image The image to classify
     */
    private preprocessInput (image: HTMLImageElement): Tensor {
        return tf.fromPixels(image)
            .resizeBilinear([224, 224], true)
            .toFloat()
            .div(tf.scalar(127.5))
            .sub(tf.scalar(1))
            .expandDims(0);
    }


}
