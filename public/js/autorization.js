document.querySelector('.autorization-form').addEventListener('submit', async (e) => {
    const req = JSON.stringify({
        login: document.getElementById('input-email').value,
        password: document.getElementById('input-password').value
    })
    console.log(req)
    let response = await fetch('/autorization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: req
    })
    if (response.message === 'not found') {
        e.preventDefault()
    }
    else {
        location.href = '/main'
    }
    
})