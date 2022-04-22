import {useState} from 'react'

const ExempleUseStateSearch = () => {
    const [query, setQuery] = useState('')

    const reset = () => {
        setQuery('')
    }

    const handleSearchChanger = (e) => {
        setQuery(e.target.value)
    }

    const afficherText = () => {

    }

    return (
        <div style={{display: 'block', marginBottom: 10}}>
            <input name='search' value={query} onChange={e => handleSearchChanger(e)} />
            <button onClick={reset}>Vider le champ de text</button>
            <button onClick={afficherText}>Afficher le Texet</button>
            <span className="console">{query}</span>
        </div>
    )
}

export default ExempleUseStateSearch
