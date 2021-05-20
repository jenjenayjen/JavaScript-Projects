//step 99
function BTS() {
    var RM = {
            name: "Kim Namjoon",
            height: 181,
            year: 1994
        },
        Jin = {
            name: "Kim Seokjin",
            height: 179,
            year: 1992
        },
        Suga = {
            name: "Min Yoongi",
            height: 176,
            year: 1993
        },
        Jhope = {
            name: "Jung Hoseok",
            height: 177,
            year: 1994
        },
        Jimin = {
            name: "Park Jimin",
            height: 175,
            year: 1995
        },
        V = {
            name: "Kim Taehyung",
            height: 179,
            year: 1995
        },
        Jungkook = {
            name: "Jeon Jungkook",
            height: 178,
            year: 1997
                //}, //if there is a KVP with the same key it will run the latest one
                //RM = { 
                //    name: "God of destruction",
                //    height: 181,
                //    year: 1994
        };

    // document.getElementById("dictionary").innerHTML = RM.name;
    //step 103
    delete RM.year;
    document.getElementById("dictionary").innerHTML = RM.year;
}