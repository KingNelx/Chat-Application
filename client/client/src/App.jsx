import './App.css'
import io from 'socket.io-client'
import JoinRoom from './Components/JoinRoom';

const socket = io.connect("http://localhost:9000")

const App = () => {
  return ( 
    <div>
     
        <JoinRoom />
  
    </div>
   );
}
 
export default App;