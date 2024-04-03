function solve(initialArr) {
    const initialPieces = Number(initialArr.shift());
    let dbPieces = [];

    function pieceFinder(nameSearched) {
        for (let el of dbPieces) {
            if (el.pieceName === nameSearched) {
                return el
            }
        }
        return null
    }

    class Piece {
        constructor(pieceName, composer, key) {
            this.pieceName = pieceName;
            this.composer = composer;
            this.key = key;
        }
        infoPrinter() {
            return `${this.pieceName} -> Composer: ${this.composer}, Key: ${this.key}`
        }
    }

    for (let i = 0; i < initialPieces; i++) {
        let [piece, composer, key] = initialArr[i].split('|')
        let newPiece = new Piece(piece, composer, key);
        dbPieces.push(newPiece);
    }

    for (let i = initialPieces; i < initialArr.length; i++) {
        let [cmd, piece, thirdToken, forthToken] = initialArr[i].split('|')
        if (cmd === "Stop") {
            for (let elObj of dbPieces) {
                console.log(elObj.infoPrinter())
            }
        }
        else if (cmd === "Add") {
            if (!pieceFinder(piece)) {
                let newPiece = new Piece(piece, thirdToken, forthToken);
                dbPieces.push(newPiece);
                console.log(`${piece} by ${thirdToken} in ${forthToken} added to the collection!`)
            }
            else {
                console.log(`${piece} is already in the collection!`)
            }
        }
        else if (cmd === "Remove") {
            if (pieceFinder(piece)) {
                const index = dbPieces.indexOf(pieceFinder(piece));
                if (index !== -1) {
                    dbPieces.splice(index, 1);
                }
                else {
                    dbPieces.pop();
                }
                console.log(`Successfully removed ${piece}!`)
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
        else if (cmd === "ChangeKey") {
            if (pieceFinder(piece)) {
                pieceFinder(piece).key = thirdToken;
                console.log(`Changed the key of ${piece} to ${thirdToken}!`)
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }
}



solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)