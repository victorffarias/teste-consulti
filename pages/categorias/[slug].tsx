import { GetStaticPaths, GetStaticProps } from "next";
import FormCategoria from "../../components/FormCategoria";
import { api } from "../../services/api";

import styles from "../../styles/categorias/cadastrar.module.scss";

interface Categoria {
    Descricao: string;
    Nome: string;
    Ordem: number;
    Email: string;
    ID: number
}

interface CategoriaProps {
    categoria: Categoria
}

export default function Categoria({categoria}: CategoriaProps) {
    return (
        <div className={styles.pageWrapper}>
            <main>
                <h1>Dados da Categoria</h1>
                <FormCategoria categoriaEdit={categoria} />
            </main>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const { data } = await api.get("/api/listar-categorias-por-email")
    const categorias: Categoria[] = data.ObterCategoriasPorEmailResult;

    const paths = categorias.map(categoria => {
        return {
            params: {
                slug: categoria.ID + ""
            }
        }
    })
    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async(ctx) => {
    const { slug } = ctx.params;

    const {data} = await api.get("/api/obter-categoria-por-codigo", {params: {id: slug}})
    
    return {
        props: {categoria: data.ObterPorCodigoResult}
    }

}