import Acceuil from '../components/Index.vue';
import Profile from '../components/Profile.vue';
import GameBuilderIndex from '../components/GameBuilder/Index.vue';
import GameIndex from '../components/Game/Index.vue';
import CharacterSheetIndex from '../components/Game/CharacterSheet/Index.vue'
import CharacterSheetBuilder from '../components/Game/CharacterSheet/Builder.vue'


export const routes = [
    { path: '/', component: Acceuil },
    { path: '/profile', component: Profile },
    { path: '/game-builder', component: GameBuilderIndex },
    { path: '/game', component: GameIndex },
    { path: '/character-sheet/:id', component: CharacterSheetIndex,name:"character-sheet-index", props:true },
    { path: '/character-sheet/:id/builder', component: CharacterSheetBuilder,name:"character-sheet-builder", props:true },
]