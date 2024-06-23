'use strict';

{
  function check() {
    // 残り時間 = 終了時刻 - 現在時刻
    let countdown = endTime - new Date().getTime();

    
    // ３．タイマーの終了　
    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = 5 * 1000;
      // タイマーが終了したときに再び押せるようにする（disabledを無効にする）
      btn.disabled = false;
      btn.classList.remove('inactive');
    }
    
    const totalSeconds = Math.floor(countdown / 1000);
    // 80秒　→　1分20秒
    // 80 ÷ 60 = 1 余り20
    // 80 / 60 = 1.33333.. →1
    // 80 % 60 = 20

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // 2桁に表示するメソッドpadStartは文字列にしか使えないので、Stringで文字列に変換する
    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');


  timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;
  let intervalId;

  // （例）６０秒タイマー実装の流れ
  // １．終了時刻を求める　開始時刻＋６０秒
  btn.addEventListener('click', () => {
    endTime = new Date().getTime() + 5 * 1000;

    // 一度ボタンをクリックしたらタイマーが終了するまでボタンを押せないようにする
    btn.disabled = true;
    btn.classList.add('inactive');


    

    // ２．残り時間を求める　終了時刻ー現在時刻　（くりかえす）
    // 第１引数に繰り返したい関数、第２引数に繰り返す間隔（ミリ秒）
    intervalId = setInterval(check, 100);
  });


  // ３．タイマーの終了　現在時刻が終了時刻を超えたら（０より小さくなったら）タイマー終了
}