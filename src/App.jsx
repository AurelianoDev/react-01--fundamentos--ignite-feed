import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import Styles from './App.module.css'

import './global.css'

/**
 * author: {avatar_url: "", name: "", role: ""}
 * publishedAt: Date
 * content: String
 */

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AurelianoDev.png',
      name: 'Aureliano Silva',
      role: 'Student',
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-30 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/96602360?v=4',
      name: 'Leafar Silva',
      role: 'teacher'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:'  DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-02-02 20:00:00'),
  },
]

function App() {
  return ( 
    <div>
      <Header />
      
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
