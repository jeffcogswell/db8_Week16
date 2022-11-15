using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
	// Let's change the base route to explicitly "employee"
	// It was this:
	//        [Route("api/[controller]")]
	// Change to: (no brackets!)
	//        [Route("employee")]

	[Route("employee")]
	[ApiController]
	public class EmployeeController : ControllerBase
	{
		// Remember, these are not static methods!

		// (R)ead all

		[HttpGet]
		public List<Employee> GetAll()
		{
			return Employee.GetAll();
		}

		// (R)ead one

		[HttpGet("{id}")]
		public Employee Get(int id)
		{
			return Employee.Get(id);
		}

		// (C)reate
		[HttpPost]
		public Employee Save(Employee emp)
		{
			return Employee.Save(emp);
		}

		// (D)elete
		[HttpDelete("{id}")]
		public string Delete(int id)
		{
			Employee.Delete(id);
			return "ok";
		}

		// (U)pdate
		[HttpPut]
		public string Update(Employee emp)
		{
			Employee.Update(emp);
			return "ok";
		}


	}
}
