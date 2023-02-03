import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://media.licdn.com/dms/image/D4D03AQHkO5IMgOrvPw/profile-displayphoto-shrink_400_400/0/1674506875223?e=1680739200&v=beta&t=T0OM36SCpsxJhrqNGJDT4MPd3SMx13n_JLy9pRddBlI" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Silva</strong>
                            <time title="31 de janeiro ás 00:32h" dateTime="2023-01-31 00:32:12">Cerca de 1h trás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}