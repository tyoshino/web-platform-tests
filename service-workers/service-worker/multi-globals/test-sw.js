this.addEventListener('fetch', event => {
    if (event.request.url.includes('test.txt')) {
        event.respondWith(new Response('entry'));
    } else {
        event.respondWith(fetch(event.request));
    }
});
