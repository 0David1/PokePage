(function(){"use strict";var e={9314:function(e,t,n){var i=n(5130),o=n(6768);const s={id:"app"},r={class:"header"},a={class:"navbar"},c=(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",focusable:"true",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[(0,o.Lk)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,o.eW)(),(0,o.Lk)("circle",{cx:"9",cy:"9",r:"9",transform:"translate(3 3)"}),(0,o.eW)(),(0,o.Lk)("circle",{cx:"12",cy:"12",r:"3"}),(0,o.eW)(),(0,o.Lk)("path",{d:"M3 12h6m6 0h6"})],-1),l=(0,o.Lk)("span",null,"PokeLegends",-1),u={class:"navList"},p={class:"navListItem"},k={class:"navListItem"},h={class:"navListItem"},d=(0,o.Fv)('<footer class="footer"><nav class="navbar"><ul class="navList"><li class="navListItem"><a class="navLink" href="">Términos y condiciones</a></li><li class="navListItem"><a class="navLink" href="">Preguntas frecuentes</a></li><li class="navListItem"><a class="navLink" href="">Ayuda</a></li><li class="navListItem"><a class="navLink" href="">Contacto</a></li></ul></nav><div class="footerText">Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2024. All images and names owned and trademarked by Gamefreak, Nintendo, The Pokémon Company, and Niantic are property of their respective owners.</div></footer>',1);function m(e,t,n,i,m,g){const f=(0,o.g2)("router-link"),v=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("header",r,[(0,o.Lk)("nav",a,[(0,o.bF)(f,{class:"logo",to:"/"},{default:(0,o.k6)((()=>[c,l])),_:1}),(0,o.Lk)("ul",u,[(0,o.Lk)("li",p,[(0,o.bF)(f,{class:"navLink",to:"/pokedex"},{default:(0,o.k6)((()=>[(0,o.eW)("Pokedex")])),_:1})]),(0,o.Lk)("li",k,[(0,o.bF)(f,{class:"navLink",to:"/register"},{default:(0,o.k6)((()=>[(0,o.eW)("Registrarse")])),_:1})]),(0,o.Lk)("li",h,[(0,o.bF)(f,{class:"navLink login",to:"/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Iniciar Sesión")])),_:1})])])])]),(0,o.Lk)("main",null,[(0,o.bF)(v)]),d])}var g={name:"App"},f=n(1241);const v=(0,f.A)(g,[["render",m]]);var L=v,y=n(1387);const P={class:"entrySection",id:"entry"},b=(0,o.Lk)("h1",{class:"mainTitle"},[(0,o.eW)("Explora la Pokédex"),(0,o.Lk)("br"),(0,o.eW)("y descubre a todos los Pokémon")],-1),C=(0,o.Lk)("h2",{class:"subTitle"},"¡Atrápalos a todos y conviértete en un maestro Pokémon!",-1),w=(0,o.Lk)("span",null,"O",-1);function F(e,t,n,i,s,r){const a=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("section",P,[b,C,(0,o.bF)(a,{class:"registerButton",to:"/register"},{default:(0,o.k6)((()=>[(0,o.eW)("Regístrar como Entrenador")])),_:1}),w,(0,o.bF)(a,{class:"loginButton",to:"/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Iniciar sesión con tu cuenta")])),_:1})])}var I={name:"HomePage"};const x=(0,f.A)(I,[["render",F]]);var E=x;const A={class:"registerSection"},W={class:"container"},T=(0,o.Fv)('<img src="https://images.gameinfo.io/pokemon-trimmed/60/p25.webp"><h1 class="registerTitle">Registrarse</h1><form action="#"><input class="registerUser" type="text" placeholder="Usuario" required><input class="registerEmail" type="email" placeholder="Correo electrónico" required><input class="registerPassword" type="password" placeholder="Contraseña" required><input class="registerConfirmPassword" type="password" placeholder="Confirmar contraseña" required><input class="registerSubmit" type="submit" value="Registrarse"></form>',3),$={class:"login-link"};function _(e,t,n,i,s,r){const a=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("section",A,[(0,o.Lk)("div",W,[T,(0,o.Lk)("div",$,[(0,o.eW)(" ¿Ya tienes una cuenta? "),(0,o.bF)(a,{to:"/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Inicia sesión aquí")])),_:1})])])])}var O={name:"RegisterPage"};const S=(0,f.A)(O,[["render",_]]);var N=S;const X={class:"loginSection"},j={class:"container"},q=(0,o.Fv)('<img src="https://images.gameinfo.io/pokemon-trimmed/60/p25.webp"><h1 class="loginTitle">Iniciar Sesión</h1><form action="#"><input class="loginUser" type="text" placeholder="Usuario" required><input class="loginPassword" type="password" placeholder="Contraseña" required><input class="loginSubmit" type="submit" value="Iniciar Sesión"></form>',3),G={class:"signup-link"};function R(e,t,n,i,s,r){const a=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("section",X,[(0,o.Lk)("div",j,[q,(0,o.Lk)("div",G,[(0,o.eW)(" ¿No tienes una cuenta? "),(0,o.bF)(a,{to:"/register"},{default:(0,o.k6)((()=>[(0,o.eW)("Regístrate aquí")])),_:1})])])])}var M={name:"LoginPage"};const B=(0,f.A)(M,[["render",R]]);var U=B,z=n(4232);const H={class:"pokemonListSection",id:"pokedex"},K=(0,o.Lk)("h2",{class:"subTitle"},"Pokedex",-1),D={class:"pokemonButtonsList"},V={class:"button anterior",ref:"anterior"},Y={class:"button posterior",ref:"posterior"},J={class:"pokemonListContainer","data-page":"",ref:"pokemonListContainer"},Q={class:"pokemonLink",href:"#"},Z={class:"pokemonImage"},ee=["src","alt"],te={class:"pokemonInfo"},ne={class:"numberPokedex"},ie={class:"types"};function oe(e,t,n,i,s,r){return(0,o.uX)(),(0,o.CE)("section",H,[K,(0,o.Lk)("div",D,[(0,o.Lk)("button",V,"Anterior",512),(0,o.Lk)("button",Y,"Posterior",512)]),(0,o.Lk)("div",J,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.pokemonList,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"pokemonContainer"},[(0,o.Lk)("a",Q,[(0,o.Lk)("div",Z,[(0,o.Lk)("img",{src:e.image,alt:e.name,loading:"lazy"},null,8,ee)]),(0,o.Lk)("div",te,[(0,o.Lk)("div",ne,(0,z.v_)(e.id),1),(0,o.Lk)("span",null,(0,z.v_)(e.name),1),(0,o.Lk)("div",ie,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.types,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:(0,z.C4)([s.styleType.get(e),"one"])},[(0,o.Lk)("span",null,(0,z.v_)(e),1)],2)))),128))])])])])))),128))],512)])}n(4114);var se={name:"PokedexPage",data(){return{currentPage:1,pokemonList:[],toNumber:351,pokemonInPage:1,pokemonForPage:15,heightForPage:null,heightLastPage:null,styleType:new Map([["grass","typePlant"],["poison","typePoison"],["fire","typeFire"],["water","typeWater"],["flying","typeFlying"],["bug","typeBug"],["normal","typeNormal"],["electric","typeElectric"],["ground","typeGround"],["fairy","typeFairy"],["fighting","typeFighting"],["psychic","typePsychic"],["rock","typeRock"],["steel","typeSteel"],["ice","typeIce"],["ghost","typeGhost"],["dragon","typeDragon"]]),isLoading:!1}},methods:{async fetchPokemonGrid(e,t=1){this.isLoading=!0;try{this.desactivateClickListeners(),this.pokemonList=[];for(let n=e;n<e+this.pokemonForPage;n++){const e=await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`),i=await e.json(),o={id:i.id,name:i.name,image:`https://images.gameinfo.io/pokemon-trimmed/60/p${n}.webp`,types:i.types.map((e=>e.type.name))};if(this.pokemonList.push(o),n>=this.toNumber)return this.pokemonInPage+=this.pokemonForPage,this.$refs.pokemonListContainer.setAttribute("data-page",t),void this.activateClickListenerAnterior()}this.pokemonInPage+=this.pokemonForPage,this.$refs.pokemonListContainer.setAttribute("data-page",t),this.activateClickListeners()}catch(n){console.log("Error al cargar datos:",n)}finally{this.isLoading=!1}},handleClickAnterior(){this.currentPage<=1||(this.currentPage>=Math.floor(this.toNumber/this.pokemonForPage)+1&&(this.$refs.pokemonListContainer.style.height=""),this.pokemonInPage-=2*this.pokemonForPage,this.currentPage--,this.fetchPokemonGrid(this.pokemonInPage,this.currentPage))},handleClickPosterior(){if(this.currentPage===Math.floor(this.toNumber/this.pokemonForPage)){const e=this.toNumber%this.pokemonForPage,t=window.getComputedStyle(this.$refs.pokemonListContainer).getPropertyValue("height");this.heightLastPage=parseInt(t)/this.pokemonForPage*e,this.$refs.pokemonListContainer.style.height=`${this.heightLastPage}px`}this.currentPage++,this.fetchPokemonGrid(this.pokemonInPage,this.currentPage)},activateClickListeners(){this.$refs.anterior.addEventListener("click",this.handleClickAnterior),this.$refs.posterior.addEventListener("click",this.handleClickPosterior)},desactivateClickListeners(){this.$refs.anterior.removeEventListener("click",this.handleClickAnterior),this.$refs.posterior.removeEventListener("click",this.handleClickPosterior)},activateClickListenerAnterior(){this.$refs.anterior.addEventListener("click",this.handleClickAnterior)}},mounted(){this.fetchPokemonGrid(this.pokemonInPage)},beforeRouteLeave(e,t,n){this.isLoading&&(this.isLoading=!1),n()}};const re=(0,f.A)(se,[["render",oe]]);var ae=re;const ce=[{path:"/",component:E},{path:"/register",component:N},{path:"/login",component:U},{path:"/pokedex",component:ae}],le=(0,y.aE)({history:(0,y.LA)(),routes:ce}),ue=(0,i.Ef)(L);ue.use(le),ue.mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,s){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],s=e[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(a=!1,s<r&&(r=s));if(a){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,r=i[0],a=i[1],c=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var u=c(n)}for(t&&t(i);l<r.length;l++)s=r[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},i=self["webpackChunkcfs"]=self["webpackChunkcfs"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(9314)}));i=n.O(i)})();
//# sourceMappingURL=app.f0128ec4.js.map