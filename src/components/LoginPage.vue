<template>
    <section class="loginSection">
        <div class="container">
            <img src="https://images.gameinfo.io/pokemon-trimmed/60/p25.webp">
            <h1 class="loginTitle">Iniciar Sesión</h1>
            <form action="#">
                <input class="loginUser" type="text" placeholder="Usuario" required>
                <input class="loginPassword" type="password" placeholder="Contraseña" required>
                <input class="loginSubmit" type="submit" value="Iniciar Sesión">
            </form>
            <div class="signup-link">
                ¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginPage'
};
</script>

<style>
.container img{
    height: 50px;
    position: absolute;
    right: -2.5%;
    top: -7.5%;
}

.container {
    position: relative;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  height: 300px;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo transparente */
  backdrop-filter: blur(8px); /* Aplicar efecto de desenfoque */
}

.loginTitle {
    text-align: center;
    margin-bottom: 30px;
    color: #ccc;
}

.loginUser,
.loginPassword {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.loginSubmit {
    width: 100%;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.loginSubmit:hover {
    background-color: #0056b3;
}

.signup-link {
    text-align: center;
    margin-top: 20px;
}

.signup-link a {
    color: #007bff;
    text-decoration: none;
}

.signup-link a:hover {
    text-decoration: underline;
}
</style>