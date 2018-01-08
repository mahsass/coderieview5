
var Persons=[{
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy1.jpg",	
			likes: 0   
			},{
			name: 'Maxina',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/girl1.jpg",	
			likes: 0   
			},{
			name: 'Jane',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/girl2.jpg",	
			likes: 0   
			},{
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy2.jpg",	
			likes: 0   
			},];

 		

	
		var button=document.getElementById('clickme'),
			count=0;
			button.onclick=function(){
				count += 1;
				button.innerHTML="like"+count;

			};

			var button1=document.getElementById('clickme1'),
			count=0;
			button1.onclick=function(){
				count += 1;
				button1.innerHTML="like"+count;
			};

			var button2=document.getElementById('clickme2'),
			count=0;
			button2.onclick=function(){
				count += 1;
				button2.innerHTML="like"+count;
			};

			var button3=document.getElementById('clickme3'),
			count=0;
			button3.onclick=function(){
				count += 1;
				button3.innerHTML="like"+count;
			};

