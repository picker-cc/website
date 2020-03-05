<template>
  <validation-provider
    ref="messageForm"
    v-slot="{ errors }"
    rules="required|max:400"
    name="必填内容"
  >
    <input
      v-model="message"
      type="text"
    />
    <span v-if="errors.length" v-for="(error, i) in errors" :key="`errors${i}`">
        {{ error }}
    </span>
  </validation-provider>
</template>

<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import { ValidationProvider } from 'vee-validate';
  @Component({
    components: {
      ValidationProvider
    }
  })
  export default class Register extends Vue {
  }
</script>
