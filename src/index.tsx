import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "./theme";

// tslint:disable-next-line:no-unused-expression
injectGlobal`{
  body {
    @import url('https://fonts.googleapis.com/css?family=Kirang+Haerang|Roboto|Orbitron');
    margin: 0; 
    padding: 0;
    background-color: black;
    max-width: 100vw;
    overflow-x: hidden;
  }

.ant-select {
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  position: relative;
  outline: 0;
}
.ant-select ul,
.ant-select ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-select > ul > li > a {
  padding: 0;
  background-color: #fff;
}
.ant-select-arrow {
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  line-height: 1;
  margin-top: -6px;
  -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
}
.ant-select-arrow:before {
  display: block;
  font-family: "anticon" !important;
}
.ant-select-arrow * {
  display: none;
}
.ant-select-arrow:before {
  content: '\e61d';
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;
}
.ant-select-selection {
  outline: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: block;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select-selection:hover {
  border-color: #40a9ff;
  border-right-width: 1px !important;
}
.ant-select-focused .ant-select-selection,
.ant-select-selection:focus,
.ant-select-selection:active {
  border-color: #40a9ff;
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  border-right-width: 1px !important;
}
.ant-select-selection__clear {
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
  opacity: 0;
  position: absolute;
  right: 11px;
  z-index: 1;
  background: #fff;
  top: 50%;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.25);
  width: 12px;
  height: 12px;
  margin-top: -6px;
  line-height: 12px;
  cursor: pointer;
  -webkit-transition: color 0.3s ease, opacity 0.15s ease;
  transition: color 0.3s ease, opacity 0.15s ease;
}
.ant-select-selection__clear:before {
  display: block;
  font-family: 'anticon';
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e62e";
}
.ant-select-selection__clear:hover {
  color: rgba(0, 0, 0, 0.45);
}
.ant-select-selection:hover .ant-select-selection__clear {
  opacity: 1;
}
.ant-select-selection-selected-value {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  padding-right: 20px;
}
.ant-select-no-arrow .ant-select-selection-selected-value {
  padding-right: 0;
}
.ant-select-disabled {
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-disabled .ant-select-selection {
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-disabled .ant-select-selection:hover,
.ant-select-disabled .ant-select-selection:focus,
.ant-select-disabled .ant-select-selection:active {
  border-color: #d9d9d9;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ant-select-disabled .ant-select-selection__clear {
  display: none;
  visibility: hidden;
  pointer-events: none;
}
.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice {
  background: #f5f5f5;
  color: #aaa;
  padding-right: 10px;
}
.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice__remove {
  display: none;
}
.ant-select-selection--single {
  height: 32px;
  position: relative;
  cursor: pointer;
}
.ant-select-selection__rendered {
  display: block;
  margin-left: 11px;
  margin-right: 11px;
  position: relative;
  line-height: 30px;
}
.ant-select-selection__rendered:after {
  content: '.';
  visibility: hidden;
  pointer-events: none;
  display: inline-block;
  width: 0;
}
.ant-select-lg {
  font-size: 16px;
}
.ant-select-lg .ant-select-selection--single {
  height: 40px;
}
.ant-select-lg .ant-select-selection__rendered {
  line-height: 38px;
}
.ant-select-lg .ant-select-selection--multiple {
  min-height: 40px;
}
.ant-select-lg .ant-select-selection--multiple .ant-select-selection__rendered li {
  height: 32px;
  line-height: 32px;
}
.ant-select-lg .ant-select-selection--multiple .ant-select-selection__clear {
  top: 20px;
}
.ant-select-sm .ant-select-selection--single {
  height: 24px;
}
.ant-select-sm .ant-select-selection__rendered {
  line-height: 22px;
  margin: 0 7px;
}
.ant-select-sm .ant-select-selection--multiple {
  min-height: 24px;
}
.ant-select-sm .ant-select-selection--multiple .ant-select-selection__rendered li {
  height: 16px;
  line-height: 14px;
}
.ant-select-sm .ant-select-selection--multiple .ant-select-selection__clear {
  top: 12px;
}
.ant-select-sm .ant-select-selection__clear,
.ant-select-sm .ant-select-arrow {
  right: 8px;
}
.ant-select-disabled .ant-select-selection__choice__remove {
  color: rgba(0, 0, 0, 0.25);
  cursor: default;
}
.ant-select-disabled .ant-select-selection__choice__remove:hover {
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-search__field__wrap {
  display: inline-block;
  position: relative;
}
.ant-select-selection__placeholder,
.ant-select-search__field__placeholder {
  position: absolute;
  top: 50%;
  left: 0;
  right: 9px;
  color: #bfbfbf;
  line-height: 20px;
  height: 20px;
  max-width: 100%;
  margin-top: -10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.ant-select-search__field__placeholder {
  left: 12px;
}
.ant-select-search__field__mirror {
  position: absolute;
  top: -9999px;
  left: -9999px;
  white-space: pre;
  pointer-events: none;
}
.ant-select-search--inline {
  position: absolute;
  height: 100%;
  width: 100%;
}
.ant-select-search--inline .ant-select-search__field__wrap {
  width: 100%;
  height: 100%;
}
.ant-select-search--inline .ant-select-search__field {
  border-width: 0;
  font-size: 100%;
  height: 100%;
  width: 100%;
  background: transparent;
  outline: 0;
  border-radius: 4px;
  line-height: 1;
}
.ant-select-search--inline > i {
  float: right;
}
.ant-select-selection--multiple {
  min-height: 32px;
  cursor: text;
  padding-bottom: 3px;
  zoom: 1;
}
.ant-select-selection--multiple:before,
.ant-select-selection--multiple:after {
  content: "";
  display: table;
}
.ant-select-selection--multiple:after {
  clear: both;
}
.ant-select-selection--multiple .ant-select-search--inline {
  float: left;
  position: static;
  width: auto;
  padding: 0;
  max-width: 100%;
}
.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field {
  max-width: 100%;
  width: 0.75em;
}
.ant-select-selection--multiple .ant-select-selection__rendered {
  margin-left: 5px;
  margin-bottom: -3px;
  height: auto;
}
.ant-select-selection--multiple .ant-select-selection__placeholder {
  margin-left: 6px;
}
.ant-select-selection--multiple > ul > li,
.ant-select-selection--multiple .ant-select-selection__rendered > ul > li {
  margin-top: 3px;
  height: 24px;
  line-height: 22px;
}
.ant-select-selection--multiple .ant-select-selection__choice {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  cursor: default;
  float: left;
  margin-right: 4px;
  max-width: 99%;
  position: relative;
  overflow: hidden;
  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0 20px 0 10px;
}
.ant-select-selection--multiple .ant-select-selection__choice__disabled {
  padding: 0 10px;
}
.ant-select-selection--multiple .ant-select-selection__choice__content {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  -webkit-transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select-selection--multiple .ant-select-selection__choice__remove {
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.45);
  line-height: inherit;
  cursor: pointer;
  font-weight: bold;
  -webkit-transition: all .3s;
  transition: all .3s;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \9;
  -webkit-transform: scale(0.83333333) rotate(0deg);
      -ms-transform: scale(0.83333333) rotate(0deg);
          transform: scale(0.83333333) rotate(0deg);
  position: absolute;
  right: 4px;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove:before {
  display: block;
  font-family: "anticon" !important;
}
:root .ant-select-selection--multiple .ant-select-selection__choice__remove {
  font-size: 12px;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove:hover {
  color: #404040;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove:before {
  content: "\e633";
}
.ant-select-selection--multiple .ant-select-selection__clear {
  top: 16px;
}
.ant-select-allow-clear .ant-select-selection--single .ant-select-selection-selected-value {
  padding-right: 16px;
}
.ant-select-allow-clear .ant-select-selection--multiple .ant-select-selection__rendered {
  margin-right: 20px;
}
.ant-select-open .ant-select-arrow:before {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.ant-select-open .ant-select-selection {
  border-color: #40a9ff;
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  border-right-width: 1px !important;
}
.ant-select-combobox .ant-select-arrow {
  display: none;
}
.ant-select-combobox .ant-select-search--inline {
  height: 100%;
  width: 100%;
  float: none;
}
.ant-select-combobox .ant-select-search__field__wrap {
  width: 100%;
  height: 100%;
}
.ant-select-combobox .ant-select-search__field {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ant-select-combobox.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered {
  margin-right: 20px;
}
.ant-select-dropdown {
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  z-index: 1050;
  left: -9999px;
  top: -9999px;
  position: absolute;
  outline: none;
  font-size: 14px;
}
.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,
.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {
  -webkit-animation-name: antSlideUpIn;
          animation-name: antSlideUpIn;
}
.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft,
.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft {
  -webkit-animation-name: antSlideDownIn;
          animation-name: antSlideDownIn;
}
.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
  -webkit-animation-name: antSlideUpOut;
          animation-name: antSlideUpOut;
}
.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {
  -webkit-animation-name: antSlideDownOut;
          animation-name: antSlideDownOut;
}
.ant-select-dropdown-hidden {
  display: none;
}
.ant-select-dropdown-menu {
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  max-height: 250px;
  overflow: auto;
}
.ant-select-dropdown-menu-item-group-list {
  margin: 0;
  padding: 0;
}
.ant-select-dropdown-menu-item-group-list > .ant-select-dropdown-menu-item {
  padding-left: 20px;
}
.ant-select-dropdown-menu-item-group-title {
  color: rgba(0, 0, 0, 0.45);
  padding: 0 12px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
}
.ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:first-child:not(:last-child),
.ant-select-dropdown-menu-item-group:not(:last-child) .ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:last-child {
  border-radius: 0;
}
.ant-select-dropdown-menu-item {
  position: relative;
  display: block;
  padding: 5px 12px;
  line-height: 22px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.ant-select-dropdown-menu-item:hover {
  background-color: #e6f7ff;
}
.ant-select-dropdown-menu-item:first-child {
  border-radius: 4px 4px 0 0;
}
.ant-select-dropdown-menu-item:last-child {
  border-radius: 0 0 4px 4px;
}
.ant-select-dropdown-menu-item-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-select-dropdown-menu-item-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #fff;
  cursor: not-allowed;
}
.ant-select-dropdown-menu-item-selected,
.ant-select-dropdown-menu-item-selected:hover {
  background-color: #fafafa;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
}
.ant-select-dropdown-menu-item-active {
  background-color: #e6f7ff;
}
.ant-select-dropdown-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  background-color: #e8e8e8;
  line-height: 0;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {
  font-family: 'anticon';
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e632";
  color: transparent;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \9;
  -webkit-transform: scale(0.83333333) rotate(0deg);
      -ms-transform: scale(0.83333333) rotate(0deg);
          transform: scale(0.83333333) rotate(0deg);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  right: 12px;
  font-weight: bold;
  text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;
}
:root .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {
  font-size: 12px;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover:after {
  color: #ddd;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-disabled:after {
  display: none;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:after,
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover:after {
  color: #1890ff;
  display: inline-block;
}
.ant-select-dropdown-container-open .ant-select-dropdown,
.ant-select-dropdown-open .ant-select-dropdown {
  display: block;
}
.ant-timeline {
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ant-timeline-item {
  position: relative;
  padding: 0 0 20px;
  list-style: none;
  margin: 0;
  font-size: 14px;
}
.ant-timeline-item-tail {
  position: absolute;
  left: 4px;
  top: 0.75em;
  height: 100%;
  border-left: 2px solid #e8e8e8;
}
.ant-timeline-item-pending .ant-timeline-item-head {
  font-size: 12px;
}
.ant-timeline-item-pending .ant-timeline-item-tail {
  display: none;
}
.ant-timeline-item-head {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 100px;
  border: 2px solid transparent;
}
.ant-timeline-item-head-blue {
  border-color: #1890ff;
  color: #1890ff;
}
.ant-timeline-item-head-red {
  border-color: #f5222d;
  color: #f5222d;
}
.ant-timeline-item-head-green {
  border-color: #52c41a;
  color: #52c41a;
}
.ant-timeline-item-head-custom {
  position: absolute;
  text-align: center;
  line-height: 1;
  margin-top: 0;
  border: 0;
  height: auto;
  border-radius: 0;
  padding: 3px 1px;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  top: 5.5px;
  left: 5px;
  width: auto;
}
.ant-timeline-item-content {
  margin: 0 0 0 18px;
  position: relative;
  top: -6px;
}
.ant-timeline-item-last .ant-timeline-item-tail {
  display: none;
}
.ant-timeline-item-last .ant-timeline-item-content {
  min-height: 48px;
}
.ant-timeline.ant-timeline-alternate .ant-timeline-item-tail,
.ant-timeline.ant-timeline-right .ant-timeline-item-tail,
.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,
.ant-timeline.ant-timeline-right .ant-timeline-item-head,
.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,
.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom {
  left: 50%;
}
.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,
.ant-timeline.ant-timeline-right .ant-timeline-item-head {
  margin-left: -4px;
}
.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,
.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom {
  margin-left: 1px;
}
.ant-timeline.ant-timeline-alternate .ant-timeline-item-left .ant-timeline-item-content,
.ant-timeline.ant-timeline-right .ant-timeline-item-left .ant-timeline-item-content {
  text-align: left;
  left: 50%;
  width: 50%;
}
.ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content,
.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {
  text-align: right;
  right: 50%;
  margin-right: 18px;
  width: 50%;
  left: -30px;
}
.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-tail,
.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head,
.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head-custom {
  left: 100%;
}
.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {
  right: 0;
  width: 100%;
  left: -30px;
}
.ant-timeline.ant-timeline-pending .ant-timeline-item-last .ant-timeline-item-tail {
  border-left: 2px dotted #e8e8e8;
  display: block;
}
.ant-timeline.ant-timeline-reverse .ant-timeline-item-last .ant-timeline-item-tail {
  display: none;
}
.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-tail {
  border-left: 2px dotted #e8e8e8;
  display: block;
}
.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-content {
  min-height: 48px;
}
}
`;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
