import FormCategoria from "../../components/FormCategoria";

import styles from "../../styles/categorias/cadastrar.module.scss";

export default function Cadastrar(){
    
    return (
        <div className={styles.pageWrapper}>
            <main>
                <h1>Cadastro de Categoria</h1>
                <FormCategoria />
            </main>
        </div>        
    )
}