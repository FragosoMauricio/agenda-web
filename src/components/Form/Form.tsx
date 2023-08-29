import React from 'react';
import Botao from '../Botao';

interface IFormularioPros {
    setContatos: React.Dispatch<React.SetStateAction<IContato[]>>;
}

function Form ({setContatos}: IFormularioPros) {
    interface IContato {
        nome: string;
        fone: string;
    }

    function salvar (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formulario = event.target as HTMLFormElement;
        const dados = new FormData(formulario);
        const contato: IContato = {
            nome: dados.get('nome') as string
            fone: dados.get('fone') as string
        };

        console.log(contato);
    }
    
    function teste () {
        console.log('teste');
    }



    return (        
                    <form id="formulario-de-cadastro" onSubmit = {AdicionarContato}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome:</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </span>
                                <input type="text" className="form-control" name="nome" id="nome" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fone" className="form-label">Fone:</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-phone"></i>
                                </span>
                                <input type="tel" className="form-control" name="fone" id="fone" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <Botao type="submit" className="btn btn-primary btn-lg">
                                <i className="fas fa-floppy-disk"></i> Salvar
                            </Botao>
                            <Botao type="reset" className="btn btn-danger btn-lg me-4">
                                <i className="fas fa-broom"></i> Limpar
                            </Botao>
                        </div>
                    </form>
                
    );
}

export default Form;