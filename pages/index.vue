<script setup lang="ts">
import { Pets, Products, Sellers, Blogs } from "@/mock/index";
const pets = ref(Pets);
const products = ref(Products);
const sellers = ref(Sellers);
const blogs = ref(Blogs);
</script>
<template>
  <section class="product-section">
    <div class="product-section__head">
      <h5><span>Whats new?</span> <br />Take a look at some of our pets</h5>

      <NuxtLink class="product-section__head__btn">
        View more
        <img
          class="chervron-right"
          src="@/assets/img/chevron-up.svg"
          alt="play-circle"
        />
      </NuxtLink>
    </div>

    <ul class="product-list">
      <li v-for="pet in pets" :key="pet.id" class="product-list__item">
        <ProductCard :product="pet" :promo="false" :cardType="'pets'">
        </ProductCard>
      </li>
    </ul>
  </section>
  <!-- BANNER 1 -->
  <div class="banner">
    <div class="banner-section banner-section--banner1">
      <div style="flex: 1 1 50%"></div>
      <div class="banner-section__content banner-section__content--first">
        <h1>One more friend</h1>
        <h5>Thousands more fun!</h5>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div class="banner-section__actions">
          <NuxtLink
            class="banner-section__actions__btn banner-section__actions__btn--intro"
            >View Intro
            <img
              class="play-circle"
              src="@/assets/img/play-circle.png"
              alt="play-circle"
            />
          </NuxtLink>

          <NuxtLink
            class="banner-section__actions__btn banner-section__actions__btn--explore"
            >Explore Now</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
  <section class="product-section">
    <div class="product-section__head">
      <h5>
        <span> Hard to choose right products for your pets?</span> <br />Our
        Products
      </h5>

      <NuxtLink class="product-section__head__btn">
        View more
        <img
          class="chervron-right"
          src="@/assets/img/chevron-up.svg"
          alt="play-circle"
        />
      </NuxtLink>
    </div>

    <ul class="product-list">
      <li
        v-for="product in products"
        :key="product.id"
        class="product-list__item"
      >
        <ProductCard :product="product" :promo="true" :cardType="'products'">
        </ProductCard>
      </li>
    </ul>
  </section>

  <section class="product-section">
    <div class="product-section__head">
      <h5><span> Proud to be part of</span> Pet Sellers</h5>

      <NuxtLink class="product-section__head__btn" style="width: 201px">
        View all our sellers
        <img
          class="chervron-right"
          src="@/assets/img/chevron-up.svg"
          alt="play-circle"
        />
      </NuxtLink>
    </div>

    <ul class="product-section__seller">
      <li
        v-for="seller in sellers"
        :key="seller.id"
        class="product-section__seller__item"
      >
        <img :src="seller.thumbnail" :alt="seller.id" width="120" />
      </li>
    </ul>
  </section>
  <div class="banner">
    <div class="banner-section banner-section--banner2">
      <div class="banner-section__content banner-section__content--second">
        <div class="banner-section__content__title">
          <h1>Adoption</h1>
          <img src="@/assets/img/foot.svg" alt="foot" width="35" />
        </div>
        <h5>We need help. so do they.</h5>
        <p style="text-align: left">
          Adopt a pet and give it a home, <br />
          it will be love you back unconditionally.
        </p>
        <div class="banner-section__actions">
          <NuxtLink
            class="banner-section__actions__btn banner-section__actions__btn--intro"
            >View Intro
            <img
              class="play-circle"
              src="@/assets/img/play-circle.png"
              alt="play-circle"
            />
          </NuxtLink>

          <NuxtLink
            class="banner-section__actions__btn banner-section__actions__btn--explore"
            >Explore Now</NuxtLink
          >
        </div>
      </div>
      <div style="flex: 1 1 50%"></div>
    </div>
  </div>

  <section class="product-section">
    <div class="product-section__head">
      <h5><span> You already know ?</span> <br />Useful pet knowledge</h5>

      <NuxtLink class="product-section__head__btn">
        View more
        <img
          class="chervron-right"
          src="@/assets/img/chevron-up.svg"
          alt="play-circle"
        />
      </NuxtLink>
    </div>

    <ul class="blog-list">
      <li v-for="blog in blogs" :key="blog.id" class="blog-list__item">
        <BlogCard :blog="blog"> </BlogCard>
      </li>
    </ul>
  </section>

  <Footer></Footer>
</template>

<style lang="scss">
@import "@/assets/scss/_colors.scss";
@import "@/assets/scss/_fonts.scss";
@import "@/assets/scss/_media_when_min_width";
.product-section {
  padding: 2vh 24px;
  max-width: 1440px;
  margin: 0 auto;

  &__seller {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  &__head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;

    .chervron-right {
      transform: rotate(270deg);
      width: 24px;
    }
    h5 {
      font-family: $SVN-Gilroy-Bold;
      font-weight: 700;
      font-size: 24px;
      line-height: 150%;
      text-transform: capitalize;
      color: $dark-blue;
    }

    span {
      font-family: $SVN-Gilroy-Light;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #000;
    }

    &__btn {
      display: flex;
      justify-content: space-between;
      align-items: center;

      border: 1.5px solid $dark-blue;
      border-radius: 57px;
      padding: 12px 28px;
      width: 151px;
      height: 44px;

      font-family: $SVN-Gilroy-Light;
      font-weight: 500;
      font-size: 14px;
      line-height: 143%;
      color: $dark-blue;
    }
  }
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;

  &__item {
    list-style: none;
    flex: 1 1 0%;
    padding: 20px;
    cursor: pointer;
    max-width: 25%;
    min-width: 25%;

    @include when-min-width(xs) {
      max-width: 100%;
      min-width: 100%;
    }

    @include when-min-width(sm) {
      max-width: 33.3%;
      min-width: 33.3%;
    }

    @include when-min-width(mdl) {
      max-width: 25%;
      min-width: 25%;
    }
  }
}
.banner {
  padding: 2vh 24px;
  max-width: 1440px;
  margin: 0 auto;
  .banner-section {
    border-radius: 20px;
    padding: 60px;
    height: 378px;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 auto;

    &__content {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      &--first {
        align-items: flex-end;
      }

      &--first {
        align-items: flex-start;
      }

      &__title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 8px;
      }
      h1 {
        font-family: $SVN-Gilroy-Bold;
        font-weight: 800;
        font-size: 52px;
        text-transform: capitalize;
        color: $dark-blue;
      }

      h5 {
        font-family: $SVN-Gilroy-Bold;
        font-weight: 700;
        font-size: 36px;
        text-transform: capitalize;
        color: $dark-blue;
      }

      p {
        font-family: $SVN-Gilroy-Light;
        font-weight: 500;
        font-size: 12px;
        text-align: right;
        color: $color-80;
      }
    }

    &--banner1 {
      background-image: url(@/assets/img/illustration/Banner.jpg);
      display: flex;
      gap: 100px;
      align-items: center;
      justify-content: space-between;
    }
    &--banner2 {
      background-image: url(@/assets/img/illustration/Banner2.jpg);
      display: flex;
      gap: 100px;
      align-items: center;
      justify-content: space-between;
    }

    &__actions {
      display: flex;
      gap: 10px;
      align-items: center;

      &__btn {
        border-radius: 57px;
        padding: 14px 28px 10px 28px;
        width: 163px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
        cursor: pointer;
        font-family: $SVN-Gilroy-Light;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;

        &--intro {
          border: 1.5px solid $dark-blue;
          color: $dark-blue;

          .play-circle {
            width: 20px;
          }
        }

        &--explore {
          border: 1.5px solid $dark-blue;
          background: $dark-blue;
          color: $color-00;
        }
      }
    }
  }
}

.blog-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;

  &__item {
    list-style: none;
    flex: 1 1 0%;
    padding: 20px;
    cursor: pointer;

    @include when-min-width(xs) {
      max-width: 100%;
      min-width: 100%;
    }

    @include when-min-width(sm) {
      max-width: 50%;
      min-width: 50%;
    }

    @include when-min-width(mdl) {
      max-width: 33.3%;
      min-width: 33.3%;
    }
  }
}
</style>