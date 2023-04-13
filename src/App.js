// import React, { useState } from 'react'
// import Main from './Main'

// const App = () => {

//     const [variable, funct] = useState(0)

//     return (
//         <div>
//             <h1 onClick={() =>
//                 funct(variable + 1)}>
//                 App {variable}
//             </h1>
//             <Main random={variable} />
//         </div>
//     )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//     const [show, setShow] = useState(true)

//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>
//                 {show ? "Hide" : "Display"}
//             </button>
//             {
//                 show
//                     ? <div>This is private info</div>
//                     : <div></div>
//             }

//         </div>
//     )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//     const [tabs, setTabs] = useState("red")

//     return (
//         <div>
//             <div>
//                 <button onClick={() => setTabs("red")}>Red</button>
//                 <button onClick={() => setTabs("green")}>Green</button>
//                 <button onClick={() => setTabs("blue")}>Blue</button>
//             </div>
//             <div>
//                 {
//                     tabs === "red"
//                         ? <div style={{ height: "90vh", backgroundColor: tabs }}></div>
//                         : tabs === "blue"
//                             ? <div style={{ height: "90vh", backgroundColor: tabs }}></div>
//                             : <div style={{ height: "90vh", backgroundColor: tabs }}></div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <div>
//                 {
//                     count < 100
//                         ? <button onClick={() => setCount(count + 10)}>Increment</button>
//                         : <button>Increment</button>
//                 }
//                 {
//                     count > 0
//                         ? <button onClick={() => setCount(count - 10)}>Decrement</button>
//                         : <button>Decrement</button>
//                 }
//             </div>
//         </div>
//     )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

// const [count, setCount] = useState(0)

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <div>
//                 {
//                     count < 100
//                         ? <button onClick={() => setCount(count + 10)}>Increment</button>
//                         : <button>Increment</button>
//                 }
//                 {
//                     count > 0
//                         ? <button onClick={() => setCount(count - 10)}>Decrement</button>
//                         : <button>Decrement</button>
//                 }
//             </div>
//             <div style={{
//                 height: "30px",
//                 width: "50%",
//                 borderRadius: "30px",
//                 backgroundColor: count >= 0 && count <= 50
//                     ? "blue"
//                     : count >= 50 && count <= 70
//                         ? "orange"
//                         : "red"
//             }}></div>
//         </div>
//     )
// }

// export default App


// import React, { useState, useEffect } from 'react'

// const App = () => {

//     // useEffect(() => {}, [])

//     // const [count, setCount] = useState(0)
//     // const [show, setShow] = useState(true)


//     // useEffect(() => {
//     //     console.log("Component is rendered")
//     //     document.getElementById("main").innerHTML = "3w42324A"
//     // })



//     return (
//         <div id='main'>
//             {/* count: {count}
//             <button onClick={() => setCount(count + 1)}>Inc</button>
//             <button onClick={() => setShow(!show)}>Show</button> */}

//             App
//         </div>
//     )
// }

// export default App


// import React, { useState, useEffect } from 'react'

// const App = () => {


//     const [count, setCount] = useState(0)
//     const [show, setShow] = useState(true)

// // Without DependenceyList
// useEffect(() => {
//     console.log("Component is rendered")
// })

// Empty DependenceyList
// useEffect(() => {
//     console.log("Component is rendered")
// }, [])

// With DependenceyList
// useEffect(() => {
//     console.log("Component is rendered")
// }, [show])

// useEffect(() => {
//     console.log("Component is rendered")
//     return () => {
//         console.log("Return Component is rendered")
//     }
// }, [count])

//     return (
//         <div id='main'>
//             count: {count}
//             <button onClick={() => setCount(count + 1)}>Inc</button>
//             <button onClick={() => setShow(!show)}>Show</button>
//         </div>
//     )
// }

// export default App

// import React, { useState, useEffect } from 'react'

// const App = () => {

//     const [count, setCount] = useState(0)

//     const [data, setData] = useState(true)

//     // useEffect(() => {
//     //     console.log("Hello")
//     // })

//     // useEffect(() => {
//     //     console.log("Hello")
//     // }, [])

//     // useEffect(() => {
//     //     console.log("hello")
//     // }, [count])


//     return (
//         <div>
//             <h1 onClick={() => setCount(count + 1)}>Count: {count}</h1>

//             <h1 onClick={() => setData(!data)}>Data</h1>

//         </div>
//     )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {

//     const [data, setData] = useState([])
//     const [resource, setResource] = useState("users")

//     let api = `https://jsonplaceholder.typicode.com/${resource}`

//     const getUsers = async () => {
//         const res = await fetch(api)
//         const data = await res.json()
//         setData(data)
//     }


//     useEffect(() => {
//         getUsers()
//     }, [resource])

//     console.log(resource)
//     console.log(data)


//     return (
//         <div>
//             <button onClick={() => setResource("users")}>Users</button>
//             <button onClick={() => setResource("posts")}>Posts</button>
//         </div>
//     )
// }

// export default App

import React, { useEffect, useState } from 'react'
import PokemonDetails from './PokemonDetails'

const App = () => {

    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)

    let api = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    const getPokemons = async () => {
        const res = await fetch(api)
        const data = await res.json()
        setPokemon(data.results)
    }

    useEffect(() => {
        getPokemons()
    }, [offset, limit])

    return (
        <div id='container'>
            <h1>Pokemons</h1>
            <div className='buttons'>
                <button onClick={() => setOffset(offset - 20)} className='btn'>Previous</button>
                <button onClick={() => setOffset(offset + 20)} className='btn'>Next</button>
            </div>
            <input type='number' value={limit} onChange={(e) => setLimit(e.target.value)} />
            <div className='cards'>
                {
                    pokemon.map((e, i) => (
                        <PokemonDetails key={i} url={e.url} />
                    ))
                }
            </div>
        </div>
    )
}

export default App