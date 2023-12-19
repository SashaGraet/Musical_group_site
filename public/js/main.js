document.getElementById('logout').addEventListener('click', async (e) => {
    console.log(1)
    e.preventDefault()
    let response = await fetch('/main/logout')
    if (response.ok) {
        location.href = '/main'
    }
})