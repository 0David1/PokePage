<template>
<div id="app">
    <header class="header">
      <nav class="navbar">
        <router-link class="logo" to="/PokePage">
          <svg xmlns="http://www.w3.org/2000/svg" focusable="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="9" cy="9" r="9" transform="translate(3 3)" /> <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" /> </svg>
          <span>PokeLegends</span>
        </router-link>
        <ul class="navListForCel">
          <li class="navListItem">
            <router-link class="navLink" to="pokedex">Pokedex</router-link>
          </li>
        </ul>
        <ul class="navList">
          <li class="navListItem">
            <router-link class="navLink" to="pokedex">Pokedex</router-link>
          </li>
          <li class="navListItem">
            <router-link class="navLink" to="register">Registrarse</router-link>
          </li>
          <li class="navListItem">
            <router-link class="navLink login" to="login">Iniciar Sesión</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="footer">
      <nav class="navbar">
        <ul class="navList">
          <li class="navListItem"><router-link class="navLink" to="PokePage">Términos y condiciones</router-link></li>
          <li class="navListItem"><router-link class="navLink" to="PokePage">Preguntas frecuentes</router-link></li>
          <li class="navListItem"><router-link class="navLink" to="PokePage">Ayuda</router-link></li>
          <li class="navListItem"><router-link class="navLink" to="PokePage">Contacto</router-link></li>
        </ul>
      </nav>
      <div class="footerText">Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2024. All images and names owned and trademarked by Gamefreak, Nintendo, The Pokémon Company, and Niantic are property of their respective owners.</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
