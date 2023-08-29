import React, { useState } from 'react';

import Form from '../Form/Form';
import Tabela from '../Table/Tabela';
import './App.css';

function App() {
  const [contatos, setContatos] = useState<IContato[]>([]);

  

  return (
    <div className='row'>
      <div className="col-4">
      <Form setContatos={setContatos} />
      </div>
      <div className="col-8">
      <Tabela />
      </div>
    </div>
  );
}

export default App;
