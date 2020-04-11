module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/stylesheet/app.scss";@import "~@/stylesheet/mixins.scss";
        `
      }
    }
  }
};
