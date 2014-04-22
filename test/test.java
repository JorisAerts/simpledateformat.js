import java.text.SimpleDateFormat;

class test {
	
	public static void main(String[] args) {
		
		SimpleDateFormat[] formats = new SimpleDateFormat[] {
					new SimpleDateFormat("dd-MM-yyyy HH:mm:ss.SSS"),
					new SimpleDateFormat("E"),
					new SimpleDateFormat("EE"),
					new SimpleDateFormat("EEE"),
					new SimpleDateFormat("EEEE"),
					new SimpleDateFormat("M"),
					new SimpleDateFormat("MM"),
					new SimpleDateFormat("MMMM")
				};
		
		Date date = new Date();

		for(int i=0; i<formats.length; i++){
			System.out.println(formats[i].toPattern());
		}
		
		System.out.println("\n");
		
		for(int i=0; i<formats.length; i++){
			System.out.println(formats[i].format(date));
		}
		
	}
	
}