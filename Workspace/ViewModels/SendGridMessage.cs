using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace Workspace.ViewModels
{
    public class SendGridAlphaInterestedMessage
    {
        public string SendTo { get; set; }
        
        //SendGridAlphaInterestedMessage(string msgAlphaUser)
        //{
        //    From = "stevem@avanttek.com";
        //    To = "alphauser@avanttek.com";
        //    Subject = "ToSAlphaInterested" + DateTime.Now.ToString("d");
        //    Text = msg.Text;
        //    SendTo = To;
        //}

    }
}
