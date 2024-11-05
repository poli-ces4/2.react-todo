import style from "./App.module.css";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  return (
    <div className={style.container}>
      <div className={style.appwrapper}>
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
