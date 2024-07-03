import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" defer />
          <script src="/static/assets/vendor/modernizr/modernizr-2.8.3.min.js"></script>
          <script src="/static/assets/js/plugins.js"></script>
          <script src="/static/assets/vendor/jquery/jquery-3.2.1.min.js"></script>
          <script src="/static/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="/static/assets/vendor/jquery-smooth-scrolling/jquery.smooth-scroll.min.js"></script>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChihC--Jb_QURoXd2MugyC53cDQjrV2MY"></script>
          <script src="/static/assets/vendor/validation/jquery.validate.min.js"></script>
          <script src="/static/assets/vendor/owl-carousel/owl.carousel.min.js"></script>
          <script src="/static/assets/vendor/lity/lity.min.js"></script>
          <script src="/static/assets/vendor/waypoints/jquery.waypoints.min.js"></script>
          <script src="/static/assets/vendor/counter-up/jquery.counterup.min.js"></script>
          <script src="/static/assets/vendor/jqcbxgooglemap/jqcbxgooglemap.js"></script>
          <script src="/static/assets/js/theme.min.js"></script>
          <script src="/static/assets/js/custom.js"></script>
          <script id="switcherhandle" type="text/javascript" src="/static/assets/switcher/switcher.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;