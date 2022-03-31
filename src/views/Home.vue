<template>
  <div class="home">
    <DesktopNav class="desktop" />
    <MobileNav class="mobile" />
    <section class="bg-hero">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 hero-item">
            <div class="content">
              <h1>{{ headingOne }}</h1>
              <p>
                {{ headingTwo }}
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
          <!-- <div class="eclipse"></div> -->
          <div class="col-12 col-md-6 hero-item">
            <img src="/img/sideIMG.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="circle">
      <section class="offering text-center">
        <h2 class="section-title text-center">Our offering</h2>
        <div class="title-line" />
        <div class="container">
          <div class="row">
            <div
              v-for="offering in offerings"
              :key="offering.id"
              class="col-12 col-md-4 offering-item"
            >
              <div class="content">
                <div class="inner-content">
                  <img src="/img/icon/finance.png" class="my-1" alt="" />
                  <h4>{{ offering.title.replace(/(<([^>]+)>)/gi, "") }}</h4>
                  <p>
                    {{ offering.msg.replace(/(<([^>]+)>)/gi, "") }}
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 col-md-4 offering-item">
              <div class="content">
                <div class="inner-content">
                  <img src="/img/icon/withdraw.png" class="my-1" alt="" />
                  <h4>Fast Transaction</h4>
                  <p>
                    Make fast deposits and withdrawals in and out of your
                    investment account easily via supported cryptocurrencies.
                  </p>
                </div>
              </div>
            </div> -->
            <!-- <div class="col-12 col-md-4 offering-item">
              <div class="content">
                <div class="inner-content">
                  <img src="/img/icon/referral.png" class="my-1" alt="" />
                  <h4>Market Analysis</h4>
                  <p>
                    With high-end and ever advancing technology we are able to
                    carry out precise analysis and better navigate the market.
                  </p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <section class="who-we-are">
        <div class="container">
          <h2 class="section-title text-center">Who we are</h2>
          <div class="title-line" />
          <div class="content text-center">
            <h4 class="pb-4">Avaloqs Assets</h4>
            <p>
              {{ wwa }}
            </p>
          </div>
          <div class="row">
            <div
              v-for="wwa in wwas"
              :key="wwa.id"
              class="col-12 col-md-6 who-items"
            >
              <div class="content">
                <h4>{{ wwa.title.replace(/(<([^>]+)>)/gi, "") }}</h4>
                <p>
                  {{ wwa.msg.replace(/(<([^>]+)>)/gi, "") }}
                </p>
              </div>
            </div>
            <!-- <div class="col-12 col-md-6 who-items">
              <div class="content">
                <h4>Saving & Investments</h4>
                <p>
                  The Certified Licensing Professional certification is for
                  individuals working in the fields of licensing, business
                  development and commercialization of intellectual.
                </p>
              </div>
            </div> -->
          </div>
          <div class="text-center my-5">
            <input
              type="button"
              class="btn btn-primary p-2 px-5"
              value="Get started"
            />
          </div>
        </div>
      </section>
    </section>

    <section class="how-to-invest">
      <div class="container">
        <h2 class="section-title text-center">How to invest</h2>
        <div class="title-line" />
        <div class="row justify-content-between">
          <div class="col-12 col-md-5">
            <div class="text-content mb-5">
              <h5>OPEN AN ACCOUNT</h5>
              <p>
                Experienced business owners and managers know that 3 things are
                necessary to ensure the long- term success of any business:
                growth, profit and stability.
              </p>
            </div>
            <div class="text-content mb-5">
              <h5>MAKE DEPOSIT</h5>
              <p>
                Withdrawal Speed: Up to 4 hours .General rules for depositing
                and withdrawing funds . If a deposit or withdrawal is not
                subject to instant execution.
              </p>
            </div>
            <div class="text-content mb-5">
              <h5>CHOOSE A PACKAGE</h5>
              <p>
                From the list of packages available, choose any that suites your
                budget and click on the invest button
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 how-item">
            <img src="/img/Crypto-portfolio-amico.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="investment-package">
      <div class="container">
        <h2 class="section-title text-center">Investment Mega Package</h2>
        <div class="title-line" />
        <p>
          Choose the package that best suits your personality today to start
          your journey to financial freedom
        </p>

        <div class="row mt-5">
          <div class="col-12 col-md-4 package-item">
            <div class="content">
              <div class="inner-content">
                <h5 class="pb-2">Basic</h5>
                <p>Maximum Deposit 4990USD</p>
                <p>Minimum Deposit 500USD</p>
                <p>ROI Action 50 TIMES</p>
                <p>30% Payback Weekly</p>

                <button class="btn btn-primary mt-3">Ghost button</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 package-item">
            <div class="content">
              <div class="inner-content">
                <h5 class="pb-2">Standard</h5>
                <p>Maximum Deposit 4990USD</p>
                <p>Minimum Deposit 500USD</p>
                <p>ROI Action 50 TIMES</p>
                <p>30% Payback Weekly</p>

                <button class="btn btn-primary mt-3">Ghost button</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 package-item">
            <div class="content">
              <div class="inner-content">
                <h5 class="pb-2">Silver</h5>
                <p>Maximum Deposit 4990USD</p>
                <p>Minimum Deposit 500USD</p>
                <p>ROI Action 50 TIMES</p>
                <p>30% Payback Weekly</p>

                <button class="btn btn-primary mt-3">Ghost button</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 package-item">
            <div class="content">
              <div class="inner-content">
                <h5 class="pb-2">Golden</h5>
                <p>Maximum Deposit 4990USD</p>
                <p>Minimum Deposit 500USD</p>
                <p>ROI Action 50 TIMES</p>
                <p>30% Payback Weekly</p>

                <button class="btn btn-primary mt-3">Ghost button</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 package-item">
            <div class="content">
              <div class="inner-content">
                <h5 class="pb-2">Diamond</h5>
                <p>Maximum Deposit 4990USD</p>
                <p>Minimum Deposit 500USD</p>
                <p>ROI Action 50 TIMES</p>
                <p>30% Payback Weekly</p>

                <button class="btn btn-primary mt-3">Ghost button</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 package-item">
            <div class="content">
              <div class="inner-content">
                <h5 class="pb-2">Elite</h5>
                <p>Maximum Deposit 4990USD</p>
                <p>Minimum Deposit 500USD</p>
                <p>ROI Action 50 TIMES</p>
                <p>30% Payback Weekly</p>

                <button class="btn btn-primary mt-3">Ghost button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="top-investors">
      <div class="container">
        <h2 class="section-title text-center">Top Investors</h2>
        <div class="title-line" />
        <p>
          {{topExecutive}}
        </p>
        <div class="row mt-5 justify-content-center">
          <div
            v-for="executive in executives"
            :key="executive.id"
            class="col-12 col-md-3 investor-item"
          >
            <div class="content">
              <div >
                <img :src="executive.pics" alt="">
              </div>
              <h5>{{ executive.name }}</h5>
              <p>{{ executive.position }}</p>
            </div>
          </div>
          <!-- <div class="col-12 col-md-3 investor-item">
            <div class="content">
              <div class="investor-img" />
              <h5>co-CEO</h5>
              <p>Martin Greweldinger</p>
            </div>
          </div> -->
          <!-- <div class="col-12 col-md-3 investor-item">
            <div class="content">
              <div class="investor-img" />
              <h5>Founder</h5>
              <p>Amanatt</p>
            </div>
          </div>
          <div class="col-12 col-md-3 investor-item">
            <div class="content">
              <div class="investor-img" />
              <h5>Founder</h5>
              <p>Amanatt</p>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <section class="latest-news">
      <div class="container">
        <h2 class="section-title text-center">Latest News</h2>
        <div class="title-line" />
        <div class="row">
          <div class="col-12 news-item">
            <div class="news-img">
              <p>Autrhor // October 10 2020</p>
            </div>
            <div class="news-text">
              <div class="content">
                <h5>Laoreet feugiat tincidunt lacus sit ut.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio doloribus porro ipsam autem, asperiores molestiae,
                  minima tenetur distinctio explicabo maxime amet inventore
                  praesentium aliquam. Ea fugiat modi odio sint alias?
                </p>

                <a href="/">See more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import DesktopNav from "../components/navigations/DesktopNav.vue";
import MobileNav from "../components/navigations/MobileNav.vue";
import Footer from "../components/common/Footer.vue";
import { ref, onMounted } from "vue";

const headingOne = ref("");
const headingTwo = ref("");
const wwa = ref("");
const offerings = ref("");
const wwas = ref("");
const executives = ref("");
const topExecutive = ref("");

onMounted(() => {
  fetch("http://vicsites.herokuapp.com/contents/carousel-home")
    .then((response) => response.json())
    .then((data) => {
      headingOne.value = data[0].heading_one.replace(/(<([^>]+)>)/gi, "");
      headingTwo.value = data[0].heading_two.replace(/(<([^>]+)>)/gi, "");
    });

  fetch("http://vicsites.herokuapp.com/contents/our-offering")
    .then((response) => response.json())
    .then((data) => {
      offerings.value = data;
    });

  fetch("http://vicsites.herokuapp.com/contents/top-executive")
    .then((response) => response.json())
    .then((data) => {
      topExecutive = data.text.replace(/(<([^>]+)>)/gi, "")
      // console.log(data[0].text);
    });

  fetch("http://vicsites.herokuapp.com/contents/top-executive-body")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      executives.value = data;
    });

  fetch("http://vicsites.herokuapp.com/contents/wwa")
    .then((response) => response.json())
    .then((data) => {
      wwa.value = data[0].text.replace(/(<([^>]+)>)/gi, "");
      // console.log(data);
    });

  fetch("http://vicsites.herokuapp.com/contents/wwas")
    .then((response) => response.json())
    .then((data) => {
      wwas.value = data;
    });
});
</script>

<style lang="scss" scoped>
</style>