import { Route } from 'wouter'

import {CreateUser} from './components/CreateUser/index'
import { ListUsers } from './components/ListUsers/index'

import './App.css'

function App() {
  

  return (
    <>
      <Route path='/' component={ListUsers}/>
      <Route path='/createUser' component={CreateUser}/>
    </>
  )
}

export default App
