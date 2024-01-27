// Check if user is on a login/sign-up page
if (document.querySelector('input[type="password"]')){
    (async () => {
        const response = await chrome.runtime.sendMessage({greeting: "hello"});
        // do something with response here, not outside the function
        if(response === true){
            // account for current site exists, if login page, autofill
        }else{
            // account for current site does not exist, waiting for submission button action
        }
    })();
}