class Chain
{
  constructor(body1,body2)
  {
  var options={

    bodyA:body1,
    bodyB:body2,
    stiffness:0.04,
    length:10
  }
  this.body1=body1;
  this.body2=body2;
  this.chain=Constraint.create(options);
  World.add(world,this.chain);


  }
  display()
  {
      var pos=this.chain.body1.position;
      var pos1=this.chain.body2.position;

      strokeWeight(20)
  line(pos.x,pos.y,pos1.x,pos1.y);

  }


}
