"use strict";

const pubmed = require("../lib/pubmed");

test("extracts PubMed IDs", () => {
    expect(pubmed.extract(" 0123\n456\n ")).toEqual(["123", "456"]);
});

test("does not return outputs with PubMed IDs in DOIs", () => {
    var text = "10.1038/nplants.2015.3\n10.1126/science.286.5445.1679e";

    expect(pubmed.extract(text)).toEqual([]);
});

test("strips leading 0s", () => {
    var text = "0000010203\n000456000";

    expect(pubmed.extract(text)).toEqual(["10203", "456000"]);
});

test("does not consider 0 as a valid Pubmed ID", () => {
    expect(pubmed.extract("00000000")).toEqual([]);
});

test("extracts PubMed IDs separated by Unicode whitespace", () => {
    expect(pubmed.extract("123 456")).toEqual(["123", "456"]);
});
