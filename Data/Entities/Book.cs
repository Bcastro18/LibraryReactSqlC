namespace LibraryReactSqlC.Data.Entities
{
    public class Book
    {

        public int id { get; set; }
        public string nameBook { get; set; }
        public string city { get; set; }
        public string author { get; set; }
        public string country { get; set; }
        public int pages { get; set; }


        /*
         * [Id]
      ,[NameBook]
      ,[City]
      ,[Author]
      ,[Pages]
      ,[Country]
         * 
         * */
    }
}
