<template>
  <div class="about">
    <DesktopNav
      class="desktop"
    />
    <MobileNav
      class="mobile"
    />
    <section class="bg-hero">
      <div class="container">
        <div class="content">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed velit pellentesque massa gravida ut viverra risus. Sociis mi turpis felis purus neque, vestibulum, eu, neque quis. </p>
          <button class="btn btn-primary">Contact us</button>
          <img src="/img/stars-rafiki.svg" alt="">
        </div>
      </div>
    </section>

  <section class="about-rex">
    <div class="container">
      <h2 class="section-title text-center">About Rexsteelz</h2>
      <div class="title-line" />
      <div class="content text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat faucibus congue sit quis. Massa integer amet erat lectus amet erat volutpat. Posuere sollicitudin velit sit dignissim sociis fermentum fermentum. Dui maecenas pretium, ac fermentum placerat feugiat. Arcu morbi nulla cursus eget. Dolor nam morbi non, donec sed vitae augue amet tortor. Molestie sit nunc pellentesque id pulvinar.
          Fames suspendisse ultrices pharetra quisque ornare dictum nibh. Etiam lectus id velit duis nunc egestas ultrices. Vulputate volutpat amet, a donec tristique ut lacus posuere commodo. Pharetra, fringilla quam gravida pharetra, eget. Tristique sagittis, id nunc dolor mi, tempor fusce. Pharetra donec turpis nulla consectetur. In id ut pulvinar posuere vehicula urna vulputate sit. Odio nulla arcu odio id etiam nec auctor at bibendum. Urna ultrices donec dignissim porta duis nunc massa. Pellentesque ipsum vitae, rhoncus purus tristique enim amet suscipit massa. Semper rhoncus nisi quam at nascetur. Integer vestibulum, morbi aliquet amet, placerat eleifend adipiscing at. Vestibulum lacus euismod laoreet molestie.
          Non leo viverra nisl malesuada diam a. Lorem posuere condimentum iaculis viverra etiam turpis egestas. Facilisi viverra diam et tristique non. Integer consequat maecenas tempor suscipit et neque, sed quam nulla. Ut.
        </p>
      </div>
    </div>
  </section>

  <section class="testimonial">
      <div class="container">
        <h2 class="section-title text-center">Testimonial </h2>
        <div class="title-line" />
        <div class="content text-center">
          <p>RexsteelzInvest remains our overall pick for investors. In addition to refusing payment for order flow, RexsteelzInvest keeps costs low, provides exceptional tools to help investors manage and analyze their portfolios, and continually improves its platforms to make things easier for investors and traders..</p>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 testimonial-items">
            <div class="content">
              <div class="user">
                <img src="/img/unsplash_xmSWVeGEnJw.png" alt="">
                <h4>Theresa Webb</h4>
              </div>
              <p>The Certified Licensing Professional certification is for individuals working in the fields of licensing, business development and commercialization of intellectual.</p>
            </div>
          </div>
          <div class="col-12 col-md-6 testimonial-items">
            <div class="content">
              <div class="user">
                <img src="/img/unsplash_xmSWVeGEnJw.png" alt="">
                <h4>Theresa Webb</h4>
              </div>
              <p>The Certified Licensing Professional certification is for individuals working in the fields of licensing, business development and commercialization of intellectual.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form">
      <div class="container">
        <div class="section-info">
          <h2 class="section-title text-center">Contact us</h2>
          <div class="title-line" />
          <p>Non leo viverra nisl malesuada diam a. Lorem posuere condimentum iaculis viverra etiam turpis egestas. </p>
        </div>
        <div class="form">
          <form>
            <div class="form-item">
              <label for="email">Your email</label>
              <input type="email" name="emaill" id="" placeholder="Enter email">
            </div>
            <div class="form-item">
              <label for="message">Message</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>

  <Footer />
  </div>
</template>

<script setup>
import DesktopNav from '../components/navigations/DesktopNav.vue'
import MobileNav from '../components/navigations/MobileNav.vue'
import Footer from '../components/common/Footer.vue'
</script>

<style lang="scss" scoped>

</style>
