(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-widgets-widgets-module"],{

/***/ "3I2X":
/*!*****************************************************************!*\
  !*** ./src/app/components/widgets/general/general.component.ts ***!
  \*****************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ "pqks");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-count-to */ "a5BO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");









function GeneralComponent_783_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.designation);
} }
function GeneralComponent_783_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralComponent_783_ng_template_0_Template, 8, 4, "ng-template", 222);
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", data_r2.id);
} }
class GeneralComponent {
    constructor(calender) {
        this.calender = calender;
        this.time = new Date();
        this.jstoday = '';
        this.today = Date.now();
        this.owlcarousel = [
            {
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
                img: "assets/images/dashboard/boy-2.png",
                name: "Poio klot",
                designation: "Developer"
            },
            {
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
                img: "assets/images/dashboard/boy-2.png",
                name: "Poio klot",
                designation: "Developer"
            }
        ];
        this.owlcarouselOptions = {
            loop: true,
            margin: 10,
            items: 1,
            nav: false,
            dots: false
        };
        this.model = calender.getToday();
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.time, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }
    setTime() {
        this.intmin = setInterval(function () {
            var second = new Date().getSeconds();
            var sdegree = second * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            var seconds = document.getElementById('sec').style.transform = srotate;
        }, 1000);
        this.intsec = setInterval(function () {
            var mins = new Date().getMinutes();
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            var minits = document.getElementById('min').style.transform = mrotate;
        }, 1000);
        this.inthour = setInterval(function () {
            var hour = new Date().getHours();
            var mints = new Date().getMinutes();
            var hdegree = hour * 30 + (mints / 2);
            var hrotate = "rotate(" + hdegree + "deg)";
            var hours = document.getElementById('hour').style.transform = hrotate;
        }, 1000);
    }
    ngOnInit() {
        const now = new Date();
        this.setTime();
    }
    ngOnDestroy() {
        if (this.intmin) {
            clearInterval(this.intmin);
        }
        if (this.intsec) {
            clearInterval(this.intsec);
        }
        if (this.inthour) {
            clearInterval(this.inthour);
        }
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"])); };
GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 808, vars: 110, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "col-xl-3", "col-lg-6"], [1, "card", "o-hidden"], [1, "bg-primary", "b-r-4", "card-body"], [1, "media", "static-top-widget"], [1, "align-self-center", "text-center"], [3, "icon"], [1, "media-body"], [1, "m-0"], [1, "mb-0", "counter", 3, "CountTo", "from", "duration"], ["data-feather", "navigation", 1, "icon-bg"], [1, "bg-secondary", "b-r-4", "card-body"], ["data-feather", "box", 1, "icon-bg"], ["data-feather", "message-square", 1, "icon-bg"], ["data-feather", "users", 1, "icon-bg"], [1, "col-xl-6", "xl-100"], [1, "widget-joins", "card"], [1, "col-sm-6", "pr-0"], [1, "media", "border-after-xs"], [1, "align-self-center", "mr-3"], [1, "fa", "fa-angle-up", "ml-2"], [1, "media-body", "details", "pl-3"], [1, "mb-1"], [1, "mb-0", "counter", "digits", 3, "CountTo", "from", "duration"], [1, "media-body", "align-self-center"], ["data-feather", "shopping-bag", 1, "font-primary", "float-left", "ml-2"], [1, "col-sm-6", "pl-0"], [1, "media"], [1, "align-self-center", "mr-3", "digits"], [1, "fa", "fa-angle-down", "ml-2"], ["data-feather", "layers", 1, "font-primary", "float-left", "ml-3"], [1, "media-body", "details", "pl-3", "pt-0"], ["data-feather", "shopping-cart", 1, "font-primary", "float-left", "ml-2"], ["data-feather", "dollar-sign", 1, "font-primary", "float-left", "ml-2"], [1, "widget-joins", "card", "widget-arrow"], [1, "align-self-center", "mr-3", "text-left"], [1, "mb-0"], ["data-feather", "arrow-down", 1, "font-primary"], [1, "counter", 3, "CountTo", "from", "duration"], ["data-feather", "arrow-up", 1, "font-primary"], [1, "media-body", "pl-2"], [1, "media-body", "align-self-center", "pl-3"], [1, "card"], [1, "cal-date-widget", "card-body"], [1, "col-xl-6", "col-xs-12", "col-md-6", "col-sm-6"], [1, "cal-info", "text-center"], [1, "d-inline-block", "mt-2"], [1, "b-r-dark", "pr-3"], [1, "pl-3"], [1, "mt-4", "f-16", "text-muted"], [1, "cal-datepicker", "custom-datepicker", "pull-right"], ["data-language", "en", 1, "datepicker-here"], [3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "col-xl-3", "xl-50", "col-sm-6"], [1, "weather-widget-two"], [1, "card-body"], ["id", "cloudDrizzleMoonAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleMoonAlt"], ["id", "cloudFillClip"], ["d", "M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"], ["id", "moonCloudFillClip"], ["d", "M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleMoonAlt"], ["clip-path", "url(#cloudFillClip)"], ["clip-path", "url(#moonCloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], ["d", "M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-drizzle"], ["id", "Drizzle-Left_1_", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], ["clip-path", "url(#cloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["d", "M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], [1, "media-body", "align-self-center", "text-white"], [1, "m-0", "f-w-600", "num"], [1, "m-0", "f-14"], ["id", "cloudRainMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainMoon"], ["id", "cloudFillClip1"], ["id", "moonCloudFillClip1"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainMoon"], ["clip-path", "url(#cloudFillClip1)"], ["clip-path", "url(#moonCloudFillClip1)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-rain"], ["d", "M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "left"], ["d", "M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "middle"], ["d", "M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "right"], ["clip-path", "url(#cloudFillClip1)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["id", "cloudDrizzle", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzle"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzle"], ["d", "M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["d", "M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], [1, "top-bg-whether"], ["id", "cloudHailAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudHailAltFill"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-hailAlt"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-left"], ["cx", "42", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-middle"], ["cx", "49.999", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-right"], ["cx", "57.998", "cy", "65.498", "r", "2"], [1, "climacon_componentWrap", "climacon_componentWrap_cloud"], ["d", "M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["fill", "#FFFFFF", "d", "M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_cloud"], [1, "bottom-whetherinfo"], [1, "col-6"], [1, "whether-content"], [1, "num", "mb-0"], [1, "mobile-clock-widget"], [1, "bg-svg"], ["id", "cloudLightningMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningMoon"], ["id", "moonCloudFillClipfill11"], ["id", "cloudFillClipfill19"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudLightningMoon"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-lightning"], ["points", "48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 ", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_lightning"], ["d", "M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "clock", 1, "clock"], ["id", "hour", 1, "hour"], ["id", "min", 1, "min"], ["id", "sec", 1, "sec"], ["id", "date", 1, "date", "f-24", "mb-2"], [1, "m-0", "f-14", "text-light"], [1, "col-sm-6", "col-xl-3", "xl-50", "col-lg-6"], [1, "card", "social-widget-card"], ["data-label", "50%", 1, "redial-social-widget", "radial-bar-70"], [1, "fa", "fa-facebook", "font-primary"], [1, "b-b-light"], [1, "col", "text-center", "b-r-light"], [1, "counter", "mb-0", 3, "CountTo", "from", "duration"], [1, "col", "text-center"], [1, "fa", "fa-twitter", "font-primary"], [1, "fa", "fa-linkedin", "font-primary"], [1, "fa", "fa-google-plus", "font-primary"], [1, "col-md-4", "col-sm-12"], [1, "card", "browser-widget"], [1, "media", "card-body"], [1, "media-img"], ["src", "assets/images/dashboard/chrome.png", "alt", ""], ["src", "assets/images/dashboard/firefox.png", "alt", ""], ["src", "assets/images/dashboard/safari.png", "alt", ""], [1, "card-header"], [1, "user-status", "table-responsive"], [1, "table", "table-bordernone"], ["scope", "col"], [1, "digits"], [1, "font-primary"], [1, "font-secondary"], [1, "bd-t-none", "u-s-tb"], [1, "align-middle", "image-sm-size"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], [1, "d-inline-block"], [1, "text-muted", "digits"], [1, "progress-showcase"], [1, "progress", 2, "height", "8px"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "30%"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "60%"], ["src", "assets/images/user/6.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "30%"], ["src", "assets/images/user/7.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], [1, "col-sm-12", "col-lg-6", "col-xl-4", "xl-50", "col-md-12"], [1, "calender-widget"], [1, "cal-img"], [1, "cal-date"], [1, "cal-desc", "text-center", "card-body"], [1, "f-w-600"], [1, "text-muted", "mt-3", "mb-0"], [1, "col-sm-12", "col-lg-6", "col-xl-8", "xl-50", "col-md-12"], [1, "contact-form", "card-body"], [1, "theme-form"], [1, "form-icon"], [1, "icofont", "icofont-envelope-open"], [1, "form-group"], ["for", "exampleInputName"], ["id", "exampleInputName", "type", "text", "placeholder", "John Dio", 1, "form-control"], ["for", "exampleInputEmail1", 1, "col-form-label"], ["id", "exampleInputEmail1", "type", "email", "placeholder", "Demo@gmail.com", 1, "form-control"], ["rows", "3", "cols", "50", "placeholder", "Your Message", 1, "form-control", "textarea"], [1, "text-sm-right"], [1, "btn", "btn-primary-gradien"], [1, "col-xl-4", "col-lg-12"], [1, "text-uppercase"], [1, "crm-activity"], [1, "mr-3", "font-primary"], [1, "align-self-center", "media-body"], [1, "mt-0"], [1, "dates"], [1, "mr-3", "font-secondary"], [1, "col-xl-4"], [1, "card", "custom-card"], ["src", "assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", "assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], ["href", "javascript:void(0)"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "card", "testimonial", "text-center"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "card", "xl-none"], [1, "ecommerce-widget", "card-body"], [1, "total-num", "counter", 3, "CountTo", "from", "duration"], [1, "text-md-right"], [1, "product-stts", "font-primary", "ml-2"], [1, "icon-angle-up", "f-12", "ml-1"], [1, "icon-angle-down", "f-12", "ml-1"], [1, "progress", "lg-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["carouselSlide", "", "class", "item", 3, "id"], [1, "icon-quote-left"], ["alt", "", 1, "img-80", 3, "src"]], template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "9856");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "893");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "45631");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "6982");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "783");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "3674");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "-$2658(36%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "+$369(15%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "+$69(65%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "+$3654(90%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "There is no minimum donation, any sum is appreciated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "ngb-datepicker", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralComponent_Template_ngb_datepicker_ngModelChange_180_listener($event) { return ctx.model = $event; })("navigate", function GeneralComponent_Template_ngb_datepicker_navigate_180_listener($event) { return ctx.date = $event.next; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "svg", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "clippath", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "clippath", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "g", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "g", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "g", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "g", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "25\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Newyork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "svg", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "clippath", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "clippath", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "g", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "g", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "g", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "g", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "g", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "95\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Peris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "svg", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "g", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "g", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "g", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "50\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "svg", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "g", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "g", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "circle", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "g", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "circle", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "g", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "circle", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "g", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "circle", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "India, Surat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h4", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "36\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "svg", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "clippath", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "clippath", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "g", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "g", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "g", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "g", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "polygon", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "g", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "ul", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "li", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "li", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "li", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](298, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "kolkata, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h5", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "h5", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "h5", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "h5", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Google +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "PRODUCTS CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "table", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Simply dummy text of the printing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Long established");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "sometimes by accident");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Classical Latin literature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "keep the site on the Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "Molestiae consequatur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "td", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "Pain can procure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "EMPLOYEE STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "table", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "Skill Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "th", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](542, "img", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "span", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "(14+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](553, "div", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "2 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](559, "img", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "Holio Mako ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "span", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "(250+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "3 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](576, "img", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "Mohsib lara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "span", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "(99+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "Tester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](587, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "5 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "img", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "Hileri Soli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "span", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "(150+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "div", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "3 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "img", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "Pusiz bia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "span", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "(14+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](621, "div", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "td", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "5 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "div", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](627, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "APRIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "h6", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "I must explain to you how all this mistaken idea truth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "p", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets containing Lorem Ipsum passages, and more recently.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "div", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "form", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](646, "i", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "label", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](650, "input", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "label", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](654, "input", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "label", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](658, "textarea", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "div", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "button", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "SEND IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "h5", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "ul", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "span", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "h6", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "Established fact that a reader will be distracted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "ul", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "span", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "h6", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "Any desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "ul", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "span", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "h6", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "There isn't anything embarrassing hidden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "ul", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "span", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "h6", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "Contrary to popular belief, Lorem Ipsum is not simply. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "ul", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "span", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "h6", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "H-Code - A premium portfolio template from ThemeZaa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "ul", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "ul", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "li", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "div", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](735, "img", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](737, "img", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "ul", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](741, "i", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](744, "i", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](747, "i", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](750, "i", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](753, "i", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "div", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "Mark Jecno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "div", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "9564");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "Total Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "96");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "owl-carousel-o", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](783, GeneralComponent_783_Template, 1, 1, undefined, 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "div", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "div", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "h3", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "16665");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "div", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "span", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](799, "i", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "span", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](804, "i", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](807, "div", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 6659)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 9856)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "message-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 893)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 45631)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 6982)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 783)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 3674)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 69)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 25698)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 6954)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 63147)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 963198)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "cloud-drizzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](298, 108, ctx.today), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 6589)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 75269)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 6589)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 75269)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 1234)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 4369)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 369)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 3458)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 46)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 46)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 46)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 9564)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 49)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.owlcarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.owlcarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 16665)("from", 0)("duration", 1);
    } }, directives: [_shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselSlideDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general',
                templateUrl: './general.component.html',
                styleUrls: ['./general.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] }]; }, null); })();


/***/ }),

/***/ "IVP+":
/*!******************************************************!*\
  !*** ./src/app/components/widgets/widgets.module.ts ***!
  \******************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets-routing.module */ "JrLh");
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general/general.component */ "3I2X");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/chart.component */ "QFcp");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-count-to */ "a5BO");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-chartist */ "Cr32");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");














class WidgetsModule {
}
WidgetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__["WidgetsRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            angular_count_to__WEBPACK_IMPORTED_MODULE_6__["CountToModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__["WidgetsRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        angular_count_to__WEBPACK_IMPORTED_MODULE_6__["CountToModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _widgets_routing_module__WEBPACK_IMPORTED_MODULE_2__["WidgetsRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    angular_count_to__WEBPACK_IMPORTED_MODULE_6__["CountToModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "JrLh":
/*!**************************************************************!*\
  !*** ./src/app/components/widgets/widgets-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: WidgetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutingModule", function() { return WidgetsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/general.component */ "3I2X");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/chart.component */ "QFcp");






const routes = [
    {
        path: '',
        children: [
            {
                path: 'general',
                component: _general_general_component__WEBPACK_IMPORTED_MODULE_2__["GeneralComponent"],
                data: {
                    title: "General",
                    breadcrumb: "General"
                }
            },
            {
                path: 'chart',
                component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"],
                data: {
                    title: "Chart",
                    breadcrumb: "Chart"
                }
            },
        ]
    }
];
class WidgetsRoutingModule {
}
WidgetsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetsRoutingModule });
WidgetsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetsRoutingModule_Factory(t) { return new (t || WidgetsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "NJLe":
/*!***********************************************************!*\
  !*** ./src/app/shared/data/widgets-chart/chart-widget.ts ***!
  \***********************************************************/
/*! exports provided: chart1, chart2, chart3, WidgetBarChart1, WidgetBarChart2, liveProductChart, turnOverChart, monthlyChart, usesChart, financeWidget, orderStatusWidget, skillWidget, monthlydoughnutData, monthlydoughnutChartShowLabels, monthlydoughnutChartGradient, monthlydoughnutChartcolorScheme, dailydoughnutData, dailydoughnutChartShowLabels, dailydoughnutChartGradient, dailydoughnutChartcolorScheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chart1", function() { return chart1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chart2", function() { return chart2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chart3", function() { return chart3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetBarChart1", function() { return WidgetBarChart1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetBarChart2", function() { return WidgetBarChart2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveProductChart", function() { return liveProductChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnOverChart", function() { return turnOverChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthlyChart", function() { return monthlyChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usesChart", function() { return usesChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "financeWidget", function() { return financeWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStatusWidget", function() { return orderStatusWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skillWidget", function() { return skillWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthlydoughnutData", function() { return monthlydoughnutData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthlydoughnutChartShowLabels", function() { return monthlydoughnutChartShowLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthlydoughnutChartGradient", function() { return monthlydoughnutChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthlydoughnutChartcolorScheme", function() { return monthlydoughnutChartcolorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailydoughnutData", function() { return dailydoughnutData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailydoughnutChartShowLabels", function() { return dailydoughnutChartShowLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailydoughnutChartGradient", function() { return dailydoughnutChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailydoughnutChartcolorScheme", function() { return dailydoughnutChartcolorScheme; });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_0__);

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
//Line Chart
var chart1 = {
    type: 'Line',
    data: {
        series: [
            [25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__["Interpolation"].cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 100,
        showPoint: false,
    },
};
var chart2 = {
    type: 'Line',
    data: {
        series: [
            [25, 35, 70, 100, 90, 50, 60, 80, 40, 50, 60, 40, 80, 70, 60, 50, 100]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__["Interpolation"].cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 100,
        showPoint: false,
    },
};
var chart3 = {
    type: 'Line',
    data: {
        series: [
            [50, 100, 80, 60, 50, 60, 40, 80, 40, 50, 60, 40, 60, 70, 40, 50, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__["Interpolation"].cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 100,
        showPoint: false,
    },
};
var WidgetBarChart1 = {
    type: 'Bar',
    data: {
        series: [
            [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30]
        ]
    },
    options: {
        labels: [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30],
        legend: {
            labels: { fontColor: 'white' }
        },
        axisX: {
            showGrid: false,
            showLabel: true,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: true,
            offset: 0,
        },
        tooltips: {
            disabled: true
        },
        toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
        chartPadding: {
            bottom: 0,
            top: 0,
            left: 0
        },
        responsive: true,
        height: 200
    },
};
var WidgetBarChart2 = {
    type: 'Bar',
    data: {
        series: [
            [60.00, 110.00, 20.00, 60.00, 100.00, 70, 30.00, 80.00, 80.00, 60.00, 20.00, 70, 0, 80]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            bottom: 0,
            top: 0,
            left: 0
        },
        showArea: true,
        fullWidth: true,
        height: 200
    },
};
var liveProductChart = {
    type: 'Line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [
            [1, 5, 2, 5, 4, 3, 6],
        ]
    },
    options: {
        low: 0,
        showArea: false,
        showPoint: false,
        fullWidth: true,
        height: 300,
    },
    events: {
        draw: (data) => {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_0__["Svg"].Easing.easeOutQuint
                    }
                });
            }
        }
    }
};
var turnOverChart = {
    type: 'Bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [
            [1.9, 4.4, 1.5, 5, 4.4, 3.4],
            [6.4, 5.7, 7, 4, 5.5, 3.5],
            [5, 2.3, 3.6, 6, 3.6, 2.3]
        ]
    },
    options: {
        height: 300,
    }
};
var monthlyChart = {
    type: 'Bar',
    data: {
        labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
        series: [
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
        ]
    },
    options: {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function (value) {
                return (value / 1000) + 'k';
            }
        },
        height: 300
    }
};
var usesChart = {
    type: 'Line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [
            [1, 5, 2, 5, 4, 3],
            [2, 3, 4, 8, 1, 2],
            [5, 4, 3, 2, 1, 0.5]
        ]
    },
    options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        height: 300,
    }
};
var financeWidget = {
    type: 'Line',
    data: {
        series: [
            [5, 30, 27, 35, 30, 50, 70],
            [0, 5, 10, 7, 25, 20, 30]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__["Interpolation"].cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 200,
        showPoint: false,
    },
};
var orderStatusWidget = {
    type: 'Line',
    data: {
        series: [
            [null],
            [40, 15, 25, 20, 15, 20, 10, 25, 35, 13, 35, 10, 30, 20, 10, 15, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__["Interpolation"].cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 200,
        showPoint: false,
    },
};
var skillWidget = {
    type: 'Line',
    data: {
        series: [
            [null],
            [null],
            [5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__["Interpolation"].cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 200,
        showPoint: false,
    },
};
var monthlydoughnutData = [
    {
        value: 500,
        name: "Safari"
    },
    {
        value: 600,
        name: "Mozila Firefox"
    },
    {
        value: 400,
        name: "Google Crome"
    },
    {
        value: 700,
        name: "Opera Browser"
    }
];
//doughnut-Chart
//Monthly donught chart Options
var monthlydoughnutChartShowLabels = false;
var monthlydoughnutChartGradient = true;
var monthlydoughnutChartcolorScheme = {
    domain: [primary, secondary, primary, secondary],
};
var dailydoughnutData = [
    {
        value: 448,
        name: "India"
    },
    {
        value: 340,
        name: "USA"
    },
    {
        value: 270,
        name: "Canada"
    },
    {
        value: 359,
        name: "UK"
    }
];
//Monthly donught chart Options
var dailydoughnutChartShowLabels = false;
var dailydoughnutChartGradient = true;
var dailydoughnutChartcolorScheme = {
    domain: [primary, secondary, primary, secondary],
};


/***/ }),

/***/ "QFcp":
/*!*************************************************************!*\
  !*** ./src/app/components/widgets/chart/chart.component.ts ***!
  \*************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/widgets-chart/chart-widget */ "NJLe");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-count-to */ "a5BO");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "Cr32");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");







class ChartComponent {
    constructor() {
        this.isOpened = true;
        this.monthlydoughnutData = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["monthlydoughnutData"];
        this.dailydoughnutData = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["dailydoughnutData"];
        this.chart1 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["chart1"];
        this.chart2 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["chart2"];
        this.chart3 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["chart3"];
        this.WidgetBarChart1 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["WidgetBarChart1"];
        this.WidgetBarChart2 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["WidgetBarChart2"];
        this.liveProductChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["liveProductChart"];
        this.turnOverChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["turnOverChart"];
        this.monthlyChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["monthlyChart"];
        this.usesChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["usesChart"];
        this.financeWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["financeWidget"];
        this.orderStatusWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["orderStatusWidget"];
        this.skillWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["skillWidget"];
        // Doughnut Chart (Monthlt visitor chart)
        this.monthlydoughnutChartColorScheme = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["monthlydoughnutChartcolorScheme"];
        this.monthlydoughnutChartShowLabels = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["monthlydoughnutChartShowLabels"];
        this.monthlydoughnutChartGradient = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["monthlydoughnutChartGradient"];
        // Doughnut Chart (Daily visitor chart)
        this.dailydoughnutChartColorScheme = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["dailydoughnutChartcolorScheme"];
        this.dailydoughnutChartShowLabels = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["dailydoughnutChartShowLabels"];
        this.dailydoughnutChartGradient = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["dailydoughnutChartGradient"];
        Object.assign(this, { monthlydoughnutData: _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["monthlydoughnutData"], dailydoughnutData: _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_1__["dailydoughnutData"] });
    }
    ngOnInit() { }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 321, vars: 114, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-4", "col-md-12"], [1, "card"], [1, "chart-widget-top"], [1, "row", "card-body"], [1, "col-5"], [1, "font-primary"], [1, "num"], [1, "counter"], [1, "icon-angle-up", "f-12", "ml-1"], [1, "col-7", "text-right"], [1, "num", "total-value"], [1, "counter", 3, "CountTo", "from", "duration"], ["id", "chart-widget-top-first", 1, "flot-chart-placeholder"], [3, "data", "type", "options", "events"], [1, "col-7"], [1, "col-5", "text-right"], [1, "num", "total-value", "counter", 3, "CountTo", "from", "duration"], ["id", "chart-widget-top-second", 1, "flot-chart-placeholder"], [1, "col-8"], [1, "col-4", "text-right"], ["id", "chart-widget-top-third", 1, "flot-chart-placeholder"], [1, "col-xl-6", "col-md-12"], [1, "card", "o-hidden"], [1, "bar-chart-widget"], [1, "top-content", "bg-primary"], [1, "card-body", "pb-0"], [3, "data", "type", "options"], [1, "earning-details"], [1, "text-left"], [1, "mt-1", "num", "mb-0"], [1, "icon-announcement"], [1, "bottom-content", "card-body"], [1, "col-4", "b-r-light"], [1, "num", "font-primary"], [1, "text-muted", "mt-2", "mb-2", "block-bottom"], [1, "num", "m-0"], [1, "counter", "color-bottom", 3, "CountTo", "from", "duration"], [1, "col-4"], [1, "icofont", "icofont-coins"], [1, "xl-50", "col-md-6"], [1, "small-chart-widget"], [1, "card-header"], [1, "card-body", "bg-primary"], [1, "chart-container"], [1, "live-products"], [1, "live-products", 3, "data", "type", "options", "events"], [1, "card-body", "bg-secondary"], [1, "turnover"], [1, "monthly"], [3, "type", "data", "options"], [1, "uses"], [1, "uses", 3, "data", "type", "options"], [1, "col-xl-4", "col-lg-12"], [1, "status-widget"], [1, "col-9"], [1, "col-3", "text-sm-right"], ["data-feather", "navigation", 1, "text-muted"], [1, "card-body"], [1, "status-details"], [1, "col-4", "text-center"], [1, "counter", "mb-0", 3, "CountTo", "from", "duration"], [1, "mb-0"], [1, "status-chart", "bg-primary"], ["id", "finance-graph", 1, "flot-chart-placeholder"], ["data-feather", "shopping-bag", 1, "text-muted"], [1, "status-chart", "bg-secondary"], ["id", "order-graph", 1, "flot-chart-placeholder"], ["data-feather", "trending-up", 1, "text-muted"], [1, "flot-chart-placeholder", 3, "data", "type", "options"], [1, "col-sm-6"], [1, "donut-chart-widget"], [3, "scheme", "results", "explodeSlices", "labels", "arcWidth", "doughnut", "gradient"], ["id", "website-visiter-chart", 1, "flot-chart-placeholder"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "x-chartist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "x-chartist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "68");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "x-chartist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Marketing Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Advertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Live Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "x-chartist", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Turnover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Monthly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "x-chartist", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "x-chartist", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Investor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "h4", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Skill Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Converse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "x-chartist", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Browser Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "ngx-charts-pie-chart", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Website Visiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "ngx-charts-pie-chart", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 3654)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart1.data)("type", ctx.chart1.type)("options", ctx.chart1.options)("events", ctx.chart1.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 12569)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart2.data)("type", ctx.chart2.type)("options", ctx.chart2.options)("events", ctx.chart2.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 93)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart3.data)("type", ctx.chart3.type)("options", ctx.chart3.options)("events", ctx.chart3.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetBarChart1.data)("type", ctx.WidgetBarChart1.type)("options", ctx.WidgetBarChart1.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 3654)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 9313)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 2314)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 4219)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetBarChart2.data)("type", ctx.WidgetBarChart2.type)("options", ctx.WidgetBarChart2.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 3653)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 3659)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 698)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 9361)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.liveProductChart.data)("type", ctx.liveProductChart.type)("options", ctx.liveProductChart.options)("events", ctx.liveProductChart.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.turnOverChart.data)("type", ctx.turnOverChart.type)("options", ctx.turnOverChart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.monthlyChart.type)("data", ctx.monthlyChart.data)("options", ctx.monthlyChart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.usesChart.data)("type", ctx.usesChart.type)("options", ctx.usesChart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 3659)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 362)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 86)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.financeWidget.data)("type", ctx.financeWidget.type)("options", ctx.financeWidget.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 62)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 20)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.orderStatusWidget.data)("type", ctx.orderStatusWidget.type)("options", ctx.orderStatusWidget.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 25)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 40)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 35)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.skillWidget.data)("type", ctx.skillWidget.type)("options", ctx.skillWidget.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.monthlydoughnutChartColorScheme)("results", ctx.monthlydoughnutData)("explodeSlices", true)("labels", ctx.monthlydoughnutChartShowLabels)("arcWidth", 0.3)("doughnut", true)("gradient", ctx.monthlydoughnutChartGradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.dailydoughnutChartColorScheme)("results", ctx.dailydoughnutData)("explodeSlices", true)("labels", ctx.dailydoughnutChartShowLabels)("arcWidth", 0.3)("doughnut", true)("gradient", ctx.dailydoughnutChartGradient);
    } }, directives: [angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToDirective"], ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-widgets-widgets-module-es2015.js.map