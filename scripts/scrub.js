/*

Created by:     GHXXST
Website:        https://github.com/GHXXST/

Project:        Srub Your Shame Away
Description:    Generates new advertising-style slogans based on a custom 
                data set of real ad slogans, taglines and marketing copy 
                for a range of household cleaning products, as well as 
                some made-up ones.

Requirements:   p5.js, rita.js

*/


var generator;
const n = 2;  // N-gram length


function setup() {
    noCanvas();
    
    // First argument is N-gram length
    generator = new RiMarkov(n, recognizeSentences=true, allowDuplicates=false);
    generator.loadFrom('dictionaries/dictionary.txt');
    // Button setup
    var button = select('#button');
    button.mousePressed(generate);
}


function generate() {
    var text = generator.generateSentences(3);
    var output = select('#gen0');
    output.html(text[0]);
    var output = select('#gen1');
    output.html(text[1]);
    var output = select('#gen2');
    output.html(text[2]);
}
