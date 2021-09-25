import FormCategoria from "../../components/FormCategoria";

import styles from "../../styles/categorias/cadastrar.module.scss";

export default function Cadastrar(){
    return (
        <div className={styles.pageWrapper}>
            <main>
                <FormCategoria />
            </main>
        </div>        
    )
}