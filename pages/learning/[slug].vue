
<script setup>
import { ref } from 'vue'



const {
  params: { slug }
} = useRoute()

console.log(slug,'this is slug')
const { data: content } = await useAsyncData('content',
  () => queryContent('art','learning')
    .where({  _path: { $contains: slug.replace(/\/art/g, '') } })

    .findOne()
) 


/* const { $lsm_content } = useNuxtApp()


const aa = await $lsm_content('learning',slug)

 */
</script>

<template>

<div class="text-center py-10">

<pre>slug string: {{slug}}</pre>
<!--   <pre>{{slug}}</pre> 
  <pre>{{aa}}</pre>  -->
  
  <div class="hy-20 my-20"></div>
  <img :src="content.img"  class="px-20 text-center hehe overflow-hidden lg:max-w-500 lg:min-w-300 hy-20"/>
  
    <ContentRenderer :value="content">
      
  <template #empty>
    <p>No content found.</p>
  </template>
</ContentRenderer>

<!-- 
<ContentDoc v-slot="aa">
      <h1>{{ aa.title }}</h1>
      <ContentRenderer :value="aa" />
    </ContentDoc> -->

</div>



</template>

<style>
.hehe{text-align: center;margin:auto;}
</style>