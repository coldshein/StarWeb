import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <section className="min-h-screen flex flex-col my-5">
        <Header />
        <main className="flex-grow my-5 max-w-[1300px] w-full h-full mx-auto p-8">
          <Outlet />
        </main>
        <Footer />
      </section>
    </Provider>
  );
}

export default App;
