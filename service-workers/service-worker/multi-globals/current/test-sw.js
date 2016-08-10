this.addEventListener('fetch', event => {
    if (event.request.url.includes('test.txt')) {
        event.respondWith(new Response('current'));
    } else {
        event.respondWith(fetch(event.request));
    }
});
