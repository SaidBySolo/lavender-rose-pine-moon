window.themeColor = 'moon'
try {
    const themeColor = window.localStorage.getItem('theme-color')
    if (themeColor) {
        document.querySelector('html').className = themeColor
    } else {
        document.querySelector('html').className = 'moon'
    }
} catch (err) {
    console.warn(err)
}
