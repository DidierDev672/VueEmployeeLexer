<script>
export default {
  name: "view-modal"
}
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-container{
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  place-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  background-color: white;
  padding: 1rem;
  max-width: 600px;
  margin:auto;
}

button {
  margin-top: 1rem;
}
</style>