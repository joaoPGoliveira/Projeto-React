const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henriquez: chemist',
    'Mohammed Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
]

export default function List () {
    const listItems = people.map(person =>
        <li> {person} </li>
    )
    return <ul> {listItems} </ul>
}