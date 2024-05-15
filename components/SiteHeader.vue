<script setup lang="ts">
const { items } = useCart();
</script>
<template>
  <div class="top">
    <div class="il-01">
      <img src="@/assets/img/react.svg" alt="react" />
    </div>
    <header class="site-header">
      <div class="site-header__menus">
        <NuxtLink to="/">
          <div class="site-logo">
            <NuxtImg
              provider="assetsProvider"
              src="/logo.svg"
              sizes="200vw sm:50vw md:200vw"
            />
          </div>
        </NuxtLink>

        <nav class="site-nav">
          <ul class="site-nav__list">
            <li class="site-nav__item">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="site-nav__item">
              <NuxtLink to="/">Category</NuxtLink>
            </li>
            <li class="site-nav__item">
              <NuxtLink to="/">About</NuxtLink>
            </li>
            <li class="site-nav__item">
              <NuxtLink to="/products">Contact</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="site-header__actions">
        <div class="site-header__actions__search">
          <NuxtImg
            provider="assetsProvider"
            src="/search.svg"
            class="site-header__actions__search__icon"
          />
          <input
            type="text"
            placeholder="Search something here!"
            class="site-header__actions__search--input"
          />
        </div>

        <NuxtLink class="site-header__actions__join"
          >Join the community</NuxtLink
        >

        <div class="site-header__actions__lang">
          <div class="lang-label">
            <img src="@/assets/img/vnd.svg" alt="vietnam" />
            <span class="lang-label__text">VND</span>
          </div>
          <img src="@/assets/img/chevron-up.svg" alt="chevron" />
        </div>
      </div>
    </header>

    <section class="site-section">
      <div class="site-section__left">
        <div class="site-section__left__wrap">
          <img
            class="rectangle-3"
            src="@/assets/img/rectangle-3.svg"
            alt="rectangle-3"
            srcset=""
          />
          <h1>One more friend</h1>
        </div>
        <h5>Thousands more fun!</h5>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div class="site-section__left__actions">
          <NuxtLink
            class="site-section__left__actions__btn site-section__left__actions__btn--intro"
            >View Intro
            <img
              class="play-circle"
              src="@/assets/img/play-circle.png"
              alt="play-circle"
            />
          </NuxtLink>

          <NuxtLink
            class="site-section__left__actions__btn site-section__left__actions__btn--explore"
            >Explore Now</NuxtLink
          >
        </div>
      </div>
      <div class="site-section__right">
        <img src="@/assets/img/illustration/img-1.png" alt="illustration-01" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_colors.scss";
@import "@/assets/scss/_fonts.scss";

.top {
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  border-radius: 0 0 40px 40px;
  min-height: 695px;
  position: relative;
  background-repeat: no-repeat;
}

.il-01 {
  position: absolute;
  top: -41rem;
  left: -23rem;
  z-index: 0;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 63px;

  max-height: 100px;
  position: sticky;
  padding: 28px 80px;
  max-width: 1440px;
  margin: 0 auto;

  &__menus {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 48px;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 14px;

    &__search {
      border-radius: 46px;
      padding: 12px 20px 12px 16px;
      max-width: 280px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: $color-00;
      gap: 12px;

      &__icon {
        width: 20px;
        height: 20px;
      }

      &--input {
        border: none;
        outline: none;
        font-family: $SVN-Gilroy-Light;
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        min-width: 153px;
        color: $color-100;

        &::placeholder {
          color: $color-40;
        }
      }
    }
    &__join {
      border-radius: 57px;
      padding: 10px 28px;
      width: 203px;
      height: 44px;
      background: $dark-blue;

      font-family: $SVN-Gilroy-Bold;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: $color-00;

      &:hover {
        cursor: pointer;
      }
    }

    &__lang {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 4px;
      cursor: pointer;

      .lang-label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 6px;

        &__text {
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 16px;
          line-height: 144%;
          color: var(--primary-color-dark-blue-80);
        }
      }
    }
  }
}

.site-logo {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-nav {
  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 32px;
  }

  &__item {
    text-decoration: none;
    list-style: none !important;
    a {
      font-family: $SVN-Gilroy-Bold;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: $dark-blue;
    }
  }
}

.site-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  &__left {
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: center;

    &__wrap {
      position: relative;
      .rectangle-3 {
        position: absolute;
        z-index: 0;
        width: 80px;
        bottom: 1px;
        left: -9px;
      }

      h1 {
        font-family: $SVN-Gilroy-Bold;
        font-weight: 800;
        font-size: 60px;
        line-height: 113%;
        text-transform: capitalize;
        color: $dark-blue-80;
        position: relative;
        z-index: 1;
      }
    }

    h5 {
      font-family: $SVN-Gilroy-Bold;
      font-weight: 700;
      font-size: 46px;
      line-height: 130%;
      text-transform: capitalize;
      color: $dark-blue-80;
    }

    p {
      font-family: $SVN-Gilroy-Light;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: $color-80;
      margin-bottom: 24px;
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

  &__right {
    img {
      width: 45rem;
      position: relative;
      bottom: -110px;
    }
  }
}
</style>