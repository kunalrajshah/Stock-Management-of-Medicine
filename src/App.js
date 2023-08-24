import InputForm from "./InputForm";
import ContextProvider from "./store/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <InputForm />
    </ContextProvider>
  );
}

export default App;
