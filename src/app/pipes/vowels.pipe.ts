import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowels'
})
export class VowelsPipe implements PipeTransform {

    private changesVowels: {[vocal:string]:string} = {
      'a':'1',
      'e':'2',
      'i':'3',
      'o':'4',
      'u':'5'
    }

  transform(value: string): string {
    return value.replace(/[aeiou]/g, vocal => this.changesVowels[vocal])
  }

}
