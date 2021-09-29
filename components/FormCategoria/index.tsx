import Input from '../Input';
import Button from '../Button';
import styles from './styles.module.scss';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import { useRouter } from 'next/dist/client/router';
import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';


interface Categoria {
    ID ?: number;
    Descricao: string;
    Nome: string;
    Ordem: number|string;
    Email?: string;
}

interface InputGroupProps {
    inputName: string;
    value: string|number;
}

interface FormCategoriaProps {
    categoriaEdit?: Categoria
}

export default function FormCategoria({categoriaEdit}: FormCategoriaProps) {
    const categoriaVazia: Categoria = {
        Descricao: "",
        Nome: "",
        Ordem: "",
        Email: "victor.f.farias@gmail.com"

    }
    const [categoria, setCategoria] = useState(categoriaEdit || categoriaVazia);
    const router = useRouter();
    
    function setFormData(inputGroup: InputGroupProps){
        setCategoria({
            ...categoria,
            [inputGroup.inputName]: inputGroup.value
        })
    }

    async function handleSave(e:FormEvent){
        e.preventDefault();

        if(categoria.ID){
            await api.put(
                "/api/atualizar-categoria",
            {param: categoria}
            )
        }else{
            await api.post(
                "/api/cadastrar-categoria",
                {param: categoria}
            )
        }

        confirmAlert({
            title: "Sucesso",
            message: "Categoria salva com sucesso",
            buttons: [
                {
                    label: "Fechar",
                    onClick: () => void (0)
                }
            ],
        })

        router.push('/categorias')
    }

    function handleVoltar(){
        router.push('/categorias');
    }
    return (
        <form onSubmit={handleSave}>
            <Input 
                name="nome" 
                label="Nome" 
                value={categoria.Nome}
                onChange={(e) => {setFormData({inputName: "Nome", value: e.target.value})}}
            />
            <Input 
                name="descricao" 
                label="Descrição" 
                value={categoria.Descricao}
                onChange={(e) => {setFormData({inputName: "Descricao", value: e.target.value})}}/>
            <Input 
                name="ordem" 
                label="Ordem" 
                value={categoria.Ordem}
                onChange={(e) => {setFormData({inputName: "Ordem", value: e.target.value})}}/>
            <footer className={styles.footer}>
                <Button type="button" isOutlined={true} onClick={handleVoltar}>Voltar</Button>
                <Button type="submit">Salvar</Button>
            </footer>
        </form>
    )
}