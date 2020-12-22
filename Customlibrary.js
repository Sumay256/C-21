function custom(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
   // movingRect.shapeColor = "red";
   //fixedRect.shapeColor = "red";
   return true;
  }
  else {
   // movingRect.shapeColor = "green";
   // fixedRect.shapeColor = "green";
   return false;
  }
  }
  function custom2(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2){
        obj1.velocityX=-(obj1.velocityX);
        obj2.velocityX=-(obj2.velocityX); 
      }
    if(obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2)  {
        obj1.velocityY=-(obj1.velocityY);
        obj2.velocityY=-(obj2.velocityY);
      }
  }