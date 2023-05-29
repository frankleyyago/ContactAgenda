import Header from './components/Header'
import Input from './components/Form'
import GlobalStyle from './styles'
import ContactList from './components/ContactList'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Input />
        <ContactList />
      </div>
    </>
  )
}

export default App
