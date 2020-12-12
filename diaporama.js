class Diaporama {

	constructor(src, images) {
		this.src = src;
		this.images = images;
		this.position = 0;
		this.start();
	}
	slideLeft() {
		if (this.position <= 0) {
			this.position = this.images.length - 1;
		} else {
			this.position--;
		}
		this.src = this.images[this.position];
	}
	slideRight() {
		if (this.position > this.length-1) {
			this.position = 0;
		}
		else {
			this.position++;
		}
		this.src = this.images[this.position];
	}
	start() {
		this.src = this.images[this.position];
	}

}