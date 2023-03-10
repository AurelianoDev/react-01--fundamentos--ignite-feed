import { format, formatDistanceToNow   } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './comment'
import styles from './Post.module.css'


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito sinistro brow, da hora demais!!'
    ])

    const [newCommentText, setCommentsText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'" ,
    {
      locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setCommentsText('')
    }

    function handleNewCommentChange() {
        setCommentsText(event.target.value)
    }
   

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                if(line.type === 'paragraph'){
                    return <p>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p><a href="#">{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
              {comments.map(comment => {
                return <Comment content={ comment } />
              })}
                
            </div>
        </article>
    )
}