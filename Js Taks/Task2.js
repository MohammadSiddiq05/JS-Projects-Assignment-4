const employees = [
  {
    employeeName: "ahmed raza",
    baseSalary: 85000,
    hoursWorked: 42,
    eligibleForBonus: true
  },
  {
    employeeName: "usman ghani",
    baseSalary: 78000,
    hoursWorked: 38,
    eligibleForBonus: false
  },
  {
    employeeName: "muhammad ali",
    baseSalary: 92000,
    hoursWorked: 45,
    eligibleForBonus: true
  },
  {
    employeeName: "hamza khan",
    baseSalary: 105000,
    hoursWorked: 40,
    eligibleForBonus: false
  },
  {
    employeeName: "saad farooq",
    baseSalary: 89000,
    hoursWorked: 50,
    eligibleForBonus: true
  }
];


function processEmployees(employees) {
  const totalPayroll = employees.map(employee => {
    const formattedName = employee.employeeName
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    let baseSalary = employee.baseSalary;
    let totalSalary = baseSalary;

    if (employee.hoursWorked > 40) {
      const overtimeHours = employee.hoursWorked - 40;
      const hourlyRate = baseSalary / 40;
      const overtimePay = overtimeHours * hourlyRate * 1.5;
      totalSalary += overtimePay;
    }

    switch (employee.eligibleForBonus) {
      case true:
        totalSalary += baseSalary * 0.10;
        break;
      case false:
        break;
    }

    if (totalSalary > 100000) {
      totalSalary *= 0.70; 
    }

    totalSalary = totalSalary.toFixed(2); 

    return {
      name: formattedName,
      totalSalary: `$${totalSalary}`
    };
  });
  return totalPayroll;

}

const result = processEmployees(employees);
console.log(result); 