import './App.css'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:8001")

const App = () => {
  return ( 
    <div>

    </div>
   );
}
 
export default App;