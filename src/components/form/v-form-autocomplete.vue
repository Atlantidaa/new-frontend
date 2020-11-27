<template>
  <div class="form-autocomplete-container" v-click-outside="hide">
    <form>
      <v-form-input
          type="search"
          :value="value"
          @update:value="get"
      />
      <div class="form-autocomplete-hints-container" v-if="hints.showing">
        <div
            class="form-autocomplete-hint"
            v-for="hint in hints.data"
        >
          {{hint}}
        </div>
      </div>
      <input type="submit" value="go" @click.prevent="get" />
    </form>
  </div>
</template>

<script>
import VFormInput from '@/components/form/v-form-input';
import VClickOutside from 'v-click-outside';

export default {
  directives: {
    clickOutside: VClickOutside.directive,
  },
  props: {
    callback: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      hints: {
        showing: false,
        data: {},
        date: 0,
      },
      value: '',
    }
  },
  components: {
    VFormInput,
  },
  methods: {
    get: async function(value) {
      this.value = value;
      const date = Date.now();
      this.hints.date = date;

      this.hints.showing = true;
      if (this.hints.date === date) {
        const hints = await this.callback({query: this.value});
        this.hints.data = hints.data.message;
      }
    },
    hide() {
      this.hints.showing = false;
    }
  }
}
</script>

<style lang="scss">
.form-autocomplete {
  &-container {
    position: relative;
    width: 100%;
  }

  &-hint {
    padding: 5px 7px;
  }

  &-hints {
    &-container {
      position: absolute;
      overflow: auto;
      height: 300px;
      width: 100%;
      top: 46px;
      background-color: red;
    }
  }
}
</style>