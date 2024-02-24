  
    // Sample artwork data
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    window.addEventListener('backler', function () {
        document.body.classList.add('backler');
    });

    const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


AOS.init();

