using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace Messages
{
    public  interface IEmail
    {
        [Required]
        string To { get; set; }
        [Required]
        string From { get; set; }
        string Subject { get; set; }
        string Text { get; set; }

    }
}
