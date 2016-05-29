using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Messages;

namespace Workspace.Controllers.API
{
    [Route("api/sendgrid")]
    public class sendgridController : Controller
    {
        [HttpGet("")]
        public JsonResult Get()
        {
            return Json(new {name = "Steve"});

        }

        [HttpPost("")]
        public JsonResult Post([FromBody] Messages.Email email)
        {
            return (Json(true));
        }
    }
}
