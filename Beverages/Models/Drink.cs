using Dapper.Contrib.Extensions;

namespace Beverages
{
	[Table("drink")]
	public class Drink
	{
		[Key]
		public int id { get; set; }
		public string name { get; set; }
		public string ingredients { get; set; }
		public bool alcohol { get; set; }
	}
}
