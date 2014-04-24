(function(){

var outputResult=window.outputResult || function(a){ console.log(a) };
function C(f){ return new SimpleDateFormat(f); }
var time=1398327178220,date=new Date(1398327178220);;

//dd-MM-yyyy HH:mm:ss.SSS: 24-04-2014 10:12:58.220
(function(){
var formatted="24-04-2014 10:12:58.220",parsed=new Date(1398327178220),pattern="dd-MM-yyyy HH:mm:ss.SSS";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//E: Thu
(function(){
var formatted="Thu",parsed=new Date(-3600000),pattern="E";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EE: Thu
(function(){
var formatted="Thu",parsed=new Date(-3600000),pattern="EE";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EEE: Thu
(function(){
var formatted="Thu",parsed=new Date(-3600000),pattern="EEE";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EEEE: Thursday
(function(){
var formatted="Thursday",parsed=new Date(-3600000),pattern="EEEE";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EEEEE: Thursday
(function(){
var formatted="Thursday",parsed=new Date(-3600000),pattern="EEEEE";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//M: 4
(function(){
var formatted="4",parsed=new Date(7772400000),pattern="M";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//MM: 04
(function(){
var formatted="04",parsed=new Date(7772400000),pattern="MM";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//MMM: Apr
(function(){
var formatted="Apr",parsed=new Date(7772400000),pattern="MMM";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//MMMM: April
(function(){
var formatted="April",parsed=new Date(7772400000),pattern="MMMM";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//MMMMM: April
(function(){
var formatted="April",parsed=new Date(7772400000),pattern="MMMMM";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//G: AD
(function(){
var formatted="AD",parsed=new Date(-3600000),pattern="G";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//GG: AD
(function(){
var formatted="AD",parsed=new Date(-3600000),pattern="GG";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//GGG: AD
(function(){
var formatted="AD",parsed=new Date(-3600000),pattern="GGG";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//GGGG: AD
(function(){
var formatted="AD",parsed=new Date(-3600000),pattern="GGGG";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//y: 2014
(function(){
var formatted="2014",parsed=new Date(1388530800000),pattern="y";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//yy: 14
(function(){
var formatted="14",parsed=new Date(1388530800000),pattern="yy";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//yyy: 2014
(function(){
var formatted="2014",parsed=new Date(1388530800000),pattern="yyy";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//yyyy: 2014
(function(){
var formatted="2014",parsed=new Date(1388530800000),pattern="yyyy";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();


})();