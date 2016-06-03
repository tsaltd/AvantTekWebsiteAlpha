using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using AvantTek.CodeLibrary;
using Workspace.ViewModels;

namespace Workspace.Controllers.API
{
    [Route("API/Message")]
    public class MessageController : Controller
    {
        [HttpGet("")]
        public JsonResult Get()
        {   
            return Json(new {name = "AvantTek"});
        }

        [HttpPost("")]
        public void Post([FromBody]  Email msg)
        {
            if (ModelState.IsValid)
            {

                Response.StatusCode = (int)HttpStatusCode.Created;
               
            }
            else
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
          
            }
            
            
        }
    }
}
