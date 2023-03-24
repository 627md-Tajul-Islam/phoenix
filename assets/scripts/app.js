if("serviceWorker"in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").then(res=>console.log("service worker registered")).catch(err=>console.log("service worker not registered",err));});}


    $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});