import Input from '../Input';
import styles from './styles.module.scss';

export default function FormCategoria() {
    return (
        <form>
            <Input name="nome" label="Nome"/>
            <Input name="descricao" label="Descrição"/>
            <Input name="ordem" label="Ordem"/>
        </form>
    )
}