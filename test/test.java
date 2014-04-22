import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Test {

	final static SimpleDateFormat[] formats = new SimpleDateFormat[] {

		new SimpleDateFormat("dd-MM-yyyy HH:mm:ss.SSS"),

		new SimpleDateFormat("E"),

		new SimpleDateFormat("EE"),

		new SimpleDateFormat("EEE"),

		new SimpleDateFormat("EEEE"),

		new SimpleDateFormat("EEEEE"),

		new SimpleDateFormat("M"),

		new SimpleDateFormat("MM"),

		new SimpleDateFormat("MMM"),

		new SimpleDateFormat("MMMM"),

		new SimpleDateFormat("MMMMM"),

		new SimpleDateFormat("G"),

		new SimpleDateFormat("GG"),

		new SimpleDateFormat("GGG"),

		new SimpleDateFormat("GGGG"),

		new SimpleDateFormat("y"),

		new SimpleDateFormat("yy"),

		new SimpleDateFormat("yyy"),

		new SimpleDateFormat("yyyy")

	};

	public static void main(final String[] args) throws ParseException, IOException {

		final long start = System.currentTimeMillis();

		final File testJs = new File("test.js");
		testJs.delete();
		testJs.createNewFile();

		try (Writer writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(testJs), "utf-8"))) {
			new Test(writer).run();
		}

		final long end = System.currentTimeMillis();

		System.out.println("done in " + (end - start) + "ms.");

	}

	Writer writer;

	public Test(final Writer writer) {
		this.writer = writer;
	}

	public void newLine(int i) throws IOException {
		while (i-- > 0) {
			newLine();
		}
	}

	public void newLine() throws IOException {
		writer.write("\n");
	}

	public void startFunction() throws IOException {
		writer.write("(function(){\n");
	}

	public void closeFunction() throws IOException {
		writer.write("})();");
	}

	public void var(final Map<String, Object> vars) throws IOException {
		int size = vars.size();
		if (vars == null || size < 1) {
			return;
		}
		writer.write("var ");
		for (final String name : vars.keySet()) {
			writer.write(name);
			final Object value = vars.get(name);
			if (value != null) {
				writer.write("=" + val(value));
			}
			writer.write(--size > 0 ? "," : ";");
		}
	}

	public String val(final Object value) throws IOException {
		if (value == null) {
			return "null";
		}
		if (value instanceof Boolean) {
			return (value.toString().toLowerCase());
		} else if (value instanceof Number) {
			return (value.toString());
		} else if (value instanceof String) {
			return ("\"" + value.toString().replace("'", "\\'").replace("\"", "\\\"").replace("\\", "\\\\") + '"');
		} else if (value instanceof Date) {
			return ("new Date(" + ((Date) value).getTime() + ")");
		}
		return value.toString();
	}

	public void toOutput(final String... args) throws IOException {
		writer.write("console.log(");
		for (int i = 0; i < args.length; i++) {
			writer.write(args[i]);
			if (i < args.length - 1) {
				writer.write(",");
			}
		}
		writer.write(");");
	}

	public void run() throws IOException, ParseException {
		parse_tests();
	}

	public void shortcuts() throws IOException {
		final Map<String, Object> vars = new HashMap<String, Object>();
		writer.write("function C(f){ return new SimpleDateFormat(f); }");
		var(vars);
	}

	public void parse_tests() throws IOException, ParseException {

		//final Date date = GregorianCalendar.getInstance().getTime();
		final Date date = new Date();
		startFunction();

		shortcuts();
		Map<String, Object> vars = new HashMap<String, Object>();
		vars.put("date", new Date());
		vars.put("time", date.getTime());

		var(vars);
		newLine();

		for (int i = 0; i < formats.length; i++) {
			final String pattern = formats[i].toPattern();
			final String formatted = formats[i].format(date);
			final Date parsed = formats[i].parse(formatted);

			writer.write("//" + pattern + ": " + formatted + "\n");
			vars = new HashMap<String, Object>();
			vars.put("pattern_" + i, pattern);
			vars.put("formatted_" + i, formatted);
			vars.put("parsed_" + i, parsed);
			var(vars);
			newLine();
			writer.write("var sdf_" + i + "=C(pattern_" + i + "), date_" + i + "=sdf_" + i + ".parse(formatted_" + i + ");\n");
			toOutput("pattern_" + i);
			newLine();
			toOutput(parsed.getTime() + " == date_" + i + ".getTime()", parsed.getTime() + "", "date_" + i + ".getTime()");
			newLine();
			toOutput("parsed_" + i, "date_" + i);
			newLine();
			toOutput("sdf_" + i, "\"\\n\"");
			newLine(2);
		}
		closeFunction();
	}
}
