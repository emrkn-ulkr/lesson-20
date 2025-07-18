function lottery(arreyeEkle) {
    const winners = [];
    let kalanHediye = 11;

    for (let i = 0; i < 5; i++) {
        if (winners.includes(arreyeEkle[i])) continue;
        winners.push(arreyeEkle[i]);
        kalanHediye--;
    }
    console.log(
        'Tebrikler araç kazanan ilk 5 kişi: ' + winners.slice(0, 5).join(',')
    );

    for (let i = 9; i < 50 && i < arreyeEkle.length; i += 10) {
        if (winners.includes(arreyeEkle[i])) continue;
        winners.push(arreyeEkle[i]);
        kalanHediye--;
        console.log('Tebrikler araç kazanan şanslı kişi: ' + arreyeEkle[i]);
    }

    let random = Math.floor(Math.random() * arreyeEkle.length);
    let lastWinner = arreyeEkle[random];
    if (!winners.includes(lastWinner) && kalanHediye === 1) {
        winners.push(lastWinner);
        console.log('Rastgele kazanan kişi : ' + lastWinner);
        return winners;
    }

    
}
lottery(['Emir', 'Sıla', 'Çınar', 'Damla', 'Duygu']);
module.exports = lottery;
