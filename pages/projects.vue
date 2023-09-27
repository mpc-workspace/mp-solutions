<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24">
        <div class="container">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4" data-aos="fade-up">
                <Products></Products>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metaTitle = ref('Our Projects')
    const metaDescription = ref('Providing you with systems to process industry relevant data')

    useSeoMeta({
        title: metaTitle,
        ogTitle: metaTitle,
        description: metaDescription,
        ogDescription: metaDescription,
    })
</script>

<style lang="scss" scoped>

</style>