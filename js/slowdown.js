function getStyle(obj, type) {
	if(obj.currentStyle) {
		return obj.currentStyle;
	} else {
		return getComputedStyle(obj, false)[type]
	}
}
//var timer = null;

function move2(obj, type, iTarget , fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var getVal = parseInt(getStyle(obj, type));
		
		//opacity的取值为0~1，parseInt之后都是0,所以给它*100,方便查看变化
		if(type === "opacity") {
			var getVal = parseInt(getStyle(obj, type) * 100);
		} else {
			var getVal = parseInt(getStyle(obj, type));
		}
		
		
		var speed = (iTarget - getVal) / 10;
		speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed)
		if(getVal === iTarget) {
			if(type === "opacity") {
				obj.style[type] = iTarget / 100;  //用户输入，所以type要用[]
			} else {
				obj.style[type] = iTarget + "px";
			}
			clearInterval(obj.timer)
			if(fn){
				fn();
			}
		} else {
			if(type === "opacity") {
				obj.style[type] = (getVal + speed) / 100;  //前面把opacity*100，所以后面要把它还原成原来的比例
			} else {
				obj.style[type] = getVal + speed + "px";
			}
		}
	}, 30)
}