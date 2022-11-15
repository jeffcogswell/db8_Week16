using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIDemo.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PracticeController : ControllerBase
	{
		//
		// Path: (We just have HttpGet with nothing after it. No words or path)
		//
		//          /api/Practice
		//
		// We can call these methods anything we want. It's irrelevent to the route/path.
		[HttpGet]
		public string index()
		{
			return "Hello!";
		}


		//
		// Path:
		//           /api/Practice/number
		//
		[HttpGet("number")]
		public int test1()
		{
			return 50;
		}

		//
		// Path:
		//           /api/Practice/stuff
		//
		[HttpGet("stuff")]
		public Stuff test2()
		{
			return new Stuff() { Height = 20, Word = "Hello", YesNo = true };
		}

		//
		// Path:
		//           /api/Practice/list
		//
		[HttpGet("list")]
		public List<Stuff> test3()
		{
			List<Stuff> result = new List<Stuff>();
			result.Add(new Stuff() { Height = 50, Word = "Another", YesNo = false });
			result.Add(new Stuff() { Height = 5, Word = "Greetings", YesNo = true });
			result.Add(new Stuff() { Height = 100, Word = "Earthling", YesNo = true});
			return result;
		}

		[HttpPost("double")]
		public int test4(int num)
		{
			return 2 * num;
		}

		[HttpPost("process")]
		public Stuff test5(Stuff data)
		{
			data.Height = data.Height * 2;
			data.Word = "Hello " + data.Word;
			data.YesNo = !data.YesNo;
			return data;
		}

		//
		// Path: (We just have HttpPost with nothing after it. No words or path)
		//
		//          /api/Practice
		//
		[HttpPost]
		public string test6(Stuff data)
		{
			return $"{data.Word} saved.";
		}

	}

	// Outside the class PracticeController, but still inside the namespace...

	public class Stuff
	{
		public int Height { get; set; }
		public string Word { get; set; }
		public bool YesNo { get; set; }
	}
}
