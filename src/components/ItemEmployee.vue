<script>
import { mapActions } from "vuex";
import Modal from "./Modal.vue";
export default {
  name: "item-employee",
  data() {
    return {
      showModal: false,
      Code: this.code,
      Nif: this.nif,
      Name: this.name,
      Last_name1: this.last_name1,
      Last_name2: this.last_name2,
      Code_section: this.code_section,
    };
  },

  props: {
    code: Number,
    nif: String,
    name: String,
    last_name1: String,
    last_name2: String,
    code_section: Number,
  },

  components: {
    Modal,
  },

  methods: {
    ...mapActions("employee", ["updateEmployee", "deleteEmployee"]),

    openModal() {
      this.showModal = !this.showModal;
    },

    closeModal() {
      this.showModal = false;
    },

    updateInformation() {
      let data = {
        code: this.Code,
        nif: this.Nif,
        name: this.Name,
        last_name1: this.Last_name1,
        last_name2: this.Last_name2,
        code_section: this.Code_section,
      };

      if (
        data.code != "" &&
        data.nif != "" &&
        data.name != "" &&
        data.last_name1 != "" &&
        data.last_name2 != "" &&
        data.code_section != ""
      ) {
        this.updateEmployee({ data: data, code: this.Code });
      } else {
        alert("Debe llenar todos campos...");
      }
    },

    removeEmployee(){
        this.deleteEmployee({ code: this.Code});
    }
  },
};
</script>

<template>
  <tr>
    <th scope="row">{{ code }}</th>
    <th>{{ nif }}</th>
    <th>{{ name }}</th>
    <th>{{ last_name1 }}</th>
    <th>{{ last_name2 }}</th>
    <th>{{ code_section }}</th>
    <th>
      <button type="button" class="btn-edit" @click="openModal()">
        Editar
      </button>
    </th>
    <th><button type="button" class="btn-delete" @click="removeEmployee()">Eliminar</button></th>
    <br />
  </tr>
  <view-modal v-if="showModal" class="modal-employee">
    <div class="modal-content-employee">
      <div class="content-title">
        <h4>Editar informacion del empleado</h4>
        <button type="button" class="icon-close" @click="closeModal">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="grid-modal-employee">
        <div class="item-modal-employee">
          <label>Codigo</label>
          <input
            type="number"
            class="text-field"
            v-model="Code"
            readonly
            placeholder="0000"
          />
        </div>
        <div class="item-modal-employee">
          <label>Nif</label>
          <input
            type="number"
            class="text-field"
            v-model="Nif"
            placeholder="000-000-000"
          />
        </div>
        <div class="item-modal-employee">
          <label>Nombre</label>
          <input
            type="text"
            class="text-field"
            v-model="Name"
            placeholder="Luis"
          />
        </div>
        <div class="item-modal-employee">
          <label>Primer apellido</label>
          <input
            type="text"
            class="text-field"
            v-model="Last_name1"
            placeholder="Alvarez"
          />
        </div>
        <div class="item-modal-employee">
          <label>Segundo apellido</label>
          <input
            type="text"
            class="text-field"
            v-model="Last_name2"
            placeholder="Suarez"
          />
        </div>
        <div class="item-modal-employee">
          <label>Codigo departamental</label>
          <input
            type="number"
            class="text-field"
            v-model="Code_section"
            placeholder="0000"
          />
        </div>
      </div>
      <br />
      <div class="flex-modal-employee">
        <button type="button" class="update-modal" @click="updateInformation()">Actualizar</button>
        <button type="button" class="close-modal" @click="closeModal">
          Cerrar
        </button>
      </div>
    </div>
  </view-modal>
</template>

<style scoped>
.btn-edit {
  background-color: #ffff3f;
  color: #212529;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-edit {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}

.btn-delete {
  background-color: #ef233c;
  color: #ffffff;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-delete {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}

.modal-employee {
  position: fixed;
}

.modal-content-employee {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.modal-content-employee {
  width: 40rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #f8f9fa;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.grid-modal-employee {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: minmax(100px, auto);
  gap: 20px;
}

.item-modal-employee {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-modal-employee {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  padding: 0.5rem;
}

.item-modal-employee > label {
  color: #343a40;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.text-field {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #f8f9fa;
  box-shadow: 6px 6px 6px #e9ecef;
  padding: 0.5rem;
}

.content-title {
  display: flex;
  flex-direction: row;
  place-content: center;
  gap: 20px;
}

.content-title > h4 {
  color: #212529;
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
}

.icon-close {
  background-color: #f8f9fa;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.icon-close:hover {
  background-color: #e9ecef;
  box-shadow: 4px 4px 4px #dee2e6;
}

.icon-close {
  font-size: 1.5rem;
}

.flex-modal-employee {
  display: flex;
  flex-direction: row;
  place-content: center;
  gap: 20px;
}

.update-modal {
  width: 7rem;
  background-color: #c7f9cc;
  color: #212529;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.update-modal {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.close-modal {
  width: 5rem;
  background-color: #ef233c;
  color: #ffffff;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.close-modal {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
