<template>
    <div class="modal fade" :class="{show : show}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{spell.name}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close"></button>
                </div>
                <div class="modal-body">
                    <strong>Incantation : </strong> {{spell.incantation}}<br>
                    <strong>Durée : </strong> {{spell.duration}}<br>
                    <strong>Composantes : </strong> {{spell.composantes}}
                    <p>{{spell.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'spell', 'show'
    ], 
    methods: {
        close() {
            this.$emit("close")
        }
    }
}
</script>