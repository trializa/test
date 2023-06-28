
<script setup>
import { ref } from 'vue'

/* definePageMeta({
    middleware: ["trailing"]
    // or middleware: 'auth'
  }) */

const {
  params: { slug },
} = useRoute()

console.log('slug',slug)
const { data: content } = await useAsyncData('content',
  () => queryContent('art','en')
    .where({  _path: { $contains: slug.replace(/\/art/g, '') } })

    .findOne()
) 


/* const { $lsm_content } = useNuxtApp()


const aa = await $lsm_content('/en',slug)
 */

</script>

<template>

<div class="text-center py-10">
  <pre>slug {{slug}}</pre>
 <pre>slug string: {{slug}}</pre>
  <!-- <pre>{{content}}</pre> -->
  <div class="hy-20 my-20"></div>
  <img :src="content.img"  class="px-20 text-center hehe overflow-hidden lg:max-w-500 lg:min-w-300 hy-20"/>
  
    <ContentRenderer :value="content">
  <template #empty>
    <p>No content found.</p>
  </template>
</ContentRenderer>
</div>



</template>

<style>
.hehe{text-align: center;margin:auto;}
</style>