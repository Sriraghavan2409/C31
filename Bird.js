class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    //Array=Data structure that can store multiple values together inside[]seperated by ,(s)
    //Arrays can store all data types even arrays itelf into it array1=[[1,2],[3,4],[5,6]]
    //the index of the array always starts with a 0,array 1 [0]=[1,2],array 1 [1][1]=4
    //Empty array to store the bird positions
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //Store the positions only when velocity and position of the bird are above a treshhold
    if(this.body.velocity.x>10 && this.body.position.x>200){
      //get the bird position in the position array
      var position = [this.body.position.x,this.body.position.y];
    //store as array of arrays
    this.trajectory.push(position);
    //Display the smoke image for the bird positions

    }
    
  for(var i=0;i<this.trajectory.length;i=i+1){
  image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);


  }
  }
}
