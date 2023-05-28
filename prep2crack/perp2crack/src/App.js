import { useRoutes } from 'react-router-dom';
import { Pages } from './routes/routes';
import store from '../src/redux/store'
import { Provider } from 'react-redux'
import Carousel from './carousal/carousal';

function App() {

  const all_pages = useRoutes(Pages())
  return (

    <>

      <Provider store={store}>
        {all_pages}
      </Provider>

    </>

  );
}

export default App;
