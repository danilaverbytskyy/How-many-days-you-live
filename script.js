function CalculatesHowManyDaysYouLive() {
	let day, month, year;
	day = document.getElementById("day").value;
	month = document.getElementById("month").value;
	year = document.getElementById("year").value;

	let answer;
	let Check_on_fool=isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || month < 1 || year < 1 || day > 31 || month >= 13 || year <= 0 || String(day).length > 2 || String(month).length > 2;
	if (Check_on_fool) {
		answer = "Введенные данные не корректны";
	}
	else {
		let today = new Date();
		let birthday = new Date(year, month - 1, day, 0, 0, 0, 0);
		/*Месяц должен быть между 0 и 11 в Data конструкторе*/
		let number_of_days = (today - birthday) / (1000 * 3600 * 24);
		number_of_days = Math.floor(number_of_days);

		if(number_of_days>=5)
			answer = "Вы прожили " + String(number_of_days) + " дней";
		else if(number_of_days>=2)
			answer = "Вы прожили " + String(number_of_days) + " дня";
		else if(number_of_days==1)
			answer="Вы прожили 1 день";
		else if(number_of_days==0)
			answer="Happy birthday to youuuuu!<br>&#128516;&#129412;&#127856;&#129346;";
		else if(number_of_days<0)
			answer="Вы еще не родились";
		else
			answer="ошибка 404";
	}
	document.getElementById("answer").innerHTML = answer;
}