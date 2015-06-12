function isPrime (num) {
	switch (num) {
		case '':
        	return "请输入数字";
			break;
		case 1:
        	return "1既不是素数也不是合数";
			break;
		default :
			for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
				if (num%i===0) {
					return "num不是素数";
				}
			}
	        if (i>Math.floor(Math.sqrt(num))) {
	          return "num是素数";
	        } 
			break;
	}
}
