/* eslint-disable @next/next/no-css-tags */
// import "../lib/wdyr";
import Head from "next/head";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Script from "next/script";
import type { AppProps } from "next/app";

// import { ReactQueryDevtools } from "react-query/devtools";

import store from "@/redux/store";
import "nouislider/dist/nouislider.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      easing: "ease", // default easing for AOS animations
      delay: 500,
    });
    AOS.refresh();
  }, []);
  const persistor = persistStore(store);

  const queryClient = new QueryClient();
  return (
    <div>
      <Head>
        <style type="text/css">
          {`
            html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}
.footer {
  flex-shrink: 0;
}

a:focus {
  outline: none;
}

a {
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
}

figure,
img {
  height: auto;
  vertical-align: middle;
}

figure,
img,
svg {
  max-width: 100%;
}

:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #7d879c;
  --bs-gray-dark: #373f50;
  --bs-gray-100: #f6f9fc;
  --bs-gray-200: #f3f5f9;
  --bs-gray-300: #e3e9ef;
  --bs-gray-400: #dae1e7;
  --bs-gray-500: #aeb4be;
  --bs-gray-600: #7d879c;
  --bs-gray-700: #4b566b;
  --bs-gray-800: #373f50;
  --bs-gray-900: #2b3445;
  --bs-primary: #fe696a;
  --bs-accent: #4e54c8;
  --bs-secondary: #f3f5f9;
  --bs-success: #42d697;
  --bs-info: #69b3fe;
  --bs-warning: #fea569;
  --bs-danger: #f34770;
  --bs-light: #fff;
  --bs-dark: #373f50;
  --bs-primary-rgb: 254, 105, 106;
  --bs-accent-rgb: 78, 84, 200;
  --bs-secondary-rgb: 243, 245, 249;
  --bs-success-rgb: 66, 214, 151;
  --bs-info-rgb: 105, 179, 254;
  --bs-warning-rgb: 254, 165, 105;
  --bs-danger-rgb: 243, 71, 112;
  --bs-light-rgb: 255, 255, 255;
  --bs-dark-rgb: 55, 63, 80;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-rgb: 75, 86, 107;
  --bs-font-sans-serif: "Rubik", sans-serif;
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.15),
    hsla(0, 0%, 100%, 0)
  );
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #4b566b;
  --bs-body-bg: #fff;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body,
hr {
  margin: 0;
}

hr {
  color: #e3e9ef;
  background-color: currentColor;
  border: 0;
  opacity: 1;
}

hr:not([size]) {
  height: 1px;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: #373f50;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  -webkit-tap-highlight-color: transparent;
}

hr {
  margin: 1rem 0;
  color: inherit;
  opacity: 0.25;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
}

.h6,
h6 {
  font-size: 1rem;
}

.small,
small {
  font-size: 0.875em;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}

a:hover {
  color: #0a58ca;
}

.display-1,
.display-2,
.display-3,
.display-4,
.display-5,
.display-6 {
  font-weight: 300;
  line-height: 1.2;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1320px;
  }
}

.row {
  --bs-gutter-x: 1.5rem;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
}

@media (min-width: 1200px) {
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

.form-control {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  color: #212529;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.form-control:focus {
  color: #212529;
  border-color: #86b7fe;
  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
}

.form-control::placeholder {
  color: #6c757d;
}

.btn {
  text-decoration: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.btn,
.btn:hover {
  color: #212529;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-link {
  color: #0d6efd;
  text-decoration: underline;
}

.btn-group-sm > .btn,
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.dropdown-toggle:after {
  margin-left: 0.255em;
  vertical-align: 0.255em;
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-left: 0.3em solid transparent;
}

.dropdown-menu {
  color: #212529;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.nav-link:focus,
.nav-link:hover {
  color: #0a58ca;
}

.navbar {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-lg,
.navbar > .container-md,
.navbar > .container-sm,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  font-size: 1.25rem;
  text-decoration: none;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  border-radius: 0.25rem;
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler,
  .navbar-expand-lg .offcanvas-header {
    display: none;
  }
}

.navbar-light .navbar-brand,
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  padding: 1rem;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.tooltip {
  margin: 0;
  font-size: 0.875rem;
}

.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow:before,
.bs-tooltip-start .tooltip-arrow:before {
  border-left-color: #000;
}

.tooltip-inner {
  background-color: #000;
}

.shadow-sm {
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}

.bg-secondary {
  background-color: rgba(
    var(--bs-secondary-rgb),
    var(--bs-bg-opacity)
  ) !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.rounded-end,
.rounded-top {
  border-top-right-radius: 0.25rem !important;
}

.rounded-bottom,
.rounded-end {
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom,
.rounded-start {
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-start {
  border-top-left-radius: 0.25rem !important;
}

@media (min-width: 576px) {
  .d-sm-block {
    display: block !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .ps-sm-0 {
    padding-left: 0 !important;
  }

  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ps-sm-5 {
    padding-left: 3rem !important;
  }
  .text-sm-end {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}

@media (min-width: 768px) {
  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }
  .d-md-none {
    display: none !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .ms-md-3 {
    margin-left: 1rem !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .d-lg-none {
    display: none !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-lg-0 {
    grid-gap: 0 !important;
    gap: 0 !important;
  }

  .gap-lg-1 {
    grid-gap: 0.25rem !important;
    gap: 0.25rem !important;
  }

  .gap-lg-2 {
    grid-gap: 0.5rem !important;
    gap: 0.5rem !important;
  }

  .gap-lg-3 {
    grid-gap: 1rem !important;
    gap: 1rem !important;
  }

  .gap-lg-4 {
    grid-gap: 1.5rem !important;
    gap: 1.5rem !important;
  }

  .gap-lg-5 {
    grid-gap: 3rem !important;
    gap: 3rem !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .me-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }

  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
}

body,
html {
  padding: 0;
  margin: 0;
  font-family: Rubik, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
}

a {
  color: inherit;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.brand-row .swiper-button-next,
.brand-row .swiper-button-prev {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  z-index: 200;
  background-color: #76727285;
  margin-top: -30px;
}

.brand-row .swiper-button-next:after,
.brand-row .swiper-button-prev:after {
  font-size: 20px;
  color: #fff;
}

.footer .widget {
  border-bottom: none;
}

.ais-SearchBox.input-group.d-none.d-lg-flex.mx-4 form {
  display: flex;
  width: 100%;
}

button.ais-SearchBox-submit {
  border: none;
  background-color: transparent;
  margin-left: -60px;
}

button.ais-SearchBox-submit svg {
  height: 20px;
  width: 20px;
  fill: gray;
}

button.ais-SearchBox-reset {
  background-color: transparent;
  border: none;
}

.ais-SearchBox-loadingIndicator {
  margin-top: 10px;
}

.product-gallery-thumblist::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 1em;
}

.product-gallery-thumblist::-webkit-scrollbar-track,
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.product-gallery-thumblist::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb {
  background-color: #a9a9a9;
  outline: 1px solid #708090;
  border: 0 !important;
}

.h2,
h2 {
  font-size: calc(1.325rem + 0.9vw);
}

@media (min-width: 1200px) {
  .h2,
  h2 {
    font-size: 2rem;
  }
}

.h3,
h3 {
  font-size: calc(1.3rem + 0.6vw);
}

@media (min-width: 1200px) {
  .h3,
  h3 {
    font-size: 1.75rem;
  }
}

.h4,
h4 {
  font-size: calc(1.275rem + 0.3vw);
}

@media (min-width: 1200px) {
  .h4,
  h4 {
    font-size: 1.5rem;
  }
}

.h5,
h5 {
  font-size: 1.25rem;
}

.h6,
h6 {
  font-size: 1.0625rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol,
ul {
  padding-left: 2rem;
}

dl,
ol,
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

.small,
small {
  font-size: 0.8em;
}

a {
  color: #fe696a;
}

a,
a:hover {
  text-decoration: none;
}

a:hover {
  color: #fe3638;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

tbody,
td,
tfoot,
th,
thead,
tr {
  border: 0 solid;
  border-color: inherit;
}

button {
  border-radius: 0;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role="button"] {
  cursor: pointer;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 500;
  line-height: 1;
}

@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 500;
  line-height: 1;
}

@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 500;
  line-height: 1;
}

@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 500;
  line-height: 1;
}

@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 500;
  line-height: 1;
}

@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.9375rem);
  padding-left: var(--bs-gutter-x, 0.9375rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 500px) {
  .container,
  .container-sm {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 100%;
  }
}

@media (min-width: 1280px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1260px;
  }
}

.row {
  --bs-gutter-x: 1.875rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -0.5);
  margin-left: calc(var(--bs-gutter-x) * -0.5);
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

@media (min-width: 500px) {
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
}
@media (min-width: 1280px) {
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}
form-text {
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color: #7d879c;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4b566b;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dae1e7;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.3125rem;
  -webkit-box-shadow: inset 0 1px 2px transparent;
  box-shadow: inset 0 1px 2px transparent;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #4b566b;
  background-color: #fff;
  border-color: #ffb4b5;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 2px transparent,
    0 0.375rem 0.625rem -0.3125rem rgba(254, 105, 106, 0.15);
  box-shadow: inset 0 1px 2px transparent,
    0 0.375rem 0.625rem -0.3125rem rgba(254, 105, 106, 0.15);
}

.form-control::-webkit-input-placeholder {
  color: #7d879c;
  opacity: 1;
}

.form-control::placeholder {
  color: #7d879c;
  opacity: 1;
}

.cursor-pointer,
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}

.input-group .btn {
  position: relative;
  z-index: 2;
}

.input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4),
.input-group.has-validation
  > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3),
.input-group:not(.has-validation)
  > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #4b566b;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.625rem 1.375rem;
  font-size: 0.9375rem;
  border-radius: 0.3125rem;
  -webkit-transition: color 0.25s ease-in-out,
    background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
}

.btn-primary {
  color: #000;
  background-color: #fe696a;
  border-color: #fe696a;
  -webkit-box-shadow: unset;
  box-shadow: unset;
}

.btn-outline-accent {
  color: #4e54c8;
  border-color: #4e54c8;
}

.btn-group-sm > .btn,
.btn-sm {
  padding: 0.425rem 1rem;
  font-size: 0.8125rem;
  border-radius: 0.25rem;
}

.fade {
  -webkit-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.dropdown,
.dropend,
.dropstart,
.dropup {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle:after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0.275rem solid;
  border-right: 0.275rem solid transparent;
  border-bottom: 0;
  border-left: 0.275rem solid transparent;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #4b566b;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e3e9ef;
  border-radius: 0.3125rem;
}

.dropdown-menu-end {
  --bs-position: end;
}
.nav-link {
  display: block;
  padding: 0.75rem 1.25rem;
  font-weight: 400;
  color: #4b566b;
  -webkit-transition: color 0.25s ease-in-out,
    background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.25s ease-in-out;
}

.nav-link:focus,
.nav-link:hover {
  color: #fe696a;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-lg,
.navbar > .container-md,
.navbar > .container-sm,
.navbar > .container-xl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-right: 1rem;
  font-size: calc(1.3rem + 0.6vw);
  white-space: nowrap;
}

@media (min-width: 1200px) {
  .navbar-brand {
    font-size: 1.75rem;
  }
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0;
  -webkit-transition: -webkit-box-shadow 0.15s ease-in-out;
  transition: -webkit-box-shadow 0.15s ease-in-out;
  transition: box-shadow 0.15s ease-in-out;
  transition: box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.125rem;
    padding-left: 1.125rem;
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler,
  .navbar-expand-lg .offcanvas-header {
    display: none;
  }
}

.navbar-light .navbar-brand,
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
  color: #373f50;
}

.navbar-light .navbar-nav .nav-link {
  color: #4b566b;
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #fe696a;
}

.navbar-light .navbar-toggler {
  color: #4b566b;
  border-color: transparent;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.085);
  border-radius: 0.4375rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-img,
.card-img-bottom,
.card-img-top {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.4375rem - 1px);
  border-top-right-radius: calc(0.4375rem - 1px);
}

.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0.25rem;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.75rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}

.tooltip .tooltip-arrow:before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-auto[data-popper-placement^="left"],
.bs-tooltip-start {
  padding: 0 0.4rem;
}

.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow,
.bs-tooltip-start .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow:before,
.bs-tooltip-start .tooltip-arrow:before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #2b3445;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #2b3445;
  border-radius: 0.25rem;
}

.align-middle {
  vertical-align: middle !important;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-flex {
  display: flex !important;
}

.d-none {
  display: none !important;
}

.shadow-sm {
  -webkit-box-shadow: 0 0.125rem 0.3rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 0.75rem -0.0625rem rgba(0, 0, 0, 0.06) !important;
  box-shadow: 0 0.125rem 0.3rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 0.75rem -0.0625rem rgba(0, 0, 0, 0.06) !important;
}

.shadow-lg {
  -webkit-box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1) !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.top-50 {
  top: 50% !important;
}
.translate-middle-y {
  -webkit-transform: translateY(-50%) !important;
  transform: translateY(-50%) !important;
}

.border-0 {
  border: 0 !important;
}

.w-100 {
  width: 100% !important;
}

.h-100 {
  height: 100% !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}
.m-2 {
  margin: 0.5rem !important;
}

.m-auto {
  margin: auto !important;
}
.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
.mt-2 {
  margin-top: 0.5rem !important;
}
.mt-auto {
  margin-top: auto !important;
}
.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}
.mb-grid-gutter {
  margin-bottom: 1.875rem !important;
}
.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}
.ms-5 {
  margin-left: 3rem !important;
}
.ms-auto {
  margin-left: auto !important;
}

.mx-n2 {
  margin-right: -0.5rem !important;
  margin-left: -0.5rem !important;
}

.mt-n1 {
  margin-top: -0.25rem !important;
}

.mt-n2 {
  margin-top: -0.5rem !important;
}

.me-n1 {
  margin-right: -0.25rem !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.pt-5 {
  padding-top: 3rem !important;
}

.pt-grid-gutter {
  padding-top: 1.875rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}
.fs-lg {
  font-size: 1.125rem !important;
}

.fs-base {
  font-size: 1rem !important;
}

.fs-md {
  font-size: 0.9375rem !important;
}

.fs-sm {
  font-size: 0.875rem !important;
}

.fs-ms {
  font-size: 0.8125rem !important;
}

.fs-xs {
  font-size: 0.75rem !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-nowrap {
  white-space: nowrap !important;
}
.text-primary {
  color: #fe696a !important;
}

.text-accent {
  color: #4e54c8 !important;
}
.text-light {
  color: #fff !important;
}
.text-white {
  color: #fff !important;
}
.text-muted {
  color: #7d879c !important;
}

.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: #f6f9fc !important;
}
.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.rounded {
  border-radius: 0.3125rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-3 {
  border-radius: 0.4375rem !important;
}
.rounded-end,
.rounded-top {
  border-top-right-radius: 0.3125rem !important;
}

.rounded-bottom,
.rounded-end {
  border-bottom-right-radius: 0.3125rem !important;
}

.rounded-bottom,
.rounded-start {
  border-bottom-left-radius: 0.3125rem !important;
}

.rounded-start {
  border-top-left-radius: 0.3125rem !important;
}

.bg-size-cover {
  background-size: cover !important;
}

.bg-position-center {
  background-position: 50% !important;
}

@media (min-width: 500px) {
  .d-sm-block {
    display: block !important;
  }
  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-none {
    display: none !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
}

@media (min-width: 768px) {
  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-none {
    display: none !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .ms-md-3 {
    margin-left: 1rem !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }
}

@media (min-width: 992px) {
  .d-lg-flex {
    display: flex !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .me-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .mt-lg-n10 {
    margin-top: -10rem !important;
  }
  .me-lg-n5 {
    margin-right: -3rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
  .text-lg-nowrap {
    white-space: nowrap !important;
  }
}

@media (min-width: 1280px) {
  .container-fluid,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    padding-right: 1.875rem;
    padding-left: 1.875rem;
  }
}

.small,
small {
  font-weight: inherit;
}

.hr-light {
  color: hsla(0, 0%, 100%, 0.12);
}

[class*=" ci-"],
[class^="ci-"] {
  display: inline-block;
  font-family: cartzilla-icons !important;
  font-style: normal;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}

.ci-arrow-left:before {
  content: "";
}
.ci-arrow-right:before {
  content: "";
}

.ci-card:before {
  content: "";
}

.ci-cart:before {
  content: "";
}

.ci-currency-exchange:before {
  content: "";
}

.ci-edit:before {
  content: "";
}

.ci-eye:before {
  content: "";
}

.ci-heart:before {
  content: "";
}

.ci-instagram:before {
  content: "";
}

.ci-location:before {
  content: "";
}

.ci-mail:before {
  content: "";
}

.ci-menu:before {
  content: "";
}

.ci-pinterest:before {
  content: "";
}

.ci-rocket:before {
  content: "";
}

.ci-star-filled:before {
  content: "";
}

.ci-star:before {
  content: "";
}
.ci-support:before {
  content: "";
}

.ci-twitter:before {
  content: "";
}
.ci-user:before {
  content: "";
}
.ci-view-grid:before {
  content: "";
}
.ci-youtube:before {
  content: "";
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
.subscription-status {
  border-radius: 0.25rem;
  font-size: 0.8125rem;
  text-align: center;
}

.btn-danger,
.btn-dark,
.btn-info,
.btn-primary,
.btn-success,
.btn-warning {
  color: #fff !important;
}

.btn-outline-accent {
  border-color: rgba(78, 84, 200, 0.35);
}

.btn-primary.btn-shadow {
  -webkit-box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
}

.btn > i {
  margin-top: -0.1875rem;
  vertical-align: middle;
}

.btn-market {
  display: inline-block;
  padding: 0.375rem 0.875rem 0.375rem 2.8125rem;
  -webkit-transition: color 0.25s ease-in-out,
    background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  border-radius: 0.4375rem;
  background-position: center left 0.75rem;
  background-color: #2b3445;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
}

.btn-market .btn-market-title {
  display: block;
  color: #fff;
  font-size: 1rem;
}

.btn-market .btn-market-subtitle {
  display: block;
  margin-bottom: -0.125rem;
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 0.6875rem;
}

.btn-apple {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.btn-google {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.btn-wishlist {
  width: 2.75rem;
  height: 2.75rem;
  padding: 0 !important;
  -webkit-transition: color 0.25s ease-in-out,
    background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  border: 0;
  border-radius: 50%;
  background-color: #f3f5f9;
  color: #373f50;
  text-align: center;
}

.btn-wishlist > i {
  font-size: 1.0625rem;
  line-height: 2.75rem;
}

.btn-wishlist:hover {
  color: #fe696a;
}

.btn-group-sm > .btn-wishlist.btn,
.btn-wishlist.btn-sm {
  width: 2rem;
  height: 2rem;
}

.btn-group-sm > .btn-wishlist.btn > i,
.btn-wishlist.btn-sm > i {
  font-size: 0.8125rem;
  line-height: 2rem;
}

.btn-social {
  display: inline-block;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  border: 1px solid transparent;
  -webkit-transition: border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    -webkit-box-shadow 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    color 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    color 0.25s ease-in-out, box-shadow 0.25s ease-in-out,
    -webkit-box-shadow 0.25s ease-in-out;
  border-radius: 0.3125rem;
  background-color: #f3f5f9;
  color: #4b566b;
  font-size: 0.875rem;
  text-align: center;
  text-decoration: none !important;
}

.btn-social > i {
  line-height: 2.125rem;
}

.btn-social.bs-light {
  background-color: hsla(0, 0%, 100%, 0.08);
  color: #fff;
}

.dropdown .dropdown-toggle:after,
.dropend .dropdown-toggle:after,
.dropstart .dropdown-toggle:after,
.dropup .dropdown-toggle:after {
  margin-left: 0.3rem;
  vertical-align: middle;
}

.btn.dropdown-toggle:after {
  margin-left: 0.35rem;
}

.dropdown-menu {
  -webkit-box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  border-color: transparent;
}

.input-group .position-absolute {
  z-index: 5;
}

.input-group .position-absolute + .form-control,
.input-group .position-absolute + .password-toggle .form-control {
  padding-left: 2.5rem;
}

.nav-link-style {
  color: #4b566b;
}

.nav-link-style > i {
  margin-top: -0.125rem;
  vertical-align: middle;
}

.navbar-brand {
  display: inline-block;
  font-weight: 500;
  vertical-align: middle;
}
.navbar-nav .nav-item {
  margin-bottom: 0.667rem;
  border-radius: 0.3125rem;
}

.navbar-nav .nav-link {
  padding: 0.667rem 1.125rem;
  font-weight: 500;
}

.navbar-nav .dropdown-menu {
  min-width: 12.5rem;
  padding-top: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
  background-color: transparent;
}

.navbar-mega-nav,
.navbar.fixed-top {
  position: relative;
}

.navbar-mega-nav:after {
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 1px;
  height: 1.875rem;
  content: "";
}

.navbar-tool {
  position: relative;
  display: flex;
  align-items: center;
}

.navbar-tool.dropdown:before {
  position: absolute;
  bottom: -1rem;
  left: -10%;
  width: 120%;
  height: 1rem;
  content: "";
}

.navbar-tool .dropdown-menu {
  top: 100%;
  margin-top: 0.5rem !important;
}

.navbar-tool .dropdown-menu.dropdown-menu-end {
  left: auto;
  right: 0;
}

.navbar-tool .navbar-tool-label {
  position: absolute;
  top: -0.3125rem;
  right: -0.3125rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #fe696a;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.25rem;
}

.navbar-tool .navbar-tool-tooltip {
  display: none;
}

@media (min-width: 992px) {
  .navbar-tool .navbar-tool-tooltip {
    display: block;
    position: absolute;
    top: -0.5rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: opacity 0.2s ease-in-out, top 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out, top 0.2s ease-in-out;
    padding: 0.0625rem 0.375rem;
    border-radius: 0.25rem;
    background-color: #2b3445;
    color: #fff;
    font-size: 0.6875rem;
    white-space: nowrap;
    opacity: 0;
  }
}

.navbar-tool-icon-box {
  position: relative;
  width: 2.875rem;
  height: 2.875rem;
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
  border-radius: 50%;
  line-height: 2.625rem;
  text-align: center;
}

.navbar-tool-icon-box.dropdown-toggle:after {
  display: none;
}

.navbar-tool-icon {
  font-size: 1.25rem;
  line-height: 2.875rem;
}

.navbar-tool-text {
  display: none;
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: 0.875rem;
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
  font-size: 0.875rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.navbar-tool-text > .small,
.navbar-tool-text > small {
  display: block;
  margin-bottom: -0.125rem;
}

.dropdown .navbar-tool-text:after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0.275rem solid;
  border-right: 0.275rem solid transparent;
  border-bottom: 0;
  border-left: 0.275rem solid transparent;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    width: auto;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-nav .nav-item {
    margin-bottom: 0;
    background-color: transparent;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-top: 1.125rem;
    padding-bottom: 0.875rem;
    font-weight: 400;
  }

  .navbar-expand-lg .navbar-mega-nav:after {
    display: block;
  }
  .navbar-expand-lg .dropdown-menu {
    margin-top: 0;
    padding-top: 0.5rem;
  }
  .navbar-expand-lg .dropdown-menu.dropdown-menu-end {
    left: auto;
    right: 0;
  }
  .navbar-expand-lg .dropdown-menu:not(.dropdown-menu-dark) {
    border-color: #fff;
    background-color: #fff;
    -webkit-box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03),
      0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
    box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03),
      0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  }

  .navbar-expand-lg .navbar-tool-text {
    display: block;
  }
}

.navbar-stuck-toggler {
  display: none;
}

.navbar-sticky.navbar-stuck {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-animation: navbar-show 0.25s;
  animation: navbar-show 0.25s;
  -webkit-box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  z-index: 1030;
}

@media (min-width: 992px) {
  .navbar-sticky.navbar-stuck .navbar-stuck-toggler {
    display: flex;
  }
  .navbar-sticky.navbar-stuck .navbar-stuck-menu {
    display: none;
  }
}

.navbar-light .nav-link > i {
  -webkit-transition: color 0.25s ease-in-out,
    background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.25s ease-in-out;
  color: #7d879c;
}

.navbar-light .nav-item {
  background-color: #f6f9fc;
}

.navbar-light .nav-item.active .nav-link:not(.disabled),
.navbar-light .nav-item.active .nav-link:not(.disabled) > i,
.navbar-light .nav-item.dropdown .nav-link:focus:not(.disabled),
.navbar-light .nav-item.dropdown .nav-link:focus:not(.disabled) > i,
.navbar-light .nav-item.show .nav-link:not(.disabled),
.navbar-light .nav-item.show .nav-link:not(.disabled) > i,
.navbar-light .nav-item:hover .nav-link:not(.disabled),
.navbar-light .nav-item:hover .nav-link:not(.disabled) > i {
  color: #fe696a;
}

.navbar-light .navbar-tool-icon-box {
  color: #4b566b;
}

.navbar-light .navbar-tool-icon-box.bg-secondary {
  background-color: #f3f5f9 !important;
}

.navbar-light .navbar-tool-text {
  color: #4b566b;
}

.navbar-light .navbar-tool-text > .small,
.navbar-light .navbar-tool-text > small {
  color: #7d879c;
}

.navbar-light .navbar-mega-nav:after {
  background-color: #e3e9ef;
}

.topbar {
  padding: 0.625rem 0;
  font-size: 0.875rem;
}

.topbar,
.topbar > .container,
.topbar > .container-fluid,
.topbar > .container-lg,
.topbar > .container-md,
.topbar > .container-sm,
.topbar > .container-xl {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar .topbar-link,
.topbar .topbar-text {
  display: inline-block;
  margin-bottom: 0;
  text-decoration: none !important;
}

.topbar .topbar-link > i,
.topbar .topbar-text > i {
  margin-right: 0.375rem;
  font-size: 1.15em;
  vertical-align: middle;
}

.topbar-dark .topbar-link,
.topbar-dark .topbar-text {
  color: hsla(0, 0%, 100%, 0.65);
}

.topbar-dark .topbar-link > i,
.topbar-dark .topbar-text > i {
  color: #fe696a;
}

.topbar-dark .topbar-link.text-muted,
.topbar-dark .topbar-link > .text-muted,
.topbar-dark .topbar-text.text-muted,
.topbar-dark .topbar-text > .text-muted {
  color: hsla(0, 0%, 100%, 0.45) !important;
}

.tns-carousel {
  position: relative;
}

.tns-carousel [data-controls] {
  position: absolute;
  top: 50%;
  width: 2.75rem;
  height: 2.75rem;
  margin-top: -1.375rem;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border: 1px solid #e3e9ef;
  border-radius: 50%;
  background-color: #fff;
  font-size: 0.8085rem;
  line-height: 2.625rem;
  text-align: center;
  z-index: 10;
}

.tns-carousel [data-controls="prev"] {
  left: 1.75rem;
}

.tns-carousel [data-controls="next"] {
  right: 1.75rem;
}

.tns-carousel.tns-controls-lg [data-controls] {
  width: 3.25rem;
  height: 3.25rem;
  margin-top: -1.625rem;
  font-size: 0.9555rem;
  line-height: 3.125rem;
}

.tns-carousel:not(.tns-controls-static) [data-controls] {
  opacity: 0;
}

.tns-carousel:not(.tns-controls-static) [data-controls="prev"] {
  -webkit-transform: translateX(1rem);
  transform: translateX(1rem);
}

.tns-carousel:not(.tns-controls-static) [data-controls="next"] {
  -webkit-transform: translateX(-1rem);
  transform: translateX(-1rem);
}

.tns-carousel:not(.tns-controls-static):hover [data-controls] {
  -webkit-transform: none;
  transform: none;
  opacity: 1;
}

.tns-item {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.tns-item .from-bottom,
.tns-item .from-end,
.tns-item .from-start,
.tns-item .from-top,
.tns-item .scale-down,
.tns-item .scale-up {
  -webkit-transition: all 0.45s ease-in-out 0.3s;
  transition: all 0.45s ease-in-out 0.3s;
  opacity: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.tns-item .from-start {
  -webkit-transform: translateX(-45px);
  transform: translateX(-45px);
}
.tns-item .scale-up {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}

.tns-item .delay-1 {
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

.tns-item .delay-2 {
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s;
}

.tns-item .delay-4 {
  -webkit-transition-delay: 1.1s;
  transition-delay: 1.1s;
}

.tns-item.tns-slide-active .from-end,
.tns-item.tns-slide-active .from-start {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

.tns-item.tns-slide-active .scale-down,
.tns-item.tns-slide-active .scale-up {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

.widget-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.widget-title {
  margin-bottom: 1.125rem;
  font-size: 1.0625rem;
  font-weight: 500;
}
.widget-list-item {
  margin-bottom: 0.5rem;
}

.widget-list-item:last-child {
  margin-bottom: 0;
}

.widget-list-link {
  display: block;
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
  color: #4b566b;
  font-size: 0.875rem;
  font-weight: 400;
}

.widget-light .widget-list-link {
  color: hsla(0, 0%, 100%, 0.65);
}
.widget-product-meta {
  font-size: 0.875rem;
}

.product-card {
  padding-bottom: 1.25rem;
  border: 0;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}

.product-card .badge,
.product-card .product-card-actions,
.product-card > .btn-wishlist {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 5;
}

.product-card .card-body {
  position: relative;
  background-color: #fff;
  z-index: 2;
}

.product-card .card-body-hidden {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  margin-top: -1.25rem;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  border-radius: 0.4375rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
}

@media (min-width: 500px) {
  .product-card {
    padding-bottom: 0;
  }
}

@media (min-width: 992px) {
  .product-card:hover:not(.card-static) {
    border-color: #fff !important;
    -webkit-box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  .product-card:hover:not(.card-static) .card-body-hidden {
    opacity: 1;
    visibility: visible;
    -webkit-box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  }
}
.product-title > a {
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
  color: #373f50;
  text-decoration: none !important;
}

.product-meta {
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
  color: #7d879c;
  text-decoration: none !important;
}

.star-rating {
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  vertical-align: middle;
}

.star-rating .star-rating-icon {
  display: inline-block;
  margin-right: 0.1875rem;
  color: #aeb4be;
  font-size: 0.75rem;
  vertical-align: middle;
}

.star-rating .star-rating-icon.active {
  color: #fea569;
}

          `}
        </style>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.6/simplebar.min.js"
        integrity="sha512-rn0CaCtyheymRT43p0ZuFH0SvNriLU5cuJpY2f4IcyLrbHzJdsIF1dygi9oNha1BhHagO8U+h2xRWCosYf9gCg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.6/simplebar.min.css"
        integrity="sha512-uZTwaYYhJLFXaXYm1jdNiH6JZ1wLCTVnarJza7iZ1OKQmvi6prtk85NMvicoSobylP5K4FCdGEc4vk1AYT8b9Q=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Script
        type="module"
        src="/js/smooth-scroll.js"
        strategy="beforeInteractive"
      />
      <Script type="module" src="/js/theme.js" strategy="afterInteractive" />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
