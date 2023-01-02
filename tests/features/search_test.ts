Feature('상품 검색');

Scenario('제목으로 검색', ({ I }) => {
  // TODO: DB 세팅

  I.amOnPage('/');

  I.fillField('검색어', 'Java');
  I.pressKey('Enter');

  I.see('Effective Java');
});
