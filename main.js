function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/m7ScMn5x0/model.json',modelReady);
    }
    function modelReady() {
        classifier.classify(gotResults);
    }
    function gotResults(error,results) {
    console.log('Got Results')
    }