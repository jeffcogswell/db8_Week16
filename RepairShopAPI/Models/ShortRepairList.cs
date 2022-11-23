using Dapper;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace RepairShopAPI
{
	[Table("shortrepairlist")]
	public class ShortRepairList
	{
		public int id { get; set; }
		public string instrument { get; set; }
		public string customer { get; set; }

		// static DAL methods

		public static List<ShortRepairList> getAll()
		{
			// Here's how we do it with just a query and not a view
			//return DAL.DB.Query<ShortRepairOrder>("select ro.id, ro.customer, ins.name as instrument from repairorder ro join instrument ins on ro.instrument_id = ins.id").ToList();
			// But some people argue that putting queries in C# code isn't the best idea.
			MySqlConnection db = new MySqlConnection(DAL.CS);
			db.Open();
			var result = db.GetAll<ShortRepairList>().ToList();
			db.Close();
			return result;
		}

		public static List<ShortRepairList> GetBookmarks()
		{
			MySqlConnection db = new MySqlConnection(DAL.CS);
			db.Open();
			var result = db.Query<ShortRepairList>("select id, instrument, customer from fullorder where bookmark = true").ToList();
			db.Close();
			return result;
		}

		public static List<ShortRepairList> SearchByName(string name)
		{
			MySqlConnection db = new MySqlConnection(DAL.CS);
			db.Open();
			var param = new { cust = $"%{name}%" };  // e.g. if name is Johnson, cust will be %Johnson%
			// I have a name value pair:
			//     {
			//         cust: "%Johnson%"
			//     }
			var result = db.Query<ShortRepairList>("select id, instrument, customer from fullorder where customer like @cust", param).ToList();
			// So I will have this for my SQL:
			//   select id, instrument, customer from fullorder where customer like '%Johnson%'
			db.Close();
			return result;
		}
	}
}

/*
 * 
 *      var parameters = new { UserName = "Fred", Password = "abc123" };
 *      var result = connection.Query("select * from users where username = @UserName and password = @Password", parameters);
 *      
 *      Here's what it will generate:
 *      "select * from users where username = 'Fred' and password = 'abc123"
 * 
 */
