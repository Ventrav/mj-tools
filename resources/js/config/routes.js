import Acceuil from '../components/Index.vue';
import Profile from '../components/Profile.vue';
import GameBuilderIndex from '../components/GameBuilder/Index.vue';


export const routes = [
    { path: '/', component: Acceuil },
    { path: '/profile', component: Profile },
    { path: '/game-builder', component: GameBuilderIndex },


]