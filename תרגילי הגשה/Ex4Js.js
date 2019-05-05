function changeH2()
{
	document.getElementById('changeH').style.color="blue";
	document.getElementById('changeH').innerHTML='Group N is the BEST!';
}


function findMaxMinAv()
{
	var size=parseInt(window.prompt("Enter size",0));
	var sum=0;
	var max=-10000000;
	var min=10000000;
	var arr=new Array(size);
	var count=0;
	for(var i=0; i<size; i++)
	{
		var x=parseInt(window.prompt("Enter number",0));
		arr[i]=x;
		if(i%2==0)
		{
			sum+=x;
			count++;
		}	
		else
		{
			if(x>max)
				max=x;
			if(x<min)
				min=x;
		}
	}
	alert( "Average: " + sum/count + " Max= "+ max + " Min= "+min);
}

function countChars()
{
	var string=window.prompt("Enter string",0);
	var char=window.prompt("Enter char",0);
	var sum=0;
	for(var i=0;i<string.length;i++)
	{
		if(string.charAt(i)==char)
			sum++;
	}
	alert(char + " appear " + sum +" times");
}

function mulTable()
{
	var rows=parseInt(window.prompt("Enter rows",0));
	var cols=parseInt(window.prompt("Enter cols",0));
	document.write("<table style='background:yellow;'>");
	for(var i=0; i<rows; i++)
	{
		document.write("<tr style='border:solid 2px blue;'>");
		for(var j=0;j<cols;j++)
		{
			document.write("<td style='text-align:center;border:solid 2px blue;'>");
			document.write((i+1)*(j+1));
			document.write("</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
	document.write("<button onclick='location.reload()'>Refresh</button>");
}