'use strict';

const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const async = require('async');
const utilities = require('./utilities')

function download(url, filename, callback) {
    console.log(`Downloading ${url}`);
    let body;

    async.series([
        // [1]
        callback => {
            request(url, (err, response, resBody) => {
                if(err) return callback(err);
                body = resBody;
                callback();
            });
        },
        // [2]
        mkdirp.bind(null, path.dirname(filename)),
        // [3]
        callback => {
            fs.writeFile(filename, body, callback);
        }
    ], err => {
        if(err) return callback(err);
        console.log(`Downloaded and saved: ${url}`);
        callback(null, body);
    });
}

function spiderLinks(currentUrl, body, nesting, callback) {
    if(nesting === 0)
        return process.nextTick(callback);

    const links = utilities.getPageLinks(currentUrl, body);
    if(links.length === 0)
        return process.nextTick(callback);

    async.eachSeries(links, (link, callback) => {
        spider(link, nesting - 1, callback);
    }, callback);
}

function spider(url, nesting, callback) {
    const filename = utilities.urlToFilename(url);
    fs.readFile(filename, 'utf8', (err, body) => {
        if(err) {
            if(err.code !== 'ENOENT') {
                return callback(err);
            }

            return download(url, filename, (err, body) => {
                if(err) return callback(err);
                spiderLinks(url, body, nesting, callback);
            });
        }

        spiderLinks(url, body, nesting, callback);
    });
}

spider(process.argv[2], 1, (err, filename, downloaded) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Download complete`);
    }
});
