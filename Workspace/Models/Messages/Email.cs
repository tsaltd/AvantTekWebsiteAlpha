using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace AvantTek.CodeLibrary
{
    // This project can output the Class library as a NuGet Package.
    //  enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class Email
    {
       
        
        public string  toAddress { get; set; }
        public string From { get; set; }
        public string ToName { get; set; }
        public string Subject { get; set; }
        public string Text { get; set; }

    }
}
