
function determineBonus(employees) {
  let bonuses = []
  let today = Date.now()

  for(let i = 0; i <= employees.length - 1; i++) {
    //Variable to hold the quantity of bonus to give (1%, 2%....5%)
    let bonusAmount = 0
    //The amount of time worked at the company in miliseconds
    let timeWorked = today - employees[i].hireDate
    //Time worked converted to years (miliseconds -> seconds * seconds -> minutes * minutes -> hours * hours -> days * days -> years)
    let yearsWorked = timeWorked / (1000 * 60 * 60 * 24 * 365)
    //Years rounded
    let yearsRounded = Math.floor(yearsWorked)
    //Determine the raw amount and round to a whole number (integer)
    let rawBonus = parseInt(yearsRounded/3)
    //reassign the bonus amount to be the lower number between rawBonus and 5. Then turn into a percentage
    bonusAmount = Math.min(rawBonus, 5)/100
    // Calculate the bonus for the given employee (which one we are currently on according to i)
    let bonus = employees[i].salary * bonusAmount
    // Round the decimal places to 2...but this makes it become a string
    let bonusRounded = bonus.toFixed(2)
    //Convert the string to a number, specifically a number with decimals or a float
    let bonusRoundedNumber = parseFloat(bonusRounded)
    //Add that number to the bonuses array by pushing it onto the end
    bonuses.push(bonusRoundedNumber)



     // An alterative approach
    // if(yearsRounded >= 15) {
    //   bonusAmount = .05
    //   bonuses.push(parseFloat((employees[i].salary * .05).toFixed(2)))
    // } else if(yearsRounded >= 12) {
    //   bonusAmount = .04
    //   bonuses.push(employees[i].salary * .04)
    // } else if(yearsRounded >= 9) {
    //   bonusAmount = .03
    //   bonuses.push(employees[i].salary * .03)
    // } else if(yearsRounded >= 6) {
    //   bonusAmount = .02
    //   bonuses.push(parseFloat((employees[i].salary * .02).toFixed(2)))
    // } else if(yearsRounded >= 3) {
    //   bonusAmount = .01
    //   bonuses.push(employees[i].salary * .01)
    // }
  }
  //Write a loop to calculate each employee's bouns
  return bonuses
  //For every 3 years the person has been employeed, increase their
  //salary by 1 %, but do not increase anyones over 5 %


}

function determine401kAmount(employees, percent) {
  let retirement = []

  for(let i = 0; i <= employees.length - 1; i++) {
    // Calculate by converting percent into decimal percent and times it by salary
    // Divide by 12 months (error on my part in real life should be 24, as paid twice a month)
    let rawAmount = (employees[i].salary * (percent/100))/12
    // Solve rounding issues, but again this turns it into a string
    let roundedAmount = rawAmount.toFixed(2)
    //Convert it back to a number with decimals
    let roundedAmountNumber = parseFloat(roundedAmount)
    //Add ther value onto the array
    retirement.push(roundedAmountNumber)
  }
  //Calculate the amount reduced from each check to put into
  //the employee's 401K it should be the <percent> over the
  //course of the year
  return retirement
}

function main() {
  //Here's a sample piece of data
  let employees = [{
    name: 'Jane',
    salary: 152178,
    hireDate: new Date('December 17, 1995 03:24:00')
  }, {
    name: 'John',
    salary: 83210,
    hireDate: new Date('May 28, 2011 08:24:00')
  }]

  const bonus = determineBonus(employees)
  const retirement = determine401kAmount(employees, 3)

  if (typeof bonus === 'undefined' || bonus.length === 0 || bonus[0] !== 7608.90 || bonus[1] !== 1664.2) {
    console.log("You have an error with your bonus function")
  }
  if (typeof retirement === 'undefined' || retirement.length === 0 || retirement[1] !== 208.02) {
    console.log("You have an error with your 401k function")
  }
}

main()
