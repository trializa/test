<script setup>
const { data: content } = await useAsyncData('content',  
  () => queryContent('art','learning') 

    .find()
)



</script>


<template><h1 class="m-auto text-center text-xl text-red-600 py-5"></h1>
<div style="margin:auto;">
  <div class="my-20 grid justify-center md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 lg:gap-12">
    <div class="no-underline text-center shadow-md hover:shadow-lg rounded-lg px-6 py-6 ma-6" v-for="i in content" :key="i._path" style = "flex-basis:50%;">
      <NuxtLink :to="i._path.toString().replace(/\/art/g, '')">
        <img :src = "i.img" class="rounded-lg object-cover haity w-full h-full">{{i.title}}</NuxtLink>
    </div>
  </div>
</div>
<!-- <div>{{content}}</div> -->


</template>

<style>
.haity{
  min-height: 200px;
}

h1{{font-size:100px !important;}}
</style>