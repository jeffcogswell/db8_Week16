using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace Instruments.Models
{
	[Table("instrument")]
	public class Instrument
	{
		[Key]
		public int id { get; set; }
		public string thetype { get; set; }
		public string color { get; set; }
		public int year { get; set; }


		// Static properties and methods
		// This is where we'll add our CRUD operations

		public static MySqlConnection DB;

		// (R)ead: Read all rows from the table

		public static List<Instrument> ReadAll()
		{
			return DB.GetAll<Instrument>().ToList();
		}

		// (C)reate

		public static Instrument Add(Instrument inst)
		{
			DB.Insert(inst);
			return inst;
		}

		// (D)elete
		public static void Delete(int id)
		{
			Instrument inst = new Instrument() { id = id };
			DB.Delete(inst);
		}

		// (U)pdate
		public static void Update(Instrument inst)
		{
			DB.Update(inst);
		}

	}
}
