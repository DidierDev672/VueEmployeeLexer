<script>
import { mapActions } from "vuex";
import Validate from "../hooks/validate";
export default {
  name: "view-employee",
  data() {
    return {
      code: "",
      nif: "",
      name: "",
      last_name1: "",
      last_name2: "",
      code_section: "",
    };
  },

  methods: {
    ...mapActions("employee", ["createEmployee"]),

    saveEmployee() {
      let code = {
        code: Validate.generator_code(),
        nif: this.nif,
        name: this.name,
        last_name1: this.last_name1,
        last_name2: this.last_name2,
        code_section: this.code_section,
      };

      if (
        code.code != "" &&
        code.name != "" &&
        code.nif != "" &&
        code.last_name1 != "" &&
        code.last_name2 != "" &&
        code.code_section != ""
      ) {
        this.createEmployee({ data: code });
        alert("Los datos se ha almacenado con exito");
        this.name = "";
        this.nif = "";
        this.last_name1 = "";
        this.last_name2 = "";
        this.code_section = "";
      }else{
        alert("Debe llenar todos los campos");
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="card-employee">
      <div class="content-employee">
        <h4>Datos basicos del empleados</h4>
      </div>
      <div class="flex-employee">
        <div class="item-employee">
          <label>Nif</label>
          <input type="text" class="text-field" v-model="nif" placeholder="000-000-000" />
        </div>
        <div class="item-employee">
          <label>Nombre</label>
          <input type="text" class="text-field" v-model="name" placeholder="nombre" />
        </div>
        <div class="item-employee">
          <label>Primer apellidos</label>
          <input type="text" class="text-field" v-model="last_name1" placeholder="apellido" />
        </div>
        <div class="item-employee">
          <label>Segundo apellidos</label>
          <input type="text" class="text-field" v-model="last_name2" placeholder="apellido" />
        </div>
        <div class="item-employee">
          <label>Codigo postal</label>
          <input type="text" class="text-field" v-model="code_section" placeholder="0000" />
        </div>
      </div>
      <br />
      <button type="button" class="btn-save" @click="saveEmployee()">Registrar</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  place-content: center;
}

.card-employee {
  width: 35rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #f8f9fa;
  box-shadow: 6px 6px 6px #e9ecef;
  padding: 0.5rem;
}

.content-employee {
  padding: 0.5rem;
  display: flex;
  place-content: center;
}

.content-employee > h4 {
  color: #212529;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
}

.flex-employee {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item-employee {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-employee {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  padding: 0.5rem;
}

.item-employee > label {
  color: #343a40;
  font-weight: 900;
  font-size: 1rem;
  line-height: 2rem;
}

.text-field {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #f8f9fa;
  box-shadow: 4px 4px 4px #e9ecef;
  padding: 0.5rem;
  text-align: center;
}

.btn-save {
  display: flex;
  place-content: center;
}

.btn-save {
  margin: auto;
}

.btn-save {
  width: 10rem;
  background-color: #b7e4c7;
  color: #1b263b;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-save {
  font-weight: 900;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
