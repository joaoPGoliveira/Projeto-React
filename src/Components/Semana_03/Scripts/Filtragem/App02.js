import { people } from './Data.js'
import { getImageUrl } from './Utils.js'

export default function Filtro() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    )

    const listItems = chemists.map(person =>
        <li>    
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <br />{person.name}: <br />
                {' ' + person.profession + ' '}
                know for {person.accomplishment}
            </p>
        </li>
    )
    return <ul> {listItems} </ul>
}