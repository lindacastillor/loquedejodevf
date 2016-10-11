class Point {
	x: number;
	y: number;

	constructor(x: number, y: number){
		this.x = x;
		this.y = y;
	}

	add(point: Point) {
		return new Point( this.x + point.x, this.y+point.y );
	}
}

class Point3D extends Point {
	z: number;

	constructor(x:number, y:number, z:number){
		super( x, y)
		this.z = z;
	}
	add(point: Point3D){
		var point2d = super.add( point);
		return new Point3D(point2d.x, point2d.y, this.z + point.z);
	}
}

var p = new Point(10,4);
