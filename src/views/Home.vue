<script>
import { mapState } from "vuex";
import ItemEmployee from '../components/ItemEmployee.vue';

export default {
    name: "view-home",
    data() {
        return {}
    },

    components: {
        ItemEmployee
    },

    computed: mapState({
        data: state => state.employee.employees,
        fetchingData: state => state.employee.fetchingData
    }),

    created(){
        this.$store.dispatch("employee/fetchEmployees");
    }
}
</script>

<template>
    <div class="contaier">
        <div class="card-home">
            <div class="card-title">
                <h4>Bienvenido a "Grupo Lexer"</h4>
            </div>
            <div class="content-home">
                <input type="search" class="text-field" placeholder="Ingresar el nif del empleado" />
            </div>
            <template v-if="fetchingData">
                <span>Loading....</span>
            </template>
            <div v-for="(strip, index) in data" :key="index">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nif</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Primer Apellido</th>
                            <th scope="col">Segundo Apellido</th>
                            <th scope="col">Codigo postal</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <item-employee v-for="(list, index) in strip" :key="index" :code="list.code" :nif="list.nif"
                        :name="list.name" :last_name1="list.last_name1" :last_name2="list.last_name2"
                        :code_section="list.code_section" />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-home {
    background-color: #ffffff;
    color: #212529;
    border-radius: 0.5rem;
    border: 2px solid #f8f9fa;
    box-shadow: 5px 5px 5px #e9ecef;
    padding: 0.5rem;
}
.card-title > h4 {
    color: #212529;
    font-weight: 800;
    font-style: italic;
    font-size: 2rem;
    line-height: 2rem;
}
.text-field{
    background-color: #ffffff;
    color: #343a40;
    border-radius: 0.5rem;
    border: 2px solid #f8f9fa;
    box-shadow: 5px 5px 5px #e9ecef;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
}
</style>