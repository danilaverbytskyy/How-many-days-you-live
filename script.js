function CalculatesHowManyDaysYouLive() {
	let day, month, year;
	let text;
	day = document.getElementById("day").value;
	month = document.getElementById("month").value;
	year = document.getElementById("year").value;

	if (isNaN(day) || isNaN(month) || isNaN(year)) {
		text = "Введенные данные не корректны";
	}
	else {
		if (day < 1 || month < 1 || year < 1 || day > 31 || month >= 13 || year <= 0 || String(day).length > 2 || String(month).length > 2)
			text = "Введенные данные не корректны";
		else {
			let today = new Date();
			let birthday = new Date(year, month - 1, day, 0, 0, 0, 0);
			/*Месяц должен быть между 0 и 11 в Data конструкторе*/
			text = (today - birthday) / (1000 * 3600 * 24);
			text = Math.floor(text);
			if(text>=5)
				text = "Вы прожили " + String(text) + " дней";
			else if(text>=2)
				text = "Вы прожили " + String(text) + " дня";
			else if(text==1)
				text="Вы прожили 1 день";
			else if(text==0)
				text="Happy birthday to youuuuu";
			else
				text="Вы еще не родились";
		}
	}
	document.getElementById("answer").innerHTML = text;
}