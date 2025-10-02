import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './content/home/home.jsx'
import Todo from './content/to do list/todo.jsx'
import Counter from './content/counter/counter.jsx'
import Stoper from './content/stoper/stoper.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="counter" element={<Counter />} />
          <Route path="stoper" element={<Stoper />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
