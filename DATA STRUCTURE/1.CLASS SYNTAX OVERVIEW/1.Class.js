class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.score = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName} and you are ${this.year} year old`;
  }
  markLte() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `You are explled!`;
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }
  addScore(score) {
    this.score.push(score);
    return this.score;
  }
}

let firstStudent = new Student("Manish", "Mehta", 26);
console.log(firstStudent.firstName);
console.log(firstStudent.fullName());
console.log(firstStudent.markLte());
console.log(firstStudent.markLte());
console.log(firstStudent.markLte());
console.log(firstStudent.addScore(56));
console.log(firstStudent.addScore(98));
