const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("./service-worker.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

let registration = await registerServiceWorker().then(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message && message.message) {
            navigator.serviceWorker.controller.postMessage(message);
        }
    });
});
console.log(registration)


