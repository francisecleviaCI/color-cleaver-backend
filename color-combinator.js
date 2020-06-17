function colorCombinator(color1, color2){
    
    if (color1 === 'red' && color2 === 'yellow'){
        return "When you combine red and yellow, you get orange!";
    
} else if (color1 === 'red' && color2 === 'blue'){  
        return "When you combine red and blue, you get purple!";
    
} else if (color1 === 'yellow' && color2 === 'blue'){ 
        return "When you combine yellow and blue, you get green!";
} else {
        return "Sorry, one of those colors is not a primary color!";

}
}

module.exports = colorCombinator;