import React, {useState} from 'react'
import './App.css';
import {UseEffectComponent} from "./Hooks/UseEffect";
import {UseRefComponent} from "./Hooks/UseRef";
import {UseMemoComponent} from "./Hooks/UseMemo";
import {UseCallbackComponent} from "./Hooks/UseCallback";
import {Context} from "./Hooks/useContext/UseContext";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Routes from "./routes";
import {Alert} from "./Hooks/useContext/AlertContext/Alert";
import {AlertProvider} from "./Hooks/useContext/AlertContext/AlertContext";

// const AlertContext = React.createContext() - это относится к комментариям ниже


function App() {

    // UseContext
    // По умолчанию я могу создать здесь любую переменную или стейт
    // Создать любой контекст const AlertContext = React.createContext()
    // И передавать через <AlertContext.Provider value={alert}> {children} </ AlertContext.Provider> любые аргументы дальше
    // В нужном компоненте я могу забрать его, используя const alert = useContext(AlertContext)
    // Но это не очень красивый подход, потому что все state, относящиеся к Alert находятся в компонентах верхнего уровня.

    // const [alert, setAlert] = useState(false)

    // Более красивый подход описан в файле AlertContext

    return (
        <div className="App">
            <Router>
                <div className="container">
                    <Routes/>
                    <div style={{marginTop: '2rem'}}>
                        <Switch>
                            {/*<AlertContext.Provider value={alert}>*/}
                            {/*    <Route path="/context">*/}
                            {/*        <Alert/>*/}
                            {/*        <Context/>*/}
                            {/*    </Route>*/}
                            {/*</AlertContext.Provider>*/}

                            <Route path="/context">
                                <AlertProvider>
                                    <Alert/>
                                    <Context/>
                                </AlertProvider>
                            </Route>
                            <Route path="/effect">
                                <UseEffectComponent/>
                            </Route>
                            <Route path="/ref">
                                <UseRefComponent/>
                            </Route>
                            <Route path="/memo">
                                <UseMemoComponent/>
                            </Route>
                            <Route path="/callback">
                                <UseCallbackComponent/>
                            </Route>
                            <Route path="/"/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
