
/*export default class MyDate extends Date {

  public toISOStringLocal() {
    function pad(number: number) {
        if ( number < 10 ) {
          return '0' + number;
        }
        return number;
    }
    console.log(this.getFullYear());
    
    return this.getFullYear() +
      '-' + pad( this.getMonth() + 1 ) +
      '-' + pad( this.getDate() ) +
      'T' + pad( this.getHours() ) +
      ':' + pad( this.getMinutes() ) +
      ':' + pad( this.getSeconds() ) +
      '.' + (this.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
      'Z';
  }
}*/


export default function toISOStringLocal(date: Date) {
  function pad(number: number) {
    if ( number < 10 ) {
      return '0' + number;
    }
    return number;
   }
   return date.getFullYear() +
      '-' + pad( date.getMonth() + 1 ) +
      '-' + pad( date.getDate() ) +
      'T' + pad( date.getHours() ) +
      ':' + pad( date.getMinutes() ) +
      ':' + pad( date.getSeconds() ) +
      '.' + (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
      'Z';
}
