using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
	// First thing... change the Route to what we want.

	[Route("department")]
	[ApiController]
	public class DepartmentController : ControllerBase
	{
		// Remember, these are not static methods!

		// (R)ead all

		[HttpGet]
		public List<Department> GetAll()
		{
			return Department.GetAll();
		}

		// (R)ead one

		[HttpGet("{id}")]
		public Department Get(string id)
		{
			return Department.Get(id);
		}

		// (C)reate
		[HttpPost]
		public Department Save(Department dep)
		{
			return Department.Save(dep);
		}

		// (D)elete
		[HttpDelete("{id}")]
		public string Delete(string id)
		{
			Department.Delete(id);
			return "ok";
		}

		// (U)pdate
		[HttpPut]
		public string Update(Department dep)
		{
			Department.Update(dep);
			return "ok";
		}
	}
}
