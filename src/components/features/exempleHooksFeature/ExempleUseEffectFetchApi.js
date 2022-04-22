import {useEffect, useState} from 'react'


const ExempleUseEffectFetchApi = () => {
    const [covidResults, setCovidResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://covid19-api.com/country/all?format=json')
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setCovidResults(data)
            });
    }, []);

    return (
        <div style={{display: 'block', marginBottom: 10}}>
            <h1>Exemple useEffect - Récuperer les données via REST</h1>
            <h3>Maladie à coronavirus</h3>
               <div className="console" style={{textAlign: 'left'}}>
                    {
                        loading ?
                            'Le chargement de la data..' :
                            covidResults.map((covid, index) =>
                            <li key={index}>{covid.country} - Nombre total de cas : {covid.confirmed}</li>)
                    }
               </div>
        </div>
    )
    
}

export default ExempleUseEffectFetchApi