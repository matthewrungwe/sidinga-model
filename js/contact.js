$(document).ready(() => {
    const button = $("button");
    const responseMessage = $(".response-message");
    
    responseMessage.hide();

    const buttonClicked = (isButtonClicked) => {
        if(isButtonClicked === true){
            button.css("font-size", "1em");
            responseMessage.show();
        } 
    }

    button.on('click',(event) => {
        event.preventDefault();
        let isClicked = true;

        buttonClicked(isClicked);
    });

    
});