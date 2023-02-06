import Script from "next/script";

const ScriptComponent = () => {
  return (
    <>
      <Script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
      <Script src="assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js" />
      <Script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" />
      <Script src="assets/vendor/shufflejs/dist/shuffle.min.js" />
      <Script src="assets/vendor/jarallax/dist/jarallax.min.js" />
      <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
      <Script src="assets/vendor/@lottiefiles/lottie-player/dist/lottie-player.js" />
      <Script src="assets/vendor/parallax-js/dist/parallax.min.js" />
      <Script src="assets/vendor/lightgallery/lightgallery.min.js" />
      <Script src="assets/vendor/lightgallery/plugins/video/lg-video.min.js" />
      <Script src="assets/vendor/lightgallery/plugins/fullscreen/lg-fullscreen.min.js" />
      <Script src="assets/vendor/lightgallery/plugins/zoom/lg-zoom.min.js" />
      <Script src="assets/vendor/lightgallery/plugins/thumbnail/lg-thumbnail.min.js" />
      <Script src="assets/vendor/cleave.js/dist/cleave.min.js" />

      <Script src="assets/js/theme.min.js" />
    </>
  );
};

export default ScriptComponent;
