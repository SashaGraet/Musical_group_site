reg_user.addEventListener('submit', async (e) => {
    e.preventDefault()
    let new_user = {};
    for (let field of document.querySelectorAll('#reg_user input')) {
        new_user[field.id] = field.value
    }
    console.log(new_user)
    let response = await fetch('/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(new_user)
    })
    response = await response.json()
    console.log(response)
    if (response.message === 'ok') {
        console.log(1)
        location.href = '/main'
    }
})