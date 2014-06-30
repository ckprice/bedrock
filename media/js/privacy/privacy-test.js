/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

$(function() {
    'use strict';

    var data = [
        { 'time': 1, 'pos': 1, 'domain': 'gmail.com'},
        { 'time': 1, 'pos': -1, 'domain': 'google.com'},
        { 'time': 1, 'pos': -2, 'domain': 'dnsrsearch.com'},
        { 'time': 1, 'pos': -3, 'domain': 'youtube.com'},

        { 'time': 2, 'pos': 1, 'domain': 'instagram.com'},
        { 'time': 2, 'pos': -1, 'domain': 'tumblr.com'},
        { 'time': 2, 'pos': -2, 'domain': 'quantserve.com'},
        { 'time': 2, 'pos': -3, 'domain': 'akamai.net'},

        { 'time': 2, 'pos': 2, 'domain': 'twitter.com'},
        { 'time': 2, 'pos': -4, 'domain': 'vine.co'},
        { 'time': 2, 'pos': -5, 'domain': 'superfish.com'},

        { 'time': 3, 'pos': 1, 'domain': 'cnn.com'},
        { 'time': 3, 'pos': -1, 'domain': 'turner.com'},
        { 'time': 3, 'pos': -2, 'domain': 'chartbeat.net'},
        { 'time': 3, 'pos': -3, 'domain': 'facebook.com'},
        { 'time': 3, 'pos': -4, 'domain': 'scorecardresearch.com'},

        { 'time': 3, 'pos': 2, 'domain': 'huffingtonpost.com'},
        { 'time': 3, 'pos': -5, 'domain': 'aol.com'},
        { 'time': 3, 'pos': -6, 'domain': 'google.com'},
        { 'time': 3, 'pos': -7, 'domain': 'facebook.com'},
        { 'time': 3, 'pos': -8, 'domain': 'youtube.com'},

        { 'time': 3, 'pos': 3, 'domain': 'bbc.com'},
        { 'time': 3, 'pos': -9, 'domain': 'chartbeat.com'},
        { 'time': 3, 'pos': -10, 'domain': 'effectivemeasure.net'},
        { 'time': 3, 'pos': -11, 'domain': 'doubleclick.net'},
        { 'time': 3, 'pos': -12, 'domain': '2o7.net'},
        { 'time': 3, 'pos': -13, 'domain': 'googlesyndication.com'},

        { 'time': 3, 'pos': 4, 'domain': 'facebook.com'},
        { 'time': 3, 'pos': -14, 'domain': 'doubleclick.net'},
        { 'time': 3, 'pos': -15, 'domain': 'amazon-adsystem.com'},

        { 'time': 4, 'pos': 1, 'domain': 'google.com'},
        { 'time': 4, 'pos': -1, 'domain': 'youtube.com'},
        { 'time': 4, 'pos': -2, 'domain': 'doubleclick.net'},
        { 'time': 4, 'pos': -3, 'domain': 'googleadservices.com'},

        { 'time': 4, 'pos': 2, 'domain': 'tripadvisor.com'},
        { 'time': 4, 'pos': -4, 'domain': 'facebook.com'},
        { 'time': 4, 'pos': -5, 'domain': 'google.com'},
        { 'time': 4, 'pos': -6, 'domain': 'doubleclick.net'},
        { 'time': 4, 'pos': -7, 'domain': 'googlesyndication.com'},
        { 'time': 4, 'pos': -8, 'domain': 'choicestream.com'},
        { 'time': 4, 'pos': -9, 'domain': 'triggit.com'},

        { 'time': 5, 'pos': 1, 'domain': 'yammer.com'},
        { 'time': 5, 'pos': -1, 'domain': 'googleadservices.com'},
        { 'time': 5, 'pos': -2, 'domain': 'adroll.com'},
        { 'time': 5, 'pos': -3, 'domain': 'google-analytics.com'},

        { 'time': 5, 'pos': 2, 'domain': 'github.com'},
        { 'time': 5, 'pos': -4, 'domain': 'gravatar.com'},
        { 'time': 5, 'pos': -5, 'domain': 'wp.com'},
        { 'time': 5, 'pos': -6, 'domain': 'gaug.es'},
        { 'time': 5, 'pos': -7, 'domain': 'google-analytics.com'},

        { 'time': 6, 'pos': 1, 'domain': 'stackoverflow.com'},
        { 'time': 6, 'pos': -1, 'domain': 'gravatar.com'},
        { 'time': 6, 'pos': -2, 'domain': 'quantserve.com'},
        { 'time': 6, 'pos': -3, 'domain': 'scorecardresearch.com'},
        { 'time': 6, 'pos': -4, 'domain': 'doubleclick.net'},
        { 'time': 6, 'pos': -5, 'domain': 'facebook.com'},
        { 'time': 6, 'pos': -6, 'domain': 'googlesyndication.com'},

        { 'time': 6, 'pos': 2, 'domain': 'wikipedia.org'},
        { 'time': 6, 'pos': -7, 'domain': 'nav-links.com'},
        { 'time': 6, 'pos': -8, 'domain': 'visadd.com'},

        { 'time': 7, 'pos': 1, 'domain': 'blogger.com'},
        { 'time': 7, 'pos': -1, 'domain': 'google.com'},
        { 'time': 7, 'pos': -2, 'domain': 'youtube.com'},
        { 'time': 7, 'pos': -3, 'domain': 'wordpress.com'},

        { 'time': 7, 'pos': 2, 'domain': 'github.com'},
        { 'time': 7, 'pos': -4, 'domain': 'gravatar.com'},
        { 'time': 7, 'pos': -5, 'domain': 'wp.com'},
        { 'time': 7, 'pos': -6, 'domain': 'gaug.es'},
        { 'time': 7, 'pos': -7, 'domain': 'google-analytics.com'},

        { 'time': 7, 'pos': 3, 'domain': 'trello.com'},
        { 'time': 7, 'pos': -8, 'domain': 'google.com'},
        { 'time': 7, 'pos': -9, 'domain': 'quantserve.com'},
        { 'time': 7, 'pos': -10, 'domain': 'dropbox.com'},
        { 'time': 7, 'pos': -11, 'domain': 'facebook.com'},

        { 'time': 8, 'pos': 1, 'domain': 'w3schools.com'},
        { 'time': 8, 'pos': -1, 'domain': 'doubleclick.net'},
        { 'time': 8, 'pos': -2, 'domain': 'googlesyndication.com'},
        { 'time': 8, 'pos': -3, 'domain': 'googleadservices.com'},
        { 'time': 8, 'pos': -4, 'domain': 'ebay.com'},
        { 'time': 8, 'pos': -5, 'domain': 'adzerk.net'},
        { 'time': 8, 'pos': -6, 'domain': 'betrad.com'},

        { 'time': 8, 'pos': 2, 'domain': 'stackoverflow.com'},
        { 'time': 8, 'pos': -7, 'domain': 'gravatar.com'},
        { 'time': 8, 'pos': -8, 'domain': 'quantserve.com'},
        { 'time': 8, 'pos': -9, 'domain': 'scorecardresearch.com'},
        { 'time': 8, 'pos': -10, 'domain': 'doubleclick.net'},
        { 'time': 8, 'pos': -11, 'domain': 'facebook.com'},
        { 'time': 8, 'pos': -12, 'domain': 'googlesyndication.com'},

        { 'time': 11, 'pos': 1, 'domain': 'xkcd.com'},
        { 'time': 11, 'pos': -1, 'domain': 'google.com'},
        { 'time': 11, 'pos': -2, 'domain': 'last.fm'},
        { 'time': 11, 'pos': -3, 'domain': 'youtube.com'},

        { 'time': 11, 'pos': 2, 'domain': 'boingboing.net'},
        { 'time': 11, 'pos': -4, 'domain': 'google.com'},
        { 'time': 11, 'pos': -5, 'domain': 'disqus.com'},
        { 'time': 11, 'pos': -6, 'domain': 'youtube.com'},
        { 'time': 11, 'pos': -7, 'domain': 'quantserve.com'},
        { 'time': 11, 'pos': -8, 'domain': 'googletagservices.com'},
        { 'time': 11, 'pos': -9, 'domain': 'scorecardresearch.com'},
        { 'time': 11, 'pos': -10, 'domain': 'googlesyndication.com'},
        { 'time': 11, 'pos': -11, 'domain': 'doubleclick.net'},
        { 'time': 11, 'pos': -12, 'domain': 'blockmetrics.com'},

        { 'time': 11, 'pos': 3, 'domain': 'pinterest.com'},
        { 'time': 11, 'pos': -13, 'domain': 'facebook.com'},
        { 'time': 11, 'pos': -14, 'domain': 'google.com'},
        { 'time': 11, 'pos': -15, 'domain': 'superfish.com'},

        { 'time': 12, 'pos': 1, 'domain': 'ycombinator.com'},
        { 'time': 12, 'pos': -1, 'domain': 'google.com'},

        { 'time': 13, 'pos': 1, 'domain': 'gmail.com'},
        { 'time': 13, 'pos': -1, 'domain': 'google.com'},
        { 'time': 13, 'pos': -2, 'domain': 'nav-links.com'},
        { 'time': 13, 'pos': -3, 'domain': 'youtube.com'},

        { 'time': 14, 'pos': 1, 'domain': 'nytimes.com'},
        { 'time': 14, 'pos': -1, 'domain': 'chartbeat.com'},
        { 'time': 14, 'pos': -2, 'domain': 'dynamicyield.com'},
        { 'time': 14, 'pos': -3, 'domain': 'scorecardresearch.com'},
        { 'time': 14, 'pos': -4, 'domain': 'doubleclick.net'},
        { 'time': 14, 'pos': -5, 'domain': 'googlesyndication.com'},
        { 'time': 14, 'pos': -6, 'domain': 'brightcove.com'},

        { 'time': 14, 'pos': 2, 'domain': 'cnn.com'},
        { 'time': 14, 'pos': -7, 'domain': 'turner.com'},
        { 'time': 14, 'pos': -8, 'domain': 'outbrain.com'},
        { 'time': 14, 'pos': -9, 'domain': 'facebook.com'},
        { 'time': 14, 'pos': -10, 'domain': 'disqus.com'},
        { 'time': 14, 'pos': -11, 'domain': 'visualrevenue.com'},

        { 'time': 14, 'pos': 3, 'domain': 'reuters.com'},
        { 'time': 14, 'pos': -12, 'domain': 'google.com'},
        { 'time': 14, 'pos': -13, 'domain': 'taboola.com'},
        { 'time': 14, 'pos': -14, 'domain': 'ensighten.com'},
        { 'time': 14, 'pos': -15, 'domain': 'bluekai.com'},

        { 'time': 15, 'pos': 1, 'domain': 'theguardian.com'},
        { 'time': 15, 'pos': -1, 'domain': 'chartbeat.net'},
        { 'time': 15, 'pos': -2, 'domain': 'google.com'},
        { 'time': 15, 'pos': -3, 'domain': 'scorecardresearch.com'},
        { 'time': 15, 'pos': -4, 'domain': 'facebook.com'},
        { 'time': 15, 'pos': -5, 'domain': 'quantserve.com'},
        { 'time': 15, 'pos': -6, 'domain': 'wunderloop.net'},
        { 'time': 15, 'pos': -7, 'domain': 'mathtag.com'},

        { 'time': 15, 'pos': 2, 'domain': 'slate.com'},
        { 'time': 15, 'pos': -8, 'domain': 'trove.com'},
        { 'time': 15, 'pos': -9, 'domain': 'foreignpolicy.com'},
        { 'time': 15, 'pos': -10, 'domain': 'parsely.com'},
        { 'time': 15, 'pos': -11, 'domain': 'visualrevenue.com'},
        { 'time': 15, 'pos': -12, 'domain': 'optimizely.com'},
        { 'time': 15, 'pos': -13, 'domain': 'twitter.com'},
        { 'time': 15, 'pos': -14, 'domain': 'outbrain.com'},
        { 'time': 15, 'pos': -15, 'domain': 'googlesyndication.com'},

        { 'time': 16, 'pos': 1, 'domain': 'wordpress.com'},
        { 'time': 16, 'pos': -1, 'domain': 'gravatar.com'},
        { 'time': 16, 'pos': -2, 'domain': 'quantserve.com'},
        { 'time': 16, 'pos': -3, 'domain': 'facebook.com'},
        { 'time': 16, 'pos': -4, 'domain': 'twitter.com'},
        { 'time': 16, 'pos': -5, 'domain': 'google.com'},
        { 'time': 16, 'pos': -6, 'domain': 'youtube.com'},

        { 'time': 20, 'pos': 1, 'domain': 'reddit.com'},
        { 'time': 20, 'pos': -1, 'domain': 'youtube.com'},
        { 'time': 20, 'pos': -2, 'domain': 'paypal.com'},
        { 'time': 20, 'pos': -3, 'domain': 'tumblr.com'},
        { 'time': 20, 'pos': -4, 'domain': 'adzerk.net'},

        { 'time': 21, 'pos': 1, 'domain': 'gmail.com'},
        { 'time': 21, 'pos': -1, 'domain': 'google.com'},
        { 'time': 21, 'pos': -2, 'domain': 'superfish.com'},
        { 'time': 21, 'pos': -3, 'domain': 'youtube.com'},

        { 'time': 21, 'pos': 2, 'domain': 'youtube.com'},
        { 'time': 21, 'pos': -4, 'domain': 'google.com'},
        { 'time': 21, 'pos': -5, 'domain': 'doubleclick.net'},
        { 'time': 21, 'pos': -6, 'domain': 'googlesyndication.com'},
        { 'time': 21, 'pos': -7, 'domain': 'googleadservices.com'},
        { 'time': 21, 'pos': -8, 'domain': 'plus.googleapis.com'},

        { 'time': 21, 'pos': 3, 'domain': 'amazon.com'},
        { 'time': 21, 'pos': -9, 'domain': 'amazon-adsystem.com'},
        { 'time': 21, 'pos': -10, 'domain': 'doubleclick.net'},
        { 'time': 21, 'pos': -11, 'domain': 'googlesyndication.com'},
        { 'time': 21, 'pos': -12, 'domain': 'a9.com'},
        { 'time': 21, 'pos': -13, 'domain': 'adsafeprotected.com'},

        { 'time': 24, 'pos': 1, 'domain': 'facebook.com'},
        { 'time': 24, 'pos': -1, 'domain': 'doubleclick.net'},
        { 'time': 24, 'pos': -2, 'domain': 'amazon-adsystem.com'},
        { 'time': 24, 'pos': -3, 'domain': 'scorecardresearch.com'},

        { 'time': 24, 'pos': 2, 'domain': 'instagram.com'},
        { 'time': 24, 'pos': -4, 'domain': 'tumblr.com'},
        { 'time': 24, 'pos': -5, 'domain': 'quantserve.com'},
        { 'time': 24, 'pos': -6, 'domain': 'superfish.com'},

        { 'time': 24, 'pos': 3, 'domain': 'twitter.com'},
        { 'time': 24, 'pos': -7, 'domain': 'vine.co'},
        { 'time': 24, 'pos': -8, 'domain': 'youtube.com'},
    ];

    // var data = [
    //     [1, 1], [1, 2], [1, -1], [1, -2], [1, -3], [1, -4],
    //     [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, -1], [2, -2], [2, -3], [2, -4], [2, -5], [2, -6], [2, -7], [2, -8], [2, -9], [2, -10], [2, -11], [2, -12], [2, -13],
    //     [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, -1], [3, -2], [3, -3], [3, -4], [3, -5], [3, -6], [3, -7], [3, -8], [3, -9], [3, -10], [3, -11], [3, -12], [3, -13], [3, -14], [3, -15],
    //     [4, 1], [4, 2], [4, -1], [4, -2], [4, -3], [4, -4], [4, -5], [4, -6], [4, -7], [4, -8], [4, -9], [4, -10], [4, -11], [4, -12], [4, -13],
    //     [5, 1], [5, -1], [5, -2], [5, -3], [5, -4], [5, -5], [5, -6], [5, -7], [5, -8], [5, -9],

    //     [7, 1], [7, 2], [7, -1], [7, -2], [7, -3], [7, -4], [7, -5], [7, -6], [7, -7], [7, -8], [7, -9], [7, -10], [7, -11], [7, -12], [7, -13], [7, -14], [7, -15],
    //     [8, 1], [8, 2], [8, 3], [8, -1], [8, -2], [8, -3], [8, -4], [8, -5], [8, -6], [8, -7], [8, -8], [8, -9], [8, -10], [8, -11], [8, -12], [8, -13], [8, -14], [8, -15],
    //     [9, 1], [9, -1], [9, -2], [9, -3], [9, -4], [9, -5], [9, -6], [9, -7], [9, -8], [9, -9], [9, -10], [9, -11], [9, -12], [9, -13], [9, -14],

    //     [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [11, -1], [11, -2], [11, -3], [11, -4], [11, -5], [11, -6], [11, -7], [11, -8], [11, -9], [11, -10], [11, -11], [11, -12], [11, -13], [11, -14], [11, -15],
    //     [12, 1], [12, 2], [12, -1], [12, -2], [12, -3], [12, -4], [12, -5], [12, -6], [12, -7], [12, -8], [12, -9], [12, -10], [12, -11], [12, -12], [12, -13], [12, -14], [12, -15],
    //     [13, 1], [13, -1], [13, -2], [13, -3], [13, -4], [13, -5], [13, -6], [13, -7], [13, -8], [13, -9], [13, -10], [13, -11], [13, -12],
    //     [14, -1], [14, -2],
    //     [15, -1], [15, -2], [15, -3],
    //     [16, 1], [16, 2], [16, -1], [16, -2], [16, -3], [16, -4], [16, -5], [16, -6], [16, -7], [16, -8], [16, -9], [16, -10], [16, -11], [16, -12], [16, -13], [16, -14], [16, -15],
    //     [17, 1], [17, -1], [17, -2], [17, -3], [17, -4], [17, -5], [17, -6], [17, -7], [17, -8], [17, -9], [17, -10], [17, -11], [17, -12], [17, -13], [17, -14], [17, -15],

    //     [19, 1], [19, -1], [19, -2], [19, -3], [19, -4], [19, -5], [19, -6], [19, -7], [19, -8], [19, -9], [19, -10],
    //     [20, 1], [20, 2], [20, -1], [20, -2], [20, -3], [20, -4], [20, -5], [20, -6], [20, -7], [20, -8], [20, -9], [20, -10], [20, -11], [20, -12], [20, -13], [20, -14], [20, -15],
    //     [21, 1], [21, 2], [21, 3], [21, -1], [21, -2], [21, -3], [21, -4], [21, -5], [21, -6], [21, -7], [21, -8], [21, -9], [21, -10], [21, -11], [21, -12], [21, -13], [21, -14], [21, -15],

    //     [23, 1], [23, 2], [23, -1], [23, -2], [23, -3], [23, -4], [23, -5], [23, -6], [23, -7], [23, -8], [23, -9], [23, -10], [23, -11], [23, -12], [23, -13], [23, -14], [23, -15],
    //     [24, 1], [24, 2], [24, -1], [24, -2], [24, -3], [24, -4], [24, -5], [24, -6], [24, -7], [24, -8], [24, -9], [24, -10], [24, -11], [24, -12], [24, -13], [24, -14], [24, -15]
    // ];

    /*
     * d3 utility method to bring svg node to front.
     */
    d3.selection.prototype.moveToFront = function() {
      return this.each(function(){
        this.parentNode.appendChild(this);
      });
    };

    /*
     * ScatterPlot constructor
     * @param data (array)
     */
    function ScatterPlot (data) {
        this.circles = null;
        this.timer = null;
        this.contentTimer = null;
        this.$slider = $('#slider');
        this.$sun = $('.sun-inner');
        this.$window = $(window);
        this.$slideContent = $('.day-in-life');
        this.$visited = $('.visited span');
        this.$unknown = $('.unknown span');
        this.currentIndex = null;
        this.cache = data;
        this.svg = null;
        this.y = null;
        this.x = null;
        this.totalTicks = 24;
        this.points = [0, 5, 10, 15, 20, 24];
        this.StoryPoints = [0, 1, 5, 10, 15, 20, 24];
    }

    /*
     * Creates SVG linear gradient background for animation
     */
    ScatterPlot.prototype.createGradientBackground = function () {
        this.gradContainer = d3.select('#gradient-container');
        this.gradient = this.gradContainer.append('svg:linearGradient')
            .attr('id', 'gradient1');
        this.gradient.append('svg:stop')
            .attr('class', 'stop1')
            .attr('offset', '0%')
            .attr('stop-color', '#90ADC6');
        this.gradient.append('svg:stop')
            .attr('class', 'stop2')
            .attr('offset', '100%')
            .attr('stop-color', '#92BBDB');
        this.rect = this.gradContainer.append('svg:rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .style('fill', 'url(#gradient1)');
    };

    /*
     * Creates an empty scatterplot graph and appends it to the DOM
     */
    ScatterPlot.prototype.createGraph = function () {
        var margin = {top: 0, right: 60, bottom: 0, left: 60};
        var width = 600 - margin.left - margin.right;
        var height = 700 - margin.top - margin.bottom;

        this.x = d3.scale.linear().domain([0, this.totalTicks]).range([ 0, width ]);
        this.y = d3.scale.linear().domain([-16, 16]).range([ height, 0 ]);

        this.svg = d3.select('#graph')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .attr('class', 'chart');

        this.main = this.svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'main');

        // draw the x axis
        var xAxis = d3.svg.axis()
        .scale(this.x)
        .orient('bottom')
        .ticks(this.totalTicks)
        .tickValues(this.points)
        .tickPadding(15)
        .tickFormat(this.formatTickLabel);

        this.main.append('g')
        .attr('transform', 'translate(0,' + (height + 2) / 2 + ')')
        .attr('class', 'axis')
        .call(xAxis);

        this.plot = this.main.append('g').attr('class', 'plot');
    };

    /*
     * Updates scatterplot graph based on the current data
     * @param data (array), @param index (number)
     */
    ScatterPlot.prototype.updateGraph = function (data, index) {
        var self = this;
        var circles = this.plot.selectAll('circle').data(data, function (d) {
            return '' + d.pos + d.time;
        });

        circles.enter().append('circle')
            .attr('cx', function (d) {
                return self.x(d.time);
            })
            .attr('cy', function (d) {
                return self.y(d.pos);
            })
            .attr('r', 0)
            .attr('fill', function (d) {
                return d.pos > 0 ? '#BAD4EC' : '#000';
            })
            .attr('fill-opacity', function (d) {
                return d.pos > 0 ? 1 : 0.5;
            })
            .transition()
            .delay(function (d) {
                return d.time === index ? Math.abs(d.pos) * 50 : 0;
            })
            .attr('r', 6);

        circles.exit().remove();
    };

    /*
     * Shows text content based on slider step value
     * @param step (number)
     */
    ScatterPlot.prototype.showSlideContent = function (step) {
        var $current = this.$slideContent.find('li.current');
        var $step;
        var point;

        $.each(this.StoryPoints, function (i, d) {
            if (step >= d) {
                point = d;
            }
        });

        $step = this.$slideContent.find('.step' + point);

        if ($step.length && !$step.hasClass('current')) {
            clearTimeout(this.contentTimer);
            if ($current.length) {
                $step.show();
                this.contentTimer = setTimeout(function () {
                    $step.addClass('current');
                }, 50);
                $current.removeClass('current');
                this.contentTimer = setTimeout(function () {
                    $current.hide();
                }, 500);
            } else {
                $step.show();
                this.contentTimer = setTimeout(function () {
                    $step.addClass('current');
                }, 50);
            }
        }
    };

    /*
     * Update time of day based on slider step value
     * @param step (number)
     */
    ScatterPlot.prototype.scrollToGradient = function (step, direction) {
        //var width = this.$window.width();
        var percent = (step / this.totalTicks) * 100;
        //var pos = Math.round(width * ((percent * 2) / 10)) + 'px';
        var rotation = Math.round(percent) * 1.8;
        var nearest = Math.ceil(percent / 10) * 10;
        var color1 = '#90ADC6';
        var color2 = '#92BBDB';
        var delay1 = direction === 'forward' ? 500 : 300;
        var delay2 = direction === 'forward' ? 300 : 500;

        switch (nearest) {
        case 0:
            color1 = '#90ADC6';
            color2 = '#92BBDB';
            break;
        case 10:
            color1 = '#90ADC6';
            color2 = '#92BBDB';
            break;
        case 20:
            color1 = '#92BBDB';
            color2 = '#8AC0E5';
            break;
        case 30:
            color1 = '#8AC0E5';
            color2 = '#75B7E3';
            break;
        case 40:
            color1 = '#75B7E3';
            color2 = '#3CABE5';
            break;
        case 50:
            color1 = '#3CABE5';
            color2 = '#10A5E2';
            break;
        case 60:
            color1 = '#10A5E2';
            color2 = '#27A1D3';
            break;
        case 70:
            color1 = '#27A1D3';
            color2 = '#8894A9';
            break;
        case 80:
            color1 = '#8894A9';
            color2 = '#BA7567';
            break;
        case 90:
            color1 = '#BA7567';
            color2 = '#785472';
            break;
        case 100:
            color1 = '#785472';
            color2 = '#2F3F74';
            break;
        default:
            color1 = '#90ADC6';
            color2 = '#92BBDB';
        }

        this.$sun.css({
            '-webkit-transform': 'rotate(' + rotation + 'deg)',
            'transform': 'rotate(' + rotation + 'deg)'
        });

        this.gradient.select('.stop1').transition().delay(delay1).duration(500).attr('stop-color', color1);
        this.gradient.select('.stop2').transition().delay(delay2).duration(500).attr('stop-color', color2);
    };

    /*
     * Creates custom tick axis for graph
     */
    ScatterPlot.prototype.createCustomTicks = function () {
        var ticks = this.svg.selectAll('.tick');
        ticks.append('circle').attr('r', 6).attr('fill', '#454545');
        ticks.on('click', $.proxy(function (d) {
            this.$slider.val(d).change();
        }, this));
        ticks.selectAll('line').remove();
        ticks.moveToFront();
    };

    /*
     * Override default tick labels on graph axis
     */
    ScatterPlot.prototype.formatTickLabel = function () {
        return null;
    };

    /*
     * Update custom tick axis styling based on slider step value
     * @param step (number)
     */
    ScatterPlot.prototype.updateProgressTick = function (step) {
        var ticks = d3.select('.axis').selectAll('circle');
        ticks.transition().attr('fill', function (d) {
            return d <= step ? '#4DF32B' : '#454545';
        });
    };

    /*
     * Update page stats based on current graph data
     */
    ScatterPlot.prototype.updateStats = function () {
        var visited = 0;
        var unknown = 0;

        $.each(this.cache, function (i, d) {
            if (d.count > 0) {
                visited += 1;
            } else {
                unknown += 1;
            }
        });

        this.$visited.text(visited);
        this.$unknown.text(unknown);
    };

    /*
     * Handle slider value changes and update the graph based on position
     * @param position (number), value (string)
     */
    ScatterPlot.prototype.onSliderChange = function (position, value) {
        var val = parseInt(value, 10);
        var direction = 'forward';

        if (val === this.currentIndex) {
            // if we're already at the supplied value, do nothing.
            return;
        }

        this.cache = [];
        clearTimeout(this.timer);

        // we only want to draw the dots that are less
        // than or equal to the current slider position
        $.each(data, $.proxy(function (i, d) {
            if (d.time <= val) {
                this.cache.push(d);
            } else if (val === 0) {
                this.cache = [];
            }
        }, this));
        if (val < this.currentIndex) {
            this.updateGraph(this.cache, val);
            direction = 'backward';
        } else if (this.cache.length > 0) {
            this.updateGraph(this.cache, val);
            direction = 'forward';
        }

        this.currentIndex = val;
        this.updateProgressTick(val);

        // use a small timeout before doing the
        // intensive background stuff
        this.timer = setTimeout($.proxy(function () {
            this.scrollToGradient(val, direction);
            this.showSlideContent(val);
            this.updateStats();
        }, this), 200);
    };

    /*
     * Destroy graph and remove from DOM
     */
    ScatterPlot.prototype.destroy = function () {
        this.main.remove();
        this.gradient.remove();
        this.rect.remove();
        this.$slider.rangeslider('destroy');
    };

    /*
     * Handle keyboard events on the slider for updating graph
     */
    ScatterPlot.prototype.onKeyPress = function (e) {
        var next;

        switch(e.which) {
        case 39:
            next = this.currentIndex + 1;
            if (next <= this.totalTicks) {
                this.$slider.val(next).change();
            }
            break;
        case 37:
            next = this.currentIndex - 1;
            if (next >= 0) {
                this.$slider.val(next).change();
            }
            break;
        }
    };

    /*
     * Create rangeslider.js instance bound to the graph
     */
    ScatterPlot.prototype.createSlider = function () {
        this.$slider.rangeslider({
            polyfill: false,
            onSlide: $.proxy(this.onSliderChange, this)
        });
        //set the slider at the beginning
        this.$slider.val(0).change();
        //make the slider keyboard focusable & bind key events
        $('.rangeslider__handle').attr('tabindex', 0).on('keydown', $.proxy(this.onKeyPress, this));
    };

    /*
     * Initialize the graph and bind slider
     */
    ScatterPlot.prototype.init = function () {
        this.createGradientBackground();
        this.createGraph();
        this.createCustomTicks();
    };

    var scatter = new ScatterPlot(data);
    scatter.init();

    setTimeout(function () {
        $('.scatterplot header').addClass('on').delay(1700).fadeOut('slow', function () {
            $('.plot-inner').fadeIn('slow', function () {
                scatter.createSlider();
            });
        });
    }, 1000);



});
