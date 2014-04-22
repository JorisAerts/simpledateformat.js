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
						'{' + match.length + '}' +
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
			"Y": _createPattern(RegExBuilder.len(), function (format, value, date) {
				value = _int(value);
				date[format.length > 2 ? "setFullYear" : "setYear"](value);
			}),
			"y": _createPattern(RegExBuilder.len(), function (format, value, date) {
				value = _int(value);
				date[format.length > 2 ? "setFullYear" : "setYear"](value);
			}),
			"M": _createPattern(RegExBuilder.wordChar(), function (format, value, date, locale) {
				var l = format.length;
				if (l < 3) {
					value = _int(value) - 1;
				} else if (l == 3) {
					value = locale.MonthsShort.indexOf(value);
				} else if (l > 3) {
					value = locale.Months.indexOf(value);
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
					value = locale.DaysShort.indexOf(value);
				} else if (l > 3) {
					value = locale.Days.indexOf(value);
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

			if(new Date().toLocaleString() === new Date().toLocaleString("en", { month: "long" })){
				// No locale browser support
				return function(locale) {
					return SimpleDateFormat.Locale[locale] ? SimpleDateFormat.Locale[locale] : SimpleDateFormat.Locale["en"];
				};

			}

			function getLocaleString(locale, d, v, type){
				var opts = { };
				opts[v] = type || "long";
				return(d.toLocaleString(locale,opts));
			}

			// browser support for locale!
			return function (locale) {
				var dateRef = new Date(),
					year = dateRef.getFullYear(),
					day,
					ret = { days: [], months: []  };
				dateRef.setMonth(0);
				dateRef.setDate(0);
				day = dateRef.getDay();
				for (var i = 0; i < 7; i++) {
					ret.days[(7 + i - day) % 7] = getLocaleString(locale, dateRef, "weekday");
					dateRef.setMonth(dateRef.getMonth() + 1);
				}
				while (year == dateRef.getFullYear()) {
					ret.months.push(getLocaleString(locale, dateRef, "month"));
					dateRef.setMonth(dateRef.getMonth() + 1);
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
				date = new Date(0),
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
		en: function(){
			var ret = {
                    Months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    Days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                },
                names = ["Months", "Days"];
            for(var n=0; n < names.length; n++){
                ret[names[n]+"Short"] = [];
                for(var i=0; i< ret[names[n]].length; i++){
                    ret[names[n]+"Short"][i] = ret[names[n]][i].substr(0,3);
                }
            }
            ret.Era = [ "AD", "BC" ];
            return ret;
		}()
	};

	return SimpleDateFormat;

}({});