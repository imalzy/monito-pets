<script setup lang="ts">
defineProps({
  product: {
    type: Object as PropType<any>,
    required: true,
  },
  promo: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  cardType: {
    type: String as PropType<string>, // pets or products
    default: "",
  },
});
</script>
<template>
  <article class="product-card">
    <div class="product-card__image">
      <img :src="`${product.thumbnail}`" :alt="product.title" />
    </div>

    <div class="product-card__content">
      <div class="product-card__content__wrapper">
        <h2
          class="product-card__content__wrapper__font-700 product-card__content__wrapper__title"
        >
          {{ product.petId ? product.petId + " - " : "" }} {{ product.title }}
        </h2>
        <div class="product-card__content__wrapper__description">
          <ProductDetail
            :cardType="cardType"
            :value1="product.value1"
            :value2="product.value1"
          />
        </div>
        <span
          class="product-card__content__wrapper__font-700 product-card__content__wrapper__price"
          >{{ formatPrice(product.price) }}</span
        >
      </div>

      <div class="product-card__content__promo" v-if="promo">
        <img src="@/assets/img/gift.svg" alt="gift" srcset="" />
        <span class="spacer">&#x2022;</span>
        <p>Free Toy & Free Shaker</p>
      </div>
    </div>
  </article>
</template>
<style lang="scss">
@import "@/assets/scss/_colors.scss";
@import "@/assets/scss/_fonts.scss";

.product-card {
  border-radius: 12px;
  padding: 8px;

  box-shadow: 0 4px 28px -2px rgba(0, 0, 0, 0.08);
  background: $color-00;

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    max-width: 264px;
    min-height: 264px;
    max-height: 264px;
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

    &__wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 4px;

      width: 100%;
      max-height: 90px;

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
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        gap: 4px;

        p {
          font-family: $SVN-Gilroy-Light;
          font-weight: 500;
          font-size: 12px;
          line-height: 150%;
          color: $color-60;
        }

        span {
          font-family: $SVN-Gilroy-Bold;
          font-weight: 700;
          font-size: 12px;
          line-height: 150%;
          color: $color-60;
        }

        .spacer {
          margin: 0px 4px;
        }
      }

      &__price {
        font-size: 14px;
        line-height: 143%;
      }
    }

    &__promo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 2px;

      border-radius: 8px;
      padding: 6px 10px 4px 10px;
      width: 100%;
      height: 34px;

      background: $mon-yellow-40;
      p {
        font-family: $SVN-Gilroy-Bold;
        font-weight: 700;
        font-size: 14px;
        line-height: 143%;
        color: $dark-blue-80;
      }
    }
  }
}
</style>