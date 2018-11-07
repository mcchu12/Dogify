import * as tf from '@tensorflow/tfjs';

// For client side prediction
export class BreedIdentifier {
    // private dogDetector: tf.Model;
    private model: tf.Model;
    private baseModel: tf.Model;

    constructor(
        // dogDetector: tf.Model,
        model: tf.Model,
        baseModel?: tf.Model
        ) {
        // this.dogDetector = dogDetector;
        this.model = model;
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
        // if (true) {
            const bottleneck = await this.getBottleneck(tensor);
            const predictions: any = await this.model.predict(bottleneck);
            // const breed = await predictions.argMax(1).data();
            return 0;
        // }
        // return -1;
    }


     /**
     * Create a HtmlImageElement
     *
     * @param dataUrl The image to classify in base64 obtained from
     *  FileReader.readAsDataUrl
     */
    private createImage(dataUrl: string) {
        const image = new Image();
        image.src = dataUrl;
        console.log(image);
        return image;
    }

    /**
     * Return a tensor with a shape of (1, 224, 224, 3)
     * Each value are normalized between -1 and 1
     *
     * @param image The image to classify
     */
    private preprocessInput (image: HTMLImageElement) {
        return tf.fromPixels(image)
            .resizeBilinear([224, 224], true)
            .toFloat()
            .div(tf.scalar(127.5))
            .sub(tf.scalar(1))
            .expandDims(0);
    }

    // private async detectDog(tensor: tf.Tensor) {
    //     const prediction: any = await this.dogDetector.predict(tensor);
    //     const result = await prediction.argMax(1).data();
    //     return ((result <= 268) && (result >= 151));
    // }

    /**
     * Obtaine bottleneck from base Model if using transfer learning
     * Ow return the original tensor
     *
     * @param tensor The preprocessed image
     */
    private getBottleneck(tensor: tf.Tensor) {
        if (this.baseModel) {
            return this.baseModel.predict(tensor);
        }
        return tensor;
    }


}
