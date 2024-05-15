import Filtro from "./Filtragem/App02";
import Gallery, { Profile } from "./Gallery/Gallery";
import PackingList from "./Lista/Lista";
import List from "./Mapa/Map";
import Profile02 from "./Props/App";
import { Link } from 'react-router-dom'

export default function Componentes_Aula() {
    return (
        <>
            <h1> Meu primeiro componente </h1><br />
            <Gallery />
            <br />

            <h1> Utilizando somente o profile </h1><br />
            <Profile />
            <br />

            <h1> Especificando valores para um prop </h1>
            <Profile02 />
            <br />

            <h1> JSX e condições em componentes </h1>
            <PackingList />
            <br />

            <h1> Map </h1>
            <List />
            <br />

            <h1> Filtragem </h1>
            <Filtro />

            <Link to='/' className='link_voltarHome'> Voltar para a Home </Link>
        </>

    )
}