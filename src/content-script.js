// Check if user is on a login/sign-up page
if (document.querySelector('input[type="password"]')){
    (async () => {

        await chrome.runtime.sendMessage({message: 'Hello from content script!'});

    })();
}

/*
function getCredentials(e) {
    if (e.preventDefault) e.preventDefault();

    const username = e.querySelector(`input[type="text"]`).value;

    console.log(username);

    // You must return false to prevent the default form behavior
    return false;
}


let accountForm = document.querySelector('form')
if (accountForm.attachEvent){
    accountForm.attachEvent("submit", getCredentials)
}else{
    accountForm.addEventListener("submit", getCredentials)
}


 */