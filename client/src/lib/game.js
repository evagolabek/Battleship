export const checkBoat = (boat) => {
  return true
}

export const gameStateToBoatNumber = (gameState) => {
  switch(gameState) {
    case "addBoat1": return 1;
    case "addBoat2": return 2;
    case "addBoat3": return 3;
    case "addBoat4": return 4;
    case "addBoat5": return 5;
    default: return 0;
  }
}
