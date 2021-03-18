import { Cashiers } from './interfaces.ts';
import { Sex, Shift, DayOfWeek } from './const.ts';

export const cashiers: Cashiers = {
  1: {
    id: 1,
    name: 'Bred',
    age: 23,
    sex: Sex.Male,
    shop: {
      name: 'ATB',
      address: 'Vulytsya Vesnyana, Boryslav, Lviv Oblast, 82300',
    },
    yearsOfExperience: 12,
    shopsOfExperience: [{
      name: 'Arsen',
      address: 'Boryslav, Lviv Oblast, 82300',
    }, {
      name: 'Silpo',
      address: 'Vulytsya Vesn, Boryslav, Lviv Oblast, 82300',
    },
    ],
    cashRegister: 1,
    schedule: [[DayOfWeek[1], Shift.Day], [DayOfWeek[2], Shift.Night], [DayOfWeek[4],
      Shift.Day], [DayOfWeek[5], Shift.Day], [DayOfWeek[6], Shift.Night],
    [DayOfWeek[7], Shift.Day]],
  },
  2: {
    id: 2,
    name: 'Nataly',
    age: 43,
    sex: Sex.Female,
    shop: {
      name: 'ATB',
      address: 'Vulytsya Zolota, 7, Brody, Lviv Oblast, 80601',
    },
    yearsOfExperience: 2,
    shopsOfExperience: [{
      name: 'Silpo',
      address: 'Vulytsya Vesnyana, Boryslav, Lviv Oblast, 82300',
    }, {
      name: 'ATB',
      address: 'Vulytsya Vesn, Lviv , 82300',
    },
    ],
    cashRegister: 3,
    schedule: [[DayOfWeek[1], Shift.Night], [DayOfWeek[2], Shift.Day],
      [DayOfWeek[3], Shift.Day], [DayOfWeek[6], Shift.Night],
      [DayOfWeek[7], Shift.Day]],
  },
  3: {
    id: 3,
    name: 'Ted',
    age: 33,
    sex: Sex.Male,
    shop: {
      name: 'ATB',
      address: 'Naberezhna im. Vasylya Stefanyka St, 32, Ivano-Frankivsk, Ivano-Frankivsk Oblast, 76000',
    },
    yearsOfExperience: 14,
    shopsOfExperience: [{
      name: 'Arsen',
      address: 'Vulytsya Resnyana, Ivano-Frankivsk Oblast, 82300',
    }, {
      name: 'ATB',
      address: 'Vulytsya Vesnyana, Boryslav, Lviv Oblast, 82300',
    },
    ],
    cashRegister: 2,
    schedule: [[DayOfWeek[1], Shift.Day], [DayOfWeek[2], Shift.Night], [DayOfWeek[3],
      Shift.Day], [DayOfWeek[5], Shift.Day], [DayOfWeek[6], Shift.Night],
    [DayOfWeek[7], Shift.Day]],
  },
  4: {
    id: 4,
    name: 'Taniy',
    age: 19,
    sex: Sex.Male,
    shop: {
      name: 'ATB',
      address: 'Shevenka, 100, Lviv Oblast',
    },
    yearsOfExperience: 4,
    shopsOfExperience: [{
      name: 'FSF',
      address: 'Vulytsya Vesnyana, Boryslav, Lviv Oblast, 82300',
    }, {
      name: 'ATB',
      address: 'Vulytsya Vesnyana, Boryslav, Lviv Oblast, 82300',
    },
    ],
    cashRegister: 3,
    schedule: [[DayOfWeek[1], Shift.Night], [DayOfWeek[2], Shift.Night],
      [DayOfWeek[3], Shift.Day], [DayOfWeek[4], Shift.Night],
      [DayOfWeek[5], Shift.Day], [DayOfWeek[6], Shift.Night]],
  },
  5: {
    id: 5,
    name: 'Tonia',
    age: 46,
    sex: Sex.Female,
    shop: {
      name: 'ATB',
      address: 'Shevenka, 100, Lviv Oblast',
    },
    yearsOfExperience: 3,
    shopsOfExperience: [{
      name: 'Silpo',
      address: 'Vulytsya Vesnyana, Lviv , 82300',
    }, {
      name: 'Arsen',
      address: 'Vulytsya Dana, Boryslav, Lviv Oblast, 82300',
    },
    ],
    cashRegister: 5,
    schedule: [[DayOfWeek[1], Shift.Night], [DayOfWeek[2], Shift.Night], [DayOfWeek[3],
      Shift.Day], [DayOfWeek[4], Shift.Day], [DayOfWeek[5], Shift.Night],
    [DayOfWeek[7], Shift.Day]],
  },
};


