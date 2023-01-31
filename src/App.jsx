import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import Styles from './App.module.css'

import './global.css'

function App() {
  return ( 
    <div>
      <Header />
      
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
        <Post
          author={'Rafael Aureliano'}
          content={'O poder da limberdade é criar algo novo! O poder da limberdade é criar algo seu!!'} 
        />

        <Post
          author={'Aureliano Silva'}
          content={'O poder da limberdade é criar algo novo! O poder da limberdade é criar algo seu!!'} 
        />
        </main>
      </div>
    </div>
  )
}

export default App
