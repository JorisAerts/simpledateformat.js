(function(){
function C(f){ return new SimpleDateFormat(f); }var time=1398204618916,date=new Date(1398204618916);
//dd-MM-yyyy HH:mm:ss.SSS: 23-04-2014 00:10:18.916
var pattern_0="dd-MM-yyyy HH:mm:ss.SSS",formatted_0="23-04-2014 00:10:18.916",parsed_0=new Date(1398204618916);
var sdf_0=C(pattern_0), date_0=sdf_0.parse(formatted_0);
console.log(pattern_0);
console.log(1398204618916 == date_0.getTime(),1398204618916,date_0.getTime());
console.log(parsed_0,date_0);
console.log(sdf_0,"\n");

//E: Wed
var formatted_1="Wed",pattern_1="E",parsed_1=new Date(514800000);
var sdf_1=C(pattern_1), date_1=sdf_1.parse(formatted_1);
console.log(pattern_1);
console.log(514800000 == date_1.getTime(),514800000,date_1.getTime());
console.log(parsed_1,date_1);
console.log(sdf_1,"\n");

//EE: Wed
var pattern_2="EE",formatted_2="Wed",parsed_2=new Date(514800000);
var sdf_2=C(pattern_2), date_2=sdf_2.parse(formatted_2);
console.log(pattern_2);
console.log(514800000 == date_2.getTime(),514800000,date_2.getTime());
console.log(parsed_2,date_2);
console.log(sdf_2,"\n");

//EEE: Wed
var pattern_3="EEE",formatted_3="Wed",parsed_3=new Date(514800000);
var sdf_3=C(pattern_3), date_3=sdf_3.parse(formatted_3);
console.log(pattern_3);
console.log(514800000 == date_3.getTime(),514800000,date_3.getTime());
console.log(parsed_3,date_3);
console.log(sdf_3,"\n");

//EEEE: Wednesday
var pattern_4="EEEE",formatted_4="Wednesday",parsed_4=new Date(514800000);
var sdf_4=C(pattern_4), date_4=sdf_4.parse(formatted_4);
console.log(pattern_4);
console.log(514800000 == date_4.getTime(),514800000,date_4.getTime());
console.log(parsed_4,date_4);
console.log(sdf_4,"\n");

//EEEEE: Wednesday
var pattern_5="EEEEE",formatted_5="Wednesday",parsed_5=new Date(514800000);
var sdf_5=C(pattern_5), date_5=sdf_5.parse(formatted_5);
console.log(pattern_5);
console.log(514800000 == date_5.getTime(),514800000,date_5.getTime());
console.log(parsed_5,date_5);
console.log(sdf_5,"\n");

//M: 4
var parsed_6=new Date(7772400000),pattern_6="M",formatted_6="4";
var sdf_6=C(pattern_6), date_6=sdf_6.parse(formatted_6);
console.log(pattern_6);
console.log(7772400000 == date_6.getTime(),7772400000,date_6.getTime());
console.log(parsed_6,date_6);
console.log(sdf_6,"\n");

//MM: 04
var parsed_7=new Date(7772400000),formatted_7="04",pattern_7="MM";
var sdf_7=C(pattern_7), date_7=sdf_7.parse(formatted_7);
console.log(pattern_7);
console.log(7772400000 == date_7.getTime(),7772400000,date_7.getTime());
console.log(parsed_7,date_7);
console.log(sdf_7,"\n");

//MMM: Apr
var parsed_8=new Date(7772400000),formatted_8="Apr",pattern_8="MMM";
var sdf_8=C(pattern_8), date_8=sdf_8.parse(formatted_8);
console.log(pattern_8);
console.log(7772400000 == date_8.getTime(),7772400000,date_8.getTime());
console.log(parsed_8,date_8);
console.log(sdf_8,"\n");

//MMMM: April
var parsed_9=new Date(7772400000),formatted_9="April",pattern_9="MMMM";
var sdf_9=C(pattern_9), date_9=sdf_9.parse(formatted_9);
console.log(pattern_9);
console.log(7772400000 == date_9.getTime(),7772400000,date_9.getTime());
console.log(parsed_9,date_9);
console.log(sdf_9,"\n");

//MMMMM: April
var parsed_10=new Date(7772400000),formatted_10="April",pattern_10="MMMMM";
var sdf_10=C(pattern_10), date_10=sdf_10.parse(formatted_10);
console.log(pattern_10);
console.log(7772400000 == date_10.getTime(),7772400000,date_10.getTime());
console.log(parsed_10,date_10);
console.log(sdf_10,"\n");

//G: AD
var parsed_11=new Date(-3600000),formatted_11="AD",pattern_11="G";
var sdf_11=C(pattern_11), date_11=sdf_11.parse(formatted_11);
console.log(pattern_11);
console.log(-3600000 == date_11.getTime(),-3600000,date_11.getTime());
console.log(parsed_11,date_11);
console.log(sdf_11,"\n");

//GG: AD
var pattern_12="GG",parsed_12=new Date(-3600000),formatted_12="AD";
var sdf_12=C(pattern_12), date_12=sdf_12.parse(formatted_12);
console.log(pattern_12);
console.log(-3600000 == date_12.getTime(),-3600000,date_12.getTime());
console.log(parsed_12,date_12);
console.log(sdf_12,"\n");

//GGG: AD
var pattern_13="GGG",parsed_13=new Date(-3600000),formatted_13="AD";
var sdf_13=C(pattern_13), date_13=sdf_13.parse(formatted_13);
console.log(pattern_13);
console.log(-3600000 == date_13.getTime(),-3600000,date_13.getTime());
console.log(parsed_13,date_13);
console.log(sdf_13,"\n");

//GGGG: AD
var pattern_14="GGGG",parsed_14=new Date(-3600000),formatted_14="AD";
var sdf_14=C(pattern_14), date_14=sdf_14.parse(formatted_14);
console.log(pattern_14);
console.log(-3600000 == date_14.getTime(),-3600000,date_14.getTime());
console.log(parsed_14,date_14);
console.log(sdf_14,"\n");

//y: 2014
var pattern_15="y",parsed_15=new Date(1388530800000),formatted_15="2014";
var sdf_15=C(pattern_15), date_15=sdf_15.parse(formatted_15);
console.log(pattern_15);
console.log(1388530800000 == date_15.getTime(),1388530800000,date_15.getTime());
console.log(parsed_15,date_15);
console.log(sdf_15,"\n");

//yy: 14
var formatted_16="14",pattern_16="yy",parsed_16=new Date(1388530800000);
var sdf_16=C(pattern_16), date_16=sdf_16.parse(formatted_16);
console.log(pattern_16);
console.log(1388530800000 == date_16.getTime(),1388530800000,date_16.getTime());
console.log(parsed_16,date_16);
console.log(sdf_16,"\n");

//yyy: 2014
var formatted_17="2014",parsed_17=new Date(1388530800000),pattern_17="yyy";
var sdf_17=C(pattern_17), date_17=sdf_17.parse(formatted_17);
console.log(pattern_17);
console.log(1388530800000 == date_17.getTime(),1388530800000,date_17.getTime());
console.log(parsed_17,date_17);
console.log(sdf_17,"\n");

//yyyy: 2014
var parsed_18=new Date(1388530800000),formatted_18="2014",pattern_18="yyyy";
var sdf_18=C(pattern_18), date_18=sdf_18.parse(formatted_18);
console.log(pattern_18);
console.log(1388530800000 == date_18.getTime(),1388530800000,date_18.getTime());
console.log(parsed_18,date_18);
console.log(sdf_18,"\n");

})();