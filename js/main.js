(function(){
	'use strict'
	var payLess;
	var short;
	var paymore;
	var over;
	var str ;

	var price = document.getElementById('price');
	var num = document.getElementById('num');
	var unit = document.getElementById('unit');
	var btn = document.getElementById('btn');
	var result = document.getElementById('result');
	var reset = document.getElementById('reset');
	function checkInput()
	{
		//正規表現
		//  /^[1-9][0-9]*$/

		if (price.value.match(/^[1-9][0-9]*$/) !== null
		&& num.value.match(/^[1-9][0-9]*$/) !== null){
			btn.classList.remove('disabled');
		}else{
			btn.classList.add('disabled');
		}
	}
	btn.addEventListener('click',function(){
		
		if (this.classList.contains('disabled')){
			return;
		}
		payLess = Math.floor(price.value / num.value / unit.value ) * unit.value;//333.3333
		short = price.value - payLess * num.value

		paymore = Math.ceil(price.value / num.value / unit.value ) * unit.value;//400
		over = Math.abs(price.value - paymore * num.value); // -200
		if ( over == 0 && short == 0 ){
			str = '一人' + + (price.value/num.value) + '円丁度です。';
		}else{
			str = '一人' + payLess + '円だと' + short + '円足りません。\n' +
			 '一人'+paymore+'円だと'+over+'円余ります。';
		}


		result.textContent = str;
		reset.classList.remove('hidden');
		reset.addEventListener('click',function(){
			result.textContent = 'ここに結果を表示します。';
			price.value = "";
			num.value = "";
			unit.value = 100;
			btn.classList.add('disabled');
			reset.classList.add('hidden');
			price.focus();

		})
	});
	price.focus();
	price.addEventListener('keyup',checkInput);
	num.addEventListener('keyup',checkInput);

})();
