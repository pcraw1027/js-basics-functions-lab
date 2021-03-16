// Code your solution in this file!

function distanceFromHqInBlocks(pickUp) {
    let blocksNum = Math.abs(42 - parseInt(pickUp)); 
    //blocksNum = pickUp - 42;
    return blocksNum;
}

function distanceFromHqInFeet(beginBlock) {
    let feetDist = (Math.abs(beginBlock - 42)*264)
    //let feetDist = (beginBlock - destBlock)*264
    return feetDist;
}

function distanceTravelledInFeet(beginBlock, destBlock) {
    let feetDist = (Math.abs(beginBlock - destBlock)*264)
    //let feetDist = (beginBlock - destBlock)*264
    return feetDist; 
}

function calculatesFarePrice(beginBlock, destBlock) {
    let tripDistance = (Math.abs(beginBlock - destBlock)*264);
    let tripFare = 0;
    if (tripDistance <= 400) {
        tripFare = 0
      } else if (tripDistance > 2500) {
        tripFare = "cannot travel that far"
      } else if (tripDistance > 2000) {
        tripFare = 25
      } else {
        tripFare = (0.02 * (tripDistance - 400))   
      }
      return tripFare;
}