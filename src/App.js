import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'

const Asiakkaat = () => {
  return (
    <h1>Asiakkaat sivu</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='asiakkaat' element={<Asiakkaat />} />
        <Route path='sign-In' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
