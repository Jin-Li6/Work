
notice();
 
function notice(){

$.ajax("data.json",{
		data:{},
		dataType:'json',
		type:'get',
		async:'false',
		success:function(data){			
			var listdata=data.list;       //列表数据				         
            if(listdata.length>0){   //项目列表
            	var listInfo="";          
				$.each(listdata,function(){
					listInfo+="<li class='mui-table-view-cell mui-media'>"+
											"<img class='mui-media-object mui-pull-left project-img' src="+this.project_img+">"+
											"<div class='mui-media-body'>"+
												"<h3 class='project-name'>"+this.project_name+"</h3>"+
												"<p class='money-range' class='mui-ellipsis loan-range'>"+this.money_range+"</p>"+
												"<p class='loan-rate'>每日百分比"+this.day_rate+"%，应该为"+this.day_limit+"天，"+this.day_person+"人已交"+"</p>"+
											"</div>"+
											"<div class='loan-more'>"+
												"<a href="+this.button_info+" target='' ><button>详情</button></a>"+
											"</div>"+										
										"</li>";
				});
			
			    $("#project_list")[0].innerHTML=listInfo;	
            }
		}
//		error:function(xhr,type,errorThrown){			
//			alert("系统繁忙，请联系管理员");
//		}
	})
}
 