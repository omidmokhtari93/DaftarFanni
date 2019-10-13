using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DaftarFanni.Controllers
{
    [Route("api/[controller]")]
    public class UnitsDifinition : Controller
    {
        private readonly SqlConnection con = new SqlConnection(connectionString: "Data Source=.;Initial Catalog=DaftarFanni;Integrated Security=True");

        [HttpGet("/api/GetMachines")]
        public JsonResult GetMachines()
        {
            con.Open();
            var list = new List<object>();
            var cmd = new SqlCommand("select * from Machines", con);
            var rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                list.Add(new { MachineName = rd["MachineName"].ToString(), Id = rd["Id"] });
            }
            con.Close();
            return new JsonResult(list);
        }

        [HttpGet("/api/MachineEntry")]
        public JsonResult MachineEntry(string machineName)
        {
            con.Open();
            var cmd = new SqlCommand("INSERT INTO [dbo].[Machines]([Created],[Modified],[MachineName]) " +
                "VALUES('" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff") + "' ," +
                " '" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff") + "' , N'" + machineName + "')", con);
            cmd.ExecuteNonQuery();
            con.Close();
            return new JsonResult(new { type = "success", message = "با موفقیت ثبت شد" });
        }

        [HttpGet("/api/GetMachineById")]
        public string GetMachineById(int machineId)
        {
            con.Open();
            var cmd = new SqlCommand("select MachineName from Machines where id =" + machineId + " ", con);
            var machine = cmd.ExecuteScalar().ToString();
            con.Close();
            return machine;
        }

        [HttpGet("/api/UpdateMachine")]
        public JsonResult UpdateMachine(int machineId, string machineName)
        {
            con.Open();
            var cmd = new SqlCommand("update Machines set MachineName = N'" + machineName + "' where Id = " + machineId + " ", con);
            cmd.ExecuteNonQuery();
            con.Close();
            return new JsonResult(new { type = "success", message = "با موفقیت ویرایش شد" });
        }
    }
}