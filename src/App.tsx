import Header from './components/Header'
import Input from './components/Form'
import GlobalStyle from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Input />
      </div>
    </>
  )
}

export default App
