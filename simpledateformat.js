/**

 SimpleDateFormat (v0.1) by Joris Aerts 2014

 Date and Time Patterns:
 =======================
 G    Era designator    Text    AD
 y    Year    Year    1996; 96
 Y    Week year    Year    2009; 09
 M    Month in year    Month    July; Jul; 07
 w    Week in year    Number    27
 W    Week in month    Number    2
 D    Day in year    Number    189
 d    Day in month    Number    10
 F    Day of week in month    Number    2
 E    Day name in week    Text    Tuesday; Tue
 u    Day number of week (1 = Monday, ..., 7 = Sunday)    Number    1
 a    Am/pm marker    Text    PM
 H    Hour in day (0-23)    Number    0
 k    Hour in day (1-24)    Number    24
 K    Hour in am/pm (0-11)    Number    0
 h    Hour in am/pm (1-12)    Number    12
 m    Minute in hour    Number    30
 s    Second in minute    Number    55
 S    Millisecond    Number    978
 z    Time zone    General time zone    Pacific Standard Time; PST; GMT-08:00
 Z    Time zone    RFC 822 time zone    -0800
 X    Time zone    ISO 8601 time zone    -08; -0800; -08:00

*/
var SimpleDateFormat = function (_cache) {

	var

		_regexEscape = function (value) {
			return "\\" + value;
		},

		_int = function(value) {
			return parseInt(value, 10);
		},

		RegExBuilder = {
			len: function (options) {
				options = options || {};
				return function (match) {
					return '(' +
						(options.type || _regexEscape("d")) +
						'{' + (options.min || match.length) + ( options.max ? "," + options.max : "" ) + '}' +
					')';
				};
			},
			val: function (value) {
				return function () {
					var a = arguments;
					return a.length < 2 ? a[0] : "(" + [].join.call(a, "|") + ")";
				};
			},
			wordChar: function (decimal, word) {
				return function () {
					if(decimal == word && word !== false){
						return "([\\w\\d]+)";
					}else{
						return "(" + (word !== false ? "\\w" : "") + (decimal !== false ? "\\d" : "") + "+)";
					}
				};
			}
		},

		_createValue = function (ret, increase) {
			return ret ? (Object.prototype.toString.call(ret) === "[object Function]" ? ret : function (format, value, date) {
				date[ret](_int(value) + (increase || 0), 10);
			}) : function () {
				// dummy function, nothing happens really...
			};
		},

		_createPattern = function () {
			var a = arguments;
			return {
				pattern:    a[0],
				parse:      _createValue.apply(this, [].slice.call(a, 1))
			};
		},

		Patterns = {
			"Y": _createPattern(RegExBuilder.wordChar(true,false), function (format, value, date) {
				value = _int(value);
				date[format.length > 2 ? "setFullYear" : "setYear"](value);
			}),
			"y": _createPattern(RegExBuilder.len({ min:1, max: 4 }), function (format, value, date) {
				value = _int(value);
				date[format.length > 2 ? "setFullYear" : "setYear"](value);
			}),
			"M": _createPattern(RegExBuilder.wordChar(), function (format, value, date, locale) {
				var l = format.length;
				if (l < 3) {
					value = _int(value) - 1;
				} else if (l == 3) {
					value = locale.Month.short.indexOf(value);
				} else if (l > 3) {
					value = locale.Month.long.indexOf(value);
				}
				date.setMonth(value);
			}),
			"d": _createPattern(RegExBuilder.len(), "setDate"),
			"H": _createPattern(RegExBuilder.len(), "setHours"),
			"m": _createPattern(RegExBuilder.len(), "setMinutes"),
			"s": _createPattern(RegExBuilder.len(), "setSeconds"),
			"S": _createPattern(RegExBuilder.len(), "setMilliseconds"),

			// Day name
			"E": _createPattern(RegExBuilder.wordChar(false), function(format, value, date, locale){
				var l = format.length, current = date.getDay();
				if (l < 4) {
					value = locale.Day.short.indexOf(value);
				} else if (l > 3) {
					value = locale.Day.long.indexOf(value);
				}
				date.setDate(date.getDate() + (7 + value - current) % 7);
			})
		},

		/** The regular expression, used to decode the pattern */
		_splitterRegex = function () {
			var s = "", v;
			for (v in Patterns) {
				s += v;
			}
			return new RegExp("'.*'|[" + s + "]+", "g");
		}(),

		// Feature Tested: NOT YET FULLY SUPPORTED IN ALL BROWSERS!
		getLocale = function(){

            var defaultLocale = function(){
                var ret = {
                        Month: {
                            long: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        },
                        Day: {
                            long: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
                        }
                    },
                    add = ["narrow", "short"];

                for(var n in ret){
                    for(var a = 0; a < add.length; a++){
                        ret[n][add[a]] = [];
                        for(var i = 0; i < ret[n].long.length; i++) {
                            ret[n][add[a]][i] = ret[n].long[i].substr(0,3);
                        }
                    }
                }
                ret.Era = {
                    long:["AD", "BC"]
                };
                for(var a = 0; a < add.length; a++){
                    ret.Era[add[a]] = ret.Era.long;
                }
                return ret;
            }();

            function getLocaleString(locale, d, v, type){
                var opts = { };
                opts[v] = type || "long";
                return(d.toLocaleString(locale,opts));
            }

            if(new Date().toLocaleString() === getLocaleString("en", new Date(), "month")){
                // No locale browser support
				return function(locale) {
					return SimpleDateFormat.Locale && SimpleDateFormat.Locale[locale] ? SimpleDateFormat.Locale[locale] : defaultLocale;
				};

			}


			// browser support for locale!
			return function (locale) {
				var dateRef = new Date(0),
					year = dateRef.getFullYear(),
					day = dateRef.getDay(),
					ret = {
                        Day:    { narrow: [], short: [], long: [] },
                        Month:  { narrow: [], short: [], long: [] },
                        Era:    { narrow: [], short: [], long: [] }
                    };
                for (var i = day; i < day + 7; i++) {
                    for(var v in ret.Day){
                        ret.Day[v][i % 7] = getLocaleString(locale, dateRef, "weekday", v);
                    }
                    dateRef.setDate(dateRef.getDate() + 1);
				}
                while (year == dateRef.getFullYear()) {
                    for(var v in ret.Month){
                        ret.Month[v].push(getLocaleString(locale, dateRef, "month", v));
                    }
                    dateRef.setMonth(dateRef.getMonth() + 1);
                }
                for(var v in ret.Era){
                    ret.Era[v] = [
                        getLocaleString(locale, new Date(-2000 * 360 * 24 * 3600 * 1000), "era", v),
                        getLocaleString(locale, new Date(0), "era", v)
                    ];
                }
                return ret;
			};

		}(),


		_getLocale = function(cache){
			return function(locale) {
				locale = "en";
				return SimpleDateFormat.Locale[locale];
			};
		}({}),

		/** Creates the regex for a pattern */
		_createParser = function (pattern, locale) {
			var index = [],
				regex = pattern.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, function (c) {
					return _regexEscape(c);
				}).replace(
					_splitterRegex,
					function (match /*, offset, string */) {
						var c = match.charAt(0);
						index.push( match);
						if (!Patterns.hasOwnProperty(c)) {
							return match;
						}
						return(Patterns[c].pattern(match, locale));
					}
				);
			return [ new RegExp(regex), index ];
		},


		/** Cached pattern-based Regex retrieval */
		_getParser = function (pattern, locale) {
			if (_cache[pattern] == null) {
				_cache[pattern] = _createParser(pattern, locale);
			}
			return _cache[pattern];
		},

		/** Parse a date with the (_cached) pattern */
		_parseDate = function (source, pattern, locale) {
			var ref = _getParser(pattern, locale),
				regex = ref[0],
				index = ref[1],
				match = source.match(regex),
				i = 1, l = match ? match.length : 0,
				date = new Date(-3600000),
				c;
            for (; i < l; i++) {
				pattern = index[i - 1],
					c = pattern.charAt(0);
				if (Patterns.hasOwnProperty(c)) {
					Patterns[c].parse(pattern, match[i], date, locale);
				}
			}
			return date;
		}

		;

	function SimpleDateFormat(pattern, locale) {
		this.pattern = pattern;
		this.locale = _getLocale(locale);
	};

	SimpleDateFormat.prototype = {

		/** parse a String into a Date */
		parse: function (value) { return _parseDate(value, this.pattern, this.locale); },

		/** format a Date into a String */
		format: function (date) { }

	};

	SimpleDateFormat.Locale = {
		en: getLocale("en")
	};

	return SimpleDateFormat;

}({});