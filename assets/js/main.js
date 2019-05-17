var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Rectangle bleu
ctx.fillStyle = "#A0D7E6";      // Début d'un autre chemin
ctx.fillRect(80,120,240,240);



// Toit
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(80,120);
ctx.lineTo(200,20);
ctx.lineTo(320,120);
ctx.fillStyle = "#D88437";
ctx.fill();            // Application du remplissage


// Porte
ctx.fillStyle = "#C9C9C9"; // Application du remplissage
ctx.fillRect(170,280,60,80);


// Fenetre1 avec fill
ctx.fillStyle = "#C9C9C9"; // Application du remplissage
ctx.fillRect(110,150,50,50);

// Fenetre2 avec stroke
ctx.fillStyle = "#C9C9C9"; // Application du remplissage
ctx.fillRect(240,150,50,50);