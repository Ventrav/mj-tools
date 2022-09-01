<template>
    <div class="flex flex-row">
        <b-btn class="btn-minus" @click="decrease">
            <b-icon-dash-circle/>
        </b-btn>
        <input type="number" class="no-radius-border" v-model="increment">
        <b-btn class="btn-plus" @click="increase">
            <b-icon-plus-circle/>
        </b-btn>
    </div>
</template>
<script>
export default {
    props: {
        incrementProp: {
            default: 1,
            type: Number
        },
        maxProp: {
            default: 99,
            type: Number
        },
        minProp: {
            default: 0,
            type: Number
        },
        stepProp: {
            default: 1,
            type: Number
        },
    },
    data()  {
        return {
            increment: this.incrementProp,
            max: this.maxProp,
            min: this.minProp,
            step: this.stepProp
        }
    },
    methods: {
        increase() {
            if(this.nextValue <= this.max)
                this.increment+=this.step
            else if(this.increment < this.max)
                this.increment += (this.max - this.increment)
        },
        decrease() {
            if(this.previousValue >= this.min)
                this.increment-=this.step
            else if(this.increment > this.min)
                this.increment -= (this.increment - this.min)
        }
    },
    computed: {
        isMaxed() {
            return this.incrementValue === this.max
        },
        isMined() {
            return this.incrementValue === this.min
        },
        nextValue() {
            let currentIncrement = this.increment
            return currentIncrement+=this.step
        },
        previousValue() {
            let currentIncrement = this.increment
            return currentIncrement-=this.step
        }
    }
}
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