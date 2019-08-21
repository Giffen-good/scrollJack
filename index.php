 <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
    <link rel = "stylesheet"
   type = "text/css" href="style.css"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
   	<script src="index.js"></script>

  </head>
  <body class="oxh">
  	<div id='fixedHeader' class="z1">
  		<h1 class="mt1 mb0" >Stephanie George</h1>
  		<div id="cat-name"></div>
  	</div>
		  <?php 
		  $portfolio = array(
		  	'Hair & Makeup' => [
		  		['img/img.jpg', 'title1','#'],
		  		['img/img-2.jpg', 'title2','#'],
		  		['img/img-3.jpg', 'title3','#']
		  	],'Styling' => [
		  		['img/img-4.jpg', 'title1','#'],
		  		['img/img.jpg', 'title2','#'],
		  		['img/img-2.jpg', 'title1','#'],
		  		['img/img-5.jpg', 'title2','#'],
		  		['img/img-3.jpg', 'title1','#'],
		  		['img/img.jpg', 'title2','#'],
		  		['img/img-4.jpg', 'title3','#']
		  	], 'FX makeup' => [
		  		['img/img.jpg', 'title1','#'],
		  		['img/img.jpg', 'title2','#'],
		  		['img/img.jpg', 'title3','#']
		  	]

		  );
		  $i = 0;
		  	foreach ( $portfolio as $cat=>$projects) {
		  		if ($i % 2 == 0 ) {
		  			?>
			  		<div data-src="<?php echo $cat; ?>" id="category-<?php echo $i; ?>" class="even category dt">
			<?php
			  		} else {
			?>
			  		<div data-src="<?php echo $cat; ?>" id="category-<?php echo $i; ?>" class="odd category dt"><?php

			  		}
			  		$i++;
				  		?><div class="fixedEl">
					  		<div class="little-container dtc vam"> <?php
					  		foreach ($projects as $project) {

						  		?>
						  		<a class="psr bgpc bgsc dtc vam">
						  			<img class="img-obj" src="<?php echo $project[0]; ?>" class=" c psa" />
						  			<div class="c hov op0 psa c7 fc1 z2 tac"><?php echo $project[1]; ?></div>
						  		</a>
					  		<?php
					  		} ?>
					  		</div>
					  	</div>
			  		</div>
		<?php
		  	}

		  ?>


  </body>
</html>