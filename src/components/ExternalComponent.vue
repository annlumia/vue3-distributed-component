<template>
  <div class="external-component-container">
    <AsyncComp />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import externalComponent from "../utils/external-component";

const AsyncComp = defineAsyncComponent(() =>
  externalComponent(`/external-component/vue3-other-part.umd.js`)
);
</script>
