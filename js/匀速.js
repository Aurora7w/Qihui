//获取非行间样式
//console.log(oDiv.currentStyle.left)//IE
//console.log(getComputedStyle(oDiv,false).left)//google firefox
function getStyle(obj, type) {
	if(obj.currentStyle) {
		//console.log(obj.currentStyle[type])
		return obj.currentStyle[type];
	} else {
		//console.log(getComputedStyle(obj,false)[type])
		return getComputedStyle(obj, false)[type];
	}
}
var timer = null;
function move1(obj, type, iTarget ,fn) {
	//运动开始之前先清空定时器
	clearInterval(timer);
	timer = setInterval(function() {
		//if(oDiv.offsetLeft>=600){
		//目标值 元素 元素属性 速度
		var speed = 7;
		if(type === "opacity") {
			var getVal = parseInt(getStyle(obj, type) * 100);
		} else {
			var getVal = parseInt(getStyle(obj, type));
		}

		if(iTarget > getVal) {
			speed = 7;
		} else {
			speed = -7;
		}
		if(Math.abs(iTarget - getVal) < Math.abs(speed)) {
			if(type === "opacity") {
				obj.style[type] = iTarget / 100;
			} else {
				obj.style[type] = iTarget + "px";
			}
			clearInterval(timer);
			if(fn){
				fn();
			}
		} else {
			//运动和停止运动一定要分开
			if(type === "opacity") {
				obj.style[type] = (getVal + speed) / 100;
			} else {
				obj.style[type] = getVal + speed + "px";
			}

		}
	}, 30)
}