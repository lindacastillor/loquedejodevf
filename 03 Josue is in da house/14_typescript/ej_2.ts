class Point {
	constructor( public x: number , public y:number ) {

	}
	add(point:Point){
		return new Point(this.x + point.x, this.y + point.y);
	}
}
