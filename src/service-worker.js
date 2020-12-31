self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
    debug: true
});
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

let click_open_url;

self.addEventListener("push", function (event){
    console.log(event.data)
    let push_message = event.data.text();
    click_open_url = "https://vuemeetup.com";
    const options = {
        body: push_message,
        icon: "/img/logo.82b9c7a5.png",
        image: "./3dTY.gif",
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample"
    };
    event.waitUntil(
      self.registration.showNotification("my notification", options)
    );

})
workbox.routing.registerRoute(
    new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
    workbox.strategies.cacheFirst({
        cacheName: "googleapis",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ],
        method: "GET",
        cacheableResponse: { statuses: [0, 200]}
    })
);


self.addEventListener("notificationclick", function (event){
    const clickedNotification = event.notification;
    clickedNotification.close();
    if(click_open_url){
        const promiseChain = clients.openWindow(click_open_url);
        event.waitUntil(promiseChain);
    }
})

self.addEventListener("onclick", function (event){
    const clickedNotification = event.notification;
    clickedNotification.close();
    if(click_open_url){
        const promiseChain = clients.openWindow(click_open_url);
        event.waitUntil(promiseChain);
    }
})