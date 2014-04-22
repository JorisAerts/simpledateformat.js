(function(){

var outputResult=outputResult || function(a){ console.log(a) };
function C(f){ return new SimpleDateFormat(f); }
var time=1398209146168,date=new Date(1398209146168);;

//dd-MM-yyyy HH:mm:ss.SSS: 23-04-2014 01:25:46.168
(function(){
var formatted="23-04-2014 01:25:46.168",parsed=new Date(1398209146168),pattern="dd-MM-yyyy HH:mm:ss.SSS";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//E: Wed
(function(){
var formatted="Wed",parsed=new Date(514800000),pattern="E";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EE: Wed
(function(){
var formatted="Wed",parsed=new Date(514800000),pattern="EE";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EEE: Wed
(function(){
var formatted="Wed",parsed=new Date(514800000),pattern="EEE";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EEEE: Wednesday
(function(){
var formatted="Wednesday",parsed=new Date(514800000),pattern="EEEE";
var sdf=C(pattern), s_parsed = sdf.parse(formatted);
outputResult({ match: s_parsed.getTime() === parsed.getTime(), pattern:pattern, 
 formatted: formatted, 
 java: { parsed: parsed, time: parsed.getTime()  }, 
javascript:{ sdf: sdf, parsed: s_parsed, time: s_parsed.getTime() } 
});})();

//EEEEE: Wednesday
(function(){
var formatted="Wednesday",parsed=new Date(514800000),pattern="EEEEE";
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