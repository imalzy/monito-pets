<script setup lang="ts">
</script>
<template>
  <footer>
    <section class="footer-section">
      <div class="footer-section__action">
        <div class="footer-section__action__subscribe">
          <h2>Register now so you don't miss our programs</h2>
        </div>
        <div class="footer-section__action__social">
          <ul>
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div class="footer-section__copyright">
        <p>© 2022 Monito. All rights reserved.</p>
        <img src="@/assets/img/logo.svg" alt="logo" srcset="" />
        <p>Terms of Service &nbsp; &nbsp; Privacy Policy</p>
      </div>
    </section>
  </footer>
</template>
<style lang="scss">
@import "@/assets/scss/_colors.scss";
@import "@/assets/scss/_fonts.scss";

footer {
  margin-top: 80px;
  height: 440px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  .footer-section {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    &__action {
      margin-top: 100px;

      &__subscribe {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        gap: 20px;

        border-radius: 16px;
        padding: 32px;
        width: 1180px;
        height: 136px;
        background: $dark-blue;

        h2 {
          font-family: $SVN-Gilroy-Bold;
          font-weight: 700;
          font-size: 24px;
          line-height: 150%;
          text-transform: capitalize;
          color: $color-00;
        }
      }
    }

    &__copyright {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: 63px;
      padding: 28px 80px;
      width: 100%;

      p {
        font-family: $SVN-Gilroy-Light;
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        color: $color-60;
      }
    }
  }
}
</style>