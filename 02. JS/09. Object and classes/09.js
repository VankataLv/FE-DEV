function solve(arrSongs) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let songsNum = arrSongs.shift();
    let userQuery = arrSongs.pop();
    let songs = []

    for (let i = 0; i < songsNum; i++) {
        let [typeCurSong, nameCurSong, lengthCurSong] = arrSongs[i].split("_");
        let curSong = new Song(typeCurSong, nameCurSong, lengthCurSong);
        songs.push(curSong)
    }

    for (let song of songs) {

        if (userQuery == "all") {
            console.log(song.name)
        }
        else if (userQuery == song.typeList) {
            console.log(song.name)
        }
    }
}

// solve([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite'])
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])