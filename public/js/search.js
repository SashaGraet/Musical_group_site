async function getData() {
    const filters = {}
    for (let field of document.querySelectorAll(':checked')) {
        if (!filters[field.closest('ul').id]) {
            filters[field.closest('ul').id] = [field.value]
        }
        else {
            filters[field.closest('ul').id].push(field.value)
        }
    }
    console.log(filters)
    let res = await fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(filters)
    })
    res = await res.json()
    if (res.message === 'ok') {
        console.log(1)
        location.href = '/search'
    } 
}

document.addEventListener('change', (e) => {
    if (e.target.closest('#filters')) {
        getData()
    }
})