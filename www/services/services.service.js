/**
 * Recommend model
 */
(function() {
    'use strict';

    angular
        .module('model.services', [])
        .service('services', services);

    services.$inject = ['http', 'url'];

    function services(http, url) {

        return {
            all: all,
            col: col,
            add: add,
            images: images
        };

        function all() {
            return http
                .get(url.services)
                .then(function (res) {
                    return res.results;
                });
        }

        function col() {
            return http
                .get(url.services, {
                    limit: 0,
                    count: 1
                })
                .then(function (res) {
                    return res.count;
                });
        }

        /**
         *
         * @param {object} data
         */
        function add(data) {
            return http
                .post(url.services, data)
                .then(function (res) {
                    return res;
                });
        }

        function images(serviceId) {
            return http
                .get(url.files, {
                    where: {
                        "source": serviceId
                    }
                })
                .then(function (res) {
                    return res.results;
                });
        }

    }
})();
