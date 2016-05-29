namespace Messages
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class Email

    {
        public string SendTo { get; set; }
        public string From { get; set; }
        public string Text { get; set; }
        public string Html { get; set; }
        public string Subject { get; set; }
    }
}
