<template>
  <header class="header">
    <div class="header-content">
      <v-form-autocomplete :callback="hints"/>
    </div>
  </header>
</template>

<script>
import ApiTracks from '@/api/tracks';
import VFormAutocomplete from '@/components/form/v-form-autocomplete';

export default {
  components: {
    VFormAutocomplete,
  },
  methods: {
    ...ApiTracks.lastfm,
  }
}
</script>

<style lang="scss">
.header {
  height: 46px;
  width: 100%;
  background-color: #333;

  &-content {
    width: 70%;
    margin: auto;
  }
}
</style>