import Input from '../Input';
import Button from '../Button';
import styles from './styles.module.scss';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface CategoriaProps {
    Descricao: string;
    Nome: string;
    Ordem: number|string;
    Email?: string;
}

interface InputGroupProps {
    inputName: string;
    value: string|number;
}

export default function FormCategoria() {
    const categoriaVazia: CategoriaProps = {
        Descricao: "",
        Nome: "",
        Ordem: "",
        Email: "victor.f.farias@gmail.com"

    }
    const [categoria, setCategoria] = useState(categoriaVazia);

    function setFormData(inputGroup: InputGroupProps){
        setCategoria({
            ...categoria,
            [inputGroup.inputName]: inputGroup.value
        })
    }

    async function handleSave(e:FormEvent){
        e.preventDefault();

        const result = await api.post(
            "/api/cadastrar-categoria",
            {param: categoria}
        )

        console.log(result);
        
        return result;

    }
    return (
        <form onSubmit={handleSave}>
            <h2>Cadastro de Categoria</h2>
            <Input name="nome" label="Nome" onChange={(e) => {setFormData({inputName: "Nome", value: e.target.value})}}/>
            <Input name="descricao" label="Descrição" onChange={(e) => {setFormData({inputName: "Descricao", value: e.target.value})}}/>
            <Input name="ordem" label="Ordem" onChange={(e) => {setFormData({inputName: "Ordem", value: e.target.value})}}/>
            <footer className={styles.footer}>
                <Button type="button" isOutlined={true}>Voltar</Button>
                <Button type="submit">Salvar</Button>
            </footer>
        </form>
    )
}