

async function content_asyncData_wrapper(cate,slug){
    const catery = cate
    const sluggy = slug
    const { data: lsmcontent } = await useAsyncData('content',
    () => queryContent(catery)
        .where({  _path: { $contains: sluggy } })

        .findOne()
    )
    return lsmcontent//.value[0]
}

export default defineNuxtPlugin(async nuxtApp => {

    nuxtApp.provide('lsm_content', async (cate,slug) =>{return await content_asyncData_wrapper(cate,slug)})


})