import Header from './components/Header'
import Input from './components/Form'
import GlobalStyle from './styles'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Input />
        <Contact />
      </div>
    </>
  )
}

export default App
