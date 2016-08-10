this.addEventListener('fetch', event => {
    if (event.request.url.includes('test.txt')) {
        event.respondWith(new Response('relevant'));
    } else {
        event.respondWith(fetch(event.request));
    }
});
