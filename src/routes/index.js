import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
const Router = () => {
    return (

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/> 

        </Switch>
    )
}


export default Router