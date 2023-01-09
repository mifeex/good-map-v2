const cordsParser = (cords: string) => {
    const landNlat = cords.split(',');
    const numericLand = Number(landNlat[0]) || 48.70805;
    const numericLat = Number(landNlat[1]) || 44.5133;
    
    return [
        numericLand,
        numericLat
    ]
}

export default cordsParser;