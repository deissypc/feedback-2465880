const App = () =>{

    const bootcamps =[
        {id:1,
          name: 'PHP bootcamp',
         average_rating: 10 },
         {id:1,
            name: 'javascript bootcamp',
           average_rating: 10 }
    ]
    return(
        <div>
          <h1>Listado de bootcamps</h1>
            <ul>
{bootcamps.map((bootcamp, index) => (
    <li key={index} > { bootcamp.name } </li>
)) }
            </ul>
        </div>
    )
}


export default App 