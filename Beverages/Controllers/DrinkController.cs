using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Beverages.Controllers
{
	[Route("drink")]
	[ApiController]
	public class DrinkController : ControllerBase
	{
		[HttpGet]
		public IEnumerable<Drink> GetAll()
		{
			return DAL.GetAllDrinks();
		}

		[HttpPost]
		public Drink Add(Drink drink)
		{
			return DAL.AddDrink(drink);
		}

		[HttpDelete("{id}")]
		public void Delete(int id)
		{
			DAL.Delete(id);
		}

		[HttpPut]
		public void Update(Drink drink)
		{
			DAL.Update(drink);
		}
	}
}
