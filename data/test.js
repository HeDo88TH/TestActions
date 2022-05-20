
var count = 100000;
var luckperc = 0.5;

var lst = [];

for (var n = 0; n < count; n++) {
    
    var luck = luckperc * Math.random();
    var skill = (1 - luckperc) * Math.random();

    lst.push({
        score: luck + skill,
        skill: (skill / (1 - luckperc)),
        luck: (luck / luckperc)
    });
}

lst.sort((a, b) => b.score - a.score);

lst = lst.slice(0, 10);

console.table(lst);

