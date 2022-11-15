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
			return "{ \"status\": \"ok\" }";   // i.e. we are returning this string:     { "status": "ok" } That's one way.
		}

		// (U)pdate
		[HttpPut]
		public Object Update(Department dep)
		{
			// Here we'll also return { "status": "ok" } but as an actual object, an "anonymous" object with no class to belong to.
			Department.Update(dep);
			return new { status = "ok" };
		}
	}
}
