function display() 
{
	var p=document.getElementById('res').innerHTML;
	var n=document.getElementById('no').innerHTML;
	document.write(n);
	var a=0;
	n=parseInt(n)
	if (n==9) 
	{
		a=a+9;
		p.innerHTML=a;
		a=a*10;
	}
	else if (n==8) {
		a=a+8;
		p=a;
		a=a*10;
	}
	else if (n==7) {
		a=a+7;
		p=a;
		a=a*10;
	}
	else if (n==6) {
		a=a+6;
		p=a;
		a=a*10;
	}
	else if (n==5) {
		a=a+5;
		p=a;
		a=a*10;
	}
	else if (n==4) {
		a=a+4;
		p=a;
		a=a*10;
	}
	else if (n==3) {
		a=a+3;
		p=a;
		a=a*10;
	}
	else if (n==2) {
		a=a+2;
		p=a;
		a=a*10;
	}
	else if (n==1) {
		a=a+1;
		p=a;
		a=a*10;
	}
	else if (n==0) {
		a=a*10;
		p=a;
		a=a*10;
	}
}