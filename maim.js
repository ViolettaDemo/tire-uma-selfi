var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var content;
function iniciar(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript.toLowerCase();
    if(content =="selfie") { 
    
        console.log("selfie");
        speak(); 
    }
}
function speak(){ var synth = window.speechSynthesis;
    speak_data = "Tirando sua selfie em 5 segundos";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
       Webcam.attach(camera);
        setTimeout(function() { take_selfie();
            }, 5000); }

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
     jpeg_quality:90
});
function take_selfie() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
 });
 }