<template>
    <div class="flex flex-row">
        <b-btn class="btn-minus" @click="decrease">
            <b-icon-dash-circle/>
        </b-btn>
        <input
            type="number"
            class="no-radius-border"
            :value="value"
            @input="updateIncrement"
        >
        <b-btn class="btn-plus" @click="increase">
            <b-icon-plus-circle/>
        </b-btn>
    </div>
</template>
<script>
export default {
  props: ['value'],
  data() {
    return {
      max: (this.maxProp) ? this.maxProp : 99,
      min: (this.minProp) ? this.minProp : 1,
      step: (this.stepProp) ? this.stepProp : 1,
    };
  },
  methods: {
    increase() {
      let increment = ~~this.value;
      if (this.nextValue <= this.max) { increment += this.step; } else if (increment < this.max) {
        increment += (this.max - increment);
        this.$emit('input', increment);
      }
    },
    decrease() {
      let increment = parseInt(this.value);
      if (this.previousValue >= this.min) { increment -= this.step; }
      else if (increment > this.min) {
        increment -= (increment - this.min);
        this.$emit('input', increment);
      }
    },
    updateIncrement(e) {
      this.$emit('input', e.target.value);
    },
  },
  computed: {
    isMaxed() {
      return ~~this.value === this.max;
    },
    isMined() {
      return ~~this.value === this.min;
    },
    nextValue() {
      let currentIncrement = ~~this.value;
      return currentIncrement += this.step;
    },
    previousValue() {
      let currentIncrement = ~~this.value;
      return currentIncrement -= this.step;
    },
  },
};
</script>
<style scoped>
.no-radius-border {
    border-radius: 0 !important;
}

.btn-minus {
    border-radius: 10px 0 0 10px !important;
    background-color: gray;
    border: none;
}

.btn-plus {
    border-radius: 0 10px 10px 0 !important;
    background-color: gray;
    border: none;
}
input {
    border: 1px solid gray;
    text-align: center;
}
</style>
