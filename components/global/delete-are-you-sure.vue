<template>
    <div>
      <b-button :id="id" variant="danger">
        <b-icon-trash-fill />
      </b-button>
      <b-popover :target="id" triggers="hover" placement="top" ref="popover">
        <template #title>Est-tu sur de toi ?</template>
        <b-btn-group>
            <b-button variant="success" @click="validate">Oui</b-button>
            <b-button variant="danger" @click="closePopover">Non</b-button>
        </b-btn-group>
      </b-popover>
    </div>
</template>
<script>

export default {
  name: '',
  props: {
    id: {
      type: String,
      required: true
    },
  },
  methods: {
    validate() {
      this.$emit('sure');
      this.$refs.popover.doClose();
    },
    closePopover() {
      this.$refs.popover.doClose();
    }
  }
}
</script>
