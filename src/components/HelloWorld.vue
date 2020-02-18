<template>
  <v-container>{{ msg }}</v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({})
export default class HelloWorld extends Vue {
  @Prop({ default: 'Hey Man!' })
  public msg!: string;
}
</script>
