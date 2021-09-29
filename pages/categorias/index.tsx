import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { api } from "../../services/api";
import styles from "../../styles/categorias/index.module.scss";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Categoria from "./[slug]";
import Button from "../../components/Button";


interface Categoria {
    Descricao: string;
    Nome: string;
    Ordem: number;
    Email: string;
    ID: number
}

interface IndexProps {
    categorias: Categoria[]
}

export default function Index({ categorias }: IndexProps) {
    const router = useRouter()
    function handleEdit(categoriaId: number) {
        router.push(`categorias/${categoriaId}`)
    }

    function handleCadastrar() {
        router.push("categorias/cadastrar");
    }

    function handleConfirmDelete(categoriaId: number) {
        confirmAlert({
            title: "Atenção",
            message: "Confirma a exclusão do objeto?",
            buttons: [
                {
                    label: "Sim",
                    onClick: () => handleDelete(categoriaId)
                },
                {
                    label: "Não",
                    onClick: () => void (0)
                }
            ],
        })
    }

    async function handleDelete(categoriaId: number) {
        await api.delete(
            "/api/excluir-categoria",
            { params: { id: categoriaId } }
        );

        confirmAlert({
            title: "Sucesso",
            message: "Categoria excluída com sucesso",
            buttons: [
                {
                    label: "Fechar",
                    onClick: () => void (0)
                }
            ],
        })

        router.replace(router.asPath);
    }

    return (
        <div className={styles.pageWrapper}>
            <main>
                <h1>Categorias</h1>
                <div className={styles.buttonsWrapper}>
                    <Button onClick={() => { handleCadastrar }}>Cadastrar</Button>
                </div>

                <table cellSpacing={0} >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ordem</th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria, index) => {
                            return (
                                <tr key={index}>
                                    <td>{categoria.Nome}</td>
                                    <td>{categoria.Descricao}</td>
                                    <td align="right">{categoria.Ordem}</td>
                                    <td align="center">
                                        <a href="#" onClick={() => { handleEdit(categoria.ID) }}>
                                            <img src="/edit.png" alt="Editar Categoria" />
                                        </a>

                                        <a href="#" onClick={() => { handleConfirmDelete(categoria.ID) }}>
                                            <img src="/delete.png" alt="Apagar Categoria" />
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get("/api/listar-categorias-por-email")

    return {
        props: {
            categorias: data.ObterCategoriasPorEmailResult
        }
    }
}