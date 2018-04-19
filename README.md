# antClassifierServer
Ant Classifier Web Server

Installation instructions: 
    1. First, you must ensure that you have node.js and npm installed on your computer.
    Follow the instructions at https://www.npmjs.com/get-npm. node.js is the javascript server 
    software needed to run the server, and npm is an installer toolkit used to access 
    various API's and libraries required for node.js to work correctly.
    2. After you have node.js installed, you have two options. If you have git installed 
    on your computer, open the command prompt and enter 
    "git clone https://github.com/ahulsem/bugIdentifierServer.git" into the 
    desired directory. This instruction will download and unpack the github repository.
    Alternatively, you can go to the github repository at 
    "https://github.com/ahulsem/bugIdentifierServer.git" and click the Clone or Download
    button. Then download the ZIP file and extract it into the desired directory. 
    3. From this point, navigate to the root directory, for example 
    "C:\Program Files\bugIdentifierServer\", and run the command, "node app.js". 
    Your console should display a message indicating the the server is running on port 8080.

Tests: 
    At this point, you can access a simplified version of the ant classifier webpage. 
    The page displayed doesn't actually classify any images that are sent to it. The functionality
    of the server is simply to receive images, store them, save metadata for the image, and, if
    possible, to convert the image. 
    In order to test this functionality, you might want to try sending it different types of 
    image files through the browser. You can access the page through your browser at 
    "localhost:8080". Sending it a .jpeg, .png, .tif, or .svg will convert the jpeg using the sharp 
    library. If the image file is not in one of these formats, the server will tentatively try to 
    convert it by outsourcing it to an online API called online-convert. This will work most of the 
    time, but may return an error message indicating that the image type is not supported.

Online-Convert:
    Online convert uses an API key to verify that the user is signed up to online-convert.
    If you would like to sign up for your own API key, you can register for one at
    https://www.online-convert.com/signup/free. Once you're signed up, you can go to the 
    website dashboard and find your API key. To begin using it, open the app.js file and go to 
    line 17. Replace the key inside the quotations marks with your own key and that should 
    connect the server to your own account. From your own account, you can upgrade services
    to do more conversions per day.

Built With:
    Node.js
    NPM

Contributing:
    Aaron Hulseman
    David Arnold

Authors:
    Aaron Hulseman
    
License:
    Licensed under the Apache License version 2.0. For further information, see LICENSE.md.