<template>
    <section class="pokemonListSection" id="pokedex">
        <h2 class="subTitle">Pokedex</h2>
        <div class="pokemonButtonsList">
            <button class="button anterior" ref="anterior">Anterior</button>
            <button class="button posterior" ref="posterior">Posterior</button>
        </div>
        <div class="pokemonListContainer" data-page="" ref="pokemonListContainer">
            <div v-for="pokemon in pokemonList" :key="pokemon.id" class="pokemonContainer">
                <a class="pokemonLink" href="#">
                    <div class="pokemonImage">
                        <img :src="pokemon.image" :alt="pokemon.name" loading="lazy">
                    </div>
                    <div class="pokemonInfo">
                        <div class="numberPokedex">{{ pokemon.id }}</div>
                        <span>{{ pokemon.name }}</span>
                        <div class="types">
                            <div v-for="(type, index) in pokemon.types" :key="index" :class="styleType.get(type)"
                                class="one">
                                <span>{{ type }}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PokedexPage',
    data() {
        return {
            currentPage: 1,
            pokemonList: [],
            toNumber: 351,
            pokemonInPage: 1,
            pokemonForPage: 15,
            heightForPage: null,
            heightLastPage: null,
            styleType: new Map([
                ['grass', 'typePlant'],
                ['poison', 'typePoison'],
                ['fire', 'typeFire'],
                ['water', 'typeWater'],
                ['flying', 'typeFlying'],
                ['bug', 'typeBug'],
                ['normal', 'typeNormal'],
                ['electric', 'typeElectric'],
                ['ground', 'typeGround'],
                ['fairy', 'typeFairy'],
                ['fighting', 'typeFighting'],
                ['psychic', 'typePsychic'],
                ['rock', 'typeRock'],
                ['steel', 'typeSteel'],
                ['ice', 'typeIce'],
                ['ghost', 'typeGhost'],
                ['dragon', 'typeDragon']
            ]),
            isLoading: false,
        };
    },
    methods: {
        async fetchPokemonGrid(toId, page = 1) {
            this.isLoading = true;
            try {
                this.desactivateClickListeners();
                this.pokemonList = [];

                for (let index = toId; index < toId + this.pokemonForPage; index++) {
                    //extraccion de datos
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
                    const data = await response.json();

                    const pokemon = {
                        id: data.id,
                        name: data.name,
                        image: `https://images.gameinfo.io/pokemon-trimmed/60/p${index}.webp`,
                        types: data.types.map(typeInfo => typeInfo.type.name)
                    };

                    //con esto agregamos al array pokemon cada pokemon con sus datos extraidos de la api
                    this.pokemonList.push(pokemon);

                    if (index >= this.toNumber) {
                        this.pokemonInPage += this.pokemonForPage;
                        this.$refs.pokemonListContainer.setAttribute('data-page', page);
                        this.activateClickListenerAnterior();
                        return;
                    }
                }

                this.pokemonInPage += this.pokemonForPage;
                this.$refs.pokemonListContainer.setAttribute('data-page', page);
                this.activateClickListeners();
            } catch (error){
                //ocurrira cuando se cambie de pagina mientras aun se sigue ejecutando esta funcion
                console.log('Error al cargar datos:', error);
            } finally{
                this.isLoading = false;
            }

        },
        handleClickAnterior() {
            if (this.currentPage <= 1) return;

            if (this.currentPage >= Math.floor(this.toNumber / this.pokemonForPage) + 1) {
                this.$refs.pokemonListContainer.style.height = '';
            }

            this.pokemonInPage -= this.pokemonForPage * 2;
            this.currentPage--;
            this.fetchPokemonGrid(this.pokemonInPage, this.currentPage);
        },
        handleClickPosterior() {
            if (this.currentPage === Math.floor(this.toNumber / this.pokemonForPage)) {
                const pokemonInLastPage = this.toNumber % this.pokemonForPage;
                const heightForPage = window.getComputedStyle(this.$refs.pokemonListContainer).getPropertyValue('height');
                this.heightLastPage = parseInt(heightForPage) / this.pokemonForPage * pokemonInLastPage;
                this.$refs.pokemonListContainer.style.height = `${this.heightLastPage}px`;
            }

            this.currentPage++;
            this.fetchPokemonGrid(this.pokemonInPage, this.currentPage);
        },
        activateClickListeners() {
            this.$refs.anterior.addEventListener('click', this.handleClickAnterior);
            this.$refs.posterior.addEventListener('click', this.handleClickPosterior);
        },
        desactivateClickListeners() {
            this.$refs.anterior.removeEventListener('click', this.handleClickAnterior);
            this.$refs.posterior.removeEventListener('click', this.handleClickPosterior);
        },
        activateClickListenerAnterior() {
            this.$refs.anterior.addEventListener('click', this.handleClickAnterior);
        }
    },
    mounted() {
        this.fetchPokemonGrid(this.pokemonInPage);
    },
    beforeRouteLeave(to, from, next) {
        if (this.isLoading) {
            this.isLoading = false;
        }
        next();
    }
};
</script>