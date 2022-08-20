<template>
    <table>
        <thead>
            <tr>
                <td>Nom</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="game in games" :key="game.id">
                <td>{{game.name}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        props: [
            'games'
        ]
    }
</script>