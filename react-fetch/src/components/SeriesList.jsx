function SeriesList ({series}) {
    return (
<>
<h2>Aqui esta tu serie</h2>
<ul>
    {series.map ( item => 
        <li>
            <h3>{item.name}</h3>
            <h3>{item.id}</h3>
        </li>
    )}
</ul>
</>

    )
}

export default SeriesList