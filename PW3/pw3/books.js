$(document).ready(function(){
	$("button").click(function(){
		$.ajax({
			url: "books.xml",
            type: 'GET',
            dataType: 'xml',
            timeout: 1000,
            cache: false,

			success: function(data){
				$("div").empty();
				var t1 = $("<table/>");
				t1.append("<tr>")
				t1.append("<th>Title</th><th>Authors</th><th>Category</th><th>Year</th><th>Price</th>")

				$(data).find("book").each(function(){

								var title=$(this).children('title');
                title_value=title.text();

                var author = "";
                $(this).find('author').each(function(){
                	author += $(this).text();
									if($(this).next("author").length > 0){
										author += ",";
									}

                });

                category=$(this).attr('category');
                var year=$(this).children('year').text();
                var price=$(this).children('price').text();
                t1.append("<tr><td>"+title_value+"</td><td>"+author+"</td><td>"+category+"</td><td>"+year+"</td><td>"+price+"</td></tr>")
                });
                $("#load").append(t1);
            },

            error: function(){alert("loading xml failed");}

		});
	});
});
