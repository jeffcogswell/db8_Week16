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
		public ApiResponse Delete(string id)
		{
			Department.Delete(id);
			//return "{ \"status\": \"ok\" }";   // i.e. we are returning this string:     { "status": "ok" } That's one way.
			return new ApiResponse() { status = "ok" };
		}

		// (U)pdate
		[HttpPut]
		public ApiResponse Update(Department dep)
		{
			// Here we'll also return { "status": "ok" } but as an actual object, an "anonymous" object with no class to belong to.
			// Jeff kind of botched this; instead of creating anonymous objects, we really should create a class.
			// We only want to ever send back a list or an object from our API. So it will go back as
			// either [] or {}. Technically that's what we were doing, but that was too hackish.
			// So we created an actual class called ApiResponse.
			Department.Update(dep);
			//return new { status = "ok" };
			return new ApiResponse() { status = "ok" };
		}
	}
}
