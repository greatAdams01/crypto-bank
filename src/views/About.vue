<template>
  <div class="about">
    <DesktopNav class="desktop" />
    <MobileNav class="mobile" />
    <section class="bg-hero">
      <div class="container">
        <div class="content mx-auto">
          <h1>{{ headingOne }}</h1>
          <p>
            {{ headingTwo }}
          </p>
          <button class="btn btn-primary">Contact us</button>
        </div>
        <img src="/img/Tostars.png" class="my-5 rocket" alt="" />
      </div>
    </section>

    <section class="about-rex">
      <div class="container">
        <h2 class="section-title text-center">About US</h2>
        <div class="title-line" />
        <div class="content text-center">
          <p>{{ about }}</p>
        </div>
      </div>
    </section>

    <section class="testimonial">
      <div class="container">
        <h2 class="section-title text-center">Testimonial</h2>
        <div class="title-line" />
        <div class="content text-center">
          <p>
            RexsteelzInvest remains our overall pick for investors. In addition
            to refusing payment for order flow, RexsteelzInvest keeps costs low,
            provides exceptional tools to help investors manage and analyze
            their portfolios, and continually improves its platforms to make
            things easier for investors and traders..
          </p>
        </div>
        <div class="row">
          <div v-for="testimonial in testimonials.slice(0, 4)" :key="testimonial.id" class="col-12 col-md-6 testimonial-items my-2">
            <div class="content">
              <div class="user">
                <img :src="testimonial.pics" alt="" />
                <h4>{{testimonial.name}}</h4>
              </div>
              <p>
                {{testimonial.comments.replace(/(<([^>]+)>)/gi, "")}}
              </p>
            </div>
          </div>
          <!-- <div class="col-12 col-md-6 testimonial-items">
            <div class="content">
              <div class="user">
                <img src="/img/unsplash_xmSWVeGEnJw.png" alt="" />
                <h4>Theresa Webb</h4>
              </div>
              <p>
                The Certified Licensing Professional certification is for
                individuals working in the fields of licensing, business
                development and commercialization of intellectual.
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <section class="contact-form" id="contact">
      <div class="container">
        <div class="section-info">
          <h2 class="section-title text-center">Contact us</h2>
          <div class="title-line" />
          <p>
            Non leo viverra nisl malesuada diam a. Lorem posuere condimentum
            iaculis viverra etiam turpis egestas.
          </p>
        </div>
        <div class="form">
          <form>
            <div class="form-item">
              <label for="email">Your email</label>
              <input
                type="email"
                name="emaill"
                id=""
                placeholder="Enter email"
              />
            </div>
            <div class="form-item">
              <label for="message">Message</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="text-center my-5">
              <input
                type="button"
                value="Send"
                class="btn btn-primary px-5 my-5"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="">
      <div class="section-info my-5">
        <h2 class="section-title text-center text-white">Trend</h2>
        <div class="title-line" />
      </div>
      <div
        class="livecoinwatch-widget-5"
        lcw-base="USD"
        lcw-color-tx="#999999"
        lcw-marquee-1="coins"
        lcw-marquee-2="movers"
        lcw-marquee-items="20"
      ></div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DesktopNav from "../components/navigations/DesktopNav.vue";
import MobileNav from "../components/navigations/MobileNav.vue";
import Footer from "../components/common/Footer.vue";

const headingOne = ref("");
const headingTwo = ref("");
const about = ref("");
const testimonials = ref("");

onMounted(() => {
  fetch("http://vicsites.herokuapp.com/contents/about-us")
    .then((response) => response.json())
    .then((data) => {
      about.value = data[0].msg.replace(/(<([^>]+)>)/gi, "");
    });

  fetch("http://vicsites.herokuapp.com/contents/carousel-about")
    .then((response) => response.json())
    .then((data) => {
      headingOne.value = data[0].heading_one.replace(/(<([^>]+)>)/gi, "");
      headingTwo.value = data[0].heading_two.replace(/(<([^>]+)>)/gi, "");
    });

  fetch("http://vicsites.herokuapp.com/contents/testimonial")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
    });

  fetch("http://vicsites.herokuapp.com/contents/testimonial-body")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      testimonials.value = data
    });
});
</script>

<style lang="scss" scoped>
</style>
