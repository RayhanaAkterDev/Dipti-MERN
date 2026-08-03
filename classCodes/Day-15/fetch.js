// fetch('https://jsonplacdeholder.typicode.com/users').then(res => res.json (()). then (data => console.log(data)))

const sumaya = async () => {
    try {
        const res = await fetch("https://jsonplacdeholder.typicode.com/users")
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log('something went wrong')
    }
}

sumaya()