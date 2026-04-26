if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('CASHMONIE PWA: Active'))
            .catch(err => console.log('PWA Registration Failed:', err));
    });
}
