let departmentList = [
  {
    departmentName: 'Financial',
    employees:
    [
      {
        name: 'Rose',
        age: 26,
        responsibility: 'Financial director',
        salary: 5600
      },
      {
        name: 'Stevem',
        age: 32,
        responsibility: 'Financial manager',
        salary: 4200
      },
      {
        name: 'Beca',
        age: 26,
        responsibility: 'Financial analyst',
        salary: 2800
      }
    ],
    working: true
  },
  {
    departmentName: 'Expedition',
    employees:
    [
      {
        name: 'Rooper',
        age: 35,
        responsibility: 'Expedition director',
        salary: 5600
      },
      {
        name: 'Maggie',
        age: 22,
        responsibility: 'Expedition manager',
        salary: 4200
      },
      {
        name: 'Thompson',
        age: 41,
        responsibility: 'Expedition analyst',
        salary: 2800
      }
    ],
    working: true
  },
  {
    departmentName: 'Capitation',
    employees:
    [
      {
        name: 'Saory',
        age: 35,
        responsibility: 'Capitation director',
        salary: 5600
      },
      {
        name: 'Silvia',
        age: 22,
        responsibility: 'Capitation manager',
        salary: 4200
      },
      {
        name: 'Sonem',
        age: 41,
        responsibility: 'Capitation analyst',
        salary: 2800
      },
      {
        name: 'Havi',
        age: 41,
        responsibility: 'Trainee Capitation manager',
        salary: 1500
      },
      {
        name: 'Margie',
        age: 25,
        responsibility: 'Capitation analyst',
        salary: 2800
      },
      {
        name: 'Victoria',
        age: 18,
        responsibility: 'Trainee Capitation analyst',
        salary: 1500
      }
    ],
    working: true
  },
]

//Exercício 1
function howManyDepartaments(){
  return departmentList.length
}
console.log(howManyDepartaments(departmentList))

//Exercício 2
function changeDepartamentName(nomeAtual, nomeNovo){
      const department = departmentList.find(d => d.departmentName === nomeAtual);
      if (!department) {
        return 'Department not found'
      }
      department.departmentName = nomeNovo
      return department
    }
console.log(changeDepartamentName('Capitation', 'Human Resources'))

//Exercício 3
function giveTheDepartmentABreak(){
  departmentList.working = !departmentList.working
  return departmentList
}
console.log(giveTheDepartmentABreak())

//Exercício 4
function howManyEmployeesInDepartament(departmentName){
  return employees.length
}
console.log(howManyDepartaments('Financial'))

//Exercício 5
function insertNewEmployeeInDepartment(departmentName){
  departmentList = departmentList.employees.push({name: 'Rose', age: 26, responsibility: 'Financial director', salary: 5600})
  return departmentList
}
console.log(insertNewEmployeeInDepartment('Financial'))