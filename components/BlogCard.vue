<script setup lang="ts">
defineProps({
  blog: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>
<template>
  <article class="blog-card">
    <div class="blog-card__image">
      <img :src="`${blog.thumbnail}`" :alt="blog.title" />
    </div>

    <div class="blog-card__content">
      <div class="blog-card__content__label">
        {{ blog.label }}
      </div>
      <div class="blog-card__content__wrapper">
        <h2
          class="blog-card__content__wrapper__font-700 blog-card__content__wrapper__title"
        >
          {{ blog.title }}
        </h2>
        <div class="blog-card__content__wrapper__description">
          {{ blog.desc }}
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="scss">
@import "@/assets/scss/_colors.scss";
@import "@/assets/scss/_fonts.scss";

.blog-card {
  border-radius: 12px;
  padding: 8px;

  box-shadow: 0 4px 28px -2px rgba(0, 0, 0, 0.08);
  background: $color-00;

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    width: 100%;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 105%;
      height: 100%;
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
    padding: 8px 8px 20px 8px;

    &__label {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
      gap: 10px;
      border-radius: 28px;
      padding: 2px 10px;
      width: 89px;
      height: 20px;
      font-family: $SVN-Gilroy-Bold;
      font-weight: 700;
      font-size: 10px;
      line-height: 160%;
      color: $color-00;

      background: $blue-sea;
    }

    &__wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 4px;

      width: 100%;

      &__font-700 {
        font-family: $SVN-Gilroy-Bold;
        font-weight: 700;
        color: $color-100;
      }
      &__title {
        font-size: 16px;
        line-height: 150%;
      }

      &__description {
        font-family: $SVN-Gilroy-Light;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        color: $color-80;
      }
    }
  }
}
</style>