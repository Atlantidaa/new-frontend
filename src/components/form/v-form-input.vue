<template>
  <div class="form-input-container">
    <input
        class="form-input"
        :type="type"
        v-model="myValue"
        autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {

  },
  computed: {
    myValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
      }
    }
  }
}
</script>

<style lang="scss">
.form-input {
  width: 100%;
  padding: 5px 7px;
  outline: 0;
  background-color: #e5e5e5;
  border: 0;
  border-radius: 4px;

  &:focus {
    background-color: #fff;
    transition: background-color .3s ease;
  }

  &-container {
    position: relative;
    width: 100%;
  }
}
</style>