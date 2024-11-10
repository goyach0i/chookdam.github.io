console.clear();

function Popup_login() {
  $('.login').click(function () {
    $('.popup-login').addClass('active');
  });

  $('.popup-bg').click(function () {
    $('.popup-login').removeClass('active');
  });

  $('.popup-header_btn-close').click(function () {
    $('.popup-login').removeClass('active');
  });
}

Popup_login();

function notice() {
  let table1;
  table1 = {
    tab: '공지사항',
    title: '사이트 오픈 안내',
    writer: 'master',
    viewers: '120',
    date: '2024-11-10',
  };

  let table2;
  table2 = {
    tab: '공지사항',
    title: '사이트 이용 방법 안내',
    writer: 'master',
    viewers: '12',
    date: '2024-11-10',
  };

  $('.notice tbody > tr:first-child  > td:first-child').text(table1.tab);
  $('.notice tbody > tr:first-child  > th').text(table1.title);
  $('.notice tbody > tr:first-child > td:nth-child(3)').text(table1.writer);
  $('.notice tbody > tr:first-child > td:nth-child(4)').text(table1.viewers);
  $('.notice tbody > tr:first-child > td:nth-child(5)').text(table1.date);

  $('.notice tbody > tr:nth-child(2)  > td:first-child').text(table2.tab);
  $('.notice tbody > tr:nth-child(2)  > th').text(table2.title);
  $('.notice tbody > tr:nth-child(2)  > td:nth-child(3)').text(table2.writer);
  $('.notice tbody > tr:nth-child(2)  > td:nth-child(4)').text(table2.viewers);
  $('.notice tbody > tr:nth-child(2)  > td:nth-child(5)').text(table2.date);
}

notice();

function kLeague() {
  let table1;
  table1 = {
    tab: 'K리그',
    title: '수원삼성블루윙즈',
    writer: '수원짱',
    viewers: '10',
    date: '2024-11-10',
  };

  let table2;
  table2 = {
    tab: 'K리그',
    title: '대전하나시티즌',
    writer: '대전짱',
    viewers: '10',
    date: '2024-11-10',
  };

  $('.k-league-tb tbody > tr:first-child  > td:first-child').text(table1.tab);
  $('.k-league-tb tbody > tr:first-child  > th').text(table1.title);
  $('.k-league-tb tbody > tr:first-child > td:nth-child(3)').text(table1.writer);
  $('.k-league-tb tbody > tr:first-child > td:nth-child(4)').text(table1.viewers);
  $('.k-league-tb tbody > tr:first-child > td:nth-child(5)').text(table1.date);

  $('.k-league-tb tbody > tr:nth-child(2)  > td:first-child').text(table2.tab);
  $('.k-league-tb tbody > tr:nth-child(2)  > th').text(table2.title);
  $('.k-league-tb tbody > tr:nth-child(2)  > td:nth-child(3)').text(table2.writer);
  $('.k-league-tb tbody > tr:nth-child(2)  > td:nth-child(4)').text(table2.viewers);
  $('.k-league-tb tbody > tr:nth-child(2)  > td:nth-child(5)').text(table2.date);
}

kLeague();

$('.k-league').click (function () {
  $('.k-league').toggleClass('on')
  $('.k-league-tb').slideToggle(200);
})