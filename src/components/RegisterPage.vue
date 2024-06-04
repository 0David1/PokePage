<template>
    <section class="registerSection">
    <div class="container">
        <img src="https://images.gameinfo.io/pokemon-trimmed/60/p25.webp">
        <h1 class="registerTitle">Registrarse</h1>
        <form action="#">
            <input class="registerUser" type="text" placeholder="Usuario" required autocomplete="username">
            <input class="registerEmail" type="email" placeholder="Correo electrónico" required autocomplete="username">
            <input class="registerPassword" type="password" placeholder="Contraseña" required autocomplete="new-password">
            <input class="registerConfirmPassword" type="password" placeholder="Confirmar contraseña" required autocomplete="new-password">
            <input class="registerSubmit" type="submit" value="Registrarse">
        </form>
        <div class="login-link">
            ¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión aquí</router-link>
        </div>
    </div>
</section>
</template>

<script>
export default{
    name: 'RegisterPage'
}
</script>

<style>
.registerTitle {
    text-align: center;
    margin-bottom: 30px;
    color: #ccc;
}

.registerUser,
.registerEmail,
.registerPassword,
.registerConfirmPassword {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.registerSubmit {
    width: 100%;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.registerSubmit:hover {
    background-color: #0056b3;
}

.login-link {
    text-align: center;
    margin-top: 20px;
}
.login-link a {
    color: #007bff;
    text-decoration: none;
}

.login-link a:hover {
    text-decoration: underline;
}
</style>