﻿/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '/libs/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: '/Scripts/app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
            'moment': 'node_modules/moment/moment.js',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'primeng': 'node_modules/primeng',

            'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js',
            'angular2-select': 'npm:angular2-select',
                    "ngx-dropdown": "node_modules/ngx-dropdown",



        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: '.Scripts/app/main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-select': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'primeng': {
                defaultExtension: 'js'
            } ,
            "ngx-dropdown": { "main": "index.js", "defaultExtension": "js" },
            'ng2-bootstrap': {
                defaultExtension: 'js'
            },
            'moment': { defaultExtension: 'js' },

        }
    });
})(this);