const style = document.querySelector('head').querySelector('link')

if (!(sessionStorage.getItem('dark'))) {
    sessionStorage.setItem('dark', "false")
} else if (sessionStorage.getItem('dark') == "true") {
    style.setAttribute('href', './static/css/dark.css')
}

document.getElementById('themeBtn').addEventListener('click', e => {
        toggleDark()
})

function toggleDark() {
    let darkMode = sessionStorage.getItem('dark')
    if (darkMode == "false") {
        style.setAttribute('href', './static/css/dark.css');
        sessionStorage.setItem('dark', "true")
    } else if (darkMode == "true") {
        style.setAttribute('href', './static/css/styles.css');
        sessionStorage.setItem('dark', "false")
    }
} 
