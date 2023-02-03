Feature('상품 검색');

Before(({ I }) => {
  // TODO: DB 세팅
  I.amOnPage('/backdoor/setup-database');
});

Scenario('제목으로 검색', ({ I }) => {
  I.amOnPage('/');

  I.fillField('검색어', 'Java');
  I.pressKey('Enter');

  I.see('Effective Java');
});
