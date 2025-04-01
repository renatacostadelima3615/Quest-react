import React from 'react';
import { ColoredUppercaseText, Button } from './react';

import './style.css';

function App() {
  return (
    <div>
      <ColoredUppercaseText text="Olá, mundo!" color="blue" />
      <ColoredUppercaseText text="React é incrível!" color="#ff5733" />
      <Button label="Baixar CV" />
      <Button label="Enviar Formulário" />
    </div>
  );
}

export default App;
