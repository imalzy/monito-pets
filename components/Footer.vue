<script setup lang="ts">
</script>
<template>
  <footer>
    <section class="footer-section">
      <div class="footer-section__action">
        <div class="footer-section__action__subscribe">
          <h2>Register now so you don't miss our programs</h2>
          <div class="footer-section__action__box">
            <input
              class="footer-section__action__box__input"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
            <button class="footer-section__action__box__btn" type="button">
              Subscribe Now
            </button>
          </div>
        </div>
        <div class="footer-section__action__social">
          <ul class="footer-section__action__social__list">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <ul class="footer-section__action__social__icon">
            <li>
              <img src="@/assets/img/fb.svg" alt="facebook" height="24" />
            </li>
            <li>
              <img src="@/assets/img/twitter.svg" alt="facebook" height="24" />
            </li>
            <li>
              <img src="@/assets/img/ig.svg" alt="facebook" height="24" />
            </li>
            <li>
              <img src="@/assets/img/yt.svg" alt="facebook" height="24" />
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-section__copyright">
        <p>© 2022 Monito. All rights reserved.</p>
        <div class="footer-section__copyright__logo">
          <div class="img">
            <img src="@/assets/img/logo.svg" alt="logo" width="40" />
          </div>
          <p>Terms of Service &nbsp; &nbsp; Privacy Policy</p>
        </div>
      </div>
    </section>
  </footer>
</template>
<style lang="scss">
@import "@/assets/scss/_colors.scss";
@import "@/assets/scss/_fonts.scss";
@import "@/assets/scss/_media_when_min_width";

footer {
  margin-top: 80px;
  min-height: 440px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 24px;

    &__action {
      margin-top: 100px;
      width: 100%;
      &__subscribe {
        display: flex;
        align-items: flex-start;
        // gap: 20px;
        border-radius: 16px;
        padding: 32px;
        flex-wrap: wrap;
        background: $dark-blue;

        h2 {
          font-family: $SVN-Gilroy-Bold;
          font-weight: 700;
          font-size: 24px;
          line-height: 150%;
          text-transform: capitalize;
          color: #fdfdfd;
          flex: 1 1 0%;
          // max-width: 50%;
          // min-width: 50%;

          @include when-min-width(xs) {
            max-width: 100%;
            min-width: 100%;
          }

          // @include when-min-width(sm) {
          //   max-width: 33.3%;
          //   min-width: 33.3%;
          // }

          @include when-min-width(mdl) {
            max-width: 50%;
            min-width: 50%;
          }
        }
      }

      &__box {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 12px;
        border-radius: 14px;
        padding: 12px;
        // max-height: 72px;
        background: #fff;
        // max-width: 50%;
        // min-width: 50%;

        @include when-min-width(xs) {
          max-width: 100%;
          min-width: 100%;
        }

        // @include when-min-width(sm) {
        //   max-width: 33.3%;
        //   min-width: 33.3%;
        // }

        @include when-min-width(mdl) {
          max-width: 50%;
          min-width: 50%;
        }

        &__input {
          border: 1px solid $color-40;
          color: $dark-blue;
          border-radius: 8px;
          padding: 14px 28px;
          width: 508px;
          height: 48px;
          outline: none;

          @include when-min-width(xs) {
            max-width: 100%;
            min-width: 100%;
          }

          // @include when-min-width(sm) {
          //   max-width: 33.3%;
          //   min-width: 33.3%;
          // }

          @include when-min-width(mdl) {
            max-width: 508px;
            width: 100%;
          }
        }
        &__btn {
          border-radius: 8px;
          padding: 14px 28px 10px 28px;
          width: 163px;
          height: 48px;
          background: $dark-blue;
          color: $color-00;
          outline: none;
          border: transparent;
          cursor: pointer;

          @include when-min-width(xs) {
            max-width: 100%;
            min-width: 100%;
          }

          // @include when-min-width(sm) {
          //   max-width: 33.3%;
          //   min-width: 33.3%;
          // }

          @include when-min-width(mdl) {
            max-width: 163px;
            width: 100%;
          }
        }
      }
      &__social {
        display: flex;
        align-items: center;
        margin: 24px 0px;
        display: flex;
        align-items: center;
        margin: 24px 0px;
        flex-wrap: wrap;
        // gap: 20px;

        @include when-min-width(xs) {
          justify-content: center;
          gap: 20px !important;
        }

        @include when-min-width(mdl) {
          justify-content: space-between;
          gap: unset !important;

        }

        &__list {
          list-style: none;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: row;
          gap: 60px;
          font-family: $SVN-Gilroy-Light;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: $color-100;
          width: 100%;
          flex: 1 1 0%;
          max-width: 50%;
          min-width: 50%;

          @include when-min-width(xs) {
            gap: unset;
            justify-content: space-between;
            max-width: 100%;
            min-width: 100%;
          }

          @include when-min-width(mdl) {
            justify-content: flex-start;
            max-width: 50%;
            min-width: 50%;
            gap: 60px !important;
          }
        }

        &__icon {
          list-style: none;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          flex-direction: row;
          gap: 40px;
          flex: 1 1 0%;
          max-width: 50%;
          min-width: 50%;
          @include when-min-width(xs) {
            max-width: 100%;
            min-width: 100%;
            justify-content: center;
          }

          @include when-min-width(mdl) {
            justify-content: flex-end !important;
            max-width: 50%;
            min-width: 50%;
          }
        }
      }
    }

    &__copyright {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      padding: 28px 0px;
      width: 100%;

      p {
        font-family: $SVN-Gilroy-Light;
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        color: $color-60;
        flex: 1 1 0%;
        max-width: 50%;
        min-width: 50%;
      }

      &__logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        flex: 1 1 0%;
        max-width: 50%;
        min-width: 50%;
        .img {
          flex: 1 1 0%;
          max-width: 50%;
          min-width: 50%;
        }
        p {
          flex: 1 1 0%;
          max-width: 50%;
          min-width: 50%;
          text-align: right;
        }
      }
    }
  }
}
</style>