import { createStore, createLogger  } from "vuex";
import employee from "./module/employee";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
    modules:{
        employee
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});