self.addEventListener('fetch', function(e){
    e.respondWith(
        new Response("<h1 class='a-winner-is-me'>Hello Service Worker</h1>", {
            headers: { "Content-Type": "text/html"}
        })
    );
})