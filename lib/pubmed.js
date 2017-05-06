"use strict";

function extract(str) {
    var matches = str.match(/(?:^|\s)(\d+)(?=$|\s)/g);
    if (!matches) { return []; }

    return matches.map(sanitize).filter(Boolean);
}

function sanitize(pubmed) {
    return pubmed.trim().replace(/^0+/, "");
}

exports.extract = extract;
