
// document.body.style.backgroundColor="red";
//alert('a');

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

					final_string = final_string + $.trim(course.eq(3).children(":first").html()) + " ";
					
				}
			});
			alert(final_string);

			// alert(course_detail);
		}
	}

});
