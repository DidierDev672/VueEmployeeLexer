<script>
export default {
    name: "view-header",
    data(){
        return{}
    }
};
</script>

<template>
    <header class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Gruop Lexer</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/employee" class="nav-link active" aria-current="page">Empleado</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/section" class="nav-link active" aria-current="page">Departamento</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>