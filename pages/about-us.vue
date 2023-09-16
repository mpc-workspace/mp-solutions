<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24 bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center mx-auto text-center">
            <h2 class="max-w-2xl mx-auto text-2xl font-bold tracking-tight text-gray-800 xl:text-4xl" data-aos="fade-up" data-aos-duration="100">
                Bring your Business to the <span class="text-gradient">next level.</span>
            </h2>

            <p class="max-w-4xl mt-6 text-center text-base text-gray-500" data-aos="fade-up" data-aos-duration="200">
                JEM Solutions is a forward-thinking technology company dedicated to providing innovative solutions to meet the ever-evolving needs of businesses and individuals. With a strong focus on creativity, efficiency, and reliability, we strive to deliver top-notch services and products across a range of industries.
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metaTitle = ref('About Us')
    const metaDescription = ref('We’re a group of passionate individuals that love a challenge.')

    useSeoMeta({
        title: metaTitle,
        ogTitle: metaTitle,
        description: metaDescription,
        ogDescription: metaDescription,
    })
</script>

<style lang="scss" scoped>

</style>