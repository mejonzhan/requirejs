//A simple build file using the tests directory for requirejs
require({
        appDir: "../../",
        baseUrl: "tests/i18n",
        inlineText: false,
        dir: "buildi18n",
        locale: "en-us-surfer",
        optimize: "none"
    },
    "nls/colors"
);
