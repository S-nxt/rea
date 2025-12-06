import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counterReducer from "./redux/counterReducer";
import MyRoutes from "./MyRoutes";
import { MyContextProvider } from "./components/Layout/MyContext";

const store = createStore(counterReducer);

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyContextProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-20">
            <MyRoutes />
          </div>
        </MyContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
