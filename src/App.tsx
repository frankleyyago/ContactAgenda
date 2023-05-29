import Header from './components/Header'
import Input from './components/Form'
import GlobalStyle from './styles'
import ContactList from './components/ContactList'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Input />
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
