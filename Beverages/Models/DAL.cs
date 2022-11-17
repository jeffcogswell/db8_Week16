using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace Beverages
{
	public class DAL
	{
		// Connection stuff

		public static MySqlConnection DB;

		// Drink table methods

		public static IEnumerable<Drink> GetAllDrinks()
		{
			// For practice: We don't actually need to have it return a list.
			return DB.GetAll<Drink>();
		}

		public static Drink AddDrink(Drink drink)
		{
			// Insert just returns the ID...
			DB.Insert(drink);
			// So let's return the whole object. Insert fills in the object's id for us.
			return drink;
		}

		// For this example, we'll have Delete and Update just return nothing.

		public static void Delete(int id)
		{
			DB.Delete(new Drink() { id = id });
		}

		public static void Update(Drink drink)
		{
			DB.Update(drink);
		}
	}
}
