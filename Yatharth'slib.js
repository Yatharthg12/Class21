function isTouching(moving,fixed){
    if (moving.x - fixed.x < fixed.width/2 + moving.width/2
      && fixed.x - moving.x < fixed.width/2 + moving.width/2
      && moving.y - fixed.y < fixed.height/2 + moving.height/2
      && fixed.y - moving.y < fixed.height/2 + moving.height/2) {
    return true;
  }
  else {
    return false;
  }
  }