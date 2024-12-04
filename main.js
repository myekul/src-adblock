setTimeout(() => {
    removeAds()
}, 500);
setTimeout(() => {
    removeAds()
}, 5000);
function removeAds() {
    console.log('SRC ads removed!')
    document.querySelectorAll('main .lg\\:block').forEach(elem => { elem.remove() })
}