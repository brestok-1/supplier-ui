import MainPage from "./pages/MainPage";
import DataProvider from "./context/DataProvder"
function App() {
   return (
      <DataProvider>
         <MainPage />
      </DataProvider>
   );
}

export default App;
