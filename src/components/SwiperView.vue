<script src='./SwiperView.js'></script>

<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          alt="Vue logo"
          src="../assets/logo.png"
        >
      </div>

      <div class="swiper-slide">
        Slide 2
      </div>
      <div class="swiper-slide">
        Slide 3
      </div>
      <div class="swiper-slide">
        Slide 4
      </div>
    </div>

    <!-- If we need pagination -->
    <div class="swiper-pagination">
      pagination
    </div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev">
      prev
    </div>
    <div class="swiper-button-next">
      next
    </div>
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar">
      scrollbar
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-pagination {
  background: green;
}

.swiper-scrollbar {
  background: red;
}

.swiper-button-next, .swiper-button-prev {
  background: blue;
}
</style>
