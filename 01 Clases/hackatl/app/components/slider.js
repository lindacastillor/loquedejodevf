/* IIFE */
(function(){
	'use strict'

	var slider = {
		template : `
			<div class="slider">
				<ul class="slides">
					<li>
						<img src="img/PERRE.png" > <!-- random image -->
						<div class="caption center-align">
							<h3>Perre Consentido</h3>
						</div>
					</li>
					<li>
						<img src="img/perro_pantalon.jpg"> <!-- random image -->
						<div class="caption center-align">
							<h3>Perre dos</h3>
						</div>
					</li>
					<li>
						<img src="img/perro_pantalon.jpg"> <!-- random image -->
						<div class="caption center-align">
							<h3>Perre Tres</h3>
						</div>
					</li>
				</ul>
			</div>
		`
	}


	angular
		.module('bazul')
		.component('slider',slider);
})();
