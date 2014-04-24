# simpledateformat.js
JavaScript implementation for SimpleDateFormat

## Features:
- Caches the [format, SimpleDateFormatter]
 
## TODO: 
Rewrite the parser, without any Regex, because it won't work for dates like yyyyMMMdd (with no separators between the different patterns).

## Date & Time Patterns:
| Supported | Letter | Date or Time Component | Presentation | Examples |
|:---------:|:------:| ---------------------- | ------------ | -------- |
|   | G | Era designator | Text | AD |
| x | y | Year | Year | 1996; 96 |
|   | Y | Week year | Year | 2009; 09 |
| x | M | Month in year | Month | July; Jul; 07 |
|   | w | Week in year | Number | 27 |
|   | W | Week in month | Number | 2 |
|   | D | Day in year | Number | 189 |
| x | d | Day in month | Number | 10 |
|   | F | Day of week in month | Number | 2 |
|   | E | Day name in week | Text | Tuesday; Tue |
|   | u | Day number of week (1 = Monday, ..., 7 = Sunday) | Number | 1 |
|   | a | Am/pm marker | Text | PM |
| x | H | Hour in day (0-23) | Number | 0 |
|   | k | Hour in day (1-24) | Number | 24 |
|   | K | Hour in am/pm (0-11) | Number | 0 |
|   | h | Hour in am/pm (1-12) | Number | 12 |
| x | m | Minute in hour | Number | 30 |
| x | s | Second in minute | Number | 55 |
| x | S | Millisecond | Number | 978 |
|   | z | Time zone | General time zone | Pacific Standard Time; PST; GMT-08:00 |
|   | Z | Time zone | RFC 822 time zone | -0800 |
|   | X | Time zone | ISO 8601 time zone | -08; -0800; -08:00 |
