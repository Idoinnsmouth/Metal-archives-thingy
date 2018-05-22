class run {
    constructor(){
        this._bands = {};
        this.call(this.bands);
    }

    set bands(data) {
        for (let i in data) {
            this._bands[i] = ({
                'name': data[i][0],
                'genre': data[i][1],
                'form': data[i][2],
                'status': data[i][3]
            })
        }
    }

    //call all bands data
    call(callback){
        $.ajax({
            url: "test.json",
            method: "get",
            success: (e) => {
                this.bands = e.aaData;
            }
        })
    }

    //choose random band
    rndband(){
        let result = null;
        let count = 0;
        for(let i in this._bands) {
            if(Math.random() < 1/++count) {
                result = i;
            }
        }
        this.dump(this._bands[result]);
    }

    dump(band){
        $('.band').empty();
        $(`<div><h3>${band.name}</h3>
            <p>Genre: ${band.genre}</p>
            <p>From: ${band.form}</p>
            <p>Status: ${band.status}</p>
        </div>`).appendTo('.band');
    }
}

//https://www.metal-archives.com/browse/ajax-country/c/IL/json

