function findSecond (arr) {
	function sortNum (a,b) {
		return b-a;
	}
	if (Array.isArray(arr)&&arr.length > 1) {
		arr.sort(sortNum);
		return arr[1];
	}
	else {
      return "输入正确数组";
    }
}
var arr = [3,10,9,7,11,2];
console.log(findSecond(arr));