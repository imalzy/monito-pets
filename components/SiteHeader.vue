<script setup lang="ts">
const toggle = ref<boolean>(false);
</script>
<template>
  <aside class="sidebar" :class="toggle ? 'sidebar__show' : 'sidebar__hide'">
    <div class="sidebar__head">
      <NuxtLink to="/">
        <div class="sidebar__head__logo">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </div>
      </NuxtLink>
      <label for="toggle" class="exit">X</label>
    </div>
    <div class="sidebar__menu">
      <nav class="sidebar__menu__nav">
        <ul class="sidebar__menu__nav__list">
          <li class="sidebar__menu__nav__item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="sidebar__menu__nav__item">
            <NuxtLink to="/">Category</NuxtLink>
          </li>
          <li class="sidebar__menu__nav__item">
            <NuxtLink to="/">About</NuxtLink>
          </li>
          <li class="sidebar__menu__nav__item">
            <NuxtLink to="/">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="sidebar__action">
      <div class="sidebar__action__search">
        <NuxtImg
          provider="assetsProvider"
          src="/search.svg"
          class="sidebar__action__search__icon"
        />
        <input
          type="text"
          placeholder="Search something here!"
          class="sidebar__action__search--input"
        />
      </div>

      <NuxtLink class="sidebar__action__join"></NuxtLink>

      <div class="sidebar__action__lang">
        <div class="lang-label">
          <img src="@/assets/img/vnd.svg" alt="vietnam" />
          <span class="lang-label__text">VND</span>
        </div>
        <img src="@/assets/img/chevron-up.svg" alt="chevron" />
      </div>
    </div>
  </aside>
  <div class="top">
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
              <NuxtLink to="/">Contact</NuxtLink>
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

        <NuxtLink class="site-header__actions__join"></NuxtLink>

        <div class="site-header__actions__lang">
          <div class="lang-label">
            <img src="@/assets/img/vnd.svg" alt="vietnam" />
            <span class="lang-label__text">VND</span>
          </div>
          <img src="@/assets/img/chevron-up.svg" alt="chevron" />
        </div>
      </div>
    </header>

    <header class="site-xs-header">
      <input id="toggle" type="checkbox" v-model="toggle" hidden />
      <label for="toggle" style="cursor: pointer">
        <div class="site-xs-header__menu">
          <img src="@/assets/img/menu.svg" alt="menu" />
        </div>
      </label>
      <div class="site-xs-header__logo">
        <img src="@/assets/img/logo.svg" alt="logo" />
      </div>
      <div class="site-xs-header__search">
        <img src="@/assets/img/search-menu.svg" alt="search-menu" />
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
@import "@/assets/scss/_media_when_min_width";

.top {
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  border-radius: 0 0 40px 40px;
  height: 695px;
  position: relative;
  background-repeat: no-repeat;
  padding: 0 24px;

  @include when-min-width(xs) {
    height: 794px;
  }
  @include when-min-width(lg) {
    height: 695px;
  }
}

.sidebar {
  position: absolute;
  width: 100%;
  height: fit-content;
  z-index: 2;
  transition: top 0.5s ease-in-out;
  padding: 16px 24px;

  background: #fff;
  outline: none;
  border: none;
  box-shadow: none;

  &__show {
    top: 0%;
  }

  &__hide {
    top: -100%;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__menu {
    &__nav {
      &__list {
        list-style: none;
      }

      &__item {
        padding: 16px 5px;
        font-size: 16px;
        border-bottom: 1px solid $mon-yellow-80;
        color: $dark-blue !important;

        &:hover {
          background: $mon-yellow-80;
          cursor: pointer;
        }
      }
    }
  }

  &__action {
    margin-top: 24px;

    &__search {
      display: flex;
      background: transparent;
      padding: 10px;
      border: 1px solid #f7dba7;
      align-items: center;

      &--input {
        font-size: 16px;
        padding: 10px;
        width: 90%;
        border: none;
        outline: none;
      }

      img {
        width: 24px;
      }
    }

    &__lang {
      display: flex;
      justify-content: space-between;
      margin-top: 14px;

      .lang-label {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        img {
          width: 16px;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}

header.site-header::before {
  content: "";
  position: absolute;
  width: 123%;
  height: 165%;
  top: 0px;
  left: -92%;
  z-index: -1;
  background: url("/_nuxt/assets/img/react.svg") 0 0 no-repeat;
  transform: rotate(176deg);
}

.site-xs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-height: 100px;
  position: sticky;
  padding: 16px 8px;
  margin: 0 auto;

  @include when-min-width(xs) {
    display: flex;
    visibility: unset;
  }

  @include when-min-width(lg) {
    display: none;
    visibility: hidden;
  }

  &__menu {
    width: 33px;
    img {
      width: 100%;
    }
  }
  &__logo {
    width: 92px;
    img {
      width: 100%;
    }
  }
  &__search {
    width: 23px;
    img {
      width: 100%;
    }
  }
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 63px;

  max-height: 100px;
  position: sticky;
  padding: 28px 0px;
  max-width: 1440px;
  margin: 0 auto;

  @include when-min-width(xs) {
    display: none;
    visibility: hidden;
  }

  @include when-min-width(lg) {
    display: flex;
    visibility: unset;
  }

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
      max-width: 203px;
      height: 44px;
      background: $dark-blue;

      font-family: $SVN-Gilroy-Bold;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: $color-00;

      @include when-min-width(md) {
        &::before {
          content: "Join";
        }
      }

      @include when-min-width(mdl) {
        &::before {
          content: "Join the community";
        }
      }

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
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  height: 100%;

  @include when-min-width(xs) {
    flex-direction: column;
  }

  @include when-min-width(lg) {
    flex-direction: row;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: center;

    @include when-min-width(xs) {
      margin-top: 60px;
    }

    @include when-min-width(lg) {
      margin-top: 24px;
    }

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

        @include when-min-width(xs) {
          font-size: 43px;
          margin-top: 16px;
        }

        @include when-min-width(lg) {
          font-size: 60px;
        }
      }
    }

    h5 {
      font-family: $SVN-Gilroy-Bold;
      font-weight: 700;
      font-size: 46px;
      line-height: 130%;
      text-transform: capitalize;
      color: $dark-blue-80;

      @include when-min-width(xs) {
        font-size: 28px;
      }

      @include when-min-width(lg) {
        font-size: 46px;
      }
    }

    p {
      font-family: $SVN-Gilroy-Light;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: $color-80;
      margin-bottom: 24px;
      text-align: justify;
      @include when-min-width(xs) {
        font-size: 12px;
      }

      @include when-min-width(lg) {
        font-size: 16px;
      }
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
    position: relative;
    bottom: 0;

    @include when-min-width(xs) {
      position: absolute;
      bottom: 0;
    }

    @include when-min-width(lg) {
      position: relative;
      bottom: 0;
    }

    img {
      width: 46rem;

      @include when-min-width(xs) {
        width: 24rem;
      }

      @include when-min-width(lg) {
        width: 46rem;
      }
    }
  }
}
</style>