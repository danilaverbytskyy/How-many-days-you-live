function CalculatesHowManyDaysYouLive() {
	var day,month,year;
	var text;
	day=document.getElementById("day").value;
	month=document.getElementById("month").value;
	year=document.getElementById("year").value;

	if(isNaN(day) || isNaN(month) || isNaN(year) ||
	 day<1 || month<1 || year<1 || day>31 || month>12){
		text="Введенные данные не корректны";
	}
	else{
		var today=new Date();
		var birthday=new Date(year,month,day);
		text=String((today-birthday+1)/86400);
		text="Вы прожили "+text+" дней";
	}
	document.getElementById("answer").innerHTML = text;
}