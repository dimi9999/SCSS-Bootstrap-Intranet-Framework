
	
// DEFINE VARIABLE BREAKPOINTS
var breakpointH1;
var breakpointH2;
var breakpointV1;
var breakpointV2;

// CREATE FUNCTIONS TO GET MATCHES FOR SCREEN SIZE
function getBreakpointMatches() {
    // breakpointH1 = window.matchMedia("(min-width:48em)").matches;
	breakpointH1 = window.matchMedia("(min-width:992px)").matches;
    breakpointH2 = window.matchMedia("(min-width:62.5em)").matches;
    breakpointV1 = window.matchMedia("(min-height:22em)").matches;
    breakpointV2 = window.matchMedia("(min-height:40em)").matches;
}
getBreakpointMatches();