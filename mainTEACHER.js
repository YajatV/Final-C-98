var SpeechRecognition = window.webkitSpeechRecognition;
/* this is webspeech API used to recognize what we are speaking and convert it into text.
We are storing this API into a variable*/

  
var recognition = new SpeechRecognition();
//new keyword isused to create web speech API

function start()
{
    document.getElementById("textbox").innerHTML = "";
    /**Whenever the start button is pressed we want the textarea to be empty. For
    that we are updating the textarea with an empty value.
     */
    recognition.start();
/**start() is a predefined function of webspeechAPI & will convert your speech to text */

} 

 //The same way we will call the onresult function:

recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;
//[0]:result, [0]:transcript
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
        /*The purpose of calling the speak() function inside the onresult function is to automate the process of speaking the text as soon as we
give the voice command. If we had called the speak() function on a click of a button then we would have to click the button manually to
trigger the speak() function */
      }
}

// API will be used to convert text to speech.
function speak(){
    var synth = window.speechSynthesis;
    //speechSynthesi : webAPI to convert text to speech

    speak_data = "Taking you Selfie in 5 seconds";
    //get the text value from this textarea and store it inside a variable

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    // convert this text to speech.
    /*utterThis - is a variable in which we will store the converted text to speech.
● SpeechSynthesisUtterance - is the function of an API that will convert text to speech.
● We are using a new keyword because, for every next text, we want to convert that text to speech.
● speak_data - contains the text which is taken from the textarea (in step 3). */

    
// we have converted text to speech and stored it inside a variable, so we will pass this variable to the speak() function of the API.

synth.speak(utterThis);
/*synth - because in this we have stored the API in point 2
● speak() - speak() function is a predefined function of the API.
● utterThis - has the converted value of text to speech that we want to the system to speak
The functionality of this speak() function is to trigger the system to speak whatever
is passed inside this speak function */

/*The flow of the website till now:
When you press the start button:
● It will ask for permission to access the microphone.
● Then we speak something and it will convert the speech to text and display on the
textarea
● Then the speak() function is called, and it will take the text value from textarea,
convert it into speech, and trigger the system to speak it out.*/


    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

 // we will get the HTML element in which we want to show the live view of the webcam and store it inside a variable.

camera = document.getElementById("camera");
//First, we will set the properties for the webcam to be displayed.
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
/**Webcam.set - is a function of webcam.js to see the properties for the live view of the webcam.
○ width - set the width you want for the webcam view, you can give any value as per your choice. I have given 360 (means 360px).
○ height - set the height you want for the webcam view, you can give any value as per your choice. I have given 250 (means 250px).
○ image_format - I have given png, you can also give other image formats like “jpeg”.
○ png_quality - means the quality of the live view of the webcam. 
If you give other image format like “jpeg” then give jpeg_quality : 90 instead of png_quality */

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}