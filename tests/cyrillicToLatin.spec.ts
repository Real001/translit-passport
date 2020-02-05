import { expect } from 'chai'
import translit from '../index';

describe('cyrillicToLatin', () => {
  it('translit russian word', () => {
    const word = 'Программирование';
    expect(translit.cyrillicToLatin(word)).to.be.equal('Programmirovanie');
  });

  it('translit full name ',  () => {
    const fullName = 'Пахальчук Михаил Викторианович';
    expect(translit.cyrillicToLatin(fullName)).to.be.equal('Pakhalchuk Mikhail Viktorianovich');
  });

  it('translit sentence ', () =>{
    const sentence = 'Здесь нужно иметь в виду, что общие синтаксические правила работают и так.';
    expect(translit.cyrillicToLatin(sentence)).to.be.equal('Zdes nuzhno imet v vidu, chto obshchie sintaksicheskie pravila rabotaiut i tak.');
  });

});