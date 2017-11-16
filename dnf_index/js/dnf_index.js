// JavaScript Document
window.onload = function(){
	/********************轮播图**************************/
	var oImg = document.getElementById("D_B").getElementsByTagName("img");
	var arrImg = Array("img_dnf/dnf_index05.jpg","img_dnf/dnf_index06.jpg","img_dnf/dnf_index07.jpg","img_dnf/dnf_index08.jpg","img_dnf/dnf_index09.jpg","img_dnf/dnf_index10.jpg","img_dnf/dnf_index11.jpg");
	var oLi = document.getElementById("D_B").getElementsByTagName("li");
	var num = 0;
	var timer = setInterval(play,3000);
	over(0);
	over(1);
	over(2);
	over(3);
	over(4);
	over(5);
	over(6);
	function play(){
		if(num < 6){
			num++;
			oImg[0].src = arrImg[num];
			for(var i=0;i<arrImg.length;i++){
				if(i==num){
					oLi[i].style.backgroundColor = "#ec4828";
					continue;					
				}
				oLi[i].style.backgroundColor = "";	
			}
		}else{
			num = 0;
			oImg[0].src = arrImg[num];
			for(var i=0;i<arrImg.length;i++){
				if(i==num){
					oLi[i].style.backgroundColor = "#ec4828";
					continue;					
				}
				oLi[i].style.backgroundColor = "";	
			}
		}
	}
	function over(i){
		oLi[i].onmouseover = function(){
			clearInterval(timer);
			for(var j=0;j<arrImg.length;j++){
				oLi[j].style.backgroundColor = "";		
			}
			oLi[i].style.backgroundColor = "#ec4828";
			oImg[0].src = arrImg[i];
		}
		oLi[i].onmouseout = function(){
			timer = setInterval(play,3000);
			num  = i;
		}
	}
	/********************新闻，公告**************************/
	var aLi = document.getElementById("news").getElementsByTagName("li");
	var oDiv = document.getElementById("news").getElementsByTagName("div");
	var liLong = aLi.length;
	for(var i=0;i<liLong;i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			for(var j=0;j<liLong;j++){
				aLi[j].className = "";
				oDiv[j].className = "none";
			}
			aLi[this.index].className = "B_T";
			oDiv[this.index].className = "";
		}
	}
	/********************快速入口，玩家社区**************************/
	var arTag = Array ("img_dnf/dnf_index22.png","img_dnf/dnf_index24.png","img_dnf/dnf_index26.png","img_dnf/dnf_index28.png","img_dnf/dnf_index29.png","img_dnf/dnf_index32.png","img_dnf/dnf_index34.png","img_dnf/dnf_index36.png","img_dnf/dnf_index38.png","img_dnf/dnf_index40.png","img_dnf/dnf_index41.png","img_dnf/dnf_index44.png");
	var arTag2 = Array ("img_dnf/dnf_index21.png","img_dnf/dnf_index23.png","img_dnf/dnf_index25.png","img_dnf/dnf_index27.png","img_dnf/dnf_index30.png","img_dnf/dnf_index31.png","img_dnf/dnf_index33.png","img_dnf/dnf_index35.png","img_dnf/dnf_index37.png","img_dnf/dnf_index39.png","img_dnf/dnf_index42.png","img_dnf/dnf_index43.png");
	var tagImg = document.getElementById("body_left").getElementsByTagName("img");
	cli(0);
	cli(1);
	cli(2);
	cli(3);
	cli(4);
	cli(5);
	cli(6);
	cli(7);
	cli(8);
	cli(9);
	cli(10);
	cli(11);
	function cli (num){
		tagImg[num].onmouseover = function(){
			tagImg[num].src = arTag[num]
		}
		tagImg[num].onmouseout = function(){
			tagImg[num].src = arTag2[num]
		}
	}
	/********************历史版本**************************/
	var his = document.getElementById("history")
	var oP = document.getElementById("history").getElementsByTagName("p");
	var oSpan = document.getElementById("history").getElementsByTagName("span");
	var lf = parseInt(getStyle(his,"left"));
	oP[0].onclick = function(){
		if(lf = -1050){
			his.style["left"] = 0 + "px";
		}
	}
	oSpan[0].onclick = function(){
		if(lf = 0){
			his.style["left"] = -1050 + "px";
		}
	}
	function getStyle(obj,attr){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];	
	}
}