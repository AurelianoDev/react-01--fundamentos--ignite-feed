import {PencilLine} from 'phosphor-react'

import Styles from './Sidebar.module.css'

export function Sidebar() {
    return (
       <aside className={Styles.sidebar}>
        <img 
            className={Styles.cover}
            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" 
        />

        <div className={Styles.profile}>
            <img className={Styles.avatar} src="https://media.licdn.com/dms/image/D4D03AQHkO5IMgOrvPw/profile-displayphoto-shrink_400_400/0/1674506875223?e=1680739200&v=beta&t=T0OM36SCpsxJhrqNGJDT4MPd3SMx13n_JLy9pRddBlI" alt="" />

            <strong>Aureliano Silva</strong>
            <span>Web Developer</span>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </div>
       </aside>
    )
}