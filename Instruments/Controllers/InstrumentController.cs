using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// Add the using statement for our Models folder/namespace!
using Instruments.Models;

namespace Instruments.Controllers
{
	// Replace everything in Route with just "instrument"
	[Route("instrument")]
	[ApiController]
	public class InstrumentController : ControllerBase
	{
		// Here are our routes:
		// 
		//   GET /instrument -- returns the whole list of instruments
		//   POST /instrument -- adds a new instrument to the database
		//   DELETE /instrument/{id} -- deletes the instrument by id
		//   POST /instrument/update -- updates the instrument that's passed in

		// As a review:
		// With API controllers (as opposed to MVC controllers), the
		// name of the method is not part of the URL path.
		// So we can call the method whatever we want.

		// (R)ead
		[HttpGet]
		public List<Instrument> ReadAll()
		{
			return Instrument.ReadAll();
		}

		// (C)reate
		[HttpPost]
		public Instrument Add(Instrument inst)
		{
			return Instrument.Add(inst);
		}

		// (D)elete
		[HttpDelete]
		public string Delete(int id)
		{
			Instrument.Delete(id);
			return "ok";
		}


		// (U)pdate
		// A LOT of poeple use POST for their updates.
		// In fact a LOT of people use POST for everything
		// except the GetAll that returns the list.
		// For this one, I'm using POST just for educational
		// purposes so you can see how to code a path with
		// ASP.NET API controllers.

		[HttpPost("update")]
		public string Update(Instrument inst)
		{
			Instrument.Update(inst);
			return "ok";
		}
	}
}
