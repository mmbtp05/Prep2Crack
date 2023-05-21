import { useRoutes } from 'react-router-dom';
import { Pages } from './routes/routes';

function App() {

  const all_pages = useRoutes(Pages())
  return (

    <>
    
    {all_pages}


    </>
    
  );
}

export default App;
