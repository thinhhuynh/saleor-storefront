/* eslint-disable global-require */
import { generatePath } from "react-router";

import { paths } from "@paths";
import { ssrMode } from "@temp/constants";

export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    label: "Stripe",
  },
  ADYEN: {
    label: "Adyen",
    script: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js",
      integrity:
        "sha384-wG2z9zSQo61EIvyXmiFCo+zB3y0ZB4hsrXVcANmpP8HLthjoQJQPBh7tZKJSV8jA",
      crossOrigin: "anonymous",
    },
    style: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.css",
      integrity:
        "sha384-8ofgICZZ/k5cC5N7xegqFZOA73H9RQ7H13439JfAZW8Gj3qjuKL2isaTD3GMIhDE",
      crossOrigin: "anonymous",
    },
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePath(paths.page, { slug: "about" }),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/traicaymekong/",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "youtube",
    href: "//https://www.youtube.com/channel/UCdhnhnXeTRhWQrjarBkTMfQ",
    path: require("../images/youtube-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Chuyên bán sỉ và lẻ sầu riêng, bưởi da xanh",
  image: `${
    !ssrMode ? window.location.origin : ""
  }${require("../images/logo.svg")}`,
  title: "Trái Cây Mêkông",
  type: "website",
  url: !ssrMode ? window.location.origin : "",
};
