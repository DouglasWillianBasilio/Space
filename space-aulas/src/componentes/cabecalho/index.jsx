// Importando as imagens e o arquivo de estilos
import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

// Exportando a função do componente Cabecalho
export default function Cabecalho() {
    return (
        // Criando o cabeçalho com a classe "cabecalho" definida no arquivo de estilos
        <header className={styles.cabecalho}>
            {/* Inserindo a imagem do logo com a descrição "Logo Space" */}
            <img src={logo} alt="Logo Space" />
            {/* Criando um container para o campo de busca e o ícone de lupa */}
            <div className={styles.cabecalho__container}>
                {/* Criando um campo de texto com a classe "cabecalho__input" e com a placeholder "oque voce procura?" */}
                <input className={styles.cabecalho__input} type="text" placeholder="oque voce procura?"/>
                {/* Inserindo a imagem do ícone de lupa com a descrição "icone lupa" */}
                <img src={search} alt="icone lupa" />
            </div>
        </header>
    )
}
