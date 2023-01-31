import styles from './Post.module.css'

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/D4D03AQHkO5IMgOrvPw/profile-displayphoto-shrink_400_400/0/1674506875223?e=1680739200&v=beta&t=T0OM36SCpsxJhrqNGJDT4MPd3SMx13n_JLy9pRddBlI" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Aureliano Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="31 de janeiro ás 00:32h" dateTime="2023-01-31 00:32:12">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               <p>Fala galeraa 👋</p> 

               <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

               <p>👉 <a href="" >jane.design/doctorcare </a> </p> 

               <p> <a href="" >#novoprojeto #nlw #rocketseat </a> </p> 
            </div>
        </article>
    )
}