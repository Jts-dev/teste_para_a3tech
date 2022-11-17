
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import ModalFormulario from './components/ModalFormulario/ModalFormulario';
import { useDispatch } from 'react-redux';
import { toggleModal } from './redux/slice/modalSlice';
import './App.css'


function App (){
    const dispatch = useDispatch()
    function toggleModalx() {
      console.log("xx")
      dispatch(toggleModal())  
    }

    return(
      <div className='App'>
        <header>
          <button onClick={toggleModalx}>Cancelar</button>
          <ul>
            <li onClick={toggleModalx}  >teste1s</li>
            <li>teste1</li>
            <li>teste1</li>
          </ul>
        </header>
        <ModalFormulario></ModalFormulario>
        <ListaDeNotas></ListaDeNotas>
      </div>
    )
  }

  export default App