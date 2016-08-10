this.addEventListener('fetch', event => {
    if (event.request.url.includes('test.txt')) {
        event.respondWith(new Response('incumbent'));
    } else {
        event.respondWith(fetch(event.request));
    }
});
