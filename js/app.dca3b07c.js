(function(){"use strict";var e={8026:function(e,t,o){var n=o(3751),s=o(641);const i={id:"app"},r={class:"header"},a={class:"navbar"},c=(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",focusable:"true",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[(0,s.Lk)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.eW)(),(0,s.Lk)("circle",{cx:"9",cy:"9",r:"9",transform:"translate(3 3)"}),(0,s.eW)(),(0,s.Lk)("circle",{cx:"12",cy:"12",r:"3"}),(0,s.eW)(),(0,s.Lk)("path",{d:"M3 12h6m6 0h6"})],-1),l=(0,s.Lk)("span",null,"PokeLegends",-1),p={class:"navListForCel"},u={class:"navListItem"},k={class:"navList"},d={class:"navListItem"},m={class:"navListItem"},h={class:"navListItem"},g={class:"footer"},f={class:"navbar"},L={class:"navList"},v={class:"navListItem"},P={class:"navListItem"},y={class:"navListItem"},b={class:"navListItem"},C=(0,s.Lk)("div",{class:"footerText"},"Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2024. All images and names owned and trademarked by Gamefreak, Nintendo, The Pokémon Company, and Niantic are property of their respective owners.",-1);function w(e,t,o,n,w,F){const I=(0,s.g2)("router-link"),x=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("header",r,[(0,s.Lk)("nav",a,[(0,s.bF)(I,{class:"logo",to:"/PokePage"},{default:(0,s.k6)((()=>[c,l])),_:1}),(0,s.Lk)("ul",p,[(0,s.Lk)("li",u,[(0,s.bF)(I,{class:"navLink",to:"pokedex"},{default:(0,s.k6)((()=>[(0,s.eW)("Pokedex")])),_:1})])]),(0,s.Lk)("ul",k,[(0,s.Lk)("li",d,[(0,s.bF)(I,{class:"navLink",to:"pokedex"},{default:(0,s.k6)((()=>[(0,s.eW)("Pokedex")])),_:1})]),(0,s.Lk)("li",m,[(0,s.bF)(I,{class:"navLink",to:"register"},{default:(0,s.k6)((()=>[(0,s.eW)("Registrarse")])),_:1})]),(0,s.Lk)("li",h,[(0,s.bF)(I,{class:"navLink login",to:"login"},{default:(0,s.k6)((()=>[(0,s.eW)("Iniciar Sesión")])),_:1})])])])]),(0,s.Lk)("main",null,[(0,s.bF)(x)]),(0,s.Lk)("footer",g,[(0,s.Lk)("nav",f,[(0,s.Lk)("ul",L,[(0,s.Lk)("li",v,[(0,s.bF)(I,{class:"navLink",to:"PokePage"},{default:(0,s.k6)((()=>[(0,s.eW)("Términos y condiciones")])),_:1})]),(0,s.Lk)("li",P,[(0,s.bF)(I,{class:"navLink",to:"PokePage"},{default:(0,s.k6)((()=>[(0,s.eW)("Preguntas frecuentes")])),_:1})]),(0,s.Lk)("li",y,[(0,s.bF)(I,{class:"navLink",to:"PokePage"},{default:(0,s.k6)((()=>[(0,s.eW)("Ayuda")])),_:1})]),(0,s.Lk)("li",b,[(0,s.bF)(I,{class:"navLink",to:"PokePage"},{default:(0,s.k6)((()=>[(0,s.eW)("Contacto")])),_:1})])])]),C])])}var F={name:"App"},I=o(6262);const x=(0,I.A)(F,[["render",w]]);var E=x,W=o(5220);const A={class:"entrySection",id:"entry"},_=(0,s.Lk)("h1",{class:"mainTitle"},[(0,s.eW)("Explora la Pokédex"),(0,s.Lk)("br"),(0,s.eW)("y descubre a todos los Pokémon")],-1),T=(0,s.Lk)("h2",{class:"subTitle"},"¡Atrápalos a todos y conviértete en un maestro Pokémon!",-1),$=(0,s.Lk)("span",null,"O",-1);function O(e,t,o,n,i,r){const a=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",A,[_,T,(0,s.bF)(a,{class:"registerButton",to:"register"},{default:(0,s.k6)((()=>[(0,s.eW)("Regístrar como Entrenador")])),_:1}),$,(0,s.bF)(a,{class:"loginButton",to:"login"},{default:(0,s.k6)((()=>[(0,s.eW)("Iniciar sesión con tu cuenta")])),_:1})])}var S={name:"HomePage"};const N=(0,I.A)(S,[["render",O]]);var X=N;const j={class:"registerSection"},q={class:"container"},G=(0,s.Fv)('<img src="https://images.gameinfo.io/pokemon-trimmed/60/p25.webp"><h1 class="registerTitle">Registrarse</h1><form action="#"><input class="registerUser" type="text" placeholder="Usuario" required autocomplete="username"><input class="registerEmail" type="email" placeholder="Correo electrónico" required autocomplete="username"><input class="registerPassword" type="password" placeholder="Contraseña" required autocomplete="new-password"><input class="registerConfirmPassword" type="password" placeholder="Confirmar contraseña" required autocomplete="new-password"><input class="registerSubmit" type="submit" value="Registrarse"></form>',3),R={class:"login-link"};function B(e,t,o,n,i,r){const a=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",j,[(0,s.Lk)("div",q,[G,(0,s.Lk)("div",R,[(0,s.eW)(" ¿Ya tienes una cuenta? "),(0,s.bF)(a,{to:"login"},{default:(0,s.k6)((()=>[(0,s.eW)("Inicia sesión aquí")])),_:1})])])])}var M={name:"RegisterPage"};const U=(0,I.A)(M,[["render",B]]);var z=U;const H={class:"loginSection"},K={class:"container"},D=(0,s.Fv)('<img src="https://images.gameinfo.io/pokemon-trimmed/60/p25.webp"><h1 class="loginTitle">Iniciar Sesión</h1><form action="#"><input class="loginUser" type="text" placeholder="Usuario" required autocomplete="username"><input class="loginPassword" type="password" placeholder="Contraseña" required autocomplete="current-password"><input class="loginSubmit" type="submit" value="Iniciar Sesión"></form>',3),V={class:"signup-link"};function Y(e,t,o,n,i,r){const a=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",H,[(0,s.Lk)("div",K,[D,(0,s.Lk)("div",V,[(0,s.eW)(" ¿No tienes una cuenta? "),(0,s.bF)(a,{to:"register"},{default:(0,s.k6)((()=>[(0,s.eW)("Regístrate aquí")])),_:1})])])])}var J={name:"LoginPage"};const Q=(0,I.A)(J,[["render",Y]]);var Z=Q,ee=o(33);const te={class:"pokemonListSection",id:"pokedex"},oe=(0,s.Lk)("h2",{class:"subTitle"},"Pokedex",-1),ne={class:"pokemonButtonsList"},se={class:"button anterior",ref:"anterior"},ie={class:"button posterior",ref:"posterior"},re={class:"pokemonListContainer","data-page":"",ref:"pokemonListContainer"},ae={class:"pokemonLink"},ce={class:"pokemonImage"},le=["src","alt"],pe={class:"pokemonInfo"},ue={class:"numberPokedex"},ke={class:"types"};function de(e,t,o,n,i,r){return(0,s.uX)(),(0,s.CE)("section",te,[oe,(0,s.Lk)("div",ne,[(0,s.Lk)("button",se,"Anterior",512),(0,s.Lk)("button",ie,"Posterior",512)]),(0,s.Lk)("div",re,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.pokemonList,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"pokemonContainer"},[(0,s.Lk)("a",ae,[(0,s.Lk)("div",ce,[(0,s.Lk)("img",{src:e.image,alt:e.name,loading:"lazy"},null,8,le)]),(0,s.Lk)("div",pe,[(0,s.Lk)("div",ue,(0,ee.v_)(e.id),1),(0,s.Lk)("span",null,(0,ee.v_)(e.name),1),(0,s.Lk)("div",ke,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.types,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:(0,ee.C4)([i.styleType.get(e),"one"])},[(0,s.Lk)("span",null,(0,ee.v_)(e),1)],2)))),128))])])])])))),128))],512)])}o(4114);var me={name:"PokedexPage",data(){return{currentPage:1,pokemonList:[],toNumber:351,pokemonInPage:1,pokemonForPage:15,heightForPage:null,heightLastPage:null,styleType:new Map([["grass","typePlant"],["poison","typePoison"],["fire","typeFire"],["water","typeWater"],["flying","typeFlying"],["bug","typeBug"],["normal","typeNormal"],["electric","typeElectric"],["ground","typeGround"],["fairy","typeFairy"],["fighting","typeFighting"],["psychic","typePsychic"],["rock","typeRock"],["steel","typeSteel"],["ice","typeIce"],["ghost","typeGhost"],["dragon","typeDragon"]]),isLoading:!1}},methods:{async fetchPokemonGrid(e,t=1){this.isLoading=!0;try{this.desactivateClickListeners(),this.pokemonList=[];for(let o=e;o<e+this.pokemonForPage;o++){const e=await fetch(`https://pokeapi.co/api/v2/pokemon/${o}`),n=await e.json(),s={id:n.id,name:n.name,image:`https://images.gameinfo.io/pokemon-trimmed/60/p${o}.webp`,types:n.types.map((e=>e.type.name))};if(this.pokemonList.push(s),o>=this.toNumber)return this.pokemonInPage+=this.pokemonForPage,this.$refs.pokemonListContainer.setAttribute("data-page",t),void this.activateClickListenerAnterior()}this.pokemonInPage+=this.pokemonForPage,this.$refs.pokemonListContainer.setAttribute("data-page",t),this.activateClickListeners()}catch(o){console.log("Error al cargar datos:",o)}finally{this.isLoading=!1}},handleClickAnterior(){this.currentPage<=1||(this.currentPage>=Math.floor(this.toNumber/this.pokemonForPage)+1&&(this.$refs.pokemonListContainer.style.height=""),this.pokemonInPage-=2*this.pokemonForPage,this.currentPage--,this.fetchPokemonGrid(this.pokemonInPage,this.currentPage))},handleClickPosterior(){if(this.currentPage===Math.floor(this.toNumber/this.pokemonForPage)){const e=this.toNumber%this.pokemonForPage,t=window.getComputedStyle(this.$refs.pokemonListContainer).getPropertyValue("height");this.heightLastPage=parseInt(t)/this.pokemonForPage*e,this.$refs.pokemonListContainer.style.height=`${this.heightLastPage}px`}this.currentPage++,this.fetchPokemonGrid(this.pokemonInPage,this.currentPage)},activateClickListeners(){this.$refs.anterior.addEventListener("click",this.handleClickAnterior),this.$refs.posterior.addEventListener("click",this.handleClickPosterior)},desactivateClickListeners(){this.$refs.anterior.removeEventListener("click",this.handleClickAnterior),this.$refs.posterior.removeEventListener("click",this.handleClickPosterior)},activateClickListenerAnterior(){this.$refs.anterior.addEventListener("click",this.handleClickAnterior)}},mounted(){this.fetchPokemonGrid(this.pokemonInPage)},beforeRouteLeave(e,t,o){this.isLoading&&(this.isLoading=!1),o()}};const he=(0,I.A)(me,[["render",de]]);var ge=he;const fe=[{path:"/",component:X},{path:"/PokePage",component:X},{path:"/register",component:z},{path:"/login",component:Z},{path:"/pokedex",component:ge}],Le=(0,W.aE)({history:(0,W.LA)(),routes:fe}),ve=(0,n.Ef)(E);ve.use(Le),ve.mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,i){if(!n){var r=1/0;for(p=0;p<e.length;p++){n=e[p][0],s=e[p][1],i=e[p][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<r&&(r=i));if(a){e.splice(p--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[n,s,i]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,r=n[0],a=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(c)var p=c(o)}for(t&&t(n);l<r.length;l++)i=r[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},n=self["webpackChunkcfs"]=self["webpackChunkcfs"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(8026)}));n=o.O(n)})();
//# sourceMappingURL=app.dca3b07c.js.map