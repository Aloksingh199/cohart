public class str {
    public static void main(String[] args) {
        String s = "mom";
        int i = 0;
        int j = s.length() - 1;
        boolean palindrome = true;

        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) {
                palindrome = false;
                break;
            }
            i++;
            j--;
        }

        if (palindrome) {
            System.out.println("palindrome");
        } else {
            System.out.println("not palindrom");
        }
    }
}