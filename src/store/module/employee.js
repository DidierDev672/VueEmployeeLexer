import API from "../../api";
import * as types from "../mutation-types";

const state = () => ({
    employee: null,
    employees: {},
    fetchingData: true,
    error: null
});

const getters = {
    getListEmployee: (state) => (code) => {
        return Object.values(state.employees)
        .filter((list) => list.code === code);
    }
};

const actions = {
    fetchEmployees({commit}){
        commit(types.FETCH_EMPLOYEE_REQUEST);

        API.getAllEmployees()
        .then((result) => commit(types.FETCH_EMPLOYEE_SUCESS, { employees: result }))
        .catch((error) => commit(types.FETCH_EMPLOYEE_FAILURE, { error: error}));
    },

    fetchEmployee({commit}, { code }){
        commit(types.FETCH_EMPLOYEE_REQUEST);

        API.getEmployee({ code: code })
        .then((result) => commit(types.FETCH_EMPLOYEE_SUCESS, { employee: result  }))
        .catch((error) => commit(types.FETCH_EMPLOYEE_FAILURE, { error: error }));
    },

    createEmployee({ commit }, { data }){
        commit(types.FETCH_EMPLOYEE_REQUEST);

        API.postEmployee({ data: data});
    },

    updateEmployee({ commit }, { code, data }){
        commit(types.FETCH_EMPLOYEE_REQUEST);

        API.putEmployee({code: code, data: data});
    },

    deleteEmployee({ commit }, { code }){
        commit(types.FETCH_EMPLOYEE_REQUEST);

        API.deleteEmployee({ code: code });
        // .then((result) => commit(types.FETCH_EMPLOYEE_SUCESS, { employee: result }))
        // .catch((error) => commit(types.FETCH_EMPLOYEE_FAILURE, { error: error }));
    }
};

const mutations = {
    [types.FETCH_EMPLOYEE_REQUEST](state){
        state.fetchingData = true;
        state.error = null;
    },

    [types.FETCH_EMPLOYEE_SUCESS](state, { employees }){
        state.fetchingData = false;
        state.error = null;
        state.employees = { ...employees };
    },

    [types.FETCH_EMPLOYEE_FAILURE](state, { error }){
        state.fetchingData = false;
        state.error = error;
    },

    [types.ADD_EMPLOYEE](state, { employee }){
        state.employee = { ...employee };
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}