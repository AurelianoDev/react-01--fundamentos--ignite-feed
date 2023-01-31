import Styles from './Sidebar.module.css'

export function Sidebar() {
    return (
       <aside className={Styles.sidebar}>
        <img 
            className={Styles.cover}
            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" 
        />

        <div className={Styles.profile}>
            <strong>Aureliano Silva</strong>
            <span>Web Developer</span>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </div>
       </aside>
    )
}