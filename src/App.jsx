import { Header } from './components/Header'
import './global.css'
import { Post } from './Post'

function App() {
  return ( 
    <div>
      <Header />
      <Post
        author={'Rafael Aureliano'}
        content={'O poder da limberdade é criar algo novo! O poder da limberdade é criar algo seu!!'} 
      />
    </div>
  )
}

export default App
