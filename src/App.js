import React, { Component } from "react";
import {createRoot} from 'react-dom/client';


import { Title, TitleOutro } from './styles'

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <Title><p><h1>Meu Parágrafo</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci quos sint optio officia fuga alias ipsa doloribus facilis et, cupiditate, aliquid magni maxime reiciendis iste nobis omnis hic iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci quos sint optio officia fuga alias ipsa doloribus facilis et, cupiditate, aliquid magni maxime reiciendis iste nobis omnis hic iure.</p><TitleOutro>
  <span><h2>outro parágrafo</h2>Laborum adipisci quos sint optio officia fuga alias ipsa doloribus facilis et, cupiditate, aliquid magni maxime reiciendis iste nobis omnis hic iure.</span></TitleOutro></Title>,
);


class App extends Component {
  render() {
    return (
       <div>
        <Title>Meu Parágrafo</Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci quos sint optio officia fuga alias ipsa doloribus facilis et, cupiditate, aliquid magni maxime reiciendis iste nobis omnis hic iure.</p>

        <TitleOutro>Laborum adipisci quos sint optio officia fuga alias ipsa doloribus facilis et, cupiditate, aliquid magni maxime reiciendis iste nobis omnis hic iure.</TitleOutro>
       </div>
     
  )
}
}
export default App;
