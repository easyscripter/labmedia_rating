module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/styles/main.scss";`
            }
        }
    },
};