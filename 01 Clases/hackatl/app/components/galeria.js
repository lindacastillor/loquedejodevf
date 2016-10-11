(function(){
	'use strict'

	var galeria = {
		template : `
		<div class="container ">
			<div class="row">
				<div class="col s12 m8 l4">
					<div class="card">
						<div class="card-image">
							<img src="img/IMG_4851.jpg">
						</div>
						<div class="card-content">
							<p>Niña Sherif</p>
						</div>
						<div class="card-action">
							<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Ver más</a>
						</div>
					</div>
				</div>

				<div class="col s12 m8 l4">
					<div class="card">
						<div class="card-image">
							<img src="img/dog_panta1.jpg">
						</div>
						<div class="card-content">
							<p>Hoddie Badass</p>
						</div>
						<div class="card-action">
							<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Ver más</a>
						</div>
					</div>
				</div>

				<div class="col s12 m8 l4">
					<div class="card">
						<div class="card-image">
							<img src="img/dog_panta.JPG">
						</div>
						<div class="card-content">
							<p>Sportie</p>
						</div>
						<div class="card-action">
							<a class="waves-effect waves-light btn modal-trigger" href="#modal-trigger">Ver más</a>
						</div>

					</div>
				</div>
			</div>

		</div>


		<!-- Modal Structure -->
		<div id="modal1" class="modal">
		  <div class="modal-content" style="display:inline-block;">
			<img src="img/dog_panta.JPG" style="height:300px;">
		  </div>
		  <div class="modal-footer" style="width:49%; display:inline-block;vertical-align:top;">
			  <p>A bunch of doggies</p>
			  <a style="float:left;"class="waves-effect waves-light btn">COMPRAR!</a>
		  </div>

		</div>
		`
	}

	angular
		.module('bazul')
		.component('galeria',galeria);

})();
