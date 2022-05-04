var SpeechRecognition = window.webkitSpeechrecognition;
var recognition = new SpeechRecognition();

camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:250,
    image_format:'jpeg',
    jpeg_quality: 90
});

function start()
{
    recognition.start(); 
}
recognition.onresult = function(event) {
   console.log(event); 
   var Content = event.results[0][0].transcript;
   console.log(Content);
   if(Content == "click my selfie")
   {
       console.log("clicking selfie ---");
       speak();

   }

}

var SpeechRecognition = window.webkitSpeechrecognition;
var recognition = new SpeechRecognition();

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() 
    { 
         take_snapshot();
          save(); 
    }, 5000);
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();   
}

function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src"'+data_uri+'">';
    });

}


