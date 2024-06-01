<template>
    <section class="entrySection" id="entry">
    <h1 class="mainTitle">Explora la Pokédex<br>y descubre a todos los Pokémon</h1>
    <h2 class="subTitle">¡Atrápalos a todos y conviértete en un maestro Pokémon!</h2>
    <router-link class="registerButton" to="/register">Regístrar como Entrenador</router-link>
    <span>O</span>
    <router-link class="loginButton" to="/login">Iniciar sesión con tu cuenta</router-link>
    </section>
</template>

<script>
export default{
    name: 'HomePage'
};
</script>