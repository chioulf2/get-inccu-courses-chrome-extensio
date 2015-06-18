
// document.body.style.backgroundColor="red";
//alert('a');


var course_name = [];  //課程名稱陣列
var course_code = []; //科目代碼
var course_score = []; //分數 如果不是數字可能不要存?

$("table").each(function(){
	//獲得第一個tr的子子子節點  看看有吳包含 "學年成績單"  在往下做下去...
	var is_grade_content = $(this).children(":first").children(":first").children(":first").children(":first").html();
	if(is_grade_content != undefined){  //過濾掉undefined不然會錯
		if(is_grade_content.indexOf('學年成績單') > 0){
			//alert(grade_child);
			var course_detail = $(this).children(":first").children();
			//由course_detail.eq(2)開始 是課程資訊
			var count = 0;
			var final_string = "";
			course_detail.each(function(){
				count++;
				if(count > 2){ //排除掉非成績的選項
					//eq: 0學年 1學期 2科目代號 3科目名 4必/選修 5學分數 6成績 7備註                       
					var course = $(this).children(); //全部課程 eq(0~?).children(":first").html()表示課程詳細資訊
					//如果成績為數字 再繼續存進去 不然沒成績
					if(!isNaN(course.eq(6).children(":first").html()) ){
						course_name.push($.trim(course.eq(3).children(":first").html()));
						course_code.push($.trim(course.eq(2).children(":first").html()));
						course_score.push($.trim(course.eq(6).children(":first").html()));

					}
					//final_string = final_string + $.trim(course.eq(3).children(":first").html()) + " ";
					
				}
			});
			//alert(final_string);

		}
	}

});


//alert(course_name);
// alert(course_code);
// alert(course_score);

// var courses = [{ "user_id": "128", "course_id": "700",
//                 "comment": "test", "score": "56" }];

// alert("start");
//跨網域
$.ajax({
    type: "POST",
    url: "http://140.119.19.39:80/courses_save/",
    // The key needs to match your method's input parameter (case-sensitive).
    data: { 'course_name[]' : course_name,
    		'course_code[]' : course_code,
    		'course_score[]' : course_score }, 
    //data: { request: '123asd'},
    // contentType: "application/json; charset=utf-8",
    //dataType: 'json', 
    success: function(data){
    			alert(data);
			},
	error: function(jqXHR, textStatus, errorThrown){
            alert(errorThrown);
          }
});
