// Again, remove .Models from the namespace
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace BusinessV2API
{
	[Table("department")]
	public class Department
	{
		// For Department, our key is a string.
		// Since it's not autoincrement, we use
		// ExplicitKey. And set the id type to string.
		[ExplicitKey]
		public string id { get; set; }
		public string name { get; set; }
		public string location { get; set; }


		//
		// CRUD Operations
		// These are static methods
		// This part handles just the database operations.
		// So don't think about controllers, URLs, routes, paths.
		//

		public static MySqlConnection DB;

		// (R)ead all

		public static List<Department> GetAll()
		{
			return DB.GetAll<Department>().ToList();
		}


		// (R)ead one

		// Our key is a string, so we pass in a string for id
		public static Department Get(string id)
		{
			return DB.Get<Department>(id);
		}


		// (C)reate

		public static Department Save(Department dep)
		{
			DB.Insert(dep);
			return dep;
		}


		// (D)elete
		// Our key is a string, so we pass in a string for id
		public static void Delete(string id)
		{
			Department dep = new Department() { id = id };
			DB.Delete(dep);
		}

		// (U)pdate

		public static void Update(Department dep)
		{
			DB.Update(dep);
		}
	}
}
