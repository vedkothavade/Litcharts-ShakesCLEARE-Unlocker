// ==UserScript==
// @name         Litcharts ShakesCLEARE Unlocker
// @version      1.0
// @description  Unlock Litcharts ShakesCLEARE translation without paying for the A+ Subscription
// @author       nightshade
// @match        https://www.litcharts.com/
// @include      *://*litcharts.com/*
// @grant        none
// ==/UserScript==

//get paywalled text
var userTypeNodes = $(".paywall");
//remove paywall modifier
userTypeNodes.removeClass ("paywall");
