# Dogify

I completed a Deep Leaning Nanodegree from Udacity. I wanted to using this new knowledge to create something that can be used in a real world application. Dogify is the result of this. Using pretrained model, the application allows users to identify dog breeds with an image.

## Overview

#### Demo: https://dogifi.herokuapp.com/home

## Features

- **Dog breed classification:** Using pretrain model from Imagenet, I extracted the top layer and trained it with a dateset of dog images. The newly trained model can correctly predict breeds around 80%.

## Tech Used / Dependencies

- Frontend: This is app is created with Angular, along with other libaries:

  - Font Awesome

- Backend: Built with Python, Flask, Keras

- Fonts: Libre Baskerville from [Google Fonts](https://fonts.google.com/)

### In the backend directory, run:

`python run.py`

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
