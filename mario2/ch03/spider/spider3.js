'use strict';

const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities')

function saveFile(filename, contents, callback) {
    const dirname = path.dirname(filename);
    mkdirp(dirname, err => {
        if(err) {
            return callback(err);
        }

        console.log(`Created ${dirname}`);
        fs.writeFile(filename, contents, callback);
    });
}

function download(url, filename, callback) {
    console.log(`Downloading ${url}`);
    request(url, (err, response, body) => {
        if(err) {
            return callback(err);
        }

        saveFile(filename, body, err => {
            if(err) {
                return callback(err);
            }

            console.log(`Downloaded and saved: ${url}`);
            callback(null, body);
        });
    });
}

function spiderLinks(currentUrl, body, nesting, callback) {
    if(nesting === 0) {
        return process.nextTick(callback);
    }

    const links = utilities.getPageLinks(currentUrl, body);
    if(links.length === 0) {
        return process.nextTick(callback);
    }

    let completed = 0, hasErrors = false;

    function done(err) {
        if(err) {
            hasErrors = true;
            return callback(err);
        }

        if(++completed == links.length && !hasErrors) {
            return callback();
        }
    }

    links.forEach(link => {
        spider3(link, nesting -1, done);
    });
}

function spider3(url, nesting, callback) {
    const filename = utilities.urlToFilename(url);
    fs.readFile(filename, 'utf8', (err, body) => {
        if(err) {
            if(err.code !== 'ENOENT') {
                return callback(err);
            }

            return download(url, filename, (err, body) => {
                if(err) {
                    return callback(err);
                }

                spiderLinks(url, body, nesting, callback);
            });
        }

        spiderLinks(url, body, nesting, callback);
    });
}

spider3(process.argv[2], 1, (err, filename, downloaded) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Download complete`);
    }
});
